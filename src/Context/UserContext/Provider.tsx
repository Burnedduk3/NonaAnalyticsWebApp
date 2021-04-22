import React, { createContext, useReducer } from 'react';
import userReducer, { initialState } from './Reducer';
import { IUserStateContext } from './interface';

type ContextValue = IUserStateContext | null;

export const UserContext = createContext<ContextValue>(null);

const UserProvider: React.FC = ({ children }): JSX.Element => {
  const [UserState, UserDispatch] = useReducer(userReducer, initialState);

  const userContext: IUserStateContext = {
    userState: UserState,
    userStateDispatch: UserDispatch,
  };

  return <UserContext.Provider value={userContext}>{children}</UserContext.Provider>;
};

export const useUserState = (): IUserStateContext => {
  return React.useContext(UserContext) as IUserStateContext;
};

export default UserProvider;
