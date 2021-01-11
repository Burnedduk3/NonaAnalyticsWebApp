import {
  DELETE_SECTION,
  ADD_SECTION,
  SET_CURRENT_CURRENT_SECTION,
  SET_CURRENT_STACK,
  GET_SECTIONS,
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
      if (!payload?.newState) {
        throw new Error('empty payload new state, not able to add sections');
      }
      if (state && state.sections && state.sections.length === 0) {
        return {
          sections: payload.newState.sections,
          currentSection: payload.newState.currentSection,
          nextSection: payload.newState.nextSection,
          previous: payload.newState.previous,
        };
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

    default:
      return initialState;
  }
};

export default FormQuestionsReducer;
