// modules
import React from "react";
import { Image } from "semantic-ui-react";

// assets
import polly from "../assets/polly.png";
import pollyStar from "../assets/polly_star.png";

function PollyImage(props) {
  return (
    <Image
      src={props.solved ? pollyStar : polly}
      centered
      size="small"
      className="Polly"
    />
  );
}

export default PollyImage;
