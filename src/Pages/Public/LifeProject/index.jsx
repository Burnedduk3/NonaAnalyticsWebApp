import React from 'react';
import LifeProjectText from './CONSTANTS';
import './styles.scss';
import PublicHeader from '../../../Components/Header/PublicHeader';
import Milestone from './Components/Milestone';

const LifeProject = () => (
  <>
    <PublicHeader page="lifeProject" />
    <div className="content">
      <h3 className="subtitle">{LifeProjectText.firstPart.title}</h3>
      <ul>
        <li>{LifeProjectText.firstPart.list[0]}</li>
        <li>{LifeProjectText.firstPart.list[1]}</li>
        <li>{LifeProjectText.firstPart.list[2]}</li>
        <li>{LifeProjectText.firstPart.list[3]}</li>
      </ul>
      <h3 className="subtitle">{LifeProjectText.secondPart.title}</h3>
      <p>{LifeProjectText.secondPart.paragraph}</p>
      <ul>
        <li>{LifeProjectText.secondPart.list[0]}</li>
        <li>{LifeProjectText.secondPart.list[1]}</li>
        <li>{LifeProjectText.secondPart.list[2]}</li>
        <li>{LifeProjectText.secondPart.list[3]}</li>
      </ul>
      <div className="milestones">
        <Milestone item={LifeProjectText.thirdPart.item1} />
        <Milestone item={LifeProjectText.thirdPart.item2} />
        <Milestone item={LifeProjectText.thirdPart.item3} />
        <Milestone item={LifeProjectText.thirdPart.item4} />
        <Milestone item={LifeProjectText.thirdPart.item5} />
      </div>
    </div>
  </>
);

export default LifeProject;
