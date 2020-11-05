// modules
import React from "react";
import { Howl } from "howler";
import { Button, Header, Segment, Grid, Placeholder } from "semantic-ui-react";

// components
import QueueHeader from "../components/QueueHeader.js";
import WaitingSegment from "../components/WaitingSegment.js";
import PollyImage from "../components/PollyImage.js";

// assets
import parrot_hello from "../assets/parrot_hello.mp3";
import parrot_goodJob from "../assets/parrot_goodJob.mp3";

const hello_sound = new Howl({
  src: [parrot_hello],
});

const goodJob_sound = new Howl({
  src: [parrot_goodJob],
});

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

function QueuePage(props) {
  const randomIndex = (length) => {
    return Math.floor(Math.random() * length);
  };

  const [currStage, setCurrStage] = React.useState(stage.WAITING);

  const [adviceIndex, setAdviceIndex] = React.useState(
    props.advices ? randomIndex(props.advices.length) : 0
  );
  const [prefixIndex, setPrefixIndex] = React.useState(
    randomIndex(prefixes.length)
  );

  const currAdvice = props.advices ? (
    <span>
      <Header as="h2">{prefixes[prefixIndex]}...</Header>
      <p>...{props.advices[adviceIndex].advice}?</p>
    </span>
  ) : (
    <Placeholder>
      <Placeholder.Header>
        <Placeholder.Line length="medium" />
        <Placeholder.Line length="full" />
      </Placeholder.Header>
    </Placeholder>
  );

  const newAdvice = () => {
    if (!props.advices) {
      return;
    }
    let newIndex = randomIndex(props.advices.length);
    while (newIndex === adviceIndex) {
      newIndex = randomIndex(props.advices.length);
    }
    setAdviceIndex(newIndex);
    setPrefixIndex(randomIndex(prefixes.length));
  };

  const tryAdvice = () => {
    if (!props.advices) {
      return;
    }
    setCurrStage(stage.THINKING);
    window.open(props.advices[adviceIndex].url);
  };

  const enterQueue = () => {
    // hello_sound.play();
    newAdvice();
    setCurrStage(stage.SUMMONED);
  };

  const handleSolved = () => {
    goodJob_sound.play();
    setCurrStage(stage.SOLVED);
  };

  const renderComponent = () => {
    switch (currStage) {
      case stage.SUMMONED:
        return (
          <Segment textAlign="center" padded>
            {currAdvice}
            <PollyImage />
            <span>
              <Button
                color="green"
                size="small"
                onClick={tryAdvice}
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
            <PollyImage />

            <span>
              <Button
                color="green"
                size="small"
                className="margin-button"
                onClick={handleSolved}
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
            <PollyImage solved />
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
        return <WaitingSegment enterQueue={enterQueue} />;
    }
  };

  let component = renderComponent();

  return (
    <div>
      <QueueHeader />
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
