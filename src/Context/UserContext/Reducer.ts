import {
  ADD_RESPONDED_QUESTIONS,
  ADD_USER,
  DELETE_USER,
  EDIT_USER, SEARCH_LOCAL_STORAGE,
} from './ActionTypes';
import {IUserContextReducer, IUserState} from './interface';
import {checkUserLocalStorage} from './ActionsCreator';

export const initialState: IUserState = {
  respondedQuestions: 0,
  name: '',
  email: '',
  phone: '',
  address: '',
  birthdate: '',
  gender: '',
  usernameID: '',
  accessToken: '',
  refreshToken: '',
  idToken: '',
};

const userReducer = (
    state: IUserState,
    {type, payload}: IUserContextReducer,
): IUserState => {
  switch (type) {
    case ADD_USER: {
      const newState = {
        ...state,
        ...payload,
      };
      localStorage.setItem('USER', JSON.stringify(newState));
      return newState;
    }

    case DELETE_USER: {
      localStorage.removeItem('USER');
      return {
        ...initialState,
      };
    }

    case EDIT_USER: {
      const newState = {
        ...state,
        ...payload,
      };
      localStorage.setItem('USER', JSON.stringify(newState));
      return newState;
    }

    case SEARCH_LOCAL_STORAGE: {
      return checkUserLocalStorage(state);
    }

    case ADD_RESPONDED_QUESTIONS: {
      return {
        ...state,
        respondedQuestions: state.respondedQuestions + 1,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
