import React, {ChangeEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ISignUp} from '../interfaces/SignUpInterface';
import {Auth} from 'aws-amplify';
import {useHistory} from 'react-router-dom';
import RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {
  HIDE_FOOTER,
  HIDE_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';
import './styles.scss';
import CONSTANTS from './CONSTANTS.js';
import logo from '../../../../assets/Logos/logo.png';
import GoogleIcon from '../../../../assets/Icons/SocialMedia/google_color.png';
import FBIcon from '../../../../assets/Icons/SocialMedia/facebook_color.png';
import lock from '../../../../assets/Icons/lock.png';
import user from '../../../../assets/Icons/user.png';
import address from '../../../../assets/Icons/address.png';
import birthday from '../../../../assets/Icons/birthday.png';
import phone from '../../../../assets/Icons/phone.png';
import mail from '../../../../assets/Icons/mail.png';
import gender from '../../../../assets/Icons/gender.png';

const initialInputState: ISignUp = {
  password: '',
  address: '',
  confirmPassword: '',
  birthdate: '',
  email: '',
  gender: '',
  name: '',
  phoneNumber: '',
};

const SignUpPage : React.FC = (): JSX.Element =>{
  const [pageInputs, setPageInputs] = useState(initialInputState);
  const applicationState = useApplicationState();
  const history = useHistory();

  useEffect(()=>{
    applicationState?.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    applicationState?.appStateDispatch({type: HIDE_HEADER, payload: undefined});
  }, []);

  const goHome = () =>{
    history.push(RoutingConstants.menu.home.path);
  };

  const handleInput = (event:ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === 'address') {
      setPageInputs({...pageInputs, address: event.target.value});
    }

    if (event.target.name === 'birthdate') {
      setPageInputs({...pageInputs, birthdate: event.target.value});
    }

    if (event.target.name === 'email') {
      setPageInputs({...pageInputs, email: event.target.value});
    }

    if (event.target.name === 'gender') {
      setPageInputs({...pageInputs, gender: event.target.value});
    }

    if (event.target.name === 'name') {
      setPageInputs({...pageInputs, name: event.target.value});
    }

    if (event.target.name === 'phoneNumber') {
      setPageInputs({...pageInputs, phoneNumber: event.target.value});
    }

    if (event.target.name === 'password') {
      setPageInputs({...pageInputs, password: event.target.value});
    }

    if (event.target.name === 'confirmPassword') {
      setPageInputs({...pageInputs, confirmPassword: event.target.value});
    }
  };

  const signUp = async () => {
    try {
      const {user} = await Auth.signUp({
        username: pageInputs.email,
        password: pageInputs.password,
        attributes: {
          email: pageInputs.email,
          phone_number: pageInputs.phoneNumber,
          birthdate: pageInputs.birthdate,
          address: pageInputs.address,
          gender: pageInputs.gender,
          name: pageInputs.name,
        },
      });
      console.log(user);
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  const startSignup = () =>{
    signUp().then();
  };

  return (
    <main className="Sign-up-Body">
      <div className="logoContainer">
        <img src={logo} alt="Nona Logo"/>
      </div>
      <div className="Sign-up-Card">
        <div className="go-back-container">
          <p onClick={goHome}>
            <i className="fas fa-caret-left"></i>
            {CONSTANTS.backButton}
          </p>
        </div>
        <h2>Sign Up</h2>
        <div className="login-socialMedia">
          <img src={GoogleIcon} alt="Google logo" />
          <img src={FBIcon} alt="Facebook logo" />
        </div>
        <div className="horizontal-line">
          <hr/>
          O
          <hr/>
        </div>
        <div className="form-container">
          <label htmlFor="address">
            <img src={address} alt="Address Icons8"/>
            <input type="text"
              name='address'
              placeholder="Address"
              onChange={handleInput}
            />
          </label>

          <label htmlFor="birthdate">
            <img src={birthday} alt="Birthday Icons8"/>
            <input type="text"
              name='birthdate'
              placeholder='Birthday'
              onChange={handleInput}
            />
          </label>

          <label htmlFor="email">
            <img src={mail} alt="Mail Icons8"/>
            <input type="text"
              name='email'
              placeholder='Email'
              onChange={handleInput}
            />
          </label>

          <label htmlFor="gender">
            <img src={gender} alt="Gender Icons8"/>
            <input type="text"
              name='gender'
              placeholder='Gender'
              onChange={handleInput}
            />
          </label>

          <label htmlFor="name">
            <img src={user} alt="User Icons8"/>
            <input type="text"
              name='name'
              placeholder='Name'
              onChange={handleInput}
            />
          </label>

          <label htmlFor="phoneNumber">
            <img src={phone} alt="Phone Icons8"/>
            <input type="text"
              name='phoneNumber'
              placeholder='PhoneNumber'
              onChange={handleInput}
            />
          </label>

          <label htmlFor="password">
            <img src={lock} alt="Lock Icons8"/>
            <input type="password"
              name='password'
              placeholder='Password'
              onChange={handleInput}
            />
          </label>

          <label htmlFor="confirmPassword">
            <img src={lock} alt="Lock Icons8"/>
            <input type="password"
              name='confirmPassword'
              placeholder='Confirm Password'
              onChange={handleInput}
            />
          </label>
          <button type="button" onClick={startSignup}>
            {CONSTANTS.ButtonText}
          </button>
        </div>
        <div className="have-account-container">
          <p className="have-account-text">
            {CONSTANTS.AccountText}
            <Link to={RoutingConstants.login.path}>{CONSTANTS.linkText}</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
