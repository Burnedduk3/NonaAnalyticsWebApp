/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  lastname: string,
  mail: string,
  phone: string,
  age: number,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  mail?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  lastname?: string | null,
  mail?: string | null,
  phone?: string | null,
  age?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateFormInput = {
  id?: string | null,
  finished?: boolean | null,
  formUserId?: string | null,
};

export type ModelFormConditionInput = {
  finished?: ModelBooleanInput | null,
  and?: Array< ModelFormConditionInput | null > | null,
  or?: Array< ModelFormConditionInput | null > | null,
  not?: ModelFormConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFormInput = {
  id: string,
  finished?: boolean | null,
  formUserId?: string | null,
};

export type DeleteFormInput = {
  id?: string | null,
};

export type CreateFormQuestionInput = {
  id?: string | null,
  response: string,
  formQuestionQuestionId?: string | null,
  formQuestionFormId?: string | null,
};

export type ModelFormQuestionConditionInput = {
  response?: ModelStringInput | null,
  and?: Array< ModelFormQuestionConditionInput | null > | null,
  or?: Array< ModelFormQuestionConditionInput | null > | null,
  not?: ModelFormQuestionConditionInput | null,
};

export type UpdateFormQuestionInput = {
  id: string,
  response?: string | null,
  formQuestionQuestionId?: string | null,
  formQuestionFormId?: string | null,
};

export type DeleteFormQuestionInput = {
  id?: string | null,
};

export type CreateQuestionInput = {
  id?: string | null,
  question: string,
  items?: Array< string | null > | null,
  questionCategoryId?: string | null,
  questionSectionId?: string | null,
};

export type ModelQuestionConditionInput = {
  question?: ModelStringInput | null,
  items?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionInput = {
  id: string,
  question?: string | null,
  items?: Array< string | null > | null,
  questionCategoryId?: string | null,
  questionSectionId?: string | null,
};

export type DeleteQuestionInput = {
  id?: string | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
};

export type CreateSectionInput = {
  id?: string | null,
  name: string,
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
};

export type UpdateSectionInput = {
  id: string,
  name?: string | null,
};

export type DeleteSectionInput = {
  id?: string | null,
};

export type CreateSentimentAnalysisInput = {
  id?: string | null,
  time: string,
  motiv: string,
};

export type ModelSentimentAnalysisConditionInput = {
  time?: ModelStringInput | null,
  motiv?: ModelStringInput | null,
  and?: Array< ModelSentimentAnalysisConditionInput | null > | null,
  or?: Array< ModelSentimentAnalysisConditionInput | null > | null,
  not?: ModelSentimentAnalysisConditionInput | null,
};

export type UpdateSentimentAnalysisInput = {
  id: string,
  time?: string | null,
  motiv?: string | null,
};

export type DeleteSentimentAnalysisInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  mail?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  age?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFormFilterInput = {
  id?: ModelIDInput | null,
  finished?: ModelBooleanInput | null,
  and?: Array< ModelFormFilterInput | null > | null,
  or?: Array< ModelFormFilterInput | null > | null,
  not?: ModelFormFilterInput | null,
};

export type ModelFormQuestionFilterInput = {
  id?: ModelIDInput | null,
  response?: ModelStringInput | null,
  and?: Array< ModelFormQuestionFilterInput | null > | null,
  or?: Array< ModelFormQuestionFilterInput | null > | null,
  not?: ModelFormQuestionFilterInput | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  question?: ModelStringInput | null,
  items?: ModelStringInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelSectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
};

export type ModelSentimentAnalysisFilterInput = {
  id?: ModelIDInput | null,
  time?: ModelStringInput | null,
  motiv?: ModelStringInput | null,
  and?: Array< ModelSentimentAnalysisFilterInput | null > | null,
  or?: Array< ModelSentimentAnalysisFilterInput | null > | null,
  not?: ModelSentimentAnalysisFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    lastname: string,
    mail: string,
    phone: string,
    age: number,
    forms:  {
      __typename: "ModelFormConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    lastname: string,
    mail: string,
    phone: string,
    age: number,
    forms:  {
      __typename: "ModelFormConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    lastname: string,
    mail: string,
    phone: string,
    age: number,
    forms:  {
      __typename: "ModelFormConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFormMutationVariables = {
  input: CreateFormInput,
  condition?: ModelFormConditionInput | null,
};

export type CreateFormMutation = {
  createForm:  {
    __typename: "Form",
    id: string,
    formQuestions:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      lastname: string,
      mail: string,
      phone: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    finished: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFormMutationVariables = {
  input: UpdateFormInput,
  condition?: ModelFormConditionInput | null,
};

export type UpdateFormMutation = {
  updateForm:  {
    __typename: "Form",
    id: string,
    formQuestions:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      lastname: string,
      mail: string,
      phone: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    finished: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFormMutationVariables = {
  input: DeleteFormInput,
  condition?: ModelFormConditionInput | null,
};

export type DeleteFormMutation = {
  deleteForm:  {
    __typename: "Form",
    id: string,
    formQuestions:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      lastname: string,
      mail: string,
      phone: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    finished: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateFormQuestionMutationVariables = {
  input: CreateFormQuestionInput,
  condition?: ModelFormQuestionConditionInput | null,
};

export type CreateFormQuestionMutation = {
  createFormQuestion:  {
    __typename: "FormQuestion",
    id: string,
    response: string,
    question:  {
      __typename: "Question",
      id: string,
      question: string,
      items: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      finished: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFormQuestionMutationVariables = {
  input: UpdateFormQuestionInput,
  condition?: ModelFormQuestionConditionInput | null,
};

export type UpdateFormQuestionMutation = {
  updateFormQuestion:  {
    __typename: "FormQuestion",
    id: string,
    response: string,
    question:  {
      __typename: "Question",
      id: string,
      question: string,
      items: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      finished: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFormQuestionMutationVariables = {
  input: DeleteFormQuestionInput,
  condition?: ModelFormQuestionConditionInput | null,
};

export type DeleteFormQuestionMutation = {
  deleteFormQuestion:  {
    __typename: "FormQuestion",
    id: string,
    response: string,
    question:  {
      __typename: "Question",
      id: string,
      question: string,
      items: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      finished: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSectionMutationVariables = {
  input: CreateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type CreateSectionMutation = {
  createSection:  {
    __typename: "Section",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSectionMutationVariables = {
  input: UpdateSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type UpdateSectionMutation = {
  updateSection:  {
    __typename: "Section",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSectionMutationVariables = {
  input: DeleteSectionInput,
  condition?: ModelSectionConditionInput | null,
};

export type DeleteSectionMutation = {
  deleteSection:  {
    __typename: "Section",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSentimentAnalysisMutationVariables = {
  input: CreateSentimentAnalysisInput,
  condition?: ModelSentimentAnalysisConditionInput | null,
};

export type CreateSentimentAnalysisMutation = {
  createSentimentAnalysis:  {
    __typename: "SentimentAnalysis",
    id: string,
    time: string,
    motiv: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSentimentAnalysisMutationVariables = {
  input: UpdateSentimentAnalysisInput,
  condition?: ModelSentimentAnalysisConditionInput | null,
};

export type UpdateSentimentAnalysisMutation = {
  updateSentimentAnalysis:  {
    __typename: "SentimentAnalysis",
    id: string,
    time: string,
    motiv: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSentimentAnalysisMutationVariables = {
  input: DeleteSentimentAnalysisInput,
  condition?: ModelSentimentAnalysisConditionInput | null,
};

export type DeleteSentimentAnalysisMutation = {
  deleteSentimentAnalysis:  {
    __typename: "SentimentAnalysis",
    id: string,
    time: string,
    motiv: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    lastname: string,
    mail: string,
    phone: string,
    age: number,
    forms:  {
      __typename: "ModelFormConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      lastname: string,
      mail: string,
      phone: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFormQueryVariables = {
  id: string,
};

export type GetFormQuery = {
  getForm:  {
    __typename: "Form",
    id: string,
    formQuestions:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      lastname: string,
      mail: string,
      phone: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    finished: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFormsQueryVariables = {
  filter?: ModelFormFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormsQuery = {
  listForms:  {
    __typename: "ModelFormConnection",
    items:  Array< {
      __typename: "Form",
      id: string,
      finished: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetFormQuestionQueryVariables = {
  id: string,
};

export type GetFormQuestionQuery = {
  getFormQuestion:  {
    __typename: "FormQuestion",
    id: string,
    response: string,
    question:  {
      __typename: "Question",
      id: string,
      question: string,
      items: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      finished: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFormQuestionsQueryVariables = {
  filter?: ModelFormQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFormQuestionsQuery = {
  listFormQuestions:  {
    __typename: "ModelFormQuestionConnection",
    items:  Array< {
      __typename: "FormQuestion",
      id: string,
      response: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      question: string,
      items: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSectionQueryVariables = {
  id: string,
};

export type GetSectionQuery = {
  getSection:  {
    __typename: "Section",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSectionsQuery = {
  listSections:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetSentimentAnalysisQueryVariables = {
  id: string,
};

export type GetSentimentAnalysisQuery = {
  getSentimentAnalysis:  {
    __typename: "SentimentAnalysis",
    id: string,
    time: string,
    motiv: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSentimentAnalysissQueryVariables = {
  filter?: ModelSentimentAnalysisFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSentimentAnalysissQuery = {
  listSentimentAnalysiss:  {
    __typename: "ModelSentimentAnalysisConnection",
    items:  Array< {
      __typename: "SentimentAnalysis",
      id: string,
      time: string,
      motiv: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    lastname: string,
    mail: string,
    phone: string,
    age: number,
    forms:  {
      __typename: "ModelFormConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    lastname: string,
    mail: string,
    phone: string,
    age: number,
    forms:  {
      __typename: "ModelFormConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    lastname: string,
    mail: string,
    phone: string,
    age: number,
    forms:  {
      __typename: "ModelFormConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFormSubscription = {
  onCreateForm:  {
    __typename: "Form",
    id: string,
    formQuestions:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      lastname: string,
      mail: string,
      phone: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    finished: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormSubscription = {
  onUpdateForm:  {
    __typename: "Form",
    id: string,
    formQuestions:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      lastname: string,
      mail: string,
      phone: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    finished: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormSubscription = {
  onDeleteForm:  {
    __typename: "Form",
    id: string,
    formQuestions:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      lastname: string,
      mail: string,
      phone: string,
      age: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    finished: boolean | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateFormQuestionSubscription = {
  onCreateFormQuestion:  {
    __typename: "FormQuestion",
    id: string,
    response: string,
    question:  {
      __typename: "Question",
      id: string,
      question: string,
      items: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      finished: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFormQuestionSubscription = {
  onUpdateFormQuestion:  {
    __typename: "FormQuestion",
    id: string,
    response: string,
    question:  {
      __typename: "Question",
      id: string,
      question: string,
      items: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      finished: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFormQuestionSubscription = {
  onDeleteFormQuestion:  {
    __typename: "FormQuestion",
    id: string,
    response: string,
    question:  {
      __typename: "Question",
      id: string,
      question: string,
      items: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      finished: boolean | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection:  {
    __typename: "Section",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection:  {
    __typename: "Section",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection:  {
    __typename: "Section",
    id: string,
    name: string,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSentimentAnalysisSubscription = {
  onCreateSentimentAnalysis:  {
    __typename: "SentimentAnalysis",
    id: string,
    time: string,
    motiv: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSentimentAnalysisSubscription = {
  onUpdateSentimentAnalysis:  {
    __typename: "SentimentAnalysis",
    id: string,
    time: string,
    motiv: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSentimentAnalysisSubscription = {
  onDeleteSentimentAnalysis:  {
    __typename: "SentimentAnalysis",
    id: string,
    time: string,
    motiv: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
