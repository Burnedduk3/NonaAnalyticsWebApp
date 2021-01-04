import React from 'react';
import './styles.scss';
import {IMilestone} from '../../interfaces/MilestonesInterfaces';

const Milestone: React.FC<IMilestone> = (
    {
      color,
      item,
    }:IMilestone,
): JSX.Element => {
  return (
    <div className="milestone">
      <span className={`circle circle-${color}`} />
      <h3 className="date date-date1">{item.title.substr(0, 2)}</h3>
      <h3 className={`date date-${color}`}>
        {item.title.substr(2, item.title.length)}
      </h3>
      <p>{item.text}</p>
    </div>
  );
};

export default Milestone;
