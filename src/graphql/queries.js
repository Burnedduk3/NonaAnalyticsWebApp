/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      lastname
      mail
      phone
      forms {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        lastname
        mail
        phone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
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
        createdAt
        updatedAt
      }
      finished
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
        finished
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
        items
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
      questions {
        nextToken
      }
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
