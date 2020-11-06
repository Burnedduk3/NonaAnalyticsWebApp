import React from 'react';
import './styles.scss';
import MissionTextConstants from './textConstants';

const Mission = () => (
  <main className="mission-content-container">
    <h2 className="title">{MissionTextConstants.title}</h2>
    <p>{MissionTextConstants.mision}</p>
  </main>
);

export default Mission;
