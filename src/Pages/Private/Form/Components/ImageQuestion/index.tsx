import React from 'react';

import './styles.scss';
import {IImageQuestionProps} from './interfaces';
import {
  useFormQuestionState,
} from '../../../../../Context/FormQuestions/Provider';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';
import {generateUUID} from '../../../../../utils/GenerateUUID';

const ImageOneSelection: React.FC<IImageQuestionProps> = (
    {
      question,
      imagesPath,
      questionId,
      radioGroup,
      setResponse,
      items,
      order,
      inputConfirmation,
    }:IImageQuestionProps,
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
    <>
      {
        <div className='input-container-image'>
          <p className="question-text">{question}</p>
          <div className="response-container">
            {items.map((value, index)=>
              (
                <label
                  className="ImageItem"
                  key={generateUUID()}
                  htmlFor={`${questionId}-${value.name}`}
                >
                  <input
                    id={`${questionId}-${value.name}`}
                    className={`radio-button value.name${value.name}`}
                    type="radio"
                    name={radioGroup}
                    value={value.name}
                    onClick={
                      () => setResponse(
                          value.name.toString(),
                          questionId,
                          order,
                          inputConfirmation,
                      )
                    }
                    defaultChecked={
                        questionAnswer ?
                            questionAnswer.answer === value.name:
                        false
                    }
                  />
                  <div
                    className={`check value`}
                    style={{backgroundImage: `linear-gradient(white, white),
                    url(${imagesPath[index].src})`}}
                  />
                  <p>{value.name}</p>
                </label>
              ),
            )}
          </div>
        </div>
      }
    </>
  );
};

export default ImageOneSelection;
