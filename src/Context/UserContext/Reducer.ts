import {
  ADD_RESPONDED_QUESTIONS, ADD_USER, DELETE_USER, EDIT_USER,
} from './ActionTypes';
import {IUserContextReducer, IUserState} from './interface';

export const initialState: IUserState = {
  respondedQuestions: 0,
  name: '',
  email: '',
  phone: '',
  address: '',
  birthdate: '',
  gender: '',
};

const userReducer = (
    state: IUserState,
    {type, payload}: IUserContextReducer,
): IUserState => {
  switch (type) {
    case ADD_USER: {
      return {
        ...state,
        ...payload,
      };
    }

    case DELETE_USER: {
      return {
        ...initialState,
      };
    }

    case EDIT_USER: {
      return {
        ...state,
        ...payload,
      };
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
