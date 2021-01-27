import React, {useEffect, useState} from 'react';

import './styles.scss';
import {IImageQuestionProps} from './interfaces';
import {Storage} from 'aws-amplify';

const ImageOneSelection: React.FC<IImageQuestionProps> = (
    {
      question,
      imagesPath,
      questionId,
      radioGroup,
      currentState,
      setResponse,
      items,
      order,
    }:IImageQuestionProps,
): JSX.Element =>{
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
    fetchImages();
    setIsLoading(false);
  }, []);

  return (
    <>
      {
        (!isLoading && images.length > 0) &&
        <div className='input-container-image'>
          <p className="question-text">{question}</p>
          <div className="response-container">
            {items.map((value, index)=>
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
                          {...currentState, [questionId]: {
                            response: value.toString(),
                            order,
                          },
                          },
                      )
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
