import {
  IAnsweredQuestion,
  IFormQuestionsContextPayload,
  IFormQuestionsContextState,
  IQuestion,
  ISection,
  ISubSection,
} from './interface';
import {BranchingLogic, IQoption} from "./branchQuestions";
import validator from "validator";
import {ApplyCondition} from "./ApplyCondition";
import {initialState} from "./Reducer";

export const nextQuestions = (
  state: IFormQuestionsContextState
): IFormQuestionsContextState => {
  const currentSection = state.currentSection;
  const currentSubSection = state.currentSubSection;
  const currentStack = state.currentStack;
  let newState = {
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
        (subSection: ISubSection) => {
          if (subSection.name === currentSubSection?.name) {
            return subSection;
          }
        }
      );
      if (indexOfSubsection !== currentSection.subSections.length - 1) {
        if (indexOfSubsection >= 0) {
          newState.currentSubSection =
            currentSection.subSections[indexOfSubsection + 1];
          newState.currentStack = 0;
        }
      } else {
        // change the section if there are no more subsections
        const indexOfCurrentSection = state.sections.findIndex(
          (section: ISection) => {
            if (section.name === currentSection?.name) {
              return section;
            }
          }
        );
        if (indexOfCurrentSection !== state.sections.length - 1) {
          if (indexOfCurrentSection >= 0) {
            newState.currentSection = newState.sections[indexOfCurrentSection + 1];
            newState.currentSubSection = newState.currentSection.subSections[0];
            newState.currentStack = 0;
          }
        } else {
          newState.finished = true;
        }
      }
    }
  }
  newState = setShowableQuestions(newState);
  newState = SkipForwardQuestions(newState);

  return {
    ...state,
    ...newState,
  };
};

export const previousQuestion = (
  state: IFormQuestionsContextState
): IFormQuestionsContextState => {
  const { currentStack, currentSubSection, currentSection } = state;
  let newState = {
    ...state,
  };
  if (
    currentStack !== null &&
    currentSubSection !== null &&
    currentSection !== null
  ) {
    if (currentStack - 1 >= 0) {
      newState.currentStack -= 1;
    } else {
      const indexOfSubsection = currentSection.subSections.findIndex(
        (subSection: ISubSection) => {
          if (subSection.name === currentSubSection?.name) {
            return subSection;
          }
        }
      );
      if (indexOfSubsection > 0) {
        if (indexOfSubsection !== -1 && indexOfSubsection - 1 >= 0) {
          newState.currentSubSection =
            currentSection.subSections[indexOfSubsection - 1];
          newState.currentStack = newState.currentSubSection.maxStack;
        }
      } else {
        const indexOfCurrentSection = state.sections.findIndex(
          (section: ISection) => {
            if (section.name === currentSection?.name) {
              return section;
            }
          }
        );
        if (indexOfCurrentSection > 0 && indexOfCurrentSection - 1 >= 0) {
          newState.currentSection = newState.sections[indexOfCurrentSection - 1];
          newState.currentSubSection =
            newState.currentSection.subSections[
              newState.currentSection.subSections.length - 1
            ];
          newState.currentStack = newState.currentSubSection.maxStack;
        } else {
          newState.finished = true;
        }
      }
    }
  }
  newState = setShowableQuestions(newState);
  newState = SkipBackwardsQuestions(newState);
  return {
    ...newState,
  };
};

export const updateQuestionAnswer = (
  state: IFormQuestionsContextState,
  payload: IFormQuestionsContextPayload
): IFormQuestionsContextState => {
  if (payload.questionToAdd) {
    const { questionToAdd } = payload;
    const indexofQuestion = state.questionsAnswered.findIndex(
      (element: IAnsweredQuestion) => {
        return element.id === payload.questionToAdd?.id;
      }
    );
    state.questionsAnswered[indexofQuestion] = {
      ...state.questionsAnswered[indexofQuestion],
      ...questionToAdd,
    };
    state = ApplyConditionalLogic(state)
  }
  return state;
};

