import React, {ChangeEvent, useEffect, useState} from 'react';
import {ILoginInterface} from '../interfaces/LoginInterface';
import CONSTANTS from './CONSTANTS';
import {Link, useHistory} from 'react-router-dom';
import
RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {
  HIDE_FOOTER,
  SET_ERROR,
} from '../../../../Context/ApplicationState/ActionTypes';
import './styles.scss';
import logo from '../../../../assets/Logos/logo.png';
import FBIcon from '../../../../assets/Icons/SocialMedia/facebook_color.png';
import GoogleIcon from '../../../../assets/Icons/SocialMedia/google_color.png';
import user from '../../../../assets/Icons/user.png';
import lock from '../../../../assets/Icons/lock.png';
// import {useUserState} from '../../../../Context/UserContext/Provider';
// import {ADD_USER} from '../../../../Context/UserContext/ActionTypes';
import validator from 'validator';
// eslint-disable-next-line max-len
// import {useFormQuestionState} from '../../../../Context/FormQuestions/Provider';
// import {
//   SET_CURRENT_FORM_ID,
// } from '../../../../Context/FormQuestions/ActionTypes';
import {ErrorMessageToast} from '../../../../Components/ErrorMessage';
import {Auth} from 'aws-amplify';

const initialInputState: ILoginInterface = {
  password: '',
  username: '',
};

const LoginPage : React.FC = (): JSX.Element =>{
  const [pageInputs, setPageInputs] = useState(initialInputState);
  const ApplicationState = useApplicationState();
  const history = useHistory();
  // const userState = useUserState();
  // const formState = useFormQuestionState();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const [redirectPath, setRedirectPath] = useState<string>('');
  const [toggleToast, setToggleToast] = useState<boolean>(false);
  const applicationState = useApplicationState();


  useEffect(() => {
    ApplicationState.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    applicationState.appStateDispatch(
        {
          type: SET_ERROR,
          payload: {
            error: {
              error: false,
              errorMessage: '',
            },
          },
        },
    );
  }, []);

  useEffect(
      () =>{
        if (isRedirecting) {
          redirect();
        }
      },
      [isRedirecting],
  );

  const goHome = () =>{
    history.push(RoutingConstants.menu.home.path);
  };

  const redirect = () => {
    if (redirectPath === RoutingConstants.verifyEmail.path) {
      history.push({
        pathname: redirectPath,
        state: {
          mail: pageInputs.username,
          password: pageInputs.password,
        },
      });
    } else {
      history.push(redirectPath);
    }
  };

  const signIn = async () => {
    const {username, password} = pageInputs;
    try {
      if (
        (validator.isEmail(username) || validator.isMobilePhone(username)) &&
          validator.isAscii(password)
      ) {
        const user = await Auth.signIn(username, password);
        console.log(user);
      } else {
        throw new Error('incorrect username or password');
      }
    } catch (error) {
      if (error.name === 'UserNotConfirmedException') {
        setRedirectPath(RoutingConstants.verifyEmail.path);
        setIsRedirecting(true);
      } else {
        setToggleToast(true);
        applicationState.appStateDispatch(
            {
              type: SET_ERROR,
              payload: {
                error: {
                  error: true,
                  errorMessage: error.message,
                },
              },
            },
        );
      }
    }
  };

  const triggerSignIn = () => {
    signIn();
  };

  const handleInput = (event:ChangeEvent<HTMLInputElement>) => {
    const {username, password} = pageInputs;
    if (event.target.name === 'username') {
      if (username.length + 1 < 60 ||
          event.target.value.length < username.length
      ) {
        setPageInputs({...pageInputs, username: event.target.value});
      }
    }

    if (event.target.name === 'password') {
      if (
        password.length <= 40 ||
          event.target.value.length < password.length
      ) {
        setPageInputs({...pageInputs, password: event.target.value});
      }
    }
  };

  const {error} = applicationState.appState;

  return (
    <main className="Login-body">
      {error.error && <ErrorMessageToast
        message={error.errorMessage}
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick={false}
        pauseOnHover={false}
        draggable={false}
        toggleToast={toggleToast}
        setToggleToast={setToggleToast}
      />}
      <div className="logo-container">
        <img src={logo} alt="logo" className="Nona-logo"/>
      </div>
      <div className="Login-card-container">
        <div className="go-back-container">
          <p onClick={goHome}>
            <i className="fas fa-caret-left"/>
            {CONSTANTS.backButton}
          </p>
        </div>
        <h2 className="page-title">Login</h2>
        <div className="login-socialMedia">
          <img
            src={GoogleIcon}
            alt="Google logo"
            // onClick={()=>fedarateGoogleSignin()}
          />
          <img
            src={FBIcon}
            alt="Facebook logo"
            // onClick={() => fedarateFacebookSignin()}
          />
        </div>
        <div className="horizontal-line">
          <hr/>
          O
          <hr/>
        </div>
        <form className="form-container">
          <label htmlFor="username" className="label user">
            <img src={user} alt="User Icon"/>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={pageInputs.username}
              className="username-text-field"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="password" className="label lock">
            <img src={lock} alt="Lock Icon"/>
            <input
              type="password"
              name="password"
              value={pageInputs.password}
              placeholder="Password"
              className="password-text-field"
              onChange={handleInput}
            />
          </label>
          <button type='button' onClick={triggerSignIn}>
            {CONSTANTS.ButtonText}
          </button>
        </form>
        <div className="no-account-container">
          <p className="no-account-text">
            {CONSTANTS.NoAccountText}
            <Link to={RoutingConstants.signUp.path}>{CONSTANTS.linkText}</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
