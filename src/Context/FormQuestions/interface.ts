export interface IFormQuestionsContextState{
    sections: Array<ISection> | null;
    currentSection: ISection | null;
    nextSection: ISection | null;
    previous: ISection | null;
}

export interface IFormQuestionsContextPayload{
    section?: ISection;
    sections?: Array<ISection>
    newState?: IFormQuestionsContextState
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
    subSections: any
}

export interface ISubSection{
    id: string
    name: string
    questions: Array<IQuestion>
    maxStack: number
}

export interface IQuestion{
    id: string,
    items: Array<string> | null
    question: string
    stack: number
}
