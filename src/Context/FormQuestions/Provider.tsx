import React, {createContext, useReducer} from 'react';
import FormQuestionsReducer, {initialState} from './Reducer';
import {IFormQuestionsContext} from './interface';

type ContextValue = IFormQuestionsContext | null;


export const FormQuestionsContext = createContext<ContextValue>(null);

const FormQuestionProvider: React.FC = ({children}):JSX.Element => {
  const [FormQuestionsState, FormQuestionsDispatch] = useReducer(
      FormQuestionsReducer, initialState,
  );

  const formQuestionContext: IFormQuestionsContext = {
    appState: FormQuestionsState,
    appStateDispatch: FormQuestionsDispatch,
  };


  return (
    <FormQuestionsContext.Provider
      value={formQuestionContext}
    >
      {children}
    </FormQuestionsContext.Provider>
  );
};

export default FormQuestionProvider;
