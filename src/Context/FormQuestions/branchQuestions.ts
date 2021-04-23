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
    id: "L2",
    logicQuestions: [
      { id: "10", answer: "US" },
    ],
  },
  {
    id: "L3",
    logicQuestions: [
      { id: "10", answer: "Some Other Country" },
    ],
  },
  {
    id: '13',
    logicQuestions: [{id: '12', answer: 'Yes'}]
  },
  {
    id: '18',
    logicQuestions: [{id: '17', answer: 'Never Married'}]
  },
  {
    id: '18',
    logicQuestions: [{id: '12', answer: 'Divorced'}]
  },
  {
    id: '18',
    logicQuestions: [{id: '12', answer: 'Separated'}]
  },
  {
    id: '18',
    logicQuestions: [{id: '12', answer: 'Widowed'}]
  },
  {
    id: '20',
    logicQuestions: [{id: '19', answer: 'FEMALE & >0'}]
  },
  {
    id: '21',
    logicQuestions: [{id: '19', answer: 'FEMALE & >0'}]
  },
  {
    id: '22',
    logicQuestions: [{id: '19', answer: 'FEMALE & >0'}]
  },
  {
    id: '23',
    logicQuestions: [{id: '19', answer: 'FEMALE & >0'}]
  },
  {
    id: '23',
    logicQuestions: [{id: '20', answer: 'Yes'}]
  },
];
