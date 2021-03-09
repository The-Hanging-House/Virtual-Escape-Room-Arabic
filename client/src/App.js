import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from './components/dashboard/Dashboard';
import Instruction from './components/dashboard/Instruction';
import Dashboard2 from './components/dashboard/Dashboard2';
import Briefing from './components/dashboard/Briefing'
// import Briefing2 from './components/dashboard/Briefing2'
// import Profile from './components/dashboard/Profile';
import PrivateRoute from './components/routing/PrivateRoute';
import Intro from './components/gameplay/Intro';
import Scene1 from './components/gameplay/Scene1';
import Garbage from './components/games/garbage/index';
import Scene3 from './components/gameplay/Scene3';
// import Portal1Scene3 from './components/gameplay/Portal1Scene3';
import Scene4 from './components/gameplay/Scene4';
import Scene6 from './components/gameplay/Scene6';
import Scene5 from './components/gameplay/Scene5';
import Scene2 from './components/gameplay/Scene2';
import End from './components/gameplay/End';
import Timesup from './components/gameplay/Timesup';

import Language from "./components/layout/Language";

// Arabic pages
import Landingar from "./components/layout/Landing-ar";
import dashboardar from "./components/dashboard/Dashboard-ar";
import dashboard2ar from "./components/dashboard/Dashboard2-ar";
import Briefingar from './components/dashboard/Briefing-ar'
import Instructionar from './components/dashboard/Instruction-ar';
import Scene1ar from './components/gameplay/Scene1-ar';
import Scene3ar from './components/gameplay/Scene3-ar';
import Scene4ar from './components/gameplay/Scene4-ar';
import Scene6ar from './components/gameplay/Scene6-ar';
import Scene5ar from './components/gameplay/Scene5-ar';
import Scene2ar from './components/gameplay/Scene2-ar';
import Endar from './components/gameplay/End-ar';
import Timesupar from './components/gameplay/Timesup-ar';

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";


import "./App.css";
import "./App-ar.css";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
       <BrowserRouter>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/language" component={Language} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/instruction" component={Instruction} />
              <PrivateRoute exact path="/dashboard2" component={Dashboard2} />
              <PrivateRoute exact path="/briefing" component={Briefing} />
              <PrivateRoute exact path="/intro" component={Intro} />
              <PrivateRoute exact path="/scene1" component={Scene1} />
              <PrivateRoute exact path="/garbage" component={Garbage} />
              <PrivateRoute exact path="/scene3" component={Scene3} />
              <PrivateRoute exact path="/scene4" component={Scene4} />
              <PrivateRoute exact path="/scene6" component={Scene6} />
              <PrivateRoute exact path="/scene5" component={Scene5} />
              <PrivateRoute exact path="/scene2" component={Scene2} />
              <PrivateRoute exact path="/end" component={End} />
              <PrivateRoute exact path="/timesup" component={Timesup} />

              {/* Arabic Pages */}
              {/* <Route exact path="/home-ar" component={Landingar} /> */}
              <PrivateRoute exact path="/dashboard-ar" component={dashboardar} />
              <PrivateRoute exact path="/instruction-ar" component={Instructionar} />
              <PrivateRoute exact path="/dashboard2-ar" component={dashboard2ar} />
              <PrivateRoute exact path="/briefing-ar" component={Briefingar} />
              <PrivateRoute exact path="/scene1-ar" component={Scene1ar} />
              <PrivateRoute exact path="/scene3-ar" component={Scene3ar} />
              <PrivateRoute exact path="/scene4-ar" component={Scene4ar} />
              <PrivateRoute exact path="/scene6-ar" component={Scene6ar} />
              <PrivateRoute exact path="/scene5-ar" component={Scene5ar} />
              <PrivateRoute exact path="/scene2-ar" component={Scene2ar} />
              <PrivateRoute exact path="/end-ar" component={Endar} />
              <PrivateRoute exact path="/timesup-ar" component={Timesupar} />
            </Switch>
          </section>
        </BrowserRouter>
    </Provider>
  );
};
export default App;
