import React, { createContext, useReducer } from 'react';
import userReducer, { initialState } from './Reducer';

export const UserCurrentFormContext = createContext({});

// eslint-disable-next-line react/prop-types
const UserCurrentFormProvider = ({ children }) => {
  const [userCurrentFormState, userCurrentFormDispatch] = useReducer(
    userReducer, initialState,
  );
  return (
    <UserCurrentFormContext.Provider value={{ userCurrentFormState, userCurrentFormDispatch }}>
      {children}
    </UserCurrentFormContext.Provider>
  );
};

export default UserCurrentFormProvider;
