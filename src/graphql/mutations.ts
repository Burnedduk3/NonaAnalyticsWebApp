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
export const deleteHealthBehaviors2 = /* GraphQL */ `
  mutation DeleteHealthBehaviors2($userid: String!) {
    deleteHealthBehaviors2(userid: $userid) {
      e1_tobacco_days
      e1_tobacco_how_many
      e2_non_tobacco_days
      e2_non_tobacco_how_many
      e3_alcohol_days
      e3_alcohol_how_many
      e4_skin_in_sun
      e5_avoid_sun
      e5_wear_protection
      e5_15spf
      e6_vigorous_exercise
      e7_moderate_exercise
      e8_exercise_summary
      e9_heredity
      e9_lifestyle
      e9_stresses
      e9_strategies
      e9_doctor_regular_basis
      e9_follow_recommendations
      e9_environmental
      e9_attitude
      userid
    }
  }
`;
export const createHealthBehaviors2 = /* GraphQL */ `
  mutation CreateHealthBehaviors2(
    $createHealthBehaviors2Input: CreateHealthBehaviors2Input!
  ) {
    createHealthBehaviors2(
      createHealthBehaviors2Input: $createHealthBehaviors2Input
    ) {
      e1_tobacco_days
      e1_tobacco_how_many
      e2_non_tobacco_days
      e2_non_tobacco_how_many
      e3_alcohol_days
      e3_alcohol_how_many
      e4_skin_in_sun
      e5_avoid_sun
      e5_wear_protection
      e5_15spf
      e6_vigorous_exercise
      e7_moderate_exercise
      e8_exercise_summary
      e9_heredity
      e9_lifestyle
      e9_stresses
      e9_strategies
      e9_doctor_regular_basis
      e9_follow_recommendations
      e9_environmental
      e9_attitude
      userid
    }
  }
`;
export const updateHealthBehaviors2 = /* GraphQL */ `
  mutation UpdateHealthBehaviors2(
    $updateHealthBehaviors2Input: UpdateHealthBehaviors2Input!
  ) {
    updateHealthBehaviors2(
      updateHealthBehaviors2Input: $updateHealthBehaviors2Input
    ) {
      e1_tobacco_days
      e1_tobacco_how_many
      e2_non_tobacco_days
      e2_non_tobacco_how_many
      e3_alcohol_days
      e3_alcohol_how_many
      e4_skin_in_sun
      e5_avoid_sun
      e5_wear_protection
      e5_15spf
      e6_vigorous_exercise
      e7_moderate_exercise
      e8_exercise_summary
      e9_heredity
      e9_lifestyle
      e9_stresses
      e9_strategies
      e9_doctor_regular_basis
      e9_follow_recommendations
      e9_environmental
      e9_attitude
      userid
    }
  }
`;
export const deleteHighMood = /* GraphQL */ `
  mutation DeleteHighMood($userid: String!) {
    deleteHighMood(userid: $userid) {
      h2_high_mood_episode
      h3_mood_higher_usual
      h3_irritable_usual
      h3_hyper
      h3_thoughts_race
      userid
    }
  }
`;
export const createHighMood = /* GraphQL */ `
  mutation CreateHighMood($createHighMoodInput: CreateHighMoodInput!) {
    createHighMood(createHighMoodInput: $createHighMoodInput) {
      h2_high_mood_episode
      h3_mood_higher_usual
      h3_irritable_usual
      h3_hyper
      h3_thoughts_race
      userid
    }
  }
`;
export const updateHighMood = /* GraphQL */ `
  mutation UpdateHighMood($updateHighMoodInput: UpdateHighMoodInput!) {
    updateHighMood(updateHighMoodInput: $updateHighMoodInput) {
      h2_high_mood_episode
      h3_mood_higher_usual
      h3_irritable_usual
      h3_hyper
      h3_thoughts_race
      userid
    }
  }
`;
export const deleteLowMood = /* GraphQL */ `
  mutation DeleteLowMood($userid: String!) {
    deleteLowMood(userid: $userid) {
      g1_sad_depressed
      g1_discouraged
      g1_no_interest
      g1_down_on_yourself
      g1_lonely
      g3_long_depression
      g4_depressed
      g4_discouraged
      g4_no_interest
      g4_down
      userid
    }
  }
`;
export const createLowMood = /* GraphQL */ `
  mutation CreateLowMood($createLowMoodInput: CreateLowMoodInput!) {
    createLowMood(createLowMoodInput: $createLowMoodInput) {
      g1_sad_depressed
      g1_discouraged
      g1_no_interest
      g1_down_on_yourself
      g1_lonely
      g3_long_depression
      g4_depressed
      g4_discouraged
      g4_no_interest
      g4_down
      userid
    }
  }
`;
export const updateLowMood = /* GraphQL */ `
  mutation UpdateLowMood($updateLowMoodInput: UpdateLowMoodInput!) {
    updateLowMood(updateLowMoodInput: $updateLowMoodInput) {
      g1_sad_depressed
      g1_discouraged
      g1_no_interest
      g1_down_on_yourself
      g1_lonely
      g3_long_depression
      g4_depressed
      g4_discouraged
      g4_no_interest
      g4_down
      userid
    }
  }
`;
export const deleteNeighborhood = /* GraphQL */ `
  mutation DeleteNeighborhood($userid: String!) {
    deleteNeighborhood(userid: $userid) {
      p1_friendly
      p1_trusted
      p1_share_values
      p1_willing
      p2_know_by_name
      p2_conversation
      p2_friends
      p2_socially
      p2_ask_help
      userid
    }
  }
`;
export const createNeighborhood = /* GraphQL */ `
  mutation CreateNeighborhood(
    $createNeighborhoodInput: CreateNeighborhoodInput!
  ) {
    createNeighborhood(createNeighborhoodInput: $createNeighborhoodInput) {
      p1_friendly
      p1_trusted
      p1_share_values
      p1_willing
      p2_know_by_name
      p2_conversation
      p2_friends
      p2_socially
      p2_ask_help
      userid
    }
  }
`;
export const updateNeighborhood = /* GraphQL */ `
  mutation UpdateNeighborhood(
    $updateNeighborhoodInput: UpdateNeighborhoodInput!
  ) {
    updateNeighborhood(updateNeighborhoodInput: $updateNeighborhoodInput) {
      p1_friendly
      p1_trusted
      p1_share_values
      p1_willing
      p2_know_by_name
      p2_conversation
      p2_friends
      p2_socially
      p2_ask_help
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
export const deletePets = /* GraphQL */ `
  mutation DeletePets($userid: String!) {
    deletePets(userid: $userid) {
      m1_pet
      m1_type_pets
      m1_dontlike
      m1_spend_every_day_pet
      m1_understood_pet
      m1_love_pet
      m1_talk_alot_pet
      m1_pet_happy
      m1_pet_friend
      m1_pet_comfort
      m1_lonely_without_
      userid
    }
  }
`;
export const createPets = /* GraphQL */ `
  mutation CreatePets($createPetsInput: CreatePetsInput!) {
    createPets(createPetsInput: $createPetsInput) {
      m1_pet
      m1_type_pets
      m1_dontlike
      m1_spend_every_day_pet
      m1_understood_pet
      m1_love_pet
      m1_talk_alot_pet
      m1_pet_happy
      m1_pet_friend
      m1_pet_comfort
      m1_lonely_without_
      userid
    }
  }
`;
export const updatePets = /* GraphQL */ `
  mutation UpdatePets($updatePetsInput: UpdatePetsInput!) {
    updatePets(updatePetsInput: $updatePetsInput) {
      m1_pet
      m1_type_pets
      m1_dontlike
      m1_spend_every_day_pet
      m1_understood_pet
      m1_love_pet
      m1_talk_alot_pet
      m1_pet_happy
      m1_pet_friend
      m1_pet_comfort
      m1_lonely_without_
      userid
    }
  }
`;
export const deleteQualityOfLife = /* GraphQL */ `
  mutation DeleteQualityOfLife($userid: String!) {
    deleteQualityOfLife(userid: $userid) {
      qol_general
      health_general
      health_compared_to_others
      full_of_pep
      alert_and_focused
      stress
      worry
      happiness
      anger
      enjoyment
      sadness
      ladder_qol
      userid
    }
  }
`;
export const createQualityOfLife = /* GraphQL */ `
  mutation CreateQualityOfLife(
    $createQualityOfLifeInput: CreateQualityOfLifeInput!
  ) {
    createQualityOfLife(createQualityOfLifeInput: $createQualityOfLifeInput) {
      qol_general
      health_general
      health_compared_to_others
      full_of_pep
      alert_and_focused
      stress
      worry
      happiness
      anger
      enjoyment
      sadness
      ladder_qol
      userid
    }
  }
`;
export const updateQualityOfLife = /* GraphQL */ `
  mutation UpdateQualityOfLife(
    $updateQualityOfLifeInput: UpdateQualityOfLifeInput!
  ) {
    updateQualityOfLife(updateQualityOfLifeInput: $updateQualityOfLifeInput) {
      qol_general
      health_general
      health_compared_to_others
      full_of_pep
      alert_and_focused
      stress
      worry
      happiness
      anger
      enjoyment
      sadness
      ladder_qol
      userid
    }
  }
`;
export const deleteReligiousness = /* GraphQL */ `
  mutation DeleteReligiousness($userid: String!) {
    deleteReligiousness(userid: $userid) {
      n1_hard_times
      n1_stress
      n1_understand
      n1_comfort
      n1_meaning
      n1_taking_care
      n1_purpose
      n1_reason
      n1_spiritual_strength
      n1_strenth_in_difficult_times
      n1_wellbeing
      n1_comfort_dailylife
      n1_strength_dailylife
      n2_touched_beauty
      n2_inspiration
      n2_grateful
      n2_hopegful
      n2_life_hopeful
      n3_experience_awe
      n3_connection_mbs
      n3_consistent
      n3_coherence
      n3_live_better
      n3_happy_in_life
      n3_peaceful_within_self
      n3_inner_peace
      n3_peaceful_need_to
      n3_harmony
      n3_optimistic_imporove
      n3_optimistic_uncertainty
      n3_enjoy_life
      n4_satisfied_mbs
      userid
    }
  }
`;
export const createReligiousness = /* GraphQL */ `
  mutation CreateReligiousness(
    $createReligiousnessInput: CreateReligiousnessInput!
  ) {
    createReligiousness(createReligiousnessInput: $createReligiousnessInput) {
      n1_hard_times
      n1_stress
      n1_understand
      n1_comfort
      n1_meaning
      n1_taking_care
      n1_purpose
      n1_reason
      n1_spiritual_strength
      n1_strenth_in_difficult_times
      n1_wellbeing
      n1_comfort_dailylife
      n1_strength_dailylife
      n2_touched_beauty
      n2_inspiration
      n2_grateful
      n2_hopegful
      n2_life_hopeful
      n3_experience_awe
      n3_connection_mbs
      n3_consistent
      n3_coherence
      n3_live_better
      n3_happy_in_life
      n3_peaceful_within_self
      n3_inner_peace
      n3_peaceful_need_to
      n3_harmony
      n3_optimistic_imporove
      n3_optimistic_uncertainty
      n3_enjoy_life
      n4_satisfied_mbs
      userid
    }
  }
`;
export const updateReligiousness = /* GraphQL */ `
  mutation UpdateReligiousness(
    $updateReligiousnessInput: UpdateReligiousnessInput!
  ) {
    updateReligiousness(updateReligiousnessInput: $updateReligiousnessInput) {
      n1_hard_times
      n1_stress
      n1_understand
      n1_comfort
      n1_meaning
      n1_taking_care
      n1_purpose
      n1_reason
      n1_spiritual_strength
      n1_strenth_in_difficult_times
      n1_wellbeing
      n1_comfort_dailylife
      n1_strength_dailylife
      n2_touched_beauty
      n2_inspiration
      n2_grateful
      n2_hopegful
      n2_life_hopeful
      n3_experience_awe
      n3_connection_mbs
      n3_consistent
      n3_coherence
      n3_live_better
      n3_happy_in_life
      n3_peaceful_within_self
      n3_inner_peace
      n3_peaceful_need_to
      n3_harmony
      n3_optimistic_imporove
      n3_optimistic_uncertainty
      n3_enjoy_life
      n4_satisfied_mbs
      userid
    }
  }
`;
export const deleteSleepQualityIndex = /* GraphQL */ `
  mutation DeleteSleepQualityIndex($userid: String!) {
    deleteSleepQualityIndex(userid: $userid) {
      t1_usual_bedtime
      t1_minutes_to_sleep
      t1_usual_wakeup
      t1_hours_of_sleep
      t2_cannot_sleep_30_min
      t2_wake_up_middle_night
      t2_bathroom
      t2_breathe_comfortable
      t2_cough_snore
      t2_cold
      t2_hot
      t2_bad_dreams
      t2_pain
      t2_other
      t3_medicine
      t3_trouble_awake
      t3_enthusiasm
      t3_overall_sleep
      userid
    }
  }
`;
export const createSleepQualityIndex = /* GraphQL */ `
  mutation CreateSleepQualityIndex(
    $createSleepQualityIndexInput: CreateSleepQualityIndexInput!
  ) {
    createSleepQualityIndex(
      createSleepQualityIndexInput: $createSleepQualityIndexInput
    ) {
      t1_usual_bedtime
      t1_minutes_to_sleep
      t1_usual_wakeup
      t1_hours_of_sleep
      t2_cannot_sleep_30_min
      t2_wake_up_middle_night
      t2_bathroom
      t2_breathe_comfortable
      t2_cough_snore
      t2_cold
      t2_hot
      t2_bad_dreams
      t2_pain
      t2_other
      t3_medicine
      t3_trouble_awake
      t3_enthusiasm
      t3_overall_sleep
      userid
    }
  }
`;
export const updateSleepQualityIndex = /* GraphQL */ `
  mutation UpdateSleepQualityIndex(
    $updateSleepQualityIndexInput: UpdateSleepQualityIndexInput!
  ) {
    updateSleepQualityIndex(
      updateSleepQualityIndexInput: $updateSleepQualityIndexInput
    ) {
      t1_usual_bedtime
      t1_minutes_to_sleep
      t1_usual_wakeup
      t1_hours_of_sleep
      t2_cannot_sleep_30_min
      t2_wake_up_middle_night
      t2_bathroom
      t2_breathe_comfortable
      t2_cough_snore
      t2_cold
      t2_hot
      t2_bad_dreams
      t2_pain
      t2_other
      t3_medicine
      t3_trouble_awake
      t3_enthusiasm
      t3_overall_sleep
      userid
    }
  }
`;
export const deleteSocialNetworks = /* GraphQL */ `
  mutation DeleteSocialNetworks($userid: String!) {
    deleteSocialNetworks(userid: $userid) {
      o1_hours_week
      o2_different_friends
      o3_hours_month
      o4_personally_socialize
      o5_rely
      o5_open_up
      o5_demands
      o5_argue
      o6_emotionally_close
      o6_uncomfortable
      o6_want_to_be
      o6_comfortable_without
      o7_depend
      o7_important
      o7_miss_you
      o7_pay_attention
      o7_interested
      userid
    }
  }
`;
export const createSocialNetworks = /* GraphQL */ `
  mutation CreateSocialNetworks(
    $createSocialNetworksInput: CreateSocialNetworksInput!
  ) {
    createSocialNetworks(
      createSocialNetworksInput: $createSocialNetworksInput
    ) {
      o1_hours_week
      o2_different_friends
      o3_hours_month
      o4_personally_socialize
      o5_rely
      o5_open_up
      o5_demands
      o5_argue
      o6_emotionally_close
      o6_uncomfortable
      o6_want_to_be
      o6_comfortable_without
      o7_depend
      o7_important
      o7_miss_you
      o7_pay_attention
      o7_interested
      userid
    }
  }
