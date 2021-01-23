import {IQuestionerState} from '../../Questioner/interface';

export interface IYesNoProps{
    question: string,
    radioGroup: string,
    questionId: string,
    setResponse: (response: IQuestionerState) => void;
    currentState: object,
    checked?: string,
    order: number
}
