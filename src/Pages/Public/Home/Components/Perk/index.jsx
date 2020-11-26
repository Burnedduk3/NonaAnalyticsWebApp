import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Perk = (props) => {
  const { text } = props;

  return (
    <div className="perk">
      <img src="" alt="" />
      <p>{text}</p>
    </div>
  );
};

Perk.propTypes = {
  text: PropTypes.string,
};

Perk.defaultProps = {
  text: '',
};

export default Perk;
