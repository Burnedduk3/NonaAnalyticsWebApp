import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { INavBarElementProps } from './interface';

const NavBarElement: React.FC<INavBarElementProps> = ({
  name,
  route,
}: INavBarElementProps): JSX.Element => {
  return (
    <li key={name} className="list-element">
      <Link to={route} className="link-reference">
        {name}
      </Link>
    </li>
  );
};

export default NavBarElement;
