export interface IYesNoProps{
    question: string,
    radioGroup: string,
    questionId: string,
    setResponse: (response: object) => void;
    currentState: object,
}
