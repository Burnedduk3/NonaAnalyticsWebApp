/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCreateUserResponse = /* GraphQL */ `
  query GetCreateUserResponse($ID: String!) {
    getCreateUserResponse(ID: $ID) {
      ID
      formID
      questionId
      response
      subSection
      section
      userID
    }
  }
`;
export const listCreateUserResponses = /* GraphQL */ `
  query ListCreateUserResponses {
    listCreateUserResponses {
      ID
      formID
      questionId
      response
      subSection
      section
      userID
    }
  }
`;
export const getUserInfo = /* GraphQL */ `
  query GetUserInfo($userID: String!) {
    getUserInfo(userID: $userID) {
      userID
      fName
      lName
      userEmail
    }
  }
`;
export const listUserInfos = /* GraphQL */ `
  query ListUserInfos {
    listUserInfos {
      userID
      fName
      lName
      userEmail
    }
  }
`;
export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
      id
      formQuestions {
        items {
          id
          response
          question {
            id
            question
            stack
            stackPhrase
            placeHolder
            usedForms {
              nextToken
            }
            category {
              id
              name
              createdAt
              updatedAt
            }
            subSection {
              id
              name
              order
              createdAt
              updatedAt
            }
            order
            items
            imagesPath
            inputConfirmation
            createdAt
            updatedAt
          }
          form {
            id
            formQuestions {
              nextToken
            }
            UserID
            finished
            percentage
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      UserID
      finished
      percentage
      createdAt
      updatedAt
    }
  }
`;
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        formQuestions {
          items {
            id
            response
            question {
              id
              question
              stack
              stackPhrase
              placeHolder
              order
              items
              imagesPath
              inputConfirmation
              createdAt
              updatedAt
            }
            form {
              id
              UserID
              finished
              percentage
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        UserID
        finished
        percentage
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFormQuestion = /* GraphQL */ `
  query GetFormQuestion($id: ID!) {
    getFormQuestion(id: $id) {
      id
      response
      question {
        id
        question
        stack
        stackPhrase
        placeHolder
        usedForms {
          items {
            id
            response
            question {
              id
              question
              stack
              stackPhrase
              placeHolder
              order
              items
              imagesPath
              inputConfirmation
              createdAt
              updatedAt
            }
            form {
              id
              UserID
              finished
              percentage
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        category {
          id
          name
          questions {
            items {
              id
              question
              stack
              stackPhrase
              placeHolder
              order
              items
              imagesPath
              inputConfirmation
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        subSection {
          id
          name
          section {
            id
            name
            subSections {
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          questions {
            items {
              id
              question
              stack
              stackPhrase
              placeHolder
              order
              items
              imagesPath
              inputConfirmation
              createdAt
              updatedAt
            }
            nextToken
          }
          order
          createdAt
          updatedAt
        }
        order
        items
        imagesPath
        inputConfirmation
        createdAt
        updatedAt
      }
      form {
        id
        formQuestions {
          items {
            id
            response
            question {
              id
              question
              stack
              stackPhrase
              placeHolder
              order
              items
              imagesPath
              inputConfirmation
              createdAt
              updatedAt
            }
            form {
              id
              UserID
              finished
              percentage
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        UserID
        finished
        percentage
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFormQuestions = /* GraphQL */ `
  query ListFormQuestions(
    $filter: ModelFormQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFormQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        response
        question {
          id
          question
          stack
          stackPhrase
          placeHolder
          usedForms {
            items {
              id
              response
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          subSection {
            id
            name
            section {
              id
              name
              order
              createdAt
              updatedAt
            }
            questions {
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          order
          items
          imagesPath
          inputConfirmation
          createdAt
          updatedAt
        }
        form {
          id
          formQuestions {
            items {
              id
              response
              createdAt
              updatedAt
            }
            nextToken
          }
          UserID
          finished
          percentage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      question
      stack
      stackPhrase
      placeHolder
      usedForms {
        items {
          id
          response
          question {
            id
            question
            stack
            stackPhrase
            placeHolder
            usedForms {
              nextToken
            }
            category {
              id
              name
              createdAt
              updatedAt
            }
            subSection {
              id
              name
              order
              createdAt
              updatedAt
            }
            order
            items
            imagesPath
            inputConfirmation
            createdAt
            updatedAt
          }
          form {
            id
            formQuestions {
              nextToken
            }
            UserID
            finished
            percentage
            createdAt
            updatedAt
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      category {
        id
        name
        questions {
          items {
            id
            question
            stack
            stackPhrase
            placeHolder
            usedForms {
              nextToken
            }
            category {
              id
              name
              createdAt
              updatedAt
            }
            subSection {
              id
              name
              order
              createdAt
              updatedAt
            }
            order
            items
            imagesPath
            inputConfirmation
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      subSection {
        id
        name
        section {
          id
          name
          subSections {
            items {
              id
              name
              order
              createdAt
              updatedAt
            }
            nextToken
          }
          order
          createdAt
          updatedAt
        }
        questions {
          items {
            id
            question
            stack
            stackPhrase
            placeHolder
            usedForms {
              nextToken
            }
            category {
              id
              name
              createdAt
              updatedAt
            }
            subSection {
              id
              name
              order
              createdAt
              updatedAt
            }
            order
            items
            imagesPath
            inputConfirmation
            createdAt
            updatedAt
          }
          nextToken
        }
        order
        createdAt
        updatedAt
      }
      order
      items
      imagesPath
      inputConfirmation
      createdAt
      updatedAt
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        stack
        stackPhrase
        placeHolder
        usedForms {
          items {
            id
            response
            question {
              id
              question
              stack
              stackPhrase
              placeHolder
              order
              items
              imagesPath
              inputConfirmation
              createdAt
              updatedAt
            }
            form {
              id
              UserID
              finished
              percentage
              createdAt
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        category {
          id
          name
          questions {
            items {
              id
              question
              stack
              stackPhrase
              placeHolder
              order
              items
              imagesPath
              inputConfirmation
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
        subSection {
          id
          name
          section {
            id
            name
            subSections {
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          questions {
            items {
              id
              question
              stack
              stackPhrase
              placeHolder
              order
              items
              imagesPath
              inputConfirmation
              createdAt
              updatedAt
            }
            nextToken
          }
          order
          createdAt
          updatedAt
        }
        order
        items
        imagesPath
        inputConfirmation
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      id
      name
      questions {
        items {
          id
          question
          stack
          stackPhrase
          placeHolder
          usedForms {
            items {
              id
              response
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          subSection {
            id
            name
            section {
              id
              name
              order
              createdAt
              updatedAt
            }
            questions {
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          order
          items
          imagesPath
          inputConfirmation
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        questions {
          items {
            id
            question
            stack
            stackPhrase
            placeHolder
            usedForms {
              nextToken
            }
            category {
              id
              name
              createdAt
              updatedAt
            }
            subSection {
              id
              name
              order
              createdAt
              updatedAt
            }
            order
            items
            imagesPath
            inputConfirmation
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
      id
      name
      subSections {
        items {
          id
          name
          section {
            id
            name
            subSections {
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          questions {
            items {
              id
              question
              stack
              stackPhrase
              placeHolder
              order
              items
              imagesPath
              inputConfirmation
              createdAt
              updatedAt
            }
            nextToken
          }
          order
          createdAt
          updatedAt
        }
        nextToken
      }
      order
      createdAt
      updatedAt
    }
  }
`;
export const listSections = /* GraphQL */ `
  query ListSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        subSections {
          items {
            id
            name
            section {
              id
              name
              order
              createdAt
              updatedAt
            }
            questions {
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          nextToken
        }
        order
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSubSection = /* GraphQL */ `
  query GetSubSection($id: ID!) {
    getSubSection(id: $id) {
      id
      name
      section {
        id
        name
        subSections {
          items {
            id
            name
            section {
              id
              name
              order
              createdAt
              updatedAt
            }
            questions {
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          nextToken
        }
        order
        createdAt
        updatedAt
      }
      questions {
        items {
          id
          question
          stack
          stackPhrase
          placeHolder
          usedForms {
            items {
              id
              response
              createdAt
              updatedAt
            }
            nextToken
          }
          category {
            id
            name
            questions {
              nextToken
            }
            createdAt
            updatedAt
          }
          subSection {
            id
            name
            section {
              id
              name
              order
              createdAt
              updatedAt
            }
            questions {
              nextToken
            }
            order
            createdAt
            updatedAt
          }
          order
          items
          imagesPath
          inputConfirmation
          createdAt
          updatedAt
        }
        nextToken
      }
      order
      createdAt
      updatedAt
    }
  }
`;
export const listSubSections = /* GraphQL */ `
  query ListSubSections(
    $filter: ModelSubSectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubSections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        section {
          id
          name
          subSections {
            items {
              id
              name
              order
              createdAt
              updatedAt
            }
            nextToken
          }
          order
          createdAt
          updatedAt
        }
        questions {
          items {
            id
            question
            stack
            stackPhrase
            placeHolder
            usedForms {
              nextToken
            }
            category {
              id
              name
              createdAt
              updatedAt
            }
            subSection {
              id
              name
              order
              createdAt
              updatedAt
            }
            order
            items
            imagesPath
            inputConfirmation
            createdAt
            updatedAt
          }
          nextToken
        }
        order
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
