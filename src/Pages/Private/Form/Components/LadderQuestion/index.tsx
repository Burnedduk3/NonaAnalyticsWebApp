import React from 'react';

import './styles.scss';
import {ILadderQuestionProps} from './interfaces';

const LadderQuestion: React.FC<ILadderQuestionProps> = (
    {
      questionText,
      values,
      questionId,
      radioGroup,
      currentState,
      setResponse,
      order,
    }:ILadderQuestionProps,
): JSX.Element =>{
  return (
    <div className='input-container-ladder'>
      <h4 className="question-text">{questionText}</h4>
      <div className="response-container">
        {values.map((value)=>
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
                      {...currentState, [questionId]:
                              {
                                response: value.toString(),
                                order,
                              },
                      },
                  )
                }
              />
              <div className={`check value`}>{value}</div>
            </label>
          ),
        )}
      </div>
    </div>
  );
};

export default LadderQuestion;
