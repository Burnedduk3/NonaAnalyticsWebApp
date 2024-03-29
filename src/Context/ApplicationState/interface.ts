export interface IApplicationInitialState {
  hideHeader: boolean;
  hideFooter: boolean;
  error: IErrorHandler;
}

export interface IErrorHandler {
  error: boolean;
  errorMessage: string;
}

export interface IApplicationPayload {
  hideHeader?: boolean;
  hideFooter?: boolean;
  error?: IErrorHandler;
  loading?: boolean;
}

export interface IApplicationReducer {
  type: string;
  payload: IApplicationPayload | undefined;
}

export interface IAppStateContext {
  appState: IApplicationInitialState;
  appStateDispatch: React.Dispatch<IApplicationReducer>;
}
