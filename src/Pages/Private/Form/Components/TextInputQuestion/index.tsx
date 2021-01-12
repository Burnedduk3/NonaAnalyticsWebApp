import React from 'react';
import './styles.scss';
import {ITextInputProps} from './interface';

const TextInputComponent: React.FC<ITextInputProps> = ({
  question, questionId, setResponse, currentState, placeholder,
}:ITextInputProps) => (
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
            setResponse({...currentState, [questionId]: e.target.value})
        }
      />
    </label>
  </div>
);

export default TextInputComponent;
