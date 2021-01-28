import {
  IAnsweredQuestion,
  IFormQuestionsContextPayload,
  IFormQuestionsContextState, ISection,
} from './interface';

export const nextSection = (
    state: IFormQuestionsContextState,
) : IFormQuestionsContextState => {
  const newCurrent = state.nextSection;
  const newPrevious = state.currentSection;
  let newNext: ISection | null = null;
  if (state && state.sections) {
    if (newCurrent) {
      if (newCurrent.order + 1 < state.sections.length) {
        newNext = state.sections[newCurrent.order + 1];
      }
    }
    state.nextSection = newNext;
    state.currentSection = newCurrent;
    state.previousSection = newPrevious;
  }
  localStorage.setItem(
      'QUESTIONER_STORAGE',
      JSON.stringify(state),
  );
  return state;
};

export const addQuestionAnswer = (
    state: IFormQuestionsContextState,
    payload: IFormQuestionsContextPayload,
):IFormQuestionsContextState => {
  if (payload.questionToAdd) {
    const indexofQuestion = state.questionsAnswered.findIndex(
        (element: IAnsweredQuestion) =>{
          return element.id === payload.questionToAdd?.id;
        },
    );
    if (indexofQuestion === -1) {
      state.questionsAnswered = [
        ...state.questionsAnswered,
        payload.questionToAdd,
      ];
    }
    const currentProgress = (
      state.questionsAnswered.length * 100
    )/state.totalQuestions;
    state.currentProgress = parseFloat(currentProgress.toFixed(2));
  }
  localStorage.setItem(
      'QUESTIONER_STORAGE',
      JSON.stringify(state),
  );
  return state;
};
