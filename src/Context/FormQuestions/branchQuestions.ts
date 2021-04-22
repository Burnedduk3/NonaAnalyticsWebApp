export interface IBranchingLogic {
  id: string
  logicQuestions: IQoption[]
}

export interface IQoption{
  id: string
  answer: string
}

export const BranchingLogic: IBranchingLogic[] = [
  {
    id: '13',
    logicQuestions: [{id: '12', answer: 'Yes'}]
  },
];
