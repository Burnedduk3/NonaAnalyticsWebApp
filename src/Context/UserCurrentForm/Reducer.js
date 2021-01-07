import {ADD_CURRENT_FORM, DELETE_CURRENT_FORM} from './ActionTypes';
import addCurrentForm from './ActionCreator';

export const initialState = {
  id: '',
  finished: false,
};

const userCurrentFormReducer = (state, {type, payload}) => {
  switch (type) {
    case ADD_CURRENT_FORM: {
      return addCurrentForm(state, payload);
    }
    case DELETE_CURRENT_FORM: {
      return initialState;
    }

    default: {
      return state;
    }
  }
};

export default userCurrentFormReducer;
