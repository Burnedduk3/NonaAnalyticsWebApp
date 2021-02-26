
export interface IMultiladder{
    stackPhrase?: string,
    question: string
    items: Array<string>,
    questionId: string
    setResponse: (
        response: string,
        questionID: string,
        order: number,
        validation:string
    ) => void;
    radioGroup: string;
    order: number;
    inputConfirmation:string;
}
