import React from 'react';
import './styles.scss';
import NavBarElement from '../NavBarElement';
import RoutingConstants from '../../../navigation/CONSTANTS/RoutingConstants';

const PublicNavBar = () => (
  <nav className="navigation">
    <ul className="class-list">
      {
        Object.values(RoutingConstants.menu).map((item) => (
          <NavBarElement name={item.name} route={item.path} key={item.name} />
        ))
      }
    </ul>
  </nav>
);

export default PublicNavBar;
