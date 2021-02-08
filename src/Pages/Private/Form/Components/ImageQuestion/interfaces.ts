
export interface IImageQuestionProps{
    question: string
    questionId: string
    radioGroup: string
    items: Array<string>
    setResponse: (response: string, questionID: string, order: number) => void
    checked?: string
    setLoading: (loading: boolean) => void
    imagesPath: Array<string>
    order: number
}
