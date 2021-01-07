import React from 'react';
import './styles.scss';

const Spinner: React.FC = (): JSX.Element => (
  <div className="lds-ripple">
    <div />
    <div />
  </div>
);

export default Spinner;
