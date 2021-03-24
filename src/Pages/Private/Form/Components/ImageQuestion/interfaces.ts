import {Image, Item} from '../../../../../Config/api/Graphql/Types';

export interface IImageQuestionProps{
    question: string
    questionId: string
    radioGroup: string
    items: Array<Item>
    setResponse: (
        response: string,
        questionID: string,
        order: number,
        validation:string
    ) => void
    checked?: string
    setLoading: (loading: boolean) => void
    imagesPath: Array<Image>
    order: number
    setIsLoading: (isLoading: boolean) => void
    inputConfirmation: string
}
