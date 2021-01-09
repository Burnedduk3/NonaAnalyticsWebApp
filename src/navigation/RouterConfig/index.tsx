import React from 'react';
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';
import Home from '../../Pages/Public/Home/src';
import LifeProject from '../../Pages/Public/LifeProject/src';
import RoutingConstants from '../CONSTANTS/RoutingConstants';
import NotFound from '../../Pages/NotFound';
// import UserProvider from '../../Context/UserContext/Provider';
// import InitialFormPage from '../../Pages/Form/InitialQuestions';
// import FormQuestionProvider from '../../Context/FormQuestions/Provider';
// import Questioner from '../../Pages/Form/Questioner';
// import UserCurrentFormProvider from '../../Context/UserCurrentForm/Provider';
import BePartPage from '../../Pages/Public/BePart/src';
import PublicHeader from '../../Components/Header/PublicHeader';
import Footer from '../../Components/Footer';
import LoginPage from '../../Pages/Public/Login/src';
import ApplicationStateProvider from '../../Context/ApplicationState/Provider';
import SignUpPage from '../../Pages/Public/Signup/src';
import PrivateRoutes from '../PrivateRoutes';
import PreQuestionerPage from '../../Pages/Public/PreQuestioner/src';

const RouterConfig: React.FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <ApplicationStateProvider>
      <PublicHeader page={location.pathname}/>
      <Switch>
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
          path={RoutingConstants.form.path}
          component={PreQuestionerPage}
        />

        <PrivateRoutes />

        <Route path={RoutingConstants.notFound.path} component={NotFound}/>
        <Redirect to={RoutingConstants.notFound.path}/>
      </Switch>
      <Footer />
    </ApplicationStateProvider>
  );
};
export default RouterConfig;
