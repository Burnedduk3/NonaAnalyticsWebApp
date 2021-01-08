import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import HeaderTexts from './CONSTANTS';
import PublicNavBar from '../../Navbar/PublicNavBar';

const PublicHeader = (props) => {
  const { page } = props;
  const home = () => (
    <>
      <header className="header header-home">
        <PublicNavBar theme="light" />
        <div className="container" />
        <div className="social">
          <i className="fab fa-instagram" />
          <i className="fab fa-facebook-f" />
        </div>
        <h1 className="main-title">
          {HeaderTexts.home.text.substr(0, 8)}
          <span className="title-secondary">
            {HeaderTexts.home.text.substr(8, 8)}
          </span>
          <br />
          {HeaderTexts.home.text.substr(16, HeaderTexts.home.text.length)}
        </h1>
        <button type="button" className="quick-start">
          {HeaderTexts.home.button}
        </button>
        <div className="call">
          <span className="call-text">{HeaderTexts.home.span_text}</span>
          <button type="button" className="call-button">
            {HeaderTexts.home.span_button}
          </button>
        </div>
      </header>
    </>
  );
  const lifeProject = () => (
    <header className="header header-life">
      <PublicNavBar theme="dark" />
      <div className="container" />
      <div className="social">
        <i className="fab fa-instagram" />
        <i className="fab fa-facebook-f" />
      </div>
      <h1 className="main-title">
        <span className="title-secondary">
          {HeaderTexts.lifeProject.text.substr(0, 13)}
        </span>
        <br />
        <span className="title-primary">
          {HeaderTexts.lifeProject.text.substr(13, HeaderTexts.innovation.text.length)}
        </span>
      </h1>
      <div className="info">
        <span className="first">{HeaderTexts.lifeProject.span[0]}</span>
        <span className="second">{HeaderTexts.lifeProject.span[1]}</span>
        <span className="third">{HeaderTexts.lifeProject.span[2]}</span>
      </div>
    </header>
  );
  const innovation = () => (
    <header className="header header-innovation">
      <PublicNavBar />
      <div className="container" />
      <div className="social">
        <i className="fab fa-instagram" />
        <i className="fab fa-facebook-f" />
      </div>
      <h1 className="main-title">{HeaderTexts.innovation.text}</h1>
    </header>
  );
  const bePart = () => (
    <header className="header header-bepart">
      <PublicNavBar theme="dark" />
      <div className="container" />
      <div className="social">
        <i className="fab fa-instagram" />
        <i className="fab fa-facebook-f" />
      </div>
      <h1 className="main-title">
        <span className="title-secondary">{HeaderTexts.bePart.text.substr(0, 13)}</span>
        <br />
        <span className="title-primary">
          {HeaderTexts.bePart.text.substr(13, HeaderTexts.bePart.text.length)}
        </span>
      </h1>
    </header>
  );
  const startSurvey = () => (
    <header className="header header-startSurvey">
      <PublicNavBar theme="dark" />
      <div className="container" />
      <div className="social">
        <i className="fab fa-instagram" />
        <i className="fab fa-facebook-f" />
      </div>
      <h1 className="main-title">
        <span className="title-primary">
          {HeaderTexts.startSurvey.text}
        </span>
      </h1>
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
      {(page === 'startSurvey') && (
        startSurvey()
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
