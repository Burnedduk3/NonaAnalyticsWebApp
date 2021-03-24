import React from 'react';
import {IRadioButtonGroupProps} from './interfaces';
import './styles.scss';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';
import {
  useFormQuestionState,
} from '../../../../../Context/FormQuestions/Provider';


const RadioButtonGroup: React.FC<IRadioButtonGroupProps> = (
    {
      stackPhrase,
      items,
      questionId,
      question,
      radioGroup,
      setResponse,
      order,
      inputConfirmation,
    }:IRadioButtonGroupProps,
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
    <div className="question-container-with-header">
      {stackPhrase && <div className="stack-phrase">
        <h3>{stackPhrase}</h3>
      </div>
      }
      <div className="radio-button-container">
        <div className="header-container">
          <div className="empty-space"/>
          {stackPhrase && <div className="radio-buttons-header">
            {
              items.map(
                  (header) => {
                    return (
                      <div
                        key={`${questionId}-${header}`}
                        className="text-header-container"
                      >
                        <h4>{header}</h4>
                      </div>
                    );
                  },
              )
            }
          </div>
          }
        </div>
        <div className="question-container">
          <div className="question">
            <p>
              {question}
            </p>
          </div>
          <div className="option-container">
            {
              items.map(
                  (option) => (
                    <label
                      htmlFor={`${questionId}-${option}`}
                      key={`${questionId}-${option}`}
                      className="input-container"
                    >
                      <input
                        id={`${questionId}+no`}
                        className="radio-button negative"
                        type="radio"
                        name={radioGroup}
                        value={option.name}
                        defaultChecked={
                            questionAnswer ?
                                questionAnswer.answer === option.name:
                                false
                        }
                        onClick={
                          () => setResponse(
                              option.name,
                              questionId,
                              order,
                              inputConfirmation,
                          )
                        }
                      />
                      <span className="checkmark"/>
                    </label>
                  ),
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonGroup;
