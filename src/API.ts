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

export type CreateHealthBehaviors2Input = {
  e1_tobacco_days?: number | null,
  e1_tobacco_how_many?: number | null,
  e2_non_tobacco_days?: number | null,
  e2_non_tobacco_how_many?: number | null,
  e3_alcohol_days?: number | null,
  e3_alcohol_how_many?: number | null,
  e4_skin_in_sun?: number | null,
  e5_avoid_sun?: number | null,
  e5_wear_protection?: number | null,
  e5_15spf?: number | null,
  e6_vigorous_exercise?: number | null,
  e7_moderate_exercise?: number | null,
  e8_exercise_summary?: number | null,
  e9_heredity?: number | null,
  e9_lifestyle?: number | null,
  e9_stresses?: number | null,
  e9_strategies?: number | null,
  e9_doctor_regular_basis?: number | null,
  e9_follow_recommendations?: number | null,
  e9_environmental?: number | null,
  e9_attitude?: number | null,
  userid: string,
};

export type UpdateHealthBehaviors2Input = {
  e1_tobacco_days?: number | null,
  e1_tobacco_how_many?: number | null,
  e2_non_tobacco_days?: number | null,
  e2_non_tobacco_how_many?: number | null,
  e3_alcohol_days?: number | null,
  e3_alcohol_how_many?: number | null,
  e4_skin_in_sun?: number | null,
  e5_avoid_sun?: number | null,
  e5_wear_protection?: number | null,
  e5_15spf?: number | null,
  e6_vigorous_exercise?: number | null,
  e7_moderate_exercise?: number | null,
  e8_exercise_summary?: number | null,
  e9_heredity?: number | null,
  e9_lifestyle?: number | null,
  e9_stresses?: number | null,
  e9_strategies?: number | null,
  e9_doctor_regular_basis?: number | null,
  e9_follow_recommendations?: number | null,
  e9_environmental?: number | null,
  e9_attitude?: number | null,
  userid: string,
};

export type CreateHighMoodInput = {
  h2_high_mood_episode?: number | null,
  h3_mood_higher_usual?: number | null,
  h3_irritable_usual?: number | null,
  h3_hyper?: number | null,
  h3_thoughts_race?: number | null,
  userid: string,
};

export type UpdateHighMoodInput = {
  h2_high_mood_episode?: number | null,
  h3_mood_higher_usual?: number | null,
  h3_irritable_usual?: number | null,
  h3_hyper?: number | null,
  h3_thoughts_race?: number | null,
  userid: string,
};

export type CreateLowMoodInput = {
  g1_sad_depressed?: number | null,
  g1_discouraged?: number | null,
  g1_no_interest?: number | null,
  g1_down_on_yourself?: number | null,
  g1_lonely?: number | null,
  g3_long_depression?: number | null,
  g4_depressed?: number | null,
  g4_discouraged?: number | null,
  g4_no_interest?: number | null,
  g4_down?: number | null,
  userid: string,
};

export type UpdateLowMoodInput = {
  g1_sad_depressed?: number | null,
  g1_discouraged?: number | null,
  g1_no_interest?: number | null,
  g1_down_on_yourself?: number | null,
  g1_lonely?: number | null,
  g3_long_depression?: number | null,
  g4_depressed?: number | null,
  g4_discouraged?: number | null,
  g4_no_interest?: number | null,
  g4_down?: number | null,
  userid: string,
};

export type CreateNeighborhoodInput = {
  p1_friendly?: string | null,
  p1_trusted?: string | null,
  p1_share_values?: string | null,
  p1_willing?: string | null,
  p2_know_by_name?: number | null,
  p2_conversation?: number | null,
  p2_friends?: number | null,
  p2_socially?: number | null,
  p2_ask_help?: number | null,
  userid: string,
};

