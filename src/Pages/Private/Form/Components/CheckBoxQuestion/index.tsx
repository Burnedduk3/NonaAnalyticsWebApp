import React from 'react';
import './styles.scss';
import {ICheckBoxProps} from './interface';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';
import {
  useFormQuestionState,
} from '../../../../../Context/FormQuestions/Provider';

const CheckBoxComponent: React.FC<ICheckBoxProps> = ({
  question, items, questionId, setResponse, order, inputConfirmation,
}: ICheckBoxProps): JSX.Element => {
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
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
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
    if (questionAnswer) {
      let text: string | Array<string> = questionAnswer.answer;
      text = text.trim().split(';');
      if (Array.isArray(text)) {
        if (event.target.checked) {
          text.push(event.target.name);
        }
        if (!event.target.checked) {
          const itemToDelete: number = text.indexOf(event.target.name);
          if (itemToDelete >= 0) {
            text.splice(itemToDelete, 1);
          }
        }
        text = text.join(';');
      }
      setResponse(text, questionId, order, inputConfirmation);
    } else {
      setResponse(event.target.value, questionId, order, inputConfirmation);
    }
  };


  return (
    <div className={'inputContainerCheck ' + question}>
      <p className="checkLabel">{question}</p>
      <div className="items">
        {items.map((item, index) => (
          <label
            key={questionId + index}
            className="container"
            htmlFor={`${questionId}`}
          >
            <input type="checkbox"
              value={item.name}
              onChange={handleInput}
              name={item.name}
              defaultChecked={
                questionAnswer?.answer.split(';').includes(item.name)
              }
            />
            <div className="checkmark"/>
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckBoxComponent;
