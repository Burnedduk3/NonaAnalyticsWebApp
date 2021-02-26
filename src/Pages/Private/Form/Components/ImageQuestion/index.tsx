import React, {useEffect, useState} from 'react';

import './styles.scss';
import {IImageQuestionProps} from './interfaces';
import {Storage} from 'aws-amplify';
import {
  useFormQuestionState,
} from '../../../../../Context/FormQuestions/Provider';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';

const ImageOneSelection: React.FC<IImageQuestionProps> = (
    {
      question,
      imagesPath,
      questionId,
      radioGroup,
      setResponse,
      items,
      order,
      setIsLoading,
      inputConfirmation,
    }:IImageQuestionProps,
): JSX.Element =>{
  const [images, setImages] = useState<string[]>([]);
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

  const fetchImages = async () => {
    try {
      const srcImages: Array<string> = [];
      for (let i = 0; i < imagesPath.length; i++) {
        const imageSrc = await Storage.get(imagesPath[i]);
        srcImages.push(imageSrc.toString());
      }
      setImages(srcImages);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    setIsLoading(true);
    fetchImages().then(()=>{
    });
    setIsLoading(false);
  }, []);

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
                          value.toString(),
                          questionId,
                          order,
                          inputConfirmation,
                      )
                    }
                    defaultChecked={
                        questionAnswer ?
                            questionAnswer.answer === value:
                        false
                    }
                  />
                  <div
                    className={`check value`}
                    style={{backgroundImage: `linear-gradient(white, white),
                    url(${images[index]})`}}
                  />
                  <p>{value}</p>
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
