
export interface ICheckBoxProps{
    question: string,
    items: string[],
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
