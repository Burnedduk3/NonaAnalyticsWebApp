import React, { useState, useContext, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Redirect } from 'react-router';
import { getQuestionsOfASection as GetQuestionsOfASection } from '../../../graphql/OwnQueries';
import { ADD_QUESTIONS, DELETE_QUESTION } from '../../../Context/FormQuestions/ActionTypes';
import DropConsole from '../../../utils/DropConsole';
import { HIGH } from '../../../utils/DropConsole/CONSTANTS';
import { FormQuestionsContext } from '../../../Context/FormQuestions/Provider';
import YesNoQuestion from '../Components/YesNoQuestion';
import Spinner from '../../../Components/Spinner';
import { createFormQuestion as CreateFormQuestions } from '../../../graphql/mutations';
import { UserCurrentFormContext } from '../../../Context/UserCurrentForm/Provider';
import RoutingConstants from '../../../navigation/CONSTANTS/RoutingConstants';
import ComboBoxComponent from '../Components/ComboBoxQuestion';
import TextInputComponent from '../Components/TextInputQuestion';

// eslint-disable-next-line react/prop-types
const Questioner = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { FormQuestionsState, FormQuestionsDispatch } = useContext(FormQuestionsContext);
  const { userCurrentFormState } = useContext(UserCurrentFormContext);
  const [useRedirect, setUseRedirect] = useState(false);

  const [responseState, setResponseState] = useState({});

  const getQuestions = async () => {
    try {
      setLoading(true);
      const apiQuestions = await API.graphql(
        graphqlOperation(
          GetQuestionsOfASection,
          {
            filter: {
              name: {
                // eslint-disable-next-line react/prop-types
                eq: match.params.section,
              },
            },
          },
        ),
      );

      if (apiQuestions && apiQuestions.data
          && apiQuestions.data.listSections
          && apiQuestions.data.listSections.items) {
        const sectionQuestions = apiQuestions.data.listSections.items[0];
        FormQuestionsDispatch({ type: DELETE_QUESTION });
        FormQuestionsDispatch({ type: ADD_QUESTIONS, payload: sectionQuestions.questions.items });
      }
      setLoading(false);
      setError(false);
    } catch (questionsError) {
      if (questionsError instanceof Error) {
        DropConsole(HIGH, questionsError.message);
        setError(true);
      }
      console.log(questionsError);
      setError(true);
    }
    setLoading(false);
  };

  const SaveToDataBase = async () => {
    await Object.entries(responseState).map(async (item) => {
      try {
        await API.graphql(
          graphqlOperation(
            CreateFormQuestions,
            {
              input: {
                formQuestionFormId: userCurrentFormState.id,
                formQuestionQuestionId: item[0],
                response: item[1],
              },
            },
          ),
        );
        setResponseState({});
      } catch (saveToDBError) {
        if (saveToDBError instanceof Error) {
          DropConsole(HIGH, saveToDBError.message);
        } else {
          console.log(saveToDBError);
        }
      }

      setUseRedirect(true);

      return 0;
    });
  };

  useEffect(() => {
    const questionsPromise = getQuestions();
    questionsPromise.then((response) => response);
  }, [match]);

  console.log(responseState);

  return (
    <div className="yes-no-container">
      {loading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
      )}
      {(!loading && !error) && (
      <>
        {
        FormQuestionsState.map(
          (item) => {
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
      <button type="button" onClick={SaveToDataBase}>Start Survey</button>
      {useRedirect && (<Redirect to={`${RoutingConstants.dinamicForm.path}/Demographics`} />)}
    </div>
  );
};
export default Questioner;
