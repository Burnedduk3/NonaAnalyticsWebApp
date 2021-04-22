import React from 'react';
import './styles.scss';
import { IMilestone } from '../../interfaces/MilestonesInterfaces';

const Milestone: React.FC<IMilestone> = ({
  color,
  Milestones,
}: IMilestone): JSX.Element => {
  return (
    <div className="milestone">
      <span className={`circle circle-${color}`} />
      <h3 className="date date-date1">{Milestones.title.substr(0, 2)}</h3>
      <h3 className={`date date-${color}`}>
        {Milestones.title.substr(2, Milestones.title.length)}
      </h3>
      <p>{Milestones.text}</p>
    </div>
  );
};

export default Milestone;
