import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';
import footerConst from './constants';
import logo from '../../assets/Logos/logo.png';

const Footer: React.FC = (): JSX.Element => (
  <footer className="footer">
    <div className="wrapper">
      <div className="one-col">
        <img src={logo} alt="logo" className="Nona-logo" />
        <p>{footerConst.firstCol.text}</p>
      </div>
      <div className="two-col">
        {Object.values(footerConst.secCol).map(
            (item) => (
              <p
                key={item.name}
              >
                <Link to={item.path}>
                  {item.name}
                </Link>
              </p>
            ),
        )}
      </div>
      <div className="four-col">
        <h3>{footerConst.fourthCol.title}</h3>
        <p>{footerConst.fourthCol.text}</p>
        <div className="subscribe">
          <input type="text" placeholder={footerConst.fourthCol.placeholder} />
          <button
            type="submit"
            className="subscribe">
            {footerConst.fourthCol.textButton}
          </button>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
