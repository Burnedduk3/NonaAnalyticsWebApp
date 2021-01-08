import {
  ADD_RESPONDED_QUESTIONS, ADD_USER, DELETE_USER, EDIT_USER,
} from './ActionTypes';
import {IUserContextReducer, IUserContextState} from './interface';

export const initialState: IUserContextState = {
  respondedQuestions: 0,
  name: '',
  email: '',
  phone: '',
};

const userReducer = (
    state: IUserContextState,
    {type, payload}: IUserContextReducer,
): IUserContextState => {
  switch (type) {
    case ADD_USER: {
      return {
        ...initialState,
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
