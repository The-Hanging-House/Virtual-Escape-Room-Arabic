import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Language from "./components/layout/Language";
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

// Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";


import "./App.css";

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
          <Route exact path="/" component={Language} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/home" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
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
              <PrivateRoute exact path="/dashboard-ar" component={Dashboard} />
              <PrivateRoute exact path="/dashboard2-ar" component={Dashboard2} />
            </Switch>
          </section>
        </BrowserRouter>
    </Provider>
  );
};
export default App;
