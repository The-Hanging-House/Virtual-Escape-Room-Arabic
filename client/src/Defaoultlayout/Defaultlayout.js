import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import { Container } from 'reactstrap';
import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
// routes config

 import Timer from '../components/timer/Timer'
class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense  fallback={this.loading()}>
            <Timer />
          </Suspense>
        </AppHeader>
        <div className="app-body">
         
          <main className="main">
            {/* <AppBreadcrumb appRoutes={routes} router={router}/> */}
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {/* {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })} */}
                  <Redirect from="/" to="/home" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              {/* <DefaultAside /> */}
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            {/* <DefaultFooter /> */}
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
