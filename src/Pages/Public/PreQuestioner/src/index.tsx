import React, {useEffect, useState} from 'react';
import {
  SHOW_FOOTER,
  SHOW_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';
import YesNoQuestion from '../../../Private/Form/Components/YesNoQuestion';
import CONSTANTS from './CONSTANTS';
import RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import ErrorToContinue from '../Components/ErrorToContinue';
import {useUserState} from '../../../../Context/UserContext/Provider';
import {useHistory} from 'react-router-dom';

import './styles.scss';
import {IQuestionerState} from '../../../Private/Form/Questioner/interface';
import {
  SEARCH_LOCAL_STORAGE,
} from '../../../../Context/UserContext/ActionTypes';
import {API, graphqlOperation} from 'aws-amplify';
import {createForm} from '../../../../graphql/mutations';
import {
  SET_CURRENT_FORM_ID,
} from '../../../../Context/FormQuestions/ActionTypes';
import {useFormQuestionState} from '../../../../Context/FormQuestions/Provider';


const initialState: IQuestionerState = {
  live_play: {
    order: 0,
    response: 'no-responded',
  },
  over18: {
    response: 'no-responded',
    order: 0,
  },
};

const PreQuestionerPage: React.FC = (): JSX.Element =>{
  const applicationState = useApplicationState();
  const userState = useUserState();
  const formState = useFormQuestionState();
  const history = useHistory();
  const [loading, setLoading] = useState<boolean>(false);
  const [redirect, setRedirect] = useState<boolean>(false);
  const [
    responseState,
    setResponseState,
  ] = useState<IQuestionerState>(initialState);
  useEffect(()=>{
    applicationState?.appStateDispatch({type: SHOW_HEADER, payload: undefined});
    applicationState?.appStateDispatch({type: SHOW_FOOTER, payload: undefined});
    userState.userStateDispatch({
      type: SEARCH_LOCAL_STORAGE,
      payload: undefined,
    });
  }, []);

  const createQuestioner = async () =>{
    setLoading(true);
    const {usernameID} = userState.userState;
    const formData: any = await API.graphql(graphqlOperation(
        createForm,
        {
          input: {
            UserID: usernameID,
            finished: false,
            percentage: 0,
            sentEmail: false,
            consent: false,
          },
        },
    ));
    formState.formStateDispatch(
        {
          type: SET_CURRENT_FORM_ID,
          payload: {
            currentFormID: formData.data.createForm.id,
          },
        },
    );
  };

  useEffect(
      ()=>{
        if (redirect) {
          history.push(`${RoutingConstants.consent.path}`);
        }
      }
      , [loading],
  );

  const onTakeSurvey = ():void =>{
    if (
      responseState.live_play.response === '1' &&
        responseState.over18.response === '1' &&
        userState?.userState.email === ''
    ) {
      history.push(RoutingConstants.login.path);
    }

    if (
      responseState.live_play.response === '1' &&
        responseState.over18.response === '1' &&
        userState?.userState.email !== ''
    ) {
      // eslint-disable-next-line max-len
      createQuestioner().then(()=>{
        setRedirect(true);
        setLoading(false);
      });
    }
  };

  return (
    <main className="StartSurvey">
      <h1 className="titleStartSurvey">Lets Start</h1>
      <YesNoQuestion
        question={CONSTANTS.firstQuestion}
        radioGroup="live_play"
        questionId='live_play'
        setResponse={setResponseState}
        currentState={responseState}
        checked={responseState['live_play'].response}
        order={0}
      />

      {
        responseState.live_play.response === '1' && <YesNoQuestion
          question={CONSTANTS.secondQuestion}
          radioGroup="over18"
          questionId='over18'
          setResponse={setResponseState}
          currentState={responseState}
          checked={responseState['over18'].response}
          order={1}
        />
      }
      {
        responseState.live_play.response === '1' &&
        responseState.over18.response === '1' &&
            <div className="button-container">
              <button
                className="button"
                onClick={onTakeSurvey}
              >
                {CONSTANTS.button_text}
              </button>
            </div>
      }

      {
        (
          responseState.live_play.response === '0' ||
            responseState.over18.response === '0') &&
        <ErrorToContinue/>
      }
    </main>
  );
};

export default PreQuestionerPage;
