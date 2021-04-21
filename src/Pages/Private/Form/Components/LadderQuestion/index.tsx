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
      inputConfirmation,
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
              key={`${value.name}-questionId-label`}
              htmlFor={`${questionId}-${value.name}`}
            >
              <input
                id={`${questionId}-${value.name}`}
                className={`radio-button value.name${value.name}`}
                type="radio"
                name={radioGroup}
                value={value.name}
                defaultChecked={
                    questionAnswer ?
                        questionAnswer.answer === value.name:
                        false
                }
                onClick={
                  () => setResponse(
                      value.name.toString(),
                      questionId,
                      order,
                      inputConfirmation,
                  )
                }
              />
              <div className={`check value`}>{value.name}</div>
            </label>
          ),
        )}
      </div>
    </div>
  );
};

export default LadderQuestion;
