import React from "react";
import { Button, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <header className="Landing-header">
      <Header id="polly-text">Polly's</Header>
      <Header inverted id="office-hours-text">
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
