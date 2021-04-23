import React, { ChangeEvent, useState } from 'react';
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
  const [isOther, setOther] = useState<boolean>(false);

  return (
    <div className="inputContainer">
      <p>{question}</p>
      <label htmlFor={`${questionId}`}>
        <select
          id={`${questionId}`}
          className="combo-box"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>{
            if (e.target.value === 'Other') {
              setOther(true);
            } else {
              setOther(false);
              setResponse(e.target.value, questionId, order, inputConfirmation);
            }
          }}
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
        {
          isOther && 
          <input
            id={`${questionId}-other`}
            placeholder={'Please, specify...'}
            type="text"
            className="text-input"
            onChange={(e) =>
              setResponse(`Other: ${e.target.value}`, questionId, order, inputConfirmation)
            }
          />
        }
      </label>
    </div>
  );
};

export default ComboBoxComponent;
