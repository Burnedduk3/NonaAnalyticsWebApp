import {
  addQuestionAnswer,
  nextQuestions, previousQuestion, setByMenu,
  setShowableQuestions,
} from './ActionCreators';
import {
  ADD_QUESTION_TO_ANSWERED,
  GET_SECTIONS, NEXT_QUESTIONS, PREVIOUS_QUESTION,
  RESET_FORM_STORAGE,
  SEARCH_STORAGE_QUESTIONER, SET_CURRENT_FORM_ID,
  SET_SHOWABLE_QUESTIONS, SET_SUBSECTION_BY_MENU,
} from './ActionTypes';
import {
  IFormQuestionsContextReducer,
  IFormQuestionsContextState,
} from './interface';

export const initialState: IFormQuestionsContextState = {
  sections: [],
  currentSection: null,
  questionsAnswered: [],
  currentProgress: 0,
  totalQuestions: 0,
  showableQuestions: [],
  currentStack: 0,
  currentSubSection: null,
  finished: false,
  currentFormID: '',
};

const FormQuestionsReducer = (
    state: IFormQuestionsContextState,
    {type, payload}: IFormQuestionsContextReducer,
):IFormQuestionsContextState => {
  switch (type) {
    case GET_SECTIONS: {
      if (payload && payload.fetchedSections) {
        const {fetchedSections} = payload;
        localStorage.setItem(
            'QUESTIONER_STORAGE',
            JSON.stringify(fetchedSections),
        );
        return {
          ...fetchedSections,
        };
      }
      return state;
    }

    case SEARCH_STORAGE_QUESTIONER: {
      const stateCandidate = localStorage.getItem('QUESTIONER_STORAGE');
      if (stateCandidate) {
        return JSON.parse(stateCandidate);
      } else {
        return state;
      }
    }

    case PREVIOUS_QUESTION: {
      return previousQuestion(state);
    }

    case ADD_QUESTION_TO_ANSWERED: {
      if (payload && payload.questionToAdd) {
        return addQuestionAnswer(state, payload);
      } else {
        return state;
      }
    }

    case NEXT_QUESTIONS: {
      const newState = nextQuestions(state);
      return {
        ...newState,
      };
    }

    case PREVIOUS_QUESTION: {
      return {
        ...state,
      };
    }

    case SET_SUBSECTION_BY_MENU: {
      if (payload) {
        return setByMenu(state, payload);
      } else {
        return state;
      }
    }

    case SET_SHOWABLE_QUESTIONS: {
      return setShowableQuestions(state);
    }

    case RESET_FORM_STORAGE: {
      localStorage.removeItem('QUESTIONER_STORAGE');
      return {
        ...initialState,
      };
    }

    case SET_CURRENT_FORM_ID: {
      if (payload?.currentFormID) {
        return {
          ...state,
          currentFormID: payload.currentFormID,
        };
      } else {
        return {
          ...state,
        };
      }
    }

    default:
      return state;
  }
};

export default FormQuestionsReducer;
