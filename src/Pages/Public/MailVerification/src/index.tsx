import React, {ChangeEvent, useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import {
  HIDE_FOOTER,
  HIDE_HEADER, SET_ERROR,
} from '../../../../Context/ApplicationState/ActionTypes';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import './styles.scss';
import CONSTANTS from './CONSTANTS';
import {Link} from 'react-router-dom';
import logo from '../../../../assets/Logos/logo.png';
import {Auth} from 'aws-amplify';
import {useLocation} from 'react-router-dom';
import validator from 'validator';
import {ErrorMessageToast} from '../../../../Components/ErrorMessage';


const MailVerificationPage : React.FC = (): JSX.Element =>{
  const applicationState = useApplicationState();
  const [toggleToast, setToggleToast] = useState<boolean>(false);
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const history = useHistory();
  const [verificationCode, setVerificationCode] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const location = useLocation();
  // @ts-ignore
  const {mail, password} = location.state;
  const goHome = () =>{
    history.push(RoutingConstants.menu.home.path);
  };

  useEffect(()=>{
    applicationState.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    applicationState.appStateDispatch({type: HIDE_HEADER, payload: undefined});
    onSubmitVerificationCode();
  }, []);

  useEffect(()=>{
    if (isRedirecting) {
      history.push(RoutingConstants.login.path);
    }
  },
  [isRedirecting]);

  const verifyInput = ():void => {
    if (!validator.isNumeric(verificationCode.trim())) {
      throw new Error('Please Provide a valid Verification code');
    }
  };

  const onSubmitVerificationCode = async () =>{
    try {
      setIsLoading(true);
      verifyInput();
      const response = await Auth.confirmSignUp(mail, verificationCode);
      setIsLoading(false);
      setIsRedirecting(true);
    } catch (err) {
      setToggleToast(true);
      setIsLoading(false);
      applicationState.appStateDispatch(
          {
            type: SET_ERROR,
            payload: {
              error: {
                error: true,
                errorMessage: err.message,
              },
            },
          },
      );
    }
  };

  const {error} = applicationState.appState;
  return (
    <main>
      {error.error && <ErrorMessageToast
        message={error.errorMessage.toString()}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={false}
        draggable={false}
        toggleToast={toggleToast}
        setToggleToast={setToggleToast}
      />}
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
          <label
            htmlFor="verificationCode"
            className="verificationLabel"
          >
            <p>{CONSTANTS.labelText}</p>
            <input type="text"
              name={'verificationCode'}
              value={verificationCode}
              onChange={(e:ChangeEvent<HTMLInputElement>)=>{
                setVerificationCode(e.target.value);
              }}
            />
          </label>
          <div className='resend'>
            <h4>{CONSTANTS.buttonLabel}</h4>
            <button
              type="button"
              onClick={onSubmitVerificationCode}
              disabled={isLoading}
              className={`${isLoading? 'diasbled':''}`}
            >
              {CONSTANTS.verify}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
export default MailVerificationPage;
