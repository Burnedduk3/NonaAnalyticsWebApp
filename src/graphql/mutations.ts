/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const deleteDemographicInfo = /* GraphQL */ `
  mutation DeleteDemographicInfo($id: Int!) {
    deleteDemographicInfo(id: $id) {
      id
      bornInUSA
      yearsInFl
      latinx
      race
      education
      maritalstatus
      livingWithPartner
      biologicalChildren
      stepChildren
      underageChildren
      gender
      pregnant
    }
  }
`;
export const createDemographicInfo = /* GraphQL */ `
  mutation CreateDemographicInfo(
    $createDemographicInfoInput: CreateDemographicInfoInput!
  ) {
    createDemographicInfo(
      createDemographicInfoInput: $createDemographicInfoInput
    ) {
      id
      bornInUSA
      yearsInFl
      latinx
      race
      education
      maritalstatus
      livingWithPartner
      biologicalChildren
      stepChildren
      underageChildren
      gender
      pregnant
    }
  }
`;
export const updateDemographicInfo = /* GraphQL */ `
  mutation UpdateDemographicInfo(
    $updateDemographicInfoInput: UpdateDemographicInfoInput!
  ) {
    updateDemographicInfo(
      updateDemographicInfoInput: $updateDemographicInfoInput
    ) {
      id
      bornInUSA
      yearsInFl
      latinx
      race
      education
      maritalstatus
      livingWithPartner
      biologicalChildren
      stepChildren
      underageChildren
      gender
      pregnant
    }
  }
`;
export const deleteUserinfo = /* GraphQL */ `
  mutation DeleteUserinfo($id: Int!) {
    deleteUSERINFO(id: $id) {
      id
      name
      phone
      email
    }
  }
`;
export const createUserinfo = /* GraphQL */ `
  mutation CreateUserinfo($createUSERINFOInput: CreateUSERINFOInput!) {
    createUSERINFO(createUSERINFOInput: $createUSERINFOInput) {
      id
      name
      phone
      email
    }
  }
`;
export const updateUserinfo = /* GraphQL */ `
  mutation UpdateUserinfo($updateUSERINFOInput: UpdateUSERINFOInput!) {
    updateUSERINFO(updateUSERINFOInput: $updateUSERINFOInput) {
      id
      name
      phone
      email
    }
  }
`;
export const deleteEmployment = /* GraphQL */ `
  mutation DeleteEmployment($userid: String!) {
    deleteEmployment(userid: $userid) {
      k1_work
      k1_willing_adress
      k1_employer_st
      k1_employer_city
      k1_employer_zip
      k1_employment
      userid
    }
  }
`;
export const createEmployment = /* GraphQL */ `
  mutation CreateEmployment($createEmploymentInput: CreateEmploymentInput!) {
    createEmployment(createEmploymentInput: $createEmploymentInput) {
      k1_work
      k1_willing_adress
      k1_employer_st
      k1_employer_city
      k1_employer_zip
      k1_employment
      userid
    }
  }
`;
export const updateEmployment = /* GraphQL */ `
  mutation UpdateEmployment($updateEmploymentInput: UpdateEmploymentInput!) {
    updateEmployment(updateEmploymentInput: $updateEmploymentInput) {
      k1_work
      k1_willing_adress
      k1_employer_st
      k1_employer_city
      k1_employer_zip
      k1_employment
      userid
    }
  }
`;
export const deleteHealthBehaviors = /* GraphQL */ `
  mutation DeleteHealthBehaviors($userid: String!) {
    deleteHealthBehaviors(userid: $userid) {
      c1_regular_doctor
      c1_visits_2yr
      c3_num_medications
      c3_vitamins
      c4_med_time
      c4_med_day
      c4_med_forget
      c4_med_stop
      userid
    }
  }
`;
export const createHealthBehaviors = /* GraphQL */ `
  mutation CreateHealthBehaviors(
    $createHealthBehaviorsInput: CreateHealthBehaviorsInput!
  ) {
    createHealthBehaviors(
      createHealthBehaviorsInput: $createHealthBehaviorsInput
    ) {
      c1_regular_doctor
      c1_visits_2yr
      c3_num_medications
      c3_vitamins
      c4_med_time
      c4_med_day
      c4_med_forget
      c4_med_stop
      userid
    }
  }
`;
export const updateHealthBehaviors = /* GraphQL */ `
  mutation UpdateHealthBehaviors(
    $updateHealthBehaviorsInput: UpdateHealthBehaviorsInput!
  ) {
    updateHealthBehaviors(
      updateHealthBehaviorsInput: $updateHealthBehaviorsInput
    ) {
      c1_regular_doctor
      c1_visits_2yr
      c3_num_medications
      c3_vitamins
      c4_med_time
      c4_med_day
      c4_med_forget
      c4_med_stop
      userid
    }
  }
`;
export const deleteOralHealth = /* GraphQL */ `
  mutation DeleteOralHealth($userid: String!) {
    deleteOralHealth(userid: $userid) {
      d1_brush_teeth
      d1_use_floss
      d1_use_mouthwash
      d2_teethbrush_per_day
      d2_use_cleaning_agent
      d3_floss_per_day
      d4_mouthwash_per_day
      userid
    }
  }
`;
export const createOralHealth = /* GraphQL */ `
  mutation CreateOralHealth($createOralHealthInput: CreateOralHealthInput!) {
    createOralHealth(createOralHealthInput: $createOralHealthInput) {
      d1_brush_teeth
      d1_use_floss
      d1_use_mouthwash
      d2_teethbrush_per_day
      d2_use_cleaning_agent
      d3_floss_per_day
      d4_mouthwash_per_day
      userid
    }
  }
`;
export const updateOralHealth = /* GraphQL */ `
  mutation UpdateOralHealth($updateOralHealthInput: UpdateOralHealthInput!) {
    updateOralHealth(updateOralHealthInput: $updateOralHealthInput) {
      d1_brush_teeth
      d1_use_floss
      d1_use_mouthwash
      d2_teethbrush_per_day
      d2_use_cleaning_agent
      d3_floss_per_day
      d4_mouthwash_per_day
      userid
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
        startedAt
      }
      UserID
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
        startedAt
      }
      UserID
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
        startedAt
      }
      UserID
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
        stack
        items
 
 
        
        createdAt
        updatedAt
      }
      form {
        id
        UserID
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
        stack
        items
 
 
        
        createdAt
        updatedAt
      }
      form {
        id
        UserID
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
        stack
        items
 
 
        
        createdAt
        updatedAt
      }
      form {
        id
        UserID
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
      stack
      usedForms {
        nextToken
        startedAt
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
        createdAt
        updatedAt
      }
      items
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
        createdAt
        updatedAt
      }
      subSection {
        id
        name
 
 
        
        createdAt
        updatedAt
      }
      items
      
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
 
 
        
        createdAt
        updatedAt
      }
      subSection {
        id
        name
 
 
        
        createdAt
        updatedAt
      }
      items
      
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
 
 
        
        createdAt
        updatedAt
      }
      questions {
        nextToken
        startedAt
      }
      
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
 
 
        
        createdAt
        updatedAt
      }
      questions {
        nextToken
        startedAt
      }
      
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
 
 
        
        createdAt
        updatedAt
      }
      questions {
        nextToken
        startedAt
      }
      
      createdAt
      updatedAt
    }
  }
`;
