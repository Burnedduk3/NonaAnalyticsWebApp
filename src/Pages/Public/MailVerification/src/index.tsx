import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RoutingConstants from '../../../../navigation/CONSTANTS/RoutingConstants';
import {
  HIDE_FOOTER,
  HIDE_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';
import { useApplicationState } from '../../../../Context/ApplicationState/Provider';
import './styles.scss';
import CONSTANTS from './CONSTANTS';
import logo from '../../../../assets/Logos/logo.png';
import { ErrorMessageToast } from '../../../../Components/ErrorMessage';

const MailVerificationPage: React.FC = (): JSX.Element => {
  const applicationState = useApplicationState();
  const [toggleToast, setToggleToast] = useState<boolean>(false);
  const history = useHistory();
  const goHome = () => {
    history.push(RoutingConstants.menu.home.path);
  };

  useEffect(() => {
    applicationState.appStateDispatch({ type: HIDE_FOOTER, payload: undefined });
    applicationState.appStateDispatch({ type: HIDE_HEADER, payload: undefined });
  }, []);

  const { error } = applicationState.appState;
  return (
    <main>
      {error.error && (
        <ErrorMessageToast
          message={error.errorMessage.toString()}
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={false}
          pauseOnHover={false}
          draggable={false}
          toggleToast={toggleToast}
          setToggleToast={setToggleToast}
        />
      )}
      <div className="Verification-Container">
        <div className="Logo-Container">
          <img src={logo} alt="Nona logo" />
        </div>
        <div className="Verification-Card">
          <div className="go-back-container">
            <p onClick={goHome}>
              <i className="fas fa-caret-left"></i>
              {CONSTANTS.backButton}
            </p>
          </div>
          <div className="text">
            <h2>{CONSTANTS.Title}</h2>
            <p>{CONSTANTS.text}.</p>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MailVerificationPage;
