import React from 'react';
import './styles.scss';
import {ITextInputProps} from './interface';

const TextInputComponent: React.FC<ITextInputProps> = ({
  question, questionId, setResponse, currentState, placeholder, order,
}:ITextInputProps) => {
  return (
    <div className="inputContainer">
      <p>{question}</p>
      <label htmlFor={`${questionId}`}>
        <input
          id={`${questionId}`}
          placeholder={placeholder}
          type="text"
          className="text-input"
          onChange={
            (e) =>
              setResponse({...currentState, [questionId]: {
                response: e.target.value,
                order,
              }},
              )
          }
        />
      </label>
    </div>
  );
};

export default TextInputComponent;
