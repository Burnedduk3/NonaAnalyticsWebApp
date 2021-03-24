import {Item} from '../../../../../Config/api/Graphql/Types';

export interface ICheckBoxProps{
    question: string,
    items: Item[],
    questionId: string,
    setResponse: (
        response: string,
        questionID: string,
        order: number,
        validation: string
    ) => void;
    order: number,
    inputConfirmation:string
}
