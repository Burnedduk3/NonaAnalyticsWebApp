import {
  ADD_RESPONDED_QUESTIONS, ADD_USER, DELETE_USER, EDIT_USER,
} from './ActionTypes';

export const initialState = {
  respondedQuestions: 0,
};

const userReducer = (state, {type, payload}) => {
  switch (type) {
    case ADD_USER: {
      return {};
    }

    case DELETE_USER: {
      return {};
    }

    case EDIT_USER: {
      return {};
    }

    case ADD_RESPONDED_QUESTIONS: {
      return {
        ...state,
        respondedQuestions: payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default userReducer;
