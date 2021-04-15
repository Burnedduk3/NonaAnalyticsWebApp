import {useEffect} from 'react';
import {useMutation} from '@apollo/client';
import {UPDATE_FORM_CONSENT} from '../../Config/api/Graphql/QuerySintax';
import {IUpdateFormConsentResponse} from '../../Config/api/Graphql/Types';

export interface IUpdateConsentParams {
  variables:{
    formId: string
  }
}

export const useUpdateConsent = () => {
  const [
    updateConsent,
    {data, loading},
  ] = useMutation(UPDATE_FORM_CONSENT);

  useEffect(()=>{
    try {
      if (!loading && data) {
        const rawResponse: IUpdateFormConsentResponse = data;
        if (
          rawResponse.UserInteractionMutation.updateFormConsent.error
        ) {
          // eslint-disable-next-line max-len
          // console.log(rawResponse.UserInteractionMutation.updateFormConsent.message);
          throw new Error('Unable to update consent try again');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [loading]);

  return updateConsent;
};
