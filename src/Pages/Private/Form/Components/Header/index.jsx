import React from 'react';
import TextConstants from './CONSTANTS';
import './styles.scss';

const QuestionerHeader = () => (
  <header className="questioner-header-container">
    <h2 className="title-text">{TextConstants.mainParagraph}</h2>
  </header>
);

export default QuestionerHeader;
