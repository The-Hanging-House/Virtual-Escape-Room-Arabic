import React from "react";
import Lesson2 from "../lesson/Lesson2";

var x = 0;

function Instruction() {
  if (x === 0) {
    if (localStorage.getItem("lang") === "en") {
      window.location.href = "/instruction";
      x = 1;
    }
  }
  return (
    <section className="video-player2">
      <Lesson2 />
    </section>
  );
}

export default Instruction;
