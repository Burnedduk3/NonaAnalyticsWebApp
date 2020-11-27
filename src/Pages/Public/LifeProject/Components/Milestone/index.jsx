import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Milestone = (props) => {
  const { item, color } = props;
  return (
    <div className="milestone">
      <span className={`circle circle-${color}`} />
      <h3 className="date date-date1">{item.title.substr(0, 2)}</h3>
      <h3 className={`date date-${color}`}>{item.title.substr(2, item.title.length)}</h3>
      <p>{item.text}</p>
    </div>
  );
};

Milestone.propTypes = {
  item: PropTypes.element,
  color: PropTypes.string,
};

Milestone.defaultProps = {
  item: {},
  color: '',
};

export default Milestone;
