import React, { useEffect } from 'react';
import { SHOW_FOOTER } from '../../../Context/ApplicationState/ActionTypes';
import { useApplicationState } from '../../../Context/ApplicationState/Provider';
import './styles.scss';
import RoutingConstants from '../../../navigation/CONSTANTS/RoutingConstants';
import { useHistory } from 'react-router-dom';
import { useFormQuestionState } from '../../../Context/FormQuestions/Provider';
import { RESET_FORM_STORAGE } from '../../../Context/FormQuestions/ActionTypes';

const EndScreenPage = () => {
  const ApplicationState = useApplicationState();
  const history = useHistory();
  const FormApplicationState = useFormQuestionState();

  useEffect(() => {
    ApplicationState.appStateDispatch({
      type: SHOW_FOOTER,
      payload: undefined,
    });
    ApplicationState.appStateDispatch({
      type: SHOW_FOOTER,
      payload: undefined,
    });
    FormApplicationState.formStateDispatch({
      type: RESET_FORM_STORAGE,
      payload: undefined,
    });
  }, []);

  const redirectHome = () => {
    history.replace(RoutingConstants.menu.home.path);
  };

  return (
    <div className="end-page-container">
      <button className="button next" type="button" onClick={redirectHome}>
        {'Exit Survey'}
      </button>
    </div>
  );
};

export default EndScreenPage;
