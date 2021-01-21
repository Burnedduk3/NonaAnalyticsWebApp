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
        nextToken
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
        nextToken
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
        nextToken
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
