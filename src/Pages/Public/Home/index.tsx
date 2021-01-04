import React from 'react';
import './styles.scss';
import Perk from './Components/Perk';
import HomeTexts from './CONSTANTS';

const Home: React.FC = (): JSX.Element => (
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
              (item)=>(
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
    </div>
    <div className="our-team">
    </div>
  </>
);

export default Home;
