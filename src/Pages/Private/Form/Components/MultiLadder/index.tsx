import React from 'react';
import {IMultiladder} from './interface';
import './styles.scss';
import {
  useFormQuestionState,
} from '../../../../../Context/FormQuestions/Provider';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';

const MultiLadderQuestion: React.FC<IMultiladder> = (
    {
      currentState,
      items,
      question,
      questionId,
      radioGroup,
      setResponse,
      stackPhrase,
      order,
    }:IMultiladder,
):JSX.Element => {
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
    <div className="question-container-with-header">
      {stackPhrase && <div className="stack-phrase">
        <h3>{stackPhrase}</h3>
      </div>
      }
      <div className="multi-ladder-button-container">
        <div className="question">
          <p>
            {question}
          </p>
        </div>
        <div className="response-container">
          {items.map((value)=>
            (
              <label
                key={`${questionId}-${value}`}
                htmlFor={`${questionId}-${value}`}
              >
                <input
                  id={`${questionId}-${value}`}
                  className={`radio-button value${value}`}
                  type="radio"
                  name={radioGroup}
                  value={value}
                  defaultChecked={
                      questionAnswer ?
                          questionAnswer.answer === value:
                          false
                  }
                  onClick={
                    () => setResponse(
                        {...currentState, [questionId]: {
                          response: value.toString(),
                          order,
                        }},
                    )
                  }
                />
                <div className={`check value`}>{value}</div>
              </label>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiLadderQuestion;
