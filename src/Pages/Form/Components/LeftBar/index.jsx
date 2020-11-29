import React, { useContext } from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles.scss';
import colors from '../../../../Global/js/colors';
import { UserContext } from '../../../../Context/UserContext/Provider';

const LeftBar = () => {
  const { UserState } = useContext(UserContext);
  return (
    <aside className="aside-menu">
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
      </div>
      <div className="drop-down-menu">
        <ul>
          <li className="main-options" id="lake">Lake Nona</li>
          <li className="main-options" id="health">
            <a href="#health" className="btn">Health</a>
            <div className="submenu" id="health-submenu">
              <a href="#health-submenu" className="options">Demographics</a>
              <a href="#health-submenu" className="options">Quality of Life</a>
              <a href="#health-submenu" className="options">Your Health (Doctor, Prescription)</a>
              <a href="#health-submenu" className="options">Health Behaviors</a>
            </div>
          </li>
          <li className="main-options" id="mood">
            <a href="#mood" className="btn">Mood</a>
            <ul className="submenu" id="mood-submenu">
              <a href="#mood-submenu" className="options">Oral Health</a>
              <a href="#mood-submenu" className="options">Health Behaviors (Nutrition, Exercise)</a>
              <a href="#mood-submenu" className="options">Time Use</a>
              <a href="#mood-submenu" className="options">Low Mood</a>
              <a href="#mood-submenu" className="options">Pets</a>
              <a href="#mood-submenu" className="options">High Mood</a>
              <a href="#mood-submenu" className="options">Stressful Life Experiences</a>
            </ul>
          </li>
          <li className="main-options" id="social">
            <a href="#social" className="btn">Social</a>
            <div className="submenu" id="social-submenu">
              <a href="#social-submenu" className="options">Your Personality</a>
              <a href="#social-submenu" className="options">Employment</a>
              <a href="#social-submenu" className="options">Social Networks</a>
              <a href="#social-submenu" className="options">Your Neighborhood</a>
              <a href="#social-submenu" className="options">Religiousness & Spirituality</a>
              <a href="#social-submenu" className="options">Sleep Quality Index</a>
            </div>
          </li>
        </ul>
      </div>
      <menu />
    </aside>
  );
};

export default LeftBar;
