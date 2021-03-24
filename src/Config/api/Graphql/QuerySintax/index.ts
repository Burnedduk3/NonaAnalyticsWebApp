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