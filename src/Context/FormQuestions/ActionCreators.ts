import {
  IFormQuestionsContextPayload,
  IFormQuestionsContextState,
} from './interface';

const addQuestions = (
    currentState: IFormQuestionsContextState,
    payload: IFormQuestionsContextPayload,
): IFormQuestionsContextState => (
  {...currentState, ...payload}
);
export default addQuestions;
