import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Milestone = (props) => {
  const { item } = props;
  return (
    <div className="milestone">
      <h3 className="date">{item.title}</h3>
      <p>{item.text}</p>
    </div>
  );
};

Milestone.propTypes = {
  item: PropTypes.element,
};

Milestone.defaultProps = {
  item: {},
};

export default Milestone;
