import {IQuestionerState} from '../../Questioner/interface';

export interface IImageQuestionProps{
    question: string
    questionId: string
    radioGroup: string
    items: Array<string>
    setResponse: (response: IQuestionerState) => void;
    currentState: object,
    checked?: string
    imagesPath: Array<string>
    order: number
}