`;
export const updateSocialNetworks = /* GraphQL */ `
  mutation UpdateSocialNetworks(
    $updateSocialNetworksInput: UpdateSocialNetworksInput!
  ) {
    updateSocialNetworks(
      updateSocialNetworksInput: $updateSocialNetworksInput
    ) {
      o1_hours_week
      o2_different_friends
      o3_hours_month
      o4_personally_socialize
      o5_rely
      o5_open_up
      o5_demands
      o5_argue
      o6_emotionally_close
      o6_uncomfortable
      o6_want_to_be
      o6_comfortable_without
      o7_depend
      o7_important
      o7_miss_you
      o7_pay_attention
      o7_interested
      userid
    }
  }
`;
export const deleteStressfulLifeExperiences = /* GraphQL */ `
  mutation DeleteStressfulLifeExperiences($userid: String!) {
    deleteStressfulLifeExperiences(userid: $userid) {
      i1_times
      i2_memories
      i2_physical
      i2_avoid_think
      i2_avoid_activities
      i2_reactions
      i3_how_old
      i3_how_many_years
      i3_past_30
      i3_past_24_months
      i4_life_threat
      i4_death
      i4_betrayal
      i4_arguments
      i4_motor_accident
      i4_legal_problem
      i4_any
      i4_describe
      i5_financial
      i5_career
      i5_health
      i5_love_life
      i5_friendships
      i5_family_relationship
      i5_lovedones_health
      i5_other_lovedones
      i5_life_overall
      i5_describe
      i6_keep_calm
      i6_manage_stress
      i6_new_approach
      i6_get_along
      i6_humor
      i6_describe
      i7_promotion
      i7_finance_imp
      i7_love_life_imp
      i7_health_imp
      i7_any
      i7_describe
      userid
    }
  }
`;
export const createStressfulLifeExperiences = /* GraphQL */ `
  mutation CreateStressfulLifeExperiences(
    $createStressfulLifeExperiencesInput: CreateStressfulLifeExperiencesInput!
  ) {
    createStressfulLifeExperiences(
      createStressfulLifeExperiencesInput: $createStressfulLifeExperiencesInput
    ) {
      i1_times
      i2_memories
      i2_physical
      i2_avoid_think
      i2_avoid_activities
      i2_reactions
      i3_how_old
      i3_how_many_years
      i3_past_30
      i3_past_24_months
      i4_life_threat
      i4_death
      i4_betrayal
      i4_arguments
      i4_motor_accident
      i4_legal_problem
      i4_any
      i4_describe
      i5_financial
      i5_career
      i5_health
      i5_love_life
      i5_friendships
      i5_family_relationship
      i5_lovedones_health
      i5_other_lovedones
      i5_life_overall
      i5_describe
      i6_keep_calm
      i6_manage_stress
      i6_new_approach
      i6_get_along
      i6_humor
      i6_describe
      i7_promotion
      i7_finance_imp
      i7_love_life_imp
      i7_health_imp
      i7_any
      i7_describe
      userid
    }
  }
`;
export const updateStressfulLifeExperiences = /* GraphQL */ `
  mutation UpdateStressfulLifeExperiences(
    $updateStressfulLifeExperiencesInput: UpdateStressfulLifeExperiencesInput!
  ) {
    updateStressfulLifeExperiences(
      updateStressfulLifeExperiencesInput: $updateStressfulLifeExperiencesInput
    ) {
      i1_times
      i2_memories
      i2_physical
      i2_avoid_think
      i2_avoid_activities
      i2_reactions
      i3_how_old
      i3_how_many_years
      i3_past_30
      i3_past_24_months
      i4_life_threat
      i4_death
      i4_betrayal
      i4_arguments
      i4_motor_accident
      i4_legal_problem
      i4_any
      i4_describe
      i5_financial
      i5_career
      i5_health
      i5_love_life
      i5_friendships
      i5_family_relationship
      i5_lovedones_health
      i5_other_lovedones
      i5_life_overall
      i5_describe
      i6_keep_calm
      i6_manage_stress
      i6_new_approach
      i6_get_along
      i6_humor
      i6_describe
      i7_promotion
      i7_finance_imp
      i7_love_life_imp
      i7_health_imp
      i7_any
      i7_describe
      userid
    }
  }
`;
export const deleteTimeUse = /* GraphQL */ `
  mutation DeleteTimeUse($userid: String!) {
    deleteTimeUse(userid: $userid) {
      q1_work_hours
      q1_volunteer_hours
      q1_leisure_hours
      q3_loved_ones
      q3_friends
      q3_no_technology
      q3_technology
      userid
    }
  }
`;
export const createTimeUse = /* GraphQL */ `
  mutation CreateTimeUse($createTimeUseInput: CreateTimeUseInput!) {
    createTimeUse(createTimeUseInput: $createTimeUseInput) {
      q1_work_hours
      q1_volunteer_hours
      q1_leisure_hours
      q3_loved_ones
      q3_friends
      q3_no_technology
      q3_technology
      userid
    }
  }
