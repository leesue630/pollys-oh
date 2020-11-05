// modules
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import "./App.css";
import QueuePage from "./pages/QueuePage.js";
import LandingPage from "./pages/LandingPage.js";

const googleSheetsApiUrl =
  "https://sheet.best/api/sheets/d2df11db-8916-4609-9bfe-0ffcf79681c3";

function App() {
  const [advices, setAdvices] = React.useState();

  React.useEffect(() => {
    axios
      .get(googleSheetsApiUrl)
      .then((res) => {
        // console.log(res);
        setAdvices(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/queue">
            <QueuePage advices={advices} />
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
