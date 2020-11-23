import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../Pages/Public/Home';
import RoutingConstants from '../CONSTANTS/RoutingConstants';
import NotFound from '../../Pages/NotFound';

const RouterConfig = () => (
  <Switch>
    {/* public routes */}
    <Route exact path={RoutingConstants.menu.home.path} component={Home} />
    <Route exact path={RoutingConstants.menu.lifeProject.path} component={Home} />
    <Route exact path={RoutingConstants.menu.innovation.path} component={Home} />
    <Route exact path={RoutingConstants.menu.bePart.path} component={Home} />

    {/* private routes */}

    {/* error 404 */}
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);
export default RouterConfig;
