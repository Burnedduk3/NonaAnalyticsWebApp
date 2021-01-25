import React, {createContext, useReducer} from 'react';
import ApplicationStateReducer, {initialState} from './Reducer';
import {IAppStateContext} from './interface';

type ContextValue = IAppStateContext | null ;
let context: IAppStateContext | null = null;

export const ApplicationStateContext = createContext<ContextValue>(context);

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

export const useApplicationState = (): IAppStateContext => {
  if (!context) {
    context = React.useContext(ApplicationStateContext);
  }
  return context as IAppStateContext;
};

export default ApplicationStateProvider;
