import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





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