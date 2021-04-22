import { Item } from '../../../../../Config/api/Graphql/Types';

export interface IComboBoxProps {
  question: string;
  items: Array<Item>;
  questionId: string;
  setResponse: (
    response: string,
    questionID: string,
    order: number,
    validation: string
  ) => void;
  order: number;
  inputConfirmation: string;
}
