export interface IApplicationInitialState{
    hideHeader: boolean
    hideFooter: boolean
}

export interface IApplicationPayload{
    hideHeader?: boolean
    hideFooter?: boolean
}

export interface IApplicationReducer{
    type: string;
    payload: IApplicationPayload | undefined
}

export interface IAppStateContext{
appState: IApplicationInitialState;
appStateDispatch: React.Dispatch<IApplicationReducer>;
}
