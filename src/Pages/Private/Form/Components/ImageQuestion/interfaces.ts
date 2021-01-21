import {
  IStateQuestionResponse,
} from '../../../../Public/PreQuestioner/src/interface';

export interface IImageQuestionProps{
    question: string
    questionId: string
    radioGroup: string
    items: Array<string>
    setResponse: (response: IStateQuestionResponse) => void;
    currentState: object,
    checked?: string
    imagesPath: Array<string>
}
