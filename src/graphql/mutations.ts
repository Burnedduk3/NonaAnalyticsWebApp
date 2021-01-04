/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      lastname
      mail
      phone
      age
      forms {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      lastname
      mail
      phone
      age
      forms {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      lastname
      mail
      phone
      age
      forms {
        nextToken
      }
      createdAt
      updatedAt
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
        nextToken
      }
      user {
        id
        name
        lastname
        mail
        phone
        age
        createdAt
        updatedAt
      }
      finished
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
        nextToken
      }
      user {
        id
        name
        lastname
        mail
        phone
        age
        createdAt
        updatedAt
      }
      finished
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
        nextToken
      }
      user {
        id
        name
        lastname
        mail
        phone
        age
        createdAt
        updatedAt
      }
      finished
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
        items
        createdAt
        updatedAt
      }
      form {
        id
        finished
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
        items
        createdAt
        updatedAt
      }
      form {
        id
        finished
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
        items
        createdAt
        updatedAt
      }
      form {
        id
        finished
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
      usedForms {
        nextToken
      }
      category {
        id
        name
        createdAt
        updatedAt
      }
      items
      section {
        id
        name
        createdAt
        updatedAt
      }
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
      usedForms {
        nextToken
      }
      category {
        id
        name
        createdAt
        updatedAt
      }
      items
      section {
        id
        name
        createdAt
        updatedAt
      }
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
      usedForms {
        nextToken
      }
      category {
        id
        name
        createdAt
        updatedAt
      }
      items
      section {
        id
        name
        createdAt
        updatedAt
      }
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
      questions {
        nextToken
      }
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
      questions {
        nextToken
      }
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
      questions {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSentimentAnalysis = /* GraphQL */ `
  mutation CreateSentimentAnalysis(
    $input: CreateSentimentAnalysisInput!
    $condition: ModelSentimentAnalysisConditionInput
  ) {
    createSentimentAnalysis(input: $input, condition: $condition) {
      id
      time
      motiv
      createdAt
      updatedAt
    }
  }
`;
export const updateSentimentAnalysis = /* GraphQL */ `
  mutation UpdateSentimentAnalysis(
    $input: UpdateSentimentAnalysisInput!
    $condition: ModelSentimentAnalysisConditionInput
  ) {
    updateSentimentAnalysis(input: $input, condition: $condition) {
      id
      time
      motiv
      createdAt
      updatedAt
    }
  }
`;
export const deleteSentimentAnalysis = /* GraphQL */ `
  mutation DeleteSentimentAnalysis(
    $input: DeleteSentimentAnalysisInput!
    $condition: ModelSentimentAnalysisConditionInput
  ) {
    deleteSentimentAnalysis(input: $input, condition: $condition) {
      id
      time
      motiv
      createdAt
      updatedAt
    }
  }
`;
