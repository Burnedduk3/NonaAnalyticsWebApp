/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createForm = /* GraphQL */ `
  mutation CreateForm(
    $input: CreateFormInput!
    $condition: ModelFormConditionInput
  ) {
    createForm(input: $input, condition: $condition) {
      id
      formQuestions {
        nextToken
        startedAt
      }
      UserID
      finished
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      UserID
      finished
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      UserID
      finished
      _version
      _deleted
      _lastChangedAt
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
        items
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      form {
        id
        UserID
        finished
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        items
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      form {
        id
        UserID
        finished
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        items
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      form {
        id
        UserID
        finished
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      _version
      _deleted
      _lastChangedAt
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
      usedForms {
        nextToken
        startedAt
      }
      category {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      subSection {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      items
      _version
      _deleted
      _lastChangedAt
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
      usedForms {
        nextToken
        startedAt
      }
      category {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      subSection {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      items
      _version
      _deleted
      _lastChangedAt
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
      usedForms {
        nextToken
        startedAt
      }
      category {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      subSection {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      items
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      questions {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      questions {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      questions {
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