export type UpdateNeighborhoodInput = {
  p1_friendly?: string | null,
  p1_trusted?: string | null,
  p1_share_values?: string | null,
  p1_willing?: string | null,
  p2_know_by_name?: number | null,
  p2_conversation?: number | null,
  p2_friends?: number | null,
  p2_socially?: number | null,
  p2_ask_help?: number | null,
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

export type CreatePetsInput = {
  m1_pet?: number | null,
  m1_type_pets?: string | null,
  m1_dontlike?: number | null,
  m1_spend_every_day_pet?: number | null,
  m1_understood_pet?: number | null,
  m1_love_pet?: number | null,
  m1_talk_alot_pet?: number | null,
  m1_pet_happy?: number | null,
  m1_pet_friend?: number | null,
  m1_pet_comfort?: number | null,
  m1_lonely_without_?: number | null,
  userid: string,
};

export type UpdatePetsInput = {
  m1_pet?: number | null,
  m1_type_pets?: string | null,
  m1_dontlike?: number | null,
  m1_spend_every_day_pet?: number | null,
  m1_understood_pet?: number | null,
  m1_love_pet?: number | null,
  m1_talk_alot_pet?: number | null,
  m1_pet_happy?: number | null,
  m1_pet_friend?: number | null,
  m1_pet_comfort?: number | null,
  m1_lonely_without_?: number | null,
  userid: string,
};

export type CreateQualityOfLifeInput = {
  qol_general: number,
  health_general: number,
  health_compared_to_others: number,
  full_of_pep: number,
  alert_and_focused: number,
  stress: number,
  worry: number,
  happiness: number,
  anger: number,
  enjoyment: number,
  sadness: number,
  ladder_qol: number,
  userid: string,
};

export type UpdateQualityOfLifeInput = {
  qol_general?: number | null,
  health_general?: number | null,
  health_compared_to_others?: number | null,
  full_of_pep?: number | null,
  alert_and_focused?: number | null,
  stress?: number | null,
  worry?: number | null,
  happiness?: number | null,
  anger?: number | null,
  enjoyment?: number | null,
  sadness?: number | null,
  ladder_qol?: number | null,
  userid: string,
};

export type CreateReligiousnessInput = {
  n1_hard_times?: number | null,
  n1_stress?: number | null,
  n1_understand?: number | null,
  n1_comfort?: number | null,
  n1_meaning?: number | null,
  n1_taking_care?: number | null,
  n1_purpose?: number | null,
  n1_reason?: number | null,
  n1_spiritual_strength?: number | null,
  n1_strenth_in_difficult_times?: number | null,
  n1_wellbeing?: number | null,
  n1_comfort_dailylife?: number | null,
  n1_strength_dailylife?: number | null,
  n2_touched_beauty?: number | null,
  n2_inspiration?: number | null,
  n2_grateful?: number | null,
  n2_hopegful?: number | null,
  n2_life_hopeful?: number | null,
  n3_experience_awe?: number | null,
  n3_connection_mbs?: number | null,
  n3_consistent?: number | null,
  n3_coherence?: number | null,
  n3_live_better?: number | null,
  n3_happy_in_life?: number | null,
  n3_peaceful_within_self?: number | null,
  n3_inner_peace?: number | null,
  n3_peaceful_need_to?: number | null,
  n3_harmony?: number | null,
  n3_optimistic_imporove?: number | null,
  n3_optimistic_uncertainty?: number | null,
  n3_enjoy_life?: number | null,
  n4_satisfied_mbs?: number | null,
  userid: string,
};

export type UpdateReligiousnessInput = {
  n1_hard_times?: number | null,
  n1_stress?: number | null,
  n1_understand?: number | null,
  n1_comfort?: number | null,
  n1_meaning?: number | null,
  n1_taking_care?: number | null,
  n1_purpose?: number | null,
  n1_reason?: number | null,
  n1_spiritual_strength?: number | null,
  n1_strenth_in_difficult_times?: number | null,
  n1_wellbeing?: number | null,
  n1_comfort_dailylife?: number | null,
  n1_strength_dailylife?: number | null,
  n2_touched_beauty?: number | null,
  n2_inspiration?: number | null,
  n2_grateful?: number | null,
  n2_hopegful?: number | null,
  n2_life_hopeful?: number | null,
  n3_experience_awe?: number | null,
  n3_connection_mbs?: number | null,
  n3_consistent?: number | null,
  n3_coherence?: number | null,
  n3_live_better?: number | null,
  n3_happy_in_life?: number | null,
  n3_peaceful_within_self?: number | null,
  n3_inner_peace?: number | null,
  n3_peaceful_need_to?: number | null,
  n3_harmony?: number | null,
  n3_optimistic_imporove?: number | null,
  n3_optimistic_uncertainty?: number | null,
  n3_enjoy_life?: number | null,
  n4_satisfied_mbs?: number | null,
  userid: string,
};

export type CreateSleepQualityIndexInput = {
  t1_usual_bedtime?: string | null,
  t1_minutes_to_sleep?: number | null,
  t1_usual_wakeup?: string | null,
  t1_hours_of_sleep?: number | null,
  t2_cannot_sleep_30_min?: number | null,
  t2_wake_up_middle_night?: number | null,
  t2_bathroom?: number | null,
  t2_breathe_comfortable?: number | null,
  t2_cough_snore?: number | null,
  t2_cold?: number | null,
  t2_hot?: number | null,
  t2_bad_dreams?: number | null,
  t2_pain?: number | null,
  t2_other?: number | null,
  t3_medicine?: number | null,
  t3_trouble_awake?: number | null,
  t3_enthusiasm?: number | null,
  t3_overall_sleep?: number | null,
  userid: string,
};

export type UpdateSleepQualityIndexInput = {
  t1_usual_bedtime?: string | null,
  t1_minutes_to_sleep?: number | null,
  t1_usual_wakeup?: string | null,
  t1_hours_of_sleep?: number | null,
  t2_cannot_sleep_30_min?: number | null,
  t2_wake_up_middle_night?: number | null,
  t2_bathroom?: number | null,
  t2_breathe_comfortable?: number | null,
  t2_cough_snore?: number | null,
  t2_cold?: number | null,
  t2_hot?: number | null,
  t2_bad_dreams?: number | null,
  t2_pain?: number | null,
  t2_other?: number | null,
  t3_medicine?: number | null,
  t3_trouble_awake?: number | null,
  t3_enthusiasm?: number | null,
  t3_overall_sleep?: number | null,
  userid: string,
};

export type CreateSocialNetworksInput = {
  o1_hours_week?: number | null,
  o2_different_friends?: number | null,
  o3_hours_month?: number | null,
  o4_personally_socialize?: number | null,
  o5_rely?: number | null,
  o5_open_up?: number | null,
  o5_demands?: number | null,
  o5_argue?: number | null,
  o6_emotionally_close?: number | null,
  o6_uncomfortable?: number | null,
  o6_want_to_be?: number | null,
  o6_comfortable_without?: number | null,
  o7_depend?: number | null,
  o7_important?: number | null,
  o7_miss_you?: number | null,
  o7_pay_attention?: number | null,
  o7_interested?: number | null,
  userid: string,
};

export type UpdateSocialNetworksInput = {
  o1_hours_week?: number | null,
  o2_different_friends?: number | null,
  o3_hours_month?: number | null,
  o4_personally_socialize?: number | null,
  o5_rely?: number | null,
  o5_open_up?: number | null,
  o5_demands?: number | null,
  o5_argue?: number | null,
  o6_emotionally_close?: number | null,
  o6_uncomfortable?: number | null,
  o6_want_to_be?: number | null,
  o6_comfortable_without?: number | null,
  o7_depend?: number | null,
  o7_important?: number | null,
  o7_miss_you?: number | null,
  o7_pay_attention?: number | null,
  o7_interested?: number | null,
  userid: string,
};

export type CreateStressfulLifeExperiencesInput = {
  i1_times?: number | null,
  i2_memories?: number | null,
  i2_physical?: number | null,
  i2_avoid_think?: number | null,
  i2_avoid_activities?: number | null,
  i2_reactions?: number | null,
  i3_how_old?: number | null,
  i3_how_many_years?: number | null,
  i3_past_30?: number | null,
  i3_past_24_months?: number | null,
  i4_life_threat?: number | null,
  i4_death?: number | null,
  i4_betrayal?: number | null,
  i4_arguments?: number | null,
  i4_motor_accident?: number | null,
  i4_legal_problem?: number | null,
  i4_any?: number | null,
  i4_describe?: string | null,
  i5_financial?: number | null,
  i5_career?: number | null,
  i5_health?: number | null,
  i5_love_life?: number | null,
  i5_friendships?: number | null,
  i5_family_relationship?: number | null,
  i5_lovedones_health?: number | null,
  i5_other_lovedones?: number | null,
  i5_life_overall?: number | null,
  i5_describe?: string | null,
  i6_keep_calm?: number | null,
  i6_manage_stress?: number | null,
  i6_new_approach?: number | null,
  i6_get_along?: number | null,
  i6_humor?: number | null,
  i6_describe?: string | null,
  i7_promotion?: number | null,
  i7_finance_imp?: number | null,
  i7_love_life_imp?: number | null,
  i7_health_imp?: number | null,
  i7_any?: number | null,
  i7_describe?: string | null,
  userid: string,
};

export type UpdateStressfulLifeExperiencesInput = {
  i1_times?: number | null,
  i2_memories?: number | null,
  i2_physical?: number | null,
  i2_avoid_think?: number | null,
  i2_avoid_activities?: number | null,
  i2_reactions?: number | null,
  i3_how_old?: number | null,
  i3_how_many_years?: number | null,
  i3_past_30?: number | null,
  i3_past_24_months?: number | null,
  i4_life_threat?: number | null,
  i4_death?: number | null,
  i4_betrayal?: number | null,
  i4_arguments?: number | null,
  i4_motor_accident?: number | null,
  i4_legal_problem?: number | null,
  i4_any?: number | null,
  i4_describe?: string | null,
  i5_financial?: number | null,
  i5_career?: number | null,
  i5_health?: number | null,
  i5_love_life?: number | null,
  i5_friendships?: number | null,
  i5_family_relationship?: number | null,
  i5_lovedones_health?: number | null,
  i5_other_lovedones?: number | null,
  i5_life_overall?: number | null,
  i5_describe?: string | null,
  i6_keep_calm?: number | null,
  i6_manage_stress?: number | null,
  i6_new_approach?: number | null,
  i6_get_along?: number | null,
  i6_humor?: number | null,
  i6_describe?: string | null,
  i7_promotion?: number | null,
  i7_finance_imp?: number | null,
  i7_love_life_imp?: number | null,
  i7_health_imp?: number | null,
  i7_any?: number | null,
  i7_describe?: string | null,
  userid: string,
};

export type CreateTimeUseInput = {
  q1_work_hours?: number | null,
  q1_volunteer_hours?: number | null,
  q1_leisure_hours?: number | null,
  q3_loved_ones?: number | null,
  q3_friends?: number | null,
  q3_no_technology?: number | null,
  q3_technology?: number | null,
  userid: string,
};

export type UpdateTimeUseInput = {
  q1_work_hours?: number | null,
  q1_volunteer_hours?: number | null,
  q1_leisure_hours?: number | null,
  q3_loved_ones?: number | null,
  q3_friends?: number | null,
  q3_no_technology?: number | null,
  q3_technology?: number | null,
  userid: string,
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

export type CreateYourHealthInput = {
  height_feet?: number | null,
  height_inches?: number | null,
  weight?: number | null,
  b3_CD_clotting_disorder?: number | null,
  b3_CD_high_blood_pressure?: number | null,
  b3_CD_heart_attack?: number | null,
  b3_CD_high_cholesterol?: number | null,
  b3_CD_any?: number | null,
  b3_JBD_osteoarthritis?: number | null,
  b3_JBD_rheumatoid_arthritis?: number | null,
  b3_JBD_osteoporosis?: number | null,
  b3_RD_asthma_chronicbronc?: number | null,
  b3_RD_COPD?: number | null,
  b3_RD_seasonal_allergies?: number | null,
  b3_PD_ADD_ADHD?: number | null,
  b3_PD_anxiety?: number | null,
  b3_PD_depression?: number | null,
  b3_PD_bipolar_disorder?: number | null,
  b3_PD_PTSD?: number | null,
  b3_PD_substance_abuse?: number | null,
  b3_PD_any?: number | null,
  b3_CANCER_skin?: number | null,
  b3_CANCER_any?: number | null,
  b3_OTHER_autoimmune_disorder?: number | null,
  b3_OTHER_inflammatory_skin_disorder?: number | null,
  b3_OTHER_diabetes_insulin_dependant?: number | null,
  b3_OTHER_diabetes_not_insulin_dependant?: number | null,
  b3_OTHER_migraine?: number | null,
  b3_OTHER_stomach_intestine_ulcer?: number | null,
  b3_OTHER_acid_reflux?: number | null,
  b3_OTHER_thyroid_disorders?: number | null,
  b3_OTHER_chronic_pain?: number | null,
  b3_OTHER_NONE_APPLY?: number | null,
  b4_dizziness?: number | null,
  b4_short_breath?: number | null,
  b4_heart_pound?: number | null,
  b4_tired_out?: number | null,
  b4_muscle_tensiion?: number | null,
  b4_restless?: number | null,
  b4_anxious?: number | null,
  b4_irritable?: number | null,
  b5_memory?: number | null,
  b5_slow_talking_moving?: number | null,
  b5_concentration?: number | null,
  b5_sleep_problems?: number | null,
  b5_constipation?: number | null,
  b5_nausea?: number | null,
  b5_poor_appetite?: number | null,
  b5_worrying?: number | null,
  b5_feeling_angry?: number | null,
  b6_back_pain?: number | null,
  b6_neck_pain?: number | null,
  b6_menstrual_cramps?: number | null,
  b6_chest_pain?: number | null,
  b6_sexual_pain?: number | null,
  b6_headaches?: number | null,
  b6_any_other_serious_pain?: number | null,
  b6_uncontrollable_anxiety?: number | null,
  b6_angry_explode?: number | null,
  b10_hours_sleep?: number | null,
  b11_energy?: number | null,
  b14_home_management?: number | null,
  b14_ability_to_work?: number | null,
  b14_speed_quality_work?: number | null,
  b14_social_quality?: number | null,
  b14_close_relationship?: number | null,
  b15_days_unable_to_work?: number | null,
  b16_days_reduced_work?: number | null,
  userid: string,
};

export type UpdateYourHealthInput = {
  height_feet?: number | null,
  height_inches?: number | null,
  weight?: number | null,
  b3_CD_clotting_disorder?: number | null,
  b3_CD_high_blood_pressure?: number | null,
  b3_CD_heart_attack?: number | null,
  b3_CD_high_cholesterol?: number | null,
  b3_CD_any?: number | null,
  b3_JBD_osteoarthritis?: number | null,
  b3_JBD_rheumatoid_arthritis?: number | null,
  b3_JBD_osteoporosis?: number | null,
  b3_RD_asthma_chronicbronc?: number | null,
  b3_RD_COPD?: number | null,
  b3_RD_seasonal_allergies?: number | null,
  b3_PD_ADD_ADHD?: number | null,
  b3_PD_anxiety?: number | null,
  b3_PD_depression?: number | null,
  b3_PD_bipolar_disorder?: number | null,
  b3_PD_PTSD?: number | null,
  b3_PD_substance_abuse?: number | null,
  b3_PD_any?: number | null,
  b3_CANCER_skin?: number | null,
  b3_CANCER_any?: number | null,
  b3_OTHER_autoimmune_disorder?: number | null,
  b3_OTHER_inflammatory_skin_disorder?: number | null,
  b3_OTHER_diabetes_insulin_dependant?: number | null,
  b3_OTHER_diabetes_not_insulin_dependant?: number | null,
  b3_OTHER_migraine?: number | null,
  b3_OTHER_stomach_intestine_ulcer?: number | null,
  b3_OTHER_acid_reflux?: number | null,
  b3_OTHER_thyroid_disorders?: number | null,
  b3_OTHER_chronic_pain?: number | null,
  b3_OTHER_NONE_APPLY?: number | null,
  b4_dizziness?: number | null,
  b4_short_breath?: number | null,
  b4_heart_pound?: number | null,
  b4_tired_out?: number | null,
  b4_muscle_tensiion?: number | null,
  b4_restless?: number | null,
  b4_anxious?: number | null,
  b4_irritable?: number | null,
  b5_memory?: number | null,
  b5_slow_talking_moving?: number | null,
  b5_concentration?: number | null,
  b5_sleep_problems?: number | null,
  b5_constipation?: number | null,
  b5_nausea?: number | null,
  b5_poor_appetite?: number | null,
  b5_worrying?: number | null,
  b5_feeling_angry?: number | null,
  b6_back_pain?: number | null,
  b6_neck_pain?: number | null,
  b6_menstrual_cramps?: number | null,
  b6_chest_pain?: number | null,
  b6_sexual_pain?: number | null,
  b6_headaches?: number | null,
  b6_any_other_serious_pain?: number | null,
  b6_uncontrollable_anxiety?: number | null,
  b6_angry_explode?: number | null,
  b10_hours_sleep?: number | null,
  b11_energy?: number | null,
  b14_home_management?: number | null,
  b14_ability_to_work?: number | null,
  b14_speed_quality_work?: number | null,
  b14_social_quality?: number | null,
  b14_close_relationship?: number | null,
  b15_days_unable_to_work?: number | null,
  b16_days_reduced_work?: number | null,
  userid: string,
};

export type CreateYourPersonalityInput = {
  j1_reserved?: number | null,
  j1_helpful?: number | null,
  j1_broadminded?: number | null,
  j1_moody?: number | null,
  j1_outgoing?: number | null,
  j1_emotionally_stable?: number | null,
  j1_critical?: number | null,
  j1_adventurous?: number | null,
  j1_nervous?: number | null,
  j1_unreliable?: number | null,
  j1_quiet?: number | null,
  j2_softhearted?: number | null,
  j2_creative?: number | null,
  j2_calm?: number | null,
  j2_friendly?: number | null,
  j2_careless?: number | null,
  j2_uncompassionate?: number | null,
  j2_curious?: number | null,
  j2_upset?: number | null,
  j2_talkative?: number | null,
  j2_sympathetic?: number | null,
  j2_organized?: number | null,
  j2_sensitive?: number | null,
  j3_interests?: number | null,
  j3_opinions?: number | null,
  j3_purpose?: number | null,
  j3_think_a_lot?: number | null,
  j3_do_a_lot?: number | null,
  userid: string,
};

export type UpdateYourPersonalityInput = {
  j1_reserved?: number | null,
  j1_helpful?: number | null,
  j1_broadminded?: number | null,
  j1_moody?: number | null,
  j1_outgoing?: number | null,
  j1_emotionally_stable?: number | null,
  j1_critical?: number | null,
  j1_adventurous?: number | null,
  j1_nervous?: number | null,
  j1_unreliable?: number | null,
  j1_quiet?: number | null,
  j2_softhearted?: number | null,
  j2_creative?: number | null,
  j2_calm?: number | null,
  j2_friendly?: number | null,
  j2_careless?: number | null,
  j2_uncompassionate?: number | null,
  j2_curious?: number | null,
  j2_upset?: number | null,
  j2_talkative?: number | null,
  j2_sympathetic?: number | null,
  j2_organized?: number | null,
  j2_sensitive?: number | null,
  j3_interests?: number | null,
  j3_opinions?: number | null,
  j3_purpose?: number | null,
  j3_think_a_lot?: number | null,
  j3_do_a_lot?: number | null,
  userid: string,
};

export type CreateCustomersInput = {
  id: number,
  name: string,
  phone: string,
  email: string,
};

export type UpdateCustomersInput = {
  id: number,
  name?: string | null,
  phone?: string | null,
  email?: string | null,
};

export type CreateFormInput = {
  id?: string | null,
  UserID: string,
  finished?: boolean | null,
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
  stack: number,
  stackPhrase?: string | null,
  placeHolder?: string | null,
  order: number,
  items?: Array< string | null > | null,
  imagesPath?: Array< string | null > | null,
  questionCategoryId?: string | null,
  questionSubSectionId?: string | null,
};

export type ModelQuestionConditionInput = {
  question?: ModelStringInput | null,
  stack?: ModelIntInput | null,
  stackPhrase?: ModelStringInput | null,
  placeHolder?: ModelStringInput | null,
  order?: ModelIntInput | null,
  items?: ModelStringInput | null,
  imagesPath?: ModelStringInput | null,
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
  stackPhrase?: string | null,
  placeHolder?: string | null,
  order?: number | null,
  items?: Array< string | null > | null,
  imagesPath?: Array< string | null > | null,
  questionCategoryId?: string | null,
  questionSubSectionId?: string | null,
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
  order: number,
};

export type ModelSectionConditionInput = {
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelSectionConditionInput | null > | null,
  or?: Array< ModelSectionConditionInput | null > | null,
  not?: ModelSectionConditionInput | null,
};

export type UpdateSectionInput = {
  id: string,
  name?: string | null,
  order?: number | null,
};

export type DeleteSectionInput = {
  id?: string | null,
};

export type CreateSubSectionInput = {
  id?: string | null,
  name: string,
  order: number,
  subSectionSectionId?: string | null,
};

export type ModelSubSectionConditionInput = {
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
  and?: Array< ModelSubSectionConditionInput | null > | null,
  or?: Array< ModelSubSectionConditionInput | null > | null,
  not?: ModelSubSectionConditionInput | null,
};

export type UpdateSubSectionInput = {
  id: string,
  name?: string | null,
  order?: number | null,
  subSectionSectionId?: string | null,
};

export type DeleteSubSectionInput = {
  id?: string | null,
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
  stackPhrase?: ModelStringInput | null,
  placeHolder?: ModelStringInput | null,
  order?: ModelIntInput | null,
  items?: ModelStringInput | null,
  imagesPath?: ModelStringInput | null,
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
  order?: ModelIntInput | null,
  and?: Array< ModelSectionFilterInput | null > | null,
  or?: Array< ModelSectionFilterInput | null > | null,
  not?: ModelSectionFilterInput | null,
};

export type ModelSubSectionFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  order?: ModelIntInput | null,
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

export type DeleteHealthBehaviors2MutationVariables = {
  userid: string,
};

export type DeleteHealthBehaviors2Mutation = {
  deleteHealthBehaviors2:  {
    __typename: "HealthBehaviors2",
    e1_tobacco_days: number | null,
    e1_tobacco_how_many: number | null,
    e2_non_tobacco_days: number | null,
    e2_non_tobacco_how_many: number | null,
    e3_alcohol_days: number | null,
    e3_alcohol_how_many: number | null,
    e4_skin_in_sun: number | null,
    e5_avoid_sun: number | null,
    e5_wear_protection: number | null,
    e5_15spf: number | null,
    e6_vigorous_exercise: number | null,
    e7_moderate_exercise: number | null,
    e8_exercise_summary: number | null,
    e9_heredity: number | null,
    e9_lifestyle: number | null,
    e9_stresses: number | null,
    e9_strategies: number | null,
    e9_doctor_regular_basis: number | null,
    e9_follow_recommendations: number | null,
    e9_environmental: number | null,
    e9_attitude: number | null,
    userid: string,
  } | null,
};

export type CreateHealthBehaviors2MutationVariables = {
  createHealthBehaviors2Input: CreateHealthBehaviors2Input,
};

export type CreateHealthBehaviors2Mutation = {
  createHealthBehaviors2:  {
    __typename: "HealthBehaviors2",
    e1_tobacco_days: number | null,
    e1_tobacco_how_many: number | null,
    e2_non_tobacco_days: number | null,
    e2_non_tobacco_how_many: number | null,
    e3_alcohol_days: number | null,
    e3_alcohol_how_many: number | null,
    e4_skin_in_sun: number | null,
    e5_avoid_sun: number | null,
    e5_wear_protection: number | null,
    e5_15spf: number | null,
    e6_vigorous_exercise: number | null,
    e7_moderate_exercise: number | null,
    e8_exercise_summary: number | null,
    e9_heredity: number | null,
    e9_lifestyle: number | null,
    e9_stresses: number | null,
    e9_strategies: number | null,
    e9_doctor_regular_basis: number | null,
    e9_follow_recommendations: number | null,
    e9_environmental: number | null,
    e9_attitude: number | null,
    userid: string,
  } | null,
};

export type UpdateHealthBehaviors2MutationVariables = {
  updateHealthBehaviors2Input: UpdateHealthBehaviors2Input,
};

export type UpdateHealthBehaviors2Mutation = {
  updateHealthBehaviors2:  {
    __typename: "HealthBehaviors2",
    e1_tobacco_days: number | null,
    e1_tobacco_how_many: number | null,
    e2_non_tobacco_days: number | null,
    e2_non_tobacco_how_many: number | null,
    e3_alcohol_days: number | null,
    e3_alcohol_how_many: number | null,
    e4_skin_in_sun: number | null,
    e5_avoid_sun: number | null,
    e5_wear_protection: number | null,
    e5_15spf: number | null,
    e6_vigorous_exercise: number | null,
    e7_moderate_exercise: number | null,
    e8_exercise_summary: number | null,
    e9_heredity: number | null,
    e9_lifestyle: number | null,
    e9_stresses: number | null,
    e9_strategies: number | null,
    e9_doctor_regular_basis: number | null,
    e9_follow_recommendations: number | null,
    e9_environmental: number | null,
    e9_attitude: number | null,
    userid: string,
  } | null,
};

export type DeleteHighMoodMutationVariables = {
  userid: string,
};

export type DeleteHighMoodMutation = {
  deleteHighMood:  {
    __typename: "HighMood",
    h2_high_mood_episode: number | null,
    h3_mood_higher_usual: number | null,
    h3_irritable_usual: number | null,
    h3_hyper: number | null,
    h3_thoughts_race: number | null,
    userid: string,
  } | null,
};

export type CreateHighMoodMutationVariables = {
  createHighMoodInput: CreateHighMoodInput,
};

export type CreateHighMoodMutation = {
  createHighMood:  {
    __typename: "HighMood",
    h2_high_mood_episode: number | null,
    h3_mood_higher_usual: number | null,
    h3_irritable_usual: number | null,
    h3_hyper: number | null,
    h3_thoughts_race: number | null,
    userid: string,
  } | null,
};

export type UpdateHighMoodMutationVariables = {
  updateHighMoodInput: UpdateHighMoodInput,
};

export type UpdateHighMoodMutation = {
  updateHighMood:  {
    __typename: "HighMood",
    h2_high_mood_episode: number | null,
    h3_mood_higher_usual: number | null,
    h3_irritable_usual: number | null,
    h3_hyper: number | null,
    h3_thoughts_race: number | null,
    userid: string,
  } | null,
};

export type DeleteLowMoodMutationVariables = {
  userid: string,
};

export type DeleteLowMoodMutation = {
  deleteLowMood:  {
    __typename: "LowMood",
    g1_sad_depressed: number | null,
    g1_discouraged: number | null,
    g1_no_interest: number | null,
    g1_down_on_yourself: number | null,
    g1_lonely: number | null,
    g3_long_depression: number | null,
    g4_depressed: number | null,
    g4_discouraged: number | null,
    g4_no_interest: number | null,
    g4_down: number | null,
    userid: string,
  } | null,
};

export type CreateLowMoodMutationVariables = {
  createLowMoodInput: CreateLowMoodInput,
};

export type CreateLowMoodMutation = {
  createLowMood:  {
    __typename: "LowMood",
    g1_sad_depressed: number | null,
    g1_discouraged: number | null,
    g1_no_interest: number | null,
    g1_down_on_yourself: number | null,
    g1_lonely: number | null,
    g3_long_depression: number | null,
    g4_depressed: number | null,
    g4_discouraged: number | null,
    g4_no_interest: number | null,
    g4_down: number | null,
    userid: string,
  } | null,
};

export type UpdateLowMoodMutationVariables = {
  updateLowMoodInput: UpdateLowMoodInput,
};

export type UpdateLowMoodMutation = {
  updateLowMood:  {
    __typename: "LowMood",
    g1_sad_depressed: number | null,
    g1_discouraged: number | null,
    g1_no_interest: number | null,
    g1_down_on_yourself: number | null,
    g1_lonely: number | null,
    g3_long_depression: number | null,
    g4_depressed: number | null,
    g4_discouraged: number | null,
    g4_no_interest: number | null,
    g4_down: number | null,
    userid: string,
  } | null,
};

export type DeleteNeighborhoodMutationVariables = {
  userid: string,
};

export type DeleteNeighborhoodMutation = {
  deleteNeighborhood:  {
    __typename: "Neighborhood",
    p1_friendly: string | null,
    p1_trusted: string | null,
    p1_share_values: string | null,
    p1_willing: string | null,
    p2_know_by_name: number | null,
    p2_conversation: number | null,
    p2_friends: number | null,
    p2_socially: number | null,
    p2_ask_help: number | null,
    userid: string,
  } | null,
};

export type CreateNeighborhoodMutationVariables = {
  createNeighborhoodInput: CreateNeighborhoodInput,
};

export type CreateNeighborhoodMutation = {
  createNeighborhood:  {
    __typename: "Neighborhood",
    p1_friendly: string | null,
    p1_trusted: string | null,
    p1_share_values: string | null,
    p1_willing: string | null,
    p2_know_by_name: number | null,
    p2_conversation: number | null,
    p2_friends: number | null,
    p2_socially: number | null,
    p2_ask_help: number | null,
    userid: string,
  } | null,
};

export type UpdateNeighborhoodMutationVariables = {
  updateNeighborhoodInput: UpdateNeighborhoodInput,
};

export type UpdateNeighborhoodMutation = {
  updateNeighborhood:  {
    __typename: "Neighborhood",
    p1_friendly: string | null,
    p1_trusted: string | null,
    p1_share_values: string | null,
    p1_willing: string | null,
    p2_know_by_name: number | null,
    p2_conversation: number | null,
    p2_friends: number | null,
    p2_socially: number | null,
    p2_ask_help: number | null,
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

export type DeletePetsMutationVariables = {
  userid: string,
};

export type DeletePetsMutation = {
  deletePets:  {
    __typename: "Pets",
    m1_pet: number | null,
    m1_type_pets: string | null,
    m1_dontlike: number | null,
    m1_spend_every_day_pet: number | null,
    m1_understood_pet: number | null,
    m1_love_pet: number | null,
    m1_talk_alot_pet: number | null,
    m1_pet_happy: number | null,
    m1_pet_friend: number | null,
    m1_pet_comfort: number | null,
    m1_lonely_without_: number | null,
    userid: string,
  } | null,
};

export type CreatePetsMutationVariables = {
  createPetsInput: CreatePetsInput,
};

export type CreatePetsMutation = {
  createPets:  {
    __typename: "Pets",
    m1_pet: number | null,
    m1_type_pets: string | null,
    m1_dontlike: number | null,
    m1_spend_every_day_pet: number | null,
    m1_understood_pet: number | null,
    m1_love_pet: number | null,
    m1_talk_alot_pet: number | null,
    m1_pet_happy: number | null,
    m1_pet_friend: number | null,
    m1_pet_comfort: number | null,
    m1_lonely_without_: number | null,
    userid: string,
  } | null,
};

export type UpdatePetsMutationVariables = {
  updatePetsInput: UpdatePetsInput,
};

export type UpdatePetsMutation = {
  updatePets:  {
    __typename: "Pets",
    m1_pet: number | null,
    m1_type_pets: string | null,
    m1_dontlike: number | null,
    m1_spend_every_day_pet: number | null,
    m1_understood_pet: number | null,
    m1_love_pet: number | null,
    m1_talk_alot_pet: number | null,
    m1_pet_happy: number | null,
    m1_pet_friend: number | null,
    m1_pet_comfort: number | null,
    m1_lonely_without_: number | null,
    userid: string,
  } | null,
};

export type DeleteQualityOfLifeMutationVariables = {
  userid: string,
};

export type DeleteQualityOfLifeMutation = {
  deleteQualityOfLife:  {
    __typename: "QualityOfLife",
    qol_general: number,
    health_general: number,
    health_compared_to_others: number,
    full_of_pep: number,
    alert_and_focused: number,
    stress: number,
    worry: number,
    happiness: number,
    anger: number,
    enjoyment: number,
    sadness: number,
    ladder_qol: number,
    userid: string,
  } | null,
};

export type CreateQualityOfLifeMutationVariables = {
  createQualityOfLifeInput: CreateQualityOfLifeInput,
};

export type CreateQualityOfLifeMutation = {
  createQualityOfLife:  {
    __typename: "QualityOfLife",
    qol_general: number,
    health_general: number,
    health_compared_to_others: number,
    full_of_pep: number,
    alert_and_focused: number,
    stress: number,
    worry: number,
    happiness: number,
    anger: number,
    enjoyment: number,
    sadness: number,
    ladder_qol: number,
    userid: string,
  } | null,
};

export type UpdateQualityOfLifeMutationVariables = {
  updateQualityOfLifeInput: UpdateQualityOfLifeInput,
};

export type UpdateQualityOfLifeMutation = {
  updateQualityOfLife:  {
    __typename: "QualityOfLife",
    qol_general: number,
    health_general: number,
    health_compared_to_others: number,
    full_of_pep: number,
    alert_and_focused: number,
    stress: number,
    worry: number,
    happiness: number,
    anger: number,
    enjoyment: number,
    sadness: number,
    ladder_qol: number,
    userid: string,
  } | null,
};

export type DeleteReligiousnessMutationVariables = {
  userid: string,
};

export type DeleteReligiousnessMutation = {
  deleteReligiousness:  {
    __typename: "Religiousness",
    n1_hard_times: number | null,
    n1_stress: number | null,
    n1_understand: number | null,
    n1_comfort: number | null,
    n1_meaning: number | null,
    n1_taking_care: number | null,
    n1_purpose: number | null,
    n1_reason: number | null,
    n1_spiritual_strength: number | null,
    n1_strenth_in_difficult_times: number | null,
    n1_wellbeing: number | null,
    n1_comfort_dailylife: number | null,
    n1_strength_dailylife: number | null,
    n2_touched_beauty: number | null,
    n2_inspiration: number | null,
    n2_grateful: number | null,
    n2_hopegful: number | null,
    n2_life_hopeful: number | null,
    n3_experience_awe: number | null,
    n3_connection_mbs: number | null,
    n3_consistent: number | null,
    n3_coherence: number | null,
    n3_live_better: number | null,
    n3_happy_in_life: number | null,
    n3_peaceful_within_self: number | null,
    n3_inner_peace: number | null,
    n3_peaceful_need_to: number | null,
    n3_harmony: number | null,
    n3_optimistic_imporove: number | null,
    n3_optimistic_uncertainty: number | null,
    n3_enjoy_life: number | null,
    n4_satisfied_mbs: number | null,
    userid: string,
  } | null,
};

export type CreateReligiousnessMutationVariables = {
  createReligiousnessInput: CreateReligiousnessInput,
};

export type CreateReligiousnessMutation = {
  createReligiousness:  {
    __typename: "Religiousness",
    n1_hard_times: number | null,
    n1_stress: number | null,
    n1_understand: number | null,
    n1_comfort: number | null,
    n1_meaning: number | null,
    n1_taking_care: number | null,
    n1_purpose: number | null,
    n1_reason: number | null,
    n1_spiritual_strength: number | null,
    n1_strenth_in_difficult_times: number | null,
    n1_wellbeing: number | null,
    n1_comfort_dailylife: number | null,
    n1_strength_dailylife: number | null,
    n2_touched_beauty: number | null,
    n2_inspiration: number | null,
    n2_grateful: number | null,
    n2_hopegful: number | null,
    n2_life_hopeful: number | null,
    n3_experience_awe: number | null,
    n3_connection_mbs: number | null,
    n3_consistent: number | null,
    n3_coherence: number | null,
    n3_live_better: number | null,
    n3_happy_in_life: number | null,
    n3_peaceful_within_self: number | null,
    n3_inner_peace: number | null,
    n3_peaceful_need_to: number | null,
    n3_harmony: number | null,
    n3_optimistic_imporove: number | null,
    n3_optimistic_uncertainty: number | null,
    n3_enjoy_life: number | null,
    n4_satisfied_mbs: number | null,
    userid: string,
  } | null,
};

export type UpdateReligiousnessMutationVariables = {
  updateReligiousnessInput: UpdateReligiousnessInput,
};

export type UpdateReligiousnessMutation = {
  updateReligiousness:  {
    __typename: "Religiousness",
    n1_hard_times: number | null,
    n1_stress: number | null,
    n1_understand: number | null,
    n1_comfort: number | null,
    n1_meaning: number | null,
    n1_taking_care: number | null,
    n1_purpose: number | null,
    n1_reason: number | null,
    n1_spiritual_strength: number | null,
    n1_strenth_in_difficult_times: number | null,
    n1_wellbeing: number | null,
    n1_comfort_dailylife: number | null,
    n1_strength_dailylife: number | null,
    n2_touched_beauty: number | null,
    n2_inspiration: number | null,
    n2_grateful: number | null,
    n2_hopegful: number | null,
    n2_life_hopeful: number | null,
    n3_experience_awe: number | null,
    n3_connection_mbs: number | null,
    n3_consistent: number | null,
    n3_coherence: number | null,
    n3_live_better: number | null,
    n3_happy_in_life: number | null,
    n3_peaceful_within_self: number | null,
    n3_inner_peace: number | null,
    n3_peaceful_need_to: number | null,
    n3_harmony: number | null,
    n3_optimistic_imporove: number | null,
    n3_optimistic_uncertainty: number | null,
    n3_enjoy_life: number | null,
    n4_satisfied_mbs: number | null,
    userid: string,
  } | null,
};

export type DeleteSleepQualityIndexMutationVariables = {
  userid: string,
};

export type DeleteSleepQualityIndexMutation = {
  deleteSleepQualityIndex:  {
    __typename: "SleepQualityIndex",
    t1_usual_bedtime: string | null,
    t1_minutes_to_sleep: number | null,
    t1_usual_wakeup: string | null,
    t1_hours_of_sleep: number | null,
    t2_cannot_sleep_30_min: number | null,
    t2_wake_up_middle_night: number | null,
    t2_bathroom: number | null,
    t2_breathe_comfortable: number | null,
    t2_cough_snore: number | null,
    t2_cold: number | null,
    t2_hot: number | null,
    t2_bad_dreams: number | null,
    t2_pain: number | null,
    t2_other: number | null,
    t3_medicine: number | null,
    t3_trouble_awake: number | null,
    t3_enthusiasm: number | null,
    t3_overall_sleep: number | null,
    userid: string,
  } | null,
};

export type CreateSleepQualityIndexMutationVariables = {
  createSleepQualityIndexInput: CreateSleepQualityIndexInput,
};

export type CreateSleepQualityIndexMutation = {
  createSleepQualityIndex:  {
    __typename: "SleepQualityIndex",
    t1_usual_bedtime: string | null,
    t1_minutes_to_sleep: number | null,
    t1_usual_wakeup: string | null,
    t1_hours_of_sleep: number | null,
    t2_cannot_sleep_30_min: number | null,
    t2_wake_up_middle_night: number | null,
    t2_bathroom: number | null,
    t2_breathe_comfortable: number | null,
    t2_cough_snore: number | null,
    t2_cold: number | null,
    t2_hot: number | null,
    t2_bad_dreams: number | null,
    t2_pain: number | null,
    t2_other: number | null,
    t3_medicine: number | null,
    t3_trouble_awake: number | null,
    t3_enthusiasm: number | null,
    t3_overall_sleep: number | null,
    userid: string,
  } | null,
};

export type UpdateSleepQualityIndexMutationVariables = {
  updateSleepQualityIndexInput: UpdateSleepQualityIndexInput,
};

export type UpdateSleepQualityIndexMutation = {
  updateSleepQualityIndex:  {
    __typename: "SleepQualityIndex",
    t1_usual_bedtime: string | null,
    t1_minutes_to_sleep: number | null,
    t1_usual_wakeup: string | null,
    t1_hours_of_sleep: number | null,
    t2_cannot_sleep_30_min: number | null,
    t2_wake_up_middle_night: number | null,
    t2_bathroom: number | null,
    t2_breathe_comfortable: number | null,
    t2_cough_snore: number | null,
    t2_cold: number | null,
    t2_hot: number | null,
    t2_bad_dreams: number | null,
    t2_pain: number | null,
    t2_other: number | null,
    t3_medicine: number | null,
    t3_trouble_awake: number | null,
    t3_enthusiasm: number | null,
    t3_overall_sleep: number | null,
    userid: string,
  } | null,
};

export type DeleteSocialNetworksMutationVariables = {
  userid: string,
};

export type DeleteSocialNetworksMutation = {
  deleteSocialNetworks:  {
    __typename: "SocialNetworks",
    o1_hours_week: number | null,
    o2_different_friends: number | null,
    o3_hours_month: number | null,
    o4_personally_socialize: number | null,
    o5_rely: number | null,
    o5_open_up: number | null,
    o5_demands: number | null,
    o5_argue: number | null,
    o6_emotionally_close: number | null,
    o6_uncomfortable: number | null,
    o6_want_to_be: number | null,
    o6_comfortable_without: number | null,
    o7_depend: number | null,
    o7_important: number | null,
    o7_miss_you: number | null,
    o7_pay_attention: number | null,
    o7_interested: number | null,
    userid: string,
  } | null,
};

export type CreateSocialNetworksMutationVariables = {
  createSocialNetworksInput: CreateSocialNetworksInput,
};

export type CreateSocialNetworksMutation = {
  createSocialNetworks:  {
    __typename: "SocialNetworks",
    o1_hours_week: number | null,
    o2_different_friends: number | null,
    o3_hours_month: number | null,
    o4_personally_socialize: number | null,
    o5_rely: number | null,
    o5_open_up: number | null,
    o5_demands: number | null,
    o5_argue: number | null,
    o6_emotionally_close: number | null,
    o6_uncomfortable: number | null,
    o6_want_to_be: number | null,
    o6_comfortable_without: number | null,
    o7_depend: number | null,
    o7_important: number | null,
    o7_miss_you: number | null,
    o7_pay_attention: number | null,
    o7_interested: number | null,
    userid: string,
  } | null,
};

export type UpdateSocialNetworksMutationVariables = {
  updateSocialNetworksInput: UpdateSocialNetworksInput,
};

export type UpdateSocialNetworksMutation = {
  updateSocialNetworks:  {
    __typename: "SocialNetworks",
    o1_hours_week: number | null,
    o2_different_friends: number | null,
    o3_hours_month: number | null,
    o4_personally_socialize: number | null,
    o5_rely: number | null,
    o5_open_up: number | null,
    o5_demands: number | null,
    o5_argue: number | null,
    o6_emotionally_close: number | null,
    o6_uncomfortable: number | null,
    o6_want_to_be: number | null,
    o6_comfortable_without: number | null,
    o7_depend: number | null,
    o7_important: number | null,
    o7_miss_you: number | null,
    o7_pay_attention: number | null,
    o7_interested: number | null,
    userid: string,
  } | null,
};

export type DeleteStressfulLifeExperiencesMutationVariables = {
  userid: string,
};

export type DeleteStressfulLifeExperiencesMutation = {
  deleteStressfulLifeExperiences:  {
    __typename: "StressfulLifeExperiences",
    i1_times: number | null,
    i2_memories: number | null,
    i2_physical: number | null,
    i2_avoid_think: number | null,
    i2_avoid_activities: number | null,
    i2_reactions: number | null,
    i3_how_old: number | null,
    i3_how_many_years: number | null,
    i3_past_30: number | null,
    i3_past_24_months: number | null,
    i4_life_threat: number | null,
    i4_death: number | null,
    i4_betrayal: number | null,
    i4_arguments: number | null,
    i4_motor_accident: number | null,
    i4_legal_problem: number | null,
    i4_any: number | null,
    i4_describe: string | null,
    i5_financial: number | null,
    i5_career: number | null,
    i5_health: number | null,
    i5_love_life: number | null,
    i5_friendships: number | null,
    i5_family_relationship: number | null,
    i5_lovedones_health: number | null,
    i5_other_lovedones: number | null,
    i5_life_overall: number | null,
    i5_describe: string | null,
    i6_keep_calm: number | null,
    i6_manage_stress: number | null,
    i6_new_approach: number | null,
    i6_get_along: number | null,
    i6_humor: number | null,
    i6_describe: string | null,
    i7_promotion: number | null,
    i7_finance_imp: number | null,
    i7_love_life_imp: number | null,
    i7_health_imp: number | null,
    i7_any: number | null,
    i7_describe: string | null,
    userid: string,
  } | null,
};

export type CreateStressfulLifeExperiencesMutationVariables = {
  createStressfulLifeExperiencesInput: CreateStressfulLifeExperiencesInput,
};

export type CreateStressfulLifeExperiencesMutation = {
  createStressfulLifeExperiences:  {
    __typename: "StressfulLifeExperiences",
    i1_times: number | null,
    i2_memories: number | null,
    i2_physical: number | null,
    i2_avoid_think: number | null,
    i2_avoid_activities: number | null,
    i2_reactions: number | null,
    i3_how_old: number | null,
    i3_how_many_years: number | null,
    i3_past_30: number | null,
    i3_past_24_months: number | null,
    i4_life_threat: number | null,
    i4_death: number | null,
    i4_betrayal: number | null,
    i4_arguments: number | null,
    i4_motor_accident: number | null,
    i4_legal_problem: number | null,
    i4_any: number | null,
    i4_describe: string | null,
    i5_financial: number | null,
    i5_career: number | null,
    i5_health: number | null,
    i5_love_life: number | null,
    i5_friendships: number | null,
    i5_family_relationship: number | null,
    i5_lovedones_health: number | null,
    i5_other_lovedones: number | null,
    i5_life_overall: number | null,
    i5_describe: string | null,
    i6_keep_calm: number | null,
    i6_manage_stress: number | null,
    i6_new_approach: number | null,
    i6_get_along: number | null,
    i6_humor: number | null,
    i6_describe: string | null,
    i7_promotion: number | null,
    i7_finance_imp: number | null,
    i7_love_life_imp: number | null,
    i7_health_imp: number | null,
    i7_any: number | null,
    i7_describe: string | null,
    userid: string,
  } | null,
};

export type UpdateStressfulLifeExperiencesMutationVariables = {
  updateStressfulLifeExperiencesInput: UpdateStressfulLifeExperiencesInput,
};

export type UpdateStressfulLifeExperiencesMutation = {
  updateStressfulLifeExperiences:  {
    __typename: "StressfulLifeExperiences",
    i1_times: number | null,
    i2_memories: number | null,
    i2_physical: number | null,
    i2_avoid_think: number | null,
    i2_avoid_activities: number | null,
    i2_reactions: number | null,
    i3_how_old: number | null,
    i3_how_many_years: number | null,
    i3_past_30: number | null,
    i3_past_24_months: number | null,
    i4_life_threat: number | null,
    i4_death: number | null,
    i4_betrayal: number | null,
    i4_arguments: number | null,
    i4_motor_accident: number | null,
    i4_legal_problem: number | null,
    i4_any: number | null,
    i4_describe: string | null,
    i5_financial: number | null,
    i5_career: number | null,
    i5_health: number | null,
    i5_love_life: number | null,
    i5_friendships: number | null,
    i5_family_relationship: number | null,
    i5_lovedones_health: number | null,
    i5_other_lovedones: number | null,
    i5_life_overall: number | null,
    i5_describe: string | null,
    i6_keep_calm: number | null,
    i6_manage_stress: number | null,
    i6_new_approach: number | null,
    i6_get_along: number | null,
    i6_humor: number | null,
    i6_describe: string | null,
    i7_promotion: number | null,
    i7_finance_imp: number | null,
    i7_love_life_imp: number | null,
    i7_health_imp: number | null,
    i7_any: number | null,
    i7_describe: string | null,
    userid: string,
  } | null,
};

export type DeleteTimeUseMutationVariables = {
  userid: string,
};

export type DeleteTimeUseMutation = {
  deleteTimeUse:  {
    __typename: "TimeUse",
    q1_work_hours: number | null,
    q1_volunteer_hours: number | null,
    q1_leisure_hours: number | null,
    q3_loved_ones: number | null,
    q3_friends: number | null,
    q3_no_technology: number | null,
    q3_technology: number | null,
    userid: string,
  } | null,
};

export type CreateTimeUseMutationVariables = {
  createTimeUseInput: CreateTimeUseInput,
};

export type CreateTimeUseMutation = {
  createTimeUse:  {
    __typename: "TimeUse",
    q1_work_hours: number | null,
    q1_volunteer_hours: number | null,
    q1_leisure_hours: number | null,
    q3_loved_ones: number | null,
    q3_friends: number | null,
    q3_no_technology: number | null,
    q3_technology: number | null,
    userid: string,
  } | null,
};

export type UpdateTimeUseMutationVariables = {
  updateTimeUseInput: UpdateTimeUseInput,
};

export type UpdateTimeUseMutation = {
  updateTimeUse:  {
    __typename: "TimeUse",
    q1_work_hours: number | null,
    q1_volunteer_hours: number | null,
    q1_leisure_hours: number | null,
    q3_loved_ones: number | null,
    q3_friends: number | null,
    q3_no_technology: number | null,
    q3_technology: number | null,
    userid: string,
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

export type DeleteYourHealthMutationVariables = {
  userid: string,
};

export type DeleteYourHealthMutation = {
  deleteYourHealth:  {
    __typename: "YourHealth",
    height_feet: number | null,
    height_inches: number | null,
    weight: number | null,
    b3_CD_clotting_disorder: number | null,
    b3_CD_high_blood_pressure: number | null,
    b3_CD_heart_attack: number | null,
    b3_CD_high_cholesterol: number | null,
    b3_CD_any: number | null,
    b3_JBD_osteoarthritis: number | null,
    b3_JBD_rheumatoid_arthritis: number | null,
    b3_JBD_osteoporosis: number | null,
    b3_RD_asthma_chronicbronc: number | null,
    b3_RD_COPD: number | null,
    b3_RD_seasonal_allergies: number | null,
    b3_PD_ADD_ADHD: number | null,
    b3_PD_anxiety: number | null,
    b3_PD_depression: number | null,
    b3_PD_bipolar_disorder: number | null,
    b3_PD_PTSD: number | null,
    b3_PD_substance_abuse: number | null,
    b3_PD_any: number | null,
    b3_CANCER_skin: number | null,
    b3_CANCER_any: number | null,
    b3_OTHER_autoimmune_disorder: number | null,
    b3_OTHER_inflammatory_skin_disorder: number | null,
    b3_OTHER_diabetes_insulin_dependant: number | null,
    b3_OTHER_diabetes_not_insulin_dependant: number | null,
    b3_OTHER_migraine: number | null,
    b3_OTHER_stomach_intestine_ulcer: number | null,
    b3_OTHER_acid_reflux: number | null,
    b3_OTHER_thyroid_disorders: number | null,
    b3_OTHER_chronic_pain: number | null,
    b3_OTHER_NONE_APPLY: number | null,
    b4_dizziness: number | null,
    b4_short_breath: number | null,
    b4_heart_pound: number | null,
    b4_tired_out: number | null,
    b4_muscle_tensiion: number | null,
    b4_restless: number | null,
    b4_anxious: number | null,
    b4_irritable: number | null,
    b5_memory: number | null,
    b5_slow_talking_moving: number | null,
    b5_concentration: number | null,
    b5_sleep_problems: number | null,
    b5_constipation: number | null,
    b5_nausea: number | null,
    b5_poor_appetite: number | null,
    b5_worrying: number | null,
    b5_feeling_angry: number | null,
    b6_back_pain: number | null,
    b6_neck_pain: number | null,
    b6_menstrual_cramps: number | null,
    b6_chest_pain: number | null,
    b6_sexual_pain: number | null,
    b6_headaches: number | null,
    b6_any_other_serious_pain: number | null,
    b6_uncontrollable_anxiety: number | null,
    b6_angry_explode: number | null,
    b10_hours_sleep: number | null,
    b11_energy: number | null,
    b14_home_management: number | null,
    b14_ability_to_work: number | null,
    b14_speed_quality_work: number | null,
    b14_social_quality: number | null,
    b14_close_relationship: number | null,
    b15_days_unable_to_work: number | null,
    b16_days_reduced_work: number | null,
    userid: string,
  } | null,
};

export type CreateYourHealthMutationVariables = {
  createYourHealthInput: CreateYourHealthInput,
};

export type CreateYourHealthMutation = {
  createYourHealth:  {
    __typename: "YourHealth",
    height_feet: number | null,
    height_inches: number | null,
    weight: number | null,
    b3_CD_clotting_disorder: number | null,
    b3_CD_high_blood_pressure: number | null,
    b3_CD_heart_attack: number | null,
    b3_CD_high_cholesterol: number | null,
    b3_CD_any: number | null,
    b3_JBD_osteoarthritis: number | null,
    b3_JBD_rheumatoid_arthritis: number | null,
    b3_JBD_osteoporosis: number | null,
    b3_RD_asthma_chronicbronc: number | null,
    b3_RD_COPD: number | null,
    b3_RD_seasonal_allergies: number | null,
    b3_PD_ADD_ADHD: number | null,
    b3_PD_anxiety: number | null,
    b3_PD_depression: number | null,
    b3_PD_bipolar_disorder: number | null,
    b3_PD_PTSD: number | null,
    b3_PD_substance_abuse: number | null,
    b3_PD_any: number | null,
    b3_CANCER_skin: number | null,
    b3_CANCER_any: number | null,
    b3_OTHER_autoimmune_disorder: number | null,
    b3_OTHER_inflammatory_skin_disorder: number | null,
    b3_OTHER_diabetes_insulin_dependant: number | null,
    b3_OTHER_diabetes_not_insulin_dependant: number | null,
    b3_OTHER_migraine: number | null,
    b3_OTHER_stomach_intestine_ulcer: number | null,
    b3_OTHER_acid_reflux: number | null,
    b3_OTHER_thyroid_disorders: number | null,
    b3_OTHER_chronic_pain: number | null,
    b3_OTHER_NONE_APPLY: number | null,
    b4_dizziness: number | null,
    b4_short_breath: number | null,
    b4_heart_pound: number | null,
    b4_tired_out: number | null,
    b4_muscle_tensiion: number | null,
    b4_restless: number | null,
    b4_anxious: number | null,
    b4_irritable: number | null,
    b5_memory: number | null,
    b5_slow_talking_moving: number | null,
    b5_concentration: number | null,
    b5_sleep_problems: number | null,
    b5_constipation: number | null,
    b5_nausea: number | null,
    b5_poor_appetite: number | null,
    b5_worrying: number | null,
    b5_feeling_angry: number | null,
    b6_back_pain: number | null,
    b6_neck_pain: number | null,
    b6_menstrual_cramps: number | null,
    b6_chest_pain: number | null,
    b6_sexual_pain: number | null,
    b6_headaches: number | null,
    b6_any_other_serious_pain: number | null,
    b6_uncontrollable_anxiety: number | null,
    b6_angry_explode: number | null,
    b10_hours_sleep: number | null,
    b11_energy: number | null,
    b14_home_management: number | null,
    b14_ability_to_work: number | null,
    b14_speed_quality_work: number | null,
    b14_social_quality: number | null,
    b14_close_relationship: number | null,
    b15_days_unable_to_work: number | null,
    b16_days_reduced_work: number | null,
    userid: string,
  } | null,
};

export type UpdateYourHealthMutationVariables = {
  updateYourHealthInput: UpdateYourHealthInput,
};

export type UpdateYourHealthMutation = {
  updateYourHealth:  {
    __typename: "YourHealth",
    height_feet: number | null,
    height_inches: number | null,
    weight: number | null,
    b3_CD_clotting_disorder: number | null,
    b3_CD_high_blood_pressure: number | null,
    b3_CD_heart_attack: number | null,
    b3_CD_high_cholesterol: number | null,
    b3_CD_any: number | null,
    b3_JBD_osteoarthritis: number | null,
    b3_JBD_rheumatoid_arthritis: number | null,
    b3_JBD_osteoporosis: number | null,
    b3_RD_asthma_chronicbronc: number | null,
    b3_RD_COPD: number | null,
    b3_RD_seasonal_allergies: number | null,
    b3_PD_ADD_ADHD: number | null,
    b3_PD_anxiety: number | null,
    b3_PD_depression: number | null,
    b3_PD_bipolar_disorder: number | null,
    b3_PD_PTSD: number | null,
    b3_PD_substance_abuse: number | null,
    b3_PD_any: number | null,
    b3_CANCER_skin: number | null,
    b3_CANCER_any: number | null,
    b3_OTHER_autoimmune_disorder: number | null,
    b3_OTHER_inflammatory_skin_disorder: number | null,
    b3_OTHER_diabetes_insulin_dependant: number | null,
    b3_OTHER_diabetes_not_insulin_dependant: number | null,
    b3_OTHER_migraine: number | null,
    b3_OTHER_stomach_intestine_ulcer: number | null,
    b3_OTHER_acid_reflux: number | null,
    b3_OTHER_thyroid_disorders: number | null,
    b3_OTHER_chronic_pain: number | null,
    b3_OTHER_NONE_APPLY: number | null,
    b4_dizziness: number | null,
    b4_short_breath: number | null,
    b4_heart_pound: number | null,
    b4_tired_out: number | null,
    b4_muscle_tensiion: number | null,
    b4_restless: number | null,
    b4_anxious: number | null,
    b4_irritable: number | null,
    b5_memory: number | null,
    b5_slow_talking_moving: number | null,
    b5_concentration: number | null,
    b5_sleep_problems: number | null,
    b5_constipation: number | null,
    b5_nausea: number | null,
    b5_poor_appetite: number | null,
    b5_worrying: number | null,
    b5_feeling_angry: number | null,
    b6_back_pain: number | null,
    b6_neck_pain: number | null,
    b6_menstrual_cramps: number | null,
    b6_chest_pain: number | null,
    b6_sexual_pain: number | null,
    b6_headaches: number | null,
    b6_any_other_serious_pain: number | null,
    b6_uncontrollable_anxiety: number | null,
    b6_angry_explode: number | null,
    b10_hours_sleep: number | null,
    b11_energy: number | null,
    b14_home_management: number | null,
    b14_ability_to_work: number | null,
    b14_speed_quality_work: number | null,
    b14_social_quality: number | null,
    b14_close_relationship: number | null,
    b15_days_unable_to_work: number | null,
    b16_days_reduced_work: number | null,
    userid: string,
  } | null,
};

export type DeleteYourPersonalityMutationVariables = {
  userid: string,
};

export type DeleteYourPersonalityMutation = {
  deleteYourPersonality:  {
    __typename: "YourPersonality",
    j1_reserved: number | null,
    j1_helpful: number | null,
    j1_broadminded: number | null,
    j1_moody: number | null,
    j1_outgoing: number | null,
    j1_emotionally_stable: number | null,
    j1_critical: number | null,
    j1_adventurous: number | null,
    j1_nervous: number | null,
    j1_unreliable: number | null,
    j1_quiet: number | null,
    j2_softhearted: number | null,
    j2_creative: number | null,
    j2_calm: number | null,
    j2_friendly: number | null,
    j2_careless: number | null,
    j2_uncompassionate: number | null,
    j2_curious: number | null,
    j2_upset: number | null,
    j2_talkative: number | null,
    j2_sympathetic: number | null,
    j2_organized: number | null,
    j2_sensitive: number | null,
    j3_interests: number | null,
    j3_opinions: number | null,
    j3_purpose: number | null,
    j3_think_a_lot: number | null,
    j3_do_a_lot: number | null,
    userid: string,
  } | null,
};

export type CreateYourPersonalityMutationVariables = {
  createYourPersonalityInput: CreateYourPersonalityInput,
};

export type CreateYourPersonalityMutation = {
  createYourPersonality:  {
    __typename: "YourPersonality",
    j1_reserved: number | null,
    j1_helpful: number | null,
    j1_broadminded: number | null,
    j1_moody: number | null,
    j1_outgoing: number | null,
    j1_emotionally_stable: number | null,
    j1_critical: number | null,
    j1_adventurous: number | null,
    j1_nervous: number | null,
    j1_unreliable: number | null,
    j1_quiet: number | null,
    j2_softhearted: number | null,
    j2_creative: number | null,
    j2_calm: number | null,
    j2_friendly: number | null,
    j2_careless: number | null,
    j2_uncompassionate: number | null,
    j2_curious: number | null,
    j2_upset: number | null,
    j2_talkative: number | null,
    j2_sympathetic: number | null,
    j2_organized: number | null,
    j2_sensitive: number | null,
    j3_interests: number | null,
    j3_opinions: number | null,
    j3_purpose: number | null,
    j3_think_a_lot: number | null,
    j3_do_a_lot: number | null,
    userid: string,
  } | null,
};

export type UpdateYourPersonalityMutationVariables = {
  updateYourPersonalityInput: UpdateYourPersonalityInput,
};

export type UpdateYourPersonalityMutation = {
  updateYourPersonality:  {
    __typename: "YourPersonality",
    j1_reserved: number | null,
    j1_helpful: number | null,
    j1_broadminded: number | null,
    j1_moody: number | null,
    j1_outgoing: number | null,
    j1_emotionally_stable: number | null,
    j1_critical: number | null,
    j1_adventurous: number | null,
    j1_nervous: number | null,
    j1_unreliable: number | null,
    j1_quiet: number | null,
    j2_softhearted: number | null,
    j2_creative: number | null,
    j2_calm: number | null,
    j2_friendly: number | null,
    j2_careless: number | null,
    j2_uncompassionate: number | null,
    j2_curious: number | null,
    j2_upset: number | null,
    j2_talkative: number | null,
    j2_sympathetic: number | null,
    j2_organized: number | null,
    j2_sensitive: number | null,
    j3_interests: number | null,
    j3_opinions: number | null,
    j3_purpose: number | null,
    j3_think_a_lot: number | null,
    j3_do_a_lot: number | null,
    userid: string,
  } | null,
};

export type DeleteCustomersMutationVariables = {
  id: number,
};

export type DeleteCustomersMutation = {
  deleteCustomers:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type CreateCustomersMutationVariables = {
  createCustomersInput: CreateCustomersInput,
};

export type CreateCustomersMutation = {
  createCustomers:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type UpdateCustomersMutationVariables = {
  updateCustomersInput: UpdateCustomersInput,
};

export type UpdateCustomersMutation = {
  updateCustomers:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
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
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    UserID: string,
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
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    UserID: string,
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
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    UserID: string,
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
      stack: number,
      stackPhrase: string | null,
      placeHolder: string | null,
      usedForms:  {
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
      category:  {
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
      subSection:  {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order: number,
      items: Array< string | null > | null,
      imagesPath: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      formQuestions:  {
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
      UserID: string,
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
      stack: number,
      stackPhrase: string | null,
      placeHolder: string | null,
      usedForms:  {
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
      category:  {
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
      subSection:  {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order: number,
      items: Array< string | null > | null,
      imagesPath: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      formQuestions:  {
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
      UserID: string,
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
      stack: number,
      stackPhrase: string | null,
      placeHolder: string | null,
      usedForms:  {
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
      category:  {
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
      subSection:  {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order: number,
      items: Array< string | null > | null,
      imagesPath: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      formQuestions:  {
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
      UserID: string,
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
    stack: number,
    stackPhrase: string | null,
    placeHolder: string | null,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        subSections:  {
          __typename: "ModelSubSectionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    items: Array< string | null > | null,
    imagesPath: Array< string | null > | null,
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
    stackPhrase: string | null,
    placeHolder: string | null,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        subSections:  {
          __typename: "ModelSubSectionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    items: Array< string | null > | null,
    imagesPath: Array< string | null > | null,
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
    stackPhrase: string | null,
    placeHolder: string | null,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        subSections:  {
          __typename: "ModelSubSectionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    items: Array< string | null > | null,
    imagesPath: Array< string | null > | null,
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
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    subSections:  {
      __typename: "ModelSubSectionConnection",
      items:  Array< {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      items:  Array< {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      items:  Array< {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      subSections:  {
        __typename: "ModelSubSectionConnection",
        items:  Array< {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      subSections:  {
        __typename: "ModelSubSectionConnection",
        items:  Array< {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      subSections:  {
        __typename: "ModelSubSectionConnection",
        items:  Array< {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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

export type GetHealthBehaviors2QueryVariables = {
  userid: string,
};

export type GetHealthBehaviors2Query = {
  getHealthBehaviors2:  {
    __typename: "HealthBehaviors2",
    e1_tobacco_days: number | null,
    e1_tobacco_how_many: number | null,
    e2_non_tobacco_days: number | null,
    e2_non_tobacco_how_many: number | null,
    e3_alcohol_days: number | null,
    e3_alcohol_how_many: number | null,
    e4_skin_in_sun: number | null,
    e5_avoid_sun: number | null,
    e5_wear_protection: number | null,
    e5_15spf: number | null,
    e6_vigorous_exercise: number | null,
    e7_moderate_exercise: number | null,
    e8_exercise_summary: number | null,
    e9_heredity: number | null,
    e9_lifestyle: number | null,
    e9_stresses: number | null,
    e9_strategies: number | null,
    e9_doctor_regular_basis: number | null,
    e9_follow_recommendations: number | null,
    e9_environmental: number | null,
    e9_attitude: number | null,
    userid: string,
  } | null,
};

export type ListHealthBehaviors2sQuery = {
  listHealthBehaviors2s:  Array< {
    __typename: "HealthBehaviors2",
    e1_tobacco_days: number | null,
    e1_tobacco_how_many: number | null,
    e2_non_tobacco_days: number | null,
    e2_non_tobacco_how_many: number | null,
    e3_alcohol_days: number | null,
    e3_alcohol_how_many: number | null,
    e4_skin_in_sun: number | null,
    e5_avoid_sun: number | null,
    e5_wear_protection: number | null,
    e5_15spf: number | null,
    e6_vigorous_exercise: number | null,
    e7_moderate_exercise: number | null,
    e8_exercise_summary: number | null,
    e9_heredity: number | null,
    e9_lifestyle: number | null,
    e9_stresses: number | null,
    e9_strategies: number | null,
    e9_doctor_regular_basis: number | null,
    e9_follow_recommendations: number | null,
    e9_environmental: number | null,
    e9_attitude: number | null,
    userid: string,
  } | null > | null,
};

export type GetHighMoodQueryVariables = {
  userid: string,
};

export type GetHighMoodQuery = {
  getHighMood:  {
    __typename: "HighMood",
    h2_high_mood_episode: number | null,
    h3_mood_higher_usual: number | null,
    h3_irritable_usual: number | null,
    h3_hyper: number | null,
    h3_thoughts_race: number | null,
    userid: string,
  } | null,
};

export type ListHighMoodsQuery = {
  listHighMoods:  Array< {
    __typename: "HighMood",
    h2_high_mood_episode: number | null,
    h3_mood_higher_usual: number | null,
    h3_irritable_usual: number | null,
    h3_hyper: number | null,
    h3_thoughts_race: number | null,
    userid: string,
  } | null > | null,
};

export type GetLowMoodQueryVariables = {
  userid: string,
};

export type GetLowMoodQuery = {
  getLowMood:  {
    __typename: "LowMood",
    g1_sad_depressed: number | null,
    g1_discouraged: number | null,
    g1_no_interest: number | null,
    g1_down_on_yourself: number | null,
    g1_lonely: number | null,
    g3_long_depression: number | null,
    g4_depressed: number | null,
    g4_discouraged: number | null,
    g4_no_interest: number | null,
    g4_down: number | null,
    userid: string,
  } | null,
};

export type ListLowMoodsQuery = {
  listLowMoods:  Array< {
    __typename: "LowMood",
    g1_sad_depressed: number | null,
    g1_discouraged: number | null,
    g1_no_interest: number | null,
    g1_down_on_yourself: number | null,
    g1_lonely: number | null,
    g3_long_depression: number | null,
    g4_depressed: number | null,
    g4_discouraged: number | null,
    g4_no_interest: number | null,
    g4_down: number | null,
    userid: string,
  } | null > | null,
};

export type GetNeighborhoodQueryVariables = {
  userid: string,
};

export type GetNeighborhoodQuery = {
  getNeighborhood:  {
    __typename: "Neighborhood",
    p1_friendly: string | null,
    p1_trusted: string | null,
    p1_share_values: string | null,
    p1_willing: string | null,
    p2_know_by_name: number | null,
    p2_conversation: number | null,
    p2_friends: number | null,
    p2_socially: number | null,
    p2_ask_help: number | null,
    userid: string,
  } | null,
};

export type ListNeighborhoodsQuery = {
  listNeighborhoods:  Array< {
    __typename: "Neighborhood",
    p1_friendly: string | null,
    p1_trusted: string | null,
    p1_share_values: string | null,
    p1_willing: string | null,
    p2_know_by_name: number | null,
    p2_conversation: number | null,
    p2_friends: number | null,
    p2_socially: number | null,
    p2_ask_help: number | null,
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

export type GetPetsQueryVariables = {
  userid: string,
};

export type GetPetsQuery = {
  getPets:  {
    __typename: "Pets",
    m1_pet: number | null,
    m1_type_pets: string | null,
    m1_dontlike: number | null,
    m1_spend_every_day_pet: number | null,
    m1_understood_pet: number | null,
    m1_love_pet: number | null,
    m1_talk_alot_pet: number | null,
    m1_pet_happy: number | null,
    m1_pet_friend: number | null,
    m1_pet_comfort: number | null,
    m1_lonely_without_: number | null,
    userid: string,
  } | null,
};

export type ListPetssQuery = {
  listPetss:  Array< {
    __typename: "Pets",
    m1_pet: number | null,
    m1_type_pets: string | null,
    m1_dontlike: number | null,
    m1_spend_every_day_pet: number | null,
    m1_understood_pet: number | null,
    m1_love_pet: number | null,
    m1_talk_alot_pet: number | null,
    m1_pet_happy: number | null,
    m1_pet_friend: number | null,
    m1_pet_comfort: number | null,
    m1_lonely_without_: number | null,
    userid: string,
  } | null > | null,
};

export type GetQualityOfLifeQueryVariables = {
  userid: string,
};

export type GetQualityOfLifeQuery = {
  getQualityOfLife:  {
    __typename: "QualityOfLife",
    qol_general: number,
    health_general: number,
    health_compared_to_others: number,
    full_of_pep: number,
    alert_and_focused: number,
    stress: number,
    worry: number,
    happiness: number,
    anger: number,
    enjoyment: number,
    sadness: number,
    ladder_qol: number,
    userid: string,
  } | null,
};

export type ListQualityOfLifesQuery = {
  listQualityOfLifes:  Array< {
    __typename: "QualityOfLife",
    qol_general: number,
    health_general: number,
    health_compared_to_others: number,
    full_of_pep: number,
    alert_and_focused: number,
    stress: number,
    worry: number,
    happiness: number,
    anger: number,
    enjoyment: number,
    sadness: number,
    ladder_qol: number,
    userid: string,
  } | null > | null,
};

export type GetReligiousnessQueryVariables = {
  userid: string,
};

export type GetReligiousnessQuery = {
  getReligiousness:  {
    __typename: "Religiousness",
    n1_hard_times: number | null,
    n1_stress: number | null,
    n1_understand: number | null,
    n1_comfort: number | null,
    n1_meaning: number | null,
    n1_taking_care: number | null,
    n1_purpose: number | null,
    n1_reason: number | null,
    n1_spiritual_strength: number | null,
    n1_strenth_in_difficult_times: number | null,
    n1_wellbeing: number | null,
    n1_comfort_dailylife: number | null,
    n1_strength_dailylife: number | null,
    n2_touched_beauty: number | null,
    n2_inspiration: number | null,
    n2_grateful: number | null,
    n2_hopegful: number | null,
    n2_life_hopeful: number | null,
    n3_experience_awe: number | null,
    n3_connection_mbs: number | null,
    n3_consistent: number | null,
    n3_coherence: number | null,
    n3_live_better: number | null,
    n3_happy_in_life: number | null,
    n3_peaceful_within_self: number | null,
    n3_inner_peace: number | null,
    n3_peaceful_need_to: number | null,
    n3_harmony: number | null,
    n3_optimistic_imporove: number | null,
    n3_optimistic_uncertainty: number | null,
    n3_enjoy_life: number | null,
    n4_satisfied_mbs: number | null,
    userid: string,
  } | null,
};

export type ListReligiousnesssQuery = {
  listReligiousnesss:  Array< {
    __typename: "Religiousness",
    n1_hard_times: number | null,
    n1_stress: number | null,
    n1_understand: number | null,
    n1_comfort: number | null,
    n1_meaning: number | null,
    n1_taking_care: number | null,
    n1_purpose: number | null,
    n1_reason: number | null,
    n1_spiritual_strength: number | null,
    n1_strenth_in_difficult_times: number | null,
    n1_wellbeing: number | null,
    n1_comfort_dailylife: number | null,
    n1_strength_dailylife: number | null,
    n2_touched_beauty: number | null,
    n2_inspiration: number | null,
    n2_grateful: number | null,
    n2_hopegful: number | null,
    n2_life_hopeful: number | null,
    n3_experience_awe: number | null,
    n3_connection_mbs: number | null,
    n3_consistent: number | null,
    n3_coherence: number | null,
    n3_live_better: number | null,
    n3_happy_in_life: number | null,
    n3_peaceful_within_self: number | null,
    n3_inner_peace: number | null,
    n3_peaceful_need_to: number | null,
    n3_harmony: number | null,
    n3_optimistic_imporove: number | null,
    n3_optimistic_uncertainty: number | null,
    n3_enjoy_life: number | null,
    n4_satisfied_mbs: number | null,
    userid: string,
  } | null > | null,
};

export type GetSleepQualityIndexQueryVariables = {
  userid: string,
};

export type GetSleepQualityIndexQuery = {
  getSleepQualityIndex:  {
    __typename: "SleepQualityIndex",
    t1_usual_bedtime: string | null,
    t1_minutes_to_sleep: number | null,
    t1_usual_wakeup: string | null,
    t1_hours_of_sleep: number | null,
    t2_cannot_sleep_30_min: number | null,
    t2_wake_up_middle_night: number | null,
    t2_bathroom: number | null,
    t2_breathe_comfortable: number | null,
    t2_cough_snore: number | null,
    t2_cold: number | null,
    t2_hot: number | null,
    t2_bad_dreams: number | null,
    t2_pain: number | null,
    t2_other: number | null,
    t3_medicine: number | null,
    t3_trouble_awake: number | null,
    t3_enthusiasm: number | null,
    t3_overall_sleep: number | null,
    userid: string,
  } | null,
};

export type ListSleepQualityIndexsQuery = {
  listSleepQualityIndexs:  Array< {
    __typename: "SleepQualityIndex",
    t1_usual_bedtime: string | null,
    t1_minutes_to_sleep: number | null,
    t1_usual_wakeup: string | null,
    t1_hours_of_sleep: number | null,
    t2_cannot_sleep_30_min: number | null,
    t2_wake_up_middle_night: number | null,
    t2_bathroom: number | null,
    t2_breathe_comfortable: number | null,
    t2_cough_snore: number | null,
    t2_cold: number | null,
    t2_hot: number | null,
    t2_bad_dreams: number | null,
    t2_pain: number | null,
    t2_other: number | null,
    t3_medicine: number | null,
    t3_trouble_awake: number | null,
    t3_enthusiasm: number | null,
    t3_overall_sleep: number | null,
    userid: string,
  } | null > | null,
};

export type GetSocialNetworksQueryVariables = {
  userid: string,
};

export type GetSocialNetworksQuery = {
  getSocialNetworks:  {
    __typename: "SocialNetworks",
    o1_hours_week: number | null,
    o2_different_friends: number | null,
    o3_hours_month: number | null,
    o4_personally_socialize: number | null,
    o5_rely: number | null,
    o5_open_up: number | null,
    o5_demands: number | null,
    o5_argue: number | null,
    o6_emotionally_close: number | null,
    o6_uncomfortable: number | null,
    o6_want_to_be: number | null,
    o6_comfortable_without: number | null,
    o7_depend: number | null,
    o7_important: number | null,
    o7_miss_you: number | null,
    o7_pay_attention: number | null,
    o7_interested: number | null,
    userid: string,
  } | null,
};

export type ListSocialNetworkssQuery = {
  listSocialNetworkss:  Array< {
    __typename: "SocialNetworks",
    o1_hours_week: number | null,
    o2_different_friends: number | null,
    o3_hours_month: number | null,
    o4_personally_socialize: number | null,
    o5_rely: number | null,
    o5_open_up: number | null,
    o5_demands: number | null,
    o5_argue: number | null,
    o6_emotionally_close: number | null,
    o6_uncomfortable: number | null,
    o6_want_to_be: number | null,
    o6_comfortable_without: number | null,
    o7_depend: number | null,
    o7_important: number | null,
    o7_miss_you: number | null,
    o7_pay_attention: number | null,
    o7_interested: number | null,
    userid: string,
  } | null > | null,
};

export type GetStressfulLifeExperiencesQueryVariables = {
  userid: string,
};

export type GetStressfulLifeExperiencesQuery = {
  getStressfulLifeExperiences:  {
    __typename: "StressfulLifeExperiences",
    i1_times: number | null,
    i2_memories: number | null,
    i2_physical: number | null,
    i2_avoid_think: number | null,
    i2_avoid_activities: number | null,
    i2_reactions: number | null,
    i3_how_old: number | null,
    i3_how_many_years: number | null,
    i3_past_30: number | null,
    i3_past_24_months: number | null,
    i4_life_threat: number | null,
    i4_death: number | null,
    i4_betrayal: number | null,
    i4_arguments: number | null,
    i4_motor_accident: number | null,
    i4_legal_problem: number | null,
    i4_any: number | null,
    i4_describe: string | null,
    i5_financial: number | null,
    i5_career: number | null,
    i5_health: number | null,
    i5_love_life: number | null,
    i5_friendships: number | null,
    i5_family_relationship: number | null,
    i5_lovedones_health: number | null,
    i5_other_lovedones: number | null,
    i5_life_overall: number | null,
    i5_describe: string | null,
    i6_keep_calm: number | null,
    i6_manage_stress: number | null,
    i6_new_approach: number | null,
    i6_get_along: number | null,
    i6_humor: number | null,
    i6_describe: string | null,
    i7_promotion: number | null,
    i7_finance_imp: number | null,
    i7_love_life_imp: number | null,
    i7_health_imp: number | null,
    i7_any: number | null,
    i7_describe: string | null,
    userid: string,
  } | null,
};

export type ListStressfulLifeExperiencessQuery = {
  listStressfulLifeExperiencess:  Array< {
    __typename: "StressfulLifeExperiences",
    i1_times: number | null,
    i2_memories: number | null,
    i2_physical: number | null,
    i2_avoid_think: number | null,
    i2_avoid_activities: number | null,
    i2_reactions: number | null,
    i3_how_old: number | null,
    i3_how_many_years: number | null,
    i3_past_30: number | null,
    i3_past_24_months: number | null,
    i4_life_threat: number | null,
    i4_death: number | null,
    i4_betrayal: number | null,
    i4_arguments: number | null,
    i4_motor_accident: number | null,
    i4_legal_problem: number | null,
    i4_any: number | null,
    i4_describe: string | null,
    i5_financial: number | null,
    i5_career: number | null,
    i5_health: number | null,
    i5_love_life: number | null,
    i5_friendships: number | null,
    i5_family_relationship: number | null,
    i5_lovedones_health: number | null,
    i5_other_lovedones: number | null,
    i5_life_overall: number | null,
    i5_describe: string | null,
    i6_keep_calm: number | null,
    i6_manage_stress: number | null,
    i6_new_approach: number | null,
    i6_get_along: number | null,
    i6_humor: number | null,
    i6_describe: string | null,
    i7_promotion: number | null,
    i7_finance_imp: number | null,
    i7_love_life_imp: number | null,
    i7_health_imp: number | null,
    i7_any: number | null,
    i7_describe: string | null,
    userid: string,
  } | null > | null,
};

export type GetTimeUseQueryVariables = {
  userid: string,
};

export type GetTimeUseQuery = {
  getTimeUse:  {
    __typename: "TimeUse",
    q1_work_hours: number | null,
    q1_volunteer_hours: number | null,
    q1_leisure_hours: number | null,
    q3_loved_ones: number | null,
    q3_friends: number | null,
    q3_no_technology: number | null,
    q3_technology: number | null,
    userid: string,
  } | null,
};

export type ListTimeUsesQuery = {
  listTimeUses:  Array< {
    __typename: "TimeUse",
    q1_work_hours: number | null,
    q1_volunteer_hours: number | null,
    q1_leisure_hours: number | null,
    q3_loved_ones: number | null,
    q3_friends: number | null,
    q3_no_technology: number | null,
    q3_technology: number | null,
    userid: string,
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

export type GetYourHealthQueryVariables = {
  userid: string,
};

export type GetYourHealthQuery = {
  getYourHealth:  {
    __typename: "YourHealth",
    height_feet: number | null,
    height_inches: number | null,
    weight: number | null,
    b3_CD_clotting_disorder: number | null,
    b3_CD_high_blood_pressure: number | null,
    b3_CD_heart_attack: number | null,
    b3_CD_high_cholesterol: number | null,
    b3_CD_any: number | null,
    b3_JBD_osteoarthritis: number | null,
    b3_JBD_rheumatoid_arthritis: number | null,
    b3_JBD_osteoporosis: number | null,
    b3_RD_asthma_chronicbronc: number | null,
    b3_RD_COPD: number | null,
    b3_RD_seasonal_allergies: number | null,
    b3_PD_ADD_ADHD: number | null,
    b3_PD_anxiety: number | null,
    b3_PD_depression: number | null,
    b3_PD_bipolar_disorder: number | null,
    b3_PD_PTSD: number | null,
    b3_PD_substance_abuse: number | null,
    b3_PD_any: number | null,
    b3_CANCER_skin: number | null,
    b3_CANCER_any: number | null,
    b3_OTHER_autoimmune_disorder: number | null,
    b3_OTHER_inflammatory_skin_disorder: number | null,
    b3_OTHER_diabetes_insulin_dependant: number | null,
    b3_OTHER_diabetes_not_insulin_dependant: number | null,
    b3_OTHER_migraine: number | null,
    b3_OTHER_stomach_intestine_ulcer: number | null,
    b3_OTHER_acid_reflux: number | null,
    b3_OTHER_thyroid_disorders: number | null,
    b3_OTHER_chronic_pain: number | null,
    b3_OTHER_NONE_APPLY: number | null,
    b4_dizziness: number | null,
    b4_short_breath: number | null,
    b4_heart_pound: number | null,
    b4_tired_out: number | null,
    b4_muscle_tensiion: number | null,
    b4_restless: number | null,
    b4_anxious: number | null,
    b4_irritable: number | null,
    b5_memory: number | null,
    b5_slow_talking_moving: number | null,
    b5_concentration: number | null,
    b5_sleep_problems: number | null,
    b5_constipation: number | null,
    b5_nausea: number | null,
    b5_poor_appetite: number | null,
    b5_worrying: number | null,
    b5_feeling_angry: number | null,
    b6_back_pain: number | null,
    b6_neck_pain: number | null,
    b6_menstrual_cramps: number | null,
    b6_chest_pain: number | null,
    b6_sexual_pain: number | null,
    b6_headaches: number | null,
    b6_any_other_serious_pain: number | null,
    b6_uncontrollable_anxiety: number | null,
    b6_angry_explode: number | null,
    b10_hours_sleep: number | null,
    b11_energy: number | null,
    b14_home_management: number | null,
    b14_ability_to_work: number | null,
    b14_speed_quality_work: number | null,
    b14_social_quality: number | null,
    b14_close_relationship: number | null,
    b15_days_unable_to_work: number | null,
    b16_days_reduced_work: number | null,
    userid: string,
  } | null,
};

export type ListYourHealthsQuery = {
  listYourHealths:  Array< {
    __typename: "YourHealth",
    height_feet: number | null,
    height_inches: number | null,
    weight: number | null,
    b3_CD_clotting_disorder: number | null,
    b3_CD_high_blood_pressure: number | null,
    b3_CD_heart_attack: number | null,
    b3_CD_high_cholesterol: number | null,
    b3_CD_any: number | null,
    b3_JBD_osteoarthritis: number | null,
    b3_JBD_rheumatoid_arthritis: number | null,
    b3_JBD_osteoporosis: number | null,
    b3_RD_asthma_chronicbronc: number | null,
    b3_RD_COPD: number | null,
    b3_RD_seasonal_allergies: number | null,
    b3_PD_ADD_ADHD: number | null,
    b3_PD_anxiety: number | null,
    b3_PD_depression: number | null,
    b3_PD_bipolar_disorder: number | null,
    b3_PD_PTSD: number | null,
    b3_PD_substance_abuse: number | null,
    b3_PD_any: number | null,
    b3_CANCER_skin: number | null,
    b3_CANCER_any: number | null,
    b3_OTHER_autoimmune_disorder: number | null,
    b3_OTHER_inflammatory_skin_disorder: number | null,
    b3_OTHER_diabetes_insulin_dependant: number | null,
    b3_OTHER_diabetes_not_insulin_dependant: number | null,
    b3_OTHER_migraine: number | null,
    b3_OTHER_stomach_intestine_ulcer: number | null,
    b3_OTHER_acid_reflux: number | null,
    b3_OTHER_thyroid_disorders: number | null,
    b3_OTHER_chronic_pain: number | null,
    b3_OTHER_NONE_APPLY: number | null,
    b4_dizziness: number | null,
    b4_short_breath: number | null,
    b4_heart_pound: number | null,
    b4_tired_out: number | null,
    b4_muscle_tensiion: number | null,
    b4_restless: number | null,
    b4_anxious: number | null,
    b4_irritable: number | null,
    b5_memory: number | null,
    b5_slow_talking_moving: number | null,
    b5_concentration: number | null,
    b5_sleep_problems: number | null,
    b5_constipation: number | null,
    b5_nausea: number | null,
    b5_poor_appetite: number | null,
    b5_worrying: number | null,
    b5_feeling_angry: number | null,
    b6_back_pain: number | null,
    b6_neck_pain: number | null,
    b6_menstrual_cramps: number | null,
    b6_chest_pain: number | null,
    b6_sexual_pain: number | null,
    b6_headaches: number | null,
    b6_any_other_serious_pain: number | null,
    b6_uncontrollable_anxiety: number | null,
    b6_angry_explode: number | null,
    b10_hours_sleep: number | null,
    b11_energy: number | null,
    b14_home_management: number | null,
    b14_ability_to_work: number | null,
    b14_speed_quality_work: number | null,
    b14_social_quality: number | null,
    b14_close_relationship: number | null,
    b15_days_unable_to_work: number | null,
    b16_days_reduced_work: number | null,
    userid: string,
  } | null > | null,
};

export type GetYourPersonalityQueryVariables = {
  userid: string,
};

export type GetYourPersonalityQuery = {
  getYourPersonality:  {
    __typename: "YourPersonality",
    j1_reserved: number | null,
    j1_helpful: number | null,
    j1_broadminded: number | null,
    j1_moody: number | null,
    j1_outgoing: number | null,
    j1_emotionally_stable: number | null,
    j1_critical: number | null,
    j1_adventurous: number | null,
    j1_nervous: number | null,
    j1_unreliable: number | null,
    j1_quiet: number | null,
    j2_softhearted: number | null,
    j2_creative: number | null,
    j2_calm: number | null,
    j2_friendly: number | null,
    j2_careless: number | null,
    j2_uncompassionate: number | null,
    j2_curious: number | null,
    j2_upset: number | null,
    j2_talkative: number | null,
    j2_sympathetic: number | null,
    j2_organized: number | null,
    j2_sensitive: number | null,
    j3_interests: number | null,
    j3_opinions: number | null,
    j3_purpose: number | null,
    j3_think_a_lot: number | null,
    j3_do_a_lot: number | null,
    userid: string,
  } | null,
};

export type ListYourPersonalitysQuery = {
  listYourPersonalitys:  Array< {
    __typename: "YourPersonality",
    j1_reserved: number | null,
    j1_helpful: number | null,
    j1_broadminded: number | null,
    j1_moody: number | null,
    j1_outgoing: number | null,
    j1_emotionally_stable: number | null,
    j1_critical: number | null,
    j1_adventurous: number | null,
    j1_nervous: number | null,
    j1_unreliable: number | null,
    j1_quiet: number | null,
    j2_softhearted: number | null,
    j2_creative: number | null,
    j2_calm: number | null,
    j2_friendly: number | null,
    j2_careless: number | null,
    j2_uncompassionate: number | null,
    j2_curious: number | null,
    j2_upset: number | null,
    j2_talkative: number | null,
    j2_sympathetic: number | null,
    j2_organized: number | null,
    j2_sensitive: number | null,
    j3_interests: number | null,
    j3_opinions: number | null,
    j3_purpose: number | null,
    j3_think_a_lot: number | null,
    j3_do_a_lot: number | null,
    userid: string,
  } | null > | null,
};

export type GetCustomersQueryVariables = {
  id: number,
};

export type GetCustomersQuery = {
  getCustomers:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type ListCustomerssQuery = {
  listCustomerss:  Array< {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null > | null,
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
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    UserID: string,
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
      formQuestions:  {
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
      UserID: string,
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
      stack: number,
      stackPhrase: string | null,
      placeHolder: string | null,
      usedForms:  {
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
      category:  {
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
      subSection:  {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order: number,
      items: Array< string | null > | null,
      imagesPath: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      formQuestions:  {
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
      UserID: string,
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
      question:  {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      form:  {
        __typename: "Form",
        id: string,
        formQuestions:  {
          __typename: "ModelFormQuestionConnection",
          nextToken: string | null,
        } | null,
        UserID: string,
        finished: boolean | null,
        createdAt: string,
        updatedAt: string,
      } | null,
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
    stack: number,
    stackPhrase: string | null,
    placeHolder: string | null,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        subSections:  {
          __typename: "ModelSubSectionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    items: Array< string | null > | null,
    imagesPath: Array< string | null > | null,
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
      stackPhrase: string | null,
      placeHolder: string | null,
      usedForms:  {
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
      category:  {
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
      subSection:  {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order: number,
      items: Array< string | null > | null,
      imagesPath: Array< string | null > | null,
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
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
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
    subSections:  {
      __typename: "ModelSubSectionConnection",
      items:  Array< {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      subSections:  {
        __typename: "ModelSubSectionConnection",
        items:  Array< {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
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
      subSections:  {
        __typename: "ModelSubSectionConnection",
        items:  Array< {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        subSections:  {
          __typename: "ModelSubSectionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
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

export type OnCreateHealthBehaviors2Subscription = {
  onCreateHealthBehaviors2:  {
    __typename: "HealthBehaviors2",
    e1_tobacco_days: number | null,
    e1_tobacco_how_many: number | null,
    e2_non_tobacco_days: number | null,
    e2_non_tobacco_how_many: number | null,
    e3_alcohol_days: number | null,
    e3_alcohol_how_many: number | null,
    e4_skin_in_sun: number | null,
    e5_avoid_sun: number | null,
    e5_wear_protection: number | null,
    e5_15spf: number | null,
    e6_vigorous_exercise: number | null,
    e7_moderate_exercise: number | null,
    e8_exercise_summary: number | null,
    e9_heredity: number | null,
    e9_lifestyle: number | null,
    e9_stresses: number | null,
    e9_strategies: number | null,
    e9_doctor_regular_basis: number | null,
    e9_follow_recommendations: number | null,
    e9_environmental: number | null,
    e9_attitude: number | null,
    userid: string,
  } | null,
};

export type OnCreateHighMoodSubscription = {
  onCreateHighMood:  {
    __typename: "HighMood",
    h2_high_mood_episode: number | null,
    h3_mood_higher_usual: number | null,
    h3_irritable_usual: number | null,
    h3_hyper: number | null,
    h3_thoughts_race: number | null,
    userid: string,
  } | null,
};

export type OnCreateLowMoodSubscription = {
  onCreateLowMood:  {
    __typename: "LowMood",
    g1_sad_depressed: number | null,
    g1_discouraged: number | null,
    g1_no_interest: number | null,
    g1_down_on_yourself: number | null,
    g1_lonely: number | null,
    g3_long_depression: number | null,
    g4_depressed: number | null,
    g4_discouraged: number | null,
    g4_no_interest: number | null,
    g4_down: number | null,
    userid: string,
  } | null,
};

export type OnCreateNeighborhoodSubscription = {
  onCreateNeighborhood:  {
    __typename: "Neighborhood",
    p1_friendly: string | null,
    p1_trusted: string | null,
    p1_share_values: string | null,
    p1_willing: string | null,
    p2_know_by_name: number | null,
    p2_conversation: number | null,
    p2_friends: number | null,
    p2_socially: number | null,
    p2_ask_help: number | null,
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

export type OnCreatePetsSubscription = {
  onCreatePets:  {
    __typename: "Pets",
    m1_pet: number | null,
    m1_type_pets: string | null,
    m1_dontlike: number | null,
    m1_spend_every_day_pet: number | null,
    m1_understood_pet: number | null,
    m1_love_pet: number | null,
    m1_talk_alot_pet: number | null,
    m1_pet_happy: number | null,
    m1_pet_friend: number | null,
    m1_pet_comfort: number | null,
    m1_lonely_without_: number | null,
    userid: string,
  } | null,
};

export type OnCreateQualityOfLifeSubscription = {
  onCreateQualityOfLife:  {
    __typename: "QualityOfLife",
    qol_general: number,
    health_general: number,
    health_compared_to_others: number,
    full_of_pep: number,
    alert_and_focused: number,
    stress: number,
    worry: number,
    happiness: number,
    anger: number,
    enjoyment: number,
    sadness: number,
    ladder_qol: number,
    userid: string,
  } | null,
};

export type OnCreateReligiousnessSubscription = {
  onCreateReligiousness:  {
    __typename: "Religiousness",
    n1_hard_times: number | null,
    n1_stress: number | null,
    n1_understand: number | null,
    n1_comfort: number | null,
    n1_meaning: number | null,
    n1_taking_care: number | null,
    n1_purpose: number | null,
    n1_reason: number | null,
    n1_spiritual_strength: number | null,
    n1_strenth_in_difficult_times: number | null,
    n1_wellbeing: number | null,
    n1_comfort_dailylife: number | null,
    n1_strength_dailylife: number | null,
    n2_touched_beauty: number | null,
    n2_inspiration: number | null,
    n2_grateful: number | null,
    n2_hopegful: number | null,
    n2_life_hopeful: number | null,
    n3_experience_awe: number | null,
    n3_connection_mbs: number | null,
    n3_consistent: number | null,
    n3_coherence: number | null,
    n3_live_better: number | null,
    n3_happy_in_life: number | null,
    n3_peaceful_within_self: number | null,
    n3_inner_peace: number | null,
    n3_peaceful_need_to: number | null,
    n3_harmony: number | null,
    n3_optimistic_imporove: number | null,
    n3_optimistic_uncertainty: number | null,
    n3_enjoy_life: number | null,
    n4_satisfied_mbs: number | null,
    userid: string,
  } | null,
};

export type OnCreateSleepQualityIndexSubscription = {
  onCreateSleepQualityIndex:  {
    __typename: "SleepQualityIndex",
    t1_usual_bedtime: string | null,
    t1_minutes_to_sleep: number | null,
    t1_usual_wakeup: string | null,
    t1_hours_of_sleep: number | null,
    t2_cannot_sleep_30_min: number | null,
    t2_wake_up_middle_night: number | null,
    t2_bathroom: number | null,
    t2_breathe_comfortable: number | null,
    t2_cough_snore: number | null,
    t2_cold: number | null,
    t2_hot: number | null,
    t2_bad_dreams: number | null,
    t2_pain: number | null,
    t2_other: number | null,
    t3_medicine: number | null,
    t3_trouble_awake: number | null,
    t3_enthusiasm: number | null,
    t3_overall_sleep: number | null,
    userid: string,
  } | null,
};

export type OnCreateSocialNetworksSubscription = {
  onCreateSocialNetworks:  {
    __typename: "SocialNetworks",
    o1_hours_week: number | null,
    o2_different_friends: number | null,
    o3_hours_month: number | null,
    o4_personally_socialize: number | null,
    o5_rely: number | null,
    o5_open_up: number | null,
    o5_demands: number | null,
    o5_argue: number | null,
    o6_emotionally_close: number | null,
    o6_uncomfortable: number | null,
    o6_want_to_be: number | null,
    o6_comfortable_without: number | null,
    o7_depend: number | null,
    o7_important: number | null,
    o7_miss_you: number | null,
    o7_pay_attention: number | null,
    o7_interested: number | null,
    userid: string,
  } | null,
};

export type OnCreateStressfulLifeExperiencesSubscription = {
  onCreateStressfulLifeExperiences:  {
    __typename: "StressfulLifeExperiences",
    i1_times: number | null,
    i2_memories: number | null,
    i2_physical: number | null,
    i2_avoid_think: number | null,
    i2_avoid_activities: number | null,
    i2_reactions: number | null,
    i3_how_old: number | null,
    i3_how_many_years: number | null,
    i3_past_30: number | null,
    i3_past_24_months: number | null,
    i4_life_threat: number | null,
    i4_death: number | null,
    i4_betrayal: number | null,
    i4_arguments: number | null,
    i4_motor_accident: number | null,
    i4_legal_problem: number | null,
    i4_any: number | null,
    i4_describe: string | null,
    i5_financial: number | null,
    i5_career: number | null,
    i5_health: number | null,
    i5_love_life: number | null,
    i5_friendships: number | null,
    i5_family_relationship: number | null,
    i5_lovedones_health: number | null,
    i5_other_lovedones: number | null,
    i5_life_overall: number | null,
    i5_describe: string | null,
    i6_keep_calm: number | null,
    i6_manage_stress: number | null,
    i6_new_approach: number | null,
    i6_get_along: number | null,
    i6_humor: number | null,
    i6_describe: string | null,
    i7_promotion: number | null,
    i7_finance_imp: number | null,
    i7_love_life_imp: number | null,
    i7_health_imp: number | null,
    i7_any: number | null,
    i7_describe: string | null,
    userid: string,
  } | null,
};

export type OnCreateTimeUseSubscription = {
  onCreateTimeUse:  {
    __typename: "TimeUse",
    q1_work_hours: number | null,
    q1_volunteer_hours: number | null,
    q1_leisure_hours: number | null,
    q3_loved_ones: number | null,
    q3_friends: number | null,
    q3_no_technology: number | null,
    q3_technology: number | null,
    userid: string,
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

export type OnCreateYourHealthSubscription = {
  onCreateYourHealth:  {
    __typename: "YourHealth",
    height_feet: number | null,
    height_inches: number | null,
    weight: number | null,
    b3_CD_clotting_disorder: number | null,
    b3_CD_high_blood_pressure: number | null,
    b3_CD_heart_attack: number | null,
    b3_CD_high_cholesterol: number | null,
    b3_CD_any: number | null,
    b3_JBD_osteoarthritis: number | null,
    b3_JBD_rheumatoid_arthritis: number | null,
    b3_JBD_osteoporosis: number | null,
    b3_RD_asthma_chronicbronc: number | null,
    b3_RD_COPD: number | null,
    b3_RD_seasonal_allergies: number | null,
    b3_PD_ADD_ADHD: number | null,
    b3_PD_anxiety: number | null,
    b3_PD_depression: number | null,
    b3_PD_bipolar_disorder: number | null,
    b3_PD_PTSD: number | null,
    b3_PD_substance_abuse: number | null,
    b3_PD_any: number | null,
    b3_CANCER_skin: number | null,
    b3_CANCER_any: number | null,
    b3_OTHER_autoimmune_disorder: number | null,
    b3_OTHER_inflammatory_skin_disorder: number | null,
    b3_OTHER_diabetes_insulin_dependant: number | null,
    b3_OTHER_diabetes_not_insulin_dependant: number | null,
    b3_OTHER_migraine: number | null,
    b3_OTHER_stomach_intestine_ulcer: number | null,
    b3_OTHER_acid_reflux: number | null,
    b3_OTHER_thyroid_disorders: number | null,
    b3_OTHER_chronic_pain: number | null,
    b3_OTHER_NONE_APPLY: number | null,
    b4_dizziness: number | null,
    b4_short_breath: number | null,
    b4_heart_pound: number | null,
    b4_tired_out: number | null,
    b4_muscle_tensiion: number | null,
    b4_restless: number | null,
    b4_anxious: number | null,
    b4_irritable: number | null,
    b5_memory: number | null,
    b5_slow_talking_moving: number | null,
    b5_concentration: number | null,
    b5_sleep_problems: number | null,
    b5_constipation: number | null,
    b5_nausea: number | null,
    b5_poor_appetite: number | null,
    b5_worrying: number | null,
    b5_feeling_angry: number | null,
    b6_back_pain: number | null,
    b6_neck_pain: number | null,
    b6_menstrual_cramps: number | null,
    b6_chest_pain: number | null,
    b6_sexual_pain: number | null,
    b6_headaches: number | null,
    b6_any_other_serious_pain: number | null,
    b6_uncontrollable_anxiety: number | null,
    b6_angry_explode: number | null,
    b10_hours_sleep: number | null,
    b11_energy: number | null,
    b14_home_management: number | null,
    b14_ability_to_work: number | null,
    b14_speed_quality_work: number | null,
    b14_social_quality: number | null,
    b14_close_relationship: number | null,
    b15_days_unable_to_work: number | null,
    b16_days_reduced_work: number | null,
    userid: string,
  } | null,
};

export type OnCreateYourPersonalitySubscription = {
  onCreateYourPersonality:  {
    __typename: "YourPersonality",
    j1_reserved: number | null,
    j1_helpful: number | null,
    j1_broadminded: number | null,
    j1_moody: number | null,
    j1_outgoing: number | null,
    j1_emotionally_stable: number | null,
    j1_critical: number | null,
    j1_adventurous: number | null,
    j1_nervous: number | null,
    j1_unreliable: number | null,
    j1_quiet: number | null,
    j2_softhearted: number | null,
    j2_creative: number | null,
    j2_calm: number | null,
    j2_friendly: number | null,
    j2_careless: number | null,
    j2_uncompassionate: number | null,
    j2_curious: number | null,
    j2_upset: number | null,
    j2_talkative: number | null,
    j2_sympathetic: number | null,
    j2_organized: number | null,
    j2_sensitive: number | null,
    j3_interests: number | null,
    j3_opinions: number | null,
    j3_purpose: number | null,
    j3_think_a_lot: number | null,
    j3_do_a_lot: number | null,
    userid: string,
  } | null,
};

export type OnCreateCustomersSubscription = {
  onCreateCustomers:  {
    __typename: "Customers",
    id: number,
    name: string,
    phone: string,
    email: string,
  } | null,
};

export type OnCreateFormSubscription = {
  onCreateForm:  {
    __typename: "Form",
    id: string,
    formQuestions:  {
      __typename: "ModelFormQuestionConnection",
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    UserID: string,
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
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    UserID: string,
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
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    UserID: string,
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
      stack: number,
      stackPhrase: string | null,
      placeHolder: string | null,
      usedForms:  {
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
      category:  {
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
      subSection:  {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order: number,
      items: Array< string | null > | null,
      imagesPath: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      formQuestions:  {
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
      UserID: string,
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
      stack: number,
      stackPhrase: string | null,
      placeHolder: string | null,
      usedForms:  {
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
      category:  {
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
      subSection:  {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order: number,
      items: Array< string | null > | null,
      imagesPath: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      formQuestions:  {
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
      UserID: string,
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
      stack: number,
      stackPhrase: string | null,
      placeHolder: string | null,
      usedForms:  {
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
      category:  {
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
      subSection:  {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      order: number,
      items: Array< string | null > | null,
      imagesPath: Array< string | null > | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    form:  {
      __typename: "Form",
      id: string,
      formQuestions:  {
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
      UserID: string,
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
    stack: number,
    stackPhrase: string | null,
    placeHolder: string | null,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        subSections:  {
          __typename: "ModelSubSectionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    items: Array< string | null > | null,
    imagesPath: Array< string | null > | null,
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
    stackPhrase: string | null,
    placeHolder: string | null,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        subSections:  {
          __typename: "ModelSubSectionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    items: Array< string | null > | null,
    imagesPath: Array< string | null > | null,
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
    stackPhrase: string | null,
    placeHolder: string | null,
    usedForms:  {
      __typename: "ModelFormQuestionConnection",
      items:  Array< {
        __typename: "FormQuestion",
        id: string,
        response: string,
        question:  {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          createdAt: string,
          updatedAt: string,
        } | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    subSection:  {
      __typename: "SubSection",
      id: string,
      name: string,
      section:  {
        __typename: "Section",
        id: string,
        name: string,
        subSections:  {
          __typename: "ModelSubSectionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      questions:  {
        __typename: "ModelQuestionConnection",
        items:  Array< {
          __typename: "Question",
          id: string,
          question: string,
          stack: number,
          stackPhrase: string | null,
          placeHolder: string | null,
          order: number,
          items: Array< string | null > | null,
          imagesPath: Array< string | null > | null,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    order: number,
    items: Array< string | null > | null,
    imagesPath: Array< string | null > | null,
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
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    subSections:  {
      __typename: "ModelSubSectionConnection",
      items:  Array< {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      items:  Array< {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      items:  Array< {
        __typename: "SubSection",
        id: string,
        name: string,
        section:  {
          __typename: "Section",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        questions:  {
          __typename: "ModelQuestionConnection",
          nextToken: string | null,
        } | null,
        order: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      subSections:  {
        __typename: "ModelSubSectionConnection",
        items:  Array< {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      subSections:  {
        __typename: "ModelSubSectionConnection",
        items:  Array< {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
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
      subSections:  {
        __typename: "ModelSubSectionConnection",
        items:  Array< {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null > | null,
        nextToken: string | null,
      } | null,
      order: number,
      createdAt: string,
      updatedAt: string,
    } | null,
    questions:  {
      __typename: "ModelQuestionConnection",
      items:  Array< {
        __typename: "Question",
        id: string,
        question: string,
        stack: number,
        stackPhrase: string | null,
        placeHolder: string | null,
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
        subSection:  {
          __typename: "SubSection",
          id: string,
          name: string,
          order: number,
          createdAt: string,
          updatedAt: string,
        } | null,
        order: number,
        items: Array< string | null > | null,
        imagesPath: Array< string | null > | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    order: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
