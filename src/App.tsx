import React from 'react';
import './App.scss';
import RouterConfig from './navigation/RouterConfig';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { getClient } from './Config/api';
import Amplify from 'aws-amplify';
import { COGNITO } from './Config/AWS';

Amplify.configure({
    aws_cognito_region: COGNITO.REGION,
    aws_user_pools_id: COGNITO.USER_POOL_ID,
    aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
    oauth:{
      domain:'lifeprojectauth.auth.us-east-1.amazoncognito.com',
      redirectSignIn:'http://localhost:3000/login',
      redirectSignOut:'http://localhost:3000/login',
      responseType:'token'
    }
});

const App: React.FC = (): JSX.Element => (
    <BrowserRouter>
        <ApolloProvider client={getClient()}>
            <RouterConfig />
        </ApolloProvider>
    </BrowserRouter>
);

export default App;
