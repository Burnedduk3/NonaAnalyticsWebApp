export interface IComboBoxProps{
    question: string,
    items: [],
    questionId: string,
    setResponse: (response: string, questionID: string, order: number) => void;
    order: number
}
