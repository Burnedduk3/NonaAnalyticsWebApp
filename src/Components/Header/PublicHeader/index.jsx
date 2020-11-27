import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import HeaderTexts from './CONSTANTS';

const PublicHeader = (props) => {
  const { page } = props;
  const home = () => (
    <header className="header header-home">
      <div className="container" />
      <div className="social">
        <i className="fab fa-instagram" />
        <i className="fab fa-facebook-f" />
      </div>
      <h1 className="main-title">{HeaderTexts.home.text}</h1>
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
  );
  const lifeProject = () => (
    <header className="header header-life">
      <div className="container" />
      <div className="social">
        <i className="fab fa-instagram" />
        <i className="fab fa-facebook-f" />
      </div>
      <h1 className="main-title">
        <span className="title-secondary">{HeaderTexts.lifeProject.text.substr(0, 13)}</span>
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
      <div className="container" />
      <h1 className="main-title">{HeaderTexts.bePart.text}</h1>
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
