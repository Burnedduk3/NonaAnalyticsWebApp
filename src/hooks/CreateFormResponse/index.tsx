import {useState, useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {CREATE_RESPONSE} from '../../Config/api/Graphql/QuerySintax';
import {useFormQuestionState} from '../../Context/FormQuestions/Provider';
import {
  UPDATE_ANSWERED_QUESTIONS,
} from '../../Context/FormQuestions/ActionTypes';
import {ICreateAnswerResponse} from '../../Config/api/Graphql/Types';
import {Auth} from 'aws-amplify';

export interface ISaveResponseParams {
    variables:{
        formID: string
        questionID: string
        response: string
    }
}

export const useSaveResponses = () => {
  const [createResponse, {data, loading}] = useMutation(CREATE_RESPONSE);
  const [queryParams, setQueryParams] = useState<ISaveResponseParams>();
  const formContext = useFormQuestionState();
  const saveData = async (params: ISaveResponseParams) =>{
    try {
      setQueryParams(params);
      await createResponse(params);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    try {
      if (!loading && data && queryParams) {
        const {questionID, response} = queryParams.variables;
        const rawResponse: ICreateAnswerResponse = data;
        const id = rawResponse.UserInteractionMutation.createResponse.data.id;
        formContext.formStateDispatch({
          type: UPDATE_ANSWERED_QUESTIONS,
          payload: {
            questionToAdd: {
              answer: response,
              id: questionID,
              sendToDB: true,
              responseDbId: id,
            },
          },
        },
        );
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading]);

  return saveData;
};
