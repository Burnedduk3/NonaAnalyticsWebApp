import {
  IAnsweredQuestion,
  IFormQuestionsContextPayload,
  IFormQuestionsContextState, IQuestion, ISection, ISubSection,
} from './interface';

export const nextQuestions = (
    state: IFormQuestionsContextState,
) : IFormQuestionsContextState => {
  const currentSection = state.currentSection;
  const currentSubSection = state.currentSubSection;
  const currentStack = state.currentStack;
  const newState = {
    ...state,
  };
  if (
    currentStack !== null &&
      currentSubSection !== null &&
      currentSection !== null
  ) {
    if (currentStack + 1 <= currentSubSection.maxStack) {
      // change the stack if there are more stacks in the current subsection
      newState.currentStack += 1;
    } else {
      // change subsection if there is no more stack in he current section
      const indexOfSubsection = currentSection.subSections.findIndex(
          (subSection:ISubSection) => {
            if (subSection.name === currentSubSection?.name) {
              return subSection;
            }
          },
      );
      if (indexOfSubsection !== currentSection.subSections.length - 1) {
        if (indexOfSubsection >= 0) {
          newState.currentSubSection = currentSection
              .subSections[indexOfSubsection + 1];
          newState.currentStack = 0;
        }
      } else {
        // change the section if there are no more subsections
        const indexOfCurrentSection = state.sections.findIndex(
            (section:ISection) => {
              if (section.name === currentSubSection?.name) {
                return section;
              }
            },
        );
        if (indexOfCurrentSection !== state.sections.length) {
          newState.currentSection = newState.sections[
              indexOfCurrentSection + 1
          ];
          newState.currentSubSection = newState.currentSection.subSections[0];
          newState.currentStack = 0;
        }
      }
    }
  }
  localStorage.setItem(
      'QUESTIONER_STORAGE',
      JSON.stringify(newState),
  );
  return {
    ...state,
    ...newState,
  };
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


export const setShowableQuestions = (
    state: IFormQuestionsContextState,
):IFormQuestionsContextState => {
  const {currentSubSection, currentStack} = state;
  if (currentSubSection && currentStack !== null) {
    const currentQuestions: Array<IQuestion> = [];
    currentSubSection.questions.map(
        (question: IQuestion) => {
          if (question.stack === currentStack) {
            currentQuestions.push(question);
          }
        },
    );
    state.showableQuestions = [...currentQuestions];
  }
  localStorage.setItem(
      'QUESTIONER_STORAGE',
      JSON.stringify(state),
  );
  return {
    ...state,
  };
};
