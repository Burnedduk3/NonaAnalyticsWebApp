export interface IUserState{
    respondedQuestions: number | 0;
    name: string;
    email: string;
    phone: string;
    gender: string;
    address: string;
    birthdate: string;
    currentForm: string;
    usernameID: string;
    accessToken: string;
    refreshToken: string;
    idToken: string;
}

export interface IUserContextPayload{
    respondedQuestions?: number;
    name?: string;
    email?: string;
    phone?: string;
    gender?: string;
    address?: string;
    birthdate?: string;
    currentForm?: string;
    usernameID?: string;
    accessToken?: string;
    refreshToken?: string;
    idToken?: string;
}

export interface IUserContextReducer{
    type: string,
    payload?: IUserContextPayload,
}

export interface IUserStateContext{
    userState: IUserState;
    userStateDispatch: React.Dispatch<IUserContextReducer>;
}
