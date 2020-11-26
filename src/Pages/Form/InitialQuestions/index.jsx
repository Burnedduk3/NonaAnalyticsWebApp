import React, {
  useContext, useEffect, useState, useRef,
} from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { Redirect } from 'react-router';
import DropConsole from '../../../utils/DropConsole';
import { listForms as ListForms, getQuestionsOfASection as GetQuestionsOfASection } from '../../../graphql/queries';
import { createFormQuestion as CreateFormQuestions } from '../../../graphql/mutations';
import { HIGH } from '../../../utils/DropConsole/CONSTANTS';
import { FormQuestionsContext } from '../../../Context/FormQuestions/Provider';
import Spinner from '../../../Components/Spinner';
import { ADD_QUESTIONS } from '../../../Context/FormQuestions/ActionTypes';
import YesNoQuestion from '../Components/YesNoQuestion';
import './styles.scss';
import { UserCurrentFormContext } from '../../../Context/UserCurrentForm/Provider';
import { ADD_CURRENT_FORM } from '../../../Context/UserCurrentForm/ActionTypes';
import RoutingConstants from '../../../navigation/CONSTANTS/RoutingConstants';

const InitialFormPage = () => {
  const isCancelled = useRef(false);
  const { FormQuestionsState, FormQuestionsDispatch } = useContext(FormQuestionsContext);
  const { userCurrentFormState, userCurrentFormDispatch } = useContext(UserCurrentFormContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [responseState, setResponseState] = useState({});
  const [useRedirect, setUseRedirect] = useState(false);

  const getCurrentForm = async () => {
    try {
      // TODO This has to be refactored to accomplish good functioning
      setLoading(true);

      const apiForm = await API.graphql(graphqlOperation(ListForms));

      if (apiForm && apiForm.data && apiForm.data.listForms && apiForm.data.listForms.items) {
        const CurrentForm = apiForm.data.listForms.items[0];
        userCurrentFormDispatch({ type: ADD_CURRENT_FORM, payload: CurrentForm });
      }
      setLoading(false);
      // }
    } catch (currentFormError) {
      if (currentFormError instanceof Error) {
        DropConsole(HIGH, currentFormError.message);
        setLoading(false);
        setError(true);
      } else {
        DropConsole(HIGH, currentFormError);
        setLoading(false);
        setError(true);
      }
    }
  };

  const getQuestions = async () => {
    try {
      setLoading(true);
      if (FormQuestionsState.length === 0) {
        const apiQuestions = await API.graphql(
          graphqlOperation(
            GetQuestionsOfASection,
            {
              filter: {
                name: {
                  eq: 'General',
                },
              },
            },
          ),
        );
        if (apiQuestions && apiQuestions.data
          && apiQuestions.data.listSections
          && apiQuestions.data.listSections.items) {
          const sectionQuestions = apiQuestions.data.listSections.items[0];
          FormQuestionsDispatch({ type: ADD_QUESTIONS, payload: sectionQuestions.questions.items });
        }
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
    let isAbleToPass = false;
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
      } catch (saveToDBError) {
        if (saveToDBError instanceof Error) {
          DropConsole(HIGH, saveToDBError.message);
        } else {
          console.log(saveToDBError);
        }
      }

      isAbleToPass = Object.values(responseState).map((response) => {
        if (response.trim() === 'yes') {
          return true;
        }
        return false;
      });

      if (isAbleToPass.every((booleanCondition) => booleanCondition === true)) {
        setUseRedirect(true);
      }
      return 0;
    });
  };

  useEffect(() => {
    if (isCancelled) {
      const questionsPromise = getQuestions();
      const currentFormPromise = getCurrentForm();
      questionsPromise.then((result) => result);
      currentFormPromise.then(((result) => result));
    }
    return () => {
      isCancelled.current = true;
    };
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
              FormQuestionsState.map(
                (item) => (
                  <YesNoQuestion
                    key={item.id}
                    question={item.question}
                    questionId={item.id}
                    radioGroup={item.id}
                    setResponse={setResponseState}
                    currentState={responseState}
                  />
                ),
              )
            }
          <button type="button" onClick={SaveToDataBase}>Start Survey</button>
        </div>
        )}
        {(!loading && error) && (
        <div>
          <h2>Error</h2>
        </div>
        )}
      </div>
      {useRedirect && (<Redirect to={`${RoutingConstants.dinamicForm.path}/Lake-Nona`} />)}
    </main>
  );
};

export default InitialFormPage;
