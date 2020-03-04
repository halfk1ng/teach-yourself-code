import React, { Component } from "react";
import ReactPlayer from "react-player";
import { useApolloClient } from "@apollo/react-hooks";

class Video extends Component {
  constructor(props) {
    super(props);

    this.player = React.createRef();
  }

  // handleProgress = playedSeconds => {
  //   console.log(Math.round(playedSeconds.playedSeconds));
  //   let ms = Math.round(playedSeconds.playedSeconds * 1000);
  //   this.progressToTimestamp(ms);
  // };

  // progressToTimestamp = ms => {
  //   let milliseconds = parseInt((ms % 1000) / 100),
  //     seconds = Math.floor((ms / 1000) % 60),
  //     minutes = Math.floor((ms / (1000 * 60)) % 60),
  //     hours = Math.floor((ms / (1000 * 60 * 60)) % 24);

  //   hours = hours < 10 ? "0" + hours : hours;
  //   minutes = minutes < 10 ? "0" + minutes : minutes;
  //   seconds = seconds < 10 ? "0" + seconds : seconds;

  //   let time = hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  //   console.log(time);
  //   return time;
  // };

  render() {
    return (
      <div className="video-box">
        <ReactPlayer
          ref="this.player"
          url={
            "https://youtube.com/embed/" +
            this.props.video.snippet.resourceId.videoId
          }
          controls={true}
          className="video-player"
        />
      </div>
    );
  }
}

export default Video;
