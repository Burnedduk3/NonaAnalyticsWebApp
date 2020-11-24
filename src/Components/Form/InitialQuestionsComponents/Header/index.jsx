import React from 'react';
import TextConstants from './TextConstants';

const InitialQuestionHeader = () => (
  <div>
    <h2>{TextConstants.description}</h2>
    <div className="imageBackground" />
  </div>
);

export default InitialQuestionHeader;
