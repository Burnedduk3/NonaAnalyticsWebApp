import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const NavBarElement = (props) => {
  const { name, route } = props;

  if (name === 'Mobile App' || name === 'Survey') {
    return (
      <li key={name} className="list-element">
        <a className="link-reference" href={route}>{name}</a>
      </li>
    );
  }

  return (
    <li key={name} className="list-element">
      <Link to={route} className="link-reference">{name}</Link>
    </li>
  );
};

NavBarElement.propTypes = {
  name: PropTypes.string,
  route: PropTypes.string,
};

NavBarElement.defaultProps = {
  name: '',
  route: '',
};

export default NavBarElement;
