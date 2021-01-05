import React from "react";
import Lesson from "../lesson/Lesson";
import Music1 from "../../audio/Music3";

var x = 0;

function Briefing() {
  if (x === 0) {
    if (localStorage.getItem("lang") === "ar") {
      window.location.href = "/briefing-ar";
      x = 1;
    }
  }
  return (
    <section className="video-player">
      <Lesson />
      <Music1 />
    </section>
  );
}

export default Briefing;
