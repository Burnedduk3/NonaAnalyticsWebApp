import {
  IStateQuestionResponse,
} from '../../../../Public/PreQuestioner/src/interface';

export interface ILadderQuestionProps{
    questionText: string
    questionId: string
    radioGroup: string
    values: Array<number>
    setResponse: (response: IStateQuestionResponse) => void;
    currentState: object,
    checked?: string
}
