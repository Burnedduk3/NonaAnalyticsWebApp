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
import {IStateQuestionResponse} from './interface';
import RoutingConstants
  from '../../../../navigation/CONSTANTS/RoutingConstants';
import ErrorToContinue from '../Components/ErrorToContinue';
import {useUserState} from '../../../../Context/UserContext/Provider';
import {useHistory} from 'react-router-dom';

import './styles.scss';


const initialState: IStateQuestionResponse = {
  live_play: 'no-responded',
  over18: 'no-responded',
};

const PreQuestionerPage: React.FC = (): JSX.Element =>{
  const applicationState = useApplicationState();
  const userState = useUserState();
  const history = useHistory();
  const [
    responseState,
    setResponseState,
  ] = useState<IStateQuestionResponse>(initialState);

  useEffect(()=>{
    applicationState?.appStateDispatch({type: SHOW_HEADER, payload: undefined});
    applicationState?.appStateDispatch({type: SHOW_FOOTER, payload: undefined});
  }, []);

  const onTakeSurvey = ():void =>{
    if (
      responseState.live_play === 'yes' &&
        responseState.over18 === 'yes' &&
        userState === null
    ) {
      history.push(RoutingConstants.login.path);
    }

    if (
      responseState.live_play === 'yes' &&
        responseState.over18 === 'yes' &&
        userState !== null
    ) {
      history.push(RoutingConstants.dinamicForm.path);
    }
  };


  return (
    <main>
      <YesNoQuestion
        question={CONSTANTS.firstQuestion}
        radioGroup="live_play"
        questionId='live_play'
        setResponse={setResponseState}
        currentState={responseState}
        checked={responseState['live_play']}
      />

      {
        responseState.live_play === 'yes' && <YesNoQuestion
          question={CONSTANTS.secondQuestion}
          radioGroup="over18"
          questionId='over18'
          setResponse={setResponseState}
          currentState={responseState}
          checked={responseState['over18']}
        />
      }
      {
        responseState.live_play === 'yes' &&
        responseState.over18 === 'yes' &&
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
          responseState.live_play === 'no' ||
            responseState.over18 === 'no') &&
        <ErrorToContinue/>
      }
    </main>
  );
};

export default PreQuestionerPage;
