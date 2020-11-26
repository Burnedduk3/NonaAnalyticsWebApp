import React from 'react';
import Facebooklogo from '../../assets/Icons/SocialMedia/023-facebook.png';
import InstagramLogo from '../../assets/Icons/SocialMedia/044-instagram.png';
import './styles.scss';

const SocialMediaSticky = () => (
  <div className="sticky-social-container">
    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><img className="logo-icon" src={Facebooklogo} alt="facebook" /></a>
    <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img className="logo-icon" src={InstagramLogo} alt="instagram" /></a>
  </div>
);

export default SocialMediaSticky;
