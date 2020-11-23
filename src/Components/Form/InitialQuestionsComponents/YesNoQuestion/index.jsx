import React from 'react';
import PropTypes from 'prop-types';
import '.';

const YesNoQuestion = (props) => {
  const { question, radioGroup } = props;
  return (
    <>
      <p>{question}</p>
      <div className="inputContainer">
        <input className="radio-button affirmative" type="radio" name={radioGroup} value="yes" />
        <input className="radio-button negative" type="radio" name={radioGroup} value="no" checked />
      </div>
    </>
  );
};

YesNoQuestion.propTypes = {
  question: PropTypes.string,
  radioGroup: PropTypes.string,
};

YesNoQuestion.defaultProps = {
  question: '',
  radioGroup: 'not-specific',
};
