import React from 'react';
import Milestone from './Components/Milestone';
import LifeProjectText from './CONSTANTS';
import './styles.scss';
import {MilestoneClass} from './interfaces/MilestonesInterfaces';

const LifeProject: React.FC = (): JSX.Element => (
  <>
    <div className="content">
      <h3 className="subtitle">{LifeProjectText.firstPart.title}</h3>
      <ul>
        {
          LifeProjectText.firstPart.list.map((item, index) => (
            <li key={`${index}first`}>{item}</li>
          ))
        }
      </ul>
      <h3 className="subtitle">{LifeProjectText.secondPart.title}</h3>
      <p>{LifeProjectText.secondPart.paragraph}</p>
      <ul>
        {
          LifeProjectText.secondPart.list.map((item, index) => (
            <li key={`${index}second`}>{item}</li>
          ))
        }
      </ul>
      <div className="milestones">
        {
          Object.values(LifeProjectText.thirdPart).map((item, index) => {
            const color = index === 2 || index === 3 ? 'prim' : 'second';
            return (
              <Milestone
                key={`${index}third`}
                item={new MilestoneClass(item.title, item.text)} color={color}
              />);
          })
        }
      </div>
    </div>
  </>
);

export default LifeProject;