export const ApplyConditionalLogic = (
    state: IFormQuestionsContextState
) =>{
  const newState: IFormQuestionsContextState  = {
    ...state
  }
  const {showableQuestions, questionsAnswered} = state;
  newState.showableQuestions = showableQuestions.map((uiQuestion)=>{
    const condition = BranchingLogic.find((questionCondition)=>{
      return questionCondition.id === uiQuestion.id;
    })
    if (condition){
      const dependantQuestions = condition.logicQuestions
      const conditionsResult: boolean[] = dependantQuestions.map((conditionItem):boolean=> {
        const answeredQuestion = questionsAnswered.find((answer)=>{
          return answer.id === conditionItem.id
        })

        if (answeredQuestion) {
          return ApplyCondition(answeredQuestion, conditionItem)
        } else {
          return false
        }
      });
      if (condition.method === "EVERY"){
        uiQuestion.show =  conditionsResult.every(Boolean);
      }

      if (condition.method === "SOME"){
        uiQuestion.show =  conditionsResult.some(Boolean);
      }
    }
    return uiQuestion;
  });

  return state;
}

export const SkipForwardQuestions = (
    state:IFormQuestionsContextState
) => {
  const emptyPage = state.showableQuestions.every((question)=>{
    return question.show === false
  });
  if (emptyPage){
    state = nextQuestions(state);
    const newState = setShowableQuestions(state);
    SkipForwardQuestions(newState);
  }
  return {
    ...state
  }
}

export const SkipBackwardsQuestions = (
    state:IFormQuestionsContextState
) => {
  const emptyPage = state.showableQuestions.every((question)=>{
    return question.show === false
  });
  if (emptyPage){
    state = previousQuestion(state);
    const newState = setShowableQuestions(state);
    SkipBackwardsQuestions(newState);
  }
  return {
    ...state
  }
}

export const setShowableQuestions = (
  state: IFormQuestionsContextState
): IFormQuestionsContextState => {
  const { currentSubSection, currentStack } = state;
  if (currentSubSection && currentStack !== null) {
    const currentQuestions: Array<IQuestion> = [];
    currentSubSection.questions.map((question: IQuestion) => {
      if (question.stack === currentStack) {
        currentQuestions.push(question);
      }
    });
    state.showableQuestions = [...currentQuestions];

  }
  const newState = ApplyConditionalLogic(state)

  return {
    ...newState,
  };
};

export const setByMenu = (
  state: IFormQuestionsContextState,
  payload: IFormQuestionsContextPayload
): IFormQuestionsContextState => {
  if (payload && payload.subSectionName) {
    const { subSectionName } = payload;
    let newSection: ISection = {
      subSections: [],
      name: '',
      id: '',
      order: 0,
    };
    let newSubSection: ISubSection = {
      name: '',
      questions: [],
      maxStack: 0,
      id: '',
      order: 0,
    };
    state.sections.map((section: ISection) => {
      section.subSections.map((subSection: ISubSection) => {
        if (subSection.name === subSectionName) {
          newSection = {
            ...section,
          };
          newSubSection = {
            ...subSection,
          };
        }
      });
    });
    state.currentSection = newSection;
    state.currentSubSection = newSubSection;
    state.currentStack = 0;
  }

  const newState = setShowableQuestions(state);
  return { ...newState };
};

export const setQuestionResponse = (
  state: IFormQuestionsContextState,
  payload: IFormQuestionsContextPayload
): IFormQuestionsContextState => {
  const { questionToAdd } = payload;
  if (questionToAdd !== undefined && questionToAdd) {
    const foundQuestionId = state.questionsAnswered.findIndex((questionId) => {
      if (questionId.id === payload.questionToAdd?.id) {
        return questionId;
      }
    });
    if (foundQuestionId >= 0) {
      state.questionsAnswered[foundQuestionId] = {
        ...questionToAdd,
        responseDbId: questionToAdd.responseDbId,
        sendToDB: false,
        validation: questionToAdd.validation ? questionToAdd.validation : '',
      };
    } else {
      state.questionsAnswered = [
        ...state.questionsAnswered,
        {
          id: questionToAdd.id,
          sendToDB: false,
          answer: questionToAdd.answer,
          responseDbId: questionToAdd.responseDbId,
          validation: questionToAdd.validation ? questionToAdd.validation : '',
        },
      ];
    }
  }
  const currentProgress =
    (state.questionsAnswered.length * 100) / state.totalQuestions;
  state.currentProgress = parseFloat(currentProgress.toFixed(2));
  state = ApplyConditionalLogic(state)
  return {
    ...state,
  };
};
