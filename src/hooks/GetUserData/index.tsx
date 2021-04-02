import {useEffect, useState} from 'react';
import {GET_USER_DATA} from '../../Config/api/Graphql/QuerySintax';
import {useLazyQuery} from '@apollo/client';
import {IGetUser} from '../../Config/api/Graphql/Types';
import {useUserState} from '../../Context/UserContext/Provider';
import {ADD_USER} from '../../Context/UserContext/ActionTypes';

export interface IGetUserParams {
    variables:{
        UserID: string
    }
}

export const useGetUser = () => {
  const [accessToken, setAccessToken] = useState<string>('');
  const [refreshToken, setRefreshToken] = useState<string>('');
  const [tokenId, setTokenId] = useState<string>('');
  const [getUserApollo, {loading, data}] = useLazyQuery(GET_USER_DATA);
  const userState = useUserState();

  const getUser = (
      params: IGetUserParams,
      accessToken:string,
      tokenId:string,
      refreshToken:string,
  ) =>{
    setTokenId(tokenId);
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    getUserApollo(params);
  };

  useEffect(()=> {
    if (!loading && data) {
      const fetchedData: IGetUser = data;
      // eslint-disable-next-line max-len
      const {name, username, CognitoPoolId, phone} = fetchedData.UserInteractionQueries.listUserData.data;
      console.log(name);
      userState.userStateDispatch({
        type: ADD_USER,
        payload: {
          name: name,
          email: username,
          usernameID: CognitoPoolId,
          phone: phone,
          accessToken: accessToken,
          idToken: tokenId,
          refreshToken: refreshToken,
        },
      });
    }
  }, [loading]);

  return getUser;
};
