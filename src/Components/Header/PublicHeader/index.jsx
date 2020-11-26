import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import HeaderTexts from './CONSTANTS';

const PublicHeader = (props) => {
  const { page } = props;
  const home = () => (
    <header className="header header-home">
      <div className="container" />
      <h1 className="main-title">{HeaderTexts.headers.home}</h1>
      <button type="button" className="quick-start">
        LEARN MORE
      </button>
      <div className="call">
        <span className="call-text">Do you want to be part of the community?</span>
        <button type="button" className="call-button">
          Quick start
        </button>
      </div>
    </header>
  );
  const lifeProject = () => (
    <header className="header header-life">
      <div className="container" />
      <h1 className="main-title">{HeaderTexts.headers.lifeProject}</h1>
      <div className="info">
        <span className="first">{HeaderTexts.spans.lifeProject[0]}</span>
        <span className="second">{HeaderTexts.spans.lifeProject[1]}</span>
        <span className="third">{HeaderTexts.spans.lifeProject[2]}</span>
      </div>
    </header>
  );
  const innovation = () => (
    <header className="header header-innovation">
      <div className="container" />
      <h1 className="main-title">{HeaderTexts.headers.innovation}</h1>
    </header>
  );
  const bePart = () => (
    <header className="header header-bepart">
      <div className="container" />
      <h1 className="main-title">{HeaderTexts.headers.bePart}</h1>
    </header>
  );
  return (
    <>
      {(page === 'home') && (
        home()
      )}
      {(page === 'lifeProject') && (
        lifeProject()
      )}
      {(page === 'innovation') && (
        innovation()
      )}
      {(page === 'bePart') && (
        bePart()
      )}
    </>
  );
};

PublicHeader.propTypes = {
  page: PropTypes.string,
};

PublicHeader.defaultProps = {
  page: '',
};

export default PublicHeader;
