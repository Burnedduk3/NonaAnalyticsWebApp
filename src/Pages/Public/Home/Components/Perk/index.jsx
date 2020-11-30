import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const Perk = (props) => {
  const { text } = props;

  return (
    <div className="perk">
      <img src={text.img.default} alt={text.title} />
      <h3>{text.title}</h3>
      <p>{text.text}</p>
    </div>
  );
};

Perk.propTypes = {
  text: PropTypes.objectOf({
    title: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string.isRequired,
  }),
};

Perk.defaultProps = {
  text: '',
};

export default Perk;
