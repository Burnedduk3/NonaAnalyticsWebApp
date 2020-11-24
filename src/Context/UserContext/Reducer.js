import { ADD_USER, DELETE_USER, EDIT_USER } from './CONSTANTS';

export const initialState = {

};

const userReducer = (state, { type }) => {
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

    default: {
      return state;
    }
  }
};

export default userReducer;
