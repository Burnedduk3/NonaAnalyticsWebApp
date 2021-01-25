import {IQuestionerState} from '../../Questioner/interface';
import uniqid from 'uniqid';
import {API, graphqlOperation} from 'aws-amplify';
import {createCreateUserResponse} from '../../../../../graphql/mutations';
import {CreateCreateUserResponseMutationVariables} from '../../../../../API';

export interface ISaveDataAuroraParams {
    section:string,
    subSection: string,
    stack: string
}

const saveQuestionsToAurora = async (
    {stack, subSection, section}:ISaveDataAuroraParams,
    questions:IQuestionerState,
    formId: string,
) => {
  const replacedSubSection = subSection.replaceAll(/[\s-&]+/g, '');
  const replacedStack = `stack${stack}`;
  await Object.entries(questions).map(async (item: any)=>{
    const uniqueId = uniqid(replacedSubSection, replacedStack);
    const parameters: CreateCreateUserResponseMutationVariables = {
      createCreateUserResponseInput: {
        formID: formId,
        ID: uniqueId,
        questionId: item[0],
        response: item[1].response,
        subSection: subSection,
        section: section,
      },
    };

    await API.graphql(
        graphqlOperation(
            createCreateUserResponse,
            {
              ...parameters,
            },
        ),
    );
  });
};

export default saveQuestionsToAurora;
