import {IQuestionerState} from '../../Questioner/interface';

export interface ICheckBoxProps{
    question: string,
    items: string[],
    questionId: string,
    setResponse: (response: IQuestionerState) => void;
    currentState: IQuestionerState,
}
