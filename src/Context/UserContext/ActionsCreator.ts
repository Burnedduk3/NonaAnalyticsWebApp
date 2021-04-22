import { IUserContextPayload, IUserState } from './interface';

export const addQuestions = (
  currentState: IUserState,
  payload: IUserContextPayload
) => ({ ...currentState, ...payload });

export const checkUserLocalStorage = (currentState: IUserState): IUserState => {
  const possibleState = localStorage.getItem('USER');
  if (possibleState) {
    const savedState = JSON.parse(possibleState);

    return {
      ...currentState,
      ...savedState,
    };
  }
  return currentState;
};
