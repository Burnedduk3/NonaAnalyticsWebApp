import React from 'react';
import './styles.scss';
import {ICheckBoxProps} from './interface';

const CheckBoxComponent: React.FC<ICheckBoxProps> = ({
  question, items, questionId, currentState, setResponse,
}: ICheckBoxProps): JSX.Element => {
  return (
    <div className="inputContainer">
      <p>{question}</p>
      <div className="items">
        {items.map((item) => (
          <label key={item} className="container" htmlFor={`${questionId}`}>
            <input type="checkbox" className={item} onClick={() => setResponse(
                {...currentState, [questionId]: {item}})}/>
            <span className="checkmark"/>
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxComponent;
