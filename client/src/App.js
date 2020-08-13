import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alert from "./components/layout/Alert";
import Dashboard from './components/dashboard/Dashboard';
import Instruction from './components/dashboard/Instruction';
import Dashboard2 from './components/dashboard/Dashboard2';
import Briefing from './components/dashboard/Briefing'
import Briefing2 from './components/dashboard/Briefing2'
import Profile from './components/dashboard/Profile';
import PrivateRoute from './components/routing/PrivateRoute';
import Intro from './components/gameplay/Intro';
// import Timer from './components/timer/Timer'
import Scene1 from './components/gameplay/Scene1';
import Garbage from './components/gameplay/Garbage';
import Scene3 from './components/gameplay/Scene3';
import Portal1Scene3 from './components/gameplay/Portal1Scene3';
import Scene4 from './components/gameplay/Scene4';
import Scene6 from './components/gameplay/Scene6';
import Scene5 from './components/gameplay/Scene5';
import Scene2 from './components/gameplay/Scene2';
import Portal1Scene2 from './components/gameplay/Portal1Scene2';



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
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/instruction" component={Instruction} />
              <PrivateRoute exact path="/dashboard2" component={Dashboard2} />
              <PrivateRoute exact path="/briefing" component={Briefing} />
              <PrivateRoute exact path="/briefing2" component={Briefing2} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/intro" component={Intro} />
              {/* <Timer /> */}
              <PrivateRoute exact path="/scene1" component={Scene1} />
              <PrivateRoute exact path="/garbage" component={Garbage} />
              <PrivateRoute exact path="/scene3" component={Scene3} />
              <PrivateRoute exact path="/portal1scene3" component={Portal1Scene3} />
              <PrivateRoute exact path="/scene4" component={Scene4} />
              <PrivateRoute exact path="/scene6" component={Scene6} />
              <PrivateRoute exact path="/scene5" component={Scene5} />
              <PrivateRoute exact path="/scene2" component={Scene2} />
              <PrivateRoute exact path="/portal1scene2" component={Portal1Scene2} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};
export default App;
