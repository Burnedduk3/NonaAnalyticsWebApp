import React, {useEffect} from 'react';
import './styles.scss';
import Perk from './Components/Perk';
import HomeTexts from './CONSTANTS';
import {useApplicationState} from '../../../Context/ApplicationState/Provider';
import {
  SHOW_FOOTER,
  SHOW_HEADER,
} from '../../../Context/ApplicationState/ActionTypes';
import {API} from 'aws-amplify';

const Home: React.FC = (): JSX.Element => {
  const applicationState = useApplicationState();

  useEffect(()=>{
    applicationState?.appStateDispatch({type: SHOW_HEADER, payload: undefined});
    applicationState?.appStateDispatch({type: SHOW_FOOTER, payload: undefined});
  }, []);

  const TestAthenaDataBase = async () => {
    const response = await API.get('athenaConnectApi', '/connect', {});
    console.log(response);
  };

  return (
    <>
      <div className="our-mission">

        <div className="our-mission-content">
          <h3 className="subtitle">{HomeTexts.sections.first.title}</h3>
          <p>{HomeTexts.sections.first.text}</p>
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

        <button
          type="button"
          onClick={TestAthenaDataBase}
        >
              Click Me !!!!
        </button>
      </div>
      <div className="our-team">
      </div>
    </>
  );
};


export default Home;
