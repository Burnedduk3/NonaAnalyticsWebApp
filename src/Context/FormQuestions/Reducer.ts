import {addSection, nextSection} from './ActionCreators';
import {
  ADD_SECTION,
  DELETE_SECTION,
  GET_SECTIONS,
  NEXT_SECTION,
  SET_CURRENT_CURRENT_SECTION,
  SET_CURRENT_STACK,
} from './ActionTypes';
import {
  IFormQuestionsContextReducer,
  IFormQuestionsContextState,
} from './interface';

export const initialState: IFormQuestionsContextState = {
  sections: [],
  currentSection: null,
  nextSection: null,
  previous: null,
};

const FormQuestionsReducer = (
    state: IFormQuestionsContextState,
    {type, payload}: IFormQuestionsContextReducer,
):IFormQuestionsContextState => {
  switch (type) {
    case GET_SECTIONS: {
      if (payload) {
        return addSection(payload);
      }
      return state;
    }
    case ADD_SECTION: {
      return initialState;
    }

    case DELETE_SECTION: {
      return initialState;
    }

    case SET_CURRENT_STACK: {
      return initialState;
    }

    case SET_CURRENT_CURRENT_SECTION: {
      return initialState;
    }

    case NEXT_SECTION: {
      return nextSection(state);
    }

    default:
      return initialState;
  }
};

export default FormQuestionsReducer;
