import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import './styles.scss';
import Perk from '../Components/Perk';
import HomeTexts from './CONSTANTS';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {
  SHOW_FOOTER,
  SHOW_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';
import Member from '../Components/Member/index';
// eslint-disable-next-line max-len
import RoutingConstants from '../../../../navigation/CONSTANTS/RoutingConstants';
import {useUserState} from '../../../../Context/UserContext/Provider';
import {
  SEARCH_LOCAL_STORAGE,
} from '../../../../Context/UserContext/ActionTypes';

const Home: React.FC = (): JSX.Element => {
  const applicationState = useApplicationState();
  const history = useHistory();
  const userState = useUserState();

  const LifeProjectEvent = () => {
    history.push(RoutingConstants.menu.lifeProject.path);
  };

  const StartSurvey = () => {
    history.push(RoutingConstants.form.path);
  };

  useEffect(()=>{
    applicationState?.appStateDispatch({type: SHOW_HEADER, payload: undefined});
    applicationState?.appStateDispatch({type: SHOW_FOOTER, payload: undefined});
    userState.userStateDispatch({
      type: SEARCH_LOCAL_STORAGE,
      payload: undefined,
    });
  }, []);

  return (
    <>
      <div className="our-mission">
        <div className="our-mission-content">
          <h3 className="subtitle">{HomeTexts.sections.first.title}</h3>
          <p>{HomeTexts.sections.first.text}</p>
          {/* eslint-disable-next-line max-len */}
          <button className="red-button" type="button" onClick={LifeProjectEvent}>
            {HomeTexts.sections.first.button.text}
          </button>
        </div>
      </div>

      <div className="what-do-we-do">
        <h3 className="subtitle">{HomeTexts.title}</h3>
        <div className="perks">
          {
            Object.values(HomeTexts.sections.second).map(
                (item) => (
                  <Perk
                    key={item.title}
                    img={item.img}
                    title={item.title}
                    text={item.text}
                  />
                ),
            )
          }
        </div>
        <button type="button" className="red-button" onClick={StartSurvey}>
          {HomeTexts.sections.button.text}
        </button>
      </div>

      <div className="our-team">
        <h3 className="subtitle">{HomeTexts.sections.third.title}</h3>
        {
          Object.values(HomeTexts.sections.third.members.first).map(
              (item) => (
                <Member key={item.name}
                  memberClass={item.role}
                  name={item.name}
                  title={item.title}
                />
              ),
          )
        }
        <h2 className="subsubtitle">{HomeTexts.sections.third.subtitle}</h2>
        <div className='medsContainer'>
          {
            Object.values(HomeTexts.sections.third.members.second).map(
                (item) => (
                  <Member key={item.name}
                    memberClass={item.role}
                    name={item.name}
                    title={item.title}
                  />
                ),
            )
          }
        </div>
      </div>
    </>
  );
};


export default Home;
