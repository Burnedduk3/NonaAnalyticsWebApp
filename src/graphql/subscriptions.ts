/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCreateUserResponse = /* GraphQL */ `
  subscription OnCreateCreateUserResponse {
    onCreateCreateUserResponse {
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
export const onCreateUserInfo = /* GraphQL */ `
  subscription OnCreateUserInfo {
    onCreateUserInfo {
      userID
      fName
      lName
      userEmail
    }
  }
`;
export const onCreateForm = /* GraphQL */ `
  subscription OnCreateForm {
    onCreateForm {
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
            consent
            sentEmail
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
      consent
      sentEmail
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
            consent
            sentEmail
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
      consent
      sentEmail
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
            consent
            sentEmail
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
      consent
      sentEmail
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
              consent
              sentEmail
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
              consent
              sentEmail
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
        consent
        sentEmail
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
              consent
              sentEmail
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
              consent
              sentEmail
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
        consent
        sentEmail
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
              consent
              sentEmail
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
              consent
              sentEmail
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
        consent
        sentEmail
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
            consent
            sentEmail
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
            consent
            sentEmail
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
            consent
            sentEmail
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
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
export const onCreateSection = /* GraphQL */ `
  subscription OnCreateSection {
    onCreateSection {
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
export const onUpdateSection = /* GraphQL */ `
  subscription OnUpdateSection {
    onUpdateSection {
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
export const onDeleteSection = /* GraphQL */ `
  subscription OnDeleteSection {
    onDeleteSection {
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
export const onCreateSubSection = /* GraphQL */ `
  subscription OnCreateSubSection {
    onCreateSubSection {
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
export const onUpdateSubSection = /* GraphQL */ `
  subscription OnUpdateSubSection {
    onUpdateSubSection {
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
export const onDeleteSubSection = /* GraphQL */ `
  subscription OnDeleteSubSection {
    onDeleteSubSection {
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
