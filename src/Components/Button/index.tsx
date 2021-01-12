import React from 'react';
import './styles.scss';
import {Link} from 'react-router-dom';
import {IButtonProps} from './interface';

const Button: React.FC<IButtonProps> = (
    {
      color,
      text,
      to,
    }:IButtonProps,
): JSX.Element => {
  return (
    <div className="button">
      <Link className="link" to={to}>
        <div className={`link-${color}`}>
          {text}
        </div>
      </Link>
    </div>
  );
};

export default Button;
