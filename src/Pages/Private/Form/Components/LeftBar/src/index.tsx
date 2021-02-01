import React from 'react';
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import colors from '../../../../../../Global/js/colors';
import logo from '../../../../../../assets/Logos/logo.png';
import DropDownComponent from '../DropDown';
import LeftBarText, {
  LEFT_BAR_SECTIONS,
} from './CONSTANTS';
import {
  useFormQuestionState,
} from '../../../../../../Context/FormQuestions/Provider';
import './styles.scss';


const LeftBar: React.FC = ():JSX.Element => {
  const formState = useFormQuestionState();
  return (
    <aside className="aside-menu">
      <div className="header-aside-container">
        <div className="form-nona-logo-container">
          <img className="form-nona-logo" src={logo} alt="Nonalogo" />
        </div>
        <div className="progress-bar-container">
          <CircularProgressbar
            value={
                formState?.formState.currentProgress?
                formState?.formState.currentProgress:
                0
            }
            text={`${formState?.formState.currentProgress}%`}
            styles={buildStyles(
                {
                  trailColor: colors.progressBackGround,
                  pathColor: colors.secondaryColor,
                  textColor: colors.creamWhiteBackground,
                })}
          />
          <p className="progress-bar-subtitle">Survey Progress</p>
        </div>
      </div>
      <div className="drop-down-menu">
        {
          Object.keys(LEFT_BAR_SECTIONS).map((key: string)=>{
            return <ul
              key={key}
            >
              <li className="main-options" id="health">
                <p className="btn">{LEFT_BAR_SECTIONS[key].text}</p>
              </li>
              <li>
                <DropDownComponent
                  subSections={LEFT_BAR_SECTIONS[key].subSections}
                />
              </li>
            </ul>;
          })
        }
      </div>
      <div className="last-section">
        <h4 className="last-section-title">{LeftBarText.lastSection.title}</h4>
        {/* eslint-disable-next-line max-len */}
        <p className="last-section-content">{LeftBarText.lastSection.content}</p>
        <div className="social">
          <i className="fab fa-instagram" />
          <i className="fab fa-facebook-f" />
        </div>
      </div>
    </aside>
  );
};

export default LeftBar;
