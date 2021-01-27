import {addQuestionAnswer, nextSection} from './ActionCreators';
import {
  NEXT_SECTION,
  ADD_QUESTION_TO_ANSWERED,
} from './ActionTypes';
import {
  IFormQuestionsContextReducer,
  IFormQuestionsContextState,
} from './interface';

export const initialState: IFormQuestionsContextState = {
  sections: [],
  currentSection: null,
  nextSection: null,
  previousSection: null,
  questionsAnswered: [],
  currentProgress: 0,
  totalQuestions: 0,
};

const FormQuestionsReducer = (
    state: IFormQuestionsContextState,
    {type, payload}: IFormQuestionsContextReducer,
):IFormQuestionsContextState => {
  switch (type) {
    case ADD_QUESTION_TO_ANSWERED: {
      if (payload && payload.questionToAdd) {
        return addQuestionAnswer(state, payload);
      } else {
        return state;
      }
    }

    case NEXT_SECTION: {
      return nextSection(state);
    }

    default:
      return initialState;
  }
};

export default FormQuestionsReducer;
