import React from 'react';
import './styles.scss';
import {IMember} from '../../interfaces/MemberInterfaces';

const Member: React.FC<IMember> = (
    {
      memberClass,
      name,
      title,
    }:IMember,
): JSX.Element => {
  return (
    <div className={memberClass}>
      <div className="name-container">
        <span className="name">{ name }</span>
      </div>
      <div className="title-container">
        <span className="role">{ title }</span>
      </div>
    </div>
  );
};
export default Member;
