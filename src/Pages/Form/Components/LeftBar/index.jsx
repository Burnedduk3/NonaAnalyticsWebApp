import React, { useContext } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles.scss';
import colors from '../../../../Global/js/colors';
import logo from '../../../../assets/Logos/logo.png';
import { UserContext } from '../../../../Context/UserContext/Provider';
import DropDownComponent from './DropDown';
import LeftBarText from './CONSTANTS';

const LeftBar = () => {
  const { UserState } = useContext(UserContext);
  return (
    <aside className="aside-menu">
      <div className="form-nona-logo-container">
        <img className="form-nona-logo" src={logo} alt="Nonalogo" />
      </div>
      <div className="progress-bar-container">
        <CircularProgressbar
          value={UserState.respondedQuestions}
          text={`${UserState.respondedQuestions}%`}
          styles={buildStyles({
            trailColor: colors.progressBackGround,
            pathColor: colors.secondaryColor,
            textColor: colors.creamWhiteBackground,
          })}
        />
        <p className="progress-bar-subtitle">Survey Progress</p>
      </div>
      <DropDownComponent />
      <div className="last-section">
        <h4 className="last-section-title">{LeftBarText.lastSection.title}</h4>
        <p className="last-section-content">{LeftBarText.lastSection.content}</p>
        <div className="social">
          <i className="fab fa-instagram" />
          <i className="fab fa-facebook-f" />
        </div>
      </div>
      <menu />
    </aside>
  );
};

export default LeftBar;
