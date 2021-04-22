import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../Config/api/Graphql/QuerySintax';
import { ICreateUser } from '../../Config/api/Graphql/Types';

export interface ICreateUserParams {
  variables: {
    CognitoPoolId: string;
    phone: string;
    username: string;
    email: string;
    name: string;
  };
}

export const useCreateUser = () => {
  const [createUser, { data, loading }] = useMutation(CREATE_USER);

  useEffect(() => {
    try {
      if (!loading && data) {
        const rawResponse: ICreateUser = data;
        if (rawResponse.UserInteractionMutation.createUser.error) {
          throw new Error('Unable to update consent try again');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading]);

  return createUser;
};
