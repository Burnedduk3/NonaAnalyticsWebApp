import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { START_FORM } from '../../Config/api/Graphql/QuerySintax';
import { IStartForm } from '../../Config/api/Graphql/Types';
import { SET_CURRENT_FORM_ID } from '../../Context/FormQuestions/ActionTypes';
import { useFormQuestionState } from '../../Context/FormQuestions/Provider';

export interface IStartFormParams {
  variables: {
    CognitoPoolId: string;
  };
}

export const useStartForm = () => {
  const [startForm, { data, loading }] = useMutation(START_FORM);
  const formState = useFormQuestionState();

  useEffect(() => {
    try {
      if (!loading && data) {
        const rawResponse: IStartForm = data;
        if (rawResponse.UserInteractionMutation.startForm.error) {
          throw new Error('Unable to update consent try again');
        }
        formState.formStateDispatch({
          type: SET_CURRENT_FORM_ID,
          payload: {
            // eslint-disable-next-line max-len
            currentFormID: rawResponse.UserInteractionMutation.startForm.data.id,
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading]);

  return startForm;
};
