import React from 'react';
import PropTypes from 'prop-types';

const TextInputComponent = ({
  question, questionId, setResponse, currentState,
}) => (
  <div className="inputContainer">
    <p>{question}</p>
    <label htmlFor={`${questionId}`}>
      <input
        id={`${questionId}`}
        type="text"
        className="text-input"
        onChange={(e) => setResponse({ ...currentState, [questionId]: e.target.value })}
      />
    </label>
  </div>
);

TextInputComponent.propTypes = {
  question: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  questionId: PropTypes.string,
  setResponse: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  currentState: PropTypes.object,
};

TextInputComponent.defaultProps = {
  question: '',
  questionId: '',
  setResponse: () => 0,
  currentState: {},
};

export default TextInputComponent;
