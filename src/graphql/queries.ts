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
