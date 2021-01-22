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

export type CreateDemographics_stack0Input = {
  id: string,
  form_id?: string | null,
  born_in_US?: number | null,
  what_state_or_territory?: string | null,
  how_many_years_in_florida?: string | null,
};

export type UpdateDemographics_stack0Input = {
  id: string,
  form_id?: string | null,
  born_in_US?: number | null,
  what_state_or_territory?: string | null,
  how_many_years_in_florida?: string | null,
};

export type CreateDemographics_stack1Input = {
  are_you_spanish_latino?: number | null,
  select_all_that_apply?: string | null,
  id: string,
  formid?: string | null,
  what_is_your_race?: string | null,
};

export type UpdateDemographics_stack1Input = {
  are_you_spanish_latino?: number | null,
  select_all_that_apply?: string | null,
  id: string,
  formid?: string | null,
  what_is_your_race?: string | null,
};

export type CreateDemographics_stack2Input = {
  id: string,
  formid?: string | null,
  highest_level_education?: string | null,
};

export type UpdateDemographics_stack2Input = {
  id: string,
  formid?: string | null,
  highest_level_education?: string | null,
};

export type CreateDemographics_stack3Input = {
  id: string,
  formid?: string | null,
  marital_status?: string | null,
  living_marriage_like?: number | null,
};

export type UpdateDemographics_stack3Input = {
  id: string,
  formid?: string | null,
  marital_status?: string | null,
  living_marriage_like?: number | null,
};

export type CreateDemographics_stack4Input = {
  id: string,
  formid?: string | null,
  bio_children?: number | null,
  step_children?: number | null,
  children_0_to_17?: number | null,
};

export type UpdateDemographics_stack4Input = {
  id: string,
  formid?: string | null,
  bio_children?: number | null,
  step_children?: number | null,
  children_0_to_17?: number | null,
};

export type CreateDemographics_stack5Input = {
  id: string,
  formid?: string | null,
  gender?: string | null,
  currently_pregnant?: number | null,
};

export type UpdateDemographics_stack5Input = {
  id: string,
  formid?: string | null,
  gender?: string | null,
  currently_pregnant?: number | null,
};

export type CreateEmployment_stack0Input = {
  id: string,
  formid?: string | null,
  emp_status?: string | null,
  type_work?: string | null,
  commute_work?: number | null,
  commute_int?: number | null,
};

export type UpdateEmployment_stack0Input = {
  id: string,
  formid?: string | null,
  emp_status?: string | null,
  type_work?: string | null,
  commute_work?: number | null,
  commute_int?: number | null,
};

export type CreateEmployment_stack1Input = {
  id: string,
  formid?: string | null,
  hours_work_week?: number | null,
  hours_typical?: string | null,
  hours_per_day?: string | null,
};

export type UpdateEmployment_stack1Input = {
  id: string,
  formid?: string | null,
  hours_work_week?: number | null,
  hours_typical?: string | null,
  hours_per_day?: string | null,
};

export type CreateEmployment_stack2Input = {
  id: string,
  formid?: string | null,
  people_under_supervision?: number | null,
  weeks_missed_work?: number | null,
  hours_week_missed?: number | null,
};

export type UpdateEmployment_stack2Input = {
  id: string,
  formid?: string | null,
  people_under_supervision?: number | null,
  weeks_missed_work?: number | null,
  hours_week_missed?: number | null,
};

export type CreateEmployment_stack3Input = {
  id: string,
  formid?: string | null,
  hours_worked?: number | null,
  health_suffered?: number | null,
};

export type UpdateEmployment_stack3Input = {
  id: string,
  formid?: string | null,
  hours_worked?: number | null,
  health_suffered?: number | null,
};

export type CreateHealth_behavior2_stack0Input = {
  id: string,
  formid?: string | null,
  days_tobacco?: string | null,
  days_nicotine?: number | null,
  days_nicotine2?: string | null,
  how_many_tobacco?: number | null,
};

export type UpdateHealth_behavior2_stack0Input = {
  id: string,
  formid?: string | null,
  days_tobacco?: string | null,
  days_nicotine?: number | null,
  days_nicotine2?: string | null,
  how_many_tobacco?: number | null,
};

export type CreateHealth_behavior2_stack1Input = {
  id: string,
  formid?: string | null,
  days_week_alcohol?: string | null,
  how_many_drinks?: number | null,
  skin_in_sun?: string | null,
};

export type UpdateHealth_behavior2_stack1Input = {
  id: string,
  formid?: string | null,
  days_week_alcohol?: string | null,
  how_many_drinks?: number | null,
  skin_in_sun?: string | null,
};

export type CreateHealth_behavior2_stack2Input = {
  id: string,
  formid?: string | null,
  avoid_sun?: string | null,
  sunscreen_spf15?: string | null,
  protective_clothing?: string | null,
};

export type UpdateHealth_behavior2_stack2Input = {
  id: string,
  formid?: string | null,
  avoid_sun?: string | null,
  sunscreen_spf15?: string | null,
  protective_clothing?: string | null,
};

export type CreateHealth_behavior2_stack3Input = {
  id: string,
  formid?: string | null,
  vigorous_exercise?: number | null,
  moderate_exervise?: number | null,
};

export type UpdateHealth_behavior2_stack3Input = {
  id: string,
  formid?: string | null,
  vigorous_exercise?: number | null,
  moderate_exervise?: number | null,
};

export type CreateHealth_behavior2_stack4Input = {
  id: string,
  formid?: string | null,
  interactive_vg?: number | null,
  home_any_other?: number | null,
  by_yourself_somewhere_else?: number | null,
  in_a_group?: number | null,
  play_partner_game?: number | null,
  internet_group_live?: number | null,
  other?: number | null,
  do_not_workout?: number | null,
};

export type UpdateHealth_behavior2_stack4Input = {
  id: string,
  formid?: string | null,
  interactive_vg?: number | null,
  home_any_other?: number | null,
  by_yourself_somewhere_else?: number | null,
  in_a_group?: number | null,
  play_partner_game?: number | null,
  internet_group_live?: number | null,
  other?: number | null,
  do_not_workout?: number | null,
};

export type CreateHealth_behavior2_stack5Input = {
  id: string,
  formid?: string | null,
  heredity?: number | null,
  lifestyle?: number | null,
  stresss?: number | null,
  strategies?: number | null,
  doctor?: number | null,
  carefully_follow?: number | null,
  environment?: number | null,
  attitude?: number | null,
};

export type UpdateHealth_behavior2_stack5Input = {
  id: string,
  formid?: string | null,
  heredity?: number | null,
  lifestyle?: number | null,
  stresss?: number | null,
  strategies?: number | null,
  doctor?: number | null,
  carefully_follow?: number | null,
  environment?: number | null,
  attitude?: number | null,
};

export type CreateHealth_behavior2_stack6Input = {
  id: string,
  formid?: string | null,
  wshc?: number | null,
  time_relax?: number | null,
  volunteer_work?: number | null,
  spend_leisure_hours?: string | null,
};

export type UpdateHealth_behavior2_stack6Input = {
  id: string,
  formid?: string | null,
  wshc?: number | null,
  time_relax?: number | null,
  volunteer_work?: number | null,
  spend_leisure_hours?: string | null,
};

export type CreateHealth_behaviors_stack0Input = {
  id: string,
  formid?: string | null,
  regular_doctor?: string | null,
  how_many_visits?: number | null,
  different_perscription?: number | null,
};

export type UpdateHealth_behaviors_stack0Input = {
  id: string,
  formid?: string | null,
  regular_doctor?: string | null,
  how_many_visits?: number | null,
  different_perscription?: number | null,
};

export type CreateHealth_behaviors_stack1Input = {
  id: string,
  formid?: string | null,
  birth_control?: number | null,
  perscriped_opioid?: number | null,
  dietary_vitamins?: number | null,
};

export type UpdateHealth_behaviors_stack1Input = {
  id: string,
  formid?: string | null,
  birth_control?: number | null,
  perscriped_opioid?: number | null,
  dietary_vitamins?: number | null,
};

export type CreateHigh_mood_stack0Input = {
  id: string,
  formid?: string | null,
  high_mood_episode?: number | null,
};

export type UpdateHigh_mood_stack0Input = {
  id: string,
  formid?: string | null,
  high_mood_episode?: number | null,
};

export type CreateHigh_mood_stack1Input = {
  id: string,
  formid?: string | null,
  higher_mood_usual?: string | null,
  hyper?: string | null,
  thoughts_raced?: string | null,
  more_irritable?: string | null,
};

export type UpdateHigh_mood_stack1Input = {
  id: string,
  formid?: string | null,
  higher_mood_usual?: string | null,
  hyper?: string | null,
  thoughts_raced?: string | null,
  more_irritable?: string | null,
};

export type CreateHigh_mood_stack2Input = {
  id: string,
  formid?: string | null,
  higher_mood_usual?: string | null,
  hyper?: string | null,
  thoughts_raced?: string | null,
  more_irritable?: string | null,
};

export type UpdateHigh_mood_stack2Input = {
  id: string,
  formid?: string | null,
  higher_mood_usual?: string | null,
  hyper?: string | null,
  thoughts_raced?: string | null,
  more_irritable?: string | null,
};

export type CreateLakeNona_stack0Input = {
  id: string,
  form_id?: string | null,
  live_in?: number | null,
  play_in?: number | null,
  study_in?: number | null,
  work_in?: number | null,
};

export type UpdateLakeNona_stack0Input = {
  id: string,
  form_id?: string | null,
  live_in?: number | null,
  play_in?: number | null,
  study_in?: number | null,
  work_in?: number | null,
};

export type CreateLow_mood_stack0Input = {
  id: string,
  formid?: string | null,
  sad_or_depressed?: string | null,
  discouraged?: string | null,
  no_interest?: string | null,
  feel_down?: string | null,
  feel_lonely?: string | null,
};

export type UpdateLow_mood_stack0Input = {
  id: string,
  formid?: string | null,
  sad_or_depressed?: string | null,
  discouraged?: string | null,
  no_interest?: string | null,
  feel_down?: string | null,
  feel_lonely?: string | null,
};

export type CreateLow_mood_stack1Input = {
  id: string,
  formid?: string | null,
  think_about_death?: string | null,
  psych_distress?: string | null,
  interfere_work?: string | null,
};

export type UpdateLow_mood_stack1Input = {
  id: string,
  formid?: string | null,
  think_about_death?: string | null,
  psych_distress?: string | null,
  interfere_work?: string | null,
};

export type CreateLow_mood_stack2Input = {
  id: string,
  formid?: string | null,
  depressed_one_month?: number | null,
};

export type UpdateLow_mood_stack2Input = {
  id: string,
  formid?: string | null,
  depressed_one_month?: number | null,
};

export type CreateLow_mood_stack3Input = {
  id: string,
  formid?: string | null,
  depressed?: string | null,
  discouraged?: string | null,
  no_interest?: string | null,
  feeling_down?: string | null,
};

export type UpdateLow_mood_stack3Input = {
  id: string,
  formid?: string | null,
  depressed?: string | null,
  discouraged?: string | null,
  no_interest?: string | null,
  feeling_down?: string | null,
};

export type CreateLow_mood_stack4Input = {
  id: string,
  formid?: string | null,
};

export type UpdateLow_mood_stack4Input = {
  id: string,
  formid?: string | null,
};

export type CreateLow_mood_stack5Input = {
  id: string,
  formid?: string | null,
  years_depression?: number | null,
  months_depression?: number | null,
};

export type UpdateLow_mood_stack5Input = {
  id: string,
  formid?: string | null,
  years_depression?: number | null,
  months_depression?: number | null,
};

export type CreateLow_mood_stack6Input = {
  id: string,
  formid?: string | null,
  lack_companionshiup?: number | null,
  no_one_turn_to?: number | null,
  left_out?: number | null,
  outgoing?: number | null,
  isolated?: number | null,
  can_find_companionship?: number | null,
  unhappy?: number | null,
  around_me_not_with?: number | null,
};

export type UpdateLow_mood_stack6Input = {
  id: string,
  formid?: string | null,
  lack_companionshiup?: number | null,
  no_one_turn_to?: number | null,
  left_out?: number | null,
  outgoing?: number | null,
  isolated?: number | null,
  can_find_companionship?: number | null,
  unhappy?: number | null,
  around_me_not_with?: number | null,
};

export type CreateNeighborhood_stack0Input = {
  id: string,
  formid?: string | null,
  friendly?: string | null,
  trusted?: string | null,
  same_values?: string | null,
  willing_to_help?: string | null,
};

export type UpdateNeighborhood_stack0Input = {
  id: string,
  formid?: string | null,
  friendly?: string | null,
  trusted?: string | null,
  same_values?: string | null,
  willing_to_help?: string | null,
};

export type CreateNeighborhood_stack1Input = {
  id: string,
  formid?: string | null,
  how_many_friends?: number | null,
  know_by_name?: number | null,
  conversation_with?: number | null,
};

export type UpdateNeighborhood_stack1Input = {
  id: string,
  formid?: string | null,
  how_many_friends?: number | null,
  know_by_name?: number | null,
  conversation_with?: number | null,
};

export type CreateNeighborhood_stack2Input = {
  id: string,
  formid?: string | null,
  ask_for_help?: number | null,
  get_together_socialily?: number | null,
};

export type UpdateNeighborhood_stack2Input = {
  id: string,
  formid?: string | null,
  ask_for_help?: number | null,
  get_together_socialily?: number | null,
};

export type CreateOral_health_stack0Input = {
  id: string,
  formid?: string | null,
  brush_teeth?: number | null,
  dental_floss?: number | null,
  mouthwash?: number | null,
};

export type UpdateOral_health_stack0Input = {
  id: string,
  formid?: string | null,
  brush_teeth?: number | null,
  dental_floss?: number | null,
  mouthwash?: number | null,
};

export type CreateOral_health_stack1Input = {
  id: string,
  formid?: string | null,
  days_floss?: number | null,
  days_mouthwash?: number | null,
};

export type UpdateOral_health_stack1Input = {
  id: string,
  formid?: string | null,
  days_floss?: number | null,
  days_mouthwash?: number | null,
};

export type CreatePets_stack0Input = {
  id: string,
  formid?: string | null,
  have_pet?: number | null,
  type_pet?: string | null,
};

export type UpdatePets_stack0Input = {
  id: string,
  formid?: string | null,
  have_pet?: number | null,
  type_pet?: string | null,
};

export type CreatePets_stack1Input = {
  id: string,
  formid?: string | null,
  dont_like_animals?: string | null,
  pet_knows_im_upset?: string | null,
  i_love_pets?: string | null,
  every_day_playing?: string | null,
  talk_to_pet?: string | null,
  understood_pet?: string | null,
  lonely_without?: string | null,
  pet_is_friend?: string | null,
  pet_makes_me_happy?: string | null,
};

export type UpdatePets_stack1Input = {
  id: string,
  formid?: string | null,
  dont_like_animals?: string | null,
  pet_knows_im_upset?: string | null,
  i_love_pets?: string | null,
  every_day_playing?: string | null,
  talk_to_pet?: string | null,
  understood_pet?: string | null,
  lonely_without?: string | null,
  pet_is_friend?: string | null,
  pet_makes_me_happy?: string | null,
};

export type CreateQuality_of_life_stack0Input = {
  id: string,
  formid?: string | null,
  qol_general?: string | null,
  health_general?: string | null,
};

export type UpdateQuality_of_life_stack0Input = {
  id: string,
  formid?: string | null,
  qol_general?: string | null,
  health_general?: string | null,
};

export type CreateQuality_of_life_stack1Input = {
  id: string,
  formid?: string | null,
  health_compared?: string | null,
  full_of_energy?: string | null,
  alert_and_focused?: string | null,
};

export type UpdateQuality_of_life_stack1Input = {
  id: string,
  formid?: string | null,
  health_compared?: string | null,
  full_of_energy?: string | null,
  alert_and_focused?: string | null,
};

export type CreateQuality_of_life_stack2Input = {
  id: string,
  formid?: string | null,
  stress?: number | null,
  worry?: number | null,
  happiness?: number | null,
  anger?: number | null,
  enjoyment?: number | null,
  sadness?: number | null,
};

export type UpdateQuality_of_life_stack2Input = {
  id: string,
  formid?: string | null,
  stress?: number | null,
  worry?: number | null,
  happiness?: number | null,
  anger?: number | null,
  enjoyment?: number | null,
  sadness?: number | null,
};

export type CreateQuality_of_life_stack3Input = {
  id: string,
  formid?: string | null,
  ladder?: number | null,
};

export type UpdateQuality_of_life_stack3Input = {
  id: string,
  formid?: string | null,
  ladder?: number | null,
};

export type CreateReligiousness_spirituality_stack1Input = {
  id: string,
  formid?: string | null,
  hard_times?: string | null,
  tolerate_stress?: string | null,
  comfort_reassurance?: string | null,
  meaning_in_life?: string | null,
  understand_others?: string | null,
};

export type UpdateReligiousness_spirituality_stack1Input = {
  id: string,
  formid?: string | null,
  hard_times?: string | null,
  tolerate_stress?: string | null,
  comfort_reassurance?: string | null,
  meaning_in_life?: string | null,
  understand_others?: string | null,
};

export type CreateReligiousness_spirituality_stack2Input = {
  id: string,
  formid?: string | null,
  meaning?: string | null,
  purpose?: string | null,
  here_for_reason?: string | null,
  inner_spiritual_strength?: string | null,
};

export type UpdateReligiousness_spirituality_stack2Input = {
  id: string,
  formid?: string | null,
  meaning?: string | null,
  purpose?: string | null,
  here_for_reason?: string | null,
  inner_spiritual_strength?: string | null,
};

export type CreateReligiousness_spirituality_stack3Input = {
  id: string,
  formid?: string | null,
  well_being?: string | null,
  comfort?: string | null,
  strength?: string | null,
};

export type UpdateReligiousness_spirituality_stack3Input = {
  id: string,
  formid?: string | null,
  well_being?: string | null,
  comfort?: string | null,
  strength?: string | null,
};

export type CreateReligiousness_spirituality_stack4Input = {
  id: string,
  formid?: string | null,
  touched_beauty?: string | null,
  inspiration_excitement?: string | null,
  grateful?: string | null,
  how_hopeful_feel?: string | null,
  hopeful_about_life?: string | null,
};

export type UpdateReligiousness_spirituality_stack4Input = {
  id: string,
  formid?: string | null,
  touched_beauty?: string | null,
  inspiration_excitement?: string | null,
  grateful?: string | null,
  how_hopeful_feel?: string | null,
  hopeful_about_life?: string | null,
};

export type CreateReligiousness_spirituality_stack5Input = {
  id: string,
  formid?: string | null,
  experience_awe?: string | null,
  consistent_what_you_think?: string | null,
  spiritual_strength_live_better?: string | null,
  coherence?: string | null,
  connection_mbs?: string | null,
};

export type UpdateReligiousness_spirituality_stack5Input = {
  id: string,
  formid?: string | null,
  experience_awe?: string | null,
  consistent_what_you_think?: string | null,
  spiritual_strength_live_better?: string | null,
  coherence?: string | null,
  connection_mbs?: string | null,
};

export type CreateReligiousness_spirituality_stack6Input = {
  id: string,
  formid?: string | null,
  happy?: string | null,
  inner_peace?: string | null,
  harmony?: string | null,
  peace_within_self?: string | null,
  feel_peaceful?: string | null,
};

export type UpdateReligiousness_spirituality_stack6Input = {
  id: string,
  formid?: string | null,
  happy?: string | null,
  inner_peace?: string | null,
  harmony?: string | null,
  peace_within_self?: string | null,
  feel_peaceful?: string | null,
};

export type CreateReligiousness_spirituality_stack7Input = {
  id: string,
  formid?: string | null,
  optimistic?: string | null,
  remaiun_optimistic?: string | null,
  enjoy_life?: string | null,
};

export type UpdateReligiousness_spirituality_stack7Input = {
  id: string,
  formid?: string | null,
  optimistic?: string | null,
  remaiun_optimistic?: string | null,
  enjoy_life?: string | null,
};

export type CreateReligiousness_spirituality_stack8Input = {
  id: string,
  formid?: string | null,
  satisfied?: string | null,
};

export type UpdateReligiousness_spirituality_stack8Input = {
  id: string,
  formid?: string | null,
  satisfied?: string | null,
};

export type CreateSleep_quality_stack0Input = {
  id: string,
  formid?: string | null,
  usual_bedtime?: string | null,
  minutes_to_sleep?: number | null,
  hours_actual_sleep?: number | null,
  usual_wakeup_time?: number | null,
};

export type UpdateSleep_quality_stack0Input = {
  id: string,
  formid?: string | null,
  usual_bedtime?: string | null,
  minutes_to_sleep?: number | null,
  hours_actual_sleep?: number | null,
  usual_wakeup_time?: number | null,
};

export type CreateSleep_quality_stack1Input = {
  id: string,
  formid?: string | null,
  cannot_sleep_thirty?: string | null,
  cough?: string | null,
  bad_dreams?: string | null,
  too_hot?: string | null,
  wake_up?: string | null,
  use_bathroom?: string | null,
  cannot_breathe?: string | null,
};

export type UpdateSleep_quality_stack1Input = {
  id: string,
  formid?: string | null,
  cannot_sleep_thirty?: string | null,
  cough?: string | null,
  bad_dreams?: string | null,
  too_hot?: string | null,
  wake_up?: string | null,
  use_bathroom?: string | null,
  cannot_breathe?: string | null,
};

export type CreateSleep_quality_stack2Input = {
  id: string,
  formid?: string | null,
  too_cold?: string | null,
  other_reason?: string | null,
  bad_dreams?: string | null,
  pain?: string | null,
};

export type UpdateSleep_quality_stack2Input = {
  id: string,
  formid?: string | null,
  too_cold?: string | null,
  other_reason?: string | null,
  bad_dreams?: string | null,
  pain?: string | null,
};

export type CreateSleep_quality_stack3Input = {
  id: string,
  formid?: string | null,
  taken_medicine?: string | null,
  problem?: string | null,
  trouble_staying_awake?: string | null,
};

export type UpdateSleep_quality_stack3Input = {
  id: string,
  formid?: string | null,
  taken_medicine?: string | null,
  problem?: string | null,
  trouble_staying_awake?: string | null,
};

export type CreateSleep_quality_stack4Input = {
  id: string,
  formid?: string | null,
  sleep_quality_overall?: string | null,
};

export type UpdateSleep_quality_stack4Input = {
  id: string,
  formid?: string | null,
  sleep_quality_overall?: string | null,
};

export type CreateSocial_network_stack0Input = {
  id: string,
  formid?: string | null,
  hours_month_socializing?: number | null,
  different_friends?: number | null,
  hours_week_socializing?: number | null,
};

export type UpdateSocial_network_stack0Input = {
  id: string,
  formid?: string | null,
  hours_month_socializing?: number | null,
  different_friends?: number | null,
  hours_week_socializing?: number | null,
};

export type CreateSocial_network_stack1Input = {
  id: string,
  formid?: string | null,
  number_socialize?: number | null,
};

export type UpdateSocial_network_stack1Input = {
  id: string,
  formid?: string | null,
  number_socialize?: number | null,
};

export type CreateSocial_network_stack2Input = {
  id: string,
  formid?: string | null,
  rely_on_them?: string | null,
  open_up_to_them?: string | null,
  too_many_demands?: string | null,
  argue?: string | null,
};

export type UpdateSocial_network_stack2Input = {
  id: string,
  formid?: string | null,
  rely_on_them?: string | null,
  open_up_to_them?: string | null,
  too_many_demands?: string | null,
  argue?: string | null,
};

export type CreateSocial_network_stack3Input = {
  id: string,
  formid?: string | null,
  easy_become_emotionally_close?: number | null,
  want_to_be?: number | null,
};

export type UpdateSocial_network_stack3Input = {
  id: string,
  formid?: string | null,
  easy_become_emotionally_close?: number | null,
  want_to_be?: number | null,
};

export type CreateSocial_network_stack4Input = {
  id: string,
  formid?: string | null,
  uncomfortable_getting_close?: number | null,
  comfortable_without?: number | null,
};

export type UpdateSocial_network_stack4Input = {
  id: string,
  formid?: string | null,
  uncomfortable_getting_close?: number | null,
  comfortable_without?: number | null,
};

export type CreateSocial_network_stack5Input = {
  id: string,
  formid?: string | null,
  depend_on_you?: string | null,
  important_to_them?: string | null,
  interested?: string | null,
  miss_you?: string | null,
  pay_attention?: string | null,
};

export type UpdateSocial_network_stack5Input = {
  id: string,
  formid?: string | null,
  depend_on_you?: string | null,
  important_to_them?: string | null,
  interested?: string | null,
  miss_you?: string | null,
  pay_attention?: string | null,
};

export type CreateStressful_life_experience_stack0Input = {
  id: string,
  formid?: string | null,
  how_old_depression?: number | null,
};

export type UpdateStressful_life_experience_stack0Input = {
  id: string,
  formid?: string | null,
  how_old_depression?: number | null,
};

export type CreateStressful_life_experience_stack1Input = {
  id: string,
  formid?: string | null,
  disturbing_memories?: string | null,
  avoided_thinking?: string | null,
  physical_reaction?: string | null,
  avoided_activities?: string | null,
  interfered_with_qol?: string | null,
};

export type UpdateStressful_life_experience_stack1Input = {
  id: string,
  formid?: string | null,
  disturbing_memories?: string | null,
  avoided_thinking?: string | null,
  physical_reaction?: string | null,
  avoided_activities?: string | null,
  interfered_with_qol?: string | null,
};

export type CreateStressful_life_experience_stack2Input = {
  id: string,
  formid?: string | null,
  first_time?: number | null,
  years?: number | null,
  months?: number | null,
  days?: number | null,
};

export type UpdateStressful_life_experience_stack2Input = {
  id: string,
  formid?: string | null,
  first_time?: number | null,
  years?: number | null,
  months?: number | null,
  days?: number | null,
};

export type CreateStressful_life_experience_stack3Input = {
  id: string,
  formid?: string | null,
  life_threatening?: number | null,
  any_other?: number | null,
  motor_vehicle?: number | null,
  serious_betrayal?: number | null,
  death_close_friend?: number | null,
  serious_legal?: number | null,
  break_up?: number | null,
};

export type UpdateStressful_life_experience_stack3Input = {
  id: string,
  formid?: string | null,
  life_threatening?: number | null,
  any_other?: number | null,
  motor_vehicle?: number | null,
  serious_betrayal?: number | null,
  death_close_friend?: number | null,
  serious_legal?: number | null,
  break_up?: number | null,
};

export type CreateStressful_life_experience_stack4Input = {
  id: string,
  formid?: string | null,
  other_stressful_event?: string | null,
  love_life?: string | null,
  career?: string | null,
  friendship?: string | null,
  other_loved_ones?: string | null,
  health?: string | null,
  relationship_family?: string | null,
  health_loved_ones?: string | null,
  life_overall?: string | null,
};

export type UpdateStressful_life_experience_stack4Input = {
  id: string,
  formid?: string | null,
  other_stressful_event?: string | null,
  love_life?: string | null,
  career?: string | null,
  friendship?: string | null,
  other_loved_ones?: string | null,
  health?: string | null,
  relationship_family?: string | null,
  health_loved_ones?: string | null,
  life_overall?: string | null,
};

export type CreateStressful_life_experience_stack5Input = {
  id: string,
  formid?: string | null,
  keep_calm?: string | null,
  get_along?: string | null,
  manage_stress?: string | null,
  sense_humor?: string | null,
  new_approaches?: string | null,
};

export type UpdateStressful_life_experience_stack5Input = {
  id: string,
  formid?: string | null,
  keep_calm?: string | null,
  get_along?: string | null,
  manage_stress?: string | null,
  sense_humor?: string | null,
  new_approaches?: string | null,
};

export type CreateStressful_life_experience_stack6Input = {
  id: string,
  formid?: string | null,
  promotion?: number | null,
  health_major?: number | null,
  finances?: number | null,
  love_life?: number | null,
  other_positive?: number | null,
};

export type UpdateStressful_life_experience_stack6Input = {
  id: string,
  formid?: string | null,
  promotion?: number | null,
  health_major?: number | null,
  finances?: number | null,
  love_life?: number | null,
  other_positive?: number | null,
};

