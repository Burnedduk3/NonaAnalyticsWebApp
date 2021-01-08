import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {getQuestionsOfASection} from '../OwnQueries';
import dropConsole, {LogLevel} from '../../../../utils/DropConsole';
import TextInputComponent from '../Components/TextInputQuestion';
import ComboBoxComponent from '../Components/ComboBoxQuestion';
import YesNoQuestion from '../Components/YesNoQuestion';
import Spinner from '../../../../Components/Spinner';
import LeftBar from '../Components/LeftBar';
import {createFormQuestion} from '../../../../graphql/mutations';


const FormPage:React.FC = (): JSX.Element =>{
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [formQuestions, setFormQuestions] = useState<any[]>([]);

  const [responseState, setResponseState] = useState({});


  const getQuestions = async ():Promise<void> => {
    try {
      setLoading(true);
      const apiQuestions:any = await API.graphql(
          graphqlOperation(
              getQuestionsOfASection,
              {
                filter: {
                  name: {
                    eq: 'Demographics',
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
      console.log(item);
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
        setResponseState({});
      } catch (saveToDBError) {
        if (saveToDBError instanceof Error) {
          dropConsole(LogLevel.HIGH, saveToDBError.message);
        }
        console.log(saveToDBError);
      }

      return 0;
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
