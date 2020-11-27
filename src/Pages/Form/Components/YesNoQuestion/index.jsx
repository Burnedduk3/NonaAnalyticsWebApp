import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const YesNoQuestion = ({
  question, radioGroup, questionId, setResponse, currentState,
}) => (
  <div className="inputContainer">
    <p>{question}</p>
    <label htmlFor={`${questionId}+yes`}>
      <input
        id={`${questionId}+yes`}
        className="radio-button affirmative"
        type="radio"
        name={radioGroup}
        value="yes"
        onClick={() => setResponse({ ...currentState, [questionId]: 'yes' })}
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
        onClick={() => setResponse({ ...currentState, [questionId]: 'no' })}
      />
      <div className="check negative" />
    </label>
  </div>
);

YesNoQuestion.propTypes = {
  question: PropTypes.string,
  radioGroup: PropTypes.string,
  questionId: PropTypes.string,
  setResponse: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  currentState: PropTypes.object,
};

YesNoQuestion.defaultProps = {
  question: '',
  radioGroup: 'not-specific',
  questionId: '',
  setResponse: () => 0,
  currentState: {},
};

export default YesNoQuestion;
