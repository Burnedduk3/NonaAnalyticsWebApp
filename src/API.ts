/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDemographicInfoInput = {
  id: number,
  bornInUSA: number,
  yearsInFl: number,
  latinx?: number | null,
  race?: string | null,
  education?: string | null,
  maritalstatus?: string | null,
  livingWithPartner?: number | null,
  biologicalChildren?: number | null,
  stepChildren?: number | null,
  underageChildren?: number | null,
  gender?: string | null,
  pregnant?: number | null,
};

export type UpdateDemographicInfoInput = {
  id: number,
  bornInUSA?: number | null,
  yearsInFl?: number | null,
  latinx?: number | null,
  race?: string | null,
  education?: string | null,
  maritalstatus?: string | null,
  livingWithPartner?: number | null,
  biologicalChildren?: number | null,
  stepChildren?: number | null,
  underageChildren?: number | null,
  gender?: string | null,
  pregnant?: number | null,
};

export type CreateUSERINFOInput = {
  id: number,
  name: string,
  phone: string,
  email: string,
};

export type UpdateUSERINFOInput = {
  id: number,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
};

export type CreateEmploymentInput = {
  k1_work?: number | null,
  k1_willing_adress?: number | null,
  k1_employer_st?: string | null,
  k1_employer_city?: string | null,
  k1_employer_zip?: string | null,
  k1_employment?: number | null,
  userid: string,
};

export type UpdateEmploymentInput = {
  k1_work?: number | null,
  k1_willing_adress?: number | null,
  k1_employer_st?: string | null,
  k1_employer_city?: string | null,
  k1_employer_zip?: string | null,
  k1_employment?: number | null,
  userid: string,
};

export type CreateHealthBehaviorsInput = {
  c1_regular_doctor?: number | null,
  c1_visits_2yr?: number | null,
  c3_num_medications?: number | null,
  c3_vitamins?: number | null,
  c4_med_time?: number | null,
  c4_med_day?: number | null,
  c4_med_forget?: number | null,
  c4_med_stop?: number | null,
  userid: string,
};

export type UpdateHealthBehaviorsInput = {
  c1_regular_doctor?: number | null,
  c1_visits_2yr?: number | null,
  c3_num_medications?: number | null,
  c3_vitamins?: number | null,
  c4_med_time?: number | null,
  c4_med_day?: number | null,
  c4_med_forget?: number | null,
  c4_med_stop?: number | null,
  userid: string,
};

export type CreateOralHealthInput = {
  d1_brush_teeth?: number | null,
  d1_use_floss?: number | null,
  d1_use_mouthwash?: number | null,
  d2_teethbrush_per_day?: number | null,
  d2_use_cleaning_agent?: number | null,
  d3_floss_per_day?: number | null,
  d4_mouthwash_per_day?: number | null,
  userid: string,
};

export type UpdateOralHealthInput = {
  d1_brush_teeth?: number | null,
  d1_use_floss?: number | null,
  d1_use_mouthwash?: number | null,
  d2_teethbrush_per_day?: number | null,
  d2_use_cleaning_agent?: number | null,
  d3_floss_per_day?: number | null,
  d4_mouthwash_per_day?: number | null,
  userid: string,
};

export type CreateFormInput = {
  id?: string | null,
  UserID: string,
  finished?: boolean | null,
  _version?: number | null,
};

