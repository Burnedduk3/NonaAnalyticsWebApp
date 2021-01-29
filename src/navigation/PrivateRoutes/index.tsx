import React from 'react';
import {Route} from 'react-router-dom';
import RoutingConstants from '../CONSTANTS/RoutingConstants';
import FormPage from '../../Pages/Private/Form/Questioner';
import FormQuestionProvider from '../../Context/FormQuestions/Provider';

const PrivateRoutes : React.FC = (): JSX.Element => {
  return (
    <FormQuestionProvider>
      <Route
        exact
        path={`${RoutingConstants.dinamicForm.path}`
        }
        component={FormPage}
      />
    </FormQuestionProvider>
  );
};

export default PrivateRoutes;
