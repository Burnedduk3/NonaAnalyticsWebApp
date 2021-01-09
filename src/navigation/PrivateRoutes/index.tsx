import React from 'react';
import {Route} from 'react-router-dom';
import RoutingConstants from '../CONSTANTS/RoutingConstants';
import FormPage from '../../Pages/Private/Form/Questioner';

const PrivateRoutes : React.FC = (): JSX.Element => {
  return (
    <Route
      exact
      path={RoutingConstants.dinamicForm.path}
      component={FormPage}
    />
  );
};

export default PrivateRoutes;
