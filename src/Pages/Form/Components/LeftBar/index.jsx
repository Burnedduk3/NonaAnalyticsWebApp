import React from 'react';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './styles.scss';
import colors from '../../../../Global/js/colors';

const LeftBar = () => {
  const percentage = Math.floor(Math.random() * Math.floor(100));

  return (
    <aside className="aside-menu">
      <div className="progress-bar-container">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            trailColor: colors.progressBackGround,
            pathColor: colors.secondaryColor,
            textColor: colors.creamWhiteBackground,
          })}
        />
      </div>
      <menu />
    </aside>
  );
};

export default LeftBar;
