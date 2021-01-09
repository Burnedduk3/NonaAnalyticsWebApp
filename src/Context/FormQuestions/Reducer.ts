import {DELETE_QUESTION, ADD_QUESTIONS} from './ActionTypes';
import {
  IFormQuestionsContextReducer,
  IFormQuestionsContextState,
} from './interface';

export const initialState: IFormQuestionsContextState = {
  formID: '',
  questions: [],
};

const FormQuestionsReducer = (
    state: IFormQuestionsContextState,
    {type, payload}: IFormQuestionsContextReducer,
):IFormQuestionsContextState => {
  switch (type) {
    case ADD_QUESTIONS: {
      return initialState;
    }

    case DELETE_QUESTION: {
      return initialState;
    }

    default:
      return initialState;
  }
};

export default FormQuestionsReducer;
