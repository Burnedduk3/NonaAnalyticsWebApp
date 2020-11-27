import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Button = (props) => {
  const { details } = props;
  const red = () => (
    <div className="button">
      <Link className="link" to={details.to}>
        <div className="link-red">
          {details.text}
        </div>
      </Link>
    </div>
  );
  const blue = () => (
    <div className="button">
      <Link className="link" to={details.to}>
        <div className="link-blue">
          {details.text}
        </div>
      </Link>
    </div>
  );
  return (
    <>
      {(details.color === 'red') && (
        red()
      )}
      {(details.color === 'blue') && (
        blue()
      )}
    </>
  );
};

Button.propTypes = {
  details: PropTypes.objectOf({
    color: PropTypes.string,
    text: PropTypes.string,
    to: PropTypes.string,
  }),
};

Button.defaultProps = {
  details: '',
};

export default Button;
