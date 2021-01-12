import {Auth} from 'aws-amplify';
import AWSAppSyncClient, {AUTH_TYPE} from 'aws-appsync';
import awsconfig from './../../aws-exports';

let client: null | AWSAppSyncClient<any>;

export const getClient = (): AWSAppSyncClient<any> =>{
  if (!client) {
    client = new AWSAppSyncClient({
      url: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        // eslint-disable-next-line max-len
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
    });
  }
  return client;
};