`;
export const updateTimeUse = /* GraphQL */ `
  mutation UpdateTimeUse($updateTimeUseInput: UpdateTimeUseInput!) {
    updateTimeUse(updateTimeUseInput: $updateTimeUseInput) {
      q1_work_hours
      q1_volunteer_hours
      q1_leisure_hours
      q3_loved_ones
      q3_friends
      q3_no_technology
      q3_technology
      userid
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
export const deleteYourHealth = /* GraphQL */ `
  mutation DeleteYourHealth($userid: String!) {
    deleteYourHealth(userid: $userid) {
      height_feet
      height_inches
      weight
      b3_CD_clotting_disorder
      b3_CD_high_blood_pressure
      b3_CD_heart_attack
      b3_CD_high_cholesterol
      b3_CD_any
      b3_JBD_osteoarthritis
      b3_JBD_rheumatoid_arthritis
      b3_JBD_osteoporosis
      b3_RD_asthma_chronicbronc
      b3_RD_COPD
      b3_RD_seasonal_allergies
      b3_PD_ADD_ADHD
      b3_PD_anxiety
      b3_PD_depression
      b3_PD_bipolar_disorder
      b3_PD_PTSD
      b3_PD_substance_abuse
      b3_PD_any
      b3_CANCER_skin
      b3_CANCER_any
      b3_OTHER_autoimmune_disorder
      b3_OTHER_inflammatory_skin_disorder
      b3_OTHER_diabetes_insulin_dependant
      b3_OTHER_diabetes_not_insulin_dependant
      b3_OTHER_migraine
      b3_OTHER_stomach_intestine_ulcer
      b3_OTHER_acid_reflux
      b3_OTHER_thyroid_disorders
      b3_OTHER_chronic_pain
      b3_OTHER_NONE_APPLY
      b4_dizziness
      b4_short_breath
      b4_heart_pound
      b4_tired_out
      b4_muscle_tensiion
      b4_restless
      b4_anxious
      b4_irritable
      b5_memory
      b5_slow_talking_moving
      b5_concentration
      b5_sleep_problems
      b5_constipation
      b5_nausea
      b5_poor_appetite
      b5_worrying
      b5_feeling_angry
      b6_back_pain
      b6_neck_pain
      b6_menstrual_cramps
      b6_chest_pain
      b6_sexual_pain
      b6_headaches
      b6_any_other_serious_pain
      b6_uncontrollable_anxiety
      b6_angry_explode
      b10_hours_sleep
      b11_energy
      b14_home_management
      b14_ability_to_work
      b14_speed_quality_work
      b14_social_quality
      b14_close_relationship
      b15_days_unable_to_work
      b16_days_reduced_work
      userid
    }
  }
`;
export const createYourHealth = /* GraphQL */ `
  mutation CreateYourHealth($createYourHealthInput: CreateYourHealthInput!) {
    createYourHealth(createYourHealthInput: $createYourHealthInput) {
      height_feet
      height_inches
      weight
      b3_CD_clotting_disorder
      b3_CD_high_blood_pressure
      b3_CD_heart_attack
      b3_CD_high_cholesterol
      b3_CD_any
      b3_JBD_osteoarthritis
      b3_JBD_rheumatoid_arthritis
      b3_JBD_osteoporosis
      b3_RD_asthma_chronicbronc
      b3_RD_COPD
      b3_RD_seasonal_allergies
      b3_PD_ADD_ADHD
      b3_PD_anxiety
      b3_PD_depression
      b3_PD_bipolar_disorder
      b3_PD_PTSD
      b3_PD_substance_abuse
      b3_PD_any
      b3_CANCER_skin
      b3_CANCER_any
      b3_OTHER_autoimmune_disorder
      b3_OTHER_inflammatory_skin_disorder
      b3_OTHER_diabetes_insulin_dependant
      b3_OTHER_diabetes_not_insulin_dependant
      b3_OTHER_migraine
      b3_OTHER_stomach_intestine_ulcer
      b3_OTHER_acid_reflux
      b3_OTHER_thyroid_disorders
      b3_OTHER_chronic_pain
      b3_OTHER_NONE_APPLY
      b4_dizziness
      b4_short_breath
      b4_heart_pound
      b4_tired_out
      b4_muscle_tensiion
      b4_restless
      b4_anxious
      b4_irritable
      b5_memory
      b5_slow_talking_moving
      b5_concentration
      b5_sleep_problems
      b5_constipation
      b5_nausea
      b5_poor_appetite
      b5_worrying
      b5_feeling_angry
      b6_back_pain
      b6_neck_pain
      b6_menstrual_cramps
      b6_chest_pain
      b6_sexual_pain
      b6_headaches
      b6_any_other_serious_pain
      b6_uncontrollable_anxiety
      b6_angry_explode
      b10_hours_sleep
      b11_energy
      b14_home_management
      b14_ability_to_work
      b14_speed_quality_work
      b14_social_quality
      b14_close_relationship
      b15_days_unable_to_work
      b16_days_reduced_work
      userid
    }
  }
`;
export const updateYourHealth = /* GraphQL */ `
  mutation UpdateYourHealth($updateYourHealthInput: UpdateYourHealthInput!) {
    updateYourHealth(updateYourHealthInput: $updateYourHealthInput) {
      height_feet
      height_inches
      weight
      b3_CD_clotting_disorder
      b3_CD_high_blood_pressure
      b3_CD_heart_attack
      b3_CD_high_cholesterol
      b3_CD_any
      b3_JBD_osteoarthritis
      b3_JBD_rheumatoid_arthritis
      b3_JBD_osteoporosis
      b3_RD_asthma_chronicbronc
      b3_RD_COPD
      b3_RD_seasonal_allergies
      b3_PD_ADD_ADHD
      b3_PD_anxiety
      b3_PD_depression
      b3_PD_bipolar_disorder
      b3_PD_PTSD
      b3_PD_substance_abuse
      b3_PD_any
      b3_CANCER_skin
      b3_CANCER_any
      b3_OTHER_autoimmune_disorder
      b3_OTHER_inflammatory_skin_disorder
      b3_OTHER_diabetes_insulin_dependant
      b3_OTHER_diabetes_not_insulin_dependant
      b3_OTHER_migraine
      b3_OTHER_stomach_intestine_ulcer
      b3_OTHER_acid_reflux
      b3_OTHER_thyroid_disorders
      b3_OTHER_chronic_pain
      b3_OTHER_NONE_APPLY
      b4_dizziness
      b4_short_breath
      b4_heart_pound
      b4_tired_out
      b4_muscle_tensiion
      b4_restless
      b4_anxious
      b4_irritable
      b5_memory
      b5_slow_talking_moving
      b5_concentration
      b5_sleep_problems
      b5_constipation
      b5_nausea
      b5_poor_appetite
      b5_worrying
      b5_feeling_angry
      b6_back_pain
      b6_neck_pain
      b6_menstrual_cramps
      b6_chest_pain
      b6_sexual_pain
      b6_headaches
      b6_any_other_serious_pain
      b6_uncontrollable_anxiety
      b6_angry_explode
      b10_hours_sleep
      b11_energy
      b14_home_management
      b14_ability_to_work
      b14_speed_quality_work
      b14_social_quality
      b14_close_relationship
      b15_days_unable_to_work
      b16_days_reduced_work
      userid
    }
  }
`;
export const deleteYourPersonality = /* GraphQL */ `
  mutation DeleteYourPersonality($userid: String!) {
    deleteYourPersonality(userid: $userid) {
      j1_reserved
      j1_helpful
      j1_broadminded
      j1_moody
      j1_outgoing
      j1_emotionally_stable
      j1_critical
      j1_adventurous
      j1_nervous
      j1_unreliable
      j1_quiet
      j2_softhearted
      j2_creative
      j2_calm
      j2_friendly
      j2_careless
      j2_uncompassionate
      j2_curious
      j2_upset
      j2_talkative
      j2_sympathetic
      j2_organized
      j2_sensitive
      j3_interests
      j3_opinions
      j3_purpose
      j3_think_a_lot
      j3_do_a_lot
      userid
    }
  }
`;
export const createYourPersonality = /* GraphQL */ `
  mutation CreateYourPersonality(
    $createYourPersonalityInput: CreateYourPersonalityInput!
  ) {
    createYourPersonality(
      createYourPersonalityInput: $createYourPersonalityInput
    ) {
      j1_reserved
      j1_helpful
      j1_broadminded
      j1_moody
      j1_outgoing
      j1_emotionally_stable
      j1_critical
      j1_adventurous
      j1_nervous
      j1_unreliable
      j1_quiet
      j2_softhearted
      j2_creative
      j2_calm
      j2_friendly
      j2_careless
      j2_uncompassionate
      j2_curious
      j2_upset
      j2_talkative
      j2_sympathetic
      j2_organized
      j2_sensitive
      j3_interests
      j3_opinions
      j3_purpose
      j3_think_a_lot
      j3_do_a_lot
      userid
    }
  }
`;
export const updateYourPersonality = /* GraphQL */ `
  mutation UpdateYourPersonality(
    $updateYourPersonalityInput: UpdateYourPersonalityInput!
  ) {
    updateYourPersonality(
      updateYourPersonalityInput: $updateYourPersonalityInput
    ) {
      j1_reserved
      j1_helpful
      j1_broadminded
      j1_moody
      j1_outgoing
      j1_emotionally_stable
      j1_critical
      j1_adventurous
      j1_nervous
      j1_unreliable
      j1_quiet
      j2_softhearted
      j2_creative
      j2_calm
      j2_friendly
      j2_careless
      j2_uncompassionate
      j2_curious
      j2_upset
      j2_talkative
      j2_sympathetic
      j2_organized
      j2_sensitive
      j3_interests
      j3_opinions
      j3_purpose
      j3_think_a_lot
      j3_do_a_lot
      userid
    }
  }
`;
export const deleteCustomers = /* GraphQL */ `
  mutation DeleteCustomers($id: Int!) {
    deleteCustomers(id: $id) {
      id
      name
      phone
      email
    }
  }
`;
export const createCustomers = /* GraphQL */ `
  mutation CreateCustomers($createCustomersInput: CreateCustomersInput!) {
    createCustomers(createCustomersInput: $createCustomersInput) {
      id
      name
      phone
      email
    }
  }
`;
export const updateCustomers = /* GraphQL */ `
  mutation UpdateCustomers($updateCustomersInput: UpdateCustomersInput!) {
    updateCustomers(updateCustomersInput: $updateCustomersInput) {
      id
      name
      phone
      email
    }
  }
`;
export const deleteDemographicsStack0 = /* GraphQL */ `
  mutation DeleteDemographicsStack0($id: String!) {
    deleteDemographics_stack0(id: $id) {
      id
      form_id
      born_in_US
      what_state_or_territory
      how_many_years_in_florida
    }
  }
`;
export const createDemographicsStack0 = /* GraphQL */ `
  mutation CreateDemographicsStack0(
    $createDemographics_stack0Input: CreateDemographics_stack0Input!
  ) {
    createDemographics_stack0(
      createDemographics_stack0Input: $createDemographics_stack0Input
    ) {
      id
      form_id
      born_in_US
      what_state_or_territory
      how_many_years_in_florida
    }
  }
`;
export const updateDemographicsStack0 = /* GraphQL */ `
  mutation UpdateDemographicsStack0(
    $updateDemographics_stack0Input: UpdateDemographics_stack0Input!
  ) {
    updateDemographics_stack0(
      updateDemographics_stack0Input: $updateDemographics_stack0Input
    ) {
      id
      form_id
      born_in_US
      what_state_or_territory
      how_many_years_in_florida
    }
  }
`;
export const deleteDemographicsStack1 = /* GraphQL */ `
  mutation DeleteDemographicsStack1($id: String!) {
    deleteDemographics_stack1(id: $id) {
      are_you_spanish_latino
      select_all_that_apply
      id
      formid
      what_is_your_race
    }
  }
`;
export const createDemographicsStack1 = /* GraphQL */ `
  mutation CreateDemographicsStack1(
    $createDemographics_stack1Input: CreateDemographics_stack1Input!
  ) {
    createDemographics_stack1(
      createDemographics_stack1Input: $createDemographics_stack1Input
    ) {
      are_you_spanish_latino
      select_all_that_apply
      id
      formid
      what_is_your_race
    }
  }
`;
export const updateDemographicsStack1 = /* GraphQL */ `
  mutation UpdateDemographicsStack1(
    $updateDemographics_stack1Input: UpdateDemographics_stack1Input!
  ) {
    updateDemographics_stack1(
      updateDemographics_stack1Input: $updateDemographics_stack1Input
    ) {
      are_you_spanish_latino
      select_all_that_apply
      id
      formid
      what_is_your_race
    }
  }
`;
export const deleteDemographicsStack2 = /* GraphQL */ `
  mutation DeleteDemographicsStack2($id: String!) {
    deleteDemographics_stack2(id: $id) {
      id
      formid
      highest_level_education
    }
  }
`;
export const createDemographicsStack2 = /* GraphQL */ `
  mutation CreateDemographicsStack2(
    $createDemographics_stack2Input: CreateDemographics_stack2Input!
  ) {
    createDemographics_stack2(
      createDemographics_stack2Input: $createDemographics_stack2Input
    ) {
      id
      formid
      highest_level_education
    }
  }
`;
export const updateDemographicsStack2 = /* GraphQL */ `
  mutation UpdateDemographicsStack2(
    $updateDemographics_stack2Input: UpdateDemographics_stack2Input!
  ) {
    updateDemographics_stack2(
      updateDemographics_stack2Input: $updateDemographics_stack2Input
    ) {
      id
      formid
      highest_level_education
    }
  }
`;
export const deleteDemographicsStack3 = /* GraphQL */ `
  mutation DeleteDemographicsStack3($id: String!) {
    deleteDemographics_stack3(id: $id) {
      id
      formid
      marital_status
      living_marriage_like
    }
  }
`;
export const createDemographicsStack3 = /* GraphQL */ `
  mutation CreateDemographicsStack3(
    $createDemographics_stack3Input: CreateDemographics_stack3Input!
  ) {
    createDemographics_stack3(
      createDemographics_stack3Input: $createDemographics_stack3Input
    ) {
      id
      formid
      marital_status
      living_marriage_like
    }
  }
`;
export const updateDemographicsStack3 = /* GraphQL */ `
  mutation UpdateDemographicsStack3(
    $updateDemographics_stack3Input: UpdateDemographics_stack3Input!
  ) {
    updateDemographics_stack3(
      updateDemographics_stack3Input: $updateDemographics_stack3Input
    ) {
      id
      formid
      marital_status
      living_marriage_like
    }
  }
`;
export const deleteDemographicsStack4 = /* GraphQL */ `
  mutation DeleteDemographicsStack4($id: String!) {
    deleteDemographics_stack4(id: $id) {
      id
      formid
      bio_children
      step_children
      children_0_to_17
    }
  }
`;
export const createDemographicsStack4 = /* GraphQL */ `
  mutation CreateDemographicsStack4(
    $createDemographics_stack4Input: CreateDemographics_stack4Input!
  ) {
    createDemographics_stack4(
      createDemographics_stack4Input: $createDemographics_stack4Input
    ) {
      id
      formid
      bio_children
      step_children
      children_0_to_17
    }
  }
`;
export const updateDemographicsStack4 = /* GraphQL */ `
  mutation UpdateDemographicsStack4(
    $updateDemographics_stack4Input: UpdateDemographics_stack4Input!
  ) {
    updateDemographics_stack4(
      updateDemographics_stack4Input: $updateDemographics_stack4Input
    ) {
      id
      formid
      bio_children
      step_children
      children_0_to_17
    }
  }
`;
export const deleteDemographicsStack5 = /* GraphQL */ `
  mutation DeleteDemographicsStack5($id: String!) {
    deleteDemographics_stack5(id: $id) {
      id
      formid
      gender
      currently_pregnant
    }
  }
`;
export const createDemographicsStack5 = /* GraphQL */ `
  mutation CreateDemographicsStack5(
    $createDemographics_stack5Input: CreateDemographics_stack5Input!
  ) {
    createDemographics_stack5(
      createDemographics_stack5Input: $createDemographics_stack5Input
    ) {
      id
      formid
      gender
      currently_pregnant
    }
  }
`;
export const updateDemographicsStack5 = /* GraphQL */ `
  mutation UpdateDemographicsStack5(
    $updateDemographics_stack5Input: UpdateDemographics_stack5Input!
  ) {
    updateDemographics_stack5(
      updateDemographics_stack5Input: $updateDemographics_stack5Input
    ) {
      id
      formid
      gender
      currently_pregnant
    }
  }
`;
export const deleteEmploymentStack0 = /* GraphQL */ `
  mutation DeleteEmploymentStack0($id: String!) {
    deleteEmployment_stack0(id: $id) {
      id
      formid
      emp_status
      type_work
      commute_work
      commute_int
    }
  }
`;
export const createEmploymentStack0 = /* GraphQL */ `
  mutation CreateEmploymentStack0(
    $createEmployment_stack0Input: CreateEmployment_stack0Input!
  ) {
    createEmployment_stack0(
      createEmployment_stack0Input: $createEmployment_stack0Input
    ) {
      id
      formid
      emp_status
      type_work
      commute_work
      commute_int
    }
  }
`;
export const updateEmploymentStack0 = /* GraphQL */ `
  mutation UpdateEmploymentStack0(
    $updateEmployment_stack0Input: UpdateEmployment_stack0Input!
  ) {
    updateEmployment_stack0(
      updateEmployment_stack0Input: $updateEmployment_stack0Input
    ) {
      id
      formid
      emp_status
      type_work
      commute_work
      commute_int
    }
  }
`;
export const deleteEmploymentStack1 = /* GraphQL */ `
  mutation DeleteEmploymentStack1($id: String!) {
    deleteEmployment_stack1(id: $id) {
      id
      formid
      hours_work_week
      hours_typical
      hours_per_day
    }
  }
`;
export const createEmploymentStack1 = /* GraphQL */ `
  mutation CreateEmploymentStack1(
    $createEmployment_stack1Input: CreateEmployment_stack1Input!
  ) {
    createEmployment_stack1(
      createEmployment_stack1Input: $createEmployment_stack1Input
    ) {
      id
      formid
      hours_work_week
      hours_typical
      hours_per_day
    }
  }
`;
export const updateEmploymentStack1 = /* GraphQL */ `
  mutation UpdateEmploymentStack1(
    $updateEmployment_stack1Input: UpdateEmployment_stack1Input!
  ) {
    updateEmployment_stack1(
      updateEmployment_stack1Input: $updateEmployment_stack1Input
    ) {
      id
      formid
      hours_work_week
      hours_typical
      hours_per_day
    }
  }
`;
export const deleteEmploymentStack2 = /* GraphQL */ `
  mutation DeleteEmploymentStack2($id: String!) {
    deleteEmployment_stack2(id: $id) {
      id
      formid
      people_under_supervision
      weeks_missed_work
      hours_week_missed
    }
  }
`;
export const createEmploymentStack2 = /* GraphQL */ `
  mutation CreateEmploymentStack2(
    $createEmployment_stack2Input: CreateEmployment_stack2Input!
  ) {
    createEmployment_stack2(
      createEmployment_stack2Input: $createEmployment_stack2Input
    ) {
      id
      formid
      people_under_supervision
      weeks_missed_work
      hours_week_missed
    }
  }
`;
export const updateEmploymentStack2 = /* GraphQL */ `
  mutation UpdateEmploymentStack2(
    $updateEmployment_stack2Input: UpdateEmployment_stack2Input!
  ) {
    updateEmployment_stack2(
      updateEmployment_stack2Input: $updateEmployment_stack2Input
    ) {
      id
      formid
      people_under_supervision
      weeks_missed_work
      hours_week_missed
    }
  }
`;
export const deleteEmploymentStack3 = /* GraphQL */ `
  mutation DeleteEmploymentStack3($id: String!) {
    deleteEmployment_stack3(id: $id) {
      id
      formid
      hours_worked
      health_suffered
    }
  }
`;
export const createEmploymentStack3 = /* GraphQL */ `
  mutation CreateEmploymentStack3(
    $createEmployment_stack3Input: CreateEmployment_stack3Input!
  ) {
    createEmployment_stack3(
      createEmployment_stack3Input: $createEmployment_stack3Input
    ) {
      id
      formid
      hours_worked
      health_suffered
    }
  }
`;
export const updateEmploymentStack3 = /* GraphQL */ `
  mutation UpdateEmploymentStack3(
    $updateEmployment_stack3Input: UpdateEmployment_stack3Input!
  ) {
    updateEmployment_stack3(
      updateEmployment_stack3Input: $updateEmployment_stack3Input
    ) {
      id
      formid
      hours_worked
      health_suffered
    }
  }
`;
export const deleteHealthBehavior2Stack0 = /* GraphQL */ `
  mutation DeleteHealthBehavior2Stack0($id: String!) {
    deleteHealth_behavior2_stack0(id: $id) {
      id
      formid
      days_tobacco
      days_nicotine
      days_nicotine2
      how_many_tobacco
    }
  }
`;
export const createHealthBehavior2Stack0 = /* GraphQL */ `
  mutation CreateHealthBehavior2Stack0(
    $createHealth_behavior2_stack0Input: CreateHealth_behavior2_stack0Input!
  ) {
    createHealth_behavior2_stack0(
      createHealth_behavior2_stack0Input: $createHealth_behavior2_stack0Input
    ) {
      id
      formid
      days_tobacco
      days_nicotine
      days_nicotine2
      how_many_tobacco
    }
  }
`;
export const updateHealthBehavior2Stack0 = /* GraphQL */ `
  mutation UpdateHealthBehavior2Stack0(
    $updateHealth_behavior2_stack0Input: UpdateHealth_behavior2_stack0Input!
  ) {
    updateHealth_behavior2_stack0(
      updateHealth_behavior2_stack0Input: $updateHealth_behavior2_stack0Input
    ) {
      id
      formid
      days_tobacco
      days_nicotine
      days_nicotine2
      how_many_tobacco
    }
  }
`;
export const deleteHealthBehavior2Stack1 = /* GraphQL */ `
  mutation DeleteHealthBehavior2Stack1($id: String!) {
    deleteHealth_behavior2_stack1(id: $id) {
      id
      formid
      days_week_alcohol
      how_many_drinks
      skin_in_sun
    }
  }
`;
export const createHealthBehavior2Stack1 = /* GraphQL */ `
  mutation CreateHealthBehavior2Stack1(
    $createHealth_behavior2_stack1Input: CreateHealth_behavior2_stack1Input!
  ) {
    createHealth_behavior2_stack1(
      createHealth_behavior2_stack1Input: $createHealth_behavior2_stack1Input
    ) {
      id
      formid
      days_week_alcohol
      how_many_drinks
      skin_in_sun
    }
  }
`;
export const updateHealthBehavior2Stack1 = /* GraphQL */ `
  mutation UpdateHealthBehavior2Stack1(
    $updateHealth_behavior2_stack1Input: UpdateHealth_behavior2_stack1Input!
  ) {
    updateHealth_behavior2_stack1(
      updateHealth_behavior2_stack1Input: $updateHealth_behavior2_stack1Input
    ) {
      id
      formid
      days_week_alcohol
      how_many_drinks
      skin_in_sun
    }
  }
`;
export const deleteHealthBehavior2Stack2 = /* GraphQL */ `
  mutation DeleteHealthBehavior2Stack2($id: String!) {
    deleteHealth_behavior2_stack2(id: $id) {
      id
      formid
      avoid_sun
      sunscreen_spf15
      protective_clothing
    }
  }
`;
export const createHealthBehavior2Stack2 = /* GraphQL */ `
  mutation CreateHealthBehavior2Stack2(
    $createHealth_behavior2_stack2Input: CreateHealth_behavior2_stack2Input!
  ) {
    createHealth_behavior2_stack2(
      createHealth_behavior2_stack2Input: $createHealth_behavior2_stack2Input
    ) {
      id
      formid
      avoid_sun
      sunscreen_spf15
      protective_clothing
    }
  }
`;
export const updateHealthBehavior2Stack2 = /* GraphQL */ `
  mutation UpdateHealthBehavior2Stack2(
    $updateHealth_behavior2_stack2Input: UpdateHealth_behavior2_stack2Input!
  ) {
    updateHealth_behavior2_stack2(
      updateHealth_behavior2_stack2Input: $updateHealth_behavior2_stack2Input
    ) {
      id
      formid
      avoid_sun
      sunscreen_spf15
      protective_clothing
    }
  }
`;
export const deleteHealthBehavior2Stack3 = /* GraphQL */ `
  mutation DeleteHealthBehavior2Stack3($id: String!) {
    deleteHealth_behavior2_stack3(id: $id) {
      id
      formid
      vigorous_exercise
      moderate_exervise
    }
  }
`;
export const createHealthBehavior2Stack3 = /* GraphQL */ `
  mutation CreateHealthBehavior2Stack3(
    $createHealth_behavior2_stack3Input: CreateHealth_behavior2_stack3Input!
  ) {
    createHealth_behavior2_stack3(
      createHealth_behavior2_stack3Input: $createHealth_behavior2_stack3Input
    ) {
      id
      formid
      vigorous_exercise
      moderate_exervise
    }
  }
`;
export const updateHealthBehavior2Stack3 = /* GraphQL */ `
  mutation UpdateHealthBehavior2Stack3(
    $updateHealth_behavior2_stack3Input: UpdateHealth_behavior2_stack3Input!
  ) {
    updateHealth_behavior2_stack3(
      updateHealth_behavior2_stack3Input: $updateHealth_behavior2_stack3Input
    ) {
      id
      formid
      vigorous_exercise
      moderate_exervise
    }
  }
`;
export const deleteHealthBehavior2Stack4 = /* GraphQL */ `
  mutation DeleteHealthBehavior2Stack4($id: String!) {
    deleteHealth_behavior2_stack4(id: $id) {
      id
      formid
      interactive_vg
      home_any_other
      by_yourself_somewhere_else
      in_a_group
      play_partner_game
      internet_group_live
      other
      do_not_workout
    }
  }
`;
export const createHealthBehavior2Stack4 = /* GraphQL */ `
  mutation CreateHealthBehavior2Stack4(
    $createHealth_behavior2_stack4Input: CreateHealth_behavior2_stack4Input!
  ) {
    createHealth_behavior2_stack4(
      createHealth_behavior2_stack4Input: $createHealth_behavior2_stack4Input
    ) {
      id
      formid
      interactive_vg
      home_any_other
      by_yourself_somewhere_else
      in_a_group
      play_partner_game
      internet_group_live
      other
      do_not_workout
    }
  }
`;
export const updateHealthBehavior2Stack4 = /* GraphQL */ `
  mutation UpdateHealthBehavior2Stack4(
    $updateHealth_behavior2_stack4Input: UpdateHealth_behavior2_stack4Input!
  ) {
    updateHealth_behavior2_stack4(
      updateHealth_behavior2_stack4Input: $updateHealth_behavior2_stack4Input
    ) {
      id
      formid
      interactive_vg
      home_any_other
      by_yourself_somewhere_else
      in_a_group
      play_partner_game
      internet_group_live
      other
      do_not_workout
    }
  }
`;
export const deleteHealthBehavior2Stack5 = /* GraphQL */ `
  mutation DeleteHealthBehavior2Stack5($id: String!) {
    deleteHealth_behavior2_stack5(id: $id) {
      id
      formid
      heredity
      lifestyle
      stresss
      strategies
      doctor
      carefully_follow
      environment
      attitude
    }
  }
`;
export const createHealthBehavior2Stack5 = /* GraphQL */ `
  mutation CreateHealthBehavior2Stack5(
    $createHealth_behavior2_stack5Input: CreateHealth_behavior2_stack5Input!
  ) {
    createHealth_behavior2_stack5(
      createHealth_behavior2_stack5Input: $createHealth_behavior2_stack5Input
    ) {
      id
      formid
      heredity
      lifestyle
      stresss
      strategies
      doctor
      carefully_follow
      environment
      attitude
    }
  }
`;
export const updateHealthBehavior2Stack5 = /* GraphQL */ `
  mutation UpdateHealthBehavior2Stack5(
    $updateHealth_behavior2_stack5Input: UpdateHealth_behavior2_stack5Input!
  ) {
    updateHealth_behavior2_stack5(
      updateHealth_behavior2_stack5Input: $updateHealth_behavior2_stack5Input
    ) {
      id
      formid
      heredity
      lifestyle
      stresss
      strategies
      doctor
      carefully_follow
      environment
      attitude
    }
  }
`;
export const deleteHealthBehavior2Stack6 = /* GraphQL */ `
  mutation DeleteHealthBehavior2Stack6($id: String!) {
    deleteHealth_behavior2_stack6(id: $id) {
      id
      formid
      wshc
      time_relax
      volunteer_work
      spend_leisure_hours
    }
  }
`;
export const createHealthBehavior2Stack6 = /* GraphQL */ `
  mutation CreateHealthBehavior2Stack6(
    $createHealth_behavior2_stack6Input: CreateHealth_behavior2_stack6Input!
  ) {
    createHealth_behavior2_stack6(
      createHealth_behavior2_stack6Input: $createHealth_behavior2_stack6Input
    ) {
      id
      formid
      wshc
      time_relax
      volunteer_work
      spend_leisure_hours
    }
  }
`;
export const updateHealthBehavior2Stack6 = /* GraphQL */ `
  mutation UpdateHealthBehavior2Stack6(
    $updateHealth_behavior2_stack6Input: UpdateHealth_behavior2_stack6Input!
  ) {
    updateHealth_behavior2_stack6(
      updateHealth_behavior2_stack6Input: $updateHealth_behavior2_stack6Input
    ) {
      id
      formid
      wshc
      time_relax
      volunteer_work
      spend_leisure_hours
    }
  }
`;
export const deleteHealthBehaviorsStack0 = /* GraphQL */ `
  mutation DeleteHealthBehaviorsStack0($id: String!) {
    deleteHealth_behaviors_stack0(id: $id) {
      id
      formid
      regular_doctor
      how_many_visits
      different_perscription
    }
  }
`;
export const createHealthBehaviorsStack0 = /* GraphQL */ `
  mutation CreateHealthBehaviorsStack0(
    $createHealth_behaviors_stack0Input: CreateHealth_behaviors_stack0Input!
  ) {
    createHealth_behaviors_stack0(
      createHealth_behaviors_stack0Input: $createHealth_behaviors_stack0Input
    ) {
      id
      formid
      regular_doctor
      how_many_visits
      different_perscription
    }
  }
`;
export const updateHealthBehaviorsStack0 = /* GraphQL */ `
  mutation UpdateHealthBehaviorsStack0(
    $updateHealth_behaviors_stack0Input: UpdateHealth_behaviors_stack0Input!
  ) {
    updateHealth_behaviors_stack0(
      updateHealth_behaviors_stack0Input: $updateHealth_behaviors_stack0Input
    ) {
      id
      formid
      regular_doctor
      how_many_visits
      different_perscription
    }
  }
`;
export const deleteHealthBehaviorsStack1 = /* GraphQL */ `
  mutation DeleteHealthBehaviorsStack1($id: String!) {
    deleteHealth_behaviors_stack1(id: $id) {
      id
      formid
      birth_control
      perscriped_opioid
      dietary_vitamins
    }
  }
`;
export const createHealthBehaviorsStack1 = /* GraphQL */ `
  mutation CreateHealthBehaviorsStack1(
    $createHealth_behaviors_stack1Input: CreateHealth_behaviors_stack1Input!
  ) {
    createHealth_behaviors_stack1(
      createHealth_behaviors_stack1Input: $createHealth_behaviors_stack1Input
    ) {
      id
      formid
      birth_control
      perscriped_opioid
      dietary_vitamins
    }
  }
`;
export const updateHealthBehaviorsStack1 = /* GraphQL */ `
  mutation UpdateHealthBehaviorsStack1(
    $updateHealth_behaviors_stack1Input: UpdateHealth_behaviors_stack1Input!
  ) {
    updateHealth_behaviors_stack1(
      updateHealth_behaviors_stack1Input: $updateHealth_behaviors_stack1Input
    ) {
      id
      formid
      birth_control
      perscriped_opioid
      dietary_vitamins
    }
  }
`;
export const deleteHighMoodStack0 = /* GraphQL */ `
  mutation DeleteHighMoodStack0($id: String!) {
    deleteHigh_mood_stack0(id: $id) {
      id
      formid
      high_mood_episode
    }
  }
`;
export const createHighMoodStack0 = /* GraphQL */ `
  mutation CreateHighMoodStack0(
    $createHigh_mood_stack0Input: CreateHigh_mood_stack0Input!
  ) {
    createHigh_mood_stack0(
      createHigh_mood_stack0Input: $createHigh_mood_stack0Input
    ) {
      id
      formid
      high_mood_episode
    }
  }
`;
export const updateHighMoodStack0 = /* GraphQL */ `
  mutation UpdateHighMoodStack0(
    $updateHigh_mood_stack0Input: UpdateHigh_mood_stack0Input!
  ) {
    updateHigh_mood_stack0(
      updateHigh_mood_stack0Input: $updateHigh_mood_stack0Input
    ) {
      id
      formid
      high_mood_episode
    }
  }
`;
export const deleteHighMoodStack1 = /* GraphQL */ `
  mutation DeleteHighMoodStack1($id: String!) {
    deleteHigh_mood_stack1(id: $id) {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const createHighMoodStack1 = /* GraphQL */ `
  mutation CreateHighMoodStack1(
    $createHigh_mood_stack1Input: CreateHigh_mood_stack1Input!
  ) {
    createHigh_mood_stack1(
      createHigh_mood_stack1Input: $createHigh_mood_stack1Input
    ) {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const updateHighMoodStack1 = /* GraphQL */ `
  mutation UpdateHighMoodStack1(
    $updateHigh_mood_stack1Input: UpdateHigh_mood_stack1Input!
  ) {
    updateHigh_mood_stack1(
      updateHigh_mood_stack1Input: $updateHigh_mood_stack1Input
    ) {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const deleteHighMoodStack2 = /* GraphQL */ `
  mutation DeleteHighMoodStack2($id: String!) {
    deleteHigh_mood_stack2(id: $id) {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const createHighMoodStack2 = /* GraphQL */ `
  mutation CreateHighMoodStack2(
    $createHigh_mood_stack2Input: CreateHigh_mood_stack2Input!
  ) {
    createHigh_mood_stack2(
      createHigh_mood_stack2Input: $createHigh_mood_stack2Input
    ) {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const updateHighMoodStack2 = /* GraphQL */ `
  mutation UpdateHighMoodStack2(
    $updateHigh_mood_stack2Input: UpdateHigh_mood_stack2Input!
  ) {
    updateHigh_mood_stack2(
      updateHigh_mood_stack2Input: $updateHigh_mood_stack2Input
    ) {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const deleteLakeNonaStack0 = /* GraphQL */ `
  mutation DeleteLakeNonaStack0($id: String!) {
    deleteLakeNona_stack0(id: $id) {
      id
      form_id
      live_in
      play_in
      study_in
      work_in
    }
  }
`;
export const createLakeNonaStack0 = /* GraphQL */ `
  mutation CreateLakeNonaStack0(
    $createLakeNona_stack0Input: CreateLakeNona_stack0Input!
  ) {
    createLakeNona_stack0(
      createLakeNona_stack0Input: $createLakeNona_stack0Input
    ) {
      id
      form_id
      live_in
      play_in
      study_in
      work_in
    }
  }
`;
export const updateLakeNonaStack0 = /* GraphQL */ `
  mutation UpdateLakeNonaStack0(
    $updateLakeNona_stack0Input: UpdateLakeNona_stack0Input!
  ) {
    updateLakeNona_stack0(
      updateLakeNona_stack0Input: $updateLakeNona_stack0Input
    ) {
      id
      form_id
      live_in
      play_in
      study_in
      work_in
    }
  }
`;
export const deleteLowMoodStack0 = /* GraphQL */ `
  mutation DeleteLowMoodStack0($id: String!) {
    deleteLow_mood_stack0(id: $id) {
      id
      formid
      sad_or_depressed
      discouraged
      no_interest
      feel_down
      feel_lonely
    }
  }
`;
export const createLowMoodStack0 = /* GraphQL */ `
  mutation CreateLowMoodStack0(
    $createLow_mood_stack0Input: CreateLow_mood_stack0Input!
  ) {
    createLow_mood_stack0(
      createLow_mood_stack0Input: $createLow_mood_stack0Input
    ) {
      id
      formid
      sad_or_depressed
      discouraged
      no_interest
      feel_down
      feel_lonely
    }
  }
`;
export const updateLowMoodStack0 = /* GraphQL */ `
  mutation UpdateLowMoodStack0(
    $updateLow_mood_stack0Input: UpdateLow_mood_stack0Input!
  ) {
    updateLow_mood_stack0(
      updateLow_mood_stack0Input: $updateLow_mood_stack0Input
    ) {
      id
      formid
      sad_or_depressed
      discouraged
      no_interest
      feel_down
      feel_lonely
    }
  }
`;
export const deleteLowMoodStack1 = /* GraphQL */ `
  mutation DeleteLowMoodStack1($id: String!) {
    deleteLow_mood_stack1(id: $id) {
      id
      formid
      think_about_death
      psych_distress
      interfere_work
    }
  }
`;
export const createLowMoodStack1 = /* GraphQL */ `
  mutation CreateLowMoodStack1(
    $createLow_mood_stack1Input: CreateLow_mood_stack1Input!
  ) {
    createLow_mood_stack1(
      createLow_mood_stack1Input: $createLow_mood_stack1Input
    ) {
      id
      formid
      think_about_death
      psych_distress
      interfere_work
    }
  }
`;
export const updateLowMoodStack1 = /* GraphQL */ `
  mutation UpdateLowMoodStack1(
    $updateLow_mood_stack1Input: UpdateLow_mood_stack1Input!
  ) {
    updateLow_mood_stack1(
      updateLow_mood_stack1Input: $updateLow_mood_stack1Input
    ) {
      id
      formid
      think_about_death
      psych_distress
      interfere_work
    }
  }
`;
export const deleteLowMoodStack2 = /* GraphQL */ `
  mutation DeleteLowMoodStack2($id: String!) {
    deleteLow_mood_stack2(id: $id) {
      id
      formid
      depressed_one_month
    }
  }
`;
export const createLowMoodStack2 = /* GraphQL */ `
  mutation CreateLowMoodStack2(
    $createLow_mood_stack2Input: CreateLow_mood_stack2Input!
  ) {
    createLow_mood_stack2(
      createLow_mood_stack2Input: $createLow_mood_stack2Input
    ) {
      id
      formid
      depressed_one_month
    }
  }
`;
export const updateLowMoodStack2 = /* GraphQL */ `
  mutation UpdateLowMoodStack2(
    $updateLow_mood_stack2Input: UpdateLow_mood_stack2Input!
  ) {
    updateLow_mood_stack2(
      updateLow_mood_stack2Input: $updateLow_mood_stack2Input
    ) {
      id
      formid
      depressed_one_month
    }
  }
`;
export const deleteLowMoodStack3 = /* GraphQL */ `
  mutation DeleteLowMoodStack3($id: String!) {
    deleteLow_mood_stack3(id: $id) {
      id
      formid
      depressed
      discouraged
      no_interest
      feeling_down
    }
  }
`;
export const createLowMoodStack3 = /* GraphQL */ `
  mutation CreateLowMoodStack3(
    $createLow_mood_stack3Input: CreateLow_mood_stack3Input!
  ) {
    createLow_mood_stack3(
      createLow_mood_stack3Input: $createLow_mood_stack3Input
    ) {
      id
      formid
      depressed
      discouraged
      no_interest
      feeling_down
    }
  }
`;
export const updateLowMoodStack3 = /* GraphQL */ `
  mutation UpdateLowMoodStack3(
    $updateLow_mood_stack3Input: UpdateLow_mood_stack3Input!
  ) {
    updateLow_mood_stack3(
      updateLow_mood_stack3Input: $updateLow_mood_stack3Input
    ) {
      id
      formid
      depressed
      discouraged
      no_interest
      feeling_down
    }
  }
`;
export const deleteLowMoodStack4 = /* GraphQL */ `
  mutation DeleteLowMoodStack4($id: String!) {
    deleteLow_mood_stack4(id: $id) {
      id
      formid
    }
  }
`;
export const createLowMoodStack4 = /* GraphQL */ `
  mutation CreateLowMoodStack4(
    $createLow_mood_stack4Input: CreateLow_mood_stack4Input!
  ) {
    createLow_mood_stack4(
      createLow_mood_stack4Input: $createLow_mood_stack4Input
    ) {
      id
      formid
    }
  }
`;
export const updateLowMoodStack4 = /* GraphQL */ `
  mutation UpdateLowMoodStack4(
    $updateLow_mood_stack4Input: UpdateLow_mood_stack4Input!
  ) {
    updateLow_mood_stack4(
      updateLow_mood_stack4Input: $updateLow_mood_stack4Input
    ) {
      id
      formid
    }
  }
`;
export const deleteLowMoodStack5 = /* GraphQL */ `
  mutation DeleteLowMoodStack5($id: String!) {
    deleteLow_mood_stack5(id: $id) {
      id
      formid
      years_depression
      months_depression
    }
  }
`;
export const createLowMoodStack5 = /* GraphQL */ `
  mutation CreateLowMoodStack5(
    $createLow_mood_stack5Input: CreateLow_mood_stack5Input!
  ) {
    createLow_mood_stack5(
      createLow_mood_stack5Input: $createLow_mood_stack5Input
    ) {
      id
      formid
      years_depression
      months_depression
    }
  }
`;
export const updateLowMoodStack5 = /* GraphQL */ `
  mutation UpdateLowMoodStack5(
    $updateLow_mood_stack5Input: UpdateLow_mood_stack5Input!
  ) {
    updateLow_mood_stack5(
      updateLow_mood_stack5Input: $updateLow_mood_stack5Input
    ) {
      id
      formid
      years_depression
      months_depression
    }
  }
`;
export const deleteLowMoodStack6 = /* GraphQL */ `
  mutation DeleteLowMoodStack6($id: String!) {
    deleteLow_mood_stack6(id: $id) {
      id
      formid
      lack_companionshiup
      no_one_turn_to
      left_out
      outgoing
      isolated
      can_find_companionship
      unhappy
      around_me_not_with
    }
  }
`;
export const createLowMoodStack6 = /* GraphQL */ `
  mutation CreateLowMoodStack6(
    $createLow_mood_stack6Input: CreateLow_mood_stack6Input!
  ) {
    createLow_mood_stack6(
      createLow_mood_stack6Input: $createLow_mood_stack6Input
    ) {
      id
      formid
      lack_companionshiup
      no_one_turn_to
      left_out
      outgoing
      isolated
      can_find_companionship
      unhappy
      around_me_not_with
    }
  }
`;
export const updateLowMoodStack6 = /* GraphQL */ `
  mutation UpdateLowMoodStack6(
    $updateLow_mood_stack6Input: UpdateLow_mood_stack6Input!
  ) {
    updateLow_mood_stack6(
      updateLow_mood_stack6Input: $updateLow_mood_stack6Input
    ) {
      id
      formid
      lack_companionshiup
      no_one_turn_to
      left_out
      outgoing
      isolated
      can_find_companionship
      unhappy
      around_me_not_with
    }
  }
`;
export const deleteNeighborhoodStack0 = /* GraphQL */ `
  mutation DeleteNeighborhoodStack0($id: String!) {
    deleteNeighborhood_stack0(id: $id) {
      id
      formid
      friendly
      trusted
      same_values
      willing_to_help
    }
  }
`;
export const createNeighborhoodStack0 = /* GraphQL */ `
  mutation CreateNeighborhoodStack0(
    $createNeighborhood_stack0Input: CreateNeighborhood_stack0Input!
  ) {
    createNeighborhood_stack0(
      createNeighborhood_stack0Input: $createNeighborhood_stack0Input
    ) {
      id
      formid
      friendly
      trusted
      same_values
      willing_to_help
    }
  }
`;
export const updateNeighborhoodStack0 = /* GraphQL */ `
  mutation UpdateNeighborhoodStack0(
    $updateNeighborhood_stack0Input: UpdateNeighborhood_stack0Input!
  ) {
    updateNeighborhood_stack0(
      updateNeighborhood_stack0Input: $updateNeighborhood_stack0Input
    ) {
      id
      formid
      friendly
      trusted
      same_values
      willing_to_help
    }
  }
`;
export const deleteNeighborhoodStack1 = /* GraphQL */ `
  mutation DeleteNeighborhoodStack1($id: String!) {
    deleteNeighborhood_stack1(id: $id) {
      id
      formid
      how_many_friends
      know_by_name
      conversation_with
    }
  }
`;
export const createNeighborhoodStack1 = /* GraphQL */ `
  mutation CreateNeighborhoodStack1(
    $createNeighborhood_stack1Input: CreateNeighborhood_stack1Input!
  ) {
    createNeighborhood_stack1(
      createNeighborhood_stack1Input: $createNeighborhood_stack1Input
    ) {
      id
      formid
      how_many_friends
      know_by_name
      conversation_with
    }
  }
`;
export const updateNeighborhoodStack1 = /* GraphQL */ `
  mutation UpdateNeighborhoodStack1(
    $updateNeighborhood_stack1Input: UpdateNeighborhood_stack1Input!
  ) {
    updateNeighborhood_stack1(
      updateNeighborhood_stack1Input: $updateNeighborhood_stack1Input
    ) {
      id
      formid
      how_many_friends
      know_by_name
      conversation_with
    }
  }
`;
export const deleteNeighborhoodStack2 = /* GraphQL */ `
  mutation DeleteNeighborhoodStack2($id: String!) {
    deleteNeighborhood_stack2(id: $id) {
      id
      formid
      ask_for_help
      get_together_socialily
    }
  }
`;
export const createNeighborhoodStack2 = /* GraphQL */ `
  mutation CreateNeighborhoodStack2(
    $createNeighborhood_stack2Input: CreateNeighborhood_stack2Input!
  ) {
    createNeighborhood_stack2(
      createNeighborhood_stack2Input: $createNeighborhood_stack2Input
    ) {
      id
      formid
      ask_for_help
      get_together_socialily
    }
  }
`;
export const updateNeighborhoodStack2 = /* GraphQL */ `
  mutation UpdateNeighborhoodStack2(
    $updateNeighborhood_stack2Input: UpdateNeighborhood_stack2Input!
  ) {
    updateNeighborhood_stack2(
      updateNeighborhood_stack2Input: $updateNeighborhood_stack2Input
    ) {
      id
      formid
      ask_for_help
      get_together_socialily
    }
  }
`;
export const deleteOralHealthStack0 = /* GraphQL */ `
  mutation DeleteOralHealthStack0($id: String!) {
    deleteOral_health_stack0(id: $id) {
      id
      formid
      brush_teeth
      dental_floss
      mouthwash
    }
  }
`;
export const createOralHealthStack0 = /* GraphQL */ `
  mutation CreateOralHealthStack0(
    $createOral_health_stack0Input: CreateOral_health_stack0Input!
  ) {
    createOral_health_stack0(
      createOral_health_stack0Input: $createOral_health_stack0Input
    ) {
      id
      formid
      brush_teeth
      dental_floss
      mouthwash
    }
  }
`;
export const updateOralHealthStack0 = /* GraphQL */ `
  mutation UpdateOralHealthStack0(
    $updateOral_health_stack0Input: UpdateOral_health_stack0Input!
  ) {
    updateOral_health_stack0(
      updateOral_health_stack0Input: $updateOral_health_stack0Input
    ) {
      id
      formid
      brush_teeth
      dental_floss
      mouthwash
    }
  }
`;
export const deleteOralHealthStack1 = /* GraphQL */ `
  mutation DeleteOralHealthStack1($id: String!) {
    deleteOral_health_stack1(id: $id) {
      id
      formid
      days_floss
      days_mouthwash
    }
  }
`;
export const createOralHealthStack1 = /* GraphQL */ `
  mutation CreateOralHealthStack1(
    $createOral_health_stack1Input: CreateOral_health_stack1Input!
  ) {
    createOral_health_stack1(
      createOral_health_stack1Input: $createOral_health_stack1Input
    ) {
      id
      formid
      days_floss
      days_mouthwash
    }
  }
`;
export const updateOralHealthStack1 = /* GraphQL */ `
  mutation UpdateOralHealthStack1(
    $updateOral_health_stack1Input: UpdateOral_health_stack1Input!
  ) {
    updateOral_health_stack1(
      updateOral_health_stack1Input: $updateOral_health_stack1Input
    ) {
      id
      formid
      days_floss
      days_mouthwash
    }
  }
`;
export const deletePetsStack0 = /* GraphQL */ `
  mutation DeletePetsStack0($id: String!) {
    deletePets_stack0(id: $id) {
      id
      formid
      have_pet
      type_pet
    }
  }
`;
export const createPetsStack0 = /* GraphQL */ `
  mutation CreatePetsStack0($createPets_stack0Input: CreatePets_stack0Input!) {
    createPets_stack0(createPets_stack0Input: $createPets_stack0Input) {
      id
      formid
      have_pet
      type_pet
    }
  }
`;
export const updatePetsStack0 = /* GraphQL */ `
  mutation UpdatePetsStack0($updatePets_stack0Input: UpdatePets_stack0Input!) {
    updatePets_stack0(updatePets_stack0Input: $updatePets_stack0Input) {
      id
      formid
      have_pet
      type_pet
    }
  }
`;
export const deletePetsStack1 = /* GraphQL */ `
  mutation DeletePetsStack1($id: String!) {
    deletePets_stack1(id: $id) {
      id
      formid
      dont_like_animals
      pet_knows_im_upset
      i_love_pets
      every_day_playing
      talk_to_pet
      understood_pet
      lonely_without
      pet_is_friend
      pet_makes_me_happy
    }
  }
`;
export const createPetsStack1 = /* GraphQL */ `
  mutation CreatePetsStack1($createPets_stack1Input: CreatePets_stack1Input!) {
    createPets_stack1(createPets_stack1Input: $createPets_stack1Input) {
      id
      formid
      dont_like_animals
      pet_knows_im_upset
      i_love_pets
      every_day_playing
      talk_to_pet
      understood_pet
      lonely_without
      pet_is_friend
      pet_makes_me_happy
    }
  }
`;
export const updatePetsStack1 = /* GraphQL */ `
  mutation UpdatePetsStack1($updatePets_stack1Input: UpdatePets_stack1Input!) {
    updatePets_stack1(updatePets_stack1Input: $updatePets_stack1Input) {
      id
      formid
      dont_like_animals
      pet_knows_im_upset
      i_love_pets
      every_day_playing
      talk_to_pet
      understood_pet
      lonely_without
      pet_is_friend
      pet_makes_me_happy
    }
  }
`;
export const deleteQualityOfLifeStack0 = /* GraphQL */ `
  mutation DeleteQualityOfLifeStack0($id: String!) {
    deleteQuality_of_life_stack0(id: $id) {
      id
      formid
      qol_general
      health_general
    }
  }
`;
export const createQualityOfLifeStack0 = /* GraphQL */ `
  mutation CreateQualityOfLifeStack0(
    $createQuality_of_life_stack0Input: CreateQuality_of_life_stack0Input!
  ) {
    createQuality_of_life_stack0(
      createQuality_of_life_stack0Input: $createQuality_of_life_stack0Input
    ) {
      id
      formid
      qol_general
      health_general
    }
  }
`;
export const updateQualityOfLifeStack0 = /* GraphQL */ `
  mutation UpdateQualityOfLifeStack0(
    $updateQuality_of_life_stack0Input: UpdateQuality_of_life_stack0Input!
  ) {
    updateQuality_of_life_stack0(
      updateQuality_of_life_stack0Input: $updateQuality_of_life_stack0Input
    ) {
      id
      formid
      qol_general
      health_general
    }
  }
`;
export const deleteQualityOfLifeStack1 = /* GraphQL */ `
  mutation DeleteQualityOfLifeStack1($id: String!) {
    deleteQuality_of_life_stack1(id: $id) {
      id
      formid
      health_compared
      full_of_energy
      alert_and_focused
    }
  }
`;
export const createQualityOfLifeStack1 = /* GraphQL */ `
  mutation CreateQualityOfLifeStack1(
    $createQuality_of_life_stack1Input: CreateQuality_of_life_stack1Input!
  ) {
    createQuality_of_life_stack1(
      createQuality_of_life_stack1Input: $createQuality_of_life_stack1Input
    ) {
      id
      formid
      health_compared
      full_of_energy
      alert_and_focused
    }
  }
`;
export const updateQualityOfLifeStack1 = /* GraphQL */ `
  mutation UpdateQualityOfLifeStack1(
    $updateQuality_of_life_stack1Input: UpdateQuality_of_life_stack1Input!
  ) {
    updateQuality_of_life_stack1(
      updateQuality_of_life_stack1Input: $updateQuality_of_life_stack1Input
    ) {
      id
      formid
      health_compared
      full_of_energy
      alert_and_focused
    }
  }
`;
export const deleteQualityOfLifeStack2 = /* GraphQL */ `
  mutation DeleteQualityOfLifeStack2($id: String!) {
    deleteQuality_of_life_stack2(id: $id) {
      id
      formid
      stress
      worry
      happiness
      anger
      enjoyment
      sadness
    }
  }
`;
export const createQualityOfLifeStack2 = /* GraphQL */ `
  mutation CreateQualityOfLifeStack2(
    $createQuality_of_life_stack2Input: CreateQuality_of_life_stack2Input!
  ) {
    createQuality_of_life_stack2(
      createQuality_of_life_stack2Input: $createQuality_of_life_stack2Input
    ) {
      id
      formid
      stress
      worry
      happiness
      anger
      enjoyment
      sadness
    }
  }
`;
export const updateQualityOfLifeStack2 = /* GraphQL */ `
  mutation UpdateQualityOfLifeStack2(
    $updateQuality_of_life_stack2Input: UpdateQuality_of_life_stack2Input!
  ) {
    updateQuality_of_life_stack2(
      updateQuality_of_life_stack2Input: $updateQuality_of_life_stack2Input
    ) {
      id
      formid
      stress
      worry
      happiness
      anger
      enjoyment
      sadness
    }
  }
`;
export const deleteQualityOfLifeStack3 = /* GraphQL */ `
  mutation DeleteQualityOfLifeStack3($id: String!) {
    deleteQuality_of_life_stack3(id: $id) {
      id
      formid
      ladder
    }
  }
`;
export const createQualityOfLifeStack3 = /* GraphQL */ `
  mutation CreateQualityOfLifeStack3(
    $createQuality_of_life_stack3Input: CreateQuality_of_life_stack3Input!
  ) {
    createQuality_of_life_stack3(
      createQuality_of_life_stack3Input: $createQuality_of_life_stack3Input
    ) {
      id
      formid
      ladder
    }
  }
`;
export const updateQualityOfLifeStack3 = /* GraphQL */ `
  mutation UpdateQualityOfLifeStack3(
    $updateQuality_of_life_stack3Input: UpdateQuality_of_life_stack3Input!
  ) {
    updateQuality_of_life_stack3(
      updateQuality_of_life_stack3Input: $updateQuality_of_life_stack3Input
    ) {
      id
      formid
      ladder
    }
  }
`;
export const deleteReligiousnessSpiritualityStack1 = /* GraphQL */ `
  mutation DeleteReligiousnessSpiritualityStack1($id: String!) {
    deleteReligiousness_spirituality_stack1(id: $id) {
      id
      formid
      hard_times
      tolerate_stress
      comfort_reassurance
      meaning_in_life
      understand_others
    }
  }
`;
export const createReligiousnessSpiritualityStack1 = /* GraphQL */ `
  mutation CreateReligiousnessSpiritualityStack1(
    $createReligiousness_spirituality_stack1Input: CreateReligiousness_spirituality_stack1Input!
  ) {
    createReligiousness_spirituality_stack1(
      createReligiousness_spirituality_stack1Input: $createReligiousness_spirituality_stack1Input
    ) {
      id
      formid
      hard_times
      tolerate_stress
      comfort_reassurance
      meaning_in_life
      understand_others
    }
  }
`;
export const updateReligiousnessSpiritualityStack1 = /* GraphQL */ `
  mutation UpdateReligiousnessSpiritualityStack1(
    $updateReligiousness_spirituality_stack1Input: UpdateReligiousness_spirituality_stack1Input!
  ) {
    updateReligiousness_spirituality_stack1(
      updateReligiousness_spirituality_stack1Input: $updateReligiousness_spirituality_stack1Input
    ) {
      id
      formid
      hard_times
      tolerate_stress
      comfort_reassurance
      meaning_in_life
      understand_others
    }
  }
`;
export const deleteReligiousnessSpiritualityStack2 = /* GraphQL */ `
  mutation DeleteReligiousnessSpiritualityStack2($id: String!) {
    deleteReligiousness_spirituality_stack2(id: $id) {
      id
      formid
      meaning
      purpose
      here_for_reason
      inner_spiritual_strength
    }
  }
`;
export const createReligiousnessSpiritualityStack2 = /* GraphQL */ `
  mutation CreateReligiousnessSpiritualityStack2(
    $createReligiousness_spirituality_stack2Input: CreateReligiousness_spirituality_stack2Input!
  ) {
    createReligiousness_spirituality_stack2(
      createReligiousness_spirituality_stack2Input: $createReligiousness_spirituality_stack2Input
    ) {
      id
      formid
      meaning
      purpose
      here_for_reason
      inner_spiritual_strength
    }
  }
`;
export const updateReligiousnessSpiritualityStack2 = /* GraphQL */ `
  mutation UpdateReligiousnessSpiritualityStack2(
    $updateReligiousness_spirituality_stack2Input: UpdateReligiousness_spirituality_stack2Input!
  ) {
    updateReligiousness_spirituality_stack2(
      updateReligiousness_spirituality_stack2Input: $updateReligiousness_spirituality_stack2Input
    ) {
      id
      formid
      meaning
      purpose
      here_for_reason
      inner_spiritual_strength
    }
  }
`;
export const deleteReligiousnessSpiritualityStack3 = /* GraphQL */ `
  mutation DeleteReligiousnessSpiritualityStack3($id: String!) {
    deleteReligiousness_spirituality_stack3(id: $id) {
      id
      formid
      well_being
      comfort
      strength
    }
  }
`;
export const createReligiousnessSpiritualityStack3 = /* GraphQL */ `
  mutation CreateReligiousnessSpiritualityStack3(
    $createReligiousness_spirituality_stack3Input: CreateReligiousness_spirituality_stack3Input!
  ) {
    createReligiousness_spirituality_stack3(
      createReligiousness_spirituality_stack3Input: $createReligiousness_spirituality_stack3Input
    ) {
      id
      formid
      well_being
      comfort
      strength
    }
  }
`;
export const updateReligiousnessSpiritualityStack3 = /* GraphQL */ `
  mutation UpdateReligiousnessSpiritualityStack3(
    $updateReligiousness_spirituality_stack3Input: UpdateReligiousness_spirituality_stack3Input!
  ) {
    updateReligiousness_spirituality_stack3(
      updateReligiousness_spirituality_stack3Input: $updateReligiousness_spirituality_stack3Input
    ) {
      id
      formid
      well_being
      comfort
      strength
    }
  }
`;
export const deleteReligiousnessSpiritualityStack4 = /* GraphQL */ `
  mutation DeleteReligiousnessSpiritualityStack4($id: String!) {
    deleteReligiousness_spirituality_stack4(id: $id) {
      id
      formid
      touched_beauty
      inspiration_excitement
      grateful
      how_hopeful_feel
      hopeful_about_life
    }
  }
`;
export const createReligiousnessSpiritualityStack4 = /* GraphQL */ `
  mutation CreateReligiousnessSpiritualityStack4(
    $createReligiousness_spirituality_stack4Input: CreateReligiousness_spirituality_stack4Input!
  ) {
    createReligiousness_spirituality_stack4(
      createReligiousness_spirituality_stack4Input: $createReligiousness_spirituality_stack4Input
    ) {
      id
      formid
      touched_beauty
      inspiration_excitement
      grateful
      how_hopeful_feel
      hopeful_about_life
    }
  }
`;
export const updateReligiousnessSpiritualityStack4 = /* GraphQL */ `
  mutation UpdateReligiousnessSpiritualityStack4(
    $updateReligiousness_spirituality_stack4Input: UpdateReligiousness_spirituality_stack4Input!
  ) {
    updateReligiousness_spirituality_stack4(
      updateReligiousness_spirituality_stack4Input: $updateReligiousness_spirituality_stack4Input
    ) {
      id
      formid
      touched_beauty
      inspiration_excitement
      grateful
      how_hopeful_feel
      hopeful_about_life
    }
  }
`;
export const deleteReligiousnessSpiritualityStack5 = /* GraphQL */ `
  mutation DeleteReligiousnessSpiritualityStack5($id: String!) {
    deleteReligiousness_spirituality_stack5(id: $id) {
      id
      formid
      experience_awe
      consistent_what_you_think
      spiritual_strength_live_better
      coherence
      connection_mbs
    }
  }
`;
export const createReligiousnessSpiritualityStack5 = /* GraphQL */ `
  mutation CreateReligiousnessSpiritualityStack5(
    $createReligiousness_spirituality_stack5Input: CreateReligiousness_spirituality_stack5Input!
  ) {
    createReligiousness_spirituality_stack5(
      createReligiousness_spirituality_stack5Input: $createReligiousness_spirituality_stack5Input
    ) {
      id
      formid
      experience_awe
      consistent_what_you_think
      spiritual_strength_live_better
      coherence
      connection_mbs
    }
  }
`;
export const updateReligiousnessSpiritualityStack5 = /* GraphQL */ `
  mutation UpdateReligiousnessSpiritualityStack5(
    $updateReligiousness_spirituality_stack5Input: UpdateReligiousness_spirituality_stack5Input!
  ) {
    updateReligiousness_spirituality_stack5(
      updateReligiousness_spirituality_stack5Input: $updateReligiousness_spirituality_stack5Input
    ) {
      id
      formid
      experience_awe
      consistent_what_you_think
      spiritual_strength_live_better
      coherence
      connection_mbs
    }
  }
`;
export const deleteReligiousnessSpiritualityStack6 = /* GraphQL */ `
  mutation DeleteReligiousnessSpiritualityStack6($id: String!) {
    deleteReligiousness_spirituality_stack6(id: $id) {
      id
      formid
      happy
      inner_peace
      harmony
      peace_within_self
      feel_peaceful
    }
  }
`;
export const createReligiousnessSpiritualityStack6 = /* GraphQL */ `
  mutation CreateReligiousnessSpiritualityStack6(
    $createReligiousness_spirituality_stack6Input: CreateReligiousness_spirituality_stack6Input!
  ) {
    createReligiousness_spirituality_stack6(
      createReligiousness_spirituality_stack6Input: $createReligiousness_spirituality_stack6Input
    ) {
      id
      formid
      happy
      inner_peace
      harmony
      peace_within_self
      feel_peaceful
    }
  }
`;
export const updateReligiousnessSpiritualityStack6 = /* GraphQL */ `
  mutation UpdateReligiousnessSpiritualityStack6(
    $updateReligiousness_spirituality_stack6Input: UpdateReligiousness_spirituality_stack6Input!
  ) {
    updateReligiousness_spirituality_stack6(
      updateReligiousness_spirituality_stack6Input: $updateReligiousness_spirituality_stack6Input
    ) {
      id
      formid
      happy
      inner_peace
      harmony
      peace_within_self
      feel_peaceful
    }
  }
`;
export const deleteReligiousnessSpiritualityStack7 = /* GraphQL */ `
  mutation DeleteReligiousnessSpiritualityStack7($id: String!) {
    deleteReligiousness_spirituality_stack7(id: $id) {
      id
      formid
      optimistic
      remaiun_optimistic
      enjoy_life
    }
  }
`;
export const createReligiousnessSpiritualityStack7 = /* GraphQL */ `
  mutation CreateReligiousnessSpiritualityStack7(
    $createReligiousness_spirituality_stack7Input: CreateReligiousness_spirituality_stack7Input!
  ) {
    createReligiousness_spirituality_stack7(
      createReligiousness_spirituality_stack7Input: $createReligiousness_spirituality_stack7Input
    ) {
      id
      formid
      optimistic
      remaiun_optimistic
      enjoy_life
    }
  }
`;
export const updateReligiousnessSpiritualityStack7 = /* GraphQL */ `
  mutation UpdateReligiousnessSpiritualityStack7(
    $updateReligiousness_spirituality_stack7Input: UpdateReligiousness_spirituality_stack7Input!
  ) {
    updateReligiousness_spirituality_stack7(
      updateReligiousness_spirituality_stack7Input: $updateReligiousness_spirituality_stack7Input
    ) {
      id
      formid
      optimistic
      remaiun_optimistic
      enjoy_life
    }
  }
`;
export const deleteReligiousnessSpiritualityStack8 = /* GraphQL */ `
  mutation DeleteReligiousnessSpiritualityStack8($id: String!) {
    deleteReligiousness_spirituality_stack8(id: $id) {
      id
      formid
      satisfied
    }
  }
`;
export const createReligiousnessSpiritualityStack8 = /* GraphQL */ `
  mutation CreateReligiousnessSpiritualityStack8(
    $createReligiousness_spirituality_stack8Input: CreateReligiousness_spirituality_stack8Input!
  ) {
    createReligiousness_spirituality_stack8(
      createReligiousness_spirituality_stack8Input: $createReligiousness_spirituality_stack8Input
    ) {
      id
      formid
      satisfied
    }
  }
`;
export const updateReligiousnessSpiritualityStack8 = /* GraphQL */ `
  mutation UpdateReligiousnessSpiritualityStack8(
    $updateReligiousness_spirituality_stack8Input: UpdateReligiousness_spirituality_stack8Input!
  ) {
    updateReligiousness_spirituality_stack8(
      updateReligiousness_spirituality_stack8Input: $updateReligiousness_spirituality_stack8Input
    ) {
      id
      formid
      satisfied
    }
  }
`;
export const deleteSleepQualityStack0 = /* GraphQL */ `
  mutation DeleteSleepQualityStack0($id: String!) {
    deleteSleep_quality_stack0(id: $id) {
      id
      formid
      usual_bedtime
      minutes_to_sleep
      hours_actual_sleep
      usual_wakeup_time
    }
  }
`;
export const createSleepQualityStack0 = /* GraphQL */ `
  mutation CreateSleepQualityStack0(
    $createSleep_quality_stack0Input: CreateSleep_quality_stack0Input!
  ) {
    createSleep_quality_stack0(
      createSleep_quality_stack0Input: $createSleep_quality_stack0Input
    ) {
      id
      formid
      usual_bedtime
      minutes_to_sleep
      hours_actual_sleep
      usual_wakeup_time
    }
  }
`;
export const updateSleepQualityStack0 = /* GraphQL */ `
  mutation UpdateSleepQualityStack0(
    $updateSleep_quality_stack0Input: UpdateSleep_quality_stack0Input!
  ) {
    updateSleep_quality_stack0(
      updateSleep_quality_stack0Input: $updateSleep_quality_stack0Input
    ) {
      id
      formid
      usual_bedtime
      minutes_to_sleep
      hours_actual_sleep
      usual_wakeup_time
    }
  }
`;
export const deleteSleepQualityStack1 = /* GraphQL */ `
  mutation DeleteSleepQualityStack1($id: String!) {
    deleteSleep_quality_stack1(id: $id) {
      id
      formid
      cannot_sleep_thirty
      cough
      bad_dreams
      too_hot
      wake_up
      use_bathroom
      cannot_breathe
    }
  }
`;
export const createSleepQualityStack1 = /* GraphQL */ `
  mutation CreateSleepQualityStack1(
    $createSleep_quality_stack1Input: CreateSleep_quality_stack1Input!
  ) {
    createSleep_quality_stack1(
      createSleep_quality_stack1Input: $createSleep_quality_stack1Input
    ) {
      id
      formid
      cannot_sleep_thirty
      cough
      bad_dreams
      too_hot
      wake_up
      use_bathroom
      cannot_breathe
    }
  }
`;
export const updateSleepQualityStack1 = /* GraphQL */ `
  mutation UpdateSleepQualityStack1(
    $updateSleep_quality_stack1Input: UpdateSleep_quality_stack1Input!
  ) {
    updateSleep_quality_stack1(
      updateSleep_quality_stack1Input: $updateSleep_quality_stack1Input
    ) {
      id
      formid
      cannot_sleep_thirty
      cough
      bad_dreams
      too_hot
      wake_up
      use_bathroom
      cannot_breathe
    }
  }
`;
export const deleteSleepQualityStack2 = /* GraphQL */ `
  mutation DeleteSleepQualityStack2($id: String!) {
    deleteSleep_quality_stack2(id: $id) {
      id
      formid
      too_cold
      other_reason
      bad_dreams
      pain
    }
  }
`;
export const createSleepQualityStack2 = /* GraphQL */ `
  mutation CreateSleepQualityStack2(
    $createSleep_quality_stack2Input: CreateSleep_quality_stack2Input!
  ) {
    createSleep_quality_stack2(
      createSleep_quality_stack2Input: $createSleep_quality_stack2Input
    ) {
      id
      formid
      too_cold
      other_reason
      bad_dreams
      pain
    }
  }
`;
export const updateSleepQualityStack2 = /* GraphQL */ `
  mutation UpdateSleepQualityStack2(
    $updateSleep_quality_stack2Input: UpdateSleep_quality_stack2Input!
  ) {
    updateSleep_quality_stack2(
      updateSleep_quality_stack2Input: $updateSleep_quality_stack2Input
    ) {
      id
      formid
      too_cold
      other_reason
      bad_dreams
      pain
    }
  }
`;
export const deleteSleepQualityStack3 = /* GraphQL */ `
  mutation DeleteSleepQualityStack3($id: String!) {
    deleteSleep_quality_stack3(id: $id) {
      id
      formid
      taken_medicine
      problem
      trouble_staying_awake
    }
  }
`;
export const createSleepQualityStack3 = /* GraphQL */ `
  mutation CreateSleepQualityStack3(
    $createSleep_quality_stack3Input: CreateSleep_quality_stack3Input!
  ) {
    createSleep_quality_stack3(
      createSleep_quality_stack3Input: $createSleep_quality_stack3Input
    ) {
      id
      formid
      taken_medicine
      problem
      trouble_staying_awake
    }
  }
`;
export const updateSleepQualityStack3 = /* GraphQL */ `
  mutation UpdateSleepQualityStack3(
    $updateSleep_quality_stack3Input: UpdateSleep_quality_stack3Input!
  ) {
    updateSleep_quality_stack3(
      updateSleep_quality_stack3Input: $updateSleep_quality_stack3Input
    ) {
      id
      formid
      taken_medicine
      problem
      trouble_staying_awake
    }
  }
`;
export const deleteSleepQualityStack4 = /* GraphQL */ `
  mutation DeleteSleepQualityStack4($id: String!) {
    deleteSleep_quality_stack4(id: $id) {
      id
      formid
      sleep_quality_overall
    }
  }
`;
export const createSleepQualityStack4 = /* GraphQL */ `
  mutation CreateSleepQualityStack4(
    $createSleep_quality_stack4Input: CreateSleep_quality_stack4Input!
  ) {
    createSleep_quality_stack4(
      createSleep_quality_stack4Input: $createSleep_quality_stack4Input
    ) {
      id
      formid
      sleep_quality_overall
    }
  }
`;
export const updateSleepQualityStack4 = /* GraphQL */ `
  mutation UpdateSleepQualityStack4(
    $updateSleep_quality_stack4Input: UpdateSleep_quality_stack4Input!
  ) {
    updateSleep_quality_stack4(
      updateSleep_quality_stack4Input: $updateSleep_quality_stack4Input
    ) {
      id
      formid
      sleep_quality_overall
    }
  }
`;
export const deleteSocialNetworkStack0 = /* GraphQL */ `
  mutation DeleteSocialNetworkStack0($id: String!) {
    deleteSocial_network_stack0(id: $id) {
      id
      formid
      hours_month_socializing
      different_friends
      hours_week_socializing
    }
  }
`;
export const createSocialNetworkStack0 = /* GraphQL */ `
  mutation CreateSocialNetworkStack0(
    $createSocial_network_stack0Input: CreateSocial_network_stack0Input!
  ) {
    createSocial_network_stack0(
      createSocial_network_stack0Input: $createSocial_network_stack0Input
    ) {
      id
      formid
      hours_month_socializing
      different_friends
      hours_week_socializing
    }
  }
`;
export const updateSocialNetworkStack0 = /* GraphQL */ `
  mutation UpdateSocialNetworkStack0(
    $updateSocial_network_stack0Input: UpdateSocial_network_stack0Input!
  ) {
    updateSocial_network_stack0(
      updateSocial_network_stack0Input: $updateSocial_network_stack0Input
    ) {
      id
      formid
      hours_month_socializing
      different_friends
      hours_week_socializing
    }
  }
`;
export const deleteSocialNetworkStack1 = /* GraphQL */ `
  mutation DeleteSocialNetworkStack1($id: String!) {
    deleteSocial_network_stack1(id: $id) {
      id
      formid
      number_socialize
    }
  }
`;
export const createSocialNetworkStack1 = /* GraphQL */ `
  mutation CreateSocialNetworkStack1(
    $createSocial_network_stack1Input: CreateSocial_network_stack1Input!
  ) {
    createSocial_network_stack1(
      createSocial_network_stack1Input: $createSocial_network_stack1Input
    ) {
      id
      formid
      number_socialize
    }
  }
`;
export const updateSocialNetworkStack1 = /* GraphQL */ `
  mutation UpdateSocialNetworkStack1(
    $updateSocial_network_stack1Input: UpdateSocial_network_stack1Input!
  ) {
    updateSocial_network_stack1(
      updateSocial_network_stack1Input: $updateSocial_network_stack1Input
    ) {
      id
      formid
      number_socialize
    }
  }
`;
export const deleteSocialNetworkStack2 = /* GraphQL */ `
  mutation DeleteSocialNetworkStack2($id: String!) {
    deleteSocial_network_stack2(id: $id) {
      id
      formid
      rely_on_them
      open_up_to_them
      too_many_demands
      argue
    }
  }
`;
export const createSocialNetworkStack2 = /* GraphQL */ `
  mutation CreateSocialNetworkStack2(
    $createSocial_network_stack2Input: CreateSocial_network_stack2Input!
  ) {
    createSocial_network_stack2(
      createSocial_network_stack2Input: $createSocial_network_stack2Input
    ) {
      id
      formid
      rely_on_them
      open_up_to_them
      too_many_demands
      argue
    }
  }
`;
export const updateSocialNetworkStack2 = /* GraphQL */ `
  mutation UpdateSocialNetworkStack2(
    $updateSocial_network_stack2Input: UpdateSocial_network_stack2Input!
  ) {
    updateSocial_network_stack2(
      updateSocial_network_stack2Input: $updateSocial_network_stack2Input
    ) {
      id
      formid
      rely_on_them
      open_up_to_them
      too_many_demands
      argue
    }
  }
`;
export const deleteSocialNetworkStack3 = /* GraphQL */ `
  mutation DeleteSocialNetworkStack3($id: String!) {
    deleteSocial_network_stack3(id: $id) {
      id
      formid
      easy_become_emotionally_close
      want_to_be
    }
  }
`;
export const createSocialNetworkStack3 = /* GraphQL */ `
  mutation CreateSocialNetworkStack3(
    $createSocial_network_stack3Input: CreateSocial_network_stack3Input!
  ) {
    createSocial_network_stack3(
      createSocial_network_stack3Input: $createSocial_network_stack3Input
    ) {
      id
      formid
      easy_become_emotionally_close
      want_to_be
    }
  }
`;
export const updateSocialNetworkStack3 = /* GraphQL */ `
  mutation UpdateSocialNetworkStack3(
    $updateSocial_network_stack3Input: UpdateSocial_network_stack3Input!
  ) {
    updateSocial_network_stack3(
      updateSocial_network_stack3Input: $updateSocial_network_stack3Input
    ) {
      id
      formid
      easy_become_emotionally_close
      want_to_be
    }
  }
`;
export const deleteSocialNetworkStack4 = /* GraphQL */ `
  mutation DeleteSocialNetworkStack4($id: String!) {
    deleteSocial_network_stack4(id: $id) {
      id
      formid
      uncomfortable_getting_close
      comfortable_without
    }
  }
`;
export const createSocialNetworkStack4 = /* GraphQL */ `
  mutation CreateSocialNetworkStack4(
    $createSocial_network_stack4Input: CreateSocial_network_stack4Input!
  ) {
    createSocial_network_stack4(
      createSocial_network_stack4Input: $createSocial_network_stack4Input
    ) {
      id
      formid
      uncomfortable_getting_close
      comfortable_without
    }
  }
`;
export const updateSocialNetworkStack4 = /* GraphQL */ `
  mutation UpdateSocialNetworkStack4(
    $updateSocial_network_stack4Input: UpdateSocial_network_stack4Input!
  ) {
    updateSocial_network_stack4(
      updateSocial_network_stack4Input: $updateSocial_network_stack4Input
    ) {
      id
      formid
      uncomfortable_getting_close
      comfortable_without
    }
  }
`;
export const deleteSocialNetworkStack5 = /* GraphQL */ `
  mutation DeleteSocialNetworkStack5($id: String!) {
    deleteSocial_network_stack5(id: $id) {
      id
      formid
      depend_on_you
      important_to_them
      interested
      miss_you
      pay_attention
    }
  }
`;
export const createSocialNetworkStack5 = /* GraphQL */ `
  mutation CreateSocialNetworkStack5(
    $createSocial_network_stack5Input: CreateSocial_network_stack5Input!
  ) {
    createSocial_network_stack5(
      createSocial_network_stack5Input: $createSocial_network_stack5Input
    ) {
      id
      formid
      depend_on_you
      important_to_them
      interested
      miss_you
      pay_attention
    }
  }
`;
export const updateSocialNetworkStack5 = /* GraphQL */ `
  mutation UpdateSocialNetworkStack5(
    $updateSocial_network_stack5Input: UpdateSocial_network_stack5Input!
  ) {
    updateSocial_network_stack5(
      updateSocial_network_stack5Input: $updateSocial_network_stack5Input
    ) {
      id
      formid
      depend_on_you
      important_to_them
      interested
      miss_you
      pay_attention
    }
  }
`;
export const deleteStressfulLifeExperienceStack0 = /* GraphQL */ `
  mutation DeleteStressfulLifeExperienceStack0($id: String!) {
    deleteStressful_life_experience_stack0(id: $id) {
      id
      formid
      how_old_depression
    }
  }
`;
export const createStressfulLifeExperienceStack0 = /* GraphQL */ `
  mutation CreateStressfulLifeExperienceStack0(
    $createStressful_life_experience_stack0Input: CreateStressful_life_experience_stack0Input!
  ) {
    createStressful_life_experience_stack0(
      createStressful_life_experience_stack0Input: $createStressful_life_experience_stack0Input
    ) {
      id
      formid
      how_old_depression
    }
  }
`;
export const updateStressfulLifeExperienceStack0 = /* GraphQL */ `
  mutation UpdateStressfulLifeExperienceStack0(
    $updateStressful_life_experience_stack0Input: UpdateStressful_life_experience_stack0Input!
  ) {
    updateStressful_life_experience_stack0(
      updateStressful_life_experience_stack0Input: $updateStressful_life_experience_stack0Input
    ) {
      id
      formid
      how_old_depression
    }
  }
`;
export const deleteStressfulLifeExperienceStack1 = /* GraphQL */ `
  mutation DeleteStressfulLifeExperienceStack1($id: String!) {
    deleteStressful_life_experience_stack1(id: $id) {
      id
      formid
      disturbing_memories
      avoided_thinking
      physical_reaction
      avoided_activities
      interfered_with_qol
    }
  }
`;
export const createStressfulLifeExperienceStack1 = /* GraphQL */ `
  mutation CreateStressfulLifeExperienceStack1(
    $createStressful_life_experience_stack1Input: CreateStressful_life_experience_stack1Input!
  ) {
    createStressful_life_experience_stack1(
      createStressful_life_experience_stack1Input: $createStressful_life_experience_stack1Input
    ) {
      id
      formid
      disturbing_memories
      avoided_thinking
      physical_reaction
      avoided_activities
      interfered_with_qol
    }
  }
`;
export const updateStressfulLifeExperienceStack1 = /* GraphQL */ `
  mutation UpdateStressfulLifeExperienceStack1(
    $updateStressful_life_experience_stack1Input: UpdateStressful_life_experience_stack1Input!
  ) {
    updateStressful_life_experience_stack1(
      updateStressful_life_experience_stack1Input: $updateStressful_life_experience_stack1Input
    ) {
      id
      formid
      disturbing_memories
      avoided_thinking
      physical_reaction
      avoided_activities
      interfered_with_qol
    }
  }
`;
export const deleteStressfulLifeExperienceStack2 = /* GraphQL */ `
  mutation DeleteStressfulLifeExperienceStack2($id: String!) {
    deleteStressful_life_experience_stack2(id: $id) {
      id
      formid
      first_time
      years
      months
      days
    }
  }
`;
export const createStressfulLifeExperienceStack2 = /* GraphQL */ `
  mutation CreateStressfulLifeExperienceStack2(
    $createStressful_life_experience_stack2Input: CreateStressful_life_experience_stack2Input!
  ) {
    createStressful_life_experience_stack2(
      createStressful_life_experience_stack2Input: $createStressful_life_experience_stack2Input
    ) {
      id
      formid
      first_time
      years
      months
      days
    }
  }
`;
export const updateStressfulLifeExperienceStack2 = /* GraphQL */ `
  mutation UpdateStressfulLifeExperienceStack2(
    $updateStressful_life_experience_stack2Input: UpdateStressful_life_experience_stack2Input!
  ) {
    updateStressful_life_experience_stack2(
      updateStressful_life_experience_stack2Input: $updateStressful_life_experience_stack2Input
    ) {
      id
      formid
      first_time
      years
      months
      days
    }
  }
`;
export const deleteStressfulLifeExperienceStack3 = /* GraphQL */ `
  mutation DeleteStressfulLifeExperienceStack3($id: String!) {
    deleteStressful_life_experience_stack3(id: $id) {
      id
      formid
      life_threatening
      any_other
      motor_vehicle
      serious_betrayal
      death_close_friend
      serious_legal
      break_up
    }
  }
`;
export const createStressfulLifeExperienceStack3 = /* GraphQL */ `
  mutation CreateStressfulLifeExperienceStack3(
    $createStressful_life_experience_stack3Input: CreateStressful_life_experience_stack3Input!
  ) {
    createStressful_life_experience_stack3(
      createStressful_life_experience_stack3Input: $createStressful_life_experience_stack3Input
    ) {
      id
      formid
      life_threatening
      any_other
      motor_vehicle
      serious_betrayal
      death_close_friend
      serious_legal
      break_up
    }
  }
`;
export const updateStressfulLifeExperienceStack3 = /* GraphQL */ `
  mutation UpdateStressfulLifeExperienceStack3(
    $updateStressful_life_experience_stack3Input: UpdateStressful_life_experience_stack3Input!
  ) {
    updateStressful_life_experience_stack3(
      updateStressful_life_experience_stack3Input: $updateStressful_life_experience_stack3Input
    ) {
      id
      formid
      life_threatening
      any_other
      motor_vehicle
      serious_betrayal
      death_close_friend
      serious_legal
      break_up
    }
  }
`;
export const deleteStressfulLifeExperienceStack4 = /* GraphQL */ `
  mutation DeleteStressfulLifeExperienceStack4($id: String!) {
    deleteStressful_life_experience_stack4(id: $id) {
      id
      formid
      other_stressful_event
      love_life
      career
      friendship
      other_loved_ones
      health
      relationship_family
      health_loved_ones
      life_overall
    }
  }
`;
export const createStressfulLifeExperienceStack4 = /* GraphQL */ `
  mutation CreateStressfulLifeExperienceStack4(
    $createStressful_life_experience_stack4Input: CreateStressful_life_experience_stack4Input!
  ) {
    createStressful_life_experience_stack4(
      createStressful_life_experience_stack4Input: $createStressful_life_experience_stack4Input
    ) {
      id
      formid
      other_stressful_event
      love_life
      career
      friendship
      other_loved_ones
      health
      relationship_family
      health_loved_ones
      life_overall
    }
  }
`;
export const updateStressfulLifeExperienceStack4 = /* GraphQL */ `
  mutation UpdateStressfulLifeExperienceStack4(
    $updateStressful_life_experience_stack4Input: UpdateStressful_life_experience_stack4Input!
  ) {
    updateStressful_life_experience_stack4(
      updateStressful_life_experience_stack4Input: $updateStressful_life_experience_stack4Input
    ) {
      id
      formid
      other_stressful_event
      love_life
      career
      friendship
      other_loved_ones
      health
      relationship_family
      health_loved_ones
      life_overall
    }
  }
`;
export const deleteStressfulLifeExperienceStack5 = /* GraphQL */ `
  mutation DeleteStressfulLifeExperienceStack5($id: String!) {
    deleteStressful_life_experience_stack5(id: $id) {
      id
      formid
      keep_calm
      get_along
      manage_stress
      sense_humor
      new_approaches
    }
  }
`;
export const createStressfulLifeExperienceStack5 = /* GraphQL */ `
  mutation CreateStressfulLifeExperienceStack5(
    $createStressful_life_experience_stack5Input: CreateStressful_life_experience_stack5Input!
  ) {
    createStressful_life_experience_stack5(
      createStressful_life_experience_stack5Input: $createStressful_life_experience_stack5Input
    ) {
      id
      formid
      keep_calm
      get_along
      manage_stress
      sense_humor
      new_approaches
    }
  }
`;
export const updateStressfulLifeExperienceStack5 = /* GraphQL */ `
  mutation UpdateStressfulLifeExperienceStack5(
    $updateStressful_life_experience_stack5Input: UpdateStressful_life_experience_stack5Input!
  ) {
    updateStressful_life_experience_stack5(
      updateStressful_life_experience_stack5Input: $updateStressful_life_experience_stack5Input
    ) {
      id
      formid
      keep_calm
      get_along
      manage_stress
      sense_humor
      new_approaches
    }
  }
`;
export const deleteStressfulLifeExperienceStack6 = /* GraphQL */ `
  mutation DeleteStressfulLifeExperienceStack6($id: String!) {
    deleteStressful_life_experience_stack6(id: $id) {
      id
      formid
      promotion
      health_major
      finances
      love_life
      other_positive
    }
  }
`;
export const createStressfulLifeExperienceStack6 = /* GraphQL */ `
  mutation CreateStressfulLifeExperienceStack6(
    $createStressful_life_experience_stack6Input: CreateStressful_life_experience_stack6Input!
  ) {
    createStressful_life_experience_stack6(
      createStressful_life_experience_stack6Input: $createStressful_life_experience_stack6Input
    ) {
      id
      formid
      promotion
      health_major
      finances
      love_life
      other_positive
    }
  }
`;
export const updateStressfulLifeExperienceStack6 = /* GraphQL */ `
  mutation UpdateStressfulLifeExperienceStack6(
    $updateStressful_life_experience_stack6Input: UpdateStressful_life_experience_stack6Input!
  ) {
    updateStressful_life_experience_stack6(
      updateStressful_life_experience_stack6Input: $updateStressful_life_experience_stack6Input
    ) {
      id
      formid
      promotion
      health_major
      finances
      love_life
      other_positive
    }
  }
`;
export const deleteYourHealthStack0 = /* GraphQL */ `
  mutation DeleteYourHealthStack0($id: String!) {
    deleteYour_health_stack0(id: $id) {
      id
      formid
      feet_height
      weight
    }
  }
`;
export const createYourHealthStack0 = /* GraphQL */ `
  mutation CreateYourHealthStack0(
    $createYour_health_stack0Input: CreateYour_health_stack0Input!
  ) {
    createYour_health_stack0(
      createYour_health_stack0Input: $createYour_health_stack0Input
    ) {
      id
      formid
      feet_height
      weight
    }
  }
`;
export const updateYourHealthStack0 = /* GraphQL */ `
  mutation UpdateYourHealthStack0(
    $updateYour_health_stack0Input: UpdateYour_health_stack0Input!
  ) {
    updateYour_health_stack0(
      updateYour_health_stack0Input: $updateYour_health_stack0Input
    ) {
      id
      formid
      feet_height
      weight
    }
  }
`;
export const deleteYourHealthStack1 = /* GraphQL */ `
  mutation DeleteYourHealthStack1($id: String!) {
    deleteYour_health_stack1(id: $id) {
      id
      formid
      clotting
      high_blood_pressure
      heart_attack
      high_cholesterol
      any_other_cvd
      asthma
      copd
      seasonal_allergies
      osteoarthritis
      rheumatoid_arthritis
      osteoporosis
      add_adhd
      depression
      manic_disorder
      panic_disorder
      ptsd
      substance_abuse
      any_other_psych
      skin_cancer
      any_other_cancer
    }
  }
`;
export const createYourHealthStack1 = /* GraphQL */ `
  mutation CreateYourHealthStack1(
    $createYour_health_stack1Input: CreateYour_health_stack1Input!
  ) {
    createYour_health_stack1(
      createYour_health_stack1Input: $createYour_health_stack1Input
    ) {
      id
      formid
      clotting
      high_blood_pressure
      heart_attack
      high_cholesterol
      any_other_cvd
      asthma
      copd
      seasonal_allergies
      osteoarthritis
      rheumatoid_arthritis
      osteoporosis
      add_adhd
      depression
      manic_disorder
      panic_disorder
      ptsd
      substance_abuse
      any_other_psych
      skin_cancer
      any_other_cancer
    }
  }
`;
export const updateYourHealthStack1 = /* GraphQL */ `
  mutation UpdateYourHealthStack1(
    $updateYour_health_stack1Input: UpdateYour_health_stack1Input!
  ) {
    updateYour_health_stack1(
      updateYour_health_stack1Input: $updateYour_health_stack1Input
    ) {
      id
      formid
      clotting
      high_blood_pressure
      heart_attack
      high_cholesterol
      any_other_cvd
      asthma
      copd
      seasonal_allergies
      osteoarthritis
      rheumatoid_arthritis
      osteoporosis
      add_adhd
      depression
      manic_disorder
      panic_disorder
      ptsd
      substance_abuse
      any_other_psych
      skin_cancer
      any_other_cancer
    }
  }
`;
export const deleteYourHealthStack2 = /* GraphQL */ `
  mutation DeleteYourHealthStack2($id: String!) {
    deleteYour_health_stack2(id: $id) {
      id
      formid
      autoimmune_disorder
      inflammatory_skin_disorder
      diabetes_insulin_dependant
      diabetes_non_insulin_dependant
      migraine
      ulcer_stomach
      acid_reflux
      thyroid_disorder
      chronic_pain
      none
    }
  }
`;
export const createYourHealthStack2 = /* GraphQL */ `
  mutation CreateYourHealthStack2(
    $createYour_health_stack2Input: CreateYour_health_stack2Input!
  ) {
    createYour_health_stack2(
      createYour_health_stack2Input: $createYour_health_stack2Input
    ) {
      id
      formid
      autoimmune_disorder
      inflammatory_skin_disorder
      diabetes_insulin_dependant
      diabetes_non_insulin_dependant
      migraine
      ulcer_stomach
      acid_reflux
      thyroid_disorder
      chronic_pain
      none
    }
  }
`;
export const updateYourHealthStack2 = /* GraphQL */ `
  mutation UpdateYourHealthStack2(
    $updateYour_health_stack2Input: UpdateYour_health_stack2Input!
  ) {
    updateYour_health_stack2(
      updateYour_health_stack2Input: $updateYour_health_stack2Input
    ) {
      id
      formid
      autoimmune_disorder
      inflammatory_skin_disorder
      diabetes_insulin_dependant
      diabetes_non_insulin_dependant
      migraine
      ulcer_stomach
      acid_reflux
      thyroid_disorder
      chronic_pain
      none
    }
  }
`;
export const deleteYourHealthStack3 = /* GraphQL */ `
  mutation DeleteYourHealthStack3($id: String!) {
    deleteYour_health_stack3(id: $id) {
      id
      formid
      dizziness
      shortness_of_breath
      heart_pound
      restless_tense
      anxious_nervous
      irritable_annoyed
    }
  }
`;
export const createYourHealthStack3 = /* GraphQL */ `
  mutation CreateYourHealthStack3(
    $createYour_health_stack3Input: CreateYour_health_stack3Input!
  ) {
    createYour_health_stack3(
      createYour_health_stack3Input: $createYour_health_stack3Input
    ) {
      id
      formid
      dizziness
      shortness_of_breath
      heart_pound
      restless_tense
      anxious_nervous
      irritable_annoyed
    }
  }
`;
export const updateYourHealthStack3 = /* GraphQL */ `
  mutation UpdateYourHealthStack3(
    $updateYour_health_stack3Input: UpdateYour_health_stack3Input!
  ) {
    updateYour_health_stack3(
      updateYour_health_stack3Input: $updateYour_health_stack3Input
    ) {
      id
      formid
      dizziness
      shortness_of_breath
      heart_pound
      restless_tense
      anxious_nervous
      irritable_annoyed
    }
  }
`;
export const deleteYourHealthStack4 = /* GraphQL */ `
  mutation DeleteYourHealthStack4($id: String!) {
    deleteYour_health_stack4(id: $id) {
      id
      formid
      memory
      talking_slow
      heart_pound
      difficulty_concentrating
      sleeping_problems
      constipation
      nausea
    }
  }
`;
export const createYourHealthStack4 = /* GraphQL */ `
  mutation CreateYourHealthStack4(
    $createYour_health_stack4Input: CreateYour_health_stack4Input!
  ) {
    createYour_health_stack4(
      createYour_health_stack4Input: $createYour_health_stack4Input
    ) {
      id
      formid
      memory
      talking_slow
      heart_pound
      difficulty_concentrating
      sleeping_problems
      constipation
      nausea
    }
  }
`;
export const updateYourHealthStack4 = /* GraphQL */ `
  mutation UpdateYourHealthStack4(
    $updateYour_health_stack4Input: UpdateYour_health_stack4Input!
  ) {
    updateYour_health_stack4(
      updateYour_health_stack4Input: $updateYour_health_stack4Input
    ) {
      id
      formid
      memory
      talking_slow
      heart_pound
      difficulty_concentrating
      sleeping_problems
      constipation
      nausea
    }
  }
`;
export const deleteYourHealthStack5 = /* GraphQL */ `
  mutation DeleteYourHealthStack5($id: String!) {
    deleteYour_health_stack5(id: $id) {
      id
      formid
      back_pain
      neck_pain
      stomach_pain
      chest_pain
      headache
      uncontrollable_anxiety
    }
  }
`;
export const createYourHealthStack5 = /* GraphQL */ `
  mutation CreateYourHealthStack5(
    $createYour_health_stack5Input: CreateYour_health_stack5Input!
  ) {
    createYour_health_stack5(
      createYour_health_stack5Input: $createYour_health_stack5Input
    ) {
      id
      formid
      back_pain
      neck_pain
      stomach_pain
      chest_pain
      headache
      uncontrollable_anxiety
    }
  }
`;
export const updateYourHealthStack5 = /* GraphQL */ `
  mutation UpdateYourHealthStack5(
    $updateYour_health_stack5Input: UpdateYour_health_stack5Input!
  ) {
    updateYour_health_stack5(
      updateYour_health_stack5Input: $updateYour_health_stack5Input
    ) {
      id
      formid
      back_pain
      neck_pain
      stomach_pain
      chest_pain
      headache
      uncontrollable_anxiety
    }
  }
`;
export const deleteYourHealthStack6 = /* GraphQL */ `
  mutation DeleteYourHealthStack6($id: String!) {
    deleteYour_health_stack6(id: $id) {
      id
      formid
      how_long_sleep_problems
      hours_sleep
      energy_scale
    }
  }
`;
export const createYourHealthStack6 = /* GraphQL */ `
  mutation CreateYourHealthStack6(
    $createYour_health_stack6Input: CreateYour_health_stack6Input!
  ) {
    createYour_health_stack6(
      createYour_health_stack6Input: $createYour_health_stack6Input
    ) {
      id
      formid
      how_long_sleep_problems
      hours_sleep
      energy_scale
    }
  }
`;
export const updateYourHealthStack6 = /* GraphQL */ `
  mutation UpdateYourHealthStack6(
    $updateYour_health_stack6Input: UpdateYour_health_stack6Input!
  ) {
    updateYour_health_stack6(
      updateYour_health_stack6Input: $updateYour_health_stack6Input
    ) {
      id
      formid
      how_long_sleep_problems
      hours_sleep
      energy_scale
    }
  }
`;
export const deleteYourHealthStack7 = /* GraphQL */ `
  mutation DeleteYourHealthStack7($id: String!) {
    deleteYour_health_stack7(id: $id) {
      id
      formid
      how_long_headaches
      how_long_pain
      pain_scale
    }
  }
`;
export const createYourHealthStack7 = /* GraphQL */ `
  mutation CreateYourHealthStack7(
    $createYour_health_stack7Input: CreateYour_health_stack7Input!
  ) {
    createYour_health_stack7(
      createYour_health_stack7Input: $createYour_health_stack7Input
    ) {
      id
      formid
      how_long_headaches
      how_long_pain
      pain_scale
    }
  }
`;
export const updateYourHealthStack7 = /* GraphQL */ `
  mutation UpdateYourHealthStack7(
    $updateYour_health_stack7Input: UpdateYour_health_stack7Input!
  ) {
    updateYour_health_stack7(
      updateYour_health_stack7Input: $updateYour_health_stack7Input
    ) {
      id
      formid
      how_long_headaches
      how_long_pain
      pain_scale
    }
  }
`;
export const deleteYourHealthStack8 = /* GraphQL */ `
  mutation DeleteYourHealthStack8($id: String!) {
    deleteYour_health_stack8(id: $id) {
      id
      formid
      home_management
      ability_work
      close_relationships
      social
      quality_of_work
    }
  }
`;
export const createYourHealthStack8 = /* GraphQL */ `
  mutation CreateYourHealthStack8(
    $createYour_health_stack8Input: CreateYour_health_stack8Input!
  ) {
    createYour_health_stack8(
      createYour_health_stack8Input: $createYour_health_stack8Input
    ) {
      id
      formid
      home_management
      ability_work
      close_relationships
      social
      quality_of_work
    }
  }
`;
export const updateYourHealthStack8 = /* GraphQL */ `
  mutation UpdateYourHealthStack8(
    $updateYour_health_stack8Input: UpdateYour_health_stack8Input!
  ) {
    updateYour_health_stack8(
      updateYour_health_stack8Input: $updateYour_health_stack8Input
    ) {
      id
      formid
      home_management
      ability_work
      close_relationships
      social
      quality_of_work
    }
  }
`;
export const deleteYourHealthStack9 = /* GraphQL */ `
  mutation DeleteYourHealthStack9($id: String!) {
    deleteYour_health_stack9(id: $id) {
      id
      formid
      unable_to_work
      cut_back_work
    }
  }
`;
export const createYourHealthStack9 = /* GraphQL */ `
  mutation CreateYourHealthStack9(
    $createYour_health_stack9Input: CreateYour_health_stack9Input!
  ) {
    createYour_health_stack9(
      createYour_health_stack9Input: $createYour_health_stack9Input
    ) {
      id
      formid
      unable_to_work
      cut_back_work
    }
  }
`;
export const updateYourHealthStack9 = /* GraphQL */ `
  mutation UpdateYourHealthStack9(
    $updateYour_health_stack9Input: UpdateYour_health_stack9Input!
  ) {
    updateYour_health_stack9(
      updateYour_health_stack9Input: $updateYour_health_stack9Input
    ) {
      id
      formid
      unable_to_work
      cut_back_work
    }
  }
`;
export const deleteYourPersonalityStack0 = /* GraphQL */ `
  mutation DeleteYourPersonalityStack0($id: String!) {
    deleteYour_personality_stack0(id: $id) {
      id
      formid
      reserved
      broad_minded
      helpful
      outgoing
      moody
      critical
      adventerous
    }
  }
`;
export const createYourPersonalityStack0 = /* GraphQL */ `
  mutation CreateYourPersonalityStack0(
    $createYour_personality_stack0Input: CreateYour_personality_stack0Input!
  ) {
    createYour_personality_stack0(
      createYour_personality_stack0Input: $createYour_personality_stack0Input
    ) {
      id
      formid
      reserved
      broad_minded
      helpful
      outgoing
      moody
      critical
      adventerous
    }
  }
`;
export const updateYourPersonalityStack0 = /* GraphQL */ `
  mutation UpdateYourPersonalityStack0(
    $updateYour_personality_stack0Input: UpdateYour_personality_stack0Input!
  ) {
    updateYour_personality_stack0(
      updateYour_personality_stack0Input: $updateYour_personality_stack0Input
    ) {
      id
      formid
      reserved
      broad_minded
      helpful
      outgoing
      moody
      critical
      adventerous
    }
  }
`;
export const deleteYourPersonalityStack1 = /* GraphQL */ `
  mutation DeleteYourPersonalityStack1($id: String!) {
    deleteYour_personality_stack1(id: $id) {
      id
      formid
      soft_hearted
      calm
      creative
      outgsensitive
      organized
      friendly
    }
  }
`;
export const createYourPersonalityStack1 = /* GraphQL */ `
  mutation CreateYourPersonalityStack1(
    $createYour_personality_stack1Input: CreateYour_personality_stack1Input!
  ) {
    createYour_personality_stack1(
      createYour_personality_stack1Input: $createYour_personality_stack1Input
    ) {
      id
      formid
      soft_hearted
      calm
      creative
      outgsensitive
      organized
      friendly
    }
  }
`;
export const updateYourPersonalityStack1 = /* GraphQL */ `
  mutation UpdateYourPersonalityStack1(
    $updateYour_personality_stack1Input: UpdateYour_personality_stack1Input!
  ) {
    updateYour_personality_stack1(
      updateYour_personality_stack1Input: $updateYour_personality_stack1Input
    ) {
      id
      formid
      soft_hearted
      calm
      creative
      outgsensitive
      organized
      friendly
    }
  }
`;
export const deleteYourPersonalityStack2 = /* GraphQL */ `
  mutation DeleteYourPersonalityStack2($id: String!) {
    deleteYour_personality_stack2(id: $id) {
      id
      formid
      careless
      talkative
      uncompassionate
      easily_upset
      sympathetic
      curious
    }
  }
`;
export const createYourPersonalityStack2 = /* GraphQL */ `
  mutation CreateYourPersonalityStack2(
    $createYour_personality_stack2Input: CreateYour_personality_stack2Input!
  ) {
    createYour_personality_stack2(
      createYour_personality_stack2Input: $createYour_personality_stack2Input
    ) {
      id
      formid
      careless
      talkative
      uncompassionate
      easily_upset
      sympathetic
      curious
    }
  }
`;
export const updateYourPersonalityStack2 = /* GraphQL */ `
  mutation UpdateYourPersonalityStack2(
    $updateYour_personality_stack2Input: UpdateYour_personality_stack2Input!
  ) {
    updateYour_personality_stack2(
      updateYour_personality_stack2Input: $updateYour_personality_stack2Input
    ) {
      id
      formid
      careless
      talkative
      uncompassionate
      easily_upset
      sympathetic
      curious
    }
  }
`;
export const deleteYourPersonalityStack3 = /* GraphQL */ `
  mutation DeleteYourPersonalityStack3($id: String!) {
    deleteYour_personality_stack3(id: $id) {
      id
      formid
      interests
      direction
      opinions
      think_a_lot
      do_a_lot
    }
  }
`;
export const createYourPersonalityStack3 = /* GraphQL */ `
  mutation CreateYourPersonalityStack3(
    $createYour_personality_stack3Input: CreateYour_personality_stack3Input!
  ) {
    createYour_personality_stack3(
      createYour_personality_stack3Input: $createYour_personality_stack3Input
    ) {
      id
      formid
      interests
      direction
      opinions
      think_a_lot
      do_a_lot
    }
  }
`;
export const updateYourPersonalityStack3 = /* GraphQL */ `
  mutation UpdateYourPersonalityStack3(
    $updateYour_personality_stack3Input: UpdateYour_personality_stack3Input!
  ) {
    updateYour_personality_stack3(
      updateYour_personality_stack3Input: $updateYour_personality_stack3Input
    ) {
      id
      formid
      interests
      direction
      opinions
      think_a_lot
      do_a_lot
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
      form {
        id
        formQuestions {
          items {
            id
            response
            createdAt
            updatedAt
          }
          nextToken
        }
        UserID
        finished
        percentage
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
      form {
        id
        formQuestions {
          items {
            id
            response
            createdAt
            updatedAt
          }
          nextToken
        }
        UserID
        finished
        percentage
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
      form {
        id
        formQuestions {
          items {
            id
            response
            createdAt
            updatedAt
          }
          nextToken
        }
        UserID
        finished
        percentage
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
  }
`;
