import React from 'react';
import {IPerk} from '../../interfaces/PerkInterfaces';
import './styles.scss';

const Perk: React.FC<IPerk> = ({img, text, title}:IPerk): JSX.Element => {
  return (
    <div className="perk">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Perk;
