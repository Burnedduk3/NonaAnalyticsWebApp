import React, {ChangeEvent} from 'react';
import './styles.scss';
import {IComboBoxProps} from './interface';

const ComboBoxComponent: React.FC<IComboBoxProps> = ({
  question, items, questionId, currentState, setResponse, order,
}: IComboBoxProps): JSX.Element => (
  <div className="inputContainer">
    <p>{question}</p>
    <label htmlFor={`${questionId}`}>
      <select
        id={`${questionId}`}
        className="combo-box"
        onChange={
          (e:ChangeEvent<HTMLSelectElement>) =>
            setResponse({
              ...currentState,
              [questionId]: {
                response: e.target.value,
                order,
              },
            },
            )
        }
      >
        {items.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
      <i></i>
    </label>
  </div>
);

export default ComboBoxComponent;
