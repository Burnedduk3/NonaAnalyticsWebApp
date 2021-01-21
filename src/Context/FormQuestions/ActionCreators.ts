import {
  IFormQuestionsContextPayload,
  IFormQuestionsContextState, ISection,
} from './interface';

export const addSection = (
    data: IFormQuestionsContextPayload,
) : IFormQuestionsContextState => {
  console.log(data);
  if (!(data && data.fetchedSections)) {
    throw new Error('no data was found');
  }
  return {
    currentSection: data.fetchedSections.currentSection,
    nextSection: data.fetchedSections.nextSection,
    previous: data.fetchedSections.previous,
    sections: data.fetchedSections.sections,
  };
};

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
      console.log(newCurrent.order + 1 % state.sections.length);
    }
    state.nextSection = newNext;
    state.currentSection = newCurrent;
    state.previous = newPrevious;
  }
  return state;
};
