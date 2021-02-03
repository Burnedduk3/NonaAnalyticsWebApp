
export interface ILadderQuestionProps{
    questionText: string
    questionId: string
    radioGroup: string
    values: Array<string>
    setResponse: (response: string, questionID: string, order: number) => void;
    checked?: string
    order: number
}
