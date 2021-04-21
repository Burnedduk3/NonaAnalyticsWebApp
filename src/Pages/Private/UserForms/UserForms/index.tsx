import React, {useEffect} from 'react';
import './styles.scss';
import UserFormHeader from '../Components/Header';
import {
  HIDE_FOOTER, HIDE_HEADER,
} from '../../../../Context/ApplicationState/ActionTypes';
import {
  useApplicationState,
} from '../../../../Context/ApplicationState/Provider';


const UserForms: React.FC = (): JSX.Element =>{
  const ApplicationState = useApplicationState();

  useEffect(()=>{
    ApplicationState.appStateDispatch({
      type: HIDE_FOOTER,
      payload: undefined,
    });
    ApplicationState.appStateDispatch({
      type: HIDE_HEADER,
      payload: undefined,
    });
  },
  []);

  return (
    <>
      <UserFormHeader />
      <h1>UserForms</h1>
    </>
  );
};

export default UserForms;
