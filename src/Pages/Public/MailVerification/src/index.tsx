import React, {useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import {
  HIDE_FOOTER,
  HIDE_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import './styles.scss';
import CONSTANTS from './CONSTANTS';
import {Link} from 'react-router-dom';
import logo from '../../../../assets/Logos/logo.png';

const MailVerificationPage : React.FC = (): JSX.Element =>{
  const applicationState = useApplicationState();
  const history = useHistory();

  const goHome = () =>{
    history.push(RoutingConstants.menu.home.path);
  };

  useEffect(()=>{
    applicationState?.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    applicationState?.appStateDispatch({type: HIDE_HEADER, payload: undefined});
  }, []);

  return (
    <main>
      <div className='Verification-Container'>
        <div className='Logo-Container'>
          <img src={logo} alt='Nona logo'/>
        </div>
        <div className='Verification-Card'>
          <div className='go-back-container'>
            <p onClick={goHome}>
              <i className="fas fa-caret-left"></i>
              {CONSTANTS.backButton}
            </p>
          </div>
          <div className='text'>
            <h2>{CONSTANTS.Title}</h2>
            <p>
              {CONSTANTS.text} (
              <Link to={RoutingConstants.signUp.path}>{CONSTANTS.link}</Link>
              ).
            </p>
          </div>
          <div className='resend'>
            <h4>{CONSTANTS.buttonLabel}</h4>
            <button type="button" >
              {CONSTANTS.resend}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MailVerificationPage;
