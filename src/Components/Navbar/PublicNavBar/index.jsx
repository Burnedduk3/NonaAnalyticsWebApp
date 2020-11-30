import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBarElement from '../NavBarElement';
import RoutingConstants from '../../../navigation/CONSTANTS/RoutingConstants';
import Logo from '../../../assets/Logos/logo.png';

const PublicNavBar = (props) => {
  const { theme } = props;
  return (
    <nav className={`navigation navigation-${theme}`}>
      <Link to={RoutingConstants.menu.home.path}>
        <img className="logo" src={Logo} alt="logo" />
      </Link>
      <ul className="class-list">
        {
                Object.values(RoutingConstants.menu).map((item) => (
                  <NavBarElement name={item.name} route={item.path} key={item.name} />
                ))
            }
      </ul>
    </nav>
  );
};

PublicNavBar.propTypes = {
  theme: PropTypes.string,
};

PublicNavBar.defaultProps = {
  theme: '',
};

export default PublicNavBar;
