/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateForm = /* GraphQL */ `
  subscription OnCreateForm {
    onCreateForm {
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
export const onUpdateForm = /* GraphQL */ `
  subscription OnUpdateForm {
    onUpdateForm {
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
export const onDeleteForm = /* GraphQL */ `
  subscription OnDeleteForm {
    onDeleteForm {
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
export const onCreateFormQuestion = /* GraphQL */ `
  subscription OnCreateFormQuestion {
    onCreateFormQuestion {
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
export const onUpdateFormQuestion = /* GraphQL */ `
  subscription OnUpdateFormQuestion {
    onUpdateFormQuestion {
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
export const onDeleteFormQuestion = /* GraphQL */ `
  subscription OnDeleteFormQuestion {
    onDeleteFormQuestion {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection {
    onCreateSection {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection {
    onUpdateSection {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection {
    onDeleteSection {
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
export const onCreateSentimentAnalysis = /* GraphQL */ `
  subscription OnCreateSentimentAnalysis {
    onCreateSentimentAnalysis {
      id
      time
      motiv
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSentimentAnalysis = /* GraphQL */ `
  subscription OnUpdateSentimentAnalysis {
    onUpdateSentimentAnalysis {
      id
      time
      motiv
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSentimentAnalysis = /* GraphQL */ `
  subscription OnDeleteSentimentAnalysis {
    onDeleteSentimentAnalysis {
      id
      time
      motiv
      createdAt
      updatedAt
    }
  }
`;