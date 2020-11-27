import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const TextInputComponent = ({
  question, questionId, setResponse, currentState, placeholder,
}) => (
  <div className="inputContainer">
    <p>{question}</p>
    <label htmlFor={`${questionId}`}>
      <input
        id={`${questionId}`}
        placeholder={placeholder}
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
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  currentState: PropTypes.object,
};

TextInputComponent.defaultProps = {
  question: '',
  questionId: '',
  setResponse: () => 0,
  placeholder: '',
  currentState: {},
};

export default TextInputComponent;
