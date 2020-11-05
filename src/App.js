import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import QueuePage from "./pages/QueuePage.js";
import LandingPage from "./pages/LandingPage.js";
import axios from "axios";

const googleSheetsApiUrl =
  "https://sheet2api.com/v1/LrEyZUo0SMGg/pollys-office-hours-data";

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
