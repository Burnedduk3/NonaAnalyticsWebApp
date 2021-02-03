
export interface IRadioButtonGroupProps {
    stackPhrase?: string,
    question: string
    items: Array<string>,
    questionId: string
    setResponse: (response: string, questionID: string, order: number) => void;
    radioGroup: string;
    order:number
}
