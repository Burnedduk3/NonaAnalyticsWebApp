import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

const BePartContent = (props) => {
  const { details } = props;

  const left = () => (
    <div className="content">
      <div className="wrapperBP wrapperBP-left">
        <div className="one">
          <img src={details.img.default} alt={details.title} />
        </div>
        <div className="two">
          <h2>{details.title}</h2>
          <p>{details.text}</p>
        </div>
      </div>
    </div>
  );
  const right = () => (
    <div className="content-right">
      <div className="wrapperBP wrapperBP-right">
        <div className="one">
          <h2>{details.title}</h2>
          <p>{details.text}</p>
        </div>
        <div className="two">
          <img src={details.img.default} alt={details.title} />
        </div>
      </div>
    </div>
  );
  return (
    <>
      {(details.align === 'left') && (
        left()
      )}
      {(details.align === 'right') && (
        right()
      )}
    </>
  );
};

BePartContent.propTypes = {
  details: PropTypes.objectOf({
    align: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string.isRequired,
  }),
};

BePartContent.defaultProps = {
  details: '',
};

export default BePartContent;
