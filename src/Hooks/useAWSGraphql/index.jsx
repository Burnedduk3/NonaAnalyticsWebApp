import { useReducer, useCallback } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { fetching, success, error } from '../../reducers/AWSGraphql/actionCreators';
import AWSGraphqlReducer, { initialState } from '../../reducers/AWSGraphql/reducer';

const useAWSGraphql = (specificQuery, params) => {
  const [requestState, requestDispatch] = useReducer(AWSGraphqlReducer, initialState);
  const makeRequest = useCallback(async () => {
    requestDispatch(fetching());
    try {
      const response = await API.graphql(
        graphqlOperation(specificQuery, { ...params }),
      );
      requestDispatch(success(response));
    } catch (e) {
      // eslint-disable-next-line no-undef
      requestDispatch(error(e));
    }
  }, [specificQuery, params]);
  return [requestState, makeRequest];
};

export default useAWSGraphql;
