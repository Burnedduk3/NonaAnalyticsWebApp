import React from 'react';
import './styles.scss';
import PublicHeader from '../../../Components/Header/PublicHeader';
import Perk from './Components/Perk/index';
import Member from './Components/Member/index';
import HomeTexts from './CONSTANTS';
import Footer from '../../../Components/Footer';

const Home = () => (
  <>
    <PublicHeader page="lifeProject" />
    <div className="our-mission">
      <div className="our-mission-content">
        <h3 className="subtitle">{HomeTexts.sections.first.title}</h3>
        <p>{HomeTexts.sections.first.text}</p>
      </div>
    </div>
    <div className="what-do-we-do">
      <h3 className="subtitle">{HomeTexts.sections.second.title}</h3>
      <div className="perks">
        <Perk text={HomeTexts.sections.second.elem1} />
        <Perk text={HomeTexts.sections.second.elem2} />
        <Perk text={HomeTexts.sections.second.elem3} />
      </div>
    </div>
    <div className="our-team">
      <h3 className="subtitle">{HomeTexts.sections.third.title}</h3>
      {HomeTexts.sections.third.members.map((member) => (
        member.med ? null : <Member member={member} />
      ))}
      <h4 className="subtitle sm">{HomeTexts.sections.third.subtitle}</h4>
      <div className="meds">
        {HomeTexts.sections.third.members.map((member) => (
          !member.med ? null : <Member member={member} />
        ))}
      </div>
    </div>
  </>
);

export default Home;
