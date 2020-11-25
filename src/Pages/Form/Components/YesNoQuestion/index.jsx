import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const YesNoQuestion = (props) => {
  const { question, radioGroup, questionId } = props;
  return (
    <div className="inputContainer">
      <p>{question}</p>
      <label htmlFor={`${questionId}+yes`}>
        <input id={`${questionId}+yes`} className="radio-button affirmative" type="radio" name={radioGroup} value="yes" />
        <div className="check positive" />
      </label>
      <label htmlFor={`${questionId}+no`}>
        <input id={`${questionId}+no`} className="radio-button negative" type="radio" name={radioGroup} value="no" defaultChecked />
        <div className="check negative" />
      </label>
    </div>
  );
};

YesNoQuestion.propTypes = {
  question: PropTypes.string,
  radioGroup: PropTypes.string,
  questionId: PropTypes.string,
};

YesNoQuestion.defaultProps = {
  question: '',
  radioGroup: 'not-specific',
  questionId: '',
};

export default YesNoQuestion;
