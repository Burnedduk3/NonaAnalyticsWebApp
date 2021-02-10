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
import {API, Auth, graphqlOperation, Hub} from 'aws-amplify';
import './styles.scss';
import logo from '../../../../assets/Logos/logo.png';
import FBIcon from '../../../../assets/Icons/SocialMedia/facebook_color.png';
import GoogleIcon from '../../../../assets/Icons/SocialMedia/google_color.png';
import user from '../../../../assets/Icons/user.png';
import lock from '../../../../assets/Icons/lock.png';
import {useUserState} from '../../../../Context/UserContext/Provider';
import {ADD_USER} from '../../../../Context/UserContext/ActionTypes';
import {createForm, createUserInfo} from '../../../../graphql/mutations';
import validator from 'validator';
import {useFormQuestionState} from '../../../../Context/FormQuestions/Provider';
import {
  SET_CURRENT_FORM_ID,
} from '../../../../Context/FormQuestions/ActionTypes';
import {ErrorMessageToast} from '../../../../Components/ErrorMessage';
import {getUserInfo} from '../../../../graphql/queries';
import {CreateUserInfoInput, GetUserInfoQueryVariables} from '../../../../API';
import {CognitoHostedUIIdentityProvider} from '@aws-amplify/auth';

const initialInputState: ILoginInterface = {
  password: '',
  username: '',
};

const LoginPage : React.FC = (): JSX.Element =>{
  const [pageInputs, setPageInputs] = useState(initialInputState);
  const ApplicationState = useApplicationState();
  const history = useHistory();
  const userState = useUserState();
  const formState = useFormQuestionState();
  const [isRedirecting, setIsRedirecting] = useState<boolean>(false);
  const [redirectPath, setRedirectPath] = useState<string>('');
  const [toggleToast, setToggleToast] = useState<boolean>(false);
  const applicationState = useApplicationState();
  const [state, setState] = useState({user: null, customState: null});


  useEffect(() => {
    ApplicationState.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    Hub.listen('auth', ({payload: {event, data}}) => {
      switch (event) {
        case 'signIn':
          setState({...state, user: data});
          break;
        case 'signOut':
          setState({...state, user: null});
          break;
        case 'customOAuthState':
          setState({...state, customState: data});
      }
    });

    Auth.currentAuthenticatedUser()
        .then((user) => setState({...state, user}))
        .catch(() => console.log('Not signed in'));
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
    history.push(redirectPath);
  };

  const signIn = async () => {
    const {username, password} = pageInputs;
    try {
      if (
        (validator.isEmail(username) || validator.isMobilePhone(username)) &&
          validator.isAscii(password)
      ) {
        const user = await Auth.signIn(
            pageInputs.username, pageInputs.password,
        );
        if (user) {
          console.log(user);
          const queryParameters: GetUserInfoQueryVariables = {
            userID: user.username,
          };
          const auroraUser:any = await API.graphql(graphqlOperation(
              getUserInfo,
              {
                ...queryParameters,
              },
          ));
          if (auroraUser.data.getUserInfo === null) {
            const createUserInfoInput: CreateUserInfoInput = {
              fName: user.attributes.name,
              lName: user.attributes.name,
              userEmail: user.attributes.email,
              userID: user.username,
            };
            await API.graphql(
                graphqlOperation(
                    createUserInfo,
                    {
                      createUserInfoInput,
                    },
                ),
            );
          }
          userState.userStateDispatch({
            type: ADD_USER,
            payload: {
              name: user.attributes.name,
              birthdate: user.attributes.birthdate,
              email: user.attributes.email,
              gender: user.attributes.gender,
              usernameID: user.username,
              accessToken: user.signInUserSession.accessToken.jwtToken,
              idToken: user.signInUserSession.idToken.jwtToken,
              refreshToken: user.signInUserSession.refreshToken.jwtToken,
            },
          });

          if (user.attributes.email_verified) {
            const formData: any = await API.graphql(graphqlOperation(createForm,
                {
                  input: {
                    UserID: user.username,
                    finished: false,
                    percentage: 0,
                  },
                },
            ));
            formState.formStateDispatch(
                {
                  type: SET_CURRENT_FORM_ID,
                  payload: {
                    currentFormID: formData.data.createForm.id,
                  },
                },
            );
            setRedirectPath(RoutingConstants.dinamicForm.path);
            setIsRedirecting(true);
          }
        }
      } else {
        throw new Error('incorrect username or password');
      }
    } catch (error) {
      if (error.name === 'UserNotConfirmedException') {
        setRedirectPath(RoutingConstants.verifyEmail.path);
        setIsRedirecting(true);
      } else {
        setToggleToast(true);
        console.log(error);
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

  const fedarateFacebookSignin = async () => {
    const data = await Auth.federatedSignIn(
        {provider: CognitoHostedUIIdentityProvider.Facebook},
    );
    console.log(data);
  };

  const fedarateGoogleSignin = async () => {
    console.log('Hola');
    const data = await Auth.federatedSignIn(
        {provider: CognitoHostedUIIdentityProvider.Google},
    );
    console.log(data);
  };

  const {error} = applicationState.appState;

  return (
    <main className="Login-body">
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
            onClick={()=>fedarateGoogleSignin()}
          />
          <img
            src={FBIcon}
            alt="Facebook logo"
            onClick={() => fedarateFacebookSignin()}
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
