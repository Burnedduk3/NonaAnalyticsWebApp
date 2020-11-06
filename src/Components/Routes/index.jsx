import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Home from '../../Containers/Public/Home';
import RoutingConstants from './RoutingConstants';
import NotFound from '../../Containers/NotFound';
import Footer from '../Footer';
import PublicNavBar from '../Navbar/PublicNavBar';
import Team from '../../Containers/Public/Team';
import LifeProject from '../../Containers/Public/LifeProject';
import MobileApp from '../../Containers/Public/MobileApp';
import LifeProjectPlataform from '../../Containers/Public/LifeProjectPlataform';
import NonaInnovationEcosystem from '../../Containers/Public/NonaInnovationEcosystem';
import Mission from '../../Containers/Public/Mission';

const Routing = () => (
  <>
    <Router>
      <PublicNavBar />
      <Switch>
        <Route exact path={RoutingConstants.menu.home.path} component={Home} />
        <Route exact path={RoutingConstants.menu.team.path} component={Team} />
        <Route exact path={RoutingConstants.menu.lifeProject.path} component={LifeProject} />
        <Route exact path={RoutingConstants.menu.mobileApp.path} component={MobileApp} />
        <Route
          exact
          path={RoutingConstants.menu.nonaInnovationEcosystem.path}
          component={NonaInnovationEcosystem}
        />
        <Route
          exact
          path={RoutingConstants.menu.lifeProjectPlataform.path}
          component={LifeProjectPlataform}
        />
        <Route
          exact
          path={RoutingConstants.menu.mision.path}
          component={Mission}
        />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </Router>
  </>
);
export default Routing;
