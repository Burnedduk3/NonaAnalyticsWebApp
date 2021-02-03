import React from 'react';

import './styles.scss';
import {ILadderQuestionProps} from './interfaces';
import {
  useFormQuestionState,
} from '../../../../../Context/FormQuestions/Provider';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';

const LadderQuestion: React.FC<ILadderQuestionProps> = (
    {
      questionText,
      values,
      questionId,
      radioGroup,
      setResponse,
      order,
    }:ILadderQuestionProps,
): JSX.Element =>{
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
    <div className='input-container-ladder'>
      <h3 className="question-label">{questionText}</h3>
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
                defaultChecked={
                    questionAnswer ?
                        questionAnswer.answer === value:
                        false
                }
                onClick={
                  () => setResponse(value.toString(), questionId, order)
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
