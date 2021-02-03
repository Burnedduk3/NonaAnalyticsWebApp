import React from 'react';
import './styles.scss';
import {IYesNoProps} from './interface';
import {
  useFormQuestionState,
} from '../../../../../Context/FormQuestions/Provider';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';

const YesNoQuestion: React.FC<IYesNoProps> = ({
  question, radioGroup, questionId, setResponse, currentState, checked, order,
}:IYesNoProps): JSX.Element => {
  const formContext = useFormQuestionState();
  const questionAnswer: IAnsweredQuestion | undefined = formContext.
      formState.
      questionsAnswered.
      find((questionAnswer:IAnsweredQuestion)=>{
        if (questionAnswer.id === questionId) {
          return questionAnswer;
        } else {
          return undefined;
        }
      });
  console.log(questionAnswer);
  if (questionAnswer === undefined) {
    return (
      <div className="inputContainer">
        <p className="question-text">{question}</p>
        <div className="response-container">
          <label htmlFor={`${questionId}+yes`}>
            <input
              id={`${questionId}+yes`}
              className="radio-button affirmative"
              type="radio"
              name={radioGroup}
              value="yes"
              onClick={() => setResponse({
                ...currentState,
                [questionId]: {
                  response: '1',
                  order,
                },
              },
              )}
              defaultChecked={checked === 'yes'}
            />
            <div className="check positive"/>
          </label>
          <label htmlFor={`${questionId}+no`}>
            <input
              id={`${questionId}+no`}
              className="radio-button negative"
              type="radio"
              name={radioGroup}
              value="no"
              onClick={() => setResponse(
                  {
                    ...currentState,
                    [questionId]: {
                      response: '0',
                      order,
                    },
                  },
              )
              }
              defaultChecked={checked === 'no'}
            />
            <div className="check negative"/>
          </label>
        </div>
      </div>
    );
  } else {
    return (
      <div className="inputContainer">
        <p className="question-text">{question}</p>
        <div className="response-container">
          <label htmlFor={`${questionId}+yes`}>
            <input
              id={`${questionId}+yes`}
              className="radio-button affirmative"
              type="radio"
              name={radioGroup}
              value="yes"
              onClick={() => setResponse({
                ...currentState,
                [questionId]: {
                  response: '1',
                  order,
                },
              },
              )}
              defaultChecked={questionAnswer.answer === '1'}
            />
            <div className="check positive"/>
          </label>
          <label htmlFor={`${questionId}+no`}>
            <input
              id={`${questionId}+no`}
              className="radio-button negative"
              type="radio"
              name={radioGroup}
              value="no"
              onClick={() => setResponse(
                  {
                    ...currentState,
                    [questionId]: {
                      response: '0',
                      order,
                    },
                  },
              )
              }
              defaultChecked={questionAnswer.answer === '1'}
            />
            <div className="check negative"/>
          </label>
        </div>
      </div>
    );
  }
};
export default YesNoQuestion;
