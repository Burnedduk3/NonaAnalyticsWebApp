import {Item} from '../../../../../Config/api/Graphql/Types';

export interface ILadderQuestionProps{
    questionText: string
    questionId: string
    radioGroup: string
    values: Array<Item>
    setResponse: (
        response: string,
        questionID: string,
        order: number,
        validation: string
    ) => void;
    checked?: string
    order: number
    inputConfirmation:string;
}
