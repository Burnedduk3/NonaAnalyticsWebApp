import {ICategory} from '../../../../Context/FormQuestions/interface';
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
                    items: Array<{
                        name:string,
                        order: number
                        __typename: 'QuestionItems'
                    }>

                    imagesPath: Array<{
                        id: string
                        src: string
                        alt: string
                        order: number
                        __typename: 'QuestionImages'
                    }>
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

export interface Item{
    name:string,
    order: number
}

export interface Image {
    id: string
    src: string
    alt: string
    order: number
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
    items: Array<Item>
    imagesPath: Array<Image>

}

export interface ICreateAnswerResponse {
    UserInteractionMutation:{
        __typename: 'UserInteractionMutationsTypes'
        createResponse:{
            __typename: 'SingleAnswerResponse'
            message: string
            error: boolean
            data:{
                id: string
                __typename: 'FormResponses'
            }
        }
    }
}

export interface IUpdateAnswerResponse {
    UserInteractionMutation:{
        __typename: 'UserInteractionMutationsTypes'
        updateQuestionResponse:{
            __typename: 'SingleAnswerResponse'
            message: string
            error: boolean
            data:{
                id: string
                __typename: 'FormResponses'
            }
        }
    }
}

export interface IUpdateFormProgressResponse {
    UserInteractionMutation:{
        __typename: 'UserInteractionMutationsTypes'
        updateFormProgress:{
            __typename: 'SingleAnswerResponse'
            message: string
            error: boolean
            data:{
                id: string
                percentage: number
                __typename: 'FormResponses'
            }
        }
    }
}

export interface IUpdateFormConsentResponse {
    UserInteractionMutation:{
        __typename: 'UserInteractionMutationsTypes'
        updateFormConsent:{
            __typename: 'SingleFormResponse'
            message: string
            error: boolean
            data:{
                id: string
                consent: number
                __typename: 'Form'
            }
        }
    }
}

export interface ICreateUser {
    UserInteractionMutation:{
        __typename: 'UserInteractionMutationsTypes'
        createUser:{
            __typename: 'SingleUserResponse'
            message: string
            error: boolean
            data:{
                id: string
                __typename: 'User'
            }
        }
    }
}

export interface IStartForm {
    UserInteractionMutation:{
        __typename: 'UserInteractionMutationsTypes'
        startForm:{
            __typename: 'SingleFormResponse'
            message: string
            error: boolean
            data:{
                id: string
                __typename: 'From'
            }
        }
    }
}

export interface IGetUser {
    UserInteractionQueries:{
        __typename: 'UserInteractionQueriesTypes'
        listUserData:{
            __typename: 'SingleUserResponse'
            message: string
            error: boolean
            data:{
                phone: string
                CognitoPoolId: string
                username: string
                name: string
                __typename: 'User'
            }
        }
    }
}


