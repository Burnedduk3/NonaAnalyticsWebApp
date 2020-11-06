import React from 'react';
import './styles.scss';
import HeaderImage from '../../../Images/HomeImage.png';

const PublicHeader = () => (
  <header className="header">
    <img src={HeaderImage} alt="welcome" className="welcome-image" />
  </header>
);

export default PublicHeader;
