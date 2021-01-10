export interface IFormQuestionsContextState{
    formID: string;
    questions: Array<IQuestion>;

}

export interface IFormQuestionsContextPayload{
    question: IQuestion;
    questions?: Array<IQuestion>;
}

export interface IFormQuestionsContextReducer{
    type: string,
    payload: IFormQuestionsContextPayload,
}

export interface IQuestion {
    id: string,
    question: string,
    items: Array< string | null > | null,
}

export interface IFormQuestionsContext{
    appState: IFormQuestionsContextState;
    appStateDispatch: React.Dispatch<IFormQuestionsContextReducer>;
}
