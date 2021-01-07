import React, {createContext, useReducer} from 'react';
import FormQuestionsReducer, {initialState} from './Reducer';

export const FormQuestionsContext = createContext([]);

// eslint-disable-next-line react/prop-types
const FormQuestionProvider = ({children}) => {
  const [FormQuestionsState, FormQuestionsDispatch] = useReducer(
      FormQuestionsReducer, initialState,
  );

  return (
    <FormQuestionsContext.Provider
      value={{FormQuestionsState, FormQuestionsDispatch}}
    >
      {children}
    </FormQuestionsContext.Provider>
  );
};

export default FormQuestionProvider;
