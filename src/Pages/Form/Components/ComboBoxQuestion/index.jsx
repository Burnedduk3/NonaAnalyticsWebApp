import React from 'react';
import PropTypes from 'prop-types';

const ComboBoxComponent = ({
  question, items, questionId, setResponse, currentState,
}) => (
  <div className="inputContainer">
    <p>{question}</p>
    <label htmlFor={`${questionId}`}>
      <select
        id={`${questionId}`}
        className="combo-box"
        onClick={(e) => setResponse({ ...currentState, [questionId]: e.target.value })}
      >
        {items.map((item) => <option value={item}>{item}</option>)}
      </select>
    </label>
  </div>
);

ComboBoxComponent.propTypes = {
  question: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types,react/require-default-props
  items: PropTypes.array,
  questionId: PropTypes.string,
  setResponse: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  currentState: PropTypes.object,
};

ComboBoxComponent.defaultProps = {
  question: '',
  items: [],
  questionId: '',
  setResponse: () => 0,
  currentState: {},
};

export default ComboBoxComponent;
