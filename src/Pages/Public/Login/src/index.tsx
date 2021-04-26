import React, { ChangeEvent, useEffect, useState } from 'react';
import { ILoginInterface } from '../interfaces/LoginInterface';
import CONSTANTS from './CONSTANTS';
import { Link, useHistory } from 'react-router-dom';
import RoutingConstants from '../../../../navigation/CONSTANTS/RoutingConstants';
import { useApplicationState } from '../../../../Context/ApplicationState/Provider';
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
import validator from 'validator';
import { ErrorMessageToast } from '../../../../Components/ErrorMessage';
import { Auth } from 'aws-amplify';
import { IGetUserParams, useGetUser } from '../../../../hooks/GetUserData';
import { IStartFormParams, useStartForm } from '../../../../hooks/StartForm';
import { useFormQuestionState } from '../../../../Context/FormQuestions/Provider';
import { SEARCH_STORAGE_QUESTIONER } from '../../../../Context/FormQuestions/ActionTypes';
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";
import { ICreateUserParams, useCreateUser } from '../../../../hooks/CreateUser';

const initialInputState: ILoginInterface = {
  password: '',
  username: '',
};

const LoginPage: React.FC = (): JSX.Element => {
  const [pageInputs, setPageInputs] = useState(initialInputState);
  const history = useHistory();
  const [redirectPath, setRedirectPath] = useState<string>('');
  const [toggleToast, setToggleToast] = useState<boolean>(false);
  const applicationState = useApplicationState();
  const getUser = useGetUser();
  const startForm = useStartForm();
  const formState = useFormQuestionState();
  const { currentFormID } = formState.formState;
  const createUser = useCreateUser();

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('token');
    if (
      (currentFormID !== '' || redirectPath === RoutingConstants.verifyEmail.path) &&
      tokenLocalStorage
    ) {
      redirect();
    }
  }, [currentFormID, redirectPath]);

  useEffect(() => {
    
    const resp = Auth.currentAuthenticatedUser().then(async (response)=>{
      try {
        if(response){
          const createUserParams: ICreateUserParams = {
            variables: {
              CognitoPoolId: response.signInUserSession.idToken.payload.sub,
              email: response.signInUserSession.idToken.payload.email,
              name: response.signInUserSession.idToken.payload.name,
              phone:"0000000",
              username: response.signInUserSession.idToken.payload.email
            },
          };
          //
          localStorage.setItem('token', response.signInUserSession.accessToken.jwtToken);
  
          const getUserParams: IGetUserParams = {
            variables: {
              UserID: response.signInUserSession.idToken.payload.sub,
            },
          };
          getUser(
            getUserParams,
            response.signInUserSession.accessToken.jwtToken,
            response.signInUserSession.idToken.jwtToken,
            response.signInUserSession.refreshToken.jwtToken
          );
          const startFormParams: IStartFormParams = {
            variables: {
              CognitoPoolId: response.signInUserSession.idToken.payload.sub,
            },
          };
          if (currentFormID === '') {
            await createUser(createUserParams);
            await startForm(startFormParams);
            setRedirectPath(RoutingConstants.consent.path);
          } else {
            console.log('hola');
            setRedirectPath(RoutingConstants.dinamicForm.path);
          }
        }
      } catch (error) {
        console.log(error);
      }
     
     
    });
    
    applicationState.appStateDispatch({ type: HIDE_FOOTER, payload: undefined });
    applicationState.appStateDispatch({
      type: SET_ERROR,
      payload: {
        error: {
          error: false,
          errorMessage: '',
        },
      },
    });
    formState.formStateDispatch({
      type: SEARCH_STORAGE_QUESTIONER,
      payload: undefined,
    });
  }, []);

  const goHome = () => {
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
    const { username, password } = pageInputs;
    try {
      if (
        (validator.isEmail(username) || validator.isMobilePhone(username)) &&
        validator.isAscii(password)
      ) {
        const user = await Auth.signIn(username, password);
        if (user) {
          console.log(user);
          localStorage.setItem('token', user.signInUserSession.accessToken.jwtToken);

          const getUserParams: IGetUserParams = {
            variables: {
              UserID: user.username,
            },
          };
          getUser(
            getUserParams,
            user.signInUserSession.accessToken.jwtToken,
            user.signInUserSession.idToken.jwtToken,
            user.signInUserSession.refreshToken.jwtToken
          );
        }
        const startFormParams: IStartFormParams = {
          variables: {
            CognitoPoolId: user.username,
          },
        };
        if (currentFormID === '') {
          await startForm(startFormParams);
          setRedirectPath(RoutingConstants.consent.path);
        } else {
          console.log('hola');
          setRedirectPath(RoutingConstants.dinamicForm.path);
        }
      } else {
        throw new Error('incorrect username or password');
      }
    } catch (error) {
      if (error.code === 'UserNotConfirmedException') {
        console.log(error.code);
        setRedirectPath(RoutingConstants.verifyEmail.path);
      } else {
        setToggleToast(true);
        applicationState.appStateDispatch({
          type: SET_ERROR,
          payload: {
            error: {
              error: true,
              errorMessage: error.message,
            },
          },
        });
      }
    }
  };

  const triggerSignIn = () => {
    signIn();
  };
  const facebookSignIn= async ()=> {
    const options = { 
      provider: CognitoHostedUIIdentityProvider.Facebook
    }
    const response = await Auth.federatedSignIn(options);
    console.log(response);
  }
  const googleSignIn= async ()=> {
    const options = { 
      provider: CognitoHostedUIIdentityProvider.Google
    }
    const response = await Auth.federatedSignIn(options);
    console.log(response);
  }

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { username, password } = pageInputs;
    if (event.target.name === 'username') {
      if (username.length + 1 < 60 || event.target.value.length < username.length) {
        setPageInputs({ ...pageInputs, username: event.target.value });
      }
    }

    if (event.target.name === 'password') {
      if (password.length <= 40 || event.target.value.length < password.length) {
        setPageInputs({ ...pageInputs, password: event.target.value });
      }
    }
  };

  const { error } = applicationState.appState;

  return (
    <main className="Login-body">
      {error.error && (
        <ErrorMessageToast
          message={error.errorMessage}
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
      <div className="logo-container">
        <img src={logo} alt="logo" className="Nona-logo" />
      </div>
      <div className="Login-card-container">
        <div className="go-back-container">
          <p onClick={goHome}>
            <i className="fas fa-caret-left" />
            {CONSTANTS.backButton}
          </p>
        </div>
        <h2 className="page-title">Login</h2>
        <div className="login-socialMedia">
          <img
            src={GoogleIcon}
            alt="Google logo"
            onClick={()=>googleSignIn()}
          />
          <img
            src={FBIcon}
            alt="Facebook logo"
            onClick={() => facebookSignIn()}
          />
        </div>
        <div className="horizontal-line">
          <hr />
          O
          <hr />
        </div>
        <form className="form-container">
          <label htmlFor="username" className="label user">
            <img src={user} alt="User Icon" />
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
            <img src={lock} alt="Lock Icon" />
            <input
              type="password"
              name="password"
              value={pageInputs.password}
              placeholder="Password"
              className="password-text-field"
              onChange={handleInput}
            />
          </label>
          <button type="button" onClick={triggerSignIn}>
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


