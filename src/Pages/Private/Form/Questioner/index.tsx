import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {getQuestionsOfASection, getSectionsWithQuestions} from '../OwnQueries';
import dropConsole, {LogLevel} from '../../../../utils/DropConsole';
import TextInputComponent from '../Components/TextInputQuestion';
import ComboBoxComponent from '../Components/ComboBoxQuestion';
import YesNoQuestion from '../Components/YesNoQuestion';
import Spinner from '../../../../Components/Spinner';
import LeftBar from '../Components/LeftBar';
import {createFormQuestion} from '../../../../graphql/mutations';
import {getQuestion} from '../../../../graphql/queries';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {
  HIDE_FOOTER,
  HIDE_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';

import './styles.scss';

const FormPage:React.FC = (): JSX.Element =>{
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [formQuestions, setFormQuestions] = useState<any[]>([]);

  const [responseState, setResponseState] = useState({});
  const ApplicationState = useApplicationState();

  useEffect(() => {
    ApplicationState?.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    ApplicationState?.appStateDispatch({type: HIDE_HEADER, payload: undefined});
  }, []);

  const getQuestions = async ():Promise<void> => {
    try {
      setLoading(true);
      const testQuestions: any = await API.graphql(
          graphqlOperation(
              getSectionsWithQuestions,
              {},
          ),
      );
      console.log(testQuestions);
      const apiQuestions:any = await API.graphql(
          graphqlOperation(
              getQuestionsOfASection,
              {
                filter: {
                  name: {
                    eq: 'Health',
                  },
                },
              },
          ),
      );

      if (apiQuestions && apiQuestions.data &&
          apiQuestions.data.listSections &&
          apiQuestions.data.listSections.items) {
        const sectionQuestions = apiQuestions.data.listSections.items[0];
        setFormQuestions(sectionQuestions.questions.items);
      }
      setLoading(false);
      setError(false);
    } catch (questionsError) {
      if (questionsError instanceof Error) {
        dropConsole(LogLevel.HIGH, questionsError.message);
        setError(true);
      }
      setError(true);
    }
    setLoading(false);
  };

  const SaveToDataBase = async () => {
    await Object.entries(responseState).map(async (item) => {
      try {
        await API.graphql(
            graphqlOperation(
                createFormQuestion,
                {
                  input: {
                    formQuestionFormId: '1926620e-d866-409f-b819-f0f7d5fbc839',
                    formQuestionQuestionId: item[0],
                    response: item[1],
                  },
                },
            ),
        );

        const question: any = await API.graphql(
            graphqlOperation(
                getQuestion,
                {
                  id: item[0],
                }),
        );
        if (question && question.data && question.data.getQuestion) {
          const questionDetail = question.data.getQuestion;
          const date = new Date;
          const response = await API.get('athenaConnectApi', '/connect',
              {
                'queryStringParameters':
                    {
                      userid: '1234',
                      category: questionDetail.category.name,
                      answer: item[1],
                      question: questionDetail.id,
                      date: date.getUTCFullYear() + '-' +
                        ('00' + (date.getUTCMonth()+1)).slice(-2) + '-' +
                        ('00' + date.getUTCDate()).slice(-2) + ' ' +
                        ('00' + date.getUTCHours()).slice(-2) + ':' +
                        ('00' + date.getUTCMinutes()).slice(-2) + ':' +
                        ('00' + date.getUTCSeconds()).slice(-2),
                    }
                ,
              },
          );
          console.log(response);
        }
        setResponseState({});
      } catch (saveToDBError) {
        if (saveToDBError instanceof Error) {
          dropConsole(LogLevel.HIGH, saveToDBError.message);
        }
        console.log(saveToDBError);
      }
    });
  };

  useEffect(()=>{
    getQuestions().then();
  }, []);

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