import React, { useContext, useEffect, useState } from 'react';
import { graphqlOperation, API } from 'aws-amplify';
import DropConsole from '../../../utils/DropConsole';
import { listQuestions as ListQuestions } from '../../../graphql/queries';
import { HIGH } from '../../../utils/DropConsole/CONSTANTS';
import { FormQuestionsContext } from '../../../Context/FormQuestions/Provider';
import Spinner from '../../../Components/Spinner';
import { ADD_QUESTIONS } from '../../../Context/FormQuestions/ActionTypes';
import YesNoQuestion from '../Components/YesNoQuestion';
import './styles.scss';

const InitialFormPage = () => {
  const { state, dispatch } = useContext(FormQuestionsContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getQuestions = async () => {
    try {
      setLoading(true);
      if (state.length === 0) {
        const apiQuestions = await API.graphql(graphqlOperation(ListQuestions));
        if (apiQuestions && apiQuestions.data
          && apiQuestions.data.listQuestions
          && apiQuestions.data.listQuestions.items) {
          const questionsList = apiQuestions.data.listQuestions.items;
          dispatch({ type: ADD_QUESTIONS, payload: questionsList });
        }
      }
      setError(false);
    } catch (e) {
      if (e instanceof Error) {
        DropConsole(HIGH, e.message);
        setError(true);
      }
      DropConsole(HIGH, e);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (

    <main className="content-container">
      <div className="content-wrapper">
        <h2 className="form-start-title">Lets start</h2>
        {loading && (
        <div className="spinner-wrapper">
          <Spinner />
        </div>
        )}
        {(!loading && !error) && (
        <div className="general-questions-container">
          {
          state.map(
            (item) => (
              <YesNoQuestion
                key={item.id}
                question={item.question}
                questionId={item.id}
                radioGroup={item.id}
              />
            ),
          )
        }
        </div>
        )}
        {(!loading && error) && (
        <div>
          <h2>Error</h2>
        </div>
        )}
      </div>
    </main>
  );
};

export default InitialFormPage;
