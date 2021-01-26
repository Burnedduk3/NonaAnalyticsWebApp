import {fetchQuestioner, nextSection} from './ActionCreators';
import {
  NEXT_SECTION,
  FETCH_QUESTIONER,
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
  currentStack: null,
  currentSubSectionIndex: null,
  subSectionsArray: null,
};

const FormQuestionsReducer = (
    state: IFormQuestionsContextState,
    {type, payload}: IFormQuestionsContextReducer,
):IFormQuestionsContextState => {
  switch (type) {
    case FETCH_QUESTIONER: {
      return fetchQuestioner(state);
    }

    case NEXT_SECTION: {
      return nextSection(state);
    }

    default:
      return initialState;
  }
};

export default FormQuestionsReducer;
