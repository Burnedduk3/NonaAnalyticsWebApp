import React, {useState} from 'react';
import {Auth} from 'aws-amplify';
import {ILoginInterface} from './interfaces/LoginInterface';

const initialInputState: ILoginInterface = {
  password: '',
  username: '',
};

const LoginPage : React.FC = (): JSX.Element =>{
  const [pageInputs, setPageInputs] = useState(initialInputState);

  setPageInputs({username: '', password: ''});
  const signIn = async () => {
    try {
      const user = await Auth.signIn(
          pageInputs['username'],
          pageInputs['password'],
      );
      console.log(user);
    } catch (error) {
      console.log('error signing in', error);
    }
  };

  signIn().then();
  return (
    <h2>Login component</h2>
  );
};

export default LoginPage;
