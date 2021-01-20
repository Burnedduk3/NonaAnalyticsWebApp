import React from 'react';
import {IMultiladder} from './interface';
import './styles.scss';

const MultiLadderQuestion: React.FC<IMultiladder> = (
    {
      currentState,
      items,
      question,
      questionId,
      radioGroup,
      setResponse,
      stackPhrase,
    }:IMultiladder,
):JSX.Element => {
  return (
    <div className="question-container-with-header">
      {stackPhrase && <div className="stack-phrase">
        <h3>{stackPhrase}</h3>
      </div>
      }
      <div className="multi-ladder-button-container">
        <div className="question-container">
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
                    onClick={
                      () => setResponse(
                          {...currentState, [questionId]: value.toString()},
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
    </div>
  );
};

export default MultiLadderQuestion;
