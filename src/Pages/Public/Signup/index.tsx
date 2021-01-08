import React, {ChangeEvent, useState} from 'react';
import {ISignUp} from './interfaces/SignUpInterface';
import {Auth} from 'aws-amplify';

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
    <main>
      <label htmlFor="address">
          address
        <input type="text" name='address' onChange={handleInput}/>
      </label>

      <label htmlFor="birthdate">birthdate
        <input type="text" name='birthdate' onChange={handleInput}/>
      </label>

      <label htmlFor="email">email
        <input type="text" name='email' onChange={handleInput}/>
      </label>

      <label htmlFor="gender">gender
        <input type="text" name='gender' onChange={handleInput}/>
      </label>

      <label htmlFor="name">name
        <input type="text" name='name' onChange={handleInput}/>
      </label>

      <label htmlFor="phoneNumber">phoneNumber
        <input type="text" name='phoneNumber' onChange={handleInput}/>
      </label>

      <label htmlFor="password">password
        <input type="password" name='password' onChange={handleInput}/>
      </label>

      <label htmlFor="confirmPassword">confirmPassword
        <input type="password" name='confirmPassword' onChange={handleInput}/>
      </label>
      <button type="button" onClick={startSignup}>Sign Up</button>
    </main>
  );
};

export default SignUpPage;
