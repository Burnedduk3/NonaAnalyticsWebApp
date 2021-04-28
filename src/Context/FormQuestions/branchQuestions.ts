export interface IBranchingLogic {
    id: string;
    method: "EVERY" | "SOME"
    logicQuestions: IQoption[];
}

export interface IQoption {
    id: string;
    answer: string;
    condition: "EQUAL" | "NOTEQUAL" | "GRATER" | "GRATEREQUAL";
}

export const BranchingLogic: IBranchingLogic[] = [
    {
        id: '272',
        method: "EVERY",
        logicQuestions: [{ id: '10', answer: 'US', condition:"EQUAL" }],
    },
    {
        id: '273',
        method: "EVERY",
        logicQuestions: [{ id: '10', answer: 'Some Other Country', condition:"EQUAL" }],
    },
    {
        id: '13',
        method: "EVERY",
        logicQuestions: [{ id: '12', answer: 'Yes', condition:"EQUAL" }],
    },
    {
        id: '18',
        method: "EVERY",
        logicQuestions: [
            { id: '17', answer: 'Married', condition: "NOTEQUAL" },
        ],
    },
    {
        id: '20',
        method: "EVERY",
        logicQuestions: [
            { id: '7', answer: 'Female', condition: "EQUAL" },
            { id: '19', answer: '0', condition: "GRATER" },
        ],
    },
    {
        id: '21',
        method: "EVERY",
        logicQuestions: [
            { id: '7', answer: 'Female', condition: "EQUAL" },
            { id: '19', answer: '0', condition: "GRATER" },
        ],
    },
    {
        id: '22',
        method: "EVERY",
        logicQuestions: [
            { id: '7', answer: 'Female', condition: "EQUAL" },
            { id: '19', answer: '0', condition: "GRATER" },
        ],
    },
    {
        id: '23',
        method: "EVERY",
        logicQuestions: [
            { id: '7', answer: 'Female', condition: "EQUAL" },
            { id: '19', answer: '0', condition: "GRATER" },
            { id: '21', answer: 'Yes', condition: "EQUAL" },
        ],
    },
    {
        id: '25',
        method: "SOME",
        logicQuestions: [
            { id: '19', answer: '0', condition: "GRATER" },
            { id: '24', answer: '0', condition: "GRATER" },
        ],
    },
    {
        id: '56',
        method: "EVERY",
        logicQuestions: [{ id: '19', answer: '0', condition:"GRATER" }],
    },
    {
        id: '57',
        method: "EVERY",
        logicQuestions: [{ id: '19', answer: '0', condition:"GRATER" }],
    },
    {
        id: '59',
        method: "EVERY",
        logicQuestions: [{ id: '6', answer: '50', condition:"GRATEREQUAL" }],
    },
    {
        id: '60',
        method: "EVERY",
        logicQuestions: [{ id: '6', answer: '50', condition:"GRATEREQUAL" }],
    },
    {
        id: '61',
        method: "EVERY",
        logicQuestions: [{ id: '6', answer: '50', condition:"GRATEREQUAL" }],
    },
    {
        id: '62',
        method: "EVERY",
        logicQuestions: [{ id: '6', answer: '50', condition:"GRATEREQUAL" }],
    },
    {
        id: '63',
        method: "EVERY",
        logicQuestions: [{ id: '6', answer: '50', condition:"GRATEREQUAL" }],
    },
    {
        id: '64',
        method: "EVERY",
        logicQuestions: [
            { id: '6', answer: '50', condition: "GRATEREQUAL" },
            { id: '7', answer: 'Male', condition: "EQUAL"},
        ],
    },
    {
        id: '65',
        method: "EVERY",
        logicQuestions: [
            { id: '6', answer: '40', condition: "GRATEREQUAL" },
            { id: '7', answer: 'Female', condition: "EQUAL" },
        ],
    },
    {
        id: '66',
        method: "EVERY",
        logicQuestions: [{ id: '7', answer: 'Female', condition:"EQUAL" }],
    },
    {
        id: '67',
        method: "EVERY",
        logicQuestions: [{ id: '7', answer: 'Female', condition:"EQUAL" }],
    },
    {
        id: '77',
        method: "EVERY",
        logicQuestions: [{ id: '7', answer: 'Female', condition:"EQUAL" }],
    },
    {
        id: '88',
                method: "EVERY",

        logicQuestions: [{ id: '85', answer: '0', condition:"GRATER" }],
    },
    {
        id: '90',
                method: "EVERY",

        logicQuestions: [{ id: '86', answer: '0', condition:"GRATER" }],
    },
    {
        id: '91',
                method: "EVERY",

        logicQuestions: [{ id: '87', answer: '0', condition:"GRATER" }],
    },
    {
        id: '95',
                method: "EVERY",

        logicQuestions: [{ id: '94', answer: 'Yes', condition:"EQUAL" }],
    },
    {
        id: '96',
                method: "EVERY",

        logicQuestions: [{ id: '94', answer: 'Yes', condition:"EQUAL" }],
    },
    {
        id: '97',
                method: "EVERY",

        logicQuestions: [{ id: '94', answer: 'Yes', condition:"EQUAL" }],
    },
    {
        id: '99',
                method: "EVERY",

        logicQuestions: [{ id: '98', answer: 'Yes', condition:"EQUAL" }],
    },
    {
        id: '100',
                method: "EVERY",

        logicQuestions: [{ id: '98', answer: 'Yes', condition:"EQUAL" }],
    },
    {
        id: '101',
                method: "EVERY",

        logicQuestions: [{ id: '98', answer: 'Yes', condition:"EQUAL" }],
    },
    {
        id: '111',
                method: "EVERY",

        logicQuestions: [{ id: '110', answer: 'Yes', condition:"EQUAL" }],
    },
    {
        id: '116',
                method: "EVERY",

        logicQuestions: [{ id: '115', answer: '0', condition:"GRATER" }],
    },
    {
        id: '131',
                method: "EVERY",

        logicQuestions: [{ id: '130', answer: '0', condition:"GRATER" }],
    },
    {
        id: '132',
                method: "EVERY",

        logicQuestions: [{ id: '130', answer: '0', condition:"GRATER" }],
    },
    {
        id: '133',
                method: "EVERY",

        logicQuestions: [{ id: '130', answer: '0', condition:"GRATER" }],
    },
    {
        id: '134',
                method: "EVERY",

        logicQuestions: [{ id: '130', answer: '0', condition:"GRATER" }],
    },
    {
        id: '190',
                method: "EVERY",

        logicQuestions: [
            { id: '26', answer: 'Full-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Part-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Self-employed', condition:"EQUAL" },
            { id: '26', answer: 'On maternity leave', condition:"EQUAL" },
            { id: '26', answer: 'On illness leave', condition:"EQUAL" },
        ],
    },
    {
        id: '191',
                method: "EVERY",

        logicQuestions: [
            { id: '26', answer: 'Full-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Part-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Self-employed', condition:"EQUAL" },
            { id: '26', answer: 'On maternity leave', condition:"EQUAL" },
            { id: '26', answer: 'On illness leave', condition:"EQUAL" },
        ],
    },
    {
        id: '192',
                method: "EVERY",

        logicQuestions: [
            { id: '26', answer: 'Full-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Part-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Self-employed', condition:"EQUAL" },
            { id: '26', answer: 'On maternity leave', condition:"EQUAL" },
            { id: '26', answer: 'On illness leave', condition:"EQUAL" },
        ],
    },
    {
        id: '193',
                method: "EVERY",

        logicQuestions: [
            { id: '26', answer: 'Full-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Part-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Self-employed', condition:"EQUAL" },
            { id: '26', answer: 'On maternity leave', condition:"EQUAL" },
            { id: '26', answer: 'On illness leave', condition:"EQUAL" },
        ],
    },
    {
        id: '194',
                method: "EVERY",

        logicQuestions: [
            { id: '26', answer: 'Full-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Part-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Self-employed', condition:"EQUAL" },
            { id: '26', answer: 'On maternity leave', condition:"EQUAL" },
            { id: '26', answer: 'On illness leave', condition:"EQUAL" },
        ],
    },
    {
        id: '195',
                method: "EVERY",

        logicQuestions: [
            { id: '26', answer: 'Full-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Part-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Self-employed', condition:"EQUAL" },
            { id: '26', answer: 'On maternity leave', condition:"EQUAL" },
            { id: '26', answer: 'On illness leave', condition:"EQUAL" },
        ],
    },
    {
        id: '196',
                method: "EVERY",

        logicQuestions: [
            { id: '26', answer: 'Full-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Part-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Self-employed', condition:"EQUAL" },
            { id: '26', answer: 'On maternity leave', condition:"EQUAL" },
            { id: '26', answer: 'On illness leave', condition:"EQUAL" },
        ],
    },
    {
        id: '197',
                method: "EVERY",

        logicQuestions: [
            { id: '26', answer: 'Full-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Part-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Self-employed', condition:"EQUAL" },
            { id: '26', answer: 'On maternity leave', condition:"EQUAL" },
            { id: '26', answer: 'On illness leave', condition:"EQUAL" },
        ],
    },
    {
        id: '198',
                method: "EVERY",

        logicQuestions: [
            { id: '26', answer: 'Full-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Part-time employment', condition:"EQUAL" },
            { id: '26', answer: 'Self-employed', condition:"EQUAL" },
            { id: '26', answer: 'On maternity leave', condition:"EQUAL" },
            { id: '26', answer: 'On illness leave', condition:"EQUAL" },
        ],
    },
    {
        id: '200',
                method: "EVERY",

        logicQuestions: [{ id: '199', answer: '0', condition:"GRATER" }],
    },
    {
        id: '202',
                method: "EVERY",

        logicQuestions: [{ id: '201', answer: '0', condition:"GRATER" }],
    },
];
