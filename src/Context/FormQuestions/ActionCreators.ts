import {
  IFormQuestionsContextPayload,
  IFormQuestionsContextState, ISection,
} from './interface';

export const addSection = (
    data: IFormQuestionsContextPayload,
) : IFormQuestionsContextState => {
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
    let nextIndex:number = 0;
    state.sections.reverse().map((section, index)=>{
      if (section.name === newCurrent?.name ) {
        nextIndex = index;
      }
      if (index === nextIndex + 1) {
        newNext = section;
      }
    });
    state.nextSection = newNext;
    state.currentSection = newCurrent;
    state.previous = newPrevious;
  }
  return state;
};