export type ModelFormConditionInput = {
  UserID?: ModelStringInput | null,
  finished?: ModelBooleanInput | null,
  and?: Array< ModelFormConditionInput | null > | null,
  or?: Array< ModelFormConditionInput | null > | null,
  not?: ModelFormConditionInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateFormInput = {
  id: string,
  UserID?: string | null,
  finished?: boolean | null,
  _version?: number | null,
};

export type DeleteFormInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateFormQuestionInput = {
  id?: string | null,
  response: string,
  _version?: number | null,
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
  _version?: number | null,
  formQuestionQuestionId?: string | null,
  formQuestionFormId?: string | null,
};

export type DeleteFormQuestionInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateQuestionInput = {
  id?: string | null,
  question: string,
  stack: number,
  items?: Array< string | null > | null,
  _version?: number | null,
  questionCategoryId?: string | null,
  questionSubSectionId?: string | null,
};

export type ModelQuestionConditionInput = {
  question?: ModelStringInput | null,
  stack?: ModelIntInput | null,
  items?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
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

export type UpdateQuestionInput = {
  id: string,
  question?: string | null,
  stack?: number | null,
  items?: Array< string | null > | null,
  _version?: number | null,
  questionCategoryId?: string | null,
  questionSubSectionId?: string | null,
};

export type DeleteQuestionInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
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
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateSectionInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
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
  _version?: number | null,
};

export type DeleteSectionInput = {
  id?: string | null,
  _version?: number | null,
};

export type CreateSubSectionInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
  subSectionSectionId?: string | null,
};

export type ModelSubSectionConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSubSectionConditionInput | null > | null,
  or?: Array< ModelSubSectionConditionInput | null > | null,
  not?: ModelSubSectionConditionInput | null,
};

export type UpdateSubSectionInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
  subSectionSectionId?: string | null,
};

export type DeleteSubSectionInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelFormFilterInput = {
  id?: ModelIDInput | null,
  UserID?: ModelStringInput | null,
  finished?: ModelBooleanInput | null,
  and?: Array< ModelFormFilterInput | null > | null,
  or?: Array< ModelFormFilterInput | null > | null,
  not?: ModelFormFilterInput | null,
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
  stack?: ModelIntInput | null,
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

export type ModelSubSectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSubSectionFilterInput | null > | null,
  or?: Array< ModelSubSectionFilterInput | null > | null,
  not?: ModelSubSectionFilterInput | null,
};

export type DeleteDemographicInfoMutationVariables = {
  id: number,
};

export type DeleteDemographicInfoMutation = {
  deleteDemographicInfo:  {
    __typename: "DemographicInfo",
    id: number,
    bornInUSA: number,
    yearsInFl: number,
    latinx: number | null,
    race: string | null,
    education: string | null,
    maritalstatus: string | null,
    livingWithPartner: number | null,
    biologicalChildren: number | null,
    stepChildren: number | null,
    underageChildren: number | null,
    gender: string | null,
    pregnant: number | null,
  } | null,
};

export type CreateDemographicInfoMutationVariables = {
  createDemographicInfoInput: CreateDemographicInfoInput,
};

export type CreateDemographicInfoMutation = {
  createDemographicInfo:  {
    __typename: "DemographicInfo",
    id: number,
    bornInUSA: number,
    yearsInFl: number,
    latinx: number | null,
    race: string | null,
    education: string | null,
    maritalstatus: string | null,
    livingWithPartner: number | null,
    biologicalChildren: number | null,
    stepChildren: number | null,
    underageChildren: number | null,
    gender: string | null,
    pregnant: number | null,
  } | null,
};

export type UpdateDemographicInfoMutationVariables = {
  updateDemographicInfoInput: UpdateDemographicInfoInput,
};

export type UpdateDemographicInfoMutation = {
  updateDemographicInfo:  {
    __typename: "DemographicInfo",
    id: number,
    bornInUSA: number,
    yearsInFl: number,
    latinx: number | null,
    race: string | null,
    education: string | null,
    maritalstatus: string | null,
    livingWithPartner: number | null,
    biologicalChildren: number | null,
    stepChildren: number | null,
    underageChildren: number | null,
    gender: string | null,
    pregnant: number | null,
  } | null,
};

export type DeleteUserinfoMutationVariables = {
  id: number,
};

