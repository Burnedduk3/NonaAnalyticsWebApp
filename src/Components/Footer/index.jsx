import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logos/logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="one-col">
        <img src={logo} alt="logo" className="Nona-logo" />
        <p>{footerConst.firstCol.text}</p>
      </div>
      <div className="two-col">
        <p>
          <Link to={footerConst.secCol.home.path}>
            {footerConst.secCol.home.name}
          </Link>
        </p>
        <p>
          <Link to={footerConst.secCol.lifeProject.path}>
            {footerConst.secCol.lifeProject.name}
          </Link>
        </p>
        <p>
          <Link to={footerConst.secCol.innovation.path}>
            {footerConst.secCol.innovation.name}
          </Link>
        </p>
        <p>
          <Link to={footerConst.secCol.bePart.path}>
            {footerConst.secCol.bePart.name}
          </Link>
        </p>
      </div>
      <div className="three-col">
        <p>
          <Link to={footerConst.thirdCol.terms.path}>
            {footerConst.thirdCol.terms.name}
          </Link>
        </p>
        <p>
          <Link to={footerConst.thirdCol.privacy.path}>
            {footerConst.thirdCol.privacy.name}
          </Link>
        </p>
        <p>
          <Link to={footerConst.thirdCol.faqs.path}>
            {footerConst.thirdCol.faqs.name}
          </Link>
        </p>
      </div>
      <div className="four-col">
        <h3>{footerConst.fourthCol.title}</h3>
        <p>{footerConst.fourthCol.text}</p>
        <div className="suscribe-form">
          <input type="text" placeholder={footerConst.fourthCol.placeholder} />
          <button type="submit" className="suscribe">{footerConst.fourthCol.textButton}</button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
