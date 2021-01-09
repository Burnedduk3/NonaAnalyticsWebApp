export interface ITextInputProps{
    question: string;
    questionId: string;
    placeholder: string;
    currentState: object;
    setResponse: (response: object) => void;
}
