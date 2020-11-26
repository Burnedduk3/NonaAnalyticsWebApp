import { } from './CONSTANTS';

export const initialState = {

};

const pageReducer = (state, { type }) => {
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

export default pageReducer;
