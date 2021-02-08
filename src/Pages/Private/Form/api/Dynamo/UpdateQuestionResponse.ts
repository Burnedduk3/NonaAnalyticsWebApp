import {API, graphqlOperation} from 'aws-amplify';
import {updateFormQuestion} from '../../../../../graphql/mutations';

const updateQuestionAtDynamo = async (
    questionDbID:string,
    questionResponse:string,
):Promise<void> => {
  const {errors}: any = await API.graphql(
      graphqlOperation(
          updateFormQuestion,
          {
            input: {
              id: questionDbID,
              response: questionResponse,
            },
          },
      ),
  );
  if (errors) {
    throw new Error('Error sending responses to de Database');
  }
};


export default updateQuestionAtDynamo;
