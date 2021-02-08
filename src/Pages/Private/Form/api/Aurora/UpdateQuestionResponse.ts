import {API, graphqlOperation} from 'aws-amplify';
import {updateCreateUserResponse} from '../../../../../graphql/mutations';
import {UpdateCreateUserResponseMutationVariables} from '../../../../../API';

export interface ISaveDataAuroraParams {
    section:string,
    subSection: string,
    stack: string
}

const updateQuestionAtAurora = async (
    questionResponse:string,
    dynamoID: string,
) => {
  const parameters: UpdateCreateUserResponseMutationVariables = {
    updateCreateUserResponseInput: {
      ID: dynamoID,
      response: questionResponse,
    },
  };
  const response: any = await API.graphql(
      graphqlOperation(
          updateCreateUserResponse,
          {
            ...parameters,
          },
      ),
  );
  if (response && response.data &&
        response.data.createCreateUserResponse === null) {
    throw new Error('Error updating to Aurora');
  }
};

export default updateQuestionAtAurora;
