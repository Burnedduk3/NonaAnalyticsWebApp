import {ICategory, ISubSection} from '../../../../Context/FormQuestions/interface';

export const hello = 'hello';

export interface FetchchedSectionsAPI {
    SettingUpFormQueries: {
        __typename: 'SettingUpFormQueriesTypes'
        General: {
            __typename: 'GeneralTypes'
            getAllSections:{
                data: Array<{
                    __typename: 'Section'
                    id: string
                    name: string
                    order: number
                    subSections: Array<{
                        id: string
                        name: string
                        order: 0
                        __typename: 'SubSection'
                    }>
                }>
                error: boolean
                message: string
                __typename: 'SettingUpFormQueriesTypes'
            }
        }
    }
}

export interface FetchedQuestionsAPI {
    SettingUpFormQueries: {
        __typename: 'SettingUpFormQueriesTypes'
        General: {
            __typename: 'GeneralTypes'
            getAllQuestions:{
                data: Array<{
                    __typename: 'Section'
                    id: string
                    inputConfirmation: string
                    order: number
                    placeHolder: string
                    question: string
                    stack: number
                    stackPhrase: string
                    subSection:{
                        id: string
                        name: string
                        order: 0
                        __typename: 'SubSection'
                    }
                    category: {
                        id: string
                        name: string
                        __typename: 'Category'
                    }
                }>
                error: boolean
                message: string
                __typename: 'MultipleQuestionResponse'
            }
        }
    }
}

interface APISubSection{
    name: string,
    order: number,
    id: string
}

export interface IMappedQuestions {
    id: string
    inputConfirmation: string
    order: number
    placeHolder: string
    question: string
    stack: number
    stackPhrase: string
    subSection: APISubSection
    category: ICategory
}
