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

const defaultAdvices = [
  {
    advice: "putting parentheses around everything",
    url: "https://www.grammarbook.com/punctuation/parens.asp"
  },
  {
    advice: "tracing through a test case",
    url: "https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1536483973000/photosp/767a27ff-6aa3-4282-b462-cde0b5ea34cc/stock-photo-leaf-cream-medicine-science-health-herbal-hospital-chemical-laboratory-767a27ff-6aa3-4282-b462-cde0b5ea34cc.jpg"
  },
  {
    advice: "taking a break? No seriously",
    url: "https://www.youtube.com/watch?v=g1qexiUP6hg"
  },
  {
    advice: "restarting your computer",
    url: "https://www.google.com/search?client=firefox-b-1-d&sxsrf=ALeKk03aVdHTSb1Bc_J4aL_vSNQLAuWApg%3A1604520733827&ei=HQujX5D8MfirytMPh7KX4A4&q=how+do+i+restart+my+computer&oq=how+do+i+restart+my+computer&gs_lcp=CgZwc3ktYWIQAzIFCAAQyQMyAggAMgIIADICCAAyAggAMgIIADICCAAyAggAMgIIADICCAA6BAgAEEc6BAgAEEM6CwguELEDEMcBEKMCOgcIABDJAxBDOgUIABCRAjoICAAQsQMQgwE6BAguEEM6CAgAEMkDEJECOgUIABCxAzoHCAAQyQMQDToECAAQDVCAFViIL2D5MGgBcAR4AIAB-gGIAaoTkgEGMjUuMy4xmAEAoAEBqgEHZ3dzLXdpesgBCMABAQ&sclient=psy-ab&ved=0ahUKEwjQ_v7C2ensAhX4lXIEHQfZBewQ4dUDCAw&uact=5"
  },
  {
    advice: "coding in Python instead",
    url: "https://www.cs.cmu.edu/~112/"
  },
]

function App() {
  const [advices, setAdvices] = React.useState();

  React.useEffect(() => {
    axios
      .get(googleSheetsApiUrl)
      .then((res) => {
        // console.log(res);
        setAdvices(res.data);
      })
      .catch(() => {
        setAdvices(defaultAdvices)
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
