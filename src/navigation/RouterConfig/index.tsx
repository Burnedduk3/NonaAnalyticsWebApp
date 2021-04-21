import React from 'react';
import {Redirect, Route, Switch, useLocation} from 'react-router-dom';
import Home from '../../Pages/Public/Home/src';
import LifeProject from '../../Pages/Public/LifeProject/src';
import RoutingConstants from '../CONSTANTS/RoutingConstants';
import NotFound from '../../Pages/NotFound';
import BePartPage from '../../Pages/Public/BePart/src';
import PublicHeader from '../../Components/Header/PublicHeader';
import Footer from '../../Components/Footer';
import LoginPage from '../../Pages/Public/Login/src';
import ApplicationStateProvider from '../../Context/ApplicationState/Provider';
import SignUpPage from '../../Pages/Public/Signup/src';
import PrivateRoutes from '../PrivateRoutes';
import PreQuestionerPage from '../../Pages/Public/PreQuestioner/src';
import UserProvider from '../../Context/UserContext/Provider';
import FormQuestionProvider from '../../Context/FormQuestions/Provider';
import MailVerificationPage from '../../Pages/Public/MailVerification/src';
import Consent from '../../Pages/Private/Consent/src';
import FormPage from '../../Pages/Private/Form/Survey';
import EndScreenPage from '../../Pages/Private/EndScreen';
import UserForms from '../../Pages/Private/UserForms/UserForms';

const RouterConfig: React.FC = (): JSX.Element => {
  const location = useLocation();
  return (
    <ApplicationStateProvider>
      <UserProvider>
        <FormQuestionProvider>
          <PublicHeader page={location.pathname}/>
          <Switch>
            {/* public routes */}
            <Route
              exact
              path={RoutingConstants.menu.home.path}
              component={Home}
            />
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
              path={RoutingConstants.verifyEmail.path}
              component={MailVerificationPage}
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

            {
              <PrivateRoutes
                // @ts-ignore
                PrivateComponent={Consent}
                path={RoutingConstants.consent.path}
              />
            }

            {
              <PrivateRoutes
                // @ts-ignore
                PrivateComponent={FormPage}
                path={RoutingConstants.dinamicForm.path}
              />
            }

            {
              <PrivateRoutes
                // @ts-ignore
                PrivateComponent={EndScreenPage}
                path={RoutingConstants.congrats.path}
              />
            }

            {
              <PrivateRoutes
                // @ts-ignore
                PrivateComponent={UserForms}
                path={RoutingConstants.listUserForms.path}
              />
            }

            <Route path={RoutingConstants.notFound.path} component={NotFound}/>
            <Redirect to={RoutingConstants.notFound.path}/>
          </Switch>
          <Footer />
        </FormQuestionProvider>
      </UserProvider>
    </ApplicationStateProvider>
  );
};
export default RouterConfig;
