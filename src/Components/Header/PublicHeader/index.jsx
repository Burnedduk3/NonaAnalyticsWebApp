import React from 'react';
import './styles.scss';
import HeaderImage from '../../../Images/HomeImage.jpg';
import TextConstants from './textConstants';

const PublicHeader = () => (
  <header className="header">
    <img src={HeaderImage} alt="welcome" className="welcome-image" />
    <h1 className="main-title">LAKE NONA LIFE PROJECT</h1>
    <h2 className="sub-title">NONA ANALYTICS LLC</h2>
  </header>
);

export default PublicHeader;
