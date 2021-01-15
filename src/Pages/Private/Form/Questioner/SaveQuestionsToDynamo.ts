import {API, graphqlOperation} from 'aws-amplify';
import {createFormQuestion} from '../../../../graphql/mutations';

const saveQuestionsToDynamo = async (
    questionID:string,
    questionResponse:string | unknown,
    currentForm: string | undefined,
) => {
  const {errors}: any = await API.graphql(
      graphqlOperation(
          createFormQuestion,
          {
            input: {
              formQuestionFormId: currentForm,
              formQuestionQuestionId: questionID,
              response: questionResponse,
            },
          },
      ),
  );

  if (errors) {
    throw new Error('Error sending responses to de Database');
  }
};


export default saveQuestionsToDynamo;
