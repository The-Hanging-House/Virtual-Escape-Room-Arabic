import React from "react";
// import { url } from 'gravatar';

import H from "../../img/h.png";
import CWN from "../../img/cwn.svg";

var i = 0;
var languageCheck = 0;

function Timesup() {
  if (languageCheck === 0) {
    if (localStorage.getItem("lang") === "en") {
      window.location.href = "/timesup";
      languageCheck = 1;
    }
  }
  var arri = [
    "puzSet",
    "scene2",
    "scene3",
    "scene6",
    "scene4",
    "scene5",
    "scene1",
    "myDataKey",
    "gState",
    "pState",
    "forCheck",
  ];
  while (i !== arri.length && localStorage.getItem("myDataKey") !== "0") {
    localStorage.removeItem(arri[i]);
    i++;
  }

  return (
    <>
      <div className="bg-image2"></div>
      <div className="bg-end1">

        <div className="yellow-block1">
          <div className="gametime1">
            <h1>TIMES UP</h1>
          </div>
        </div>
        <div className="message-win1">
          <h1>DID YOU DO YOUR BEST?</h1>
        </div>
        <div className="some-text1">
          <h2>
            TRY AGAIN AND HOPEFULLY YOU WILL <br />
            MAKE IT TO SAFETY NEXT TIME.
          </h2>
        </div>
        <div className="option2">
          <div className="home-button1">
            <a href="dashboard2">
              <button className="btn btn-primary">HOME</button>
            </a>
          </div>
          <div className="play-bottom1">
            <a href="briefing">
              <button className="btn btn-primary">PLAY AGAIN</button>
            </a>
          </div>
        </div>
        <div className="icons2">
          <p>For more adventures, visit the link below</p>

          <a
            target="_blank"
            href="https://connectwithnature.ae"
            rel="noopener noreferrer"
          >
            <img className="cwnimg1" alt=" " src={CWN}></img>
          </a>
          <a
            target="_blank"
            href="https://houbarafund.gov.ae/en/home"
            rel="noopener noreferrer"
          >
            <img className="houbara1" alt=" " src={H}></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default Timesup;
