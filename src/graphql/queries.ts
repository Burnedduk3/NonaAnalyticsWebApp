/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncForms = /* GraphQL */ `
  query SyncForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncForms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        UserID
        finished
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
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
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserID
        finished
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFormQuestions = /* GraphQL */ `
  query SyncFormQuestions(
    $filter: ModelFormQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFormQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        response
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
        items
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSections = /* GraphQL */ `
  query SyncSections(
    $filter: ModelSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSubSections = /* GraphQL */ `
  query SyncSubSections(
    $filter: ModelSubSectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubSections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
