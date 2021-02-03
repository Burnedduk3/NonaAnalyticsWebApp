import uniqid from 'uniqid';
import {API, graphqlOperation} from 'aws-amplify';
import {createCreateUserResponse} from '../../../../../graphql/mutations';
import {CreateCreateUserResponseMutationVariables} from '../../../../../API';
import {
  IAnsweredQuestion,
} from '../../../../../Context/FormQuestions/interface';

export interface ISaveDataAuroraParams {
    section:string,
    subSection: string,
    stack: string
}

const saveQuestionsToAurora = async (
    {stack, subSection, section}:ISaveDataAuroraParams,
    questions:Array<IAnsweredQuestion>,
    formId: string,
    userId: string,
) => {
  const replacedSubSection = subSection.replaceAll(/[\s-&]+/g, '');
  const replacedStack = `stack${stack}`;
  await questions.map(async (question: IAnsweredQuestion)=>{
    const uniqueId = uniqid(replacedSubSection, replacedStack);
    const parameters: CreateCreateUserResponseMutationVariables = {
      createCreateUserResponseInput: {
        formID: formId,
        ID: uniqueId,
        questionId: question.id,
        response: question.answer,
        subSection: subSection,
        section: section,
        userID: userId,
      },
    };
    if (!question.sendToDB) {
      await API.graphql(
          graphqlOperation(
              createCreateUserResponse,
              {
                ...parameters,
              },
          ),
      );
    }
  });
};

export default saveQuestionsToAurora;
