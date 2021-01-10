export interface IComboBoxProps{
    question: string,
    items: [],
    questionId: string,
    setResponse: (response: object) => void;
    currentState: object,
}
