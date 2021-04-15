import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import RoutingConstants from '../CONSTANTS/RoutingConstants';

interface IPrivateRoutesProps {
    path: string
    PrivateComponent: any
}

const PrivateRoutes : React.FC<IPrivateRoutesProps> = (
    {path, PrivateComponent, ...rest}:IPrivateRoutesProps,
): JSX.Element => {
  return (
    <Route
      {...rest}
      exact
      path={path}
      render={
        (props) =>
          localStorage.getItem('token') ? (
              <PrivateComponent {...props}/>
              ):
            (
                <Redirect
                  to={RoutingConstants.login.path}
                />
            )
      }
    />
  );
};

export default PrivateRoutes;
