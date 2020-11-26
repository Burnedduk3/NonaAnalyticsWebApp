import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Public/Home';
import RoutingConstants from '../CONSTANTS/RoutingConstants';
import NotFound from '../../Pages/NotFound';
import UserProvider from '../../Context/UserContext/Provider';
import InitialFormPage from '../../Pages/Form/InitialQuestions';
import FormQuestionProvider from '../../Context/FormQuestions/Provider';
import Questioner from '../../Pages/Form/Questioner';
import UserCurrentFormProvider from '../../Context/UserCurrentForm/Provider';

const RouterConfig = () => (
  <Switch>
    {/* public routes */}
    <Route exact path={RoutingConstants.menu.home.path} component={Home} />
    <Route exact path={RoutingConstants.menu.lifeProject.path} component={Home} />
    <Route exact path={RoutingConstants.menu.innovation.path} component={Home} />
    <Route exact path={RoutingConstants.menu.bePart.path} component={Home} />

    {/* private routes */}
    <UserProvider>
      <UserCurrentFormProvider>
        <FormQuestionProvider>
          <Route exact path={RoutingConstants.form.path} component={InitialFormPage} />
          <Route exact path={`${RoutingConstants.dinamicForm.path}/:section`} component={Questioner} />
        </FormQuestionProvider>
      </UserCurrentFormProvider>
    </UserProvider>
    {/* error 404 */}
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);
export default RouterConfig;
