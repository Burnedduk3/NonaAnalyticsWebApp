export interface IRadioButtonGroupProps {
    stackPhrase?: string,
    question: string
    items: Array<string>,
    questionId: string
    currentState: object;
    setResponse: (response: object) => void;
    radioGroup: string;
}
