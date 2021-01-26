import {
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
  return state;
};

export const fetchQuestioner = (
    state: IFormQuestionsContextState,
):IFormQuestionsContextState => {
  return state;
};
