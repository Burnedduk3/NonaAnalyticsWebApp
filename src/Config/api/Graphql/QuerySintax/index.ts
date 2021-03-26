/* eslint-disable */
import {DocumentNode, gql} from '@apollo/client';

export const GET_SUBSECTION_QUESTIONS: DocumentNode = gql`
    query($subSectionName:String! $stack: Float!) {
        SettingUpFormQueries{
            FormQueries{
                getSubSectionQuestions(Parameters:{subSectionName: $subSectionName, stackNumber:$stack}){
                    error
                    message
                    data{
                        question
                        stack
                        order
                        subSection{
                            name
                        }
                        placeHolder
                        category{
                            name
                        }
                        items{
                            name
                            order
                        }
                        imagesPath{
                            src
                            alt
                            order
                        }
                    }
                }
            }
        }
    }
`;

export const GET_ALL_SECTIONS: DocumentNode=gql`
    query {
        SettingUpFormQueries{
            General{
                getAllSections{
                    error
                    data{
                        id
                        name
                        order
                        subSections{
                            id
                            name
                            order
                        }
                    }
                }
            }
        }
    }
`;

export const GET_ALL_QUESTIONS: DocumentNode = gql`
    query{
        SettingUpFormQueries{
            General{
                getAllQuestions{
                    error
                    message
                    data{
                        id
                        question
                        stack
                        stackPhrase
                        placeHolder
                        order
                        inputConfirmation
                        items{
                            name
                            order
                        }
                        imagesPath{
                            id
                            src
                            alt
                            order
                        }
                        category{
                            id
                            name
                        }
                        subSection{
                            id
                            name
                            order
                        }
                    }
                }
            }
        }
    }
`;

export const CREATE_RESPONSE: DocumentNode = gql`
    mutation($formID: String!, $questionID: String!, $response: String!) {
        UserInteractionMutation {
            createResponse(
                createResponseInputs: {
                    formId: $formID
                    questionId: $questionID
                    response: $response
                }
            ) {
                error
                message
                data {
                    id
                }
            }
        }
    }
`;

export const UPDATE_RESPONSE: DocumentNode = gql`
    mutation($questionId:String!, $newResponse:String!){
        UserInteractionMutation{
            updateQuestionResponse(updateResponse:{questionId:$questionId, newResponse: $newResponse}){
                data{
                    id
                    response
                }
            }
        }
    }
`;

export const UPDATE_FORM_PROGRESS: DocumentNode = gql`
    mutation($formId:String!, $progress:Float!){
        UserInteractionMutation{
            updateFormProgress(UpdateProgress:{formId:$formId, progress: $progress}){
                error
                message
                data{
                    id
                    percentage
                }
            }
        }
    }
`;