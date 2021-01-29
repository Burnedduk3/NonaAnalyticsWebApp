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
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
// import InputValidator from '../../../../utils/InputValidator';


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
  const [startDate, setStartDate] = useState(new Date());
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
    try {
      const name: string = event.target.name.toString();
      const value: string = event.target.value;

      for (const key of Object.keys(pageInputs)) {
        if (name === key) {
          // if (name === 'phoneNumber') {
          //   if (
          //     !InputValidator.checkForOnlyNumbers(
          //         value.toString(),
          //         20)
          //   ) {
          //     throw new Error('Wrong Input Format');
          //   }
          // }
          //
          // if (name === 'address') {
          //   if (
          //     !InputValidator.checkForAlphanumeric(
          //         value,
          //         30,
          //     )
          //   ) {
          //     throw new Error('Wrong Input Format');
          //   }
          // }
          //
          // if (name === 'email') {
          //   if (
          //     !InputValidator.checkForAlphanumericWithSymbols(value, 50)
          //   ) {
          //     throw new Error('Wrong Input Format');
          //   }
          // }
          //
          // if (name === 'name') {
          //   if (
          //     !InputValidator.chekForString(value, 50)
          //   ) {
          //     throw new Error('Wrong Input Format');
          //   }
          // }


          setPageInputs({...pageInputs, [key]: value});
        }
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(()=>{
    if (startDate) {
      try {
        setPageInputs({
          ...pageInputs,
          birthdate:
              `${startDate.toISOString().split('T')[0].replaceAll('-', '/')}`,
        });
      } catch (e) {

      }
    }
  }, [startDate]);

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
    } catch (error) {
      console.log('error signing up:', error);
    }
  };

  const startSignup = () =>{
    const {password, confirmPassword} = pageInputs;
    if (password === confirmPassword) {
      signUp();
    }
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
              value={pageInputs.address}
              placeholder="Address"
              onChange={handleInput}
            />
          </label>

          <label htmlFor="birthdate">
            <img src={birthday} alt="Birthday Icons8"/>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
          </label>


          <label htmlFor="email">
            <img src={mail} alt="Mail Icons8"/>
            <input type="text"
              name='email'
              value={pageInputs.email}
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
              value={pageInputs.name}
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
              value={pageInputs.phoneNumber}
            />
          </label>

          <label htmlFor="password">
            <img src={lock} alt="Lock Icons8"/>
            <input type="password"
              name='password'
              placeholder='Password'
              onChange={handleInput}
              value={pageInputs.password}
            />
          </label>

          <label htmlFor="confirmPassword">
            <img src={lock} alt="Lock Icons8"/>
            <input type="password"
              name='confirmPassword'
              placeholder='Confirm Password'
              onChange={handleInput}
              value={pageInputs.confirmPassword}
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
