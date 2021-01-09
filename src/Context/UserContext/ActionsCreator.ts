import {IUserContextPayload, IUserState} from './interface';

const addQuestions = (
    currentState: IUserState,
    payload: IUserContextPayload,
) => ({...currentState, ...payload});

export default addQuestions;
