export interface ITextInputProps{
    question: string;
    questionId: string;
    placeholder: string;
    setResponse: (response: string, questionID: string, order: number) => void;
    order: number;
}
