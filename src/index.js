import React from "react";
import ReactDOM from "react-dom";
import LandingPage from "./Landing";
import Visualization from "./Visualization";
import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import MapChart from "./MapChart";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/visualization" component={Visualization} />
      </Switch>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
