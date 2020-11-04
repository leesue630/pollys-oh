import React from "react";
import { Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <header className="Landing-header">
      <Header
        id="polly-text"
        size="huge"
        style={{
          fontFamily: "Comic Sans MS, Comic Sans, Noteworthy, sans-serif",
        }}
      >
        Polly's
      </Header>
      <Header inverted id="office-hours-text" size="huge">
        Office Hours
      </Header>
      <Link to="/queue">
        <Button color="blue" size="big">
          JOIN
        </Button>
      </Link>
    </header>
  );
}

export default LandingPage;
