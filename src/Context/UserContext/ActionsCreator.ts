import {IUserContextPayload, IUserContextState} from './interface';

const addQuestions = (
    currentState: IUserContextState,
    payload: IUserContextPayload,
) => ({...currentState, ...payload});

export default addQuestions;
