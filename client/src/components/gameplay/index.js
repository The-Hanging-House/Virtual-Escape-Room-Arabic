import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from '../routing/routes';

import Timer from '../timer/Timer'

export default class Scene extends Component {
    render() {
        return (
            <div>
                <Timer/>
                <div>
                    
                <Switch>
                  {routes.map((route, idx) => {
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
                  })}
                  <Redirect from="/" to="/scene1" />
                </Switch>
                </div>
            </div>
        )
    }
}
