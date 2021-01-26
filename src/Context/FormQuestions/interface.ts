
export interface IFormQuestionsContextState{
    sections: Array<ISection> | null;
    currentSection: ISection | null;
    nextSection: ISection | null;
    previousSection: ISection | null;
    currentSubSectionIndex: number | null;
    subSectionsArray: Array<ISubSection> | null;
    currentStack: number | null;
}

export interface IFormQuestionsContextPayload{
    section?: ISection;
    sections?: Array<ISection>
    fetchedSections?: IFormQuestionsContextState
}

export interface IFormQuestionsContextReducer {
    type: string,
    payload: IFormQuestionsContextPayload | undefined,
}

export interface IFormQuestionsContext{
    formState: IFormQuestionsContextState;
    formStateDispatch: React.Dispatch<IFormQuestionsContextReducer>;
}

export interface ISection{
    id: string
    name: string
    order: number
    subSections: Array<ISubSection>
}

export interface ISubSection{
    id: string
    name: string
    order: number
    questions: Array<IQuestion>
    maxStack: number
}

export interface IQuestion{
    id: string,
    items: Array<string> | null
    question: string
    stack: number
    stackPhrase: string | null
    placeHolder: string | null
    imagesPath: string | null
    category: ICategory
    order: number
}

export interface ICategory{
    id: string,
    name: 'Open' | 'YesNo' | 'Combo'
}
