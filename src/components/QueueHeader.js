// modules
import React from "react";
import { Segment, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

function QueueHeader() {
  return (
    <Segment basic color="red" inverted vertical>
      <Header as="h1" inverted>
        <Link to="/" className="link">
          15150: Polly's Office Hours
        </Link>
      </Header>
    </Segment>
  );
}

export default QueueHeader;
