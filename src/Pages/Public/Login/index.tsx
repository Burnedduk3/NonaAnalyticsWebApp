import React, {ChangeEvent, useEffect, useState} from 'react';
import {ILoginInterface} from './interfaces/LoginInterface';
import CONSTANTS from './CONSTANTS';
import {Link} from 'react-router-dom';
import RoutingConstants from '../../../navigation/CONSTANTS/RoutingConstants';
import {useApplicationState} from '../../../Context/ApplicationState/Provider';
import {HIDE_FOOTER} from '../../../Context/ApplicationState/ActionTypes';
import {useHistory} from 'react-router-dom';
import {Auth} from 'aws-amplify';

const initialInputState: ILoginInterface = {
  password: '',
  username: '',
};

const LoginPage : React.FC = (): JSX.Element =>{
  const [pageInputs, setPageInputs] = useState(initialInputState);
  const ApplicationState = useApplicationState();
  const history = useHistory();

  useEffect(() => {
    setPageInputs({password: '', username: ''});
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
    <main>
      <div className="logo-container">

      </div>
      <div className="Login-card-container">
        <div className="go-back-container">
          <p onClick={goHome}>
            {CONSTANTS.backButton}
          </p>
        </div>
        <h1 className="page-title">Login</h1>
        <form className="form-container">
          <label htmlFor="username" className="label user">
            <input
              type="text"
              name="username"
              placeholder="username"
              className="username-text-field"
              onChange={handleInput}
            />
          </label>
          <label htmlFor="password" className="label lock">
            <input
              type="text"
              name="password"
              placeholder="password"
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
