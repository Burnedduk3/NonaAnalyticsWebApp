import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import HeaderTexts from './CONSTANTS';

const PublicHeader = (props) => {
  const { page } = props;
  const home = () => (
    <header className="header header-home">
      <div className="container" />
      <h1 className="main-title">{HeaderTexts.headers.home.text}</h1>
      <button type="button" className="quick-start">
        {HeaderTexts.headers.home.button}
      </button>
      <div className="call">
        <span className="call-text">{HeaderTexts.headers.home.span_text}</span>
        <button type="button" className="call-button">
          {HeaderTexts.headers.home.span_button}
        </button>
      </div>
    </header>
  );
  const lifeProject = () => (
    <header className="header header-life">
      <div className="container" />
      <h1 className="main-title">{HeaderTexts.headers.lifeProject.text}</h1>
      <div className="info">
        <span className="first">{HeaderTexts.headers.lifeProject.span[0]}</span>
        <span className="second">{HeaderTexts.headers.lifeProject.span[1]}</span>
        <span className="third">{HeaderTexts.headers.lifeProject.span[2]}</span>
      </div>
    </header>
  );
  const innovation = () => (
    <header className="header header-innovation">
      <div className="container" />
      <h1 className="main-title">{HeaderTexts.headers.innovation.text}</h1>
    </header>
  );
  const bePart = () => (
    <header className="header header-bepart">
      <div className="container" />
      <h1 className="main-title">{HeaderTexts.headers.bePart.text}</h1>
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
