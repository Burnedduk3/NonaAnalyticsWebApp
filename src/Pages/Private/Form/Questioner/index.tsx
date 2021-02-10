import React, {useEffect, useState} from 'react';
import TextInputComponent from '../Components/TextInputQuestion';
import ComboBoxComponent from '../Components/ComboBoxQuestion';
import {YesNoQuestionQuestioner} from '../Components/YesNoQuestion';
import Spinner from '../../../../Components/Spinner';
import LeftBar from '../Components/LeftBar/src';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {
  HIDE_FOOTER,
  HIDE_HEADER, SET_ERROR,
} from '../../../../Context/ApplicationState/ActionTypes';

import './styles.scss';
import {useFormQuestionState} from '../../../../Context/FormQuestions/Provider';
import {
  UPDATE_ANSWERED_QUESTIONS,
  GET_SECTIONS, NEXT_QUESTIONS,
  PREVIOUS_QUESTION,
  SEARCH_STORAGE_QUESTIONER, SET_QUESTION_RESPONSE,
  SET_SHOWABLE_QUESTIONS,
} from '../../../../Context/FormQuestions/ActionTypes';
import {fetchQuestions} from '../api/FetchQuestions';
import {RouteComponentProps} from 'react-router';
import {TQuestionerRoute} from '../../../../navigation/interfaces/interface';
import {
  IFormQuestionsContextState,
} from '../../../../Context/FormQuestions/interface';
import {useUserState} from '../../../../Context/UserContext/Provider';
import LadderQuestion from '../Components/LadderQuestion';
import * as LadderConstants from '../Components/LadderQuestion/CONSTANTS';
import saveQuestionsToDynamo from '../api/Dynamo/SaveQuestionsToDynamo';
import
saveQuestionsToAurora,
{
  ISaveDataAuroraParams,
}
  from '../api/Aurora/SaveQuestionsToAurora';
import RadioButtonGroup from '../Components/RadioButtonGroup';
import CheckBoxComponent from '../Components/CheckBoxQuestion';
import MultiLadderQuestion from '../Components/MultiLadder';
import ImageOneSelection from '../Components/ImageQuestion';
import updateFormProgress from '../api/Dynamo/UpdateFormProgress';
import {
  SEARCH_LOCAL_STORAGE,
} from '../../../../Context/UserContext/ActionTypes';
import {Redirect} from 'react-router-dom';
import
RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import updateQuestionAtDynamo from '../api/Dynamo/UpdateQuestionResponse';
import updateQuestionAtAurora from '../api/Aurora/UpdateQuestionResponse';
import {ErrorMessageToast} from '../../../../Components/ErrorMessage';

