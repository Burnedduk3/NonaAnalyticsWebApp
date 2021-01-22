/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDemographicInfo = /* GraphQL */ `
  query GetDemographicInfo($id: Int!) {
    getDemographicInfo(id: $id) {
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
export const listDemographicInfos = /* GraphQL */ `
  query ListDemographicInfos {
    listDemographicInfos {
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
export const getEmployment = /* GraphQL */ `
  query GetEmployment($userid: String!) {
    getEmployment(userid: $userid) {
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
export const listEmployments = /* GraphQL */ `
  query ListEmployments {
    listEmployments {
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
export const getHealthBehaviors = /* GraphQL */ `
  query GetHealthBehaviors($userid: String!) {
    getHealthBehaviors(userid: $userid) {
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
export const listHealthBehaviorss = /* GraphQL */ `
  query ListHealthBehaviorss {
    listHealthBehaviorss {
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
export const getHealthBehaviors2 = /* GraphQL */ `
  query GetHealthBehaviors2($userid: String!) {
    getHealthBehaviors2(userid: $userid) {
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
export const listHealthBehaviors2s = /* GraphQL */ `
  query ListHealthBehaviors2s {
    listHealthBehaviors2s {
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
export const getHighMood = /* GraphQL */ `
  query GetHighMood($userid: String!) {
    getHighMood(userid: $userid) {
      h2_high_mood_episode
      h3_mood_higher_usual
      h3_irritable_usual
      h3_hyper
      h3_thoughts_race
      userid
    }
  }
`;
export const listHighMoods = /* GraphQL */ `
  query ListHighMoods {
    listHighMoods {
      h2_high_mood_episode
      h3_mood_higher_usual
      h3_irritable_usual
      h3_hyper
      h3_thoughts_race
      userid
    }
  }
`;
export const getLowMood = /* GraphQL */ `
  query GetLowMood($userid: String!) {
    getLowMood(userid: $userid) {
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
export const listLowMoods = /* GraphQL */ `
  query ListLowMoods {
    listLowMoods {
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
export const getNeighborhood = /* GraphQL */ `
  query GetNeighborhood($userid: String!) {
    getNeighborhood(userid: $userid) {
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
export const listNeighborhoods = /* GraphQL */ `
  query ListNeighborhoods {
    listNeighborhoods {
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
export const getOralHealth = /* GraphQL */ `
  query GetOralHealth($userid: String!) {
    getOralHealth(userid: $userid) {
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
export const listOralHealths = /* GraphQL */ `
  query ListOralHealths {
    listOralHealths {
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
export const getPets = /* GraphQL */ `
  query GetPets($userid: String!) {
    getPets(userid: $userid) {
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
export const listPetss = /* GraphQL */ `
  query ListPetss {
    listPetss {
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
export const getQualityOfLife = /* GraphQL */ `
  query GetQualityOfLife($userid: String!) {
    getQualityOfLife(userid: $userid) {
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
export const listQualityOfLifes = /* GraphQL */ `
  query ListQualityOfLifes {
    listQualityOfLifes {
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
export const getReligiousness = /* GraphQL */ `
  query GetReligiousness($userid: String!) {
    getReligiousness(userid: $userid) {
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
export const listReligiousnesss = /* GraphQL */ `
  query ListReligiousnesss {
    listReligiousnesss {
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
export const getSleepQualityIndex = /* GraphQL */ `
  query GetSleepQualityIndex($userid: String!) {
    getSleepQualityIndex(userid: $userid) {
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
export const listSleepQualityIndexs = /* GraphQL */ `
  query ListSleepQualityIndexs {
    listSleepQualityIndexs {
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
export const getSocialNetworks = /* GraphQL */ `
  query GetSocialNetworks($userid: String!) {
    getSocialNetworks(userid: $userid) {
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
export const listSocialNetworkss = /* GraphQL */ `
  query ListSocialNetworkss {
    listSocialNetworkss {
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
export const getStressfulLifeExperiences = /* GraphQL */ `
  query GetStressfulLifeExperiences($userid: String!) {
    getStressfulLifeExperiences(userid: $userid) {
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
export const listStressfulLifeExperiencess = /* GraphQL */ `
  query ListStressfulLifeExperiencess {
    listStressfulLifeExperiencess {
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
export const getTimeUse = /* GraphQL */ `
  query GetTimeUse($userid: String!) {
    getTimeUse(userid: $userid) {
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
export const listTimeUses = /* GraphQL */ `
  query ListTimeUses {
    listTimeUses {
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
export const getUserinfo = /* GraphQL */ `
  query GetUserinfo($id: Int!) {
    getUSERINFO(id: $id) {
      id
      name
      phone
      email
    }
  }
`;
export const listUserinfOs = /* GraphQL */ `
  query ListUserinfOs {
    listUSERINFOs {
      id
      name
      phone
      email
    }
  }
`;
export const getYourHealth = /* GraphQL */ `
  query GetYourHealth($userid: String!) {
    getYourHealth(userid: $userid) {
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
export const listYourHealths = /* GraphQL */ `
  query ListYourHealths {
    listYourHealths {
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
export const getYourPersonality = /* GraphQL */ `
  query GetYourPersonality($userid: String!) {
    getYourPersonality(userid: $userid) {
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
export const listYourPersonalitys = /* GraphQL */ `
  query ListYourPersonalitys {
    listYourPersonalitys {
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
export const getCustomers = /* GraphQL */ `
  query GetCustomers($id: Int!) {
    getCustomers(id: $id) {
      id
      name
      phone
      email
    }
  }
`;
export const listCustomerss = /* GraphQL */ `
  query ListCustomerss {
    listCustomerss {
      id
      name
      phone
      email
    }
  }
`;
export const getDemographicsStack0 = /* GraphQL */ `
  query GetDemographicsStack0($id: String!) {
    getDemographics_stack0(id: $id) {
      id
      form_id
      born_in_US
      what_state_or_territory
      how_many_years_in_florida
    }
  }
`;
export const listDemographicsStack0s = /* GraphQL */ `
  query ListDemographicsStack0s {
    listDemographics_stack0s {
      id
      form_id
      born_in_US
      what_state_or_territory
      how_many_years_in_florida
    }
  }
`;
export const getDemographicsStack1 = /* GraphQL */ `
  query GetDemographicsStack1($id: String!) {
    getDemographics_stack1(id: $id) {
      are_you_spanish_latino
      select_all_that_apply
      id
      formid
      what_is_your_race
    }
  }
`;
export const listDemographicsStack1s = /* GraphQL */ `
  query ListDemographicsStack1s {
    listDemographics_stack1s {
      are_you_spanish_latino
      select_all_that_apply
      id
      formid
      what_is_your_race
    }
  }
`;
export const getDemographicsStack2 = /* GraphQL */ `
  query GetDemographicsStack2($id: String!) {
    getDemographics_stack2(id: $id) {
      id
      formid
      highest_level_education
    }
  }
`;
export const listDemographicsStack2s = /* GraphQL */ `
  query ListDemographicsStack2s {
    listDemographics_stack2s {
      id
      formid
      highest_level_education
    }
  }
`;
export const getDemographicsStack3 = /* GraphQL */ `
  query GetDemographicsStack3($id: String!) {
    getDemographics_stack3(id: $id) {
      id
      formid
      marital_status
      living_marriage_like
    }
  }
`;
export const listDemographicsStack3s = /* GraphQL */ `
  query ListDemographicsStack3s {
    listDemographics_stack3s {
      id
      formid
      marital_status
      living_marriage_like
    }
  }
`;
export const getDemographicsStack4 = /* GraphQL */ `
  query GetDemographicsStack4($id: String!) {
    getDemographics_stack4(id: $id) {
      id
      formid
      bio_children
      step_children
      children_0_to_17
    }
  }
`;
export const listDemographicsStack4s = /* GraphQL */ `
  query ListDemographicsStack4s {
    listDemographics_stack4s {
      id
      formid
      bio_children
      step_children
      children_0_to_17
    }
  }
`;
export const getDemographicsStack5 = /* GraphQL */ `
  query GetDemographicsStack5($id: String!) {
    getDemographics_stack5(id: $id) {
      id
      formid
      gender
      currently_pregnant
    }
  }
`;
export const listDemographicsStack5s = /* GraphQL */ `
  query ListDemographicsStack5s {
    listDemographics_stack5s {
      id
      formid
      gender
      currently_pregnant
    }
  }
`;
export const getEmploymentStack0 = /* GraphQL */ `
  query GetEmploymentStack0($id: String!) {
    getEmployment_stack0(id: $id) {
      id
      formid
      emp_status
      type_work
      commute_work
      commute_int
    }
  }
`;
export const listEmploymentStack0s = /* GraphQL */ `
  query ListEmploymentStack0s {
    listEmployment_stack0s {
      id
      formid
      emp_status
      type_work
      commute_work
      commute_int
    }
  }
`;
export const getEmploymentStack1 = /* GraphQL */ `
  query GetEmploymentStack1($id: String!) {
    getEmployment_stack1(id: $id) {
      id
      formid
      hours_work_week
      hours_typical
      hours_per_day
    }
  }
`;
export const listEmploymentStack1s = /* GraphQL */ `
  query ListEmploymentStack1s {
    listEmployment_stack1s {
      id
      formid
      hours_work_week
      hours_typical
      hours_per_day
    }
  }
`;
export const getEmploymentStack2 = /* GraphQL */ `
  query GetEmploymentStack2($id: String!) {
    getEmployment_stack2(id: $id) {
      id
      formid
      people_under_supervision
      weeks_missed_work
      hours_week_missed
    }
  }
`;
export const listEmploymentStack2s = /* GraphQL */ `
  query ListEmploymentStack2s {
    listEmployment_stack2s {
      id
      formid
      people_under_supervision
      weeks_missed_work
      hours_week_missed
    }
  }
`;
export const getEmploymentStack3 = /* GraphQL */ `
  query GetEmploymentStack3($id: String!) {
    getEmployment_stack3(id: $id) {
      id
      formid
      hours_worked
      health_suffered
    }
  }
`;
export const listEmploymentStack3s = /* GraphQL */ `
  query ListEmploymentStack3s {
    listEmployment_stack3s {
      id
      formid
      hours_worked
      health_suffered
    }
  }
`;
export const getHealthBehavior2Stack0 = /* GraphQL */ `
  query GetHealthBehavior2Stack0($id: String!) {
    getHealth_behavior2_stack0(id: $id) {
      id
      formid
      days_tobacco
      days_nicotine
      days_nicotine2
      how_many_tobacco
    }
  }
`;
export const listHealthBehavior2Stack0s = /* GraphQL */ `
  query ListHealthBehavior2Stack0s {
    listHealth_behavior2_stack0s {
      id
      formid
      days_tobacco
      days_nicotine
      days_nicotine2
      how_many_tobacco
    }
  }
`;
export const getHealthBehavior2Stack1 = /* GraphQL */ `
  query GetHealthBehavior2Stack1($id: String!) {
    getHealth_behavior2_stack1(id: $id) {
      id
      formid
      days_week_alcohol
      how_many_drinks
      skin_in_sun
    }
  }
`;
export const listHealthBehavior2Stack1s = /* GraphQL */ `
  query ListHealthBehavior2Stack1s {
    listHealth_behavior2_stack1s {
      id
      formid
      days_week_alcohol
      how_many_drinks
      skin_in_sun
    }
  }
`;
export const getHealthBehavior2Stack2 = /* GraphQL */ `
  query GetHealthBehavior2Stack2($id: String!) {
    getHealth_behavior2_stack2(id: $id) {
      id
      formid
      avoid_sun
      sunscreen_spf15
      protective_clothing
    }
  }
`;
export const listHealthBehavior2Stack2s = /* GraphQL */ `
  query ListHealthBehavior2Stack2s {
    listHealth_behavior2_stack2s {
      id
      formid
      avoid_sun
      sunscreen_spf15
      protective_clothing
    }
  }
`;
export const getHealthBehavior2Stack3 = /* GraphQL */ `
  query GetHealthBehavior2Stack3($id: String!) {
    getHealth_behavior2_stack3(id: $id) {
      id
      formid
      vigorous_exercise
      moderate_exervise
    }
  }
`;
export const listHealthBehavior2Stack3s = /* GraphQL */ `
  query ListHealthBehavior2Stack3s {
    listHealth_behavior2_stack3s {
      id
      formid
      vigorous_exercise
      moderate_exervise
    }
  }
`;
export const getHealthBehavior2Stack4 = /* GraphQL */ `
  query GetHealthBehavior2Stack4($id: String!) {
    getHealth_behavior2_stack4(id: $id) {
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
export const listHealthBehavior2Stack4s = /* GraphQL */ `
  query ListHealthBehavior2Stack4s {
    listHealth_behavior2_stack4s {
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
export const getHealthBehavior2Stack5 = /* GraphQL */ `
  query GetHealthBehavior2Stack5($id: String!) {
    getHealth_behavior2_stack5(id: $id) {
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
export const listHealthBehavior2Stack5s = /* GraphQL */ `
  query ListHealthBehavior2Stack5s {
    listHealth_behavior2_stack5s {
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
export const getHealthBehavior2Stack6 = /* GraphQL */ `
  query GetHealthBehavior2Stack6($id: String!) {
    getHealth_behavior2_stack6(id: $id) {
      id
      formid
      wshc
      time_relax
      volunteer_work
      spend_leisure_hours
    }
  }
`;
export const listHealthBehavior2Stack6s = /* GraphQL */ `
  query ListHealthBehavior2Stack6s {
    listHealth_behavior2_stack6s {
      id
      formid
      wshc
      time_relax
      volunteer_work
      spend_leisure_hours
    }
  }
`;
export const getHealthBehaviorsStack0 = /* GraphQL */ `
  query GetHealthBehaviorsStack0($id: String!) {
    getHealth_behaviors_stack0(id: $id) {
      id
      formid
      regular_doctor
      how_many_visits
      different_perscription
    }
  }
`;
export const listHealthBehaviorsStack0s = /* GraphQL */ `
  query ListHealthBehaviorsStack0s {
    listHealth_behaviors_stack0s {
      id
      formid
      regular_doctor
      how_many_visits
      different_perscription
    }
  }
`;
export const getHealthBehaviorsStack1 = /* GraphQL */ `
  query GetHealthBehaviorsStack1($id: String!) {
    getHealth_behaviors_stack1(id: $id) {
      id
      formid
      birth_control
      perscriped_opioid
      dietary_vitamins
    }
  }
`;
export const listHealthBehaviorsStack1s = /* GraphQL */ `
  query ListHealthBehaviorsStack1s {
    listHealth_behaviors_stack1s {
      id
      formid
      birth_control
      perscriped_opioid
      dietary_vitamins
    }
  }
`;
export const getHighMoodStack0 = /* GraphQL */ `
  query GetHighMoodStack0($id: String!) {
    getHigh_mood_stack0(id: $id) {
      id
      formid
      high_mood_episode
    }
  }
`;
export const listHighMoodStack0s = /* GraphQL */ `
  query ListHighMoodStack0s {
    listHigh_mood_stack0s {
      id
      formid
      high_mood_episode
    }
  }
`;
export const getHighMoodStack1 = /* GraphQL */ `
  query GetHighMoodStack1($id: String!) {
    getHigh_mood_stack1(id: $id) {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const listHighMoodStack1s = /* GraphQL */ `
  query ListHighMoodStack1s {
    listHigh_mood_stack1s {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const getHighMoodStack2 = /* GraphQL */ `
  query GetHighMoodStack2($id: String!) {
    getHigh_mood_stack2(id: $id) {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const listHighMoodStack2s = /* GraphQL */ `
  query ListHighMoodStack2s {
    listHigh_mood_stack2s {
      id
      formid
      higher_mood_usual
      hyper
      thoughts_raced
      more_irritable
    }
  }
`;
export const getLakeNonaStack0 = /* GraphQL */ `
  query GetLakeNonaStack0($id: String!) {
    getLakeNona_stack0(id: $id) {
      id
      form_id
      live_in
      play_in
      study_in
      work_in
    }
  }
`;
export const listLakeNonaStack0s = /* GraphQL */ `
  query ListLakeNonaStack0s {
    listLakeNona_stack0s {
      id
      form_id
      live_in
      play_in
      study_in
      work_in
    }
  }
`;
export const getLowMoodStack0 = /* GraphQL */ `
  query GetLowMoodStack0($id: String!) {
    getLow_mood_stack0(id: $id) {
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
export const listLowMoodStack0s = /* GraphQL */ `
  query ListLowMoodStack0s {
    listLow_mood_stack0s {
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
export const getLowMoodStack1 = /* GraphQL */ `
  query GetLowMoodStack1($id: String!) {
    getLow_mood_stack1(id: $id) {
      id
      formid
      think_about_death
      psych_distress
      interfere_work
    }
  }
`;
export const listLowMoodStack1s = /* GraphQL */ `
  query ListLowMoodStack1s {
    listLow_mood_stack1s {
      id
      formid
      think_about_death
      psych_distress
      interfere_work
    }
  }
`;
export const getLowMoodStack2 = /* GraphQL */ `
  query GetLowMoodStack2($id: String!) {
    getLow_mood_stack2(id: $id) {
      id
      formid
      depressed_one_month
    }
  }
`;
export const listLowMoodStack2s = /* GraphQL */ `
  query ListLowMoodStack2s {
    listLow_mood_stack2s {
      id
      formid
      depressed_one_month
    }
  }
`;
export const getLowMoodStack3 = /* GraphQL */ `
  query GetLowMoodStack3($id: String!) {
    getLow_mood_stack3(id: $id) {
      id
      formid
      depressed
      discouraged
      no_interest
      feeling_down
    }
  }
`;
export const listLowMoodStack3s = /* GraphQL */ `
  query ListLowMoodStack3s {
    listLow_mood_stack3s {
      id
      formid
      depressed
      discouraged
      no_interest
      feeling_down
    }
  }
`;
export const getLowMoodStack4 = /* GraphQL */ `
  query GetLowMoodStack4($id: String!) {
    getLow_mood_stack4(id: $id) {
      id
      formid
    }
  }
`;
export const listLowMoodStack4s = /* GraphQL */ `
  query ListLowMoodStack4s {
    listLow_mood_stack4s {
      id
      formid
    }
  }
`;
export const getLowMoodStack5 = /* GraphQL */ `
  query GetLowMoodStack5($id: String!) {
    getLow_mood_stack5(id: $id) {
      id
      formid
      years_depression
      months_depression
    }
  }
`;
export const listLowMoodStack5s = /* GraphQL */ `
  query ListLowMoodStack5s {
    listLow_mood_stack5s {
      id
      formid
      years_depression
      months_depression
    }
  }
`;
export const getLowMoodStack6 = /* GraphQL */ `
  query GetLowMoodStack6($id: String!) {
    getLow_mood_stack6(id: $id) {
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
export const listLowMoodStack6s = /* GraphQL */ `
  query ListLowMoodStack6s {
    listLow_mood_stack6s {
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
export const getNeighborhoodStack0 = /* GraphQL */ `
  query GetNeighborhoodStack0($id: String!) {
    getNeighborhood_stack0(id: $id) {
      id
      formid
      friendly
      trusted
      same_values
      willing_to_help
    }
  }
`;
export const listNeighborhoodStack0s = /* GraphQL */ `
  query ListNeighborhoodStack0s {
    listNeighborhood_stack0s {
      id
      formid
      friendly
      trusted
      same_values
      willing_to_help
    }
  }
`;
export const getNeighborhoodStack1 = /* GraphQL */ `
  query GetNeighborhoodStack1($id: String!) {
    getNeighborhood_stack1(id: $id) {
      id
      formid
      how_many_friends
      know_by_name
      conversation_with
    }
  }
`;
export const listNeighborhoodStack1s = /* GraphQL */ `
  query ListNeighborhoodStack1s {
    listNeighborhood_stack1s {
      id
      formid
      how_many_friends
      know_by_name
      conversation_with
    }
  }
`;
export const getNeighborhoodStack2 = /* GraphQL */ `
  query GetNeighborhoodStack2($id: String!) {
    getNeighborhood_stack2(id: $id) {
      id
      formid
      ask_for_help
      get_together_socialily
    }
  }
`;
export const listNeighborhoodStack2s = /* GraphQL */ `
  query ListNeighborhoodStack2s {
    listNeighborhood_stack2s {
      id
      formid
      ask_for_help
      get_together_socialily
    }
  }
`;
export const getOralHealthStack0 = /* GraphQL */ `
  query GetOralHealthStack0($id: String!) {
    getOral_health_stack0(id: $id) {
      id
      formid
      brush_teeth
      dental_floss
      mouthwash
    }
  }
`;
export const listOralHealthStack0s = /* GraphQL */ `
  query ListOralHealthStack0s {
    listOral_health_stack0s {
      id
      formid
      brush_teeth
      dental_floss
      mouthwash
    }
  }
`;
export const getOralHealthStack1 = /* GraphQL */ `
  query GetOralHealthStack1($id: String!) {
    getOral_health_stack1(id: $id) {
      id
      formid
      days_floss
      days_mouthwash
    }
  }
`;
export const listOralHealthStack1s = /* GraphQL */ `
  query ListOralHealthStack1s {
    listOral_health_stack1s {
      id
      formid
      days_floss
      days_mouthwash
    }
  }
`;
export const getPetsStack0 = /* GraphQL */ `
  query GetPetsStack0($id: String!) {
    getPets_stack0(id: $id) {
      id
      formid
      have_pet
      type_pet
    }
  }
`;
export const listPetsStack0s = /* GraphQL */ `
  query ListPetsStack0s {
    listPets_stack0s {
      id
      formid
      have_pet
      type_pet
    }
  }
`;
export const getPetsStack1 = /* GraphQL */ `
  query GetPetsStack1($id: String!) {
    getPets_stack1(id: $id) {
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
export const listPetsStack1s = /* GraphQL */ `
  query ListPetsStack1s {
    listPets_stack1s {
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
export const getQualityOfLifeStack0 = /* GraphQL */ `
  query GetQualityOfLifeStack0($id: String!) {
    getQuality_of_life_stack0(id: $id) {
      id
      formid
      qol_general
      health_general
    }
  }
`;
export const listQualityOfLifeStack0s = /* GraphQL */ `
  query ListQualityOfLifeStack0s {
    listQuality_of_life_stack0s {
      id
      formid
      qol_general
      health_general
    }
  }
`;
export const getQualityOfLifeStack1 = /* GraphQL */ `
  query GetQualityOfLifeStack1($id: String!) {
    getQuality_of_life_stack1(id: $id) {
      id
      formid
      health_compared
      full_of_energy
      alert_and_focused
    }
  }
`;
export const listQualityOfLifeStack1s = /* GraphQL */ `
  query ListQualityOfLifeStack1s {
    listQuality_of_life_stack1s {
      id
      formid
      health_compared
      full_of_energy
      alert_and_focused
    }
  }
`;
export const getQualityOfLifeStack2 = /* GraphQL */ `
  query GetQualityOfLifeStack2($id: String!) {
    getQuality_of_life_stack2(id: $id) {
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
export const listQualityOfLifeStack2s = /* GraphQL */ `
  query ListQualityOfLifeStack2s {
    listQuality_of_life_stack2s {
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
export const getQualityOfLifeStack3 = /* GraphQL */ `
  query GetQualityOfLifeStack3($id: String!) {
    getQuality_of_life_stack3(id: $id) {
      id
      formid
      ladder
    }
  }
`;
export const listQualityOfLifeStack3s = /* GraphQL */ `
  query ListQualityOfLifeStack3s {
    listQuality_of_life_stack3s {
      id
      formid
      ladder
    }
  }
`;
export const getReligiousnessSpiritualityStack1 = /* GraphQL */ `
  query GetReligiousnessSpiritualityStack1($id: String!) {
    getReligiousness_spirituality_stack1(id: $id) {
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
export const listReligiousnessSpiritualityStack1s = /* GraphQL */ `
  query ListReligiousnessSpiritualityStack1s {
    listReligiousness_spirituality_stack1s {
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
export const getReligiousnessSpiritualityStack2 = /* GraphQL */ `
  query GetReligiousnessSpiritualityStack2($id: String!) {
    getReligiousness_spirituality_stack2(id: $id) {
      id
      formid
      meaning
      purpose
      here_for_reason
      inner_spiritual_strength
    }
  }
`;
export const listReligiousnessSpiritualityStack2s = /* GraphQL */ `
  query ListReligiousnessSpiritualityStack2s {
    listReligiousness_spirituality_stack2s {
      id
      formid
      meaning
      purpose
      here_for_reason
      inner_spiritual_strength
    }
  }
`;
export const getReligiousnessSpiritualityStack3 = /* GraphQL */ `
  query GetReligiousnessSpiritualityStack3($id: String!) {
    getReligiousness_spirituality_stack3(id: $id) {
      id
      formid
      well_being
      comfort
      strength
    }
  }
`;
export const listReligiousnessSpiritualityStack3s = /* GraphQL */ `
  query ListReligiousnessSpiritualityStack3s {
    listReligiousness_spirituality_stack3s {
      id
      formid
      well_being
      comfort
      strength
    }
  }
`;
export const getReligiousnessSpiritualityStack4 = /* GraphQL */ `
  query GetReligiousnessSpiritualityStack4($id: String!) {
    getReligiousness_spirituality_stack4(id: $id) {
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
export const listReligiousnessSpiritualityStack4s = /* GraphQL */ `
  query ListReligiousnessSpiritualityStack4s {
    listReligiousness_spirituality_stack4s {
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
export const getReligiousnessSpiritualityStack5 = /* GraphQL */ `
  query GetReligiousnessSpiritualityStack5($id: String!) {
    getReligiousness_spirituality_stack5(id: $id) {
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
export const listReligiousnessSpiritualityStack5s = /* GraphQL */ `
  query ListReligiousnessSpiritualityStack5s {
    listReligiousness_spirituality_stack5s {
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
export const getReligiousnessSpiritualityStack6 = /* GraphQL */ `
  query GetReligiousnessSpiritualityStack6($id: String!) {
    getReligiousness_spirituality_stack6(id: $id) {
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
export const listReligiousnessSpiritualityStack6s = /* GraphQL */ `
  query ListReligiousnessSpiritualityStack6s {
    listReligiousness_spirituality_stack6s {
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
export const getReligiousnessSpiritualityStack7 = /* GraphQL */ `
  query GetReligiousnessSpiritualityStack7($id: String!) {
    getReligiousness_spirituality_stack7(id: $id) {
      id
      formid
      optimistic
      remaiun_optimistic
      enjoy_life
    }
  }
`;
export const listReligiousnessSpiritualityStack7s = /* GraphQL */ `
  query ListReligiousnessSpiritualityStack7s {
    listReligiousness_spirituality_stack7s {
      id
      formid
      optimistic
      remaiun_optimistic
      enjoy_life
    }
  }
`;
export const getReligiousnessSpiritualityStack8 = /* GraphQL */ `
  query GetReligiousnessSpiritualityStack8($id: String!) {
    getReligiousness_spirituality_stack8(id: $id) {
      id
      formid
      satisfied
    }
  }
`;
export const listReligiousnessSpiritualityStack8s = /* GraphQL */ `
  query ListReligiousnessSpiritualityStack8s {
    listReligiousness_spirituality_stack8s {
      id
      formid
      satisfied
    }
  }
`;
export const getSleepQualityStack0 = /* GraphQL */ `
  query GetSleepQualityStack0($id: String!) {
    getSleep_quality_stack0(id: $id) {
      id
      formid
      usual_bedtime
      minutes_to_sleep
      hours_actual_sleep
      usual_wakeup_time
    }
  }
`;
export const listSleepQualityStack0s = /* GraphQL */ `
  query ListSleepQualityStack0s {
    listSleep_quality_stack0s {
      id
      formid
      usual_bedtime
      minutes_to_sleep
      hours_actual_sleep
      usual_wakeup_time
    }
  }
`;
export const getSleepQualityStack1 = /* GraphQL */ `
  query GetSleepQualityStack1($id: String!) {
    getSleep_quality_stack1(id: $id) {
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
export const listSleepQualityStack1s = /* GraphQL */ `
  query ListSleepQualityStack1s {
    listSleep_quality_stack1s {
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
export const getSleepQualityStack2 = /* GraphQL */ `
  query GetSleepQualityStack2($id: String!) {
    getSleep_quality_stack2(id: $id) {
      id
      formid
      too_cold
      other_reason
      bad_dreams
      pain
    }
  }
`;
export const listSleepQualityStack2s = /* GraphQL */ `
  query ListSleepQualityStack2s {
    listSleep_quality_stack2s {
      id
      formid
      too_cold
      other_reason
      bad_dreams
      pain
    }
  }
`;
export const getSleepQualityStack3 = /* GraphQL */ `
  query GetSleepQualityStack3($id: String!) {
    getSleep_quality_stack3(id: $id) {
      id
      formid
      taken_medicine
      problem
      trouble_staying_awake
    }
  }
`;
export const listSleepQualityStack3s = /* GraphQL */ `
  query ListSleepQualityStack3s {
    listSleep_quality_stack3s {
      id
      formid
      taken_medicine
      problem
      trouble_staying_awake
    }
  }
`;
export const getSleepQualityStack4 = /* GraphQL */ `
  query GetSleepQualityStack4($id: String!) {
    getSleep_quality_stack4(id: $id) {
      id
      formid
      sleep_quality_overall
    }
  }
`;
export const listSleepQualityStack4s = /* GraphQL */ `
  query ListSleepQualityStack4s {
    listSleep_quality_stack4s {
      id
      formid
      sleep_quality_overall
    }
  }
`;
export const getSocialNetworkStack0 = /* GraphQL */ `
  query GetSocialNetworkStack0($id: String!) {
    getSocial_network_stack0(id: $id) {
      id
      formid
      hours_month_socializing
      different_friends
      hours_week_socializing
    }
  }
`;
export const listSocialNetworkStack0s = /* GraphQL */ `
  query ListSocialNetworkStack0s {
    listSocial_network_stack0s {
      id
      formid
      hours_month_socializing
      different_friends
      hours_week_socializing
    }
  }
`;
export const getSocialNetworkStack1 = /* GraphQL */ `
  query GetSocialNetworkStack1($id: String!) {
    getSocial_network_stack1(id: $id) {
      id
      formid
      number_socialize
    }
  }
`;
export const listSocialNetworkStack1s = /* GraphQL */ `
  query ListSocialNetworkStack1s {
    listSocial_network_stack1s {
      id
      formid
      number_socialize
    }
  }
`;
export const getSocialNetworkStack2 = /* GraphQL */ `
  query GetSocialNetworkStack2($id: String!) {
    getSocial_network_stack2(id: $id) {
      id
      formid
      rely_on_them
      open_up_to_them
      too_many_demands
      argue
    }
  }
`;
export const listSocialNetworkStack2s = /* GraphQL */ `
  query ListSocialNetworkStack2s {
    listSocial_network_stack2s {
      id
      formid
      rely_on_them
      open_up_to_them
      too_many_demands
      argue
    }
  }
`;
export const getSocialNetworkStack3 = /* GraphQL */ `
  query GetSocialNetworkStack3($id: String!) {
    getSocial_network_stack3(id: $id) {
      id
      formid
      easy_become_emotionally_close
      want_to_be
    }
  }
`;
export const listSocialNetworkStack3s = /* GraphQL */ `
  query ListSocialNetworkStack3s {
    listSocial_network_stack3s {
      id
      formid
      easy_become_emotionally_close
      want_to_be
    }
  }
`;
export const getSocialNetworkStack4 = /* GraphQL */ `
  query GetSocialNetworkStack4($id: String!) {
    getSocial_network_stack4(id: $id) {
      id
      formid
      uncomfortable_getting_close
      comfortable_without
    }
  }
`;
export const listSocialNetworkStack4s = /* GraphQL */ `
  query ListSocialNetworkStack4s {
    listSocial_network_stack4s {
      id
      formid
      uncomfortable_getting_close
      comfortable_without
    }
  }
`;
export const getSocialNetworkStack5 = /* GraphQL */ `
  query GetSocialNetworkStack5($id: String!) {
    getSocial_network_stack5(id: $id) {
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
export const listSocialNetworkStack5s = /* GraphQL */ `
  query ListSocialNetworkStack5s {
    listSocial_network_stack5s {
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
export const getStressfulLifeExperienceStack0 = /* GraphQL */ `
  query GetStressfulLifeExperienceStack0($id: String!) {
    getStressful_life_experience_stack0(id: $id) {
      id
      formid
      how_old_depression
    }
  }
`;
export const listStressfulLifeExperienceStack0s = /* GraphQL */ `
  query ListStressfulLifeExperienceStack0s {
    listStressful_life_experience_stack0s {
      id
      formid
      how_old_depression
    }
  }
`;
export const getStressfulLifeExperienceStack1 = /* GraphQL */ `
  query GetStressfulLifeExperienceStack1($id: String!) {
    getStressful_life_experience_stack1(id: $id) {
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
export const listStressfulLifeExperienceStack1s = /* GraphQL */ `
  query ListStressfulLifeExperienceStack1s {
    listStressful_life_experience_stack1s {
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
export const getStressfulLifeExperienceStack2 = /* GraphQL */ `
  query GetStressfulLifeExperienceStack2($id: String!) {
    getStressful_life_experience_stack2(id: $id) {
      id
      formid
      first_time
      years
      months
      days
    }
  }
`;
export const listStressfulLifeExperienceStack2s = /* GraphQL */ `
  query ListStressfulLifeExperienceStack2s {
    listStressful_life_experience_stack2s {
      id
      formid
      first_time
      years
      months
      days
    }
  }
`;
export const getStressfulLifeExperienceStack3 = /* GraphQL */ `
  query GetStressfulLifeExperienceStack3($id: String!) {
    getStressful_life_experience_stack3(id: $id) {
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
export const listStressfulLifeExperienceStack3s = /* GraphQL */ `
  query ListStressfulLifeExperienceStack3s {
    listStressful_life_experience_stack3s {
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
export const getStressfulLifeExperienceStack4 = /* GraphQL */ `
  query GetStressfulLifeExperienceStack4($id: String!) {
    getStressful_life_experience_stack4(id: $id) {
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
export const listStressfulLifeExperienceStack4s = /* GraphQL */ `
  query ListStressfulLifeExperienceStack4s {
    listStressful_life_experience_stack4s {
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
export const getStressfulLifeExperienceStack5 = /* GraphQL */ `
  query GetStressfulLifeExperienceStack5($id: String!) {
    getStressful_life_experience_stack5(id: $id) {
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
export const listStressfulLifeExperienceStack5s = /* GraphQL */ `
  query ListStressfulLifeExperienceStack5s {
    listStressful_life_experience_stack5s {
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
export const getStressfulLifeExperienceStack6 = /* GraphQL */ `
  query GetStressfulLifeExperienceStack6($id: String!) {
    getStressful_life_experience_stack6(id: $id) {
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
export const listStressfulLifeExperienceStack6s = /* GraphQL */ `
  query ListStressfulLifeExperienceStack6s {
    listStressful_life_experience_stack6s {
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
export const getYourHealthStack0 = /* GraphQL */ `
  query GetYourHealthStack0($id: String!) {
    getYour_health_stack0(id: $id) {
      id
      formid
      feet_height
      weight
    }
  }
`;
export const listYourHealthStack0s = /* GraphQL */ `
  query ListYourHealthStack0s {
    listYour_health_stack0s {
      id
      formid
      feet_height
      weight
    }
  }
`;
export const getYourHealthStack1 = /* GraphQL */ `
  query GetYourHealthStack1($id: String!) {
    getYour_health_stack1(id: $id) {
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
export const listYourHealthStack1s = /* GraphQL */ `
  query ListYourHealthStack1s {
    listYour_health_stack1s {
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
export const getYourHealthStack2 = /* GraphQL */ `
  query GetYourHealthStack2($id: String!) {
    getYour_health_stack2(id: $id) {
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
export const listYourHealthStack2s = /* GraphQL */ `
  query ListYourHealthStack2s {
    listYour_health_stack2s {
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
export const getYourHealthStack3 = /* GraphQL */ `
  query GetYourHealthStack3($id: String!) {
    getYour_health_stack3(id: $id) {
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
export const listYourHealthStack3s = /* GraphQL */ `
  query ListYourHealthStack3s {
    listYour_health_stack3s {
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
export const getYourHealthStack4 = /* GraphQL */ `
  query GetYourHealthStack4($id: String!) {
    getYour_health_stack4(id: $id) {
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
export const listYourHealthStack4s = /* GraphQL */ `
  query ListYourHealthStack4s {
    listYour_health_stack4s {
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
export const getYourHealthStack5 = /* GraphQL */ `
  query GetYourHealthStack5($id: String!) {
    getYour_health_stack5(id: $id) {
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
export const listYourHealthStack5s = /* GraphQL */ `
  query ListYourHealthStack5s {
    listYour_health_stack5s {
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
export const getYourHealthStack6 = /* GraphQL */ `
  query GetYourHealthStack6($id: String!) {
    getYour_health_stack6(id: $id) {
      id
      formid
      how_long_sleep_problems
      hours_sleep
      energy_scale
    }
  }
`;
export const listYourHealthStack6s = /* GraphQL */ `
  query ListYourHealthStack6s {
    listYour_health_stack6s {
      id
      formid
      how_long_sleep_problems
      hours_sleep
      energy_scale
    }
  }
`;
export const getYourHealthStack7 = /* GraphQL */ `
  query GetYourHealthStack7($id: String!) {
    getYour_health_stack7(id: $id) {
      id
      formid
      how_long_headaches
      how_long_pain
      pain_scale
    }
  }
`;
export const listYourHealthStack7s = /* GraphQL */ `
  query ListYourHealthStack7s {
    listYour_health_stack7s {
      id
      formid
      how_long_headaches
      how_long_pain
      pain_scale
    }
  }
`;
export const getYourHealthStack8 = /* GraphQL */ `
  query GetYourHealthStack8($id: String!) {
    getYour_health_stack8(id: $id) {
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
export const listYourHealthStack8s = /* GraphQL */ `
  query ListYourHealthStack8s {
    listYour_health_stack8s {
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
export const getYourHealthStack9 = /* GraphQL */ `
  query GetYourHealthStack9($id: String!) {
    getYour_health_stack9(id: $id) {
      id
      formid
      unable_to_work
      cut_back_work
    }
  }
`;
export const listYourHealthStack9s = /* GraphQL */ `
  query ListYourHealthStack9s {
    listYour_health_stack9s {
      id
      formid
      unable_to_work
      cut_back_work
    }
  }
`;
export const getYourPersonalityStack0 = /* GraphQL */ `
  query GetYourPersonalityStack0($id: String!) {
    getYour_personality_stack0(id: $id) {
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
export const listYourPersonalityStack0s = /* GraphQL */ `
  query ListYourPersonalityStack0s {
    listYour_personality_stack0s {
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
export const getYourPersonalityStack1 = /* GraphQL */ `
  query GetYourPersonalityStack1($id: String!) {
    getYour_personality_stack1(id: $id) {
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
export const listYourPersonalityStack1s = /* GraphQL */ `
  query ListYourPersonalityStack1s {
    listYour_personality_stack1s {
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
export const getYourPersonalityStack2 = /* GraphQL */ `
  query GetYourPersonalityStack2($id: String!) {
    getYour_personality_stack2(id: $id) {
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
export const listYourPersonalityStack2s = /* GraphQL */ `
  query ListYourPersonalityStack2s {
    listYour_personality_stack2s {
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
export const getYourPersonalityStack3 = /* GraphQL */ `
  query GetYourPersonalityStack3($id: String!) {
    getYour_personality_stack3(id: $id) {
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
export const listYourPersonalityStack3s = /* GraphQL */ `
  query ListYourPersonalityStack3s {
    listYour_personality_stack3s {
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
export const getForm = /* GraphQL */ `
  query GetForm($id: ID!) {
    getForm(id: $id) {
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
export const listForms = /* GraphQL */ `
  query ListForms(
    $filter: ModelFormFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listForms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
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
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
      nextToken
    }
  }
`;
export const getSection = /* GraphQL */ `
  query GetSection($id: ID!) {
    getSection(id: $id) {
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
      nextToken
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
  }
`;
