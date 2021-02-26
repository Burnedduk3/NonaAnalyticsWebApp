import React from 'react';
import './styles.scss';
import {IYesNoProps, IYesNoPropsQuestioner} from './interface';
import {
  useFormQuestionState,
} from '../../../../../Context/FormQuestions/Provider';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';

const YesNoQuestion: React.FC<IYesNoProps> = ({
  question, radioGroup, questionId, setResponse, currentState, checked, order,
}:IYesNoProps): JSX.Element => {
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
};

export const YesNoQuestionQuestioner: React.FC<IYesNoPropsQuestioner> = ({
  question, radioGroup, questionId, setResponse, order, inputConfirmation,
}:IYesNoPropsQuestioner): JSX.Element => {
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
            onClick={
              () => setResponse('yes', questionId, order, inputConfirmation)
            }
            defaultChecked={questionAnswer?.answer === 'yes'}
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
            onClick={
              () => setResponse('no', questionId, order, inputConfirmation)
            }
            defaultChecked={questionAnswer?.answer === 'no'}
          />
          <div className="check negative"/>
        </label>
      </div>
    </div>
  );
};

export default YesNoQuestion;
