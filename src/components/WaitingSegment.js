// modules
import React from "react";
import {
  Segment,
  Header,
  Divider,
  Button,
  Popup,
  Icon,
} from "semantic-ui-react";

function WaitingSegment(props) {
  const helpCount = "15,150";

  return (
    <Segment textAlign="left" padded>
      <Header as="h2" style={{ fontWeight: "lighter" }}>
        Happening always
      </Header>
      <Divider />
      <p>
        The queue is <span className="green">open</span>.
        <br />
        <b>{helpCount} students</b> have been helped.
        <br />
        <b>1 TA</b> is active.{" "}
        <Popup
          content="Polly (Morphism)"
          trigger={<Icon name="group" color="grey" size="small" />}
        />
        <br />
        Waiting time of <b>0 mins</b>.
      </p>
      <Button color="yellow" size="large" onClick={props.enterQueue}>
        SUMMON POLLY
      </Button>
    </Segment>
  );
}

export default WaitingSegment;
