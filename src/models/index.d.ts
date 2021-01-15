import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class DemographicInfo {
  readonly id: number;
  readonly bornInUSA: number;
  readonly yearsInFl: number;
  readonly latinx?: number;
  readonly race?: string;
  readonly education?: string;
  readonly maritalstatus?: string;
  readonly livingWithPartner?: number;
  readonly biologicalChildren?: number;
  readonly stepChildren?: number;
  readonly underageChildren?: number;
  readonly gender?: string;
  readonly pregnant?: number;
  constructor(init: ModelInit<DemographicInfo>);
}

export declare class USERINFO {
  readonly id: number;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  constructor(init: ModelInit<USERINFO>);
}

export declare class Employment {
  readonly k1_work?: number;
  readonly k1_willing_adress?: number;
  readonly k1_employer_st?: string;
  readonly k1_employer_city?: string;
  readonly k1_employer_zip?: string;
  readonly k1_employment?: number;
  readonly userid: string;
  constructor(init: ModelInit<Employment>);
}

export declare class HealthBehaviors {
  readonly c1_regular_doctor?: number;
  readonly c1_visits_2yr?: number;
  readonly c3_num_medications?: number;
  readonly c3_vitamins?: number;
  readonly c4_med_time?: number;
  readonly c4_med_day?: number;
  readonly c4_med_forget?: number;
  readonly c4_med_stop?: number;
  readonly userid: string;
  constructor(init: ModelInit<HealthBehaviors>);
}

export declare class OralHealth {
  readonly d1_brush_teeth?: number;
  readonly d1_use_floss?: number;
  readonly d1_use_mouthwash?: number;
  readonly d2_teethbrush_per_day?: number;
  readonly d2_use_cleaning_agent?: number;
  readonly d3_floss_per_day?: number;
  readonly d4_mouthwash_per_day?: number;
  readonly userid: string;
  constructor(init: ModelInit<OralHealth>);
}

export declare class Form {
  readonly id: string;
  readonly formQuestions?: (FormQuestion | null)[];
  readonly UserID: string;
  readonly finished?: boolean;
  constructor(init: ModelInit<Form>);
  static copyOf(source: Form, mutator: (draft: MutableModel<Form>) => MutableModel<Form> | void): Form;
}

export declare class FormQuestion {
  readonly id: string;
  readonly response: string;
  readonly question?: Question;
  readonly form?: Form;
  constructor(init: ModelInit<FormQuestion>);
  static copyOf(source: FormQuestion, mutator: (draft: MutableModel<FormQuestion>) => MutableModel<FormQuestion> | void): FormQuestion;
}

export declare class Question {
  readonly id: string;
  readonly question: string;
  readonly stack: number;
  readonly usedForms?: (FormQuestion | null)[];
  readonly category?: Category;
  readonly subSection?: SubSection;
  readonly items?: (string | null)[];
  constructor(init: ModelInit<Question>);
  static copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly questions?: (Question | null)[];
  constructor(init: ModelInit<Category>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}

export declare class SubSection {
  readonly id: string;
  readonly name: string;
  readonly section?: Section;
  readonly questions?: (Question | null)[];
  constructor(init: ModelInit<SubSection>);
  static copyOf(source: SubSection, mutator: (draft: MutableModel<SubSection>) => MutableModel<SubSection> | void): SubSection;
}

export declare class Section {
  readonly id: string;
  readonly name: string;
  readonly subSections?: (SubSection | null)[];
  constructor(init: ModelInit<Section>);
  static copyOf(source: Section, mutator: (draft: MutableModel<Section>) => MutableModel<Section> | void): Section;
}