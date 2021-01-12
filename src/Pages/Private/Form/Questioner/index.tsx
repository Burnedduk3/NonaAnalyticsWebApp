import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import dropConsole, {LogLevel} from '../../../../utils/DropConsole';
import TextInputComponent from '../Components/TextInputQuestion';
import ComboBoxComponent from '../Components/ComboBoxQuestion';
import YesNoQuestion from '../Components/YesNoQuestion';
import Spinner from '../../../../Components/Spinner';
import LeftBar from '../Components/LeftBar/src';
import {createFormQuestion} from '../../../../graphql/mutations';
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
  GET_SECTIONS,
  NEXT_SECTION,
} from '../../../../Context/FormQuestions/ActionTypes';
import {fetchQuestions} from './FetchQuestions';
import {RouteComponentProps} from 'react-router';
import {TQuestionerRoute} from '../../../../navigation/interfaces/interface';
import {
  IQuestion,
  ISection, ISubSection,
} from '../../../../Context/FormQuestions/interface';
import {useHistory} from 'react-router-dom';
import {useUserState} from '../../../../Context/UserContext/Provider';
import LadderQuestion from '../Components/LadderQuestion';
import * as LadderConstants from '../Components/LadderQuestion/CONSTANTS';



const FormPage:React.FC<RouteComponentProps<TQuestionerRoute>> = (
    {match}:RouteComponentProps<TQuestionerRoute>,
): JSX.Element =>{
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [formQuestions, setFormQuestions] = useState<any[]>([]);
  const [responseState, setResponseState] = useState({});
  const [
    firstTimeFetchingQuestions,
    setFirstTimeFetchingQuestions,
  ] = useState<boolean>(true);
  const ApplicationState = useApplicationState();
  const FormApplicationState = useFormQuestionState();
  const userState = useUserState();
  const {params} = match;
  const history = useHistory();
  
  useEffect( () => {
    ApplicationState?.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    ApplicationState?.appStateDispatch({type: HIDE_HEADER, payload: undefined});
    setLoading(true);
    try {
      fetchQuestions(
          FormApplicationState?.formState,
          firstTimeFetchingQuestions,
      ).then((data: any) =>{
        FormApplicationState?.formStateDispatch(
            {
              type: GET_SECTIONS,
              payload: {
                fetchedSections: data,
              },
            });
        setQuestioner();
      });
      setFirstTimeFetchingQuestions(false);
      setFormQuestions([]);
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, [params]);

  const setQuestioner = () =>{
    if (FormApplicationState &&
        FormApplicationState.formState &&
        FormApplicationState.formState.sections &&
        FormApplicationState?.formState.sections?.length > 0) {
      const questioner = FormApplicationState?.formState.sections;
      if (questioner) {
        questioner.map((section:ISection) =>{
          if (section.name === params.section) {
            section.subSections.map((subSection: ISubSection)=>{
              if (subSection.name === params.subSection) {
                const showableQuestions:Array<any> = [];
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
    let nextStack: number = params.stack? parseInt(params.stack) : 0;
    let nextSubSection: string = params.subSection? params.subSection : '';
    await Object.entries(responseState).map(async (item) => {
      try {
        await API.graphql(
            graphqlOperation(
                createFormQuestion,
                {
                  input: {
                    // eslint-disable-next-line max-len
                    formQuestionFormId: userState?.userState.currentForm, // TODO HERE
                    formQuestionQuestionId: item[0],
                    response: item[1],
                  },
                },
            ),
        );
        setResponseState({});
      } catch (saveToDBError) {
        if (saveToDBError instanceof Error) {
          dropConsole(LogLevel.HIGH, saveToDBError.message);
        }
      }
    });
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
        currentSection.subSections.map((subSection: ISubSection, index)=>{
        });
        history.push(
            // eslint-disable-next-line max-len
            `/questioner/${FormApplicationState.formState.currentSection?.name}/${nextSubSection}/${nextStack}`,
        );
      }
    }
  };

  return (
    <main className="content-container">
      <LeftBar />
      <div className="form-container">
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
                        <div key={item.id} className="yes-no-container-comp">
                          <YesNoQuestion
                            question={item.question}
                            questionId={item.id}
                            radioGroup={item.id}
                            setResponse={setResponseState}
                            currentState={responseState}
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
                        />
                      );
                    }
                    if (item.category.name === 'Open') {
                      return (
                        <TextInputComponent
                          placeholder="type"
                          key={item.id}
                          question={item.question}
                          questionId={item.id}
                          setResponse={setResponseState}
                          currentState={responseState}
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
                          setResponse={setResponseState}
                          currentState={responseState}
                          values={
                            item.items === null?
                                LadderConstants.default.defaultValue:
                                item.items
                          }
                        />
                      );
                    }
                    return <></>;
                  },
              )
            }
          </>
        )}
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
