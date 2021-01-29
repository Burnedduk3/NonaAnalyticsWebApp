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
  let currentStack = state.currentStack;
  if (
    (currentStack !== null) && currentSubSection !== null && currentSection !== null
  ) {
    if (currentStack + 1 <= currentSubSection.maxStack) {
      console.log('stack change', currentStack);
      currentStack += 1;
    } else {
      const indexOfSubsection = currentSection.subSections.findIndex(
          (subSection:ISubSection) => {
            if (subSection.name === currentSubSection.name) {
              return subSection;
            }
          },
      );
      if (indexOfSubsection === currentSection.subSections.length - 1) {
        if (indexOfSubsection > 0) {

        }
      }
    }
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


export const setShowableQuesitons = (
    state: IFormQuestionsContextState,
):IFormQuestionsContextState => {
  const questioner = state.sections;
  if (questioner) {
    questioner.map((section:ISection) =>{
      if (section.name === state.currentSection?.name) {
        section.subSections.map((subSection: ISubSection)=>{
          if (subSection.name === state.currentSubSection?.name) {
            const showableQuestions:Array<IQuestion> = [];
            subSection.questions.map((question: IQuestion)=>{
              if (question.stack === state.currentStack) {
                showableQuestions.push(question);
              }
            });
            state.showableQuestions = [
              ...showableQuestions,
            ];
          }
        });
      }
    });
  }
  localStorage.setItem(
      'QUESTIONER_STORAGE',
      JSON.stringify(state),
  );
  return {
    ...state,
  };
};
