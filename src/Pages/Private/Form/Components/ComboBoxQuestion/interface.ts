export interface IComboBoxProps{
    question: string,
    items: Array<string>,
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
