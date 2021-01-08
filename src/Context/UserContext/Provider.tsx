import React, {createContext, useReducer} from 'react';
import userReducer, {initialState} from './Reducer';

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
const UserProvider: React.FC = ({children}):JSX.Element => {
  const [UserState, UserDispatch] = useReducer(
      userReducer, initialState,
  );
  return (
    <UserContext.Provider value={{UserState, UserDispatch}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
