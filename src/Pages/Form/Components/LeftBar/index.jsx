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
      <menu />
    </aside>
  );
};

export default LeftBar;