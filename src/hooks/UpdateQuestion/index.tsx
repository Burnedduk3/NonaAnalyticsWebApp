import { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_RESPONSE } from '../../Config/api/Graphql/QuerySintax';
import { useFormQuestionState } from '../../Context/FormQuestions/Provider';
import { IUpdateAnswerResponse } from '../../Config/api/Graphql/Types';
import { UPDATE_ANSWERED_QUESTIONS } from '../../Context/FormQuestions/ActionTypes';

export interface IUpdateResponseParams {
  variables: {
    questionId: string;
    newResponse: string;
  };
}

export const useUpdateResponse = () => {
  const [updateResponse, { data, loading }] = useMutation(UPDATE_RESPONSE);
  const [queryParams, setQueryParams] = useState<IUpdateResponseParams>();
  const formContext = useFormQuestionState();
  const saveData = async (params: IUpdateResponseParams) => {
    try {
      setQueryParams(params);
      await updateResponse(params);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    try {
      if (!loading && data && queryParams) {
        const { newResponse, questionId } = queryParams.variables;
        const rawResponse: IUpdateAnswerResponse = data;
        const {
          error,
          message,
        } = rawResponse.UserInteractionMutation.updateQuestionResponse;

        if (error) {
          throw new Error(message);
        }
        const id =
          rawResponse.UserInteractionMutation.updateQuestionResponse.data.id;
        formContext.formStateDispatch({
          type: UPDATE_ANSWERED_QUESTIONS,
          payload: {
            questionToAdd: {
              answer: newResponse,
              id: questionId,
              sendToDB: true,
              responseDbId: id,
            },
          },
        });
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading]);

  return saveData;
};
