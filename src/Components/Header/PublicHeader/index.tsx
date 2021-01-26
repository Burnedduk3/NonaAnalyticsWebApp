import React from 'react';
import './styles.scss';
import HeaderTexts from './CONSTANTS';
import PublicNavBar from '../../Navbar/PublicNavBar';
import {IPublicHeaderProps} from './interface';
import RoutingConstants from '../../../navigation/CONSTANTS/RoutingConstants';
import {useApplicationState} from '../../../Context/ApplicationState/Provider';
import {useHistory} from 'react-router-dom';
import arrow from '../../../assets/Icons/long-arrow-right.png';


const PublicHeader: React.FC<IPublicHeaderProps> = (
    {page}: IPublicHeaderProps,
): JSX.Element => {
  const history = useHistory();

  const QuickStart = () => {
    history.push(RoutingConstants.form.path);
  };

  const LifeProjectEvent = () => {
    history.push(RoutingConstants.menu.lifeProject.path);
  };

  const home = () => (
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
      <button type="button" className="quick-start" onClick={LifeProjectEvent}>
        {HeaderTexts.home.button}
      </button>
      <div className="call">
        <span className="call-text">{HeaderTexts.home.span_text}</span>
        <button type="button" className="call-button" onClick={QuickStart}>
          {HeaderTexts.home.span_button}
          <img src={arrow} alt="Icons8 long-arrow-right" />
        </button>
      </div>
    </header>
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
          {
            HeaderTexts.lifeProject.text.substr(
                13, HeaderTexts.innovation.text.length,
            )
          }
        </span>
      </h1>
      <div className="info">
        <span className="first">{HeaderTexts.lifeProject.span[0]}</span>
        <span className="second">{HeaderTexts.lifeProject.span[1]}</span>
        <span className="third">{HeaderTexts.lifeProject.span[2]}</span>
      </div>
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
        <span
          className="title-secondary"
        >
          {HeaderTexts.bePart.text.substr(0, 13)}
        </span>
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
        <span
          className="title-primary"
        >
          {HeaderTexts.startSurvey.text}
        </span>
        <br />
      </h1>
    </header>
  );

  const ApplicationState = useApplicationState();
  return (
    <>
      {ApplicationState.appState.hideHeader ?
            <></> :
        <>
          {(page === RoutingConstants.menu.home.path) && (
            home()
          )}
          {(page === RoutingConstants.menu.lifeProject.path) && (
            lifeProject()
          )}
          {(page === RoutingConstants.menu.bePart.path) && (
            bePart()
          )}
          {(page === RoutingConstants.form.path) && (
            startSurvey()
          )}
        </>
      }
    </>
  );
};

export default PublicHeader;
