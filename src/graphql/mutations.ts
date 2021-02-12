/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteCreateUserResponse = /* GraphQL */ `
  mutation DeleteCreateUserResponse($ID: String!) {
    deleteCreateUserResponse(ID: $ID) {
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
export const createCreateUserResponse = /* GraphQL */ `
  mutation CreateCreateUserResponse(
    $createCreateUserResponseInput: CreateCreateUserResponseInput!
  ) {
    createCreateUserResponse(
      createCreateUserResponseInput: $createCreateUserResponseInput
    ) {
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
export const updateCreateUserResponse = /* GraphQL */ `
  mutation UpdateCreateUserResponse(
    $updateCreateUserResponseInput: UpdateCreateUserResponseInput!
  ) {
    updateCreateUserResponse(
      updateCreateUserResponseInput: $updateCreateUserResponseInput
    ) {
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
export const deleteUserInfo = /* GraphQL */ `
  mutation DeleteUserInfo($userID: String!) {
    deleteUserInfo(userID: $userID) {
      userID
      fName
      lName
      userEmail
    }
  }
`;
export const createUserInfo = /* GraphQL */ `
  mutation CreateUserInfo($createUserInfoInput: CreateUserInfoInput!) {
    createUserInfo(createUserInfoInput: $createUserInfoInput) {
      userID
      fName
      lName
      userEmail
    }
  }
`;
export const updateUserInfo = /* GraphQL */ `
  mutation UpdateUserInfo($updateUserInfoInput: UpdateUserInfoInput!) {
    updateUserInfo(updateUserInfoInput: $updateUserInfoInput) {
      userID
      fName
      lName
      userEmail
    }
  }
`;
export const createForm = /* GraphQL */ `
  mutation CreateForm(
    $input: CreateFormInput!
    $condition: ModelFormConditionInput
  ) {
    createForm(input: $input, condition: $condition) {
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
            concent
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
      concent
      createdAt
      updatedAt
    }
  }
`;
export const updateForm = /* GraphQL */ `
  mutation UpdateForm(
    $input: UpdateFormInput!
    $condition: ModelFormConditionInput
  ) {
    updateForm(input: $input, condition: $condition) {
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
            concent
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
      concent
      createdAt
      updatedAt
    }
  }
`;
export const deleteForm = /* GraphQL */ `
  mutation DeleteForm(
    $input: DeleteFormInput!
    $condition: ModelFormConditionInput
  ) {
    deleteForm(input: $input, condition: $condition) {
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
            concent
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
      concent
      createdAt
      updatedAt
    }
  }
`;
export const createFormQuestion = /* GraphQL */ `
  mutation CreateFormQuestion(
    $input: CreateFormQuestionInput!
    $condition: ModelFormQuestionConditionInput
  ) {
    createFormQuestion(input: $input, condition: $condition) {
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
              concent
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
              concent
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
        concent
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateFormQuestion = /* GraphQL */ `
  mutation UpdateFormQuestion(
    $input: UpdateFormQuestionInput!
    $condition: ModelFormQuestionConditionInput
  ) {
    updateFormQuestion(input: $input, condition: $condition) {
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
              concent
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
              concent
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
        concent
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteFormQuestion = /* GraphQL */ `
  mutation DeleteFormQuestion(
    $input: DeleteFormQuestionInput!
    $condition: ModelFormQuestionConditionInput
  ) {
    deleteFormQuestion(input: $input, condition: $condition) {
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
              concent
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
              concent
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
        concent
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
            concent
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
            concent
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
            concent
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
export const createSection = /* GraphQL */ `
  mutation CreateSection(
    $input: CreateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    createSection(input: $input, condition: $condition) {
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
export const updateSection = /* GraphQL */ `
  mutation UpdateSection(
    $input: UpdateSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    updateSection(input: $input, condition: $condition) {
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
export const deleteSection = /* GraphQL */ `
  mutation DeleteSection(
    $input: DeleteSectionInput!
    $condition: ModelSectionConditionInput
  ) {
    deleteSection(input: $input, condition: $condition) {
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
export const createSubSection = /* GraphQL */ `
  mutation CreateSubSection(
    $input: CreateSubSectionInput!
    $condition: ModelSubSectionConditionInput
  ) {
    createSubSection(input: $input, condition: $condition) {
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
export const updateSubSection = /* GraphQL */ `
  mutation UpdateSubSection(
    $input: UpdateSubSectionInput!
    $condition: ModelSubSectionConditionInput
  ) {
    updateSubSection(input: $input, condition: $condition) {
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
export const deleteSubSection = /* GraphQL */ `
  mutation DeleteSubSection(
    $input: DeleteSubSectionInput!
    $condition: ModelSubSectionConditionInput
  ) {
    deleteSubSection(input: $input, condition: $condition) {
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
