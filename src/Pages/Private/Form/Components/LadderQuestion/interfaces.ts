import {IQuestionerState} from '../../Questioner/interface';

export interface ILadderQuestionProps{
    questionText: string
    questionId: string
    radioGroup: string
    values: Array<string>
    setResponse: (response: IQuestionerState) => void;
    currentState: object,
    checked?: string
    order: number
}
