import React, {createContext, useReducer} from 'react';
import ApplicationStateReducer, {initialState} from './Reducer';
import {IAppStateContext} from './interface';

type ContextValue = IAppStateContext | null ;

export const ApplicationStateContext = createContext<ContextValue>(null);

// eslint-disable-next-line react/prop-types
const ApplicationStateProvider: React.FC = ({children}): JSX.Element => {
  const [ApplicationState, ApplicationStateDispatch] = useReducer(
      ApplicationStateReducer, initialState,
  );

  const applicationContext: IAppStateContext = {
    appState: ApplicationState,
    appStateDispatch: ApplicationStateDispatch,
  };

  return (
    <ApplicationStateContext.Provider
      value={applicationContext}
    >
      {children}
    </ApplicationStateContext.Provider>
  );
};

export const useApplicationState = () => React.useContext(
    ApplicationStateContext,
);


export default ApplicationStateProvider;
