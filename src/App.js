import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QueuePage from "./pages/QueuePage.js";
import LandingPage from "./pages/LandingPage.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/queue">
            <QueuePage />
          </Route>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
