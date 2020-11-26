import React from 'react';
import './styles.scss';
import footerConst from 'constants';
import logo from '../../assets/Logos/logo.png';

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <div className="one-col">
        <img src={logo} alt="logo" className="Nona-logo" />
        <p>{footerConst.firstCol.text}</p>
      </div>
      <div className="two-col">
        <p><a href={footerConst.secCol.home.path}>{footerConst.secCol.home.name}</a></p>
        <p>
          <a href={footerConst.secCol.lifeProject.path}>{footerConst.secCol.lifeProject.name}</a>
        </p>
        <p><a href={footerConst.secCol.innovation.path}>{footerConst.secCol.innovation.name}</a></p>
        <p><a href={footerConst.secCol.bePart.path}>{footerConst.secCol.bePart.name}</a></p>
      </div>
      <div className="three-col">
        <p><a href={footerConst.thirdCol.terms.path}>{footerConst.thirdCol.terms.name}</a></p>
        <p><a href={footerConst.thirdCol.privacy.path}>{footerConst.thirdCol.privacy.name}</a></p>
        <p><a href={footerConst.thirdCol.faqs.path}>{footerConst.thirdCol.faqs.name}</a></p>
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
