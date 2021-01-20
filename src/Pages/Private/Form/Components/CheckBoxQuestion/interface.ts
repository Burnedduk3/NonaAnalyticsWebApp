export interface ICheckBoxProps{
    question: string,
    items: string[],
    questionId: string,
    setResponse: (response: object) => void;
    currentState: object,
}
