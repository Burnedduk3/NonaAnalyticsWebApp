import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import RoutingConstants from '../CONSTANTS/RoutingConstants';
import Home from '../../Pages/Public/Home/src';
import LifeProject from '../../Pages/Public/LifeProject/src';
import BePartPage from '../../Pages/Public/BePart/src';
import LoginPage from '../../Pages/Public/Login/src';
import SignUpPage from '../../Pages/Public/Signup/src';
import PreQuestionerPage from '../../Pages/Public/PreQuestioner/src';
import {useUserState} from '../../Context/UserContext/Provider';
import {SEARCH_LOCAL_STORAGE} from '../../Context/UserContext/ActionTypes';

const PublicRoutes : React.FC = (): JSX.Element => {
  const UserAuth = useUserState();

  useEffect(
      () =>{
        UserAuth.userStateDispatch({
          type: SEARCH_LOCAL_STORAGE,
          payload: undefined,
        });
      }, [],
  );
  return (
    <>
      {/* public routes */}
      <Route exact path={RoutingConstants.menu.home.path} component={Home}/>
      <Route
        exact
        path={RoutingConstants.menu.lifeProject.path}
        component={LifeProject}
      />
      <Route
        exact
        path={RoutingConstants.menu.bePart.path}
        component={BePartPage}
      />

      <Route
        exact
        path={RoutingConstants.login.path}
        component={LoginPage}
      />

      <Route
        exact
        path={RoutingConstants.signUp.path}
        component={SignUpPage}
      />

      <Route
        exact
        path={RoutingConstants.preSurvey.path}
        component={PreQuestionerPage}
      />
    </>
  );
};

export default PublicRoutes;
