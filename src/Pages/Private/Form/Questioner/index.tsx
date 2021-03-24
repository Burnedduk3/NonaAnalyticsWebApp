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
  NEXT_QUESTIONS,
  PREVIOUS_QUESTION,
  SET_QUESTION_RESPONSE,
  SET_SHOWABLE_QUESTIONS,
} from '../../../../Context/FormQuestions/ActionTypes';
import {RouteComponentProps} from 'react-router';
import {TQuestionerRoute} from '../../../../navigation/interfaces/interface';
import {
  IQuestion,
} from '../../../../Context/FormQuestions/interface';
import LadderQuestion from '../Components/LadderQuestion';
import * as LadderConstants from '../Components/LadderQuestion/CONSTANTS';
import RadioButtonGroup from '../Components/RadioButtonGroup';
import CheckBoxComponent from '../Components/CheckBoxQuestion';
import MultiLadderQuestion from '../Components/MultiLadder';
import ImageOneSelection from '../Components/ImageQuestion';
import {Redirect} from 'react-router-dom';
import
RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import {ErrorMessageToast} from '../../../../Components/ErrorMessage';
import {useOrganizeForm} from '../../../../hooks/FetchForm';

const FormPage:React.FC<RouteComponentProps<
    TQuestionerRoute>
    > = (): JSX.Element =>{
      const [pageLoading, setPageLoading] = useState<boolean>(true);
      const ApplicationState = useApplicationState();
      const FormApplicationState = useFormQuestionState();
      const applicationState = useApplicationState();
      const [currentProgress, setCurrentProgress] = useState<number>();
      const [toggleToast, setToggleToast] = useState<boolean>(false);
      const {error} = applicationState.appState;

      const formState = useOrganizeForm();
      console.log(formState);

      const setQuestionResponse = (
          response: string,
          questionID: string,
          order: number,
          validation: string,
      ) =>{
        const questionToSave = {
          response,
          questionID,
          order,
          validation,
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
          const possibleQuestion = FormApplicationState.formState
              .questionsAnswered[questionIndex];
          if (possibleQuestion) {
            FormApplicationState.formStateDispatch(
                {
                  type: SET_QUESTION_RESPONSE,
                  payload: {
                    questionToAdd: {
                      id: questionToSave.questionID,
                      answer: questionToSave.response,
                      responseDbId: possibleQuestion.responseDbId,
                      sendToDB: false,
                      validation: questionToSave.validation,
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
                    validation: questionToSave.response,
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
      }, [pageLoading]);

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
        setPageLoading(true);
        console.log(stack, section, subSection);
        const respondedQuestions = FormApplicationState.
            formState.
            questionsAnswered;
        await respondedQuestions.map(async (RespondedQuestion) => {
          const {id, sendToDB, answer, responseDbId} = RespondedQuestion;
          if (!sendToDB) {
            if (!responseDbId) {
              try {
                // TODO Create question
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
              // TODO update questions
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
        setPageLoading(false);
      };
      const formFinished = FormApplicationState.formState.finished;

      return (
        <>
          {
            formFinished && <Redirect
              to={RoutingConstants.menu.home.path}
            />
          }
          {!formFinished &&
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
                  {pageLoading && (
                    <div className="spinner-wrapper">
                      <Spinner/>
                    </div>
                  )}
                  {(!pageLoading) && (
                    <>
                      {
                        FormApplicationState.formState.showableQuestions.map(
                            (item: IQuestion) => {
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
                                      inputConfirmation={item.inputConfirmation}
                                    />
                                  </div>
                                );
                              }
                              if (item.category.name === 'Combo') {
                                if (!item.items) {
                                  return <></>;
                                }
                                return (
                                  <ComboBoxComponent
                                    key={item.id}
                                    question={item.question}
                                    questionId={item.id}
                                    setResponse={setQuestionResponse}
                                    items={item.items}
                                    order={item.order}
                                    inputConfirmation={item.inputConfirmation}
                                  />
                                );
                              }
                              if (item.category.name === 'Open') {
                                if (!item.placeHolder) {
                                  return <></>;
                                }
                                return (
                                  <TextInputComponent
                                    placeholder={item.placeHolder}
                                    key={item.id}
                                    question={item.question}
                                    questionId={item.id}
                                    setResponse={setQuestionResponse}
                                    order={item.order}
                                    inputConfirmation={item.inputConfirmation}
                                  />
                                );
                              }
                              if (item.category.name === 'MultiSelection') {
                                if (!item.items) {
                                  return <></>;
                                }
                                return (
                                  <CheckBoxComponent
                                    key={item.id}
                                    items={item.items}
                                    questionId={item.id}
                                    question={item.question}
                                    setResponse={setQuestionResponse}
                                    order={item.order}
                                    inputConfirmation={item.inputConfirmation}
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
                                            LadderConstants.default.
                                                defaultValue :
                                            item.items
                                    }
                                    inputConfirmation={item.inputConfirmation}
                                  />
                                );
                              }
                              if (item.category.name === 'RadioGroup') {
                                if (!item.items || !item.stackPhrase) {
                                  return <></>;
                                }
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
                                    inputConfirmation={item.inputConfirmation}
                                  />
                                );
                              }
                              if (item.category.name === 'MultiLadder') {
                                if (!item.items || !item.stackPhrase) {
                                  return <></>;
                                }
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
                                    inputConfirmation={item.inputConfirmation}
                                  />
                                );
                              }

                              if (item.category.name === 'Images') {
                                if (!item.items || !item.imagesPath) {
                                  return <></>;
                                }
                                return (
                                  <ImageOneSelection
                                    key={item.id}
                                    items={item.items}
                                    setResponse={setQuestionResponse}
                                    question={item.question}
                                    questionId={item.id}
                                    radioGroup={item.id}
                                    setLoading={setPageLoading}
                                    imagesPath={item.imagesPath}
                                    order={item.order}
                                    setIsLoading={setPageLoading}
                                    inputConfirmation={item.inputConfirmation}
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
