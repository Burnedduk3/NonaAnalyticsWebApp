import React from 'react';
import './styles.scss';
import {ITextInputProps} from './interface';
import {
  useFormQuestionState,
} from '../../../../../Context/FormQuestions/Provider';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';

const TextInputComponent: React.FC<ITextInputProps> = ({
  question, questionId, setResponse, placeholder, order,
}:ITextInputProps) => {
  const formContext = useFormQuestionState();
  const questionAnswer: IAnsweredQuestion | undefined = formContext.
      formState.
      questionsAnswered.
      find((questionAnswer:IAnsweredQuestion)=>{
        if (questionAnswer.id === questionId) {
          return questionAnswer;
        } else {
          return undefined;
        }
      });

  return (
    <div className="inputContainer">
      <p>{question}</p>
      <label htmlFor={`${questionId}`}>
        <input
          id={`${questionId}`}
          placeholder={placeholder}
          type="text"
          className="text-input"
          value={questionAnswer? questionAnswer.answer: ''}
          onChange={
            (e) =>
              setResponse(e.target.value, questionId, order)
          }
        />
      </label>
    </div>
  );
};

export default TextInputComponent;
