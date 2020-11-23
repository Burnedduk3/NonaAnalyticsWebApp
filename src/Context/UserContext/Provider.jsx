import React, { createContext, useReducer } from 'react';
import userReducer, { initialState } from './Reducer';

export const UserContext = createContext({});

// eslint-disable-next-line react/prop-types
const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    userReducer, initialState,
  );
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
