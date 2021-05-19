import React from "react";
import Wind from "./wind.mp3";

class Music3 extends React.Component {
  render() {
    return (
      <div>
        <audio ref="audio_tag" src={Wind} autoPlay loop type="audio/mpeg" />
      </div>
    );
  }
}

export default Music3;
