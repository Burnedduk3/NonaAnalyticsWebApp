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
    questionID:string,
    questionResponse:string,
    currentForm: string,
    userId: string,
    dynamoID: string,
) => {
  const parameters: CreateCreateUserResponseMutationVariables = {
    createCreateUserResponseInput: {
      formID: currentForm,
      ID: dynamoID,
      questionId: questionID,
      response: questionResponse,
      subSection: subSection,
      section: section,
      userID: userId,
    },
  };
  const response: any = await API.graphql(
      graphqlOperation(
          createCreateUserResponse,
          {
            ...parameters,
          },
      ),
  );
  if (response && response.data &&
  response.data.createCreateUserResponse === null) {
    throw new Error('Error saving to Aurora');
  }
};

export default saveQuestionsToAurora;
