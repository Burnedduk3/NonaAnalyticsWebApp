import React from 'react';
import './styles.scss';
import {IYesNoProps} from './interface';

const YesNoQuestion: React.FC<IYesNoProps> = ({
  question, radioGroup, questionId, setResponse, currentState, checked,
}:IYesNoProps): JSX.Element => (
  <div className="inputContainer">
    <p className="question-text">{question}</p>
    <div className="response-container">
      <label htmlFor={`${questionId}+yes`}>
        <input
          id={`${questionId}+yes`}
          className="radio-button affirmative"
          type="radio"
          name={radioGroup}
          value="yes"
          onClick={() => setResponse({...currentState, [questionId]: 'yes'})}
          defaultChecked={checked === 'yes'}
        />
        <div className="check positive" />
      </label>
      <label htmlFor={`${questionId}+no`}>
        <input
          id={`${questionId}+no`}
          className="radio-button negative"
          type="radio"
          name={radioGroup}
          value="no"
          onClick={() => setResponse({...currentState, [questionId]: 'no'})}
          defaultChecked={checked === 'no'}
        />
        <div className="check negative" />
      </label>
    </div>

  </div>
);
export default YesNoQuestion;