const FormPage:React.FC<RouteComponentProps<
    TQuestionerRoute>
    > = (): JSX.Element =>{
      const [loading, setLoading] = useState<boolean>(true);
      const ApplicationState = useApplicationState();
      const FormApplicationState = useFormQuestionState();
      const applicationState = useApplicationState();
      const userState = useUserState();
      const [currentProgress, setCurrentProgress] = useState<number>();
      const [toggleToast, setToggleToast] = useState<boolean>(false);
      const {error} = applicationState.appState;


      const setQuestionResponse = (
          response: string,
          questionID: string,
          order: number,
      ) =>{
        const questionToSave = {
          response,
          questionID,
          order,
        };
        const questionIndex = FormApplicationState.
            formState.
            questionsAnswered.
            findIndex(
                (question)=>{
                  if (question.id === questionID) {
                    return question;
                  }
                },
            );
        if (questionIndex > -1) {
          const posibleQuestion = FormApplicationState.formState
              .questionsAnswered[questionIndex];
          if (posibleQuestion) {
            FormApplicationState.formStateDispatch(
                {
                  type: SET_QUESTION_RESPONSE,
                  payload: {
                    questionToAdd: {
                      id: questionToSave.questionID,
                      answer: questionToSave.response,
                      responseDbId: posibleQuestion.responseDbId,
                      sendToDB: false,
                    },
                    order,
                  },
                },
            );
          }
        } else {
          FormApplicationState.formStateDispatch(
              {
                type: SET_QUESTION_RESPONSE,
                payload: {
                  questionToAdd: {
                    id: questionToSave.questionID,
                    answer: questionToSave.response,
                    sendToDB: false,
                  },
                  order,
                },
              },
          );
        }
      };

      useEffect( () => {
        ApplicationState.appStateDispatch({
          type: HIDE_FOOTER,
          payload: undefined,
        });
        ApplicationState.appStateDispatch({
          type: HIDE_HEADER,
          payload: undefined,
        });
        userState.userStateDispatch({
          type: SEARCH_LOCAL_STORAGE,
          payload: undefined,
        });
        FormApplicationState.formStateDispatch(
            {
              type: SEARCH_STORAGE_QUESTIONER,
              payload: undefined,
            },
        );
        applicationState.appStateDispatch(
            {
              type: SET_ERROR,
              payload: {
                error: {
                  error: false,
                  errorMessage: '',
                },
              },
            },
        );
        const cachedData = localStorage.getItem('QUESTIONER_STORAGE');
        setLoading(true);
        if (FormApplicationState.formState.sections?.length === 0 &&
        !cachedData
        ) {
          try {
            fetchQuestions(FormApplicationState.formState.currentFormID).then(
                (data: IFormQuestionsContextState | undefined) => {
                  FormApplicationState.formStateDispatch(
                      {
                        type: GET_SECTIONS,
                        payload: {
                          fetchedSections: data,
                        },
                      });
                  setLoading(false);
                  applicationState.appStateDispatch(
                      {
                        type: SET_ERROR,
                        payload: {
                          error: {
                            error: false,
                            errorMessage: '',
                          },
                        },
                      },
                  );
                });
          } catch (error) {
            applicationState.appStateDispatch(
                {
                  type: SET_ERROR,
                  payload: {
                    error: {
                      error: true,
                      errorMessage: 'Not able to fetch questions',
                    },
                  },
                },
            ); setLoading(false);
          }
        } else {
          setCurrentProgress(FormApplicationState.formState.currentProgress);
          setLoading(false);
          applicationState.appStateDispatch(
              {
                type: SET_ERROR,
                payload: {
                  error: {
                    error: false,
                    errorMessage: '',
                  },
                },
              },
          );
        }
      }, []);

      useEffect(()=>{
        if (FormApplicationState.formState.sections.length > 0
        ) {
          FormApplicationState.formStateDispatch(
              {
                type: SET_SHOWABLE_QUESTIONS,
                payload: undefined,
              },
          );
        }
      }, [loading]);

      const goPreviousSection = () => {
        FormApplicationState
            .formStateDispatch({
              type: PREVIOUS_QUESTION,
              payload: undefined,
            },
            );
      };

      const SaveToDataBase = async () => {
        const stack = FormApplicationState.formState.currentStack;
        const section = FormApplicationState.formState.currentSection?.name;
        const subSection = FormApplicationState.
            formState.
            currentSubSection?.
            name;
        setLoading(true);
        const respondedQuestions = FormApplicationState.
            formState.
            questionsAnswered;
        await respondedQuestions.map(async (RespondedQuestion) => {
          let {id, sendToDB, answer, responseDbId} = RespondedQuestion;
          if (!sendToDB) {
            if (!responseDbId) {
              try {
                responseDbId = await saveQuestionsToDynamo(
                    id,
                    answer,
                    FormApplicationState.formState.currentFormID,
                );
                applicationState.appStateDispatch(
                    {
                      type: SET_ERROR,
                      payload: {
                        error: {
                          error: false,
                          errorMessage: '',
                        },
                      },
                    },
                );
              } catch (error) {
                applicationState.appStateDispatch(
                    {
                      type: SET_ERROR,
                      payload: {
                        error: {
                          error: true,
                          errorMessage: error.message,
                        },
                      },
                    },
                );
              }
              if (
                stack !== undefined &&
                  section !== undefined &&
                  subSection !== undefined
              ) {
                try {
                  const functionParams: ISaveDataAuroraParams = {
                    stack: stack.toString(),
                    section: section,
                    subSection: subSection,
                  };

                  if (!responseDbId) {
                    throw new Error('Error saving questions');
                  }
                  await saveQuestionsToAurora(
                      {...functionParams},
                      id,
                      answer,
                      FormApplicationState.formState.currentFormID,
                      userState.userState.usernameID,
                      responseDbId,
                  );
                  applicationState.appStateDispatch(
                      {
                        type: SET_ERROR,
                        payload: {
                          error: {
                            error: false,
                            errorMessage: '',
                          },
                        },
                      },
                  );
                } catch (error) {
                  setToggleToast(true);
                  applicationState.appStateDispatch(
                      {
                        type: SET_ERROR,
                        payload: {
                          error: {
                            error: true,
                            errorMessage: 'unable to save questions',
                          },
                        },
                      },
                  );
                }
              }
            } else {
              try {
                await updateQuestionAtDynamo(
                    responseDbId,
                    answer,
                );

                await updateQuestionAtAurora(
                    responseDbId,
                    answer,
                );
                applicationState.appStateDispatch(
                    {
                      type: SET_ERROR,
                      payload: {
                        error: {
                          error: false,
                          errorMessage: '',
                        },
                      },
                    },
                );
              } catch (error) {
                applicationState.appStateDispatch(
                    {
                      type: SET_ERROR,
                      payload: {
                        error: {
                          error: true,
                          errorMessage: 'unable to update',
                        },
                      },
                    },
                );
              }
            }
          }
          sendToDB = true;
          FormApplicationState
              .formStateDispatch({
                type: UPDATE_ANSWERED_QUESTIONS,
                payload: {
                  questionToAdd: {
                    answer: answer,
                    id: id,
                    sendToDB: sendToDB,
                    responseDbId,
                  },
                },
              },
              );
        });
        if (
          currentProgress !== FormApplicationState.
              formState.
              currentProgress
        ) {
          setCurrentProgress(FormApplicationState.formState.currentProgress);
          try {
            await updateFormProgress(
                FormApplicationState.formState.currentFormID,
                FormApplicationState.formState.currentProgress,
            );
          } catch (error) {
            applicationState.appStateDispatch(
                {
                  type: SET_ERROR,
                  payload: {
                    error: {
                      error: true,
                      errorMessage: error.message,
                    },
                  },
                },
            );
          }
        }
        if (!ApplicationState.appState.error.error) {
          FormApplicationState
              .formStateDispatch({
                type: NEXT_QUESTIONS,
                payload: undefined,
              },
              );

          FormApplicationState.formStateDispatch(
              {
                type: SET_SHOWABLE_QUESTIONS,
                payload: undefined,
              },
          );
        }
        setLoading(false);
      };
      const formFinished = FormApplicationState.formState.finished;

      return (
        <>
          {
            formFinished && <Redirect
              to={RoutingConstants.menu.home.path}
            />
          }
          {
            !formFinished &&
        <main className="content-container">
          <LeftBar/>
          <div className="form-container">
            <div className='questioner-container'>
              {error.error && <ErrorMessageToast
                message={error.errorMessage.toString()}
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick={false}
                pauseOnHover={false}
                draggable={false}
                toggleToast={toggleToast}
                setToggleToast={setToggleToast}
              />}
              {loading && (
                <div className="spinner-wrapper">
                  <Spinner/>
                </div>
              )}
              {(!loading) && (
                <>
                  {
                    FormApplicationState.formState.showableQuestions.map(
                        (item: any) => {
                          if (item.category.name === 'YesNo') {
                            return (
                            // eslint-disable-next-line max-len
                              <div key={item.id} className="yes-no-container-comp">
                                <YesNoQuestionQuestioner
                                  question={item.question}
                                  questionId={item.id}
                                  radioGroup={item.id}
                                  setResponse={setQuestionResponse}
                                  order={item.order}
                                />
                              </div>
                            );
                          }
                          if (item.category.name === 'Combo') {
                            return (
                              <ComboBoxComponent
                                key={item.id}
                                question={item.question}
                                questionId={item.id}
                                setResponse={setQuestionResponse}
                                items={item.items}
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
                                setResponse={setQuestionResponse}
                                order={item.order}
                              />
                            );
                          }
                          if (item.category.name === 'MultiSelection') {
                            return (
                              <CheckBoxComponent
                                key={item.id}
                                items={item.items}
                                questionId={item.id}
                                question={item.question}
                                setResponse={setQuestionResponse}
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
                                setResponse={setQuestionResponse}
                                values={
                                    item.items === null ||
                                    item.items.length === 0 ?
                                        LadderConstants.default.defaultValue :
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
                                setResponse={setQuestionResponse}
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
                                setResponse={setQuestionResponse}
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
                                setResponse={setQuestionResponse}
                                question={item.question}
                                questionId={item.id}
                                radioGroup={item.id}
                                setLoading={setLoading}
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
              {
                (
                  FormApplicationState.
                      formState.
                      currentSubSection?.
                      name !== 'Lake-Nona'
                ) && <button
                  className="button previous"
                  type="button"
                  onClick={goPreviousSection}
                >PREVIOUS</button>
              }
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
          }
        </>
      );
    };

export default FormPage;
