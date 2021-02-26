
export interface IImageQuestionProps{
    question: string
    questionId: string
    radioGroup: string
    items: Array<string>
    setResponse: (
        response: string,
        questionID: string,
        order: number,
        validation:string
    ) => void
    checked?: string
    setLoading: (loading: boolean) => void
    imagesPath: Array<string>
    order: number
    setIsLoading: (isLoading: boolean) => void
    inputConfirmation: string
}
