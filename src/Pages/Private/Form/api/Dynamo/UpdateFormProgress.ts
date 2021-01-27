import {API, graphqlOperation} from 'aws-amplify';
import {updateForm} from '../../../../../graphql/mutations';
import {UpdateFormMutationVariables} from '../../../../../API';

const updateFormProgress = async (
    currentForm: string | undefined,
    formProgress: number | undefined,
) => {
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
    if (updatedForm.errors) {
      throw new Error('Error sending responses to de Database');
    }
  }
};


export default updateFormProgress;
