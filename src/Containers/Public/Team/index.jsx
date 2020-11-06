import React from 'react';
import './styles.scss';
import TeamTextConstants from './textConstants';

const Team = () => (
  <main className="team-content-container">
    <h2 className="title">{TeamTextConstants.title}</h2>
    <div className="nona-analytics">
      {
        Object.values(TeamTextConstants.nonaAnalyticsLlc).map((person) => (
          <div className="individual">
            <p className="name">{person.name}</p>
            <p className="title">{person.title}</p>
          </div>
        ))
      }
    </div>
    <div className="asmevida">
      <h3 className="title">{TeamTextConstants.asmevida.asociation}</h3>
      {
        Object.values(TeamTextConstants.asmevida.persons).map((person) => (
          <div className="individual">
            <p className="name">{person.name}</p>
            <p className="title">{person.title}</p>
          </div>
        ))
      }
    </div>
  </main>
);

export default Team;