export type CreateYour_health_stack0Input = {
  id: string,
  formid?: string | null,
  feet_height?: string | null,
  weight?: number | null,
};

export type UpdateYour_health_stack0Input = {
  id: string,
  formid?: string | null,
  feet_height?: string | null,
  weight?: number | null,
};

export type CreateYour_health_stack1Input = {
  id: string,
  formid?: string | null,
  clotting?: number | null,
  high_blood_pressure?: number | null,
  heart_attack?: number | null,
  high_cholesterol?: number | null,
  any_other_cvd?: number | null,
  asthma?: number | null,
  copd?: number | null,
  seasonal_allergies?: number | null,
  osteoarthritis?: number | null,
  rheumatoid_arthritis?: number | null,
  osteoporosis?: number | null,
  add_adhd?: number | null,
  depression?: number | null,
  manic_disorder?: number | null,
  panic_disorder?: number | null,
  ptsd?: number | null,
  substance_abuse?: number | null,
  any_other_psych?: number | null,
  skin_cancer?: number | null,
  any_other_cancer?: number | null,
};

export type UpdateYour_health_stack1Input = {
  id: string,
  formid?: string | null,
  clotting?: number | null,
  high_blood_pressure?: number | null,
  heart_attack?: number | null,
  high_cholesterol?: number | null,
  any_other_cvd?: number | null,
  asthma?: number | null,
  copd?: number | null,
  seasonal_allergies?: number | null,
  osteoarthritis?: number | null,
  rheumatoid_arthritis?: number | null,
  osteoporosis?: number | null,
  add_adhd?: number | null,
  depression?: number | null,
  manic_disorder?: number | null,
  panic_disorder?: number | null,
  ptsd?: number | null,
  substance_abuse?: number | null,
  any_other_psych?: number | null,
  skin_cancer?: number | null,
  any_other_cancer?: number | null,
};

export type CreateYour_health_stack2Input = {
  id: string,
  formid?: string | null,
  autoimmune_disorder?: number | null,
  inflammatory_skin_disorder?: number | null,
  diabetes_insulin_dependant?: number | null,
  diabetes_non_insulin_dependant?: number | null,
  migraine?: number | null,
  ulcer_stomach?: number | null,
  acid_reflux?: number | null,
  thyroid_disorder?: number | null,
  chronic_pain?: number | null,
  none?: number | null,
};

export type UpdateYour_health_stack2Input = {
  id: string,
  formid?: string | null,
  autoimmune_disorder?: number | null,
  inflammatory_skin_disorder?: number | null,
  diabetes_insulin_dependant?: number | null,
  diabetes_non_insulin_dependant?: number | null,
  migraine?: number | null,
  ulcer_stomach?: number | null,
  acid_reflux?: number | null,
  thyroid_disorder?: number | null,
  chronic_pain?: number | null,
  none?: number | null,
};

export type CreateYour_health_stack3Input = {
  id: string,
  formid?: string | null,
  dizziness?: string | null,
  shortness_of_breath?: string | null,
  heart_pound?: string | null,
  restless_tense?: string | null,
  anxious_nervous?: string | null,
  irritable_annoyed?: string | null,
};

export type UpdateYour_health_stack3Input = {
  id: string,
  formid?: string | null,
  dizziness?: string | null,
  shortness_of_breath?: string | null,
  heart_pound?: string | null,
  restless_tense?: string | null,
  anxious_nervous?: string | null,
  irritable_annoyed?: string | null,
};

export type CreateYour_health_stack4Input = {
  id: string,
  formid?: string | null,
  memory?: string | null,
  talking_slow?: string | null,
  heart_pound?: string | null,
  difficulty_concentrating?: string | null,
  sleeping_problems?: string | null,
  constipation?: string | null,
  nausea?: string | null,
};

export type UpdateYour_health_stack4Input = {
  id: string,
  formid?: string | null,
  memory?: string | null,
  talking_slow?: string | null,
  heart_pound?: string | null,
  difficulty_concentrating?: string | null,
  sleeping_problems?: string | null,
  constipation?: string | null,
  nausea?: string | null,
};

export type CreateYour_health_stack5Input = {
  id: string,
  formid?: string | null,
  back_pain?: string | null,
  neck_pain?: string | null,
  stomach_pain?: string | null,
  chest_pain?: string | null,
  headache?: string | null,
  uncontrollable_anxiety?: string | null,
};

export type UpdateYour_health_stack5Input = {
  id: string,
  formid?: string | null,
  back_pain?: string | null,
  neck_pain?: string | null,
  stomach_pain?: string | null,
  chest_pain?: string | null,
  headache?: string | null,
  uncontrollable_anxiety?: string | null,
};

export type CreateYour_health_stack6Input = {
  id: string,
  formid?: string | null,
  how_long_sleep_problems?: string | null,
  hours_sleep?: number | null,
  energy_scale?: number | null,
};

export type UpdateYour_health_stack6Input = {
  id: string,
  formid?: string | null,
  how_long_sleep_problems?: string | null,
  hours_sleep?: number | null,
  energy_scale?: number | null,
};

export type CreateYour_health_stack7Input = {
  id: string,
  formid?: string | null,
  how_long_headaches?: string | null,
  how_long_pain?: string | null,
  pain_scale?: number | null,
};

export type UpdateYour_health_stack7Input = {
  id: string,
  formid?: string | null,
  how_long_headaches?: string | null,
  how_long_pain?: string | null,
  pain_scale?: number | null,
};

export type CreateYour_health_stack8Input = {
  id: string,
  formid?: string | null,
  home_management?: number | null,
  ability_work?: number | null,
  close_relationships?: number | null,
  social?: number | null,
  quality_of_work?: number | null,
};

export type UpdateYour_health_stack8Input = {
  id: string,
  formid?: string | null,
  home_management?: number | null,
  ability_work?: number | null,
  close_relationships?: number | null,
  social?: number | null,
  quality_of_work?: number | null,
};

export type CreateYour_health_stack9Input = {
  id: string,
  formid?: string | null,
  unable_to_work?: number | null,
  cut_back_work?: number | null,
};

export type UpdateYour_health_stack9Input = {
  id: string,
  formid?: string | null,
  unable_to_work?: number | null,
  cut_back_work?: number | null,
};

export type CreateYour_personality_stack0Input = {
  id: string,
  formid?: string | null,
  reserved?: string | null,
  broad_minded?: string | null,
  helpful?: string | null,
  outgoing?: string | null,
  moody?: string | null,
  critical?: string | null,
  adventerous?: string | null,
};

export type UpdateYour_personality_stack0Input = {
  id: string,
  formid?: string | null,
  reserved?: string | null,
  broad_minded?: string | null,
  helpful?: string | null,
  outgoing?: string | null,
  moody?: string | null,
  critical?: string | null,
  adventerous?: string | null,
};

export type CreateYour_personality_stack1Input = {
  id: string,
  formid?: string | null,
  soft_hearted?: string | null,
  calm?: string | null,
  creative?: string | null,
  outgsensitive?: string | null,
  organized?: string | null,
  friendly?: string | null,
};

export type UpdateYour_personality_stack1Input = {
  id: string,
  formid?: string | null,
  soft_hearted?: string | null,
  calm?: string | null,
  creative?: string | null,
  outgsensitive?: string | null,
  organized?: string | null,
  friendly?: string | null,
};

export type CreateYour_personality_stack2Input = {
  id: string,
  formid?: string | null,
  careless?: string | null,
  talkative?: string | null,
  uncompassionate?: string | null,
  easily_upset?: string | null,
  sympathetic?: string | null,
  curious?: string | null,
};

export type UpdateYour_personality_stack2Input = {
  id: string,
  formid?: string | null,
  careless?: string | null,
  talkative?: string | null,
  uncompassionate?: string | null,
  easily_upset?: string | null,
  sympathetic?: string | null,
  curious?: string | null,
};

export type CreateYour_personality_stack3Input = {
  id: string,
  formid?: string | null,
  interests?: string | null,
  direction?: string | null,
  opinions?: string | null,
  think_a_lot?: string | null,
  do_a_lot?: string | null,
};

export type UpdateYour_personality_stack3Input = {
  id: string,
  formid?: string | null,
  interests?: string | null,
  direction?: string | null,
  opinions?: string | null,
  think_a_lot?: string | null,
  do_a_lot?: string | null,
};

export type CreateFormInput = {
  id?: string | null,
  UserID: string,
  finished?: boolean | null,
  percentage: number,
};

