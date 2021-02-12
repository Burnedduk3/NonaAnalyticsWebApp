import React, {useEffect} from 'react';
import './styles.scss';
import {HIDE_FOOTER} from '../../../../Context/ApplicationState/ActionTypes';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';

const Consent: React.FC = ():JSX.Element =>{
  const applicationState = useApplicationState();
  useEffect(()=>{
    applicationState.appStateDispatch({type: HIDE_FOOTER, payload: undefined});
  },
  []);
  return <>
    <main className="consent-container">
      <div>
        <h1>Consent page</h1>
      </div>
    </main>
  </>;
};

export default Consent;
