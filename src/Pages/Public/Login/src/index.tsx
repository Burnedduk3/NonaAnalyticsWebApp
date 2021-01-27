import React, {ChangeEvent, useEffect, useState} from 'react';
import {ILoginInterface} from '../interfaces/LoginInterface';
import CONSTANTS from './CONSTANTS';
import {Link} from 'react-router-dom';
import
RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {HIDE_FOOTER} from '../../../../Context/ApplicationState/ActionTypes';
import {useHistory} from 'react-router-dom';
import {API, Auth, graphqlOperation} from 'aws-amplify';
import './styles.scss';
import logo from '../../../../assets/Logos/logo.png';
import FBIcon from '../../../../assets/Icons/SocialMedia/facebook_color.png';
import GoogleIcon from '../../../../assets/Icons/SocialMedia/google_color.png';
import user from '../../../../assets/Icons/user.png';
import lock from '../../../../assets/Icons/lock.png';
import {useUserState} from '../../../../Context/UserContext/Provider';
import {ADD_USER, EDIT_USER} from '../../../../Context/UserContext/ActionTypes';
import {createForm} from '../../../../graphql/mutations';

const initialInputState: ILoginInterface = {
  password: '',
  username: '',
};

const LoginPage : React.FC = (): JSX.Element =>{
  const [pageInputs, setPageInputs] = useState(initialInputState);
  const ApplicationState = useApplicationState();
  const [error, setError] = useState<boolean>(false);
  const history = useHistory();
  const userState = useUserState();

  useEffect(() => {
    ApplicationState?.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
  }, []);

  const goHome = () =>{
    history.push(RoutingConstants.menu.home.path);
  };

  const signIn = async () => {
    try {
      const user = await Auth.signIn(pageInputs.username, pageInputs.password);
      if (user) {
        userState.userStateDispatch({
          type: ADD_USER,
          payload: {
            address: user.attributes.address,
            name: user.attributes.name,
            birthdate: user.attributes.birthdate,
            email: user.attributes.birthdate,
            gender: user.attributes.gender,
          },
        });
        // TODO Here we should add a cookie to mantain the session
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
          userState.userStateDispatch({
            type: EDIT_USER,
            payload: {
              currentForm: formData.data.createForm.id,
            },
          });
          history.push(
              `${RoutingConstants.dinamicForm.path}/Lake-Nona/Lake-Nona/0`,
          );
        } else {

        }
      }
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  const triggerSignIn = () => {
    signIn().then();
  };

  const handleInput = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'username') {
      setPageInputs({...pageInputs, username: event.target.value});
    }

    if (event.target.name === 'password') {
      setPageInputs({...pageInputs, password: event.target.value});
    }
  };

  return (
    <main className="Login-body">
      <div className="logo-container">
        <img src={logo} alt="logo" className="Nona-logo"/>
      </div>
      <div className="Login-card-container">
        <div className="go-back-container">
          <p onClick={goHome}>
            <i className="fas fa-caret-left"></i>
            {CONSTANTS.backButton}
          </p>
        </div>
        <h2 className="page-title">Login</h2>
        <div className="login-socialMedia">
          <img src={GoogleIcon} alt="Google logo" />
          <img src={FBIcon} alt="Facebook logo" />
        </div>
        <div className="horizontal-line">
          <hr/>
          O
          <hr/>
        </div>
        <form className="form-container">
          {error && <div className="error-message">
            <h3>{CONSTANTS.errorMessage}</h3>
          </div>}
          <label htmlFor="username" className="label user">
            <img src={user} alt="User Icon"/>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="username-text-field"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="password" className="label lock">
            <img src={lock} alt="Lock Icon"/>
            <input
              type="password"
              name="password"
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