export type ModelFormConditionInput = {
  UserID?: ModelStringInput | null,
  finished?: ModelBooleanInput | null,
  percentage?: ModelIntInput | null,
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

export type UpdateFormInput = {
  id: string,
  UserID?: string | null,
  finished?: boolean | null,
  percentage?: number | null,
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
  inputConfirmation: string,
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
  inputConfirmation?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
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
  inputConfirmation?: string | null,
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
  percentage?: ModelIntInput | null,
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
  inputConfirmation?: ModelStringInput | null,
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

export type DeleteDemographicsStack0MutationVariables = {
  id: string,
};

export type DeleteDemographicsStack0Mutation = {
  deleteDemographics_stack0:  {
    __typename: "Demographics_stack0",
    id: string,
    form_id: string | null,
    born_in_US: number | null,
    what_state_or_territory: string | null,
    how_many_years_in_florida: string | null,
  } | null,
};

export type CreateDemographicsStack0MutationVariables = {
  createDemographics_stack0Input: CreateDemographics_stack0Input,
};

export type CreateDemographicsStack0Mutation = {
  createDemographics_stack0:  {
    __typename: "Demographics_stack0",
    id: string,
    form_id: string | null,
    born_in_US: number | null,
    what_state_or_territory: string | null,
    how_many_years_in_florida: string | null,
  } | null,
};

export type UpdateDemographicsStack0MutationVariables = {
  updateDemographics_stack0Input: UpdateDemographics_stack0Input,
};

export type UpdateDemographicsStack0Mutation = {
  updateDemographics_stack0:  {
    __typename: "Demographics_stack0",
    id: string,
    form_id: string | null,
    born_in_US: number | null,
    what_state_or_territory: string | null,
    how_many_years_in_florida: string | null,
  } | null,
};

export type DeleteDemographicsStack1MutationVariables = {
  id: string,
};

export type DeleteDemographicsStack1Mutation = {
  deleteDemographics_stack1:  {
    __typename: "Demographics_stack1",
    are_you_spanish_latino: number | null,
    select_all_that_apply: string | null,
    id: string,
    formid: string | null,
    what_is_your_race: string | null,
  } | null,
};

export type CreateDemographicsStack1MutationVariables = {
  createDemographics_stack1Input: CreateDemographics_stack1Input,
};

export type CreateDemographicsStack1Mutation = {
  createDemographics_stack1:  {
    __typename: "Demographics_stack1",
    are_you_spanish_latino: number | null,
    select_all_that_apply: string | null,
    id: string,
    formid: string | null,
    what_is_your_race: string | null,
  } | null,
};

export type UpdateDemographicsStack1MutationVariables = {
  updateDemographics_stack1Input: UpdateDemographics_stack1Input,
};

export type UpdateDemographicsStack1Mutation = {
  updateDemographics_stack1:  {
    __typename: "Demographics_stack1",
    are_you_spanish_latino: number | null,
    select_all_that_apply: string | null,
    id: string,
    formid: string | null,
    what_is_your_race: string | null,
  } | null,
};

export type DeleteDemographicsStack2MutationVariables = {
  id: string,
};

export type DeleteDemographicsStack2Mutation = {
  deleteDemographics_stack2:  {
    __typename: "Demographics_stack2",
    id: string,
    formid: string | null,
    highest_level_education: string | null,
  } | null,
};

export type CreateDemographicsStack2MutationVariables = {
  createDemographics_stack2Input: CreateDemographics_stack2Input,
};

export type CreateDemographicsStack2Mutation = {
  createDemographics_stack2:  {
    __typename: "Demographics_stack2",
    id: string,
    formid: string | null,
    highest_level_education: string | null,
  } | null,
};

export type UpdateDemographicsStack2MutationVariables = {
  updateDemographics_stack2Input: UpdateDemographics_stack2Input,
};

export type UpdateDemographicsStack2Mutation = {
  updateDemographics_stack2:  {
    __typename: "Demographics_stack2",
    id: string,
    formid: string | null,
    highest_level_education: string | null,
  } | null,
};

export type DeleteDemographicsStack3MutationVariables = {
  id: string,
};

export type DeleteDemographicsStack3Mutation = {
  deleteDemographics_stack3:  {
    __typename: "Demographics_stack3",
    id: string,
    formid: string | null,
    marital_status: string | null,
    living_marriage_like: number | null,
  } | null,
};

export type CreateDemographicsStack3MutationVariables = {
  createDemographics_stack3Input: CreateDemographics_stack3Input,
};

export type CreateDemographicsStack3Mutation = {
  createDemographics_stack3:  {
    __typename: "Demographics_stack3",
    id: string,
    formid: string | null,
    marital_status: string | null,
    living_marriage_like: number | null,
  } | null,
};

export type UpdateDemographicsStack3MutationVariables = {
  updateDemographics_stack3Input: UpdateDemographics_stack3Input,
};

export type UpdateDemographicsStack3Mutation = {
  updateDemographics_stack3:  {
    __typename: "Demographics_stack3",
    id: string,
    formid: string | null,
    marital_status: string | null,
    living_marriage_like: number | null,
  } | null,
};

export type DeleteDemographicsStack4MutationVariables = {
  id: string,
};

export type DeleteDemographicsStack4Mutation = {
  deleteDemographics_stack4:  {
    __typename: "Demographics_stack4",
    id: string,
    formid: string | null,
    bio_children: number | null,
    step_children: number | null,
    children_0_to_17: number | null,
  } | null,
};

export type CreateDemographicsStack4MutationVariables = {
  createDemographics_stack4Input: CreateDemographics_stack4Input,
};

export type CreateDemographicsStack4Mutation = {
  createDemographics_stack4:  {
    __typename: "Demographics_stack4",
    id: string,
    formid: string | null,
    bio_children: number | null,
    step_children: number | null,
    children_0_to_17: number | null,
  } | null,
};

export type UpdateDemographicsStack4MutationVariables = {
  updateDemographics_stack4Input: UpdateDemographics_stack4Input,
};

export type UpdateDemographicsStack4Mutation = {
  updateDemographics_stack4:  {
    __typename: "Demographics_stack4",
    id: string,
    formid: string | null,
    bio_children: number | null,
    step_children: number | null,
    children_0_to_17: number | null,
  } | null,
};

export type DeleteDemographicsStack5MutationVariables = {
  id: string,
};

export type DeleteDemographicsStack5Mutation = {
  deleteDemographics_stack5:  {
    __typename: "Demographics_stack5",
    id: string,
    formid: string | null,
    gender: string | null,
    currently_pregnant: number | null,
  } | null,
};

export type CreateDemographicsStack5MutationVariables = {
  createDemographics_stack5Input: CreateDemographics_stack5Input,
};

export type CreateDemographicsStack5Mutation = {
  createDemographics_stack5:  {
    __typename: "Demographics_stack5",
    id: string,
    formid: string | null,
    gender: string | null,
    currently_pregnant: number | null,
  } | null,
};

export type UpdateDemographicsStack5MutationVariables = {
  updateDemographics_stack5Input: UpdateDemographics_stack5Input,
};

export type UpdateDemographicsStack5Mutation = {
  updateDemographics_stack5:  {
    __typename: "Demographics_stack5",
    id: string,
    formid: string | null,
    gender: string | null,
    currently_pregnant: number | null,
  } | null,
};

export type DeleteEmploymentStack0MutationVariables = {
  id: string,
};

export type DeleteEmploymentStack0Mutation = {
  deleteEmployment_stack0:  {
    __typename: "Employment_stack0",
    id: string,
    formid: string | null,
    emp_status: string | null,
    type_work: string | null,
    commute_work: number | null,
    commute_int: number | null,
  } | null,
};

export type CreateEmploymentStack0MutationVariables = {
  createEmployment_stack0Input: CreateEmployment_stack0Input,
};

export type CreateEmploymentStack0Mutation = {
  createEmployment_stack0:  {
    __typename: "Employment_stack0",
    id: string,
    formid: string | null,
    emp_status: string | null,
    type_work: string | null,
    commute_work: number | null,
    commute_int: number | null,
  } | null,
};

export type UpdateEmploymentStack0MutationVariables = {
  updateEmployment_stack0Input: UpdateEmployment_stack0Input,
};

export type UpdateEmploymentStack0Mutation = {
  updateEmployment_stack0:  {
    __typename: "Employment_stack0",
    id: string,
    formid: string | null,
    emp_status: string | null,
    type_work: string | null,
    commute_work: number | null,
    commute_int: number | null,
  } | null,
};

export type DeleteEmploymentStack1MutationVariables = {
  id: string,
};

export type DeleteEmploymentStack1Mutation = {
  deleteEmployment_stack1:  {
    __typename: "Employment_stack1",
    id: string,
    formid: string | null,
    hours_work_week: number | null,
    hours_typical: string | null,
    hours_per_day: string | null,
  } | null,
};

export type CreateEmploymentStack1MutationVariables = {
  createEmployment_stack1Input: CreateEmployment_stack1Input,
};

export type CreateEmploymentStack1Mutation = {
  createEmployment_stack1:  {
    __typename: "Employment_stack1",
    id: string,
    formid: string | null,
    hours_work_week: number | null,
    hours_typical: string | null,
    hours_per_day: string | null,
  } | null,
};

export type UpdateEmploymentStack1MutationVariables = {
  updateEmployment_stack1Input: UpdateEmployment_stack1Input,
};

export type UpdateEmploymentStack1Mutation = {
  updateEmployment_stack1:  {
    __typename: "Employment_stack1",
    id: string,
    formid: string | null,
    hours_work_week: number | null,
    hours_typical: string | null,
    hours_per_day: string | null,
  } | null,
};

export type DeleteEmploymentStack2MutationVariables = {
  id: string,
};

export type DeleteEmploymentStack2Mutation = {
  deleteEmployment_stack2:  {
    __typename: "Employment_stack2",
    id: string,
    formid: string | null,
    people_under_supervision: number | null,
    weeks_missed_work: number | null,
    hours_week_missed: number | null,
  } | null,
};

export type CreateEmploymentStack2MutationVariables = {
  createEmployment_stack2Input: CreateEmployment_stack2Input,
};

export type CreateEmploymentStack2Mutation = {
  createEmployment_stack2:  {
    __typename: "Employment_stack2",
    id: string,
    formid: string | null,
    people_under_supervision: number | null,
    weeks_missed_work: number | null,
    hours_week_missed: number | null,
  } | null,
};

export type UpdateEmploymentStack2MutationVariables = {
  updateEmployment_stack2Input: UpdateEmployment_stack2Input,
};

export type UpdateEmploymentStack2Mutation = {
  updateEmployment_stack2:  {
    __typename: "Employment_stack2",
    id: string,
    formid: string | null,
    people_under_supervision: number | null,
    weeks_missed_work: number | null,
    hours_week_missed: number | null,
  } | null,
};

export type DeleteEmploymentStack3MutationVariables = {
  id: string,
};

export type DeleteEmploymentStack3Mutation = {
  deleteEmployment_stack3:  {
    __typename: "Employment_stack3",
    id: string,
    formid: string | null,
    hours_worked: number | null,
    health_suffered: number | null,
  } | null,
};

export type CreateEmploymentStack3MutationVariables = {
  createEmployment_stack3Input: CreateEmployment_stack3Input,
};

export type CreateEmploymentStack3Mutation = {
  createEmployment_stack3:  {
    __typename: "Employment_stack3",
    id: string,
    formid: string | null,
    hours_worked: number | null,
    health_suffered: number | null,
  } | null,
};

export type UpdateEmploymentStack3MutationVariables = {
  updateEmployment_stack3Input: UpdateEmployment_stack3Input,
};

export type UpdateEmploymentStack3Mutation = {
  updateEmployment_stack3:  {
    __typename: "Employment_stack3",
    id: string,
    formid: string | null,
    hours_worked: number | null,
    health_suffered: number | null,
  } | null,
};

export type DeleteHealthBehavior2Stack0MutationVariables = {
  id: string,
};

export type DeleteHealthBehavior2Stack0Mutation = {
  deleteHealth_behavior2_stack0:  {
    __typename: "Health_behavior2_stack0",
    id: string,
    formid: string | null,
    days_tobacco: string | null,
    days_nicotine: number | null,
    days_nicotine2: string | null,
    how_many_tobacco: number | null,
  } | null,
};

export type CreateHealthBehavior2Stack0MutationVariables = {
  createHealth_behavior2_stack0Input: CreateHealth_behavior2_stack0Input,
};

export type CreateHealthBehavior2Stack0Mutation = {
  createHealth_behavior2_stack0:  {
    __typename: "Health_behavior2_stack0",
    id: string,
    formid: string | null,
    days_tobacco: string | null,
    days_nicotine: number | null,
    days_nicotine2: string | null,
    how_many_tobacco: number | null,
  } | null,
};

export type UpdateHealthBehavior2Stack0MutationVariables = {
  updateHealth_behavior2_stack0Input: UpdateHealth_behavior2_stack0Input,
};

export type UpdateHealthBehavior2Stack0Mutation = {
  updateHealth_behavior2_stack0:  {
    __typename: "Health_behavior2_stack0",
    id: string,
    formid: string | null,
    days_tobacco: string | null,
    days_nicotine: number | null,
    days_nicotine2: string | null,
    how_many_tobacco: number | null,
  } | null,
};

export type DeleteHealthBehavior2Stack1MutationVariables = {
  id: string,
};

export type DeleteHealthBehavior2Stack1Mutation = {
  deleteHealth_behavior2_stack1:  {
    __typename: "Health_behavior2_stack1",
    id: string,
    formid: string | null,
    days_week_alcohol: string | null,
    how_many_drinks: number | null,
    skin_in_sun: string | null,
  } | null,
};

export type CreateHealthBehavior2Stack1MutationVariables = {
  createHealth_behavior2_stack1Input: CreateHealth_behavior2_stack1Input,
};

export type CreateHealthBehavior2Stack1Mutation = {
  createHealth_behavior2_stack1:  {
    __typename: "Health_behavior2_stack1",
    id: string,
    formid: string | null,
    days_week_alcohol: string | null,
    how_many_drinks: number | null,
    skin_in_sun: string | null,
  } | null,
};

export type UpdateHealthBehavior2Stack1MutationVariables = {
  updateHealth_behavior2_stack1Input: UpdateHealth_behavior2_stack1Input,
};

export type UpdateHealthBehavior2Stack1Mutation = {
  updateHealth_behavior2_stack1:  {
    __typename: "Health_behavior2_stack1",
    id: string,
    formid: string | null,
    days_week_alcohol: string | null,
    how_many_drinks: number | null,
    skin_in_sun: string | null,
  } | null,
};

export type DeleteHealthBehavior2Stack2MutationVariables = {
  id: string,
};

export type DeleteHealthBehavior2Stack2Mutation = {
  deleteHealth_behavior2_stack2:  {
    __typename: "Health_behavior2_stack2",
    id: string,
    formid: string | null,
    avoid_sun: string | null,
    sunscreen_spf15: string | null,
    protective_clothing: string | null,
  } | null,
};

export type CreateHealthBehavior2Stack2MutationVariables = {
  createHealth_behavior2_stack2Input: CreateHealth_behavior2_stack2Input,
};

export type CreateHealthBehavior2Stack2Mutation = {
  createHealth_behavior2_stack2:  {
    __typename: "Health_behavior2_stack2",
    id: string,
    formid: string | null,
    avoid_sun: string | null,
    sunscreen_spf15: string | null,
    protective_clothing: string | null,
  } | null,
};

export type UpdateHealthBehavior2Stack2MutationVariables = {
  updateHealth_behavior2_stack2Input: UpdateHealth_behavior2_stack2Input,
};

export type UpdateHealthBehavior2Stack2Mutation = {
  updateHealth_behavior2_stack2:  {
    __typename: "Health_behavior2_stack2",
    id: string,
    formid: string | null,
    avoid_sun: string | null,
    sunscreen_spf15: string | null,
    protective_clothing: string | null,
  } | null,
};

export type DeleteHealthBehavior2Stack3MutationVariables = {
  id: string,
};

export type DeleteHealthBehavior2Stack3Mutation = {
  deleteHealth_behavior2_stack3:  {
    __typename: "Health_behavior2_stack3",
    id: string,
    formid: string | null,
    vigorous_exercise: number | null,
    moderate_exervise: number | null,
  } | null,
};

export type CreateHealthBehavior2Stack3MutationVariables = {
  createHealth_behavior2_stack3Input: CreateHealth_behavior2_stack3Input,
};

export type CreateHealthBehavior2Stack3Mutation = {
  createHealth_behavior2_stack3:  {
    __typename: "Health_behavior2_stack3",
    id: string,
    formid: string | null,
    vigorous_exercise: number | null,
    moderate_exervise: number | null,
  } | null,
};

export type UpdateHealthBehavior2Stack3MutationVariables = {
  updateHealth_behavior2_stack3Input: UpdateHealth_behavior2_stack3Input,
};

export type UpdateHealthBehavior2Stack3Mutation = {
  updateHealth_behavior2_stack3:  {
    __typename: "Health_behavior2_stack3",
    id: string,
    formid: string | null,
    vigorous_exercise: number | null,
    moderate_exervise: number | null,
  } | null,
};

export type DeleteHealthBehavior2Stack4MutationVariables = {
  id: string,
};

export type DeleteHealthBehavior2Stack4Mutation = {
  deleteHealth_behavior2_stack4:  {
    __typename: "Health_behavior2_stack4",
    id: string,
    formid: string | null,
    interactive_vg: number | null,
    home_any_other: number | null,
    by_yourself_somewhere_else: number | null,
    in_a_group: number | null,
    play_partner_game: number | null,
    internet_group_live: number | null,
    other: number | null,
    do_not_workout: number | null,
  } | null,
};

export type CreateHealthBehavior2Stack4MutationVariables = {
  createHealth_behavior2_stack4Input: CreateHealth_behavior2_stack4Input,
};

export type CreateHealthBehavior2Stack4Mutation = {
  createHealth_behavior2_stack4:  {
    __typename: "Health_behavior2_stack4",
    id: string,
    formid: string | null,
    interactive_vg: number | null,
    home_any_other: number | null,
    by_yourself_somewhere_else: number | null,
    in_a_group: number | null,
    play_partner_game: number | null,
    internet_group_live: number | null,
    other: number | null,
    do_not_workout: number | null,
  } | null,
};

export type UpdateHealthBehavior2Stack4MutationVariables = {
  updateHealth_behavior2_stack4Input: UpdateHealth_behavior2_stack4Input,
};

export type UpdateHealthBehavior2Stack4Mutation = {
  updateHealth_behavior2_stack4:  {
    __typename: "Health_behavior2_stack4",
    id: string,
    formid: string | null,
    interactive_vg: number | null,
    home_any_other: number | null,
    by_yourself_somewhere_else: number | null,
    in_a_group: number | null,
    play_partner_game: number | null,
    internet_group_live: number | null,
    other: number | null,
    do_not_workout: number | null,
  } | null,
};

export type DeleteHealthBehavior2Stack5MutationVariables = {
  id: string,
};

export type DeleteHealthBehavior2Stack5Mutation = {
  deleteHealth_behavior2_stack5:  {
    __typename: "Health_behavior2_stack5",
    id: string,
    formid: string | null,
    heredity: number | null,
    lifestyle: number | null,
    stresss: number | null,
    strategies: number | null,
    doctor: number | null,
    carefully_follow: number | null,
    environment: number | null,
    attitude: number | null,
  } | null,
};

export type CreateHealthBehavior2Stack5MutationVariables = {
  createHealth_behavior2_stack5Input: CreateHealth_behavior2_stack5Input,
};

export type CreateHealthBehavior2Stack5Mutation = {
  createHealth_behavior2_stack5:  {
    __typename: "Health_behavior2_stack5",
    id: string,
    formid: string | null,
    heredity: number | null,
    lifestyle: number | null,
    stresss: number | null,
    strategies: number | null,
    doctor: number | null,
    carefully_follow: number | null,
    environment: number | null,
    attitude: number | null,
  } | null,
};

export type UpdateHealthBehavior2Stack5MutationVariables = {
  updateHealth_behavior2_stack5Input: UpdateHealth_behavior2_stack5Input,
};

export type UpdateHealthBehavior2Stack5Mutation = {
  updateHealth_behavior2_stack5:  {
    __typename: "Health_behavior2_stack5",
    id: string,
    formid: string | null,
    heredity: number | null,
    lifestyle: number | null,
    stresss: number | null,
    strategies: number | null,
    doctor: number | null,
    carefully_follow: number | null,
    environment: number | null,
    attitude: number | null,
  } | null,
};

export type DeleteHealthBehavior2Stack6MutationVariables = {
  id: string,
};

export type DeleteHealthBehavior2Stack6Mutation = {
  deleteHealth_behavior2_stack6:  {
    __typename: "Health_behavior2_stack6",
    id: string,
    formid: string | null,
    wshc: number | null,
    time_relax: number | null,
    volunteer_work: number | null,
    spend_leisure_hours: string | null,
  } | null,
};

export type CreateHealthBehavior2Stack6MutationVariables = {
  createHealth_behavior2_stack6Input: CreateHealth_behavior2_stack6Input,
};

export type CreateHealthBehavior2Stack6Mutation = {
  createHealth_behavior2_stack6:  {
    __typename: "Health_behavior2_stack6",
    id: string,
    formid: string | null,
    wshc: number | null,
    time_relax: number | null,
    volunteer_work: number | null,
    spend_leisure_hours: string | null,
  } | null,
};

export type UpdateHealthBehavior2Stack6MutationVariables = {
  updateHealth_behavior2_stack6Input: UpdateHealth_behavior2_stack6Input,
};

export type UpdateHealthBehavior2Stack6Mutation = {
  updateHealth_behavior2_stack6:  {
    __typename: "Health_behavior2_stack6",
    id: string,
    formid: string | null,
    wshc: number | null,
    time_relax: number | null,
    volunteer_work: number | null,
    spend_leisure_hours: string | null,
  } | null,
};

export type DeleteHealthBehaviorsStack0MutationVariables = {
  id: string,
};

export type DeleteHealthBehaviorsStack0Mutation = {
  deleteHealth_behaviors_stack0:  {
    __typename: "Health_behaviors_stack0",
    id: string,
    formid: string | null,
    regular_doctor: string | null,
    how_many_visits: number | null,
    different_perscription: number | null,
  } | null,
};

export type CreateHealthBehaviorsStack0MutationVariables = {
  createHealth_behaviors_stack0Input: CreateHealth_behaviors_stack0Input,
};

export type CreateHealthBehaviorsStack0Mutation = {
  createHealth_behaviors_stack0:  {
    __typename: "Health_behaviors_stack0",
    id: string,
    formid: string | null,
    regular_doctor: string | null,
    how_many_visits: number | null,
    different_perscription: number | null,
  } | null,
};

export type UpdateHealthBehaviorsStack0MutationVariables = {
  updateHealth_behaviors_stack0Input: UpdateHealth_behaviors_stack0Input,
};

export type UpdateHealthBehaviorsStack0Mutation = {
  updateHealth_behaviors_stack0:  {
    __typename: "Health_behaviors_stack0",
    id: string,
    formid: string | null,
    regular_doctor: string | null,
    how_many_visits: number | null,
    different_perscription: number | null,
  } | null,
};

export type DeleteHealthBehaviorsStack1MutationVariables = {
  id: string,
};

export type DeleteHealthBehaviorsStack1Mutation = {
  deleteHealth_behaviors_stack1:  {
    __typename: "Health_behaviors_stack1",
    id: string,
    formid: string | null,
    birth_control: number | null,
    perscriped_opioid: number | null,
    dietary_vitamins: number | null,
  } | null,
};

export type CreateHealthBehaviorsStack1MutationVariables = {
  createHealth_behaviors_stack1Input: CreateHealth_behaviors_stack1Input,
};

export type CreateHealthBehaviorsStack1Mutation = {
  createHealth_behaviors_stack1:  {
    __typename: "Health_behaviors_stack1",
    id: string,
    formid: string | null,
    birth_control: number | null,
    perscriped_opioid: number | null,
    dietary_vitamins: number | null,
  } | null,
};

export type UpdateHealthBehaviorsStack1MutationVariables = {
  updateHealth_behaviors_stack1Input: UpdateHealth_behaviors_stack1Input,
};

export type UpdateHealthBehaviorsStack1Mutation = {
  updateHealth_behaviors_stack1:  {
    __typename: "Health_behaviors_stack1",
    id: string,
    formid: string | null,
    birth_control: number | null,
    perscriped_opioid: number | null,
    dietary_vitamins: number | null,
  } | null,
};

export type DeleteHighMoodStack0MutationVariables = {
  id: string,
};

export type DeleteHighMoodStack0Mutation = {
  deleteHigh_mood_stack0:  {
    __typename: "High_mood_stack0",
    id: string,
    formid: string | null,
    high_mood_episode: number | null,
  } | null,
};

export type CreateHighMoodStack0MutationVariables = {
  createHigh_mood_stack0Input: CreateHigh_mood_stack0Input,
};

export type CreateHighMoodStack0Mutation = {
  createHigh_mood_stack0:  {
    __typename: "High_mood_stack0",
    id: string,
    formid: string | null,
    high_mood_episode: number | null,
  } | null,
};

export type UpdateHighMoodStack0MutationVariables = {
  updateHigh_mood_stack0Input: UpdateHigh_mood_stack0Input,
};

export type UpdateHighMoodStack0Mutation = {
  updateHigh_mood_stack0:  {
    __typename: "High_mood_stack0",
    id: string,
    formid: string | null,
    high_mood_episode: number | null,
  } | null,
};

export type DeleteHighMoodStack1MutationVariables = {
  id: string,
};

export type DeleteHighMoodStack1Mutation = {
  deleteHigh_mood_stack1:  {
    __typename: "High_mood_stack1",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type CreateHighMoodStack1MutationVariables = {
  createHigh_mood_stack1Input: CreateHigh_mood_stack1Input,
};

export type CreateHighMoodStack1Mutation = {
  createHigh_mood_stack1:  {
    __typename: "High_mood_stack1",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type UpdateHighMoodStack1MutationVariables = {
  updateHigh_mood_stack1Input: UpdateHigh_mood_stack1Input,
};

export type UpdateHighMoodStack1Mutation = {
  updateHigh_mood_stack1:  {
    __typename: "High_mood_stack1",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type DeleteHighMoodStack2MutationVariables = {
  id: string,
};

export type DeleteHighMoodStack2Mutation = {
  deleteHigh_mood_stack2:  {
    __typename: "High_mood_stack2",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type CreateHighMoodStack2MutationVariables = {
  createHigh_mood_stack2Input: CreateHigh_mood_stack2Input,
};

export type CreateHighMoodStack2Mutation = {
  createHigh_mood_stack2:  {
    __typename: "High_mood_stack2",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type UpdateHighMoodStack2MutationVariables = {
  updateHigh_mood_stack2Input: UpdateHigh_mood_stack2Input,
};

export type UpdateHighMoodStack2Mutation = {
  updateHigh_mood_stack2:  {
    __typename: "High_mood_stack2",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type DeleteLakeNonaStack0MutationVariables = {
  id: string,
};

export type DeleteLakeNonaStack0Mutation = {
  deleteLakeNona_stack0:  {
    __typename: "LakeNona_stack0",
    id: string,
    form_id: string | null,
    live_in: number | null,
    play_in: number | null,
    study_in: number | null,
    work_in: number | null,
  } | null,
};

export type CreateLakeNonaStack0MutationVariables = {
  createLakeNona_stack0Input: CreateLakeNona_stack0Input,
};

export type CreateLakeNonaStack0Mutation = {
  createLakeNona_stack0:  {
    __typename: "LakeNona_stack0",
    id: string,
    form_id: string | null,
    live_in: number | null,
    play_in: number | null,
    study_in: number | null,
    work_in: number | null,
  } | null,
};

export type UpdateLakeNonaStack0MutationVariables = {
  updateLakeNona_stack0Input: UpdateLakeNona_stack0Input,
};

export type UpdateLakeNonaStack0Mutation = {
  updateLakeNona_stack0:  {
    __typename: "LakeNona_stack0",
    id: string,
    form_id: string | null,
    live_in: number | null,
    play_in: number | null,
    study_in: number | null,
    work_in: number | null,
  } | null,
};

export type DeleteLowMoodStack0MutationVariables = {
  id: string,
};

export type DeleteLowMoodStack0Mutation = {
  deleteLow_mood_stack0:  {
    __typename: "Low_mood_stack0",
    id: string,
    formid: string | null,
    sad_or_depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feel_down: string | null,
    feel_lonely: string | null,
  } | null,
};

export type CreateLowMoodStack0MutationVariables = {
  createLow_mood_stack0Input: CreateLow_mood_stack0Input,
};

export type CreateLowMoodStack0Mutation = {
  createLow_mood_stack0:  {
    __typename: "Low_mood_stack0",
    id: string,
    formid: string | null,
    sad_or_depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feel_down: string | null,
    feel_lonely: string | null,
  } | null,
};

export type UpdateLowMoodStack0MutationVariables = {
  updateLow_mood_stack0Input: UpdateLow_mood_stack0Input,
};

export type UpdateLowMoodStack0Mutation = {
  updateLow_mood_stack0:  {
    __typename: "Low_mood_stack0",
    id: string,
    formid: string | null,
    sad_or_depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feel_down: string | null,
    feel_lonely: string | null,
  } | null,
};

export type DeleteLowMoodStack1MutationVariables = {
  id: string,
};

export type DeleteLowMoodStack1Mutation = {
  deleteLow_mood_stack1:  {
    __typename: "Low_mood_stack1",
    id: string,
    formid: string | null,
    think_about_death: string | null,
    psych_distress: string | null,
    interfere_work: string | null,
  } | null,
};

export type CreateLowMoodStack1MutationVariables = {
  createLow_mood_stack1Input: CreateLow_mood_stack1Input,
};

export type CreateLowMoodStack1Mutation = {
  createLow_mood_stack1:  {
    __typename: "Low_mood_stack1",
    id: string,
    formid: string | null,
    think_about_death: string | null,
    psych_distress: string | null,
    interfere_work: string | null,
  } | null,
};

export type UpdateLowMoodStack1MutationVariables = {
  updateLow_mood_stack1Input: UpdateLow_mood_stack1Input,
};

export type UpdateLowMoodStack1Mutation = {
  updateLow_mood_stack1:  {
    __typename: "Low_mood_stack1",
    id: string,
    formid: string | null,
    think_about_death: string | null,
    psych_distress: string | null,
    interfere_work: string | null,
  } | null,
};

export type DeleteLowMoodStack2MutationVariables = {
  id: string,
};

export type DeleteLowMoodStack2Mutation = {
  deleteLow_mood_stack2:  {
    __typename: "Low_mood_stack2",
    id: string,
    formid: string | null,
    depressed_one_month: number | null,
  } | null,
};

export type CreateLowMoodStack2MutationVariables = {
  createLow_mood_stack2Input: CreateLow_mood_stack2Input,
};

export type CreateLowMoodStack2Mutation = {
  createLow_mood_stack2:  {
    __typename: "Low_mood_stack2",
    id: string,
    formid: string | null,
    depressed_one_month: number | null,
  } | null,
};

export type UpdateLowMoodStack2MutationVariables = {
  updateLow_mood_stack2Input: UpdateLow_mood_stack2Input,
};

export type UpdateLowMoodStack2Mutation = {
  updateLow_mood_stack2:  {
    __typename: "Low_mood_stack2",
    id: string,
    formid: string | null,
    depressed_one_month: number | null,
  } | null,
};

export type DeleteLowMoodStack3MutationVariables = {
  id: string,
};

export type DeleteLowMoodStack3Mutation = {
  deleteLow_mood_stack3:  {
    __typename: "Low_mood_stack3",
    id: string,
    formid: string | null,
    depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feeling_down: string | null,
  } | null,
};

export type CreateLowMoodStack3MutationVariables = {
  createLow_mood_stack3Input: CreateLow_mood_stack3Input,
};

export type CreateLowMoodStack3Mutation = {
  createLow_mood_stack3:  {
    __typename: "Low_mood_stack3",
    id: string,
    formid: string | null,
    depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feeling_down: string | null,
  } | null,
};

export type UpdateLowMoodStack3MutationVariables = {
  updateLow_mood_stack3Input: UpdateLow_mood_stack3Input,
};

export type UpdateLowMoodStack3Mutation = {
  updateLow_mood_stack3:  {
    __typename: "Low_mood_stack3",
    id: string,
    formid: string | null,
    depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feeling_down: string | null,
  } | null,
};

export type DeleteLowMoodStack4MutationVariables = {
  id: string,
};

export type DeleteLowMoodStack4Mutation = {
  deleteLow_mood_stack4:  {
    __typename: "Low_mood_stack4",
    id: string,
    formid: string | null,
  } | null,
};

export type CreateLowMoodStack4MutationVariables = {
  createLow_mood_stack4Input: CreateLow_mood_stack4Input,
};

export type CreateLowMoodStack4Mutation = {
  createLow_mood_stack4:  {
    __typename: "Low_mood_stack4",
    id: string,
    formid: string | null,
  } | null,
};

export type UpdateLowMoodStack4MutationVariables = {
  updateLow_mood_stack4Input: UpdateLow_mood_stack4Input,
};

export type UpdateLowMoodStack4Mutation = {
  updateLow_mood_stack4:  {
    __typename: "Low_mood_stack4",
    id: string,
    formid: string | null,
  } | null,
};

export type DeleteLowMoodStack5MutationVariables = {
  id: string,
};

export type DeleteLowMoodStack5Mutation = {
  deleteLow_mood_stack5:  {
    __typename: "Low_mood_stack5",
    id: string,
    formid: string | null,
    years_depression: number | null,
    months_depression: number | null,
  } | null,
};

export type CreateLowMoodStack5MutationVariables = {
  createLow_mood_stack5Input: CreateLow_mood_stack5Input,
};

export type CreateLowMoodStack5Mutation = {
  createLow_mood_stack5:  {
    __typename: "Low_mood_stack5",
    id: string,
    formid: string | null,
    years_depression: number | null,
    months_depression: number | null,
  } | null,
};

export type UpdateLowMoodStack5MutationVariables = {
  updateLow_mood_stack5Input: UpdateLow_mood_stack5Input,
};

export type UpdateLowMoodStack5Mutation = {
  updateLow_mood_stack5:  {
    __typename: "Low_mood_stack5",
    id: string,
    formid: string | null,
    years_depression: number | null,
    months_depression: number | null,
  } | null,
};

export type DeleteLowMoodStack6MutationVariables = {
  id: string,
};

export type DeleteLowMoodStack6Mutation = {
  deleteLow_mood_stack6:  {
    __typename: "Low_mood_stack6",
    id: string,
    formid: string | null,
    lack_companionshiup: number | null,
    no_one_turn_to: number | null,
    left_out: number | null,
    outgoing: number | null,
    isolated: number | null,
    can_find_companionship: number | null,
    unhappy: number | null,
    around_me_not_with: number | null,
  } | null,
};

export type CreateLowMoodStack6MutationVariables = {
  createLow_mood_stack6Input: CreateLow_mood_stack6Input,
};

export type CreateLowMoodStack6Mutation = {
  createLow_mood_stack6:  {
    __typename: "Low_mood_stack6",
    id: string,
    formid: string | null,
    lack_companionshiup: number | null,
    no_one_turn_to: number | null,
    left_out: number | null,
    outgoing: number | null,
    isolated: number | null,
    can_find_companionship: number | null,
    unhappy: number | null,
    around_me_not_with: number | null,
  } | null,
};

export type UpdateLowMoodStack6MutationVariables = {
  updateLow_mood_stack6Input: UpdateLow_mood_stack6Input,
};

export type UpdateLowMoodStack6Mutation = {
  updateLow_mood_stack6:  {
    __typename: "Low_mood_stack6",
    id: string,
    formid: string | null,
    lack_companionshiup: number | null,
    no_one_turn_to: number | null,
    left_out: number | null,
    outgoing: number | null,
    isolated: number | null,
    can_find_companionship: number | null,
    unhappy: number | null,
    around_me_not_with: number | null,
  } | null,
};

export type DeleteNeighborhoodStack0MutationVariables = {
  id: string,
};

export type DeleteNeighborhoodStack0Mutation = {
  deleteNeighborhood_stack0:  {
    __typename: "Neighborhood_stack0",
    id: string,
    formid: string | null,
    friendly: string | null,
    trusted: string | null,
    same_values: string | null,
    willing_to_help: string | null,
  } | null,
};

export type CreateNeighborhoodStack0MutationVariables = {
  createNeighborhood_stack0Input: CreateNeighborhood_stack0Input,
};

export type CreateNeighborhoodStack0Mutation = {
  createNeighborhood_stack0:  {
    __typename: "Neighborhood_stack0",
    id: string,
    formid: string | null,
    friendly: string | null,
    trusted: string | null,
    same_values: string | null,
    willing_to_help: string | null,
  } | null,
};

export type UpdateNeighborhoodStack0MutationVariables = {
  updateNeighborhood_stack0Input: UpdateNeighborhood_stack0Input,
};

export type UpdateNeighborhoodStack0Mutation = {
  updateNeighborhood_stack0:  {
    __typename: "Neighborhood_stack0",
    id: string,
    formid: string | null,
    friendly: string | null,
    trusted: string | null,
    same_values: string | null,
    willing_to_help: string | null,
  } | null,
};

export type DeleteNeighborhoodStack1MutationVariables = {
  id: string,
};

export type DeleteNeighborhoodStack1Mutation = {
  deleteNeighborhood_stack1:  {
    __typename: "Neighborhood_stack1",
    id: string,
    formid: string | null,
    how_many_friends: number | null,
    know_by_name: number | null,
    conversation_with: number | null,
  } | null,
};

export type CreateNeighborhoodStack1MutationVariables = {
  createNeighborhood_stack1Input: CreateNeighborhood_stack1Input,
};

export type CreateNeighborhoodStack1Mutation = {
  createNeighborhood_stack1:  {
    __typename: "Neighborhood_stack1",
    id: string,
    formid: string | null,
    how_many_friends: number | null,
    know_by_name: number | null,
    conversation_with: number | null,
  } | null,
};

export type UpdateNeighborhoodStack1MutationVariables = {
  updateNeighborhood_stack1Input: UpdateNeighborhood_stack1Input,
};

export type UpdateNeighborhoodStack1Mutation = {
  updateNeighborhood_stack1:  {
    __typename: "Neighborhood_stack1",
    id: string,
    formid: string | null,
    how_many_friends: number | null,
    know_by_name: number | null,
    conversation_with: number | null,
  } | null,
};

export type DeleteNeighborhoodStack2MutationVariables = {
  id: string,
};

export type DeleteNeighborhoodStack2Mutation = {
  deleteNeighborhood_stack2:  {
    __typename: "Neighborhood_stack2",
    id: string,
    formid: string | null,
    ask_for_help: number | null,
    get_together_socialily: number | null,
  } | null,
};

export type CreateNeighborhoodStack2MutationVariables = {
  createNeighborhood_stack2Input: CreateNeighborhood_stack2Input,
};

export type CreateNeighborhoodStack2Mutation = {
  createNeighborhood_stack2:  {
    __typename: "Neighborhood_stack2",
    id: string,
    formid: string | null,
    ask_for_help: number | null,
    get_together_socialily: number | null,
  } | null,
};

export type UpdateNeighborhoodStack2MutationVariables = {
  updateNeighborhood_stack2Input: UpdateNeighborhood_stack2Input,
};

export type UpdateNeighborhoodStack2Mutation = {
  updateNeighborhood_stack2:  {
    __typename: "Neighborhood_stack2",
    id: string,
    formid: string | null,
    ask_for_help: number | null,
    get_together_socialily: number | null,
  } | null,
};

export type DeleteOralHealthStack0MutationVariables = {
  id: string,
};

export type DeleteOralHealthStack0Mutation = {
  deleteOral_health_stack0:  {
    __typename: "Oral_health_stack0",
    id: string,
    formid: string | null,
    brush_teeth: number | null,
    dental_floss: number | null,
    mouthwash: number | null,
  } | null,
};

export type CreateOralHealthStack0MutationVariables = {
  createOral_health_stack0Input: CreateOral_health_stack0Input,
};

export type CreateOralHealthStack0Mutation = {
  createOral_health_stack0:  {
    __typename: "Oral_health_stack0",
    id: string,
    formid: string | null,
    brush_teeth: number | null,
    dental_floss: number | null,
    mouthwash: number | null,
  } | null,
};

export type UpdateOralHealthStack0MutationVariables = {
  updateOral_health_stack0Input: UpdateOral_health_stack0Input,
};

export type UpdateOralHealthStack0Mutation = {
  updateOral_health_stack0:  {
    __typename: "Oral_health_stack0",
    id: string,
    formid: string | null,
    brush_teeth: number | null,
    dental_floss: number | null,
    mouthwash: number | null,
  } | null,
};

export type DeleteOralHealthStack1MutationVariables = {
  id: string,
};

export type DeleteOralHealthStack1Mutation = {
  deleteOral_health_stack1:  {
    __typename: "Oral_health_stack1",
    id: string,
    formid: string | null,
    days_floss: number | null,
    days_mouthwash: number | null,
  } | null,
};

export type CreateOralHealthStack1MutationVariables = {
  createOral_health_stack1Input: CreateOral_health_stack1Input,
};

export type CreateOralHealthStack1Mutation = {
  createOral_health_stack1:  {
    __typename: "Oral_health_stack1",
    id: string,
    formid: string | null,
    days_floss: number | null,
    days_mouthwash: number | null,
  } | null,
};

export type UpdateOralHealthStack1MutationVariables = {
  updateOral_health_stack1Input: UpdateOral_health_stack1Input,
};

export type UpdateOralHealthStack1Mutation = {
  updateOral_health_stack1:  {
    __typename: "Oral_health_stack1",
    id: string,
    formid: string | null,
    days_floss: number | null,
    days_mouthwash: number | null,
  } | null,
};

export type DeletePetsStack0MutationVariables = {
  id: string,
};

export type DeletePetsStack0Mutation = {
  deletePets_stack0:  {
    __typename: "Pets_stack0",
    id: string,
    formid: string | null,
    have_pet: number | null,
    type_pet: string | null,
  } | null,
};

export type CreatePetsStack0MutationVariables = {
  createPets_stack0Input: CreatePets_stack0Input,
};

export type CreatePetsStack0Mutation = {
  createPets_stack0:  {
    __typename: "Pets_stack0",
    id: string,
    formid: string | null,
    have_pet: number | null,
    type_pet: string | null,
  } | null,
};

export type UpdatePetsStack0MutationVariables = {
  updatePets_stack0Input: UpdatePets_stack0Input,
};

export type UpdatePetsStack0Mutation = {
  updatePets_stack0:  {
    __typename: "Pets_stack0",
    id: string,
    formid: string | null,
    have_pet: number | null,
    type_pet: string | null,
  } | null,
};

export type DeletePetsStack1MutationVariables = {
  id: string,
};

export type DeletePetsStack1Mutation = {
  deletePets_stack1:  {
    __typename: "Pets_stack1",
    id: string,
    formid: string | null,
    dont_like_animals: string | null,
    pet_knows_im_upset: string | null,
    i_love_pets: string | null,
    every_day_playing: string | null,
    talk_to_pet: string | null,
    understood_pet: string | null,
    lonely_without: string | null,
    pet_is_friend: string | null,
    pet_makes_me_happy: string | null,
  } | null,
};

export type CreatePetsStack1MutationVariables = {
  createPets_stack1Input: CreatePets_stack1Input,
};

export type CreatePetsStack1Mutation = {
  createPets_stack1:  {
    __typename: "Pets_stack1",
    id: string,
    formid: string | null,
    dont_like_animals: string | null,
    pet_knows_im_upset: string | null,
    i_love_pets: string | null,
    every_day_playing: string | null,
    talk_to_pet: string | null,
    understood_pet: string | null,
    lonely_without: string | null,
    pet_is_friend: string | null,
    pet_makes_me_happy: string | null,
  } | null,
};

export type UpdatePetsStack1MutationVariables = {
  updatePets_stack1Input: UpdatePets_stack1Input,
};

export type UpdatePetsStack1Mutation = {
  updatePets_stack1:  {
    __typename: "Pets_stack1",
    id: string,
    formid: string | null,
    dont_like_animals: string | null,
    pet_knows_im_upset: string | null,
    i_love_pets: string | null,
    every_day_playing: string | null,
    talk_to_pet: string | null,
    understood_pet: string | null,
    lonely_without: string | null,
    pet_is_friend: string | null,
    pet_makes_me_happy: string | null,
  } | null,
};

export type DeleteQualityOfLifeStack0MutationVariables = {
  id: string,
};

export type DeleteQualityOfLifeStack0Mutation = {
  deleteQuality_of_life_stack0:  {
    __typename: "Quality_of_life_stack0",
    id: string,
    formid: string | null,
    qol_general: string | null,
    health_general: string | null,
  } | null,
};

export type CreateQualityOfLifeStack0MutationVariables = {
  createQuality_of_life_stack0Input: CreateQuality_of_life_stack0Input,
};

export type CreateQualityOfLifeStack0Mutation = {
  createQuality_of_life_stack0:  {
    __typename: "Quality_of_life_stack0",
    id: string,
    formid: string | null,
    qol_general: string | null,
    health_general: string | null,
  } | null,
};

export type UpdateQualityOfLifeStack0MutationVariables = {
  updateQuality_of_life_stack0Input: UpdateQuality_of_life_stack0Input,
};

export type UpdateQualityOfLifeStack0Mutation = {
  updateQuality_of_life_stack0:  {
    __typename: "Quality_of_life_stack0",
    id: string,
    formid: string | null,
    qol_general: string | null,
    health_general: string | null,
  } | null,
};

export type DeleteQualityOfLifeStack1MutationVariables = {
  id: string,
};

export type DeleteQualityOfLifeStack1Mutation = {
  deleteQuality_of_life_stack1:  {
    __typename: "Quality_of_life_stack1",
    id: string,
    formid: string | null,
    health_compared: string | null,
    full_of_energy: string | null,
    alert_and_focused: string | null,
  } | null,
};

export type CreateQualityOfLifeStack1MutationVariables = {
  createQuality_of_life_stack1Input: CreateQuality_of_life_stack1Input,
};

export type CreateQualityOfLifeStack1Mutation = {
  createQuality_of_life_stack1:  {
    __typename: "Quality_of_life_stack1",
    id: string,
    formid: string | null,
    health_compared: string | null,
    full_of_energy: string | null,
    alert_and_focused: string | null,
  } | null,
};

export type UpdateQualityOfLifeStack1MutationVariables = {
  updateQuality_of_life_stack1Input: UpdateQuality_of_life_stack1Input,
};

export type UpdateQualityOfLifeStack1Mutation = {
  updateQuality_of_life_stack1:  {
    __typename: "Quality_of_life_stack1",
    id: string,
    formid: string | null,
    health_compared: string | null,
    full_of_energy: string | null,
    alert_and_focused: string | null,
  } | null,
};

export type DeleteQualityOfLifeStack2MutationVariables = {
  id: string,
};

export type DeleteQualityOfLifeStack2Mutation = {
  deleteQuality_of_life_stack2:  {
    __typename: "Quality_of_life_stack2",
    id: string,
    formid: string | null,
    stress: number | null,
    worry: number | null,
    happiness: number | null,
    anger: number | null,
    enjoyment: number | null,
    sadness: number | null,
  } | null,
};

export type CreateQualityOfLifeStack2MutationVariables = {
  createQuality_of_life_stack2Input: CreateQuality_of_life_stack2Input,
};

export type CreateQualityOfLifeStack2Mutation = {
  createQuality_of_life_stack2:  {
    __typename: "Quality_of_life_stack2",
    id: string,
    formid: string | null,
    stress: number | null,
    worry: number | null,
    happiness: number | null,
    anger: number | null,
    enjoyment: number | null,
    sadness: number | null,
  } | null,
};

export type UpdateQualityOfLifeStack2MutationVariables = {
  updateQuality_of_life_stack2Input: UpdateQuality_of_life_stack2Input,
};

export type UpdateQualityOfLifeStack2Mutation = {
  updateQuality_of_life_stack2:  {
    __typename: "Quality_of_life_stack2",
    id: string,
    formid: string | null,
    stress: number | null,
    worry: number | null,
    happiness: number | null,
    anger: number | null,
    enjoyment: number | null,
    sadness: number | null,
  } | null,
};

export type DeleteQualityOfLifeStack3MutationVariables = {
  id: string,
};

export type DeleteQualityOfLifeStack3Mutation = {
  deleteQuality_of_life_stack3:  {
    __typename: "Quality_of_life_stack3",
    id: string,
    formid: string | null,
    ladder: number | null,
  } | null,
};

export type CreateQualityOfLifeStack3MutationVariables = {
  createQuality_of_life_stack3Input: CreateQuality_of_life_stack3Input,
};

export type CreateQualityOfLifeStack3Mutation = {
  createQuality_of_life_stack3:  {
    __typename: "Quality_of_life_stack3",
    id: string,
    formid: string | null,
    ladder: number | null,
  } | null,
};

export type UpdateQualityOfLifeStack3MutationVariables = {
  updateQuality_of_life_stack3Input: UpdateQuality_of_life_stack3Input,
};

export type UpdateQualityOfLifeStack3Mutation = {
  updateQuality_of_life_stack3:  {
    __typename: "Quality_of_life_stack3",
    id: string,
    formid: string | null,
    ladder: number | null,
  } | null,
};

export type DeleteReligiousnessSpiritualityStack1MutationVariables = {
  id: string,
};

export type DeleteReligiousnessSpiritualityStack1Mutation = {
  deleteReligiousness_spirituality_stack1:  {
    __typename: "Religiousness_spirituality_stack1",
    id: string,
    formid: string | null,
    hard_times: string | null,
    tolerate_stress: string | null,
    comfort_reassurance: string | null,
    meaning_in_life: string | null,
    understand_others: string | null,
  } | null,
};

export type CreateReligiousnessSpiritualityStack1MutationVariables = {
  createReligiousness_spirituality_stack1Input: CreateReligiousness_spirituality_stack1Input,
};

export type CreateReligiousnessSpiritualityStack1Mutation = {
  createReligiousness_spirituality_stack1:  {
    __typename: "Religiousness_spirituality_stack1",
    id: string,
    formid: string | null,
    hard_times: string | null,
    tolerate_stress: string | null,
    comfort_reassurance: string | null,
    meaning_in_life: string | null,
    understand_others: string | null,
  } | null,
};

export type UpdateReligiousnessSpiritualityStack1MutationVariables = {
  updateReligiousness_spirituality_stack1Input: UpdateReligiousness_spirituality_stack1Input,
};

export type UpdateReligiousnessSpiritualityStack1Mutation = {
  updateReligiousness_spirituality_stack1:  {
    __typename: "Religiousness_spirituality_stack1",
    id: string,
    formid: string | null,
    hard_times: string | null,
    tolerate_stress: string | null,
    comfort_reassurance: string | null,
    meaning_in_life: string | null,
    understand_others: string | null,
  } | null,
};

export type DeleteReligiousnessSpiritualityStack2MutationVariables = {
  id: string,
};

export type DeleteReligiousnessSpiritualityStack2Mutation = {
  deleteReligiousness_spirituality_stack2:  {
    __typename: "Religiousness_spirituality_stack2",
    id: string,
    formid: string | null,
    meaning: string | null,
    purpose: string | null,
    here_for_reason: string | null,
    inner_spiritual_strength: string | null,
  } | null,
};

export type CreateReligiousnessSpiritualityStack2MutationVariables = {
  createReligiousness_spirituality_stack2Input: CreateReligiousness_spirituality_stack2Input,
};

export type CreateReligiousnessSpiritualityStack2Mutation = {
  createReligiousness_spirituality_stack2:  {
    __typename: "Religiousness_spirituality_stack2",
    id: string,
    formid: string | null,
    meaning: string | null,
    purpose: string | null,
    here_for_reason: string | null,
    inner_spiritual_strength: string | null,
  } | null,
};

export type UpdateReligiousnessSpiritualityStack2MutationVariables = {
  updateReligiousness_spirituality_stack2Input: UpdateReligiousness_spirituality_stack2Input,
};

export type UpdateReligiousnessSpiritualityStack2Mutation = {
  updateReligiousness_spirituality_stack2:  {
    __typename: "Religiousness_spirituality_stack2",
    id: string,
    formid: string | null,
    meaning: string | null,
    purpose: string | null,
    here_for_reason: string | null,
    inner_spiritual_strength: string | null,
  } | null,
};

export type DeleteReligiousnessSpiritualityStack3MutationVariables = {
  id: string,
};

export type DeleteReligiousnessSpiritualityStack3Mutation = {
  deleteReligiousness_spirituality_stack3:  {
    __typename: "Religiousness_spirituality_stack3",
    id: string,
    formid: string | null,
    well_being: string | null,
    comfort: string | null,
    strength: string | null,
  } | null,
};

export type CreateReligiousnessSpiritualityStack3MutationVariables = {
  createReligiousness_spirituality_stack3Input: CreateReligiousness_spirituality_stack3Input,
};

export type CreateReligiousnessSpiritualityStack3Mutation = {
  createReligiousness_spirituality_stack3:  {
    __typename: "Religiousness_spirituality_stack3",
    id: string,
    formid: string | null,
    well_being: string | null,
    comfort: string | null,
    strength: string | null,
  } | null,
};

export type UpdateReligiousnessSpiritualityStack3MutationVariables = {
  updateReligiousness_spirituality_stack3Input: UpdateReligiousness_spirituality_stack3Input,
};

export type UpdateReligiousnessSpiritualityStack3Mutation = {
  updateReligiousness_spirituality_stack3:  {
    __typename: "Religiousness_spirituality_stack3",
    id: string,
    formid: string | null,
    well_being: string | null,
    comfort: string | null,
    strength: string | null,
  } | null,
};

export type DeleteReligiousnessSpiritualityStack4MutationVariables = {
  id: string,
};

export type DeleteReligiousnessSpiritualityStack4Mutation = {
  deleteReligiousness_spirituality_stack4:  {
    __typename: "Religiousness_spirituality_stack4",
    id: string,
    formid: string | null,
    touched_beauty: string | null,
    inspiration_excitement: string | null,
    grateful: string | null,
    how_hopeful_feel: string | null,
    hopeful_about_life: string | null,
  } | null,
};

export type CreateReligiousnessSpiritualityStack4MutationVariables = {
  createReligiousness_spirituality_stack4Input: CreateReligiousness_spirituality_stack4Input,
};

export type CreateReligiousnessSpiritualityStack4Mutation = {
  createReligiousness_spirituality_stack4:  {
    __typename: "Religiousness_spirituality_stack4",
    id: string,
    formid: string | null,
    touched_beauty: string | null,
    inspiration_excitement: string | null,
    grateful: string | null,
    how_hopeful_feel: string | null,
    hopeful_about_life: string | null,
  } | null,
};

export type UpdateReligiousnessSpiritualityStack4MutationVariables = {
  updateReligiousness_spirituality_stack4Input: UpdateReligiousness_spirituality_stack4Input,
};

export type UpdateReligiousnessSpiritualityStack4Mutation = {
  updateReligiousness_spirituality_stack4:  {
    __typename: "Religiousness_spirituality_stack4",
    id: string,
    formid: string | null,
    touched_beauty: string | null,
    inspiration_excitement: string | null,
    grateful: string | null,
    how_hopeful_feel: string | null,
    hopeful_about_life: string | null,
  } | null,
};

export type DeleteReligiousnessSpiritualityStack5MutationVariables = {
  id: string,
};

export type DeleteReligiousnessSpiritualityStack5Mutation = {
  deleteReligiousness_spirituality_stack5:  {
    __typename: "Religiousness_spirituality_stack5",
    id: string,
    formid: string | null,
    experience_awe: string | null,
    consistent_what_you_think: string | null,
    spiritual_strength_live_better: string | null,
    coherence: string | null,
    connection_mbs: string | null,
  } | null,
};

export type CreateReligiousnessSpiritualityStack5MutationVariables = {
  createReligiousness_spirituality_stack5Input: CreateReligiousness_spirituality_stack5Input,
};

export type CreateReligiousnessSpiritualityStack5Mutation = {
  createReligiousness_spirituality_stack5:  {
    __typename: "Religiousness_spirituality_stack5",
    id: string,
    formid: string | null,
    experience_awe: string | null,
    consistent_what_you_think: string | null,
    spiritual_strength_live_better: string | null,
    coherence: string | null,
    connection_mbs: string | null,
  } | null,
};

export type UpdateReligiousnessSpiritualityStack5MutationVariables = {
  updateReligiousness_spirituality_stack5Input: UpdateReligiousness_spirituality_stack5Input,
};

export type UpdateReligiousnessSpiritualityStack5Mutation = {
  updateReligiousness_spirituality_stack5:  {
    __typename: "Religiousness_spirituality_stack5",
    id: string,
    formid: string | null,
    experience_awe: string | null,
    consistent_what_you_think: string | null,
    spiritual_strength_live_better: string | null,
    coherence: string | null,
    connection_mbs: string | null,
  } | null,
};

export type DeleteReligiousnessSpiritualityStack6MutationVariables = {
  id: string,
};

export type DeleteReligiousnessSpiritualityStack6Mutation = {
  deleteReligiousness_spirituality_stack6:  {
    __typename: "Religiousness_spirituality_stack6",
    id: string,
    formid: string | null,
    happy: string | null,
    inner_peace: string | null,
    harmony: string | null,
    peace_within_self: string | null,
    feel_peaceful: string | null,
  } | null,
};

export type CreateReligiousnessSpiritualityStack6MutationVariables = {
  createReligiousness_spirituality_stack6Input: CreateReligiousness_spirituality_stack6Input,
};

export type CreateReligiousnessSpiritualityStack6Mutation = {
  createReligiousness_spirituality_stack6:  {
    __typename: "Religiousness_spirituality_stack6",
    id: string,
    formid: string | null,
    happy: string | null,
    inner_peace: string | null,
    harmony: string | null,
    peace_within_self: string | null,
    feel_peaceful: string | null,
  } | null,
};

export type UpdateReligiousnessSpiritualityStack6MutationVariables = {
  updateReligiousness_spirituality_stack6Input: UpdateReligiousness_spirituality_stack6Input,
};

export type UpdateReligiousnessSpiritualityStack6Mutation = {
  updateReligiousness_spirituality_stack6:  {
    __typename: "Religiousness_spirituality_stack6",
    id: string,
    formid: string | null,
    happy: string | null,
    inner_peace: string | null,
    harmony: string | null,
    peace_within_self: string | null,
    feel_peaceful: string | null,
  } | null,
};

export type DeleteReligiousnessSpiritualityStack7MutationVariables = {
  id: string,
};

export type DeleteReligiousnessSpiritualityStack7Mutation = {
  deleteReligiousness_spirituality_stack7:  {
    __typename: "Religiousness_spirituality_stack7",
    id: string,
    formid: string | null,
    optimistic: string | null,
    remaiun_optimistic: string | null,
    enjoy_life: string | null,
  } | null,
};

export type CreateReligiousnessSpiritualityStack7MutationVariables = {
  createReligiousness_spirituality_stack7Input: CreateReligiousness_spirituality_stack7Input,
};

export type CreateReligiousnessSpiritualityStack7Mutation = {
  createReligiousness_spirituality_stack7:  {
    __typename: "Religiousness_spirituality_stack7",
    id: string,
    formid: string | null,
    optimistic: string | null,
    remaiun_optimistic: string | null,
    enjoy_life: string | null,
  } | null,
};

export type UpdateReligiousnessSpiritualityStack7MutationVariables = {
  updateReligiousness_spirituality_stack7Input: UpdateReligiousness_spirituality_stack7Input,
};

export type UpdateReligiousnessSpiritualityStack7Mutation = {
  updateReligiousness_spirituality_stack7:  {
    __typename: "Religiousness_spirituality_stack7",
    id: string,
    formid: string | null,
    optimistic: string | null,
    remaiun_optimistic: string | null,
    enjoy_life: string | null,
  } | null,
};

export type DeleteReligiousnessSpiritualityStack8MutationVariables = {
  id: string,
};

export type DeleteReligiousnessSpiritualityStack8Mutation = {
  deleteReligiousness_spirituality_stack8:  {
    __typename: "Religiousness_spirituality_stack8",
    id: string,
    formid: string | null,
    satisfied: string | null,
  } | null,
};

export type CreateReligiousnessSpiritualityStack8MutationVariables = {
  createReligiousness_spirituality_stack8Input: CreateReligiousness_spirituality_stack8Input,
};

export type CreateReligiousnessSpiritualityStack8Mutation = {
  createReligiousness_spirituality_stack8:  {
    __typename: "Religiousness_spirituality_stack8",
    id: string,
    formid: string | null,
    satisfied: string | null,
  } | null,
};

export type UpdateReligiousnessSpiritualityStack8MutationVariables = {
  updateReligiousness_spirituality_stack8Input: UpdateReligiousness_spirituality_stack8Input,
};

export type UpdateReligiousnessSpiritualityStack8Mutation = {
  updateReligiousness_spirituality_stack8:  {
    __typename: "Religiousness_spirituality_stack8",
    id: string,
    formid: string | null,
    satisfied: string | null,
  } | null,
};

export type DeleteSleepQualityStack0MutationVariables = {
  id: string,
};

export type DeleteSleepQualityStack0Mutation = {
  deleteSleep_quality_stack0:  {
    __typename: "Sleep_quality_stack0",
    id: string,
    formid: string | null,
    usual_bedtime: string | null,
    minutes_to_sleep: number | null,
    hours_actual_sleep: number | null,
    usual_wakeup_time: number | null,
  } | null,
};

export type CreateSleepQualityStack0MutationVariables = {
  createSleep_quality_stack0Input: CreateSleep_quality_stack0Input,
};

export type CreateSleepQualityStack0Mutation = {
  createSleep_quality_stack0:  {
    __typename: "Sleep_quality_stack0",
    id: string,
    formid: string | null,
    usual_bedtime: string | null,
    minutes_to_sleep: number | null,
    hours_actual_sleep: number | null,
    usual_wakeup_time: number | null,
  } | null,
};

export type UpdateSleepQualityStack0MutationVariables = {
  updateSleep_quality_stack0Input: UpdateSleep_quality_stack0Input,
};

export type UpdateSleepQualityStack0Mutation = {
  updateSleep_quality_stack0:  {
    __typename: "Sleep_quality_stack0",
    id: string,
    formid: string | null,
    usual_bedtime: string | null,
    minutes_to_sleep: number | null,
    hours_actual_sleep: number | null,
    usual_wakeup_time: number | null,
  } | null,
};

export type DeleteSleepQualityStack1MutationVariables = {
  id: string,
};

export type DeleteSleepQualityStack1Mutation = {
  deleteSleep_quality_stack1:  {
    __typename: "Sleep_quality_stack1",
    id: string,
    formid: string | null,
    cannot_sleep_thirty: string | null,
    cough: string | null,
    bad_dreams: string | null,
    too_hot: string | null,
    wake_up: string | null,
    use_bathroom: string | null,
    cannot_breathe: string | null,
  } | null,
};

export type CreateSleepQualityStack1MutationVariables = {
  createSleep_quality_stack1Input: CreateSleep_quality_stack1Input,
};

export type CreateSleepQualityStack1Mutation = {
  createSleep_quality_stack1:  {
    __typename: "Sleep_quality_stack1",
    id: string,
    formid: string | null,
    cannot_sleep_thirty: string | null,
    cough: string | null,
    bad_dreams: string | null,
    too_hot: string | null,
    wake_up: string | null,
    use_bathroom: string | null,
    cannot_breathe: string | null,
  } | null,
};

export type UpdateSleepQualityStack1MutationVariables = {
  updateSleep_quality_stack1Input: UpdateSleep_quality_stack1Input,
};

export type UpdateSleepQualityStack1Mutation = {
  updateSleep_quality_stack1:  {
    __typename: "Sleep_quality_stack1",
    id: string,
    formid: string | null,
    cannot_sleep_thirty: string | null,
    cough: string | null,
    bad_dreams: string | null,
    too_hot: string | null,
    wake_up: string | null,
    use_bathroom: string | null,
    cannot_breathe: string | null,
  } | null,
};

export type DeleteSleepQualityStack2MutationVariables = {
  id: string,
};

export type DeleteSleepQualityStack2Mutation = {
  deleteSleep_quality_stack2:  {
    __typename: "Sleep_quality_stack2",
    id: string,
    formid: string | null,
    too_cold: string | null,
    other_reason: string | null,
    bad_dreams: string | null,
    pain: string | null,
  } | null,
};

export type CreateSleepQualityStack2MutationVariables = {
  createSleep_quality_stack2Input: CreateSleep_quality_stack2Input,
};

export type CreateSleepQualityStack2Mutation = {
  createSleep_quality_stack2:  {
    __typename: "Sleep_quality_stack2",
    id: string,
    formid: string | null,
    too_cold: string | null,
    other_reason: string | null,
    bad_dreams: string | null,
    pain: string | null,
  } | null,
};

export type UpdateSleepQualityStack2MutationVariables = {
  updateSleep_quality_stack2Input: UpdateSleep_quality_stack2Input,
};

export type UpdateSleepQualityStack2Mutation = {
  updateSleep_quality_stack2:  {
    __typename: "Sleep_quality_stack2",
    id: string,
    formid: string | null,
    too_cold: string | null,
    other_reason: string | null,
    bad_dreams: string | null,
    pain: string | null,
  } | null,
};

export type DeleteSleepQualityStack3MutationVariables = {
  id: string,
};

export type DeleteSleepQualityStack3Mutation = {
  deleteSleep_quality_stack3:  {
    __typename: "Sleep_quality_stack3",
    id: string,
    formid: string | null,
    taken_medicine: string | null,
    problem: string | null,
    trouble_staying_awake: string | null,
  } | null,
};

export type CreateSleepQualityStack3MutationVariables = {
  createSleep_quality_stack3Input: CreateSleep_quality_stack3Input,
};

export type CreateSleepQualityStack3Mutation = {
  createSleep_quality_stack3:  {
    __typename: "Sleep_quality_stack3",
    id: string,
    formid: string | null,
    taken_medicine: string | null,
    problem: string | null,
    trouble_staying_awake: string | null,
  } | null,
};

export type UpdateSleepQualityStack3MutationVariables = {
  updateSleep_quality_stack3Input: UpdateSleep_quality_stack3Input,
};

export type UpdateSleepQualityStack3Mutation = {
  updateSleep_quality_stack3:  {
    __typename: "Sleep_quality_stack3",
    id: string,
    formid: string | null,
    taken_medicine: string | null,
    problem: string | null,
    trouble_staying_awake: string | null,
  } | null,
};

export type DeleteSleepQualityStack4MutationVariables = {
  id: string,
};

export type DeleteSleepQualityStack4Mutation = {
  deleteSleep_quality_stack4:  {
    __typename: "Sleep_quality_stack4",
    id: string,
    formid: string | null,
    sleep_quality_overall: string | null,
  } | null,
};

export type CreateSleepQualityStack4MutationVariables = {
  createSleep_quality_stack4Input: CreateSleep_quality_stack4Input,
};

export type CreateSleepQualityStack4Mutation = {
  createSleep_quality_stack4:  {
    __typename: "Sleep_quality_stack4",
    id: string,
    formid: string | null,
    sleep_quality_overall: string | null,
  } | null,
};

export type UpdateSleepQualityStack4MutationVariables = {
  updateSleep_quality_stack4Input: UpdateSleep_quality_stack4Input,
};

export type UpdateSleepQualityStack4Mutation = {
  updateSleep_quality_stack4:  {
    __typename: "Sleep_quality_stack4",
    id: string,
    formid: string | null,
    sleep_quality_overall: string | null,
  } | null,
};

export type DeleteSocialNetworkStack0MutationVariables = {
  id: string,
};

export type DeleteSocialNetworkStack0Mutation = {
  deleteSocial_network_stack0:  {
    __typename: "Social_network_stack0",
    id: string,
    formid: string | null,
    hours_month_socializing: number | null,
    different_friends: number | null,
    hours_week_socializing: number | null,
  } | null,
};

export type CreateSocialNetworkStack0MutationVariables = {
  createSocial_network_stack0Input: CreateSocial_network_stack0Input,
};

export type CreateSocialNetworkStack0Mutation = {
  createSocial_network_stack0:  {
    __typename: "Social_network_stack0",
    id: string,
    formid: string | null,
    hours_month_socializing: number | null,
    different_friends: number | null,
    hours_week_socializing: number | null,
  } | null,
};

export type UpdateSocialNetworkStack0MutationVariables = {
  updateSocial_network_stack0Input: UpdateSocial_network_stack0Input,
};

export type UpdateSocialNetworkStack0Mutation = {
  updateSocial_network_stack0:  {
    __typename: "Social_network_stack0",
    id: string,
    formid: string | null,
    hours_month_socializing: number | null,
    different_friends: number | null,
    hours_week_socializing: number | null,
  } | null,
};

export type DeleteSocialNetworkStack1MutationVariables = {
  id: string,
};

export type DeleteSocialNetworkStack1Mutation = {
  deleteSocial_network_stack1:  {
    __typename: "Social_network_stack1",
    id: string,
    formid: string | null,
    number_socialize: number | null,
  } | null,
};

export type CreateSocialNetworkStack1MutationVariables = {
  createSocial_network_stack1Input: CreateSocial_network_stack1Input,
};

export type CreateSocialNetworkStack1Mutation = {
  createSocial_network_stack1:  {
    __typename: "Social_network_stack1",
    id: string,
    formid: string | null,
    number_socialize: number | null,
  } | null,
};

export type UpdateSocialNetworkStack1MutationVariables = {
  updateSocial_network_stack1Input: UpdateSocial_network_stack1Input,
};

export type UpdateSocialNetworkStack1Mutation = {
  updateSocial_network_stack1:  {
    __typename: "Social_network_stack1",
    id: string,
    formid: string | null,
    number_socialize: number | null,
  } | null,
};

export type DeleteSocialNetworkStack2MutationVariables = {
  id: string,
};

export type DeleteSocialNetworkStack2Mutation = {
  deleteSocial_network_stack2:  {
    __typename: "Social_network_stack2",
    id: string,
    formid: string | null,
    rely_on_them: string | null,
    open_up_to_them: string | null,
    too_many_demands: string | null,
    argue: string | null,
  } | null,
};

export type CreateSocialNetworkStack2MutationVariables = {
  createSocial_network_stack2Input: CreateSocial_network_stack2Input,
};

export type CreateSocialNetworkStack2Mutation = {
  createSocial_network_stack2:  {
    __typename: "Social_network_stack2",
    id: string,
    formid: string | null,
    rely_on_them: string | null,
    open_up_to_them: string | null,
    too_many_demands: string | null,
    argue: string | null,
  } | null,
};

export type UpdateSocialNetworkStack2MutationVariables = {
  updateSocial_network_stack2Input: UpdateSocial_network_stack2Input,
};

export type UpdateSocialNetworkStack2Mutation = {
  updateSocial_network_stack2:  {
    __typename: "Social_network_stack2",
    id: string,
    formid: string | null,
    rely_on_them: string | null,
    open_up_to_them: string | null,
    too_many_demands: string | null,
    argue: string | null,
  } | null,
};

export type DeleteSocialNetworkStack3MutationVariables = {
  id: string,
};

export type DeleteSocialNetworkStack3Mutation = {
  deleteSocial_network_stack3:  {
    __typename: "Social_network_stack3",
    id: string,
    formid: string | null,
    easy_become_emotionally_close: number | null,
    want_to_be: number | null,
  } | null,
};

export type CreateSocialNetworkStack3MutationVariables = {
  createSocial_network_stack3Input: CreateSocial_network_stack3Input,
};

export type CreateSocialNetworkStack3Mutation = {
  createSocial_network_stack3:  {
    __typename: "Social_network_stack3",
    id: string,
    formid: string | null,
    easy_become_emotionally_close: number | null,
    want_to_be: number | null,
  } | null,
};

export type UpdateSocialNetworkStack3MutationVariables = {
  updateSocial_network_stack3Input: UpdateSocial_network_stack3Input,
};

export type UpdateSocialNetworkStack3Mutation = {
  updateSocial_network_stack3:  {
    __typename: "Social_network_stack3",
    id: string,
    formid: string | null,
    easy_become_emotionally_close: number | null,
    want_to_be: number | null,
  } | null,
};

export type DeleteSocialNetworkStack4MutationVariables = {
  id: string,
};

export type DeleteSocialNetworkStack4Mutation = {
  deleteSocial_network_stack4:  {
    __typename: "Social_network_stack4",
    id: string,
    formid: string | null,
    uncomfortable_getting_close: number | null,
    comfortable_without: number | null,
  } | null,
};

export type CreateSocialNetworkStack4MutationVariables = {
  createSocial_network_stack4Input: CreateSocial_network_stack4Input,
};

export type CreateSocialNetworkStack4Mutation = {
  createSocial_network_stack4:  {
    __typename: "Social_network_stack4",
    id: string,
    formid: string | null,
    uncomfortable_getting_close: number | null,
    comfortable_without: number | null,
  } | null,
};

export type UpdateSocialNetworkStack4MutationVariables = {
  updateSocial_network_stack4Input: UpdateSocial_network_stack4Input,
};

export type UpdateSocialNetworkStack4Mutation = {
  updateSocial_network_stack4:  {
    __typename: "Social_network_stack4",
    id: string,
    formid: string | null,
    uncomfortable_getting_close: number | null,
    comfortable_without: number | null,
  } | null,
};

export type DeleteSocialNetworkStack5MutationVariables = {
  id: string,
};

export type DeleteSocialNetworkStack5Mutation = {
  deleteSocial_network_stack5:  {
    __typename: "Social_network_stack5",
    id: string,
    formid: string | null,
    depend_on_you: string | null,
    important_to_them: string | null,
    interested: string | null,
    miss_you: string | null,
    pay_attention: string | null,
  } | null,
};

export type CreateSocialNetworkStack5MutationVariables = {
  createSocial_network_stack5Input: CreateSocial_network_stack5Input,
};

export type CreateSocialNetworkStack5Mutation = {
  createSocial_network_stack5:  {
    __typename: "Social_network_stack5",
    id: string,
    formid: string | null,
    depend_on_you: string | null,
    important_to_them: string | null,
    interested: string | null,
    miss_you: string | null,
    pay_attention: string | null,
  } | null,
};

export type UpdateSocialNetworkStack5MutationVariables = {
  updateSocial_network_stack5Input: UpdateSocial_network_stack5Input,
};

export type UpdateSocialNetworkStack5Mutation = {
  updateSocial_network_stack5:  {
    __typename: "Social_network_stack5",
    id: string,
    formid: string | null,
    depend_on_you: string | null,
    important_to_them: string | null,
    interested: string | null,
    miss_you: string | null,
    pay_attention: string | null,
  } | null,
};

export type DeleteStressfulLifeExperienceStack0MutationVariables = {
  id: string,
};

export type DeleteStressfulLifeExperienceStack0Mutation = {
  deleteStressful_life_experience_stack0:  {
    __typename: "Stressful_life_experience_stack0",
    id: string,
    formid: string | null,
    how_old_depression: number | null,
  } | null,
};

export type CreateStressfulLifeExperienceStack0MutationVariables = {
  createStressful_life_experience_stack0Input: CreateStressful_life_experience_stack0Input,
};

export type CreateStressfulLifeExperienceStack0Mutation = {
  createStressful_life_experience_stack0:  {
    __typename: "Stressful_life_experience_stack0",
    id: string,
    formid: string | null,
    how_old_depression: number | null,
  } | null,
};

export type UpdateStressfulLifeExperienceStack0MutationVariables = {
  updateStressful_life_experience_stack0Input: UpdateStressful_life_experience_stack0Input,
};

export type UpdateStressfulLifeExperienceStack0Mutation = {
  updateStressful_life_experience_stack0:  {
    __typename: "Stressful_life_experience_stack0",
    id: string,
    formid: string | null,
    how_old_depression: number | null,
  } | null,
};

export type DeleteStressfulLifeExperienceStack1MutationVariables = {
  id: string,
};

export type DeleteStressfulLifeExperienceStack1Mutation = {
  deleteStressful_life_experience_stack1:  {
    __typename: "Stressful_life_experience_stack1",
    id: string,
    formid: string | null,
    disturbing_memories: string | null,
    avoided_thinking: string | null,
    physical_reaction: string | null,
    avoided_activities: string | null,
    interfered_with_qol: string | null,
  } | null,
};

export type CreateStressfulLifeExperienceStack1MutationVariables = {
  createStressful_life_experience_stack1Input: CreateStressful_life_experience_stack1Input,
};

export type CreateStressfulLifeExperienceStack1Mutation = {
  createStressful_life_experience_stack1:  {
    __typename: "Stressful_life_experience_stack1",
    id: string,
    formid: string | null,
    disturbing_memories: string | null,
    avoided_thinking: string | null,
    physical_reaction: string | null,
    avoided_activities: string | null,
    interfered_with_qol: string | null,
  } | null,
};

export type UpdateStressfulLifeExperienceStack1MutationVariables = {
  updateStressful_life_experience_stack1Input: UpdateStressful_life_experience_stack1Input,
};

export type UpdateStressfulLifeExperienceStack1Mutation = {
  updateStressful_life_experience_stack1:  {
    __typename: "Stressful_life_experience_stack1",
    id: string,
    formid: string | null,
    disturbing_memories: string | null,
    avoided_thinking: string | null,
    physical_reaction: string | null,
    avoided_activities: string | null,
    interfered_with_qol: string | null,
  } | null,
};

export type DeleteStressfulLifeExperienceStack2MutationVariables = {
  id: string,
};

export type DeleteStressfulLifeExperienceStack2Mutation = {
  deleteStressful_life_experience_stack2:  {
    __typename: "Stressful_life_experience_stack2",
    id: string,
    formid: string | null,
    first_time: number | null,
    years: number | null,
    months: number | null,
    days: number | null,
  } | null,
};

export type CreateStressfulLifeExperienceStack2MutationVariables = {
  createStressful_life_experience_stack2Input: CreateStressful_life_experience_stack2Input,
};

export type CreateStressfulLifeExperienceStack2Mutation = {
  createStressful_life_experience_stack2:  {
    __typename: "Stressful_life_experience_stack2",
    id: string,
    formid: string | null,
    first_time: number | null,
    years: number | null,
    months: number | null,
    days: number | null,
  } | null,
};

export type UpdateStressfulLifeExperienceStack2MutationVariables = {
  updateStressful_life_experience_stack2Input: UpdateStressful_life_experience_stack2Input,
};

export type UpdateStressfulLifeExperienceStack2Mutation = {
  updateStressful_life_experience_stack2:  {
    __typename: "Stressful_life_experience_stack2",
    id: string,
    formid: string | null,
    first_time: number | null,
    years: number | null,
    months: number | null,
    days: number | null,
  } | null,
};

export type DeleteStressfulLifeExperienceStack3MutationVariables = {
  id: string,
};

export type DeleteStressfulLifeExperienceStack3Mutation = {
  deleteStressful_life_experience_stack3:  {
    __typename: "Stressful_life_experience_stack3",
    id: string,
    formid: string | null,
    life_threatening: number | null,
    any_other: number | null,
    motor_vehicle: number | null,
    serious_betrayal: number | null,
    death_close_friend: number | null,
    serious_legal: number | null,
    break_up: number | null,
  } | null,
};

export type CreateStressfulLifeExperienceStack3MutationVariables = {
  createStressful_life_experience_stack3Input: CreateStressful_life_experience_stack3Input,
};

export type CreateStressfulLifeExperienceStack3Mutation = {
  createStressful_life_experience_stack3:  {
    __typename: "Stressful_life_experience_stack3",
    id: string,
    formid: string | null,
    life_threatening: number | null,
    any_other: number | null,
    motor_vehicle: number | null,
    serious_betrayal: number | null,
    death_close_friend: number | null,
    serious_legal: number | null,
    break_up: number | null,
  } | null,
};

export type UpdateStressfulLifeExperienceStack3MutationVariables = {
  updateStressful_life_experience_stack3Input: UpdateStressful_life_experience_stack3Input,
};

export type UpdateStressfulLifeExperienceStack3Mutation = {
  updateStressful_life_experience_stack3:  {
    __typename: "Stressful_life_experience_stack3",
    id: string,
    formid: string | null,
    life_threatening: number | null,
    any_other: number | null,
    motor_vehicle: number | null,
    serious_betrayal: number | null,
    death_close_friend: number | null,
    serious_legal: number | null,
    break_up: number | null,
  } | null,
};

export type DeleteStressfulLifeExperienceStack4MutationVariables = {
  id: string,
};

export type DeleteStressfulLifeExperienceStack4Mutation = {
  deleteStressful_life_experience_stack4:  {
    __typename: "Stressful_life_experience_stack4",
    id: string,
    formid: string | null,
    other_stressful_event: string | null,
    love_life: string | null,
    career: string | null,
    friendship: string | null,
    other_loved_ones: string | null,
    health: string | null,
    relationship_family: string | null,
    health_loved_ones: string | null,
    life_overall: string | null,
  } | null,
};

export type CreateStressfulLifeExperienceStack4MutationVariables = {
  createStressful_life_experience_stack4Input: CreateStressful_life_experience_stack4Input,
};

export type CreateStressfulLifeExperienceStack4Mutation = {
  createStressful_life_experience_stack4:  {
    __typename: "Stressful_life_experience_stack4",
    id: string,
    formid: string | null,
    other_stressful_event: string | null,
    love_life: string | null,
    career: string | null,
    friendship: string | null,
    other_loved_ones: string | null,
    health: string | null,
    relationship_family: string | null,
    health_loved_ones: string | null,
    life_overall: string | null,
  } | null,
};

export type UpdateStressfulLifeExperienceStack4MutationVariables = {
  updateStressful_life_experience_stack4Input: UpdateStressful_life_experience_stack4Input,
};

export type UpdateStressfulLifeExperienceStack4Mutation = {
  updateStressful_life_experience_stack4:  {
    __typename: "Stressful_life_experience_stack4",
    id: string,
    formid: string | null,
    other_stressful_event: string | null,
    love_life: string | null,
    career: string | null,
    friendship: string | null,
    other_loved_ones: string | null,
    health: string | null,
    relationship_family: string | null,
    health_loved_ones: string | null,
    life_overall: string | null,
  } | null,
};

export type DeleteStressfulLifeExperienceStack5MutationVariables = {
  id: string,
};

export type DeleteStressfulLifeExperienceStack5Mutation = {
  deleteStressful_life_experience_stack5:  {
    __typename: "Stressful_life_experience_stack5",
    id: string,
    formid: string | null,
    keep_calm: string | null,
    get_along: string | null,
    manage_stress: string | null,
    sense_humor: string | null,
    new_approaches: string | null,
  } | null,
};

export type CreateStressfulLifeExperienceStack5MutationVariables = {
  createStressful_life_experience_stack5Input: CreateStressful_life_experience_stack5Input,
};

export type CreateStressfulLifeExperienceStack5Mutation = {
  createStressful_life_experience_stack5:  {
    __typename: "Stressful_life_experience_stack5",
    id: string,
    formid: string | null,
    keep_calm: string | null,
    get_along: string | null,
    manage_stress: string | null,
    sense_humor: string | null,
    new_approaches: string | null,
  } | null,
};

export type UpdateStressfulLifeExperienceStack5MutationVariables = {
  updateStressful_life_experience_stack5Input: UpdateStressful_life_experience_stack5Input,
};

export type UpdateStressfulLifeExperienceStack5Mutation = {
  updateStressful_life_experience_stack5:  {
    __typename: "Stressful_life_experience_stack5",
    id: string,
    formid: string | null,
    keep_calm: string | null,
    get_along: string | null,
    manage_stress: string | null,
    sense_humor: string | null,
    new_approaches: string | null,
  } | null,
};

export type DeleteStressfulLifeExperienceStack6MutationVariables = {
  id: string,
};

export type DeleteStressfulLifeExperienceStack6Mutation = {
  deleteStressful_life_experience_stack6:  {
    __typename: "Stressful_life_experience_stack6",
    id: string,
    formid: string | null,
    promotion: number | null,
    health_major: number | null,
    finances: number | null,
    love_life: number | null,
    other_positive: number | null,
  } | null,
};

export type CreateStressfulLifeExperienceStack6MutationVariables = {
  createStressful_life_experience_stack6Input: CreateStressful_life_experience_stack6Input,
};

export type CreateStressfulLifeExperienceStack6Mutation = {
  createStressful_life_experience_stack6:  {
    __typename: "Stressful_life_experience_stack6",
    id: string,
    formid: string | null,
    promotion: number | null,
    health_major: number | null,
    finances: number | null,
    love_life: number | null,
    other_positive: number | null,
  } | null,
};

export type UpdateStressfulLifeExperienceStack6MutationVariables = {
  updateStressful_life_experience_stack6Input: UpdateStressful_life_experience_stack6Input,
};

export type UpdateStressfulLifeExperienceStack6Mutation = {
  updateStressful_life_experience_stack6:  {
    __typename: "Stressful_life_experience_stack6",
    id: string,
    formid: string | null,
    promotion: number | null,
    health_major: number | null,
    finances: number | null,
    love_life: number | null,
    other_positive: number | null,
  } | null,
};

export type DeleteYourHealthStack0MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack0Mutation = {
  deleteYour_health_stack0:  {
    __typename: "Your_health_stack0",
    id: string,
    formid: string | null,
    feet_height: string | null,
    weight: number | null,
  } | null,
};

export type CreateYourHealthStack0MutationVariables = {
  createYour_health_stack0Input: CreateYour_health_stack0Input,
};

export type CreateYourHealthStack0Mutation = {
  createYour_health_stack0:  {
    __typename: "Your_health_stack0",
    id: string,
    formid: string | null,
    feet_height: string | null,
    weight: number | null,
  } | null,
};

export type UpdateYourHealthStack0MutationVariables = {
  updateYour_health_stack0Input: UpdateYour_health_stack0Input,
};

export type UpdateYourHealthStack0Mutation = {
  updateYour_health_stack0:  {
    __typename: "Your_health_stack0",
    id: string,
    formid: string | null,
    feet_height: string | null,
    weight: number | null,
  } | null,
};

export type DeleteYourHealthStack1MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack1Mutation = {
  deleteYour_health_stack1:  {
    __typename: "Your_health_stack1",
    id: string,
    formid: string | null,
    clotting: number | null,
    high_blood_pressure: number | null,
    heart_attack: number | null,
    high_cholesterol: number | null,
    any_other_cvd: number | null,
    asthma: number | null,
    copd: number | null,
    seasonal_allergies: number | null,
    osteoarthritis: number | null,
    rheumatoid_arthritis: number | null,
    osteoporosis: number | null,
    add_adhd: number | null,
    depression: number | null,
    manic_disorder: number | null,
    panic_disorder: number | null,
    ptsd: number | null,
    substance_abuse: number | null,
    any_other_psych: number | null,
    skin_cancer: number | null,
    any_other_cancer: number | null,
  } | null,
};

export type CreateYourHealthStack1MutationVariables = {
  createYour_health_stack1Input: CreateYour_health_stack1Input,
};

export type CreateYourHealthStack1Mutation = {
  createYour_health_stack1:  {
    __typename: "Your_health_stack1",
    id: string,
    formid: string | null,
    clotting: number | null,
    high_blood_pressure: number | null,
    heart_attack: number | null,
    high_cholesterol: number | null,
    any_other_cvd: number | null,
    asthma: number | null,
    copd: number | null,
    seasonal_allergies: number | null,
    osteoarthritis: number | null,
    rheumatoid_arthritis: number | null,
    osteoporosis: number | null,
    add_adhd: number | null,
    depression: number | null,
    manic_disorder: number | null,
    panic_disorder: number | null,
    ptsd: number | null,
    substance_abuse: number | null,
    any_other_psych: number | null,
    skin_cancer: number | null,
    any_other_cancer: number | null,
  } | null,
};

export type UpdateYourHealthStack1MutationVariables = {
  updateYour_health_stack1Input: UpdateYour_health_stack1Input,
};

export type UpdateYourHealthStack1Mutation = {
  updateYour_health_stack1:  {
    __typename: "Your_health_stack1",
    id: string,
    formid: string | null,
    clotting: number | null,
    high_blood_pressure: number | null,
    heart_attack: number | null,
    high_cholesterol: number | null,
    any_other_cvd: number | null,
    asthma: number | null,
    copd: number | null,
    seasonal_allergies: number | null,
    osteoarthritis: number | null,
    rheumatoid_arthritis: number | null,
    osteoporosis: number | null,
    add_adhd: number | null,
    depression: number | null,
    manic_disorder: number | null,
    panic_disorder: number | null,
    ptsd: number | null,
    substance_abuse: number | null,
    any_other_psych: number | null,
    skin_cancer: number | null,
    any_other_cancer: number | null,
  } | null,
};

export type DeleteYourHealthStack2MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack2Mutation = {
  deleteYour_health_stack2:  {
    __typename: "Your_health_stack2",
    id: string,
    formid: string | null,
    autoimmune_disorder: number | null,
    inflammatory_skin_disorder: number | null,
    diabetes_insulin_dependant: number | null,
    diabetes_non_insulin_dependant: number | null,
    migraine: number | null,
    ulcer_stomach: number | null,
    acid_reflux: number | null,
    thyroid_disorder: number | null,
    chronic_pain: number | null,
    none: number | null,
  } | null,
};

export type CreateYourHealthStack2MutationVariables = {
  createYour_health_stack2Input: CreateYour_health_stack2Input,
};

export type CreateYourHealthStack2Mutation = {
  createYour_health_stack2:  {
    __typename: "Your_health_stack2",
    id: string,
    formid: string | null,
    autoimmune_disorder: number | null,
    inflammatory_skin_disorder: number | null,
    diabetes_insulin_dependant: number | null,
    diabetes_non_insulin_dependant: number | null,
    migraine: number | null,
    ulcer_stomach: number | null,
    acid_reflux: number | null,
    thyroid_disorder: number | null,
    chronic_pain: number | null,
    none: number | null,
  } | null,
};

export type UpdateYourHealthStack2MutationVariables = {
  updateYour_health_stack2Input: UpdateYour_health_stack2Input,
};

export type UpdateYourHealthStack2Mutation = {
  updateYour_health_stack2:  {
    __typename: "Your_health_stack2",
    id: string,
    formid: string | null,
    autoimmune_disorder: number | null,
    inflammatory_skin_disorder: number | null,
    diabetes_insulin_dependant: number | null,
    diabetes_non_insulin_dependant: number | null,
    migraine: number | null,
    ulcer_stomach: number | null,
    acid_reflux: number | null,
    thyroid_disorder: number | null,
    chronic_pain: number | null,
    none: number | null,
  } | null,
};

export type DeleteYourHealthStack3MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack3Mutation = {
  deleteYour_health_stack3:  {
    __typename: "Your_health_stack3",
    id: string,
    formid: string | null,
    dizziness: string | null,
    shortness_of_breath: string | null,
    heart_pound: string | null,
    restless_tense: string | null,
    anxious_nervous: string | null,
    irritable_annoyed: string | null,
  } | null,
};

export type CreateYourHealthStack3MutationVariables = {
  createYour_health_stack3Input: CreateYour_health_stack3Input,
};

export type CreateYourHealthStack3Mutation = {
  createYour_health_stack3:  {
    __typename: "Your_health_stack3",
    id: string,
    formid: string | null,
    dizziness: string | null,
    shortness_of_breath: string | null,
    heart_pound: string | null,
    restless_tense: string | null,
    anxious_nervous: string | null,
    irritable_annoyed: string | null,
  } | null,
};

export type UpdateYourHealthStack3MutationVariables = {
  updateYour_health_stack3Input: UpdateYour_health_stack3Input,
};

export type UpdateYourHealthStack3Mutation = {
  updateYour_health_stack3:  {
    __typename: "Your_health_stack3",
    id: string,
    formid: string | null,
    dizziness: string | null,
    shortness_of_breath: string | null,
    heart_pound: string | null,
    restless_tense: string | null,
    anxious_nervous: string | null,
    irritable_annoyed: string | null,
  } | null,
};

export type DeleteYourHealthStack4MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack4Mutation = {
  deleteYour_health_stack4:  {
    __typename: "Your_health_stack4",
    id: string,
    formid: string | null,
    memory: string | null,
    talking_slow: string | null,
    heart_pound: string | null,
    difficulty_concentrating: string | null,
    sleeping_problems: string | null,
    constipation: string | null,
    nausea: string | null,
  } | null,
};

export type CreateYourHealthStack4MutationVariables = {
  createYour_health_stack4Input: CreateYour_health_stack4Input,
};

export type CreateYourHealthStack4Mutation = {
  createYour_health_stack4:  {
    __typename: "Your_health_stack4",
    id: string,
    formid: string | null,
    memory: string | null,
    talking_slow: string | null,
    heart_pound: string | null,
    difficulty_concentrating: string | null,
    sleeping_problems: string | null,
    constipation: string | null,
    nausea: string | null,
  } | null,
};

export type UpdateYourHealthStack4MutationVariables = {
  updateYour_health_stack4Input: UpdateYour_health_stack4Input,
};

export type UpdateYourHealthStack4Mutation = {
  updateYour_health_stack4:  {
    __typename: "Your_health_stack4",
    id: string,
    formid: string | null,
    memory: string | null,
    talking_slow: string | null,
    heart_pound: string | null,
    difficulty_concentrating: string | null,
    sleeping_problems: string | null,
    constipation: string | null,
    nausea: string | null,
  } | null,
};

export type DeleteYourHealthStack5MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack5Mutation = {
  deleteYour_health_stack5:  {
    __typename: "Your_health_stack5",
    id: string,
    formid: string | null,
    back_pain: string | null,
    neck_pain: string | null,
    stomach_pain: string | null,
    chest_pain: string | null,
    headache: string | null,
    uncontrollable_anxiety: string | null,
  } | null,
};

export type CreateYourHealthStack5MutationVariables = {
  createYour_health_stack5Input: CreateYour_health_stack5Input,
};

export type CreateYourHealthStack5Mutation = {
  createYour_health_stack5:  {
    __typename: "Your_health_stack5",
    id: string,
    formid: string | null,
    back_pain: string | null,
    neck_pain: string | null,
    stomach_pain: string | null,
    chest_pain: string | null,
    headache: string | null,
    uncontrollable_anxiety: string | null,
  } | null,
};

export type UpdateYourHealthStack5MutationVariables = {
  updateYour_health_stack5Input: UpdateYour_health_stack5Input,
};

export type UpdateYourHealthStack5Mutation = {
  updateYour_health_stack5:  {
    __typename: "Your_health_stack5",
    id: string,
    formid: string | null,
    back_pain: string | null,
    neck_pain: string | null,
    stomach_pain: string | null,
    chest_pain: string | null,
    headache: string | null,
    uncontrollable_anxiety: string | null,
  } | null,
};

export type DeleteYourHealthStack6MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack6Mutation = {
  deleteYour_health_stack6:  {
    __typename: "Your_health_stack6",
    id: string,
    formid: string | null,
    how_long_sleep_problems: string | null,
    hours_sleep: number | null,
    energy_scale: number | null,
  } | null,
};

export type CreateYourHealthStack6MutationVariables = {
  createYour_health_stack6Input: CreateYour_health_stack6Input,
};

export type CreateYourHealthStack6Mutation = {
  createYour_health_stack6:  {
    __typename: "Your_health_stack6",
    id: string,
    formid: string | null,
    how_long_sleep_problems: string | null,
    hours_sleep: number | null,
    energy_scale: number | null,
  } | null,
};

export type UpdateYourHealthStack6MutationVariables = {
  updateYour_health_stack6Input: UpdateYour_health_stack6Input,
};

export type UpdateYourHealthStack6Mutation = {
  updateYour_health_stack6:  {
    __typename: "Your_health_stack6",
    id: string,
    formid: string | null,
    how_long_sleep_problems: string | null,
    hours_sleep: number | null,
    energy_scale: number | null,
  } | null,
};

export type DeleteYourHealthStack7MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack7Mutation = {
  deleteYour_health_stack7:  {
    __typename: "Your_health_stack7",
    id: string,
    formid: string | null,
    how_long_headaches: string | null,
    how_long_pain: string | null,
    pain_scale: number | null,
  } | null,
};

export type CreateYourHealthStack7MutationVariables = {
  createYour_health_stack7Input: CreateYour_health_stack7Input,
};

export type CreateYourHealthStack7Mutation = {
  createYour_health_stack7:  {
    __typename: "Your_health_stack7",
    id: string,
    formid: string | null,
    how_long_headaches: string | null,
    how_long_pain: string | null,
    pain_scale: number | null,
  } | null,
};

export type UpdateYourHealthStack7MutationVariables = {
  updateYour_health_stack7Input: UpdateYour_health_stack7Input,
};

export type UpdateYourHealthStack7Mutation = {
  updateYour_health_stack7:  {
    __typename: "Your_health_stack7",
    id: string,
    formid: string | null,
    how_long_headaches: string | null,
    how_long_pain: string | null,
    pain_scale: number | null,
  } | null,
};

export type DeleteYourHealthStack8MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack8Mutation = {
  deleteYour_health_stack8:  {
    __typename: "Your_health_stack8",
    id: string,
    formid: string | null,
    home_management: number | null,
    ability_work: number | null,
    close_relationships: number | null,
    social: number | null,
    quality_of_work: number | null,
  } | null,
};

export type CreateYourHealthStack8MutationVariables = {
  createYour_health_stack8Input: CreateYour_health_stack8Input,
};

export type CreateYourHealthStack8Mutation = {
  createYour_health_stack8:  {
    __typename: "Your_health_stack8",
    id: string,
    formid: string | null,
    home_management: number | null,
    ability_work: number | null,
    close_relationships: number | null,
    social: number | null,
    quality_of_work: number | null,
  } | null,
};

export type UpdateYourHealthStack8MutationVariables = {
  updateYour_health_stack8Input: UpdateYour_health_stack8Input,
};

export type UpdateYourHealthStack8Mutation = {
  updateYour_health_stack8:  {
    __typename: "Your_health_stack8",
    id: string,
    formid: string | null,
    home_management: number | null,
    ability_work: number | null,
    close_relationships: number | null,
    social: number | null,
    quality_of_work: number | null,
  } | null,
};

export type DeleteYourHealthStack9MutationVariables = {
  id: string,
};

export type DeleteYourHealthStack9Mutation = {
  deleteYour_health_stack9:  {
    __typename: "Your_health_stack9",
    id: string,
    formid: string | null,
    unable_to_work: number | null,
    cut_back_work: number | null,
  } | null,
};

export type CreateYourHealthStack9MutationVariables = {
  createYour_health_stack9Input: CreateYour_health_stack9Input,
};

export type CreateYourHealthStack9Mutation = {
  createYour_health_stack9:  {
    __typename: "Your_health_stack9",
    id: string,
    formid: string | null,
    unable_to_work: number | null,
    cut_back_work: number | null,
  } | null,
};

export type UpdateYourHealthStack9MutationVariables = {
  updateYour_health_stack9Input: UpdateYour_health_stack9Input,
};

export type UpdateYourHealthStack9Mutation = {
  updateYour_health_stack9:  {
    __typename: "Your_health_stack9",
    id: string,
    formid: string | null,
    unable_to_work: number | null,
    cut_back_work: number | null,
  } | null,
};

export type DeleteYourPersonalityStack0MutationVariables = {
  id: string,
};

export type DeleteYourPersonalityStack0Mutation = {
  deleteYour_personality_stack0:  {
    __typename: "Your_personality_stack0",
    id: string,
    formid: string | null,
    reserved: string | null,
    broad_minded: string | null,
    helpful: string | null,
    outgoing: string | null,
    moody: string | null,
    critical: string | null,
    adventerous: string | null,
  } | null,
};

export type CreateYourPersonalityStack0MutationVariables = {
  createYour_personality_stack0Input: CreateYour_personality_stack0Input,
};

export type CreateYourPersonalityStack0Mutation = {
  createYour_personality_stack0:  {
    __typename: "Your_personality_stack0",
    id: string,
    formid: string | null,
    reserved: string | null,
    broad_minded: string | null,
    helpful: string | null,
    outgoing: string | null,
    moody: string | null,
    critical: string | null,
    adventerous: string | null,
  } | null,
};

export type UpdateYourPersonalityStack0MutationVariables = {
  updateYour_personality_stack0Input: UpdateYour_personality_stack0Input,
};

export type UpdateYourPersonalityStack0Mutation = {
  updateYour_personality_stack0:  {
    __typename: "Your_personality_stack0",
    id: string,
    formid: string | null,
    reserved: string | null,
    broad_minded: string | null,
    helpful: string | null,
    outgoing: string | null,
    moody: string | null,
    critical: string | null,
    adventerous: string | null,
  } | null,
};

export type DeleteYourPersonalityStack1MutationVariables = {
  id: string,
};

export type DeleteYourPersonalityStack1Mutation = {
  deleteYour_personality_stack1:  {
    __typename: "Your_personality_stack1",
    id: string,
    formid: string | null,
    soft_hearted: string | null,
    calm: string | null,
    creative: string | null,
    outgsensitive: string | null,
    organized: string | null,
    friendly: string | null,
  } | null,
};

export type CreateYourPersonalityStack1MutationVariables = {
  createYour_personality_stack1Input: CreateYour_personality_stack1Input,
};

export type CreateYourPersonalityStack1Mutation = {
  createYour_personality_stack1:  {
    __typename: "Your_personality_stack1",
    id: string,
    formid: string | null,
    soft_hearted: string | null,
    calm: string | null,
    creative: string | null,
    outgsensitive: string | null,
    organized: string | null,
    friendly: string | null,
  } | null,
};

export type UpdateYourPersonalityStack1MutationVariables = {
  updateYour_personality_stack1Input: UpdateYour_personality_stack1Input,
};

export type UpdateYourPersonalityStack1Mutation = {
  updateYour_personality_stack1:  {
    __typename: "Your_personality_stack1",
    id: string,
    formid: string | null,
    soft_hearted: string | null,
    calm: string | null,
    creative: string | null,
    outgsensitive: string | null,
    organized: string | null,
    friendly: string | null,
  } | null,
};

export type DeleteYourPersonalityStack2MutationVariables = {
  id: string,
};

export type DeleteYourPersonalityStack2Mutation = {
  deleteYour_personality_stack2:  {
    __typename: "Your_personality_stack2",
    id: string,
    formid: string | null,
    careless: string | null,
    talkative: string | null,
    uncompassionate: string | null,
    easily_upset: string | null,
    sympathetic: string | null,
    curious: string | null,
  } | null,
};

export type CreateYourPersonalityStack2MutationVariables = {
  createYour_personality_stack2Input: CreateYour_personality_stack2Input,
};

export type CreateYourPersonalityStack2Mutation = {
  createYour_personality_stack2:  {
    __typename: "Your_personality_stack2",
    id: string,
    formid: string | null,
    careless: string | null,
    talkative: string | null,
    uncompassionate: string | null,
    easily_upset: string | null,
    sympathetic: string | null,
    curious: string | null,
  } | null,
};

export type UpdateYourPersonalityStack2MutationVariables = {
  updateYour_personality_stack2Input: UpdateYour_personality_stack2Input,
};

export type UpdateYourPersonalityStack2Mutation = {
  updateYour_personality_stack2:  {
    __typename: "Your_personality_stack2",
    id: string,
    formid: string | null,
    careless: string | null,
    talkative: string | null,
    uncompassionate: string | null,
    easily_upset: string | null,
    sympathetic: string | null,
    curious: string | null,
  } | null,
};

export type DeleteYourPersonalityStack3MutationVariables = {
  id: string,
};

export type DeleteYourPersonalityStack3Mutation = {
  deleteYour_personality_stack3:  {
    __typename: "Your_personality_stack3",
    id: string,
    formid: string | null,
    interests: string | null,
    direction: string | null,
    opinions: string | null,
    think_a_lot: string | null,
    do_a_lot: string | null,
  } | null,
};

export type CreateYourPersonalityStack3MutationVariables = {
  createYour_personality_stack3Input: CreateYour_personality_stack3Input,
};

export type CreateYourPersonalityStack3Mutation = {
  createYour_personality_stack3:  {
    __typename: "Your_personality_stack3",
    id: string,
    formid: string | null,
    interests: string | null,
    direction: string | null,
    opinions: string | null,
    think_a_lot: string | null,
    do_a_lot: string | null,
  } | null,
};

export type UpdateYourPersonalityStack3MutationVariables = {
  updateYour_personality_stack3Input: UpdateYour_personality_stack3Input,
};

export type UpdateYourPersonalityStack3Mutation = {
  updateYour_personality_stack3:  {
    __typename: "Your_personality_stack3",
    id: string,
    formid: string | null,
    interests: string | null,
    direction: string | null,
    opinions: string | null,
    think_a_lot: string | null,
    do_a_lot: string | null,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
    percentage: number,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
    percentage: number,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
    percentage: number,
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
      inputConfirmation: string,
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
      percentage: number,
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
      inputConfirmation: string,
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
      percentage: number,
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
      inputConfirmation: string,
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
      percentage: number,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
          inputConfirmation: string,
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
          inputConfirmation: string,
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
    inputConfirmation: string,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
          inputConfirmation: string,
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
          inputConfirmation: string,
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
    inputConfirmation: string,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
          inputConfirmation: string,
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
          inputConfirmation: string,
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
    inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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

export type GetDemographicsStack0QueryVariables = {
  id: string,
};

export type GetDemographicsStack0Query = {
  getDemographics_stack0:  {
    __typename: "Demographics_stack0",
    id: string,
    form_id: string | null,
    born_in_US: number | null,
    what_state_or_territory: string | null,
    how_many_years_in_florida: string | null,
  } | null,
};

export type ListDemographicsStack0sQuery = {
  listDemographics_stack0s:  Array< {
    __typename: "Demographics_stack0",
    id: string,
    form_id: string | null,
    born_in_US: number | null,
    what_state_or_territory: string | null,
    how_many_years_in_florida: string | null,
  } | null > | null,
};

export type GetDemographicsStack1QueryVariables = {
  id: string,
};

export type GetDemographicsStack1Query = {
  getDemographics_stack1:  {
    __typename: "Demographics_stack1",
    are_you_spanish_latino: number | null,
    select_all_that_apply: string | null,
    id: string,
    formid: string | null,
    what_is_your_race: string | null,
  } | null,
};

export type ListDemographicsStack1sQuery = {
  listDemographics_stack1s:  Array< {
    __typename: "Demographics_stack1",
    are_you_spanish_latino: number | null,
    select_all_that_apply: string | null,
    id: string,
    formid: string | null,
    what_is_your_race: string | null,
  } | null > | null,
};

export type GetDemographicsStack2QueryVariables = {
  id: string,
};

export type GetDemographicsStack2Query = {
  getDemographics_stack2:  {
    __typename: "Demographics_stack2",
    id: string,
    formid: string | null,
    highest_level_education: string | null,
  } | null,
};

export type ListDemographicsStack2sQuery = {
  listDemographics_stack2s:  Array< {
    __typename: "Demographics_stack2",
    id: string,
    formid: string | null,
    highest_level_education: string | null,
  } | null > | null,
};

export type GetDemographicsStack3QueryVariables = {
  id: string,
};

export type GetDemographicsStack3Query = {
  getDemographics_stack3:  {
    __typename: "Demographics_stack3",
    id: string,
    formid: string | null,
    marital_status: string | null,
    living_marriage_like: number | null,
  } | null,
};

export type ListDemographicsStack3sQuery = {
  listDemographics_stack3s:  Array< {
    __typename: "Demographics_stack3",
    id: string,
    formid: string | null,
    marital_status: string | null,
    living_marriage_like: number | null,
  } | null > | null,
};

export type GetDemographicsStack4QueryVariables = {
  id: string,
};

export type GetDemographicsStack4Query = {
  getDemographics_stack4:  {
    __typename: "Demographics_stack4",
    id: string,
    formid: string | null,
    bio_children: number | null,
    step_children: number | null,
    children_0_to_17: number | null,
  } | null,
};

export type ListDemographicsStack4sQuery = {
  listDemographics_stack4s:  Array< {
    __typename: "Demographics_stack4",
    id: string,
    formid: string | null,
    bio_children: number | null,
    step_children: number | null,
    children_0_to_17: number | null,
  } | null > | null,
};

export type GetDemographicsStack5QueryVariables = {
  id: string,
};

export type GetDemographicsStack5Query = {
  getDemographics_stack5:  {
    __typename: "Demographics_stack5",
    id: string,
    formid: string | null,
    gender: string | null,
    currently_pregnant: number | null,
  } | null,
};

export type ListDemographicsStack5sQuery = {
  listDemographics_stack5s:  Array< {
    __typename: "Demographics_stack5",
    id: string,
    formid: string | null,
    gender: string | null,
    currently_pregnant: number | null,
  } | null > | null,
};

export type GetEmploymentStack0QueryVariables = {
  id: string,
};

export type GetEmploymentStack0Query = {
  getEmployment_stack0:  {
    __typename: "Employment_stack0",
    id: string,
    formid: string | null,
    emp_status: string | null,
    type_work: string | null,
    commute_work: number | null,
    commute_int: number | null,
  } | null,
};

export type ListEmploymentStack0sQuery = {
  listEmployment_stack0s:  Array< {
    __typename: "Employment_stack0",
    id: string,
    formid: string | null,
    emp_status: string | null,
    type_work: string | null,
    commute_work: number | null,
    commute_int: number | null,
  } | null > | null,
};

export type GetEmploymentStack1QueryVariables = {
  id: string,
};

export type GetEmploymentStack1Query = {
  getEmployment_stack1:  {
    __typename: "Employment_stack1",
    id: string,
    formid: string | null,
    hours_work_week: number | null,
    hours_typical: string | null,
    hours_per_day: string | null,
  } | null,
};

export type ListEmploymentStack1sQuery = {
  listEmployment_stack1s:  Array< {
    __typename: "Employment_stack1",
    id: string,
    formid: string | null,
    hours_work_week: number | null,
    hours_typical: string | null,
    hours_per_day: string | null,
  } | null > | null,
};

export type GetEmploymentStack2QueryVariables = {
  id: string,
};

export type GetEmploymentStack2Query = {
  getEmployment_stack2:  {
    __typename: "Employment_stack2",
    id: string,
    formid: string | null,
    people_under_supervision: number | null,
    weeks_missed_work: number | null,
    hours_week_missed: number | null,
  } | null,
};

export type ListEmploymentStack2sQuery = {
  listEmployment_stack2s:  Array< {
    __typename: "Employment_stack2",
    id: string,
    formid: string | null,
    people_under_supervision: number | null,
    weeks_missed_work: number | null,
    hours_week_missed: number | null,
  } | null > | null,
};

export type GetEmploymentStack3QueryVariables = {
  id: string,
};

export type GetEmploymentStack3Query = {
  getEmployment_stack3:  {
    __typename: "Employment_stack3",
    id: string,
    formid: string | null,
    hours_worked: number | null,
    health_suffered: number | null,
  } | null,
};

export type ListEmploymentStack3sQuery = {
  listEmployment_stack3s:  Array< {
    __typename: "Employment_stack3",
    id: string,
    formid: string | null,
    hours_worked: number | null,
    health_suffered: number | null,
  } | null > | null,
};

export type GetHealthBehavior2Stack0QueryVariables = {
  id: string,
};

export type GetHealthBehavior2Stack0Query = {
  getHealth_behavior2_stack0:  {
    __typename: "Health_behavior2_stack0",
    id: string,
    formid: string | null,
    days_tobacco: string | null,
    days_nicotine: number | null,
    days_nicotine2: string | null,
    how_many_tobacco: number | null,
  } | null,
};

export type ListHealthBehavior2Stack0sQuery = {
  listHealth_behavior2_stack0s:  Array< {
    __typename: "Health_behavior2_stack0",
    id: string,
    formid: string | null,
    days_tobacco: string | null,
    days_nicotine: number | null,
    days_nicotine2: string | null,
    how_many_tobacco: number | null,
  } | null > | null,
};

export type GetHealthBehavior2Stack1QueryVariables = {
  id: string,
};

export type GetHealthBehavior2Stack1Query = {
  getHealth_behavior2_stack1:  {
    __typename: "Health_behavior2_stack1",
    id: string,
    formid: string | null,
    days_week_alcohol: string | null,
    how_many_drinks: number | null,
    skin_in_sun: string | null,
  } | null,
};

export type ListHealthBehavior2Stack1sQuery = {
  listHealth_behavior2_stack1s:  Array< {
    __typename: "Health_behavior2_stack1",
    id: string,
    formid: string | null,
    days_week_alcohol: string | null,
    how_many_drinks: number | null,
    skin_in_sun: string | null,
  } | null > | null,
};

export type GetHealthBehavior2Stack2QueryVariables = {
  id: string,
};

export type GetHealthBehavior2Stack2Query = {
  getHealth_behavior2_stack2:  {
    __typename: "Health_behavior2_stack2",
    id: string,
    formid: string | null,
    avoid_sun: string | null,
    sunscreen_spf15: string | null,
    protective_clothing: string | null,
  } | null,
};

export type ListHealthBehavior2Stack2sQuery = {
  listHealth_behavior2_stack2s:  Array< {
    __typename: "Health_behavior2_stack2",
    id: string,
    formid: string | null,
    avoid_sun: string | null,
    sunscreen_spf15: string | null,
    protective_clothing: string | null,
  } | null > | null,
};

export type GetHealthBehavior2Stack3QueryVariables = {
  id: string,
};

export type GetHealthBehavior2Stack3Query = {
  getHealth_behavior2_stack3:  {
    __typename: "Health_behavior2_stack3",
    id: string,
    formid: string | null,
    vigorous_exercise: number | null,
    moderate_exervise: number | null,
  } | null,
};

export type ListHealthBehavior2Stack3sQuery = {
  listHealth_behavior2_stack3s:  Array< {
    __typename: "Health_behavior2_stack3",
    id: string,
    formid: string | null,
    vigorous_exercise: number | null,
    moderate_exervise: number | null,
  } | null > | null,
};

export type GetHealthBehavior2Stack4QueryVariables = {
  id: string,
};

export type GetHealthBehavior2Stack4Query = {
  getHealth_behavior2_stack4:  {
    __typename: "Health_behavior2_stack4",
    id: string,
    formid: string | null,
    interactive_vg: number | null,
    home_any_other: number | null,
    by_yourself_somewhere_else: number | null,
    in_a_group: number | null,
    play_partner_game: number | null,
    internet_group_live: number | null,
    other: number | null,
    do_not_workout: number | null,
  } | null,
};

export type ListHealthBehavior2Stack4sQuery = {
  listHealth_behavior2_stack4s:  Array< {
    __typename: "Health_behavior2_stack4",
    id: string,
    formid: string | null,
    interactive_vg: number | null,
    home_any_other: number | null,
    by_yourself_somewhere_else: number | null,
    in_a_group: number | null,
    play_partner_game: number | null,
    internet_group_live: number | null,
    other: number | null,
    do_not_workout: number | null,
  } | null > | null,
};

export type GetHealthBehavior2Stack5QueryVariables = {
  id: string,
};

export type GetHealthBehavior2Stack5Query = {
  getHealth_behavior2_stack5:  {
    __typename: "Health_behavior2_stack5",
    id: string,
    formid: string | null,
    heredity: number | null,
    lifestyle: number | null,
    stresss: number | null,
    strategies: number | null,
    doctor: number | null,
    carefully_follow: number | null,
    environment: number | null,
    attitude: number | null,
  } | null,
};

export type ListHealthBehavior2Stack5sQuery = {
  listHealth_behavior2_stack5s:  Array< {
    __typename: "Health_behavior2_stack5",
    id: string,
    formid: string | null,
    heredity: number | null,
    lifestyle: number | null,
    stresss: number | null,
    strategies: number | null,
    doctor: number | null,
    carefully_follow: number | null,
    environment: number | null,
    attitude: number | null,
  } | null > | null,
};

export type GetHealthBehavior2Stack6QueryVariables = {
  id: string,
};

export type GetHealthBehavior2Stack6Query = {
  getHealth_behavior2_stack6:  {
    __typename: "Health_behavior2_stack6",
    id: string,
    formid: string | null,
    wshc: number | null,
    time_relax: number | null,
    volunteer_work: number | null,
    spend_leisure_hours: string | null,
  } | null,
};

export type ListHealthBehavior2Stack6sQuery = {
  listHealth_behavior2_stack6s:  Array< {
    __typename: "Health_behavior2_stack6",
    id: string,
    formid: string | null,
    wshc: number | null,
    time_relax: number | null,
    volunteer_work: number | null,
    spend_leisure_hours: string | null,
  } | null > | null,
};

export type GetHealthBehaviorsStack0QueryVariables = {
  id: string,
};

export type GetHealthBehaviorsStack0Query = {
  getHealth_behaviors_stack0:  {
    __typename: "Health_behaviors_stack0",
    id: string,
    formid: string | null,
    regular_doctor: string | null,
    how_many_visits: number | null,
    different_perscription: number | null,
  } | null,
};

export type ListHealthBehaviorsStack0sQuery = {
  listHealth_behaviors_stack0s:  Array< {
    __typename: "Health_behaviors_stack0",
    id: string,
    formid: string | null,
    regular_doctor: string | null,
    how_many_visits: number | null,
    different_perscription: number | null,
  } | null > | null,
};

export type GetHealthBehaviorsStack1QueryVariables = {
  id: string,
};

export type GetHealthBehaviorsStack1Query = {
  getHealth_behaviors_stack1:  {
    __typename: "Health_behaviors_stack1",
    id: string,
    formid: string | null,
    birth_control: number | null,
    perscriped_opioid: number | null,
    dietary_vitamins: number | null,
  } | null,
};

export type ListHealthBehaviorsStack1sQuery = {
  listHealth_behaviors_stack1s:  Array< {
    __typename: "Health_behaviors_stack1",
    id: string,
    formid: string | null,
    birth_control: number | null,
    perscriped_opioid: number | null,
    dietary_vitamins: number | null,
  } | null > | null,
};

export type GetHighMoodStack0QueryVariables = {
  id: string,
};

export type GetHighMoodStack0Query = {
  getHigh_mood_stack0:  {
    __typename: "High_mood_stack0",
    id: string,
    formid: string | null,
    high_mood_episode: number | null,
  } | null,
};

export type ListHighMoodStack0sQuery = {
  listHigh_mood_stack0s:  Array< {
    __typename: "High_mood_stack0",
    id: string,
    formid: string | null,
    high_mood_episode: number | null,
  } | null > | null,
};

export type GetHighMoodStack1QueryVariables = {
  id: string,
};

export type GetHighMoodStack1Query = {
  getHigh_mood_stack1:  {
    __typename: "High_mood_stack1",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type ListHighMoodStack1sQuery = {
  listHigh_mood_stack1s:  Array< {
    __typename: "High_mood_stack1",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null > | null,
};

export type GetHighMoodStack2QueryVariables = {
  id: string,
};

export type GetHighMoodStack2Query = {
  getHigh_mood_stack2:  {
    __typename: "High_mood_stack2",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type ListHighMoodStack2sQuery = {
  listHigh_mood_stack2s:  Array< {
    __typename: "High_mood_stack2",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null > | null,
};

export type GetLakeNonaStack0QueryVariables = {
  id: string,
};

export type GetLakeNonaStack0Query = {
  getLakeNona_stack0:  {
    __typename: "LakeNona_stack0",
    id: string,
    form_id: string | null,
    live_in: number | null,
    play_in: number | null,
    study_in: number | null,
    work_in: number | null,
  } | null,
};

export type ListLakeNonaStack0sQuery = {
  listLakeNona_stack0s:  Array< {
    __typename: "LakeNona_stack0",
    id: string,
    form_id: string | null,
    live_in: number | null,
    play_in: number | null,
    study_in: number | null,
    work_in: number | null,
  } | null > | null,
};

export type GetLowMoodStack0QueryVariables = {
  id: string,
};

export type GetLowMoodStack0Query = {
  getLow_mood_stack0:  {
    __typename: "Low_mood_stack0",
    id: string,
    formid: string | null,
    sad_or_depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feel_down: string | null,
    feel_lonely: string | null,
  } | null,
};

export type ListLowMoodStack0sQuery = {
  listLow_mood_stack0s:  Array< {
    __typename: "Low_mood_stack0",
    id: string,
    formid: string | null,
    sad_or_depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feel_down: string | null,
    feel_lonely: string | null,
  } | null > | null,
};

export type GetLowMoodStack1QueryVariables = {
  id: string,
};

export type GetLowMoodStack1Query = {
  getLow_mood_stack1:  {
    __typename: "Low_mood_stack1",
    id: string,
    formid: string | null,
    think_about_death: string | null,
    psych_distress: string | null,
    interfere_work: string | null,
  } | null,
};

export type ListLowMoodStack1sQuery = {
  listLow_mood_stack1s:  Array< {
    __typename: "Low_mood_stack1",
    id: string,
    formid: string | null,
    think_about_death: string | null,
    psych_distress: string | null,
    interfere_work: string | null,
  } | null > | null,
};

export type GetLowMoodStack2QueryVariables = {
  id: string,
};

export type GetLowMoodStack2Query = {
  getLow_mood_stack2:  {
    __typename: "Low_mood_stack2",
    id: string,
    formid: string | null,
    depressed_one_month: number | null,
  } | null,
};

export type ListLowMoodStack2sQuery = {
  listLow_mood_stack2s:  Array< {
    __typename: "Low_mood_stack2",
    id: string,
    formid: string | null,
    depressed_one_month: number | null,
  } | null > | null,
};

export type GetLowMoodStack3QueryVariables = {
  id: string,
};

export type GetLowMoodStack3Query = {
  getLow_mood_stack3:  {
    __typename: "Low_mood_stack3",
    id: string,
    formid: string | null,
    depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feeling_down: string | null,
  } | null,
};

export type ListLowMoodStack3sQuery = {
  listLow_mood_stack3s:  Array< {
    __typename: "Low_mood_stack3",
    id: string,
    formid: string | null,
    depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feeling_down: string | null,
  } | null > | null,
};

export type GetLowMoodStack4QueryVariables = {
  id: string,
};

export type GetLowMoodStack4Query = {
  getLow_mood_stack4:  {
    __typename: "Low_mood_stack4",
    id: string,
    formid: string | null,
  } | null,
};

export type ListLowMoodStack4sQuery = {
  listLow_mood_stack4s:  Array< {
    __typename: "Low_mood_stack4",
    id: string,
    formid: string | null,
  } | null > | null,
};

export type GetLowMoodStack5QueryVariables = {
  id: string,
};

export type GetLowMoodStack5Query = {
  getLow_mood_stack5:  {
    __typename: "Low_mood_stack5",
    id: string,
    formid: string | null,
    years_depression: number | null,
    months_depression: number | null,
  } | null,
};

export type ListLowMoodStack5sQuery = {
  listLow_mood_stack5s:  Array< {
    __typename: "Low_mood_stack5",
    id: string,
    formid: string | null,
    years_depression: number | null,
    months_depression: number | null,
  } | null > | null,
};

export type GetLowMoodStack6QueryVariables = {
  id: string,
};

export type GetLowMoodStack6Query = {
  getLow_mood_stack6:  {
    __typename: "Low_mood_stack6",
    id: string,
    formid: string | null,
    lack_companionshiup: number | null,
    no_one_turn_to: number | null,
    left_out: number | null,
    outgoing: number | null,
    isolated: number | null,
    can_find_companionship: number | null,
    unhappy: number | null,
    around_me_not_with: number | null,
  } | null,
};

export type ListLowMoodStack6sQuery = {
  listLow_mood_stack6s:  Array< {
    __typename: "Low_mood_stack6",
    id: string,
    formid: string | null,
    lack_companionshiup: number | null,
    no_one_turn_to: number | null,
    left_out: number | null,
    outgoing: number | null,
    isolated: number | null,
    can_find_companionship: number | null,
    unhappy: number | null,
    around_me_not_with: number | null,
  } | null > | null,
};

export type GetNeighborhoodStack0QueryVariables = {
  id: string,
};

export type GetNeighborhoodStack0Query = {
  getNeighborhood_stack0:  {
    __typename: "Neighborhood_stack0",
    id: string,
    formid: string | null,
    friendly: string | null,
    trusted: string | null,
    same_values: string | null,
    willing_to_help: string | null,
  } | null,
};

export type ListNeighborhoodStack0sQuery = {
  listNeighborhood_stack0s:  Array< {
    __typename: "Neighborhood_stack0",
    id: string,
    formid: string | null,
    friendly: string | null,
    trusted: string | null,
    same_values: string | null,
    willing_to_help: string | null,
  } | null > | null,
};

export type GetNeighborhoodStack1QueryVariables = {
  id: string,
};

export type GetNeighborhoodStack1Query = {
  getNeighborhood_stack1:  {
    __typename: "Neighborhood_stack1",
    id: string,
    formid: string | null,
    how_many_friends: number | null,
    know_by_name: number | null,
    conversation_with: number | null,
  } | null,
};

export type ListNeighborhoodStack1sQuery = {
  listNeighborhood_stack1s:  Array< {
    __typename: "Neighborhood_stack1",
    id: string,
    formid: string | null,
    how_many_friends: number | null,
    know_by_name: number | null,
    conversation_with: number | null,
  } | null > | null,
};

export type GetNeighborhoodStack2QueryVariables = {
  id: string,
};

export type GetNeighborhoodStack2Query = {
  getNeighborhood_stack2:  {
    __typename: "Neighborhood_stack2",
    id: string,
    formid: string | null,
    ask_for_help: number | null,
    get_together_socialily: number | null,
  } | null,
};

export type ListNeighborhoodStack2sQuery = {
  listNeighborhood_stack2s:  Array< {
    __typename: "Neighborhood_stack2",
    id: string,
    formid: string | null,
    ask_for_help: number | null,
    get_together_socialily: number | null,
  } | null > | null,
};

export type GetOralHealthStack0QueryVariables = {
  id: string,
};

export type GetOralHealthStack0Query = {
  getOral_health_stack0:  {
    __typename: "Oral_health_stack0",
    id: string,
    formid: string | null,
    brush_teeth: number | null,
    dental_floss: number | null,
    mouthwash: number | null,
  } | null,
};

export type ListOralHealthStack0sQuery = {
  listOral_health_stack0s:  Array< {
    __typename: "Oral_health_stack0",
    id: string,
    formid: string | null,
    brush_teeth: number | null,
    dental_floss: number | null,
    mouthwash: number | null,
  } | null > | null,
};

export type GetOralHealthStack1QueryVariables = {
  id: string,
};

export type GetOralHealthStack1Query = {
  getOral_health_stack1:  {
    __typename: "Oral_health_stack1",
    id: string,
    formid: string | null,
    days_floss: number | null,
    days_mouthwash: number | null,
  } | null,
};

export type ListOralHealthStack1sQuery = {
  listOral_health_stack1s:  Array< {
    __typename: "Oral_health_stack1",
    id: string,
    formid: string | null,
    days_floss: number | null,
    days_mouthwash: number | null,
  } | null > | null,
};

export type GetPetsStack0QueryVariables = {
  id: string,
};

export type GetPetsStack0Query = {
  getPets_stack0:  {
    __typename: "Pets_stack0",
    id: string,
    formid: string | null,
    have_pet: number | null,
    type_pet: string | null,
  } | null,
};

export type ListPetsStack0sQuery = {
  listPets_stack0s:  Array< {
    __typename: "Pets_stack0",
    id: string,
    formid: string | null,
    have_pet: number | null,
    type_pet: string | null,
  } | null > | null,
};

export type GetPetsStack1QueryVariables = {
  id: string,
};

export type GetPetsStack1Query = {
  getPets_stack1:  {
    __typename: "Pets_stack1",
    id: string,
    formid: string | null,
    dont_like_animals: string | null,
    pet_knows_im_upset: string | null,
    i_love_pets: string | null,
    every_day_playing: string | null,
    talk_to_pet: string | null,
    understood_pet: string | null,
    lonely_without: string | null,
    pet_is_friend: string | null,
    pet_makes_me_happy: string | null,
  } | null,
};

export type ListPetsStack1sQuery = {
  listPets_stack1s:  Array< {
    __typename: "Pets_stack1",
    id: string,
    formid: string | null,
    dont_like_animals: string | null,
    pet_knows_im_upset: string | null,
    i_love_pets: string | null,
    every_day_playing: string | null,
    talk_to_pet: string | null,
    understood_pet: string | null,
    lonely_without: string | null,
    pet_is_friend: string | null,
    pet_makes_me_happy: string | null,
  } | null > | null,
};

export type GetQualityOfLifeStack0QueryVariables = {
  id: string,
};

export type GetQualityOfLifeStack0Query = {
  getQuality_of_life_stack0:  {
    __typename: "Quality_of_life_stack0",
    id: string,
    formid: string | null,
    qol_general: string | null,
    health_general: string | null,
  } | null,
};

export type ListQualityOfLifeStack0sQuery = {
  listQuality_of_life_stack0s:  Array< {
    __typename: "Quality_of_life_stack0",
    id: string,
    formid: string | null,
    qol_general: string | null,
    health_general: string | null,
  } | null > | null,
};

export type GetQualityOfLifeStack1QueryVariables = {
  id: string,
};

export type GetQualityOfLifeStack1Query = {
  getQuality_of_life_stack1:  {
    __typename: "Quality_of_life_stack1",
    id: string,
    formid: string | null,
    health_compared: string | null,
    full_of_energy: string | null,
    alert_and_focused: string | null,
  } | null,
};

export type ListQualityOfLifeStack1sQuery = {
  listQuality_of_life_stack1s:  Array< {
    __typename: "Quality_of_life_stack1",
    id: string,
    formid: string | null,
    health_compared: string | null,
    full_of_energy: string | null,
    alert_and_focused: string | null,
  } | null > | null,
};

export type GetQualityOfLifeStack2QueryVariables = {
  id: string,
};

export type GetQualityOfLifeStack2Query = {
  getQuality_of_life_stack2:  {
    __typename: "Quality_of_life_stack2",
    id: string,
    formid: string | null,
    stress: number | null,
    worry: number | null,
    happiness: number | null,
    anger: number | null,
    enjoyment: number | null,
    sadness: number | null,
  } | null,
};

export type ListQualityOfLifeStack2sQuery = {
  listQuality_of_life_stack2s:  Array< {
    __typename: "Quality_of_life_stack2",
    id: string,
    formid: string | null,
    stress: number | null,
    worry: number | null,
    happiness: number | null,
    anger: number | null,
    enjoyment: number | null,
    sadness: number | null,
  } | null > | null,
};

export type GetQualityOfLifeStack3QueryVariables = {
  id: string,
};

export type GetQualityOfLifeStack3Query = {
  getQuality_of_life_stack3:  {
    __typename: "Quality_of_life_stack3",
    id: string,
    formid: string | null,
    ladder: number | null,
  } | null,
};

export type ListQualityOfLifeStack3sQuery = {
  listQuality_of_life_stack3s:  Array< {
    __typename: "Quality_of_life_stack3",
    id: string,
    formid: string | null,
    ladder: number | null,
  } | null > | null,
};

export type GetReligiousnessSpiritualityStack1QueryVariables = {
  id: string,
};

export type GetReligiousnessSpiritualityStack1Query = {
  getReligiousness_spirituality_stack1:  {
    __typename: "Religiousness_spirituality_stack1",
    id: string,
    formid: string | null,
    hard_times: string | null,
    tolerate_stress: string | null,
    comfort_reassurance: string | null,
    meaning_in_life: string | null,
    understand_others: string | null,
  } | null,
};

export type ListReligiousnessSpiritualityStack1sQuery = {
  listReligiousness_spirituality_stack1s:  Array< {
    __typename: "Religiousness_spirituality_stack1",
    id: string,
    formid: string | null,
    hard_times: string | null,
    tolerate_stress: string | null,
    comfort_reassurance: string | null,
    meaning_in_life: string | null,
    understand_others: string | null,
  } | null > | null,
};

export type GetReligiousnessSpiritualityStack2QueryVariables = {
  id: string,
};

export type GetReligiousnessSpiritualityStack2Query = {
  getReligiousness_spirituality_stack2:  {
    __typename: "Religiousness_spirituality_stack2",
    id: string,
    formid: string | null,
    meaning: string | null,
    purpose: string | null,
    here_for_reason: string | null,
    inner_spiritual_strength: string | null,
  } | null,
};

export type ListReligiousnessSpiritualityStack2sQuery = {
  listReligiousness_spirituality_stack2s:  Array< {
    __typename: "Religiousness_spirituality_stack2",
    id: string,
    formid: string | null,
    meaning: string | null,
    purpose: string | null,
    here_for_reason: string | null,
    inner_spiritual_strength: string | null,
  } | null > | null,
};

export type GetReligiousnessSpiritualityStack3QueryVariables = {
  id: string,
};

export type GetReligiousnessSpiritualityStack3Query = {
  getReligiousness_spirituality_stack3:  {
    __typename: "Religiousness_spirituality_stack3",
    id: string,
    formid: string | null,
    well_being: string | null,
    comfort: string | null,
    strength: string | null,
  } | null,
};

export type ListReligiousnessSpiritualityStack3sQuery = {
  listReligiousness_spirituality_stack3s:  Array< {
    __typename: "Religiousness_spirituality_stack3",
    id: string,
    formid: string | null,
    well_being: string | null,
    comfort: string | null,
    strength: string | null,
  } | null > | null,
};

export type GetReligiousnessSpiritualityStack4QueryVariables = {
  id: string,
};

export type GetReligiousnessSpiritualityStack4Query = {
  getReligiousness_spirituality_stack4:  {
    __typename: "Religiousness_spirituality_stack4",
    id: string,
    formid: string | null,
    touched_beauty: string | null,
    inspiration_excitement: string | null,
    grateful: string | null,
    how_hopeful_feel: string | null,
    hopeful_about_life: string | null,
  } | null,
};

export type ListReligiousnessSpiritualityStack4sQuery = {
  listReligiousness_spirituality_stack4s:  Array< {
    __typename: "Religiousness_spirituality_stack4",
    id: string,
    formid: string | null,
    touched_beauty: string | null,
    inspiration_excitement: string | null,
    grateful: string | null,
    how_hopeful_feel: string | null,
    hopeful_about_life: string | null,
  } | null > | null,
};

export type GetReligiousnessSpiritualityStack5QueryVariables = {
  id: string,
};

export type GetReligiousnessSpiritualityStack5Query = {
  getReligiousness_spirituality_stack5:  {
    __typename: "Religiousness_spirituality_stack5",
    id: string,
    formid: string | null,
    experience_awe: string | null,
    consistent_what_you_think: string | null,
    spiritual_strength_live_better: string | null,
    coherence: string | null,
    connection_mbs: string | null,
  } | null,
};

export type ListReligiousnessSpiritualityStack5sQuery = {
  listReligiousness_spirituality_stack5s:  Array< {
    __typename: "Religiousness_spirituality_stack5",
    id: string,
    formid: string | null,
    experience_awe: string | null,
    consistent_what_you_think: string | null,
    spiritual_strength_live_better: string | null,
    coherence: string | null,
    connection_mbs: string | null,
  } | null > | null,
};

export type GetReligiousnessSpiritualityStack6QueryVariables = {
  id: string,
};

export type GetReligiousnessSpiritualityStack6Query = {
  getReligiousness_spirituality_stack6:  {
    __typename: "Religiousness_spirituality_stack6",
    id: string,
    formid: string | null,
    happy: string | null,
    inner_peace: string | null,
    harmony: string | null,
    peace_within_self: string | null,
    feel_peaceful: string | null,
  } | null,
};

export type ListReligiousnessSpiritualityStack6sQuery = {
  listReligiousness_spirituality_stack6s:  Array< {
    __typename: "Religiousness_spirituality_stack6",
    id: string,
    formid: string | null,
    happy: string | null,
    inner_peace: string | null,
    harmony: string | null,
    peace_within_self: string | null,
    feel_peaceful: string | null,
  } | null > | null,
};

export type GetReligiousnessSpiritualityStack7QueryVariables = {
  id: string,
};

export type GetReligiousnessSpiritualityStack7Query = {
  getReligiousness_spirituality_stack7:  {
    __typename: "Religiousness_spirituality_stack7",
    id: string,
    formid: string | null,
    optimistic: string | null,
    remaiun_optimistic: string | null,
    enjoy_life: string | null,
  } | null,
};

export type ListReligiousnessSpiritualityStack7sQuery = {
  listReligiousness_spirituality_stack7s:  Array< {
    __typename: "Religiousness_spirituality_stack7",
    id: string,
    formid: string | null,
    optimistic: string | null,
    remaiun_optimistic: string | null,
    enjoy_life: string | null,
  } | null > | null,
};

export type GetReligiousnessSpiritualityStack8QueryVariables = {
  id: string,
};

export type GetReligiousnessSpiritualityStack8Query = {
  getReligiousness_spirituality_stack8:  {
    __typename: "Religiousness_spirituality_stack8",
    id: string,
    formid: string | null,
    satisfied: string | null,
  } | null,
};

export type ListReligiousnessSpiritualityStack8sQuery = {
  listReligiousness_spirituality_stack8s:  Array< {
    __typename: "Religiousness_spirituality_stack8",
    id: string,
    formid: string | null,
    satisfied: string | null,
  } | null > | null,
};

export type GetSleepQualityStack0QueryVariables = {
  id: string,
};

export type GetSleepQualityStack0Query = {
  getSleep_quality_stack0:  {
    __typename: "Sleep_quality_stack0",
    id: string,
    formid: string | null,
    usual_bedtime: string | null,
    minutes_to_sleep: number | null,
    hours_actual_sleep: number | null,
    usual_wakeup_time: number | null,
  } | null,
};

export type ListSleepQualityStack0sQuery = {
  listSleep_quality_stack0s:  Array< {
    __typename: "Sleep_quality_stack0",
    id: string,
    formid: string | null,
    usual_bedtime: string | null,
    minutes_to_sleep: number | null,
    hours_actual_sleep: number | null,
    usual_wakeup_time: number | null,
  } | null > | null,
};

export type GetSleepQualityStack1QueryVariables = {
  id: string,
};

export type GetSleepQualityStack1Query = {
  getSleep_quality_stack1:  {
    __typename: "Sleep_quality_stack1",
    id: string,
    formid: string | null,
    cannot_sleep_thirty: string | null,
    cough: string | null,
    bad_dreams: string | null,
    too_hot: string | null,
    wake_up: string | null,
    use_bathroom: string | null,
    cannot_breathe: string | null,
  } | null,
};

export type ListSleepQualityStack1sQuery = {
  listSleep_quality_stack1s:  Array< {
    __typename: "Sleep_quality_stack1",
    id: string,
    formid: string | null,
    cannot_sleep_thirty: string | null,
    cough: string | null,
    bad_dreams: string | null,
    too_hot: string | null,
    wake_up: string | null,
    use_bathroom: string | null,
    cannot_breathe: string | null,
  } | null > | null,
};

export type GetSleepQualityStack2QueryVariables = {
  id: string,
};

export type GetSleepQualityStack2Query = {
  getSleep_quality_stack2:  {
    __typename: "Sleep_quality_stack2",
    id: string,
    formid: string | null,
    too_cold: string | null,
    other_reason: string | null,
    bad_dreams: string | null,
    pain: string | null,
  } | null,
};

export type ListSleepQualityStack2sQuery = {
  listSleep_quality_stack2s:  Array< {
    __typename: "Sleep_quality_stack2",
    id: string,
    formid: string | null,
    too_cold: string | null,
    other_reason: string | null,
    bad_dreams: string | null,
    pain: string | null,
  } | null > | null,
};

export type GetSleepQualityStack3QueryVariables = {
  id: string,
};

export type GetSleepQualityStack3Query = {
  getSleep_quality_stack3:  {
    __typename: "Sleep_quality_stack3",
    id: string,
    formid: string | null,
    taken_medicine: string | null,
    problem: string | null,
    trouble_staying_awake: string | null,
  } | null,
};

export type ListSleepQualityStack3sQuery = {
  listSleep_quality_stack3s:  Array< {
    __typename: "Sleep_quality_stack3",
    id: string,
    formid: string | null,
    taken_medicine: string | null,
    problem: string | null,
    trouble_staying_awake: string | null,
  } | null > | null,
};

export type GetSleepQualityStack4QueryVariables = {
  id: string,
};

export type GetSleepQualityStack4Query = {
  getSleep_quality_stack4:  {
    __typename: "Sleep_quality_stack4",
    id: string,
    formid: string | null,
    sleep_quality_overall: string | null,
  } | null,
};

export type ListSleepQualityStack4sQuery = {
  listSleep_quality_stack4s:  Array< {
    __typename: "Sleep_quality_stack4",
    id: string,
    formid: string | null,
    sleep_quality_overall: string | null,
  } | null > | null,
};

export type GetSocialNetworkStack0QueryVariables = {
  id: string,
};

export type GetSocialNetworkStack0Query = {
  getSocial_network_stack0:  {
    __typename: "Social_network_stack0",
    id: string,
    formid: string | null,
    hours_month_socializing: number | null,
    different_friends: number | null,
    hours_week_socializing: number | null,
  } | null,
};

export type ListSocialNetworkStack0sQuery = {
  listSocial_network_stack0s:  Array< {
    __typename: "Social_network_stack0",
    id: string,
    formid: string | null,
    hours_month_socializing: number | null,
    different_friends: number | null,
    hours_week_socializing: number | null,
  } | null > | null,
};

export type GetSocialNetworkStack1QueryVariables = {
  id: string,
};

export type GetSocialNetworkStack1Query = {
  getSocial_network_stack1:  {
    __typename: "Social_network_stack1",
    id: string,
    formid: string | null,
    number_socialize: number | null,
  } | null,
};

export type ListSocialNetworkStack1sQuery = {
  listSocial_network_stack1s:  Array< {
    __typename: "Social_network_stack1",
    id: string,
    formid: string | null,
    number_socialize: number | null,
  } | null > | null,
};

export type GetSocialNetworkStack2QueryVariables = {
  id: string,
};

export type GetSocialNetworkStack2Query = {
  getSocial_network_stack2:  {
    __typename: "Social_network_stack2",
    id: string,
    formid: string | null,
    rely_on_them: string | null,
    open_up_to_them: string | null,
    too_many_demands: string | null,
    argue: string | null,
  } | null,
};

export type ListSocialNetworkStack2sQuery = {
  listSocial_network_stack2s:  Array< {
    __typename: "Social_network_stack2",
    id: string,
    formid: string | null,
    rely_on_them: string | null,
    open_up_to_them: string | null,
    too_many_demands: string | null,
    argue: string | null,
  } | null > | null,
};

export type GetSocialNetworkStack3QueryVariables = {
  id: string,
};

export type GetSocialNetworkStack3Query = {
  getSocial_network_stack3:  {
    __typename: "Social_network_stack3",
    id: string,
    formid: string | null,
    easy_become_emotionally_close: number | null,
    want_to_be: number | null,
  } | null,
};

export type ListSocialNetworkStack3sQuery = {
  listSocial_network_stack3s:  Array< {
    __typename: "Social_network_stack3",
    id: string,
    formid: string | null,
    easy_become_emotionally_close: number | null,
    want_to_be: number | null,
  } | null > | null,
};

export type GetSocialNetworkStack4QueryVariables = {
  id: string,
};

export type GetSocialNetworkStack4Query = {
  getSocial_network_stack4:  {
    __typename: "Social_network_stack4",
    id: string,
    formid: string | null,
    uncomfortable_getting_close: number | null,
    comfortable_without: number | null,
  } | null,
};

export type ListSocialNetworkStack4sQuery = {
  listSocial_network_stack4s:  Array< {
    __typename: "Social_network_stack4",
    id: string,
    formid: string | null,
    uncomfortable_getting_close: number | null,
    comfortable_without: number | null,
  } | null > | null,
};

export type GetSocialNetworkStack5QueryVariables = {
  id: string,
};

export type GetSocialNetworkStack5Query = {
  getSocial_network_stack5:  {
    __typename: "Social_network_stack5",
    id: string,
    formid: string | null,
    depend_on_you: string | null,
    important_to_them: string | null,
    interested: string | null,
    miss_you: string | null,
    pay_attention: string | null,
  } | null,
};

export type ListSocialNetworkStack5sQuery = {
  listSocial_network_stack5s:  Array< {
    __typename: "Social_network_stack5",
    id: string,
    formid: string | null,
    depend_on_you: string | null,
    important_to_them: string | null,
    interested: string | null,
    miss_you: string | null,
    pay_attention: string | null,
  } | null > | null,
};

export type GetStressfulLifeExperienceStack0QueryVariables = {
  id: string,
};

export type GetStressfulLifeExperienceStack0Query = {
  getStressful_life_experience_stack0:  {
    __typename: "Stressful_life_experience_stack0",
    id: string,
    formid: string | null,
    how_old_depression: number | null,
  } | null,
};

export type ListStressfulLifeExperienceStack0sQuery = {
  listStressful_life_experience_stack0s:  Array< {
    __typename: "Stressful_life_experience_stack0",
    id: string,
    formid: string | null,
    how_old_depression: number | null,
  } | null > | null,
};

export type GetStressfulLifeExperienceStack1QueryVariables = {
  id: string,
};

export type GetStressfulLifeExperienceStack1Query = {
  getStressful_life_experience_stack1:  {
    __typename: "Stressful_life_experience_stack1",
    id: string,
    formid: string | null,
    disturbing_memories: string | null,
    avoided_thinking: string | null,
    physical_reaction: string | null,
    avoided_activities: string | null,
    interfered_with_qol: string | null,
  } | null,
};

export type ListStressfulLifeExperienceStack1sQuery = {
  listStressful_life_experience_stack1s:  Array< {
    __typename: "Stressful_life_experience_stack1",
    id: string,
    formid: string | null,
    disturbing_memories: string | null,
    avoided_thinking: string | null,
    physical_reaction: string | null,
    avoided_activities: string | null,
    interfered_with_qol: string | null,
  } | null > | null,
};

export type GetStressfulLifeExperienceStack2QueryVariables = {
  id: string,
};

export type GetStressfulLifeExperienceStack2Query = {
  getStressful_life_experience_stack2:  {
    __typename: "Stressful_life_experience_stack2",
    id: string,
    formid: string | null,
    first_time: number | null,
    years: number | null,
    months: number | null,
    days: number | null,
  } | null,
};

export type ListStressfulLifeExperienceStack2sQuery = {
  listStressful_life_experience_stack2s:  Array< {
    __typename: "Stressful_life_experience_stack2",
    id: string,
    formid: string | null,
    first_time: number | null,
    years: number | null,
    months: number | null,
    days: number | null,
  } | null > | null,
};

export type GetStressfulLifeExperienceStack3QueryVariables = {
  id: string,
};

export type GetStressfulLifeExperienceStack3Query = {
  getStressful_life_experience_stack3:  {
    __typename: "Stressful_life_experience_stack3",
    id: string,
    formid: string | null,
    life_threatening: number | null,
    any_other: number | null,
    motor_vehicle: number | null,
    serious_betrayal: number | null,
    death_close_friend: number | null,
    serious_legal: number | null,
    break_up: number | null,
  } | null,
};

export type ListStressfulLifeExperienceStack3sQuery = {
  listStressful_life_experience_stack3s:  Array< {
    __typename: "Stressful_life_experience_stack3",
    id: string,
    formid: string | null,
    life_threatening: number | null,
    any_other: number | null,
    motor_vehicle: number | null,
    serious_betrayal: number | null,
    death_close_friend: number | null,
    serious_legal: number | null,
    break_up: number | null,
  } | null > | null,
};

export type GetStressfulLifeExperienceStack4QueryVariables = {
  id: string,
};

export type GetStressfulLifeExperienceStack4Query = {
  getStressful_life_experience_stack4:  {
    __typename: "Stressful_life_experience_stack4",
    id: string,
    formid: string | null,
    other_stressful_event: string | null,
    love_life: string | null,
    career: string | null,
    friendship: string | null,
    other_loved_ones: string | null,
    health: string | null,
    relationship_family: string | null,
    health_loved_ones: string | null,
    life_overall: string | null,
  } | null,
};

export type ListStressfulLifeExperienceStack4sQuery = {
  listStressful_life_experience_stack4s:  Array< {
    __typename: "Stressful_life_experience_stack4",
    id: string,
    formid: string | null,
    other_stressful_event: string | null,
    love_life: string | null,
    career: string | null,
    friendship: string | null,
    other_loved_ones: string | null,
    health: string | null,
    relationship_family: string | null,
    health_loved_ones: string | null,
    life_overall: string | null,
  } | null > | null,
};

export type GetStressfulLifeExperienceStack5QueryVariables = {
  id: string,
};

export type GetStressfulLifeExperienceStack5Query = {
  getStressful_life_experience_stack5:  {
    __typename: "Stressful_life_experience_stack5",
    id: string,
    formid: string | null,
    keep_calm: string | null,
    get_along: string | null,
    manage_stress: string | null,
    sense_humor: string | null,
    new_approaches: string | null,
  } | null,
};

export type ListStressfulLifeExperienceStack5sQuery = {
  listStressful_life_experience_stack5s:  Array< {
    __typename: "Stressful_life_experience_stack5",
    id: string,
    formid: string | null,
    keep_calm: string | null,
    get_along: string | null,
    manage_stress: string | null,
    sense_humor: string | null,
    new_approaches: string | null,
  } | null > | null,
};

export type GetStressfulLifeExperienceStack6QueryVariables = {
  id: string,
};

export type GetStressfulLifeExperienceStack6Query = {
  getStressful_life_experience_stack6:  {
    __typename: "Stressful_life_experience_stack6",
    id: string,
    formid: string | null,
    promotion: number | null,
    health_major: number | null,
    finances: number | null,
    love_life: number | null,
    other_positive: number | null,
  } | null,
};

export type ListStressfulLifeExperienceStack6sQuery = {
  listStressful_life_experience_stack6s:  Array< {
    __typename: "Stressful_life_experience_stack6",
    id: string,
    formid: string | null,
    promotion: number | null,
    health_major: number | null,
    finances: number | null,
    love_life: number | null,
    other_positive: number | null,
  } | null > | null,
};

export type GetYourHealthStack0QueryVariables = {
  id: string,
};

export type GetYourHealthStack0Query = {
  getYour_health_stack0:  {
    __typename: "Your_health_stack0",
    id: string,
    formid: string | null,
    feet_height: string | null,
    weight: number | null,
  } | null,
};

export type ListYourHealthStack0sQuery = {
  listYour_health_stack0s:  Array< {
    __typename: "Your_health_stack0",
    id: string,
    formid: string | null,
    feet_height: string | null,
    weight: number | null,
  } | null > | null,
};

export type GetYourHealthStack1QueryVariables = {
  id: string,
};

export type GetYourHealthStack1Query = {
  getYour_health_stack1:  {
    __typename: "Your_health_stack1",
    id: string,
    formid: string | null,
    clotting: number | null,
    high_blood_pressure: number | null,
    heart_attack: number | null,
    high_cholesterol: number | null,
    any_other_cvd: number | null,
    asthma: number | null,
    copd: number | null,
    seasonal_allergies: number | null,
    osteoarthritis: number | null,
    rheumatoid_arthritis: number | null,
    osteoporosis: number | null,
    add_adhd: number | null,
    depression: number | null,
    manic_disorder: number | null,
    panic_disorder: number | null,
    ptsd: number | null,
    substance_abuse: number | null,
    any_other_psych: number | null,
    skin_cancer: number | null,
    any_other_cancer: number | null,
  } | null,
};

export type ListYourHealthStack1sQuery = {
  listYour_health_stack1s:  Array< {
    __typename: "Your_health_stack1",
    id: string,
    formid: string | null,
    clotting: number | null,
    high_blood_pressure: number | null,
    heart_attack: number | null,
    high_cholesterol: number | null,
    any_other_cvd: number | null,
    asthma: number | null,
    copd: number | null,
    seasonal_allergies: number | null,
    osteoarthritis: number | null,
    rheumatoid_arthritis: number | null,
    osteoporosis: number | null,
    add_adhd: number | null,
    depression: number | null,
    manic_disorder: number | null,
    panic_disorder: number | null,
    ptsd: number | null,
    substance_abuse: number | null,
    any_other_psych: number | null,
    skin_cancer: number | null,
    any_other_cancer: number | null,
  } | null > | null,
};

export type GetYourHealthStack2QueryVariables = {
  id: string,
};

export type GetYourHealthStack2Query = {
  getYour_health_stack2:  {
    __typename: "Your_health_stack2",
    id: string,
    formid: string | null,
    autoimmune_disorder: number | null,
    inflammatory_skin_disorder: number | null,
    diabetes_insulin_dependant: number | null,
    diabetes_non_insulin_dependant: number | null,
    migraine: number | null,
    ulcer_stomach: number | null,
    acid_reflux: number | null,
    thyroid_disorder: number | null,
    chronic_pain: number | null,
    none: number | null,
  } | null,
};

export type ListYourHealthStack2sQuery = {
  listYour_health_stack2s:  Array< {
    __typename: "Your_health_stack2",
    id: string,
    formid: string | null,
    autoimmune_disorder: number | null,
    inflammatory_skin_disorder: number | null,
    diabetes_insulin_dependant: number | null,
    diabetes_non_insulin_dependant: number | null,
    migraine: number | null,
    ulcer_stomach: number | null,
    acid_reflux: number | null,
    thyroid_disorder: number | null,
    chronic_pain: number | null,
    none: number | null,
  } | null > | null,
};

export type GetYourHealthStack3QueryVariables = {
  id: string,
};

export type GetYourHealthStack3Query = {
  getYour_health_stack3:  {
    __typename: "Your_health_stack3",
    id: string,
    formid: string | null,
    dizziness: string | null,
    shortness_of_breath: string | null,
    heart_pound: string | null,
    restless_tense: string | null,
    anxious_nervous: string | null,
    irritable_annoyed: string | null,
  } | null,
};

export type ListYourHealthStack3sQuery = {
  listYour_health_stack3s:  Array< {
    __typename: "Your_health_stack3",
    id: string,
    formid: string | null,
    dizziness: string | null,
    shortness_of_breath: string | null,
    heart_pound: string | null,
    restless_tense: string | null,
    anxious_nervous: string | null,
    irritable_annoyed: string | null,
  } | null > | null,
};

export type GetYourHealthStack4QueryVariables = {
  id: string,
};

export type GetYourHealthStack4Query = {
  getYour_health_stack4:  {
    __typename: "Your_health_stack4",
    id: string,
    formid: string | null,
    memory: string | null,
    talking_slow: string | null,
    heart_pound: string | null,
    difficulty_concentrating: string | null,
    sleeping_problems: string | null,
    constipation: string | null,
    nausea: string | null,
  } | null,
};

export type ListYourHealthStack4sQuery = {
  listYour_health_stack4s:  Array< {
    __typename: "Your_health_stack4",
    id: string,
    formid: string | null,
    memory: string | null,
    talking_slow: string | null,
    heart_pound: string | null,
    difficulty_concentrating: string | null,
    sleeping_problems: string | null,
    constipation: string | null,
    nausea: string | null,
  } | null > | null,
};

export type GetYourHealthStack5QueryVariables = {
  id: string,
};

export type GetYourHealthStack5Query = {
  getYour_health_stack5:  {
    __typename: "Your_health_stack5",
    id: string,
    formid: string | null,
    back_pain: string | null,
    neck_pain: string | null,
    stomach_pain: string | null,
    chest_pain: string | null,
    headache: string | null,
    uncontrollable_anxiety: string | null,
  } | null,
};

export type ListYourHealthStack5sQuery = {
  listYour_health_stack5s:  Array< {
    __typename: "Your_health_stack5",
    id: string,
    formid: string | null,
    back_pain: string | null,
    neck_pain: string | null,
    stomach_pain: string | null,
    chest_pain: string | null,
    headache: string | null,
    uncontrollable_anxiety: string | null,
  } | null > | null,
};

export type GetYourHealthStack6QueryVariables = {
  id: string,
};

export type GetYourHealthStack6Query = {
  getYour_health_stack6:  {
    __typename: "Your_health_stack6",
    id: string,
    formid: string | null,
    how_long_sleep_problems: string | null,
    hours_sleep: number | null,
    energy_scale: number | null,
  } | null,
};

export type ListYourHealthStack6sQuery = {
  listYour_health_stack6s:  Array< {
    __typename: "Your_health_stack6",
    id: string,
    formid: string | null,
    how_long_sleep_problems: string | null,
    hours_sleep: number | null,
    energy_scale: number | null,
  } | null > | null,
};

export type GetYourHealthStack7QueryVariables = {
  id: string,
};

export type GetYourHealthStack7Query = {
  getYour_health_stack7:  {
    __typename: "Your_health_stack7",
    id: string,
    formid: string | null,
    how_long_headaches: string | null,
    how_long_pain: string | null,
    pain_scale: number | null,
  } | null,
};

export type ListYourHealthStack7sQuery = {
  listYour_health_stack7s:  Array< {
    __typename: "Your_health_stack7",
    id: string,
    formid: string | null,
    how_long_headaches: string | null,
    how_long_pain: string | null,
    pain_scale: number | null,
  } | null > | null,
};

export type GetYourHealthStack8QueryVariables = {
  id: string,
};

export type GetYourHealthStack8Query = {
  getYour_health_stack8:  {
    __typename: "Your_health_stack8",
    id: string,
    formid: string | null,
    home_management: number | null,
    ability_work: number | null,
    close_relationships: number | null,
    social: number | null,
    quality_of_work: number | null,
  } | null,
};

export type ListYourHealthStack8sQuery = {
  listYour_health_stack8s:  Array< {
    __typename: "Your_health_stack8",
    id: string,
    formid: string | null,
    home_management: number | null,
    ability_work: number | null,
    close_relationships: number | null,
    social: number | null,
    quality_of_work: number | null,
  } | null > | null,
};

export type GetYourHealthStack9QueryVariables = {
  id: string,
};

export type GetYourHealthStack9Query = {
  getYour_health_stack9:  {
    __typename: "Your_health_stack9",
    id: string,
    formid: string | null,
    unable_to_work: number | null,
    cut_back_work: number | null,
  } | null,
};

export type ListYourHealthStack9sQuery = {
  listYour_health_stack9s:  Array< {
    __typename: "Your_health_stack9",
    id: string,
    formid: string | null,
    unable_to_work: number | null,
    cut_back_work: number | null,
  } | null > | null,
};

export type GetYourPersonalityStack0QueryVariables = {
  id: string,
};

export type GetYourPersonalityStack0Query = {
  getYour_personality_stack0:  {
    __typename: "Your_personality_stack0",
    id: string,
    formid: string | null,
    reserved: string | null,
    broad_minded: string | null,
    helpful: string | null,
    outgoing: string | null,
    moody: string | null,
    critical: string | null,
    adventerous: string | null,
  } | null,
};

export type ListYourPersonalityStack0sQuery = {
  listYour_personality_stack0s:  Array< {
    __typename: "Your_personality_stack0",
    id: string,
    formid: string | null,
    reserved: string | null,
    broad_minded: string | null,
    helpful: string | null,
    outgoing: string | null,
    moody: string | null,
    critical: string | null,
    adventerous: string | null,
  } | null > | null,
};

export type GetYourPersonalityStack1QueryVariables = {
  id: string,
};

export type GetYourPersonalityStack1Query = {
  getYour_personality_stack1:  {
    __typename: "Your_personality_stack1",
    id: string,
    formid: string | null,
    soft_hearted: string | null,
    calm: string | null,
    creative: string | null,
    outgsensitive: string | null,
    organized: string | null,
    friendly: string | null,
  } | null,
};

export type ListYourPersonalityStack1sQuery = {
  listYour_personality_stack1s:  Array< {
    __typename: "Your_personality_stack1",
    id: string,
    formid: string | null,
    soft_hearted: string | null,
    calm: string | null,
    creative: string | null,
    outgsensitive: string | null,
    organized: string | null,
    friendly: string | null,
  } | null > | null,
};

export type GetYourPersonalityStack2QueryVariables = {
  id: string,
};

export type GetYourPersonalityStack2Query = {
  getYour_personality_stack2:  {
    __typename: "Your_personality_stack2",
    id: string,
    formid: string | null,
    careless: string | null,
    talkative: string | null,
    uncompassionate: string | null,
    easily_upset: string | null,
    sympathetic: string | null,
    curious: string | null,
  } | null,
};

export type ListYourPersonalityStack2sQuery = {
  listYour_personality_stack2s:  Array< {
    __typename: "Your_personality_stack2",
    id: string,
    formid: string | null,
    careless: string | null,
    talkative: string | null,
    uncompassionate: string | null,
    easily_upset: string | null,
    sympathetic: string | null,
    curious: string | null,
  } | null > | null,
};

export type GetYourPersonalityStack3QueryVariables = {
  id: string,
};

export type GetYourPersonalityStack3Query = {
  getYour_personality_stack3:  {
    __typename: "Your_personality_stack3",
    id: string,
    formid: string | null,
    interests: string | null,
    direction: string | null,
    opinions: string | null,
    think_a_lot: string | null,
    do_a_lot: string | null,
  } | null,
};

export type ListYourPersonalityStack3sQuery = {
  listYour_personality_stack3s:  Array< {
    __typename: "Your_personality_stack3",
    id: string,
    formid: string | null,
    interests: string | null,
    direction: string | null,
    opinions: string | null,
    think_a_lot: string | null,
    do_a_lot: string | null,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
    percentage: number,
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
      percentage: number,
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
      inputConfirmation: string,
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
      percentage: number,
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
        inputConfirmation: string,
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
        percentage: number,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
          inputConfirmation: string,
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
          inputConfirmation: string,
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
    inputConfirmation: string,
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
      inputConfirmation: string,
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
        inputConfirmation: string,
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
          inputConfirmation: string,
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
        inputConfirmation: string,
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
          inputConfirmation: string,
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

export type OnCreateDemographicsStack0Subscription = {
  onCreateDemographics_stack0:  {
    __typename: "Demographics_stack0",
    id: string,
    form_id: string | null,
    born_in_US: number | null,
    what_state_or_territory: string | null,
    how_many_years_in_florida: string | null,
  } | null,
};

export type OnCreateDemographicsStack1Subscription = {
  onCreateDemographics_stack1:  {
    __typename: "Demographics_stack1",
    are_you_spanish_latino: number | null,
    select_all_that_apply: string | null,
    id: string,
    formid: string | null,
    what_is_your_race: string | null,
  } | null,
};

export type OnCreateDemographicsStack2Subscription = {
  onCreateDemographics_stack2:  {
    __typename: "Demographics_stack2",
    id: string,
    formid: string | null,
    highest_level_education: string | null,
  } | null,
};

export type OnCreateDemographicsStack3Subscription = {
  onCreateDemographics_stack3:  {
    __typename: "Demographics_stack3",
    id: string,
    formid: string | null,
    marital_status: string | null,
    living_marriage_like: number | null,
  } | null,
};

export type OnCreateDemographicsStack4Subscription = {
  onCreateDemographics_stack4:  {
    __typename: "Demographics_stack4",
    id: string,
    formid: string | null,
    bio_children: number | null,
    step_children: number | null,
    children_0_to_17: number | null,
  } | null,
};

export type OnCreateDemographicsStack5Subscription = {
  onCreateDemographics_stack5:  {
    __typename: "Demographics_stack5",
    id: string,
    formid: string | null,
    gender: string | null,
    currently_pregnant: number | null,
  } | null,
};

export type OnCreateEmploymentStack0Subscription = {
  onCreateEmployment_stack0:  {
    __typename: "Employment_stack0",
    id: string,
    formid: string | null,
    emp_status: string | null,
    type_work: string | null,
    commute_work: number | null,
    commute_int: number | null,
  } | null,
};

export type OnCreateEmploymentStack1Subscription = {
  onCreateEmployment_stack1:  {
    __typename: "Employment_stack1",
    id: string,
    formid: string | null,
    hours_work_week: number | null,
    hours_typical: string | null,
    hours_per_day: string | null,
  } | null,
};

export type OnCreateEmploymentStack2Subscription = {
  onCreateEmployment_stack2:  {
    __typename: "Employment_stack2",
    id: string,
    formid: string | null,
    people_under_supervision: number | null,
    weeks_missed_work: number | null,
    hours_week_missed: number | null,
  } | null,
};

export type OnCreateEmploymentStack3Subscription = {
  onCreateEmployment_stack3:  {
    __typename: "Employment_stack3",
    id: string,
    formid: string | null,
    hours_worked: number | null,
    health_suffered: number | null,
  } | null,
};

export type OnCreateHealthBehavior2Stack0Subscription = {
  onCreateHealth_behavior2_stack0:  {
    __typename: "Health_behavior2_stack0",
    id: string,
    formid: string | null,
    days_tobacco: string | null,
    days_nicotine: number | null,
    days_nicotine2: string | null,
    how_many_tobacco: number | null,
  } | null,
};

export type OnCreateHealthBehavior2Stack1Subscription = {
  onCreateHealth_behavior2_stack1:  {
    __typename: "Health_behavior2_stack1",
    id: string,
    formid: string | null,
    days_week_alcohol: string | null,
    how_many_drinks: number | null,
    skin_in_sun: string | null,
  } | null,
};

export type OnCreateHealthBehavior2Stack2Subscription = {
  onCreateHealth_behavior2_stack2:  {
    __typename: "Health_behavior2_stack2",
    id: string,
    formid: string | null,
    avoid_sun: string | null,
    sunscreen_spf15: string | null,
    protective_clothing: string | null,
  } | null,
};

export type OnCreateHealthBehavior2Stack3Subscription = {
  onCreateHealth_behavior2_stack3:  {
    __typename: "Health_behavior2_stack3",
    id: string,
    formid: string | null,
    vigorous_exercise: number | null,
    moderate_exervise: number | null,
  } | null,
};

export type OnCreateHealthBehavior2Stack4Subscription = {
  onCreateHealth_behavior2_stack4:  {
    __typename: "Health_behavior2_stack4",
    id: string,
    formid: string | null,
    interactive_vg: number | null,
    home_any_other: number | null,
    by_yourself_somewhere_else: number | null,
    in_a_group: number | null,
    play_partner_game: number | null,
    internet_group_live: number | null,
    other: number | null,
    do_not_workout: number | null,
  } | null,
};

export type OnCreateHealthBehavior2Stack5Subscription = {
  onCreateHealth_behavior2_stack5:  {
    __typename: "Health_behavior2_stack5",
    id: string,
    formid: string | null,
    heredity: number | null,
    lifestyle: number | null,
    stresss: number | null,
    strategies: number | null,
    doctor: number | null,
    carefully_follow: number | null,
    environment: number | null,
    attitude: number | null,
  } | null,
};

export type OnCreateHealthBehavior2Stack6Subscription = {
  onCreateHealth_behavior2_stack6:  {
    __typename: "Health_behavior2_stack6",
    id: string,
    formid: string | null,
    wshc: number | null,
    time_relax: number | null,
    volunteer_work: number | null,
    spend_leisure_hours: string | null,
  } | null,
};

export type OnCreateHealthBehaviorsStack0Subscription = {
  onCreateHealth_behaviors_stack0:  {
    __typename: "Health_behaviors_stack0",
    id: string,
    formid: string | null,
    regular_doctor: string | null,
    how_many_visits: number | null,
    different_perscription: number | null,
  } | null,
};

export type OnCreateHealthBehaviorsStack1Subscription = {
  onCreateHealth_behaviors_stack1:  {
    __typename: "Health_behaviors_stack1",
    id: string,
    formid: string | null,
    birth_control: number | null,
    perscriped_opioid: number | null,
    dietary_vitamins: number | null,
  } | null,
};

export type OnCreateHighMoodStack0Subscription = {
  onCreateHigh_mood_stack0:  {
    __typename: "High_mood_stack0",
    id: string,
    formid: string | null,
    high_mood_episode: number | null,
  } | null,
};

export type OnCreateHighMoodStack1Subscription = {
  onCreateHigh_mood_stack1:  {
    __typename: "High_mood_stack1",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type OnCreateHighMoodStack2Subscription = {
  onCreateHigh_mood_stack2:  {
    __typename: "High_mood_stack2",
    id: string,
    formid: string | null,
    higher_mood_usual: string | null,
    hyper: string | null,
    thoughts_raced: string | null,
    more_irritable: string | null,
  } | null,
};

export type OnCreateLakeNonaStack0Subscription = {
  onCreateLakeNona_stack0:  {
    __typename: "LakeNona_stack0",
    id: string,
    form_id: string | null,
    live_in: number | null,
    play_in: number | null,
    study_in: number | null,
    work_in: number | null,
  } | null,
};

export type OnCreateLowMoodStack0Subscription = {
  onCreateLow_mood_stack0:  {
    __typename: "Low_mood_stack0",
    id: string,
    formid: string | null,
    sad_or_depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feel_down: string | null,
    feel_lonely: string | null,
  } | null,
};

export type OnCreateLowMoodStack1Subscription = {
  onCreateLow_mood_stack1:  {
    __typename: "Low_mood_stack1",
    id: string,
    formid: string | null,
    think_about_death: string | null,
    psych_distress: string | null,
    interfere_work: string | null,
  } | null,
};

export type OnCreateLowMoodStack2Subscription = {
  onCreateLow_mood_stack2:  {
    __typename: "Low_mood_stack2",
    id: string,
    formid: string | null,
    depressed_one_month: number | null,
  } | null,
};

export type OnCreateLowMoodStack3Subscription = {
  onCreateLow_mood_stack3:  {
    __typename: "Low_mood_stack3",
    id: string,
    formid: string | null,
    depressed: string | null,
    discouraged: string | null,
    no_interest: string | null,
    feeling_down: string | null,
  } | null,
};

export type OnCreateLowMoodStack4Subscription = {
  onCreateLow_mood_stack4:  {
    __typename: "Low_mood_stack4",
    id: string,
    formid: string | null,
  } | null,
};

export type OnCreateLowMoodStack5Subscription = {
  onCreateLow_mood_stack5:  {
    __typename: "Low_mood_stack5",
    id: string,
    formid: string | null,
    years_depression: number | null,
    months_depression: number | null,
  } | null,
};

export type OnCreateLowMoodStack6Subscription = {
  onCreateLow_mood_stack6:  {
    __typename: "Low_mood_stack6",
    id: string,
    formid: string | null,
    lack_companionshiup: number | null,
    no_one_turn_to: number | null,
    left_out: number | null,
    outgoing: number | null,
    isolated: number | null,
    can_find_companionship: number | null,
    unhappy: number | null,
    around_me_not_with: number | null,
  } | null,
};

export type OnCreateNeighborhoodStack0Subscription = {
  onCreateNeighborhood_stack0:  {
    __typename: "Neighborhood_stack0",
    id: string,
    formid: string | null,
    friendly: string | null,
    trusted: string | null,
    same_values: string | null,
    willing_to_help: string | null,
  } | null,
};

export type OnCreateNeighborhoodStack1Subscription = {
  onCreateNeighborhood_stack1:  {
    __typename: "Neighborhood_stack1",
    id: string,
    formid: string | null,
    how_many_friends: number | null,
    know_by_name: number | null,
    conversation_with: number | null,
  } | null,
};

export type OnCreateNeighborhoodStack2Subscription = {
  onCreateNeighborhood_stack2:  {
    __typename: "Neighborhood_stack2",
    id: string,
    formid: string | null,
    ask_for_help: number | null,
    get_together_socialily: number | null,
  } | null,
};

export type OnCreateOralHealthStack0Subscription = {
  onCreateOral_health_stack0:  {
    __typename: "Oral_health_stack0",
    id: string,
    formid: string | null,
    brush_teeth: number | null,
    dental_floss: number | null,
    mouthwash: number | null,
  } | null,
};

export type OnCreateOralHealthStack1Subscription = {
  onCreateOral_health_stack1:  {
    __typename: "Oral_health_stack1",
    id: string,
    formid: string | null,
    days_floss: number | null,
    days_mouthwash: number | null,
  } | null,
};

export type OnCreatePetsStack0Subscription = {
  onCreatePets_stack0:  {
    __typename: "Pets_stack0",
    id: string,
    formid: string | null,
    have_pet: number | null,
    type_pet: string | null,
  } | null,
};

export type OnCreatePetsStack1Subscription = {
  onCreatePets_stack1:  {
    __typename: "Pets_stack1",
    id: string,
    formid: string | null,
    dont_like_animals: string | null,
    pet_knows_im_upset: string | null,
    i_love_pets: string | null,
    every_day_playing: string | null,
    talk_to_pet: string | null,
    understood_pet: string | null,
    lonely_without: string | null,
    pet_is_friend: string | null,
    pet_makes_me_happy: string | null,
  } | null,
};

export type OnCreateQualityOfLifeStack0Subscription = {
  onCreateQuality_of_life_stack0:  {
    __typename: "Quality_of_life_stack0",
    id: string,
    formid: string | null,
    qol_general: string | null,
    health_general: string | null,
  } | null,
};

export type OnCreateQualityOfLifeStack1Subscription = {
  onCreateQuality_of_life_stack1:  {
    __typename: "Quality_of_life_stack1",
    id: string,
    formid: string | null,
    health_compared: string | null,
    full_of_energy: string | null,
    alert_and_focused: string | null,
  } | null,
};

export type OnCreateQualityOfLifeStack2Subscription = {
  onCreateQuality_of_life_stack2:  {
    __typename: "Quality_of_life_stack2",
    id: string,
    formid: string | null,
    stress: number | null,
    worry: number | null,
    happiness: number | null,
    anger: number | null,
    enjoyment: number | null,
    sadness: number | null,
  } | null,
};

export type OnCreateQualityOfLifeStack3Subscription = {
  onCreateQuality_of_life_stack3:  {
    __typename: "Quality_of_life_stack3",
    id: string,
    formid: string | null,
    ladder: number | null,
  } | null,
};

export type OnCreateReligiousnessSpiritualityStack1Subscription = {
  onCreateReligiousness_spirituality_stack1:  {
    __typename: "Religiousness_spirituality_stack1",
    id: string,
    formid: string | null,
    hard_times: string | null,
    tolerate_stress: string | null,
    comfort_reassurance: string | null,
    meaning_in_life: string | null,
    understand_others: string | null,
  } | null,
};

export type OnCreateReligiousnessSpiritualityStack2Subscription = {
  onCreateReligiousness_spirituality_stack2:  {
    __typename: "Religiousness_spirituality_stack2",
    id: string,
    formid: string | null,
    meaning: string | null,
    purpose: string | null,
    here_for_reason: string | null,
    inner_spiritual_strength: string | null,
  } | null,
};

export type OnCreateReligiousnessSpiritualityStack3Subscription = {
  onCreateReligiousness_spirituality_stack3:  {
    __typename: "Religiousness_spirituality_stack3",
    id: string,
    formid: string | null,
    well_being: string | null,
    comfort: string | null,
    strength: string | null,
  } | null,
};

export type OnCreateReligiousnessSpiritualityStack4Subscription = {
  onCreateReligiousness_spirituality_stack4:  {
    __typename: "Religiousness_spirituality_stack4",
    id: string,
    formid: string | null,
    touched_beauty: string | null,
    inspiration_excitement: string | null,
    grateful: string | null,
    how_hopeful_feel: string | null,
    hopeful_about_life: string | null,
  } | null,
};

export type OnCreateReligiousnessSpiritualityStack5Subscription = {
  onCreateReligiousness_spirituality_stack5:  {
    __typename: "Religiousness_spirituality_stack5",
    id: string,
    formid: string | null,
    experience_awe: string | null,
    consistent_what_you_think: string | null,
    spiritual_strength_live_better: string | null,
    coherence: string | null,
    connection_mbs: string | null,
  } | null,
};

export type OnCreateReligiousnessSpiritualityStack6Subscription = {
  onCreateReligiousness_spirituality_stack6:  {
    __typename: "Religiousness_spirituality_stack6",
    id: string,
    formid: string | null,
    happy: string | null,
    inner_peace: string | null,
    harmony: string | null,
    peace_within_self: string | null,
    feel_peaceful: string | null,
  } | null,
};

export type OnCreateReligiousnessSpiritualityStack7Subscription = {
  onCreateReligiousness_spirituality_stack7:  {
    __typename: "Religiousness_spirituality_stack7",
    id: string,
    formid: string | null,
    optimistic: string | null,
    remaiun_optimistic: string | null,
    enjoy_life: string | null,
  } | null,
};

export type OnCreateReligiousnessSpiritualityStack8Subscription = {
  onCreateReligiousness_spirituality_stack8:  {
    __typename: "Religiousness_spirituality_stack8",
    id: string,
    formid: string | null,
    satisfied: string | null,
  } | null,
};

export type OnCreateSleepQualityStack0Subscription = {
  onCreateSleep_quality_stack0:  {
    __typename: "Sleep_quality_stack0",
    id: string,
    formid: string | null,
    usual_bedtime: string | null,
    minutes_to_sleep: number | null,
    hours_actual_sleep: number | null,
    usual_wakeup_time: number | null,
  } | null,
};

export type OnCreateSleepQualityStack1Subscription = {
  onCreateSleep_quality_stack1:  {
    __typename: "Sleep_quality_stack1",
    id: string,
    formid: string | null,
    cannot_sleep_thirty: string | null,
    cough: string | null,
    bad_dreams: string | null,
    too_hot: string | null,
    wake_up: string | null,
    use_bathroom: string | null,
    cannot_breathe: string | null,
  } | null,
};

export type OnCreateSleepQualityStack2Subscription = {
  onCreateSleep_quality_stack2:  {
    __typename: "Sleep_quality_stack2",
    id: string,
    formid: string | null,
    too_cold: string | null,
    other_reason: string | null,
    bad_dreams: string | null,
    pain: string | null,
  } | null,
};

export type OnCreateSleepQualityStack3Subscription = {
  onCreateSleep_quality_stack3:  {
    __typename: "Sleep_quality_stack3",
    id: string,
    formid: string | null,
    taken_medicine: string | null,
    problem: string | null,
    trouble_staying_awake: string | null,
  } | null,
};

export type OnCreateSleepQualityStack4Subscription = {
  onCreateSleep_quality_stack4:  {
    __typename: "Sleep_quality_stack4",
    id: string,
    formid: string | null,
    sleep_quality_overall: string | null,
  } | null,
};

export type OnCreateSocialNetworkStack0Subscription = {
  onCreateSocial_network_stack0:  {
    __typename: "Social_network_stack0",
    id: string,
    formid: string | null,
    hours_month_socializing: number | null,
    different_friends: number | null,
    hours_week_socializing: number | null,
  } | null,
};

export type OnCreateSocialNetworkStack1Subscription = {
  onCreateSocial_network_stack1:  {
    __typename: "Social_network_stack1",
    id: string,
    formid: string | null,
    number_socialize: number | null,
  } | null,
};

export type OnCreateSocialNetworkStack2Subscription = {
  onCreateSocial_network_stack2:  {
    __typename: "Social_network_stack2",
    id: string,
    formid: string | null,
    rely_on_them: string | null,
    open_up_to_them: string | null,
    too_many_demands: string | null,
    argue: string | null,
  } | null,
};

export type OnCreateSocialNetworkStack3Subscription = {
  onCreateSocial_network_stack3:  {
    __typename: "Social_network_stack3",
    id: string,
    formid: string | null,
    easy_become_emotionally_close: number | null,
    want_to_be: number | null,
  } | null,
};

export type OnCreateSocialNetworkStack4Subscription = {
  onCreateSocial_network_stack4:  {
    __typename: "Social_network_stack4",
    id: string,
    formid: string | null,
    uncomfortable_getting_close: number | null,
    comfortable_without: number | null,
  } | null,
};

export type OnCreateSocialNetworkStack5Subscription = {
  onCreateSocial_network_stack5:  {
    __typename: "Social_network_stack5",
    id: string,
    formid: string | null,
    depend_on_you: string | null,
    important_to_them: string | null,
    interested: string | null,
    miss_you: string | null,
    pay_attention: string | null,
  } | null,
};

export type OnCreateStressfulLifeExperienceStack0Subscription = {
  onCreateStressful_life_experience_stack0:  {
    __typename: "Stressful_life_experience_stack0",
    id: string,
    formid: string | null,
    how_old_depression: number | null,
  } | null,
};

export type OnCreateStressfulLifeExperienceStack1Subscription = {
  onCreateStressful_life_experience_stack1:  {
    __typename: "Stressful_life_experience_stack1",
    id: string,
    formid: string | null,
    disturbing_memories: string | null,
    avoided_thinking: string | null,
    physical_reaction: string | null,
    avoided_activities: string | null,
    interfered_with_qol: string | null,
  } | null,
};

export type OnCreateStressfulLifeExperienceStack2Subscription = {
  onCreateStressful_life_experience_stack2:  {
    __typename: "Stressful_life_experience_stack2",
    id: string,
    formid: string | null,
    first_time: number | null,
    years: number | null,
    months: number | null,
    days: number | null,
  } | null,
};

export type OnCreateStressfulLifeExperienceStack3Subscription = {
  onCreateStressful_life_experience_stack3:  {
    __typename: "Stressful_life_experience_stack3",
    id: string,
    formid: string | null,
    life_threatening: number | null,
    any_other: number | null,
    motor_vehicle: number | null,
    serious_betrayal: number | null,
    death_close_friend: number | null,
    serious_legal: number | null,
    break_up: number | null,
  } | null,
};

export type OnCreateStressfulLifeExperienceStack4Subscription = {
  onCreateStressful_life_experience_stack4:  {
    __typename: "Stressful_life_experience_stack4",
    id: string,
    formid: string | null,
    other_stressful_event: string | null,
    love_life: string | null,
    career: string | null,
    friendship: string | null,
    other_loved_ones: string | null,
    health: string | null,
    relationship_family: string | null,
    health_loved_ones: string | null,
    life_overall: string | null,
  } | null,
};

export type OnCreateStressfulLifeExperienceStack5Subscription = {
  onCreateStressful_life_experience_stack5:  {
    __typename: "Stressful_life_experience_stack5",
    id: string,
    formid: string | null,
    keep_calm: string | null,
    get_along: string | null,
    manage_stress: string | null,
    sense_humor: string | null,
    new_approaches: string | null,
  } | null,
};

export type OnCreateStressfulLifeExperienceStack6Subscription = {
  onCreateStressful_life_experience_stack6:  {
    __typename: "Stressful_life_experience_stack6",
    id: string,
    formid: string | null,
    promotion: number | null,
    health_major: number | null,
    finances: number | null,
    love_life: number | null,
    other_positive: number | null,
  } | null,
};

export type OnCreateYourHealthStack0Subscription = {
  onCreateYour_health_stack0:  {
    __typename: "Your_health_stack0",
    id: string,
    formid: string | null,
    feet_height: string | null,
    weight: number | null,
  } | null,
};

export type OnCreateYourHealthStack1Subscription = {
  onCreateYour_health_stack1:  {
    __typename: "Your_health_stack1",
    id: string,
    formid: string | null,
    clotting: number | null,
    high_blood_pressure: number | null,
    heart_attack: number | null,
    high_cholesterol: number | null,
    any_other_cvd: number | null,
    asthma: number | null,
    copd: number | null,
    seasonal_allergies: number | null,
    osteoarthritis: number | null,
    rheumatoid_arthritis: number | null,
    osteoporosis: number | null,
    add_adhd: number | null,
    depression: number | null,
    manic_disorder: number | null,
    panic_disorder: number | null,
    ptsd: number | null,
    substance_abuse: number | null,
    any_other_psych: number | null,
    skin_cancer: number | null,
    any_other_cancer: number | null,
  } | null,
};

export type OnCreateYourHealthStack2Subscription = {
  onCreateYour_health_stack2:  {
    __typename: "Your_health_stack2",
    id: string,
    formid: string | null,
    autoimmune_disorder: number | null,
    inflammatory_skin_disorder: number | null,
    diabetes_insulin_dependant: number | null,
    diabetes_non_insulin_dependant: number | null,
    migraine: number | null,
    ulcer_stomach: number | null,
    acid_reflux: number | null,
    thyroid_disorder: number | null,
    chronic_pain: number | null,
    none: number | null,
  } | null,
};

export type OnCreateYourHealthStack3Subscription = {
  onCreateYour_health_stack3:  {
    __typename: "Your_health_stack3",
    id: string,
    formid: string | null,
    dizziness: string | null,
    shortness_of_breath: string | null,
    heart_pound: string | null,
    restless_tense: string | null,
    anxious_nervous: string | null,
    irritable_annoyed: string | null,
  } | null,
};

export type OnCreateYourHealthStack4Subscription = {
  onCreateYour_health_stack4:  {
    __typename: "Your_health_stack4",
    id: string,
    formid: string | null,
    memory: string | null,
    talking_slow: string | null,
    heart_pound: string | null,
    difficulty_concentrating: string | null,
    sleeping_problems: string | null,
    constipation: string | null,
    nausea: string | null,
  } | null,
};

export type OnCreateYourHealthStack5Subscription = {
  onCreateYour_health_stack5:  {
    __typename: "Your_health_stack5",
    id: string,
    formid: string | null,
    back_pain: string | null,
    neck_pain: string | null,
    stomach_pain: string | null,
    chest_pain: string | null,
    headache: string | null,
    uncontrollable_anxiety: string | null,
  } | null,
};

export type OnCreateYourHealthStack6Subscription = {
  onCreateYour_health_stack6:  {
    __typename: "Your_health_stack6",
    id: string,
    formid: string | null,
    how_long_sleep_problems: string | null,
    hours_sleep: number | null,
    energy_scale: number | null,
  } | null,
};

export type OnCreateYourHealthStack7Subscription = {
  onCreateYour_health_stack7:  {
    __typename: "Your_health_stack7",
    id: string,
    formid: string | null,
    how_long_headaches: string | null,
    how_long_pain: string | null,
    pain_scale: number | null,
  } | null,
};

export type OnCreateYourHealthStack8Subscription = {
  onCreateYour_health_stack8:  {
    __typename: "Your_health_stack8",
    id: string,
    formid: string | null,
    home_management: number | null,
    ability_work: number | null,
    close_relationships: number | null,
    social: number | null,
    quality_of_work: number | null,
  } | null,
};

export type OnCreateYourHealthStack9Subscription = {
  onCreateYour_health_stack9:  {
    __typename: "Your_health_stack9",
    id: string,
    formid: string | null,
    unable_to_work: number | null,
    cut_back_work: number | null,
  } | null,
};

export type OnCreateYourPersonalityStack0Subscription = {
  onCreateYour_personality_stack0:  {
    __typename: "Your_personality_stack0",
    id: string,
    formid: string | null,
    reserved: string | null,
    broad_minded: string | null,
    helpful: string | null,
    outgoing: string | null,
    moody: string | null,
    critical: string | null,
    adventerous: string | null,
  } | null,
};

export type OnCreateYourPersonalityStack1Subscription = {
  onCreateYour_personality_stack1:  {
    __typename: "Your_personality_stack1",
    id: string,
    formid: string | null,
    soft_hearted: string | null,
    calm: string | null,
    creative: string | null,
    outgsensitive: string | null,
    organized: string | null,
    friendly: string | null,
  } | null,
};

export type OnCreateYourPersonalityStack2Subscription = {
  onCreateYour_personality_stack2:  {
    __typename: "Your_personality_stack2",
    id: string,
    formid: string | null,
    careless: string | null,
    talkative: string | null,
    uncompassionate: string | null,
    easily_upset: string | null,
    sympathetic: string | null,
    curious: string | null,
  } | null,
};

export type OnCreateYourPersonalityStack3Subscription = {
  onCreateYour_personality_stack3:  {
    __typename: "Your_personality_stack3",
    id: string,
    formid: string | null,
    interests: string | null,
    direction: string | null,
    opinions: string | null,
    think_a_lot: string | null,
    do_a_lot: string | null,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
    percentage: number,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
    percentage: number,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
    percentage: number,
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
      inputConfirmation: string,
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
      percentage: number,
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
      inputConfirmation: string,
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
      percentage: number,
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
      inputConfirmation: string,
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
      percentage: number,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
          inputConfirmation: string,
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
          inputConfirmation: string,
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
    inputConfirmation: string,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
          inputConfirmation: string,
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
          inputConfirmation: string,
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
    inputConfirmation: string,
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
          inputConfirmation: string,
          createdAt: string,
          updatedAt: string,
        } | null,
        form:  {
          __typename: "Form",
          id: string,
          UserID: string,
          finished: boolean | null,
          percentage: number,
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
          inputConfirmation: string,
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
          inputConfirmation: string,
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
    inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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
        inputConfirmation: string,
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
