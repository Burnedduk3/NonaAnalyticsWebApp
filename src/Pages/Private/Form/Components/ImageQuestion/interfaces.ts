
export interface IImageQuestionProps{
    question: string
    questionId: string
    radioGroup: string
    items: Array<string>
    setResponse: (response: string, questionID: string, order: number) => void;
    checked?: string
    imagesPath: Array<string>
    order: number
}
