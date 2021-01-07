import {DELETE_QUESTION, ADD_QUESTIONS} from './ActionTypes';
import addQuestions from './ActionCreators';

export const initialState = [];

const FormQuestionsReducer = (state, {type, payload}) => {
  switch (type) {
    case ADD_QUESTIONS: {
      return addQuestions(state, payload);
    }

    case DELETE_QUESTION: {
      return initialState;
    }

    default:
      return initialState;
  }
};

export default FormQuestionsReducer;
