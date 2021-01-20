import {IQuestionerState} from '../../Questioner/interface';

export interface IRadioButtonGroupProps {
    stackPhrase?: string,
    question: string
    items: Array<string>,
    questionId: string
    currentState: IQuestionerState;
    setResponse: (response: IQuestionerState) => void;
    radioGroup: string;
}
