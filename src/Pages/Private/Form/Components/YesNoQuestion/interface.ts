import {
  IStateQuestionResponse,
} from '../../../../Public/PreQuestioner/src/interface';

export interface IYesNoProps{
    question: string,
    radioGroup: string,
    questionId: string,
    setResponse: (response: IStateQuestionResponse) => void;
    currentState: object,
    checked?: string
}
