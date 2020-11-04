import React from "react";
import {
  Button,
  Header,
  Segment,
  Image,
  Popup,
  Divider,
  Icon,
  Grid,
} from "semantic-ui-react";
import polly from "../assets/polly.png";
import pollyStar from "../assets/polly_star.png";
import { Link } from "react-router-dom";

const stage = {
  WAITING: "waiting",
  SUMMONED: "summoned",
  THINKING: "thinking",
  SOLVED: "solved",
};

const prefixes = [
  "Have you tried",
  "What about",
  "You should consider",
  "How about",
  "I recommend",
];

const advices = [
  "putting parentheses around everything",
  "tracing through a test case",
  "re-reading the writeup with extra care",
  "reviewing lecture/lab notes",
  "taking a break? No, seriously",
  "restarting your computer",
  "joining the human oh queue",
  "coding in Python instead",
  "following the types? Unfollowing the types",
  "becoming a tree",
  "taking a deeeeeeeep breath",
];

function QueuePage() {
  const randomIndex = (length) => {
    return Math.floor(Math.random() * length);
  };

  const [currStage, setCurrStage] = React.useState(stage.WAITING);

  const [adviceIndex, setAdviceIndex] = React.useState(
    randomIndex(advices.length)
  );
  const [prefixIndex, setPrefixIndex] = React.useState(
    randomIndex(prefixes.length)
  );

  const pollyImage = (
    <Image
      src={currStage === stage.SOLVED ? pollyStar : polly}
      centered
      size="small"
      className="Polly"
    />
  );

  const currAdvice = (
    <span>
      <Header as="h2">{prefixes[prefixIndex]}...</Header>
      <p>...{advices[adviceIndex]}?</p>
    </span>
  );

  const newAdvice = () => {
    let newIndex = randomIndex(advices.length);
    while (newIndex === adviceIndex) {
      newIndex = randomIndex(advices.length);
    }
    setAdviceIndex(newIndex);
    setPrefixIndex(randomIndex(prefixes.length));
  };

  const renderComponent = () => {
    switch (currStage) {
      case stage.SUMMONED:
        return (
          <Segment textAlign="center" padded>
            {currAdvice}
            {pollyImage}

            <span>
              <Button
                color="green"
                size="small"
                onClick={() => setCurrStage(stage.THINKING)}
                style={{ marginBottom: "5px" }}
              >
                LEMME TRY!
              </Button>
              <Button color="red" size="small" onClick={newAdvice}>
                ALREADY TRIED...
              </Button>
            </span>
          </Segment>
        );
      case stage.THINKING:
        return (
          <Segment textAlign="center" padded>
            {currAdvice}
            {pollyImage}

            <span>
              <Button
                color="green"
                size="small"
                className="margin-button"
                onClick={() => {
                  setCurrStage(stage.SOLVED);
                }}
                style={{ marginBottom: "5px" }}
              >
                I GOT IT!
              </Button>
              <Button
                color="yellow"
                size="small"
                onClick={() => {
                  newAdvice();
                  setCurrStage(stage.SUMMONED);
                }}
              >
                STILL NOT SURE...
              </Button>
            </span>
          </Segment>
        );
      case stage.SOLVED:
        return (
          <Segment textAlign="center">
            <Header as="h3">You're a superstar!</Header>
            {pollyImage}
            <Header as="h2">I knew you could do it!</Header>
            <Button
              color="green"
              size="small"
              onClick={() => setCurrStage(stage.WAITING)}
            >
              BYE, POLLY!
            </Button>
          </Segment>
        );
      default:
        return (
          <Segment textAlign="left" padded>
            <Header as="h2" style={{ fontWeight: "lighter" }}>
              Happening always
            </Header>
            <Divider />
            <p>
              The queue is <span className="green">open</span>.
              <br />
              <b>15,150 students</b> are being helped.
              <br />
              <b>1 TA</b> is active.{" "}
              <Popup
                content="Polly (Morphism)"
                trigger={<Icon name="group" color="grey" size="small" />}
              />
              <br />
              Waiting time of <b>0 mins</b>.
            </p>
            <Button
              color="yellow"
              size="large"
              onClick={() => setCurrStage(stage.SUMMONED)}
            >
              SUMMON POLLY
            </Button>
          </Segment>
        );
    }
  };

  let component = renderComponent();

  return (
    <div>
      <Segment basic color="red" inverted vertical>
        <Header as="h1" inverted>
          <Link to="/" className="link">
            15150: Polly's Office Hours
          </Link>
        </Header>
      </Segment>
      <Grid columns="equal">
        <Grid.Row centered className="queue-segment">
          <Grid.Column mobile={12} computer={8}>
            {component}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default QueuePage;
