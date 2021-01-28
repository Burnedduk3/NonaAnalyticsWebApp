import React, {createContext, useReducer} from 'react';
import FormQuestionsReducer, {initialState} from './Reducer';
import {IFormQuestionsContext} from './interface';

type ContextValue = IFormQuestionsContext | null;

export const FormQuestionsContext = createContext<ContextValue>(null);

// eslint-disable-next-line react/prop-types
const FormQuestionProvider: React.FC = ({children}):JSX.Element => {
  const [FormQuestionsState, FormQuestionsDispatch] = useReducer(
      FormQuestionsReducer, initialState,
  );

  const formQuestionContext: IFormQuestionsContext = {
    formState: FormQuestionsState,
    formStateDispatch: FormQuestionsDispatch,
  };


  return (
    <FormQuestionsContext.Provider
      value={formQuestionContext}
    >
      {children}
    </FormQuestionsContext.Provider>
  );
};

export const useFormQuestionState = ():IFormQuestionsContext | null =>
  React.useContext(FormQuestionsContext);

export default FormQuestionProvider;
