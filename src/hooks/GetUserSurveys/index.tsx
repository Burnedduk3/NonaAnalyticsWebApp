import { useEffect } from 'react';
import { GET_USER_FORMS_DATA } from '../../Config/api/Graphql/QuerySintax';
import { useLazyQuery } from '@apollo/client';
import { IGetUser } from '../../Config/api/Graphql/Types';

export interface IGetUserSurveysParams {
  variables: {
    UserID: string;
  };
}

export const useGetUserSurveys = () => {
  const [getUserSurveysApollo, { loading, data }] = useLazyQuery(
    GET_USER_FORMS_DATA
  );

  const getUserSurveys = (
    params: IGetUserSurveysParams,
    accessToken: string,
    tokenId: string,
    refreshToken: string
  ) => {
    getUserSurveysApollo(params);
  };

  useEffect(() => {
    try {
      if (!loading && data) {
        const fetchedData: IGetUser = data;

        console.log(fetchedData);
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading]);

  return getUserSurveys;
};
