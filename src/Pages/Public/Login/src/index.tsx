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
import {Auth} from 'aws-amplify';
import './styles.scss';
import logo from '../../../../assets/Logos/logo.png';
import FBIcon from '../../../../assets/Icons/SocialMedia/facebook_color.png';
import GoogleIcon from '../../../../assets/Icons/SocialMedia/google_color.png';
import user from '../../../../assets/Icons/user.png';
import lock from '../../../../assets/Icons/lock.png';

const initialInputState: ILoginInterface = {
  password: '',
  username: '',
};

const LoginPage : React.FC = (): JSX.Element =>{
  const [pageInputs, setPageInputs] = useState(initialInputState);
  const ApplicationState = useApplicationState();
  const history = useHistory();

  useEffect(() => {
    ApplicationState?.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
  }, []);

  const goHome = () =>{
    history.push(RoutingConstants.menu.home.path);
  };

  const signIn = async () => {
    try {
      const user = await Auth.signIn(pageInputs.username, pageInputs.password);
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
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
              type="text"
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
