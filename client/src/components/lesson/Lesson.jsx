import React, { useState } from "react";
// import { Link } from "react-router-dom";
import "./lesson.css";
import ResponsivePlayer from "../video/ResponsivePlayer";

import briefing from "../../video/briefing.mp4";
// import bg from '../../img/boarder.png'

const Lesson = () => {
  const [watchComplete, setWatchComplete] = useState(false);

  const handleWatchComplete = ({ played }) => {
    if (played >= 0.9 && !watchComplete) {
      setWatchComplete(true);
    }
    // console.log(played)
  };
  function ctset() {
    var someData = new Date().getTime();
    localStorage.setItem("myDataKey", someData);
    console.log("CTSET: ", someData);
    if (localStorage.getItem("lang") === "en") {
      window.location.href = "/scene1";
    } else {
      window.location.href = "/scene1-ar";
    }
  }

  return (
    <div className="video-player">
      {/* <img className="boarder" src={bg} alt="boarder"  /> */}
      <ResponsivePlayer url={briefing} onProgress={handleWatchComplete} />
      <div
        className={
          watchComplete
            ? "marker marker--is-complete"
            : "marker marker--not-complete"
        }
      >
        <div className="buttons4" style={{ paddingLeft: "2px" }}>
          <button
            onClick={() => ctset()}
            className="btn btn-primary"
            style={{ letterSpacing: "0" }}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lesson;
