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
  HIDE_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';

import './styles.scss';
import {useFormQuestionState} from '../../../../Context/FormQuestions/Provider';
import {
  PREVIOUS_QUESTION,
  SET_QUESTION_RESPONSE,
  SET_SHOWABLE_QUESTIONS,
  GET_SECTIONS,
  NEXT_QUESTIONS,
  SEARCH_STORAGE_QUESTIONER,
} from '../../../../Context/FormQuestions/ActionTypes';
import {RouteComponentProps} from 'react-router';
import {
  IQuestion,
} from '../../../../Context/FormQuestions/interface';
import LadderQuestion from '../Components/LadderQuestion';
import RadioButtonGroup from '../Components/RadioButtonGroup';
import CheckBoxComponent from '../Components/CheckBoxQuestion';
import MultiLadderQuestion from '../Components/MultiLadder';
import ImageOneSelection from '../Components/ImageQuestion';
import {Redirect} from 'react-router-dom';
import
RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import {useOrganizeForm} from '../../../../hooks/FetchForm';
import {
  ISaveResponseParams,
  useSaveResponses,
} from '../../../../hooks/CreateFormResponse';
import {
  IUpdateResponseParams,
  useUpdateResponse,
} from '../../../../hooks/UpdateQuestion';
import {
  IUpdateFormProgressParams,
  useUpdateFormProgress,
} from '../../../../hooks/UpdateFormProgress';
import {Auth} from 'aws-amplify';

const FormPage:React.FC<RouteComponentProps> = (): JSX.Element =>{
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  const ApplicationState = useApplicationState();
  const FormApplicationState = useFormQuestionState();
  const formState = useOrganizeForm();
  const saveResponses = useSaveResponses();
  const updateResponse = useUpdateResponse();
  const updateFormProgress = useUpdateFormProgress();

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
    FormApplicationState.
        formStateDispatch({
          type: SEARCH_STORAGE_QUESTIONER, payload: undefined,
        },
        );
    if (formState && formState.totalQuestions > 0) {
      FormApplicationState.formStateDispatch(
          {
            type: GET_SECTIONS,
            payload: {
              fetchedSections: formState,
            },
          });
      setPageLoading(false);
      FormApplicationState.formStateDispatch(
          {
            type: SET_SHOWABLE_QUESTIONS,
            payload: undefined,
          },
      );
    }
    setPageLoading(false);
  }, []);

  useEffect(()=>{
    if (formState && formState.totalQuestions > 0) {
      FormApplicationState.formStateDispatch(
          {
            type: GET_SECTIONS,
            payload: {
              fetchedSections: formState,
            },
          });
      setPageLoading(false);
      FormApplicationState.formStateDispatch(
          {
            type: SET_SHOWABLE_QUESTIONS,
            payload: undefined,
          },
      );
    }
  }, [formState]);


  const goPreviousSection = () => {
    FormApplicationState
        .formStateDispatch({
          type: PREVIOUS_QUESTION,
          payload: undefined,
        },
        );
  };

  const SaveToDataBase = async () => {
    try {
      const session = await Auth.currentSession();
      localStorage.setItem(
          'token',
          session.getAccessToken().getJwtToken(),
      );
      const {
        questionsAnswered,
        currentFormID,
        currentProgress,
      } = FormApplicationState.formState;

      for (const answer of questionsAnswered) {
        if (!answer.sendToDB) {
          if (!answer.responseDbId) {
            const params: ISaveResponseParams = {
              variables: {
                formID: currentFormID,
                questionID: answer.id,
                response: answer.answer,
              },
            };
            await saveResponses(params);
          } else {
            const params: IUpdateResponseParams = {
              variables: {
                newResponse: answer.answer,
                questionId: answer.id,
              },
            };
            await updateResponse(params);
          }
        }
      }

      const params: IUpdateFormProgressParams = {
        variables: {
          progress: currentProgress,
          formId: currentFormID,
        },
      };
      try {
        await updateFormProgress(params);
      } catch (err) {
        return;
      }

      FormApplicationState.formStateDispatch({
        type: NEXT_QUESTIONS,
        payload: undefined,
      },
      );
    } catch (err) {
      console.log(err);
    }
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
                                    values={item.items}
                                    inputConfirmation={item.inputConfirmation}
                                  />
                                );
                              }
                              if (item.category.name === 'RadioGroup') {
                                console.log(item);
                                if (!item.items) {
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
                                    stackPhrase={
                                      item.stackPhrase ? item.stackPhrase: ''
                                    }
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
