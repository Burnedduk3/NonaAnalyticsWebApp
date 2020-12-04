import React, { useState, useContext, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { useHistory, useParams } from 'react-router';
import { getQuestionsOfASection as GetQuestionsOfASection } from '../OwnQueries';
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
import LeftBar from '../Components/LeftBar';
import './styles.scss';
import { UserContext } from '../../../Context/UserContext/Provider';
import { ADD_RESPONDED_QUESTIONS } from '../../../Context/UserContext/ActionTypes';
import useAWSGraphql from '../../../Hooks/useAWSGraphql';
import { FETCHING, SUCCESS } from '../../../reducers/AWSGraphql/actionTypes';

// eslint-disable-next-line react/prop-types
const Questioner = () => {
  const { FormQuestionsState, FormQuestionsDispatch } = useContext(FormQuestionsContext);
  const { userCurrentFormState } = useContext(UserCurrentFormContext);
  const navigationHistory = useHistory();
  const { UserDispatch } = useContext(UserContext);
  const { section } = useParams();
  const [getQuestionState, getQuestionRequest] = useAWSGraphql(GetQuestionsOfASection, {
    filter: {
      name: {
        eq: section,
      },
    },
  });

  const [responseState, setResponseState] = useState({});

  useEffect(() => {
    UserDispatch({ type: ADD_RESPONDED_QUESTIONS, payload: Object.keys(responseState).length });
  }, [responseState]);

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
        }
      }
      return 0;
    });
  };

  const handleSubmit = () => {
    const savePromise = SaveToDataBase();
    savePromise.then((result) => result);
    if (section !== 'Demographics') {
      navigationHistory.push(`${RoutingConstants.dinamicForm.path}/Demographics`);
    } else {
      navigationHistory.push(`${RoutingConstants.dinamicForm.path}/Quality-of-life`);
    }
  };

  useEffect(() => {
    getQuestionRequest();
  }, [section]);

  useEffect(() => {
    if (getQuestionState.status === SUCCESS) {
      FormQuestionsDispatch({ type: DELETE_QUESTION });
      FormQuestionsDispatch(
        {
          type: ADD_QUESTIONS,
          payload: getQuestionState.response.data.listSections.items[0].questions.items,
        },
      );
    }
  }, [getQuestionState]);

  return (
    <main className="content-container">
      <LeftBar />
      <div className="form-container">
        {getQuestionState.status === FETCHING && (
          <div className="spinner-wrapper">
            <Spinner />
          </div>
        )}
        {(getQuestionState.status === SUCCESS) && (
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
          {/* eslint-disable-next-line react/prop-types */}
          {(section !== 'Lake-Nona') && <button className="button previous" type="button" onClick={() => navigationHistory.goBack()}>{'< PREVIOUS'}</button>}
          <button className="button next" type="button" onClick={handleSubmit}>{'NEXT >'}</button>
        </div>
      </div>
    </main>
  );
};
export default Questioner;
