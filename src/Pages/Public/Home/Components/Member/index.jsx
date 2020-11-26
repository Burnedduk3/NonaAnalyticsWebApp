import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Member = (props) => {
  const { member } = props;
  const type = () => {
    let memberClass = 'eng';
    if (member.med) {
      memberClass = 'med';
    }
    return memberClass;
  };

  return (
    <div className={type()}>
      <div className="name-container">
        <span className="name">{ member.name }</span>
      </div>
      <div className="title-container">
        <span className="role">{ member.title }</span>
      </div>
    </div>
  );
};

Member.propTypes = {
  member: PropTypes.element,
};

Member.defaultProps = {
  member: {},
};

export default Member;
