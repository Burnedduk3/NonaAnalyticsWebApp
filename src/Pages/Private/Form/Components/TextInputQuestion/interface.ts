import {IQuestionerState} from '../../Questioner/interface';

export interface ITextInputProps{
    question: string;
    questionId: string;
    placeholder: string;
    currentState: IQuestionerState;
    setResponse: (response: IQuestionerState) => void;
    order: number;
}
