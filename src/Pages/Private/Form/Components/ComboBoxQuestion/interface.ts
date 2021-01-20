import {IQuestionerState} from '../../Questioner/interface';

export interface IComboBoxProps{
    question: string,
    items: [],
    questionId: string,
    setResponse: (response: IQuestionerState) => void;
    currentState: IQuestionerState,
}
