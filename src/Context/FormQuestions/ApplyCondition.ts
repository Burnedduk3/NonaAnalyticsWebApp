import {IAnsweredQuestion} from "./interface";
import {IQoption} from "./branchQuestions";

export const ApplyCondition = (questionAnswer: IAnsweredQuestion, condition: IQoption): boolean => {
    switch (condition.condition){
        case "GRATER": {
            const numericAnswer = questionAnswer.answer ? parseInt(questionAnswer.answer.trim()) : 0
            return numericAnswer > parseInt(condition.answer)
        }
        case "EQUAL":{
            return questionAnswer.answer.toLowerCase() === condition.answer.toLowerCase()
        }

        case "GRATEREQUAL": {
            const numericAnswer = questionAnswer.answer ? parseInt(questionAnswer.answer.trim()) : 0
            return numericAnswer > parseInt(condition.answer)
        }

        case "NOTEQUAL": {
            return questionAnswer.answer.toLowerCase() !== condition.answer.toLowerCase()
        }

        default:
            return false
    }
}