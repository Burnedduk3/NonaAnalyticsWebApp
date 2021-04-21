import {useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {UPDATE_FORM_PROGRESS} from '../../Config/api/Graphql/QuerySintax';
import {IUpdateFormProgressResponse} from '../../Config/api/Graphql/Types';

export interface IUpdateFormProgressParams {
    variables:{
        formId: string
        progress: number
    }
}

export const useUpdateFormProgress = () => {
  const [
    updateProgress,
    {data, loading},
  ] = useMutation(UPDATE_FORM_PROGRESS);

  useEffect(()=>{
    try {
      if (!loading && data) {
        const rawResponse: IUpdateFormProgressResponse = data;
        if (
          rawResponse.UserInteractionMutation.updateFormProgress.error
        ) {
          // eslint-disable-next-line max-len
          console.log( rawResponse.UserInteractionMutation.updateFormProgress.message);
          // eslint-disable-next-line max-len
          // console.log(rawResponse.UserInteractionMutation.updateFormProgress.message);
          throw new Error('Unable to update progress try again');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading]);

  return updateProgress;
};
