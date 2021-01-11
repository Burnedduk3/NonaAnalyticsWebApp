import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import dropConsole, {LogLevel} from '../../../../utils/DropConsole';
import TextInputComponent from '../Components/TextInputQuestion';
import ComboBoxComponent from '../Components/ComboBoxQuestion';
import YesNoQuestion from '../Components/YesNoQuestion';
import Spinner from '../../../../Components/Spinner';
import LeftBar from '../Components/LeftBar';
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
import {GET_SECTIONS} from '../../../../Context/FormQuestions/ActionTypes';
import {fetchQuestions} from './FetchQuestions';
import {RouteComponentProps} from 'react-router';
import {TQuestionerRoute} from '../../../../navigation/interfaces/interface';
import {
  ISection,
} from '../../../../Context/FormQuestions/interface';


const FormPage:React.FC<RouteComponentProps<TQuestionerRoute>> = (
    {match}:RouteComponentProps<TQuestionerRoute>,
): JSX.Element =>{
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [formQuestions, setFormQuestions] = useState<any[]>([]);
  const [responseState, setResponseState] = useState({});
  const ApplicationState = useApplicationState();
  const FormApplicationState = useFormQuestionState();
  const {params} = match;

  useEffect( () => {
    ApplicationState?.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    ApplicationState?.appStateDispatch({type: HIDE_HEADER, payload: undefined});
    setLoading(true);
    try {
      fetchQuestions(FormApplicationState?.formState).then((data) =>{
        FormApplicationState?.formStateDispatch(
            {
              type: GET_SECTIONS,
              payload: {
                newState: data,
              },
            });
        setQuestioner();
      });
      setFormQuestions([]);
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  }, []);

  const setQuestioner = () =>{
    if (FormApplicationState &&
        FormApplicationState.formState &&
        FormApplicationState.formState.sections &&
        FormApplicationState?.formState.sections?.length > 0) {
      const questioner = FormApplicationState?.formState.sections;
      if (questioner) {
        questioner.map((section:ISection) =>{
          if (section.name === params.section) {
            section.subSections.items.map((subSection: any)=>{
              if (subSection.name === params.subSection) {
                console.log(subSection);
                const showableQuestions:Array<any> = [];
                subSection.questions.items.map((question:any)=>{
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
  const SaveToDataBase = async () => {
    await Object.entries(responseState).map(async (item) => {
      try {
        await API.graphql(
            graphqlOperation(
                createFormQuestion,
                {
                  input: {
                    formQuestionFormId: '2885c437-2fe1-4898-b437-3002c8c612a8',
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
        console.log(saveToDBError);
      }
    });
  };
  console.log(responseState);
  return (
    <main className="content-container">
      <LeftBar />
      <div className="form-container">
        {loading && (
          <div className="spinner-wrapper">
            <Spinner />
          </div>
        )}
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
