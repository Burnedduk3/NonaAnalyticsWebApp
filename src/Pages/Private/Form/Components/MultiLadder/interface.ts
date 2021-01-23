import {IQuestionerState} from '../../Questioner/interface';

export interface IMultiladder{
    stackPhrase?: string,
    question: string
    items: Array<string>,
    questionId: string
    currentState: IQuestionerState;
    setResponse: (response: IQuestionerState) => void;
    radioGroup: string;
    order: number
}
