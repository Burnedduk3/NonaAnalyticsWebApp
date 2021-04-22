import React, { ChangeEvent } from 'react';
import './styles.scss';
import { IComboBoxProps } from './interface';
import { IAnsweredQuestion } from '../../../../../Context/FormQuestions/interface';
import { useFormQuestionState } from '../../../../../Context/FormQuestions/Provider';

const ComboBoxComponent: React.FC<IComboBoxProps> = ({
  question,
  items,
  questionId,
  setResponse,
  order,
  inputConfirmation,
}: IComboBoxProps): JSX.Element => {
  const formContext = useFormQuestionState();
  const questionAnswer:
    | IAnsweredQuestion
    | undefined = formContext.formState.questionsAnswered.find(
    (questionAnswer: IAnsweredQuestion) => {
      if (questionAnswer.id === questionId) {
        return questionAnswer;
      } else {
        return undefined;
      }
    }
  );

  return (
    <div className="inputContainer">
      <p>{question}</p>
      <label htmlFor={`${questionId}`}>
        <select
          id={`${questionId}`}
          className="combo-box"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setResponse(e.target.value, questionId, order, inputConfirmation)
          }
        >
          {items.map((item) => (
            <option
              key={`${item.name}-option`}
              value={item.name}
              selected={questionAnswer?.answer === item.name}
            >
              {item.name}
            </option>
          ))}
        </select>
        <i />
      </label>
    </div>
  );
};

export default ComboBoxComponent;
