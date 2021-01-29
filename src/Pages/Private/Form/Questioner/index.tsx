import React, {useEffect, useState} from 'react';
import dropConsole, {LogLevel} from '../../../../utils/DropConsole';
import TextInputComponent from '../Components/TextInputQuestion';
import ComboBoxComponent from '../Components/ComboBoxQuestion';
import YesNoQuestion from '../Components/YesNoQuestion';
import Spinner from '../../../../Components/Spinner';
import LeftBar from '../Components/LeftBar/src';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {
  HIDE_FOOTER,
  HIDE_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';

import './styles.scss';
import {useFormQuestionState} from '../../../../Context/FormQuestions/Provider';
import {
  ADD_QUESTION_TO_ANSWERED,
  GET_SECTIONS,
  NEXT_SECTION,
} from '../../../../Context/FormQuestions/ActionTypes';
import {fetchQuestions} from '../api/FetchQuestions';
import {RouteComponentProps} from 'react-router';
import {TQuestionerRoute} from '../../../../navigation/interfaces/interface';
import {
  IFormQuestionsContextState,
  IQuestion,
  ISection, ISubSection,
} from '../../../../Context/FormQuestions/interface';
import {useHistory} from 'react-router-dom';
import {useUserState} from '../../../../Context/UserContext/Provider';
import LadderQuestion from '../Components/LadderQuestion';
import * as LadderConstants from '../Components/LadderQuestion/CONSTANTS';
import saveQuestionsToDynamo from '../api/Dynamo/SaveQuestionsToDynamo';
import
saveQuestionsToAurora,
{
  ISaveDataAuroraParams,
}
  from '../api/aurora/SaveQuestionsToAurora';
import RadioButtonGroup from '../Components/RadioButtonGroup';
import CheckBoxComponent from '../Components/CheckBoxQuestion';
import {IQuestionerState} from './interface';
import MultiLadderQuestion from '../Components/MultiLadder';
import ImageOneSelection from '../Components/ImageQuestion';
import updateFormProgress from '../api/Dynamo/UpdateFormProgress';
import {
  SEARCH_LOCAL_STORAGE,
} from '../../../../Context/UserContext/ActionTypes';

// eslint-disable-next-line max-len
const FormPage:React.FC<RouteComponentProps<TQuestionerRoute>> = ({match}:RouteComponentProps<TQuestionerRoute>): JSX.Element =>{
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [formQuestions, setFormQuestions] = useState<Array<IQuestion>>([]);
  const [responseState, setResponseState] = useState<IQuestionerState>({});
  const ApplicationState = useApplicationState();
  const FormApplicationState = useFormQuestionState();
  const userState = useUserState();
  const {params} = match;
  const history = useHistory();

  useEffect( () => {
    ApplicationState.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    ApplicationState.appStateDispatch({type: HIDE_HEADER, payload: undefined});
    userState.userStateDispatch({
      type: SEARCH_LOCAL_STORAGE,
      payload: undefined,
    });
    setLoading(true);
    if (
      FormApplicationState &&
        FormApplicationState.formState.sections?.length === 0
    ) {
      try {
        fetchQuestions().then(
            (data: IFormQuestionsContextState | undefined) => {
              console.log('then', data);
              FormApplicationState.formStateDispatch(
                  {
                    type: GET_SECTIONS,
                    payload: {
                      fetchedSections: data,
                    },
                  });
              setLoading(false);
              setError(false);
            });
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(()=>{
    setQuestioner();
  }, [params]);

  useEffect(
      ()=>{
        setQuestioner();
      },
      [loading],
  );

  const setQuestioner = () =>{
    if (FormApplicationState &&
        FormApplicationState.formState &&
        FormApplicationState.formState.sections &&
        FormApplicationState.formState.sections.length > 0) {
      const questioner = FormApplicationState.formState.sections;
      if (questioner) {
        questioner.map((section:ISection) =>{
          if (section.name === params.section) {
            section.subSections.map((subSection: ISubSection)=>{
              if (subSection.name === params.subSection) {
                const showableQuestions:Array<IQuestion> = [];
                subSection.questions.map((question: IQuestion)=>{
                  if (question.stack.toString() === params.stack) {
                    showableQuestions.push(question);
                  }
                });
                setFormQuestions(showableQuestions);
              }
            });
          }
        });
      }
    }
  };
  // TODO Send data to the athena database
  // TODO also in the graphql playground create a form and paste the ID
  const SaveToDataBase = async () => {
    const {stack, subSection, section} = params;
    if (stack && section && subSection) {
      const functionParams: ISaveDataAuroraParams = {
        stack: stack,
        section: section,
        subSection: subSection,
      };
      if (userState) {
        saveQuestionsToAurora(
            functionParams,
            responseState,
            userState.userState.currentForm,
        );
      }
    }
    let nextStack: number = stack? parseInt(stack) : 0;
    let nextSubSection: string = subSection? subSection : '';
    await Object.entries(responseState).map(async (item) => {
      try {
        const [questionID, questionResponse] = item;
        if (FormApplicationState) {
          FormApplicationState
              .formStateDispatch({
                type: ADD_QUESTION_TO_ANSWERED,
                payload: {
                  questionToAdd: {
                    answer: questionResponse.response,
                    id: questionID,
                  },
                },
              },
              );
        }

        saveQuestionsToDynamo(
            questionID,
            questionResponse.response,
            userState?.userState.currentForm,
        );

        setResponseState({});
      } catch (saveToDBError) {
        if (saveToDBError instanceof Error) {
          dropConsole(LogLevel.HIGH, saveToDBError.message);
        }
      }
    });
    if (FormApplicationState) {
      updateFormProgress(
          userState?.userState.currentForm,
          FormApplicationState.formState.currentProgress,
      );
    }
    if (FormApplicationState && FormApplicationState.formState) {
      const currentSection = FormApplicationState.formState.currentSection;
      if (currentSection && currentSection.subSections) {
        for (
          let index = 0;
          index < currentSection.subSections.length;
          index++
        ) {
          const subSection = currentSection.subSections[index];
          if (params.stack !== undefined) {
            if (
              subSection.maxStack > parseInt(params.stack)) {
              // it changes the stack but not the subsection
              nextStack = parseInt(params.stack) + 1;
              break;
            } else {
              if (index === currentSection.subSections.length - 1 ) {
                // Here it changes the Section
                FormApplicationState.formStateDispatch(
                    {
                      type: NEXT_SECTION,
                      payload: undefined,
                    });
                nextStack = 0;
                if (
                  FormApplicationState &&
                    FormApplicationState.formState &&
                    FormApplicationState.formState.currentSection &&
                    FormApplicationState.formState.currentSection.subSections
                ) {
                  nextSubSection = FormApplicationState.
                      formState.
                      currentSection.
                      subSections[0].
                      name;
                  nextStack = 0;
                  break;
                }
              } else {
                if (subSection.name === params.subSection) {
                  nextSubSection = currentSection.subSections[index + 1].name;
                  nextStack = 0;
                  break;
                }
              }
            }
          }
        }
        if (!(FormApplicationState.formState.currentSection === null)) {
          history.push(
              // eslint-disable-next-line max-len
              `/questioner/${FormApplicationState.formState.currentSection?.name}/${nextSubSection}/${nextStack}`,
          );
        } else {
          history.push('/');
        }
      }
    }
    console.log('Stack:'+ stack + 'Sección:'+ section + 'Sub:'+ subSection);
  };

  return (
    <main className="content-container">
      <LeftBar />
      <div className="form-container">
        {/* eslint-disable-next-line max-len */}
        <div className='questioner-container'>
          {loading && (
            <div className="spinner-wrapper">
              <Spinner />
            </div>
          )}
          {/* eslint-disable-next-line max-len */}
          {(!loading && !error) && (
            <>
              {
                formQuestions.map(
                    (item: any) => {
                      if (item.category.name === 'YesNo') {
                        return (
                        // eslint-disable-next-line max-len
                          <div key={item.id} className="yes-no-container-comp">
                            <YesNoQuestion
                              question={item.question}
                              questionId={item.id}
                              radioGroup={item.id}
                              setResponse={setResponseState}
                              currentState={responseState}
                              order={item.order}
                            />
                          </div>
                        );
                      } if (item.category.name === 'Combo') {
                        return (
                          <ComboBoxComponent
                            key={item.id}
                            question={item.question}
                            questionId={item.id}
                            setResponse={setResponseState}
                            items={item.items}
                            currentState={responseState}
                            order={item.order}
                          />
                        );
                      }
                      if (item.category.name === 'Open') {
                        return (
                          <TextInputComponent
                            placeholder={item.placeHolder}
                            key={item.id}
                            question={item.question}
                            questionId={item.id}
                            setResponse={setResponseState}
                            currentState={responseState}
                            order={item.order}
                          />
                        );
                      }
                      if (item.category.name === 'MultiSelection') {
                        return (
                          <CheckBoxComponent
                            items={item.items}
                            questionId={item.id}
                            question={item.question}
                            setResponse={setResponseState}
                            currentState={responseState}
                            order={item.order}
                          />
                        );
                      }
                      if (item.category.name === 'Ladder') {
                        return (
                          <LadderQuestion
                            key={item.id}
                            questionText={item.question}
                            questionId={item.id}
                            radioGroup={item.id}
                            order={item.order}
                            setResponse={setResponseState}
                            currentState={responseState}
                            values={
                              item.items === null || item.items.length === 0?
                                  LadderConstants.default.defaultValue:
                                  item.items
                            }
                          />
                        );
                      }
                      if (item.category.name === 'RadioGroup') {
                        return (
                          <RadioButtonGroup
                            key={item.id}
                            items={item.items}
                            currentState={responseState}
                            setResponse={setResponseState}
                            question={item.question}
                            questionId={item.id}
                            radioGroup={item.id}
                            order={item.order}
                            stackPhrase={item.stackPhrase}
                          />
                        );
                      }
                      if (item.category.name === 'MultiLadder') {
                        return (
                          <MultiLadderQuestion
                            key={item.id}
                            items={item.items}
                            currentState={responseState}
                            setResponse={setResponseState}
                            question={item.question}
                            questionId={item.id}
                            radioGroup={item.id}
                            stackPhrase={item.stackPhrase}
                            order={item.order}
                          />
                        );
                      }

                      if (item.category.name === 'Images') {
                        return (
                          <ImageOneSelection
                            key={item.id}
                            items={item.items}
                            currentState={responseState}
                            setResponse={setResponseState}
                            question={item.question}
                            questionId={item.id}
                            radioGroup={item.id}
                            imagesPath={item.imagesPath}
                            order={item.order}
                          />
                        );
                      }

                      return <></>;
                    },
                )
              }

            </>
          )}
        </div>
        <div className="buttons-container">
          <button
            className="button next"
            type="button"
            onClick={SaveToDataBase}
          >
            {'NEXT >'}
          </button>
        </div>
      </div>
    </main>
  );
};

export default FormPage;