export type DeleteUserinfoMutation = {
  deleteUSERINFO:  {
    __typename: "USERINFO",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type CreateUserinfoMutationVariables = {
  createUSERINFOInput: CreateUSERINFOInput,
};

export type CreateUserinfoMutation = {
  createUSERINFO:  {
    __typename: "USERINFO",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type UpdateUserinfoMutationVariables = {
  updateUSERINFOInput: UpdateUSERINFOInput,
};

export type UpdateUserinfoMutation = {
  updateUSERINFO:  {
    __typename: "USERINFO",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type DeleteEmploymentMutationVariables = {
  userid: string,
};

export type DeleteEmploymentMutation = {
  deleteEmployment:  {
    __typename: "Employment",
    k1_work: number | null,
    k1_willing_adress: number | null,
    k1_employer_st: string | null,
    k1_employer_city: string | null,
    k1_employer_zip: string | null,
    k1_employment: number | null,
    userid: string,
  } | null,
};

export type CreateEmploymentMutationVariables = {
  createEmploymentInput: CreateEmploymentInput,
};

export type CreateEmploymentMutation = {
  createEmployment:  {
    __typename: "Employment",
    k1_work: number | null,
    k1_willing_adress: number | null,
    k1_employer_st: string | null,
    k1_employer_city: string | null,
    k1_employer_zip: string | null,
    k1_employment: number | null,
    userid: string,
  } | null,
};

export type UpdateEmploymentMutationVariables = {
  updateEmploymentInput: UpdateEmploymentInput,
};

export type UpdateEmploymentMutation = {
  updateEmployment:  {
    __typename: "Employment",
    k1_work: number | null,
    k1_willing_adress: number | null,
    k1_employer_st: string | null,
    k1_employer_city: string | null,
    k1_employer_zip: string | null,
    k1_employment: number | null,
    userid: string,
  } | null,
};

export type DeleteHealthBehaviorsMutationVariables = {
  userid: string,
};

export type DeleteHealthBehaviorsMutation = {
  deleteHealthBehaviors:  {
    __typename: "HealthBehaviors",
    c1_regular_doctor: number | null,
    c1_visits_2yr: number | null,
    c3_num_medications: number | null,
    c3_vitamins: number | null,
    c4_med_time: number | null,
    c4_med_day: number | null,
    c4_med_forget: number | null,
    c4_med_stop: number | null,
    userid: string,
  } | null,
};

export type CreateHealthBehaviorsMutationVariables = {
  createHealthBehaviorsInput: CreateHealthBehaviorsInput,
};

export type CreateHealthBehaviorsMutation = {
  createHealthBehaviors:  {
    __typename: "HealthBehaviors",
    c1_regular_doctor: number | null,
    c1_visits_2yr: number | null,
    c3_num_medications: number | null,
    c3_vitamins: number | null,
    c4_med_time: number | null,
    c4_med_day: number | null,
    c4_med_forget: number | null,
    c4_med_stop: number | null,
    userid: string,
  } | null,
};

export type UpdateHealthBehaviorsMutationVariables = {
  updateHealthBehaviorsInput: UpdateHealthBehaviorsInput,
};

export type UpdateHealthBehaviorsMutation = {
  updateHealthBehaviors:  {
    __typename: "HealthBehaviors",
    c1_regular_doctor: number | null,
    c1_visits_2yr: number | null,
    c3_num_medications: number | null,
    c3_vitamins: number | null,
    c4_med_time: number | null,
    c4_med_day: number | null,
    c4_med_forget: number | null,
    c4_med_stop: number | null,
    userid: string,
  } | null,
};

export type DeleteOralHealthMutationVariables = {
  userid: string,
};

export type DeleteOralHealthMutation = {
  deleteOralHealth:  {
    __typename: "OralHealth",
    d1_brush_teeth: number | null,
    d1_use_floss: number | null,
    d1_use_mouthwash: number | null,
    d2_teethbrush_per_day: number | null,
    d2_use_cleaning_agent: number | null,
    d3_floss_per_day: number | null,
    d4_mouthwash_per_day: number | null,
    userid: string,
  } | null,
};

export type CreateOralHealthMutationVariables = {
  createOralHealthInput: CreateOralHealthInput,
};

export type CreateOralHealthMutation = {
  createOralHealth:  {
    __typename: "OralHealth",
    d1_brush_teeth: number | null,
    d1_use_floss: number | null,
    d1_use_mouthwash: number | null,
    d2_teethbrush_per_day: number | null,
    d2_use_cleaning_agent: number | null,
    d3_floss_per_day: number | null,
    d4_mouthwash_per_day: number | null,
    userid: string,
  } | null,
};

export type UpdateOralHealthMutationVariables = {
  updateOralHealthInput: UpdateOralHealthInput,
};

export type UpdateOralHealthMutation = {
  updateOralHealth:  {
    __typename: "OralHealth",
    d1_brush_teeth: number | null,
    d1_use_floss: number | null,
    d1_use_mouthwash: number | null,
    d2_teethbrush_per_day: number | null,
    d2_use_cleaning_agent: number | null,
    d3_floss_per_day: number | null,
    d4_mouthwash_per_day: number | null,
    userid: string,
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
      startedAt: number | null,
    } | null,
    UserID: string,
    finished: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    UserID: string,
    finished: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    UserID: string,
    finished: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      stack: number,
      items: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      UserID: string,
      finished: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      stack: number,
      items: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      UserID: string,
      finished: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      stack: number,
      items: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      UserID: string,
      finished: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    stack: number,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    stack: number,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    stack: number,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    subSections:  {
      __typename: "ModelSubSectionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    subSections:  {
      __typename: "ModelSubSectionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
    subSections:  {
      __typename: "ModelSubSectionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSubSectionMutationVariables = {
  input: CreateSubSectionInput,
  condition?: ModelSubSectionConditionInput | null,
};

export type CreateSubSectionMutation = {
  createSubSection:  {
    __typename: "SubSection",
    id: string,
    name: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSubSectionMutationVariables = {
  input: UpdateSubSectionInput,
  condition?: ModelSubSectionConditionInput | null,
};

export type UpdateSubSectionMutation = {
  updateSubSection:  {
    __typename: "SubSection",
    id: string,
    name: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSubSectionMutationVariables = {
  input: DeleteSubSectionInput,
  condition?: ModelSubSectionConditionInput | null,
};

export type DeleteSubSectionMutation = {
  deleteSubSection:  {
    __typename: "SubSection",
    id: string,
    name: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetDemographicInfoQueryVariables = {
  id: number,
};

export type GetDemographicInfoQuery = {
  getDemographicInfo:  {
    __typename: "DemographicInfo",
    id: number,
    bornInUSA: number,
    yearsInFl: number,
    latinx: number | null,
    race: string | null,
    education: string | null,
    maritalstatus: string | null,
    livingWithPartner: number | null,
    biologicalChildren: number | null,
    stepChildren: number | null,
    underageChildren: number | null,
    gender: string | null,
    pregnant: number | null,
  } | null,
};

export type ListDemographicInfosQuery = {
  listDemographicInfos:  Array< {
    __typename: "DemographicInfo",
    id: number,
    bornInUSA: number,
    yearsInFl: number,
    latinx: number | null,
    race: string | null,
    education: string | null,
    maritalstatus: string | null,
    livingWithPartner: number | null,
    biologicalChildren: number | null,
    stepChildren: number | null,
    underageChildren: number | null,
    gender: string | null,
    pregnant: number | null,
  } | null > | null,
};

export type GetUserinfoQueryVariables = {
  id: number,
};

export type GetUserinfoQuery = {
  getUSERINFO:  {
    __typename: "USERINFO",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type ListUserinfOsQuery = {
  listUSERINFOs:  Array< {
    __typename: "USERINFO",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null > | null,
};

export type GetEmploymentQueryVariables = {
  userid: string,
};

export type GetEmploymentQuery = {
  getEmployment:  {
    __typename: "Employment",
    k1_work: number | null,
    k1_willing_adress: number | null,
    k1_employer_st: string | null,
    k1_employer_city: string | null,
    k1_employer_zip: string | null,
    k1_employment: number | null,
    userid: string,
  } | null,
};

export type ListEmploymentsQuery = {
  listEmployments:  Array< {
    __typename: "Employment",
    k1_work: number | null,
    k1_willing_adress: number | null,
    k1_employer_st: string | null,
    k1_employer_city: string | null,
    k1_employer_zip: string | null,
    k1_employment: number | null,
    userid: string,
  } | null > | null,
};

export type GetHealthBehaviorsQueryVariables = {
  userid: string,
};

export type GetHealthBehaviorsQuery = {
  getHealthBehaviors:  {
    __typename: "HealthBehaviors",
    c1_regular_doctor: number | null,
    c1_visits_2yr: number | null,
    c3_num_medications: number | null,
    c3_vitamins: number | null,
    c4_med_time: number | null,
    c4_med_day: number | null,
    c4_med_forget: number | null,
    c4_med_stop: number | null,
    userid: string,
  } | null,
};

export type ListHealthBehaviorssQuery = {
  listHealthBehaviorss:  Array< {
    __typename: "HealthBehaviors",
    c1_regular_doctor: number | null,
    c1_visits_2yr: number | null,
    c3_num_medications: number | null,
    c3_vitamins: number | null,
    c4_med_time: number | null,
    c4_med_day: number | null,
    c4_med_forget: number | null,
    c4_med_stop: number | null,
    userid: string,
  } | null > | null,
};

export type GetOralHealthQueryVariables = {
  userid: string,
};

export type GetOralHealthQuery = {
  getOralHealth:  {
    __typename: "OralHealth",
    d1_brush_teeth: number | null,
    d1_use_floss: number | null,
    d1_use_mouthwash: number | null,
    d2_teethbrush_per_day: number | null,
    d2_use_cleaning_agent: number | null,
    d3_floss_per_day: number | null,
    d4_mouthwash_per_day: number | null,
    userid: string,
  } | null,
};

export type ListOralHealthsQuery = {
  listOralHealths:  Array< {
    __typename: "OralHealth",
    d1_brush_teeth: number | null,
    d1_use_floss: number | null,
    d1_use_mouthwash: number | null,
    d2_teethbrush_per_day: number | null,
    d2_use_cleaning_agent: number | null,
    d3_floss_per_day: number | null,
    d4_mouthwash_per_day: number | null,
    userid: string,
  } | null > | null,
};

export type SyncFormsQueryVariables = {
  filter?: ModelFormFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFormsQuery = {
  syncForms:  {
    __typename: "ModelFormConnection",
    items:  Array< {
      __typename: "Form",
      id: string,
      UserID: string,
      finished: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
      startedAt: number | null,
    } | null,
    UserID: string,
    finished: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      UserID: string,
      finished: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncFormQuestionsQueryVariables = {
  filter?: ModelFormQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncFormQuestionsQuery = {
  syncFormQuestions:  {
    __typename: "ModelFormQuestionConnection",
    items:  Array< {
      __typename: "FormQuestion",
      id: string,
      response: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
      stack: number,
      items: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      UserID: string,
      finished: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncQuestionsQuery = {
  syncQuestions:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      question: string,
      stack: number,
      items: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
    stack: number,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      stack: number,
      items: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncSectionsQueryVariables = {
  filter?: ModelSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSectionsQuery = {
  syncSections:  {
    __typename: "ModelSectionConnection",
    items:  Array< {
      __typename: "Section",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
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
    subSections:  {
      __typename: "ModelSubSectionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncSubSectionsQueryVariables = {
  filter?: ModelSubSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncSubSectionsQuery = {
  syncSubSections:  {
    __typename: "ModelSubSectionConnection",
    items:  Array< {
      __typename: "SubSection",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type GetSubSectionQueryVariables = {
  id: string,
};

export type GetSubSectionQuery = {
  getSubSection:  {
    __typename: "SubSection",
    id: string,
    name: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSubSectionsQueryVariables = {
  filter?: ModelSubSectionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubSectionsQuery = {
  listSubSections:  {
    __typename: "ModelSubSectionConnection",
    items:  Array< {
      __typename: "SubSection",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateDemographicInfoSubscription = {
  onCreateDemographicInfo:  {
    __typename: "DemographicInfo",
    id: number,
    bornInUSA: number,
    yearsInFl: number,
    latinx: number | null,
    race: string | null,
    education: string | null,
    maritalstatus: string | null,
    livingWithPartner: number | null,
    biologicalChildren: number | null,
    stepChildren: number | null,
    underageChildren: number | null,
    gender: string | null,
    pregnant: number | null,
  } | null,
};

export type OnCreateUserinfoSubscription = {
  onCreateUSERINFO:  {
    __typename: "USERINFO",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type OnCreateEmploymentSubscription = {
  onCreateEmployment:  {
    __typename: "Employment",
    k1_work: number | null,
    k1_willing_adress: number | null,
    k1_employer_st: string | null,
    k1_employer_city: string | null,
    k1_employer_zip: string | null,
    k1_employment: number | null,
    userid: string,
  } | null,
};

export type OnCreateHealthBehaviorsSubscription = {
  onCreateHealthBehaviors:  {
    __typename: "HealthBehaviors",
    c1_regular_doctor: number | null,
    c1_visits_2yr: number | null,
    c3_num_medications: number | null,
    c3_vitamins: number | null,
    c4_med_time: number | null,
    c4_med_day: number | null,
    c4_med_forget: number | null,
    c4_med_stop: number | null,
    userid: string,
  } | null,
};

export type OnCreateOralHealthSubscription = {
  onCreateOralHealth:  {
    __typename: "OralHealth",
    d1_brush_teeth: number | null,
    d1_use_floss: number | null,
    d1_use_mouthwash: number | null,
    d2_teethbrush_per_day: number | null,
    d2_use_cleaning_agent: number | null,
    d3_floss_per_day: number | null,
    d4_mouthwash_per_day: number | null,
    userid: string,
  } | null,
};

export type OnCreateFormSubscription = {
  onCreateForm:  {
    __typename: "Form",
    id: string,
    formQuestions:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    UserID: string,
    finished: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    UserID: string,
    finished: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    UserID: string,
    finished: boolean | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      stack: number,
      items: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      UserID: string,
      finished: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      stack: number,
      items: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      UserID: string,
      finished: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      stack: number,
      items: Array< string | null > | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      UserID: string,
      finished: boolean | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    stack: number,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    stack: number,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion:  {
    __typename: "Question",
    id: string,
    question: string,
    stack: number,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    items: Array< string | null > | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
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
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSectionSubscription = {
  onCreateSection:  {
    __typename: "Section",
    id: string,
    name: string,
    subSections:  {
      __typename: "ModelSubSectionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSectionSubscription = {
  onUpdateSection:  {
    __typename: "Section",
    id: string,
    name: string,
    subSections:  {
      __typename: "ModelSubSectionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSectionSubscription = {
  onDeleteSection:  {
    __typename: "Section",
    id: string,
    name: string,
    subSections:  {
      __typename: "ModelSubSectionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSubSectionSubscription = {
  onCreateSubSection:  {
    __typename: "SubSection",
    id: string,
    name: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSubSectionSubscription = {
  onUpdateSubSection:  {
    __typename: "SubSection",
    id: string,
    name: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSubSectionSubscription = {
  onDeleteSubSection:  {
    __typename: "SubSection",
    id: string,
    name: string,
    section:  {
      __typename: "Section",
      id: string,
      name: string,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      nextToken: string | null,
      startedAt: number | null,
    } | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
