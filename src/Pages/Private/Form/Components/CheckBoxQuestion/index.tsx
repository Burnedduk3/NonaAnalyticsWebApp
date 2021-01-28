import React from 'react';
import './styles.scss';
import {ICheckBoxProps} from './interface';

const CheckBoxComponent: React.FC<ICheckBoxProps> = ({
  question, items, questionId, currentState, setResponse, order,
}: ICheckBoxProps): JSX.Element => {
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
    if (questionId in currentState) {
      let text: string | Array<string> = currentState[questionId].response;
      text = text.trim().split(',');
      if (Array.isArray(text)) {
        if (event.target.checked) {
          text.push(event.target.name);
        }
        if (!event.target.checked) {
          const itemToDelete: number = text.indexOf(event.target.name);
          if (itemToDelete >= 0) {
            text.splice(itemToDelete, 1);
          }
        }
        text = text.join(',');
      }
      setResponse({...currentState, [questionId]:
            {
              response: text,
              order,
            },
      });
    } else {
      setResponse({...currentState, [questionId]:
            {
              response: event.target.name,
              order,
            },
      });
    }
  };


  return (
    <div className={'inputContainerCheck ' + question}>
      <p className="checkLabel">{question}</p>
      <div className="items">
        {items.map((item) => (
          <label key={item} className="container" htmlFor={`${questionId}`}>
            <input type="checkbox"
              value={item}
              onChange={handleInput}
              name={item}
            />
            <div className="checkmark"/>
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxComponent;
