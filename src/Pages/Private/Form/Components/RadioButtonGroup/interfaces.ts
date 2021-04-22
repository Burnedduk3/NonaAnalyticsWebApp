import { Item } from '../../../../../Config/api/Graphql/Types';

export interface IRadioButtonGroupProps {
  stackPhrase?: string;
  question: string;
  items: Array<Item>;
  questionId: string;
  setResponse: (
    response: string,
    questionID: string,
    order: number,
    validation: string
  ) => void;
  radioGroup: string;
  order: number;
  inputConfirmation: string;
}
