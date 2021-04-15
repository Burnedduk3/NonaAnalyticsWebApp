import React, {ChangeEvent, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {ISignUp} from '../interfaces/SignUpInterface';
import {useHistory} from 'react-router-dom';
import RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import {
  HIDE_FOOTER,
  HIDE_HEADER, SET_ERROR,
} from '../../../../Context/ApplicationState/ActionTypes';
import './styles.scss';
import CONSTANTS from './CONSTANTS.js';
import logo from '../../../../assets/Logos/logo.png';
import GoogleIcon from '../../../../assets/Icons/SocialMedia/google_color.png';
import FBIcon from '../../../../assets/Icons/SocialMedia/facebook_color.png';
import lock from '../../../../assets/Icons/lock.png';
import user from '../../../../assets/Icons/user.png';
import birthday from '../../../../assets/Icons/birthday.png';
import mail from '../../../../assets/Icons/mail.png';
import gender from '../../../../assets/Icons/gender.png';
import phone from '../../../../assets/Icons/phone.png';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import validator from 'validator';
import {ErrorMessageToast} from '../../../../Components/ErrorMessage';
import {Auth} from 'aws-amplify';
import {ICreateUserParams, useCreateUser} from '../../../../hooks/CreateUser';

const initialInputState: ISignUp = {
  password: '',
  confirmPassword: '',
  birthdate: '',
  email: '',
  gender: 'Other',
  name: '',
  phone: '',
};

const SignUpPage : React.FC = (): JSX.Element =>{
  const [pageInputs, setPageInputs] = useState<ISignUp>(initialInputState);
  const [startDate, setStartDate] = useState(new Date());
  const applicationState = useApplicationState();
  const history = useHistory();
  const [toggleToast, setToggleToast] = useState<boolean>(false);
  const createUser = useCreateUser();

  useEffect(()=>{
    applicationState?.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
    applicationState?.appStateDispatch({type: HIDE_HEADER, payload: undefined});
  }, []);

  const goHome = () =>{
    history.push(RoutingConstants.menu.home.path);
  };

  const handleInput = (
      event:ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
  ) => {
    try {
      const name: string = event.target.name.toString();
      const value: string = event.target.value;
      for (const key of Object.keys(pageInputs)) {
        if (name === key) {
          if (pageInputs[key].length < 60 ||
              event.target.value.length < pageInputs[key].length) {
            setPageInputs({...pageInputs, [key]: value});
          }
        }
      }
    } catch (err) {
      console.log(err);
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

  const checkInput = () =>{
    if (!validator.isEmail(pageInputs.email)) {
      throw new Error('Wrong email');
    }

    const nameValidator = /^[a-zA-Z_ ]*$/g;
    if (!nameValidator.test(pageInputs.name)) {
      throw new Error('Wrong Name Input');
    }

    if (!validator.isMobilePhone(pageInputs.phone)) {
      // eslint-disable-next-line max-len
      throw new Error('Invalid phone number, remember to add the country indicator');
    }

    if (pageInputs.gender === 'Choose One' ||
        !validator.isAlpha(pageInputs.gender)) {
      throw new Error('Wrong Gender Option');
    }

    if (!validator.isAscii(pageInputs.password) ||
        !validator.isAscii(pageInputs.confirmPassword) ||
        pageInputs.confirmPassword !== pageInputs.password
    ) {
      throw new Error('Password are not equal');
    }

    if (
      pageInputs.password.length < 8 ||
        pageInputs.confirmPassword.length < 8
    ) {
      throw new Error('Password to short');
    }

    const actualDate = new Date();
    actualDate.setFullYear(
        actualDate.getFullYear() - 18,
    );
    if (
      !validator.isBefore(
          pageInputs.birthdate,
          actualDate.toDateString(),
      )
    ) {
      throw new Error('you are to young to participate');
    }
  };

  const signUp = async () => {
    try {
      checkInput();
      const response = await Auth.signUp({
        username: pageInputs.email,
        password: pageInputs.password,
        attributes: {
          email: pageInputs.email,
          birthdate: pageInputs.birthdate,
          gender: pageInputs.gender,
          name: pageInputs.name,
        },
      });
      const createUserParams: ICreateUserParams = {
        variables: {
          CognitoPoolId: response.userSub,
          email: pageInputs.email,
          name: pageInputs.name,
          phone: pageInputs.phone,
          username: pageInputs.email,
        },
      };
      await createUser(createUserParams);
      history.push(RoutingConstants.menu.home.path);
    } catch (error) {
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
  };

  const startSignup = () =>{
    signUp();
  };

  const {error} = applicationState.appState;

  return (
    <main className="Sign-up-Body">
      <div className="logoContainer">
        <img src={logo} alt="Nona Logo"/>
      </div>
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
          <label htmlFor="birthdate">
            <img src={birthday} alt="Birthday Icons"/>
            <DatePicker
              selected={startDate}
              onChange={(date: Date) => setStartDate(date)}
            />
          </label>


          <label htmlFor="email">
            <img src={mail} alt="Mail Icons"/>
            <input type="text"
              name='email'
              value={pageInputs.email}
              placeholder='Email'
              onChange={handleInput}
            />
          </label>

          <label htmlFor="phone">
            <img src={phone} alt="phone Icons"/>
            <input type="text"
              name='phone'
              value={pageInputs.phone}
              placeholder='Phone'
              onChange={handleInput}
            />
          </label>

          <label htmlFor="gender">
            <img src={gender} alt="Gender Icons"/>
            <select
              name='gender'
              placeholder='Gender'
              onChange={handleInput}
              className="combo-box"
            >
              <option value="Choose One">Choose One</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
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
