import React from 'react';
import './styles.scss';
import logo from '../../logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="one-col">
        <img src={logo} alt="logo" className="Nona-logo" />
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy</p>
      </div>
      <div className="two-col">
        <p><a href="google.com">Home</a></p>
        <p><a href="google.com">Life Project</a></p>
        <p><a href="google.com">Innovation</a></p>
        <p><a href="google.com">Be Part</a></p>
      </div>
      <div className="three-col">
        <p><a href="google.com">Terms of Service</a></p>
        <p><a href="google.com">Privacy</a></p>
        <p><a href="google.com">FAQ´s</a></p>
      </div>
      <div className="four-col">
        <h3>Suscribe</h3>
        <p>Get offers and stay up-to-date</p>
        <div className="suscribe-form">
          <input type="text" placeholder="Email Address" />
          <button type="submit" className="suscribe">Suscribe</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
