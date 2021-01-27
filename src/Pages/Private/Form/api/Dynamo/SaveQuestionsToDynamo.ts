import {API, graphqlOperation} from 'aws-amplify';
import {createFormQuestion, updateForm} from '../../../../../graphql/mutations';
import {UpdateFormMutationVariables} from '../../../../../API';

const saveQuestionsToDynamo = async (
    questionID:string,
    questionResponse:string | unknown,
    currentForm: string | undefined,
    formProgress: number | undefined,
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
  if (formProgress && currentForm) {
    const finished = (formProgress > 99.8 && formProgress < 100.1) ||
          formProgress === 100;
    const formMutationVariables: UpdateFormMutationVariables = {
      input: {
        finished,
        id: currentForm,
        percentage: formProgress,
      },
    };
    const updatedForm: any = await API.graphql(
        graphqlOperation(
            updateForm,
            formMutationVariables,
        ),
    );
    console.log(updatedForm);
  }
  if (errors) {
    throw new Error('Error sending responses to de Database');
  }
};


export default saveQuestionsToDynamo;
