import {
  addQuestionAnswer,
  nextQuestions,
  setShowableQuesitons,
} from './ActionCreators';
import {
  ADD_QUESTION_TO_ANSWERED,
  GET_SECTIONS, NEXT_QUESTIONS,
  SEARCH_STORAGE_QUESTIONER,
  SET_SHOWABLE_QUESTIONS,
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
  showableQuestions: [],
  currentStack: 0,
  currentSubSection: null,
  pathToPush: '',
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

    case ADD_QUESTION_TO_ANSWERED: {
      if (payload && payload.questionToAdd) {
        return addQuestionAnswer(state, payload);
      } else {
        return state;
      }
    }

    case NEXT_QUESTIONS: {
      return nextQuestions(state);
    }

    case SET_SHOWABLE_QUESTIONS: {
      return setShowableQuesitons(state);
    }

    default:
      return state;
  }
};

export default FormQuestionsReducer;
