import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import Home from '../../Pages/Public/Home';
import LifeProject from '../../Pages/Public/LifeProject';
import RoutingConstants from '../CONSTANTS/RoutingConstants';
import NotFound from '../../Pages/NotFound';
// import UserProvider from '../../Context/UserContext/Provider';
// import InitialFormPage from '../../Pages/Form/InitialQuestions';
// import FormQuestionProvider from '../../Context/FormQuestions/Provider';
// import Questioner from '../../Pages/Form/Questioner';
// import UserCurrentFormProvider from '../../Context/UserCurrentForm/Provider';
import BePartPage from '../../Pages/Public/BePart';

const RouterConfig: React.FC = (): JSX.Element => (
  <Switch>
    {/* public routes */}
    <Route exact path={RoutingConstants.menu.home.path} component={Home} />
    <Route
      exact
      path={RoutingConstants.menu.lifeProject.path}
      component={LifeProject}
    />
    <Route
      exact
      path={RoutingConstants.menu.innovation.path}
      component={Home}
    />
    <Route
      exact
      path={RoutingConstants.menu.bePart.path}
      component={BePartPage}
    />

    {/* private routes */}
    {/* <UserProvider>*/}
    {/*  <UserCurrentFormProvider>*/}
    {/*    <FormQuestionProvider>*/}
    {/* eslint-disable-next-line max-len */}
    {/*      <Route exact path={RoutingConstants.form.path} component={InitialFormPage} />*/}
    {/* eslint-disable-next-line max-len */}
    {/*      <Route exact path={`${RoutingConstants.dinamicForm.path}/:section`} component={Questioner} />*/}
    {/*    </FormQuestionProvider>*/}
    {/*  </UserCurrentFormProvider>*/}
    {/* </UserProvider>*/}
    <Route path={RoutingConstants.notFound.path} component={NotFound} />
    <Redirect to={RoutingConstants.notFound.path} />
  </Switch>
);
export default RouterConfig;
