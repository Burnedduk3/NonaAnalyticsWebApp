import React from 'react';
import CONSTANTS from './CONSTANTS';
import './styles.scss';

const ErrorToContinue: React.FC = (): JSX.Element => {
  return (
    <div className="error-to-continue-container">
      <h2>{CONSTANTS.errorMessage}</h2>
    </div>
  );
};

export default ErrorToContinue;
