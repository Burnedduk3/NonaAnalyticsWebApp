import React, {useEffect} from 'react';
import './styles.scss';
import Perk from './Components/Perk';
import HomeTexts from './CONSTANTS';
import {useApplicationState} from '../../../Context/ApplicationState/Provider';
import {
  SHOW_FOOTER,
  SHOW_HEADER,
} from '../../../Context/ApplicationState/ActionTypes';

import Auth from '@aws-amplify/auth';
import Lambda from 'aws-sdk/clients/lambda'; // npm install aws-sdk

const Home: React.FC = (): JSX.Element => {
  const applicationState = useApplicationState();

  useEffect(()=>{
    applicationState?.appStateDispatch({type: SHOW_HEADER, payload: undefined});
    applicationState?.appStateDispatch({type: SHOW_FOOTER, payload: undefined});
  }, []);

  const TestAthenaDataBase = () =>{
    // console.log('CLICKED');


    Auth.currentCredentials()
        .then((credentials) => {
          console.log('CLICKED');
          const lambda = new Lambda({
            credentials: Auth.essentialCredentials(credentials),
          });
          return lambda.invoke({
            FunctionName: 'athenaConnect',
            Payload: JSON.stringify(
                {
                  userid: '1234',
                  type: 'YESNO',
                  answer: `YES`,
                  date: '2019-09-22',
                },
            ),
          });
        });
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
