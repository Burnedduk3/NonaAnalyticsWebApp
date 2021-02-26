
export interface IFormQuestionsContextState{
    sections: Array<ISection>;
    questionsAnswered: Array<IAnsweredQuestion>;
    totalQuestions: number,
    currentProgress: number,
    showableQuestions: Array<IQuestion>;
    currentSection: ISection | null;
    currentSubSection: ISubSection | null;
    currentStack: number;
    finished: boolean;
    currentFormID: string;
}

export interface IFormQuestionsContextPayload{
    section?: ISection;
    sections?: Array<ISection>
    fetchedSections?: IFormQuestionsContextState
    questionToAdd?: IAnsweredQuestionPayload
    subSectionName?: string
    currentFormID?: string
    order?: number
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

export interface IAnsweredQuestion{
    id: string
    answer: string
    responseDbId: string | undefined
    sendToDB: boolean | undefined
    validation: string
}

export interface IAnsweredQuestionPayload{
    id: string
    answer: string
    responseDbId?: string | undefined
    sendToDB?: boolean
    validation?: string
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
    imagesPath: Array<string> | null
    category: ICategory
    order: number
    inputConfirmation: string
}

export interface ICategory{
    id: string,
    name: 'Open' | 'YesNo' | 'Combo'
}
