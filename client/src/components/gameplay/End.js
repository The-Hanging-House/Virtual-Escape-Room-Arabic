import React from "react";
// import { url } from 'gravatar';

import CWN from "../../img/cwn.svg";
import H from "../../img/h.svg";
import Qr from "../../img/qr.png";

var languageCheck = 0;
var winMessage = "";
var milisec_diff = 0;

var data = localStorage.getItem("myDataKey");
var now = localStorage.getItem("scene2");

if (data < now) {
  milisec_diff = now - data;
} else {
  milisec_diff = data - now;
}
var final = Math.round(900 - milisec_diff / 1000);
if (final < 0) {
  final = 0;
}
var mins = Math.floor(final / 60);
var secs = final - mins * 60;
if (secs < 10) {
  secs = "0" + secs;
}
var pacman = mins + ":" + secs;

function End() {
  if (languageCheck === 0) {
    if (localStorage.getItem("lang") === "ar") {
      window.location.href = "/end-ar";
      languageCheck = 1;
    }
  }
  if (mins > 8) {
    winMessage = "WOW! THAT WAS REALLY FAST. HAVE YOU DONE THIS BEFORE?";
  } else if (mins > 3 && mins < 8) {
    winMessage = "THAT WAS GOOD! YOU MUST'VE REALLY CONNECTED WITH THE NATURE";
  } else if (mins < 3) {
    winMessage = "YOU MADE IT OUT JUST IN TIME.";
  }

  return (
    <>
      <div className="bg-image1"></div>
      <div className="bg-end">
        <div className="congrats">
          <h1>CONGRATULATIONS</h1>
        </div>
        <div className="yellow-block">
          <div className="first-h1">
            <h1>YOU ESCAPED DANGER WITH</h1>
          </div>
          <div className="gametime">
            <h1>{pacman}</h1>
          </div>
          <div className="second-h1">
            <h1>TO SPARE</h1>
          </div>
        </div>
        <div className="message-win">
          <h1>{winMessage}</h1>
        </div>
        <div className="some-text">
          <h2>
            Don't forget to take a screenshot to share
            <br /> with your friends!
          </h2>
        </div>
        <div className="option1">
          <div className="home-button">
            <a href="dashboard2">
              <button className="btn btn-primary">HOME</button>
            </a>
          </div>
          <div className="home-button">
            <a href="briefing">
              <button className="btn btn-primary">PLAY AGAIN</button>
            </a>
          </div>
        </div>
        <div className="qrcode">
          <img alt="qr" className="qr" src={Qr}></img>
        </div>
        <div className="icons1">
          <p>For more adventures, visit the link below</p>

          <a rel="noopener noreferrer" target="_blank" href="https://connectwithnature.ae">
            <img alt="cwn" className="cwnimg" src={CWN}></img>
          </a>
          <a rel="noopener noreferrer" target="_blank" href="https://houbarafund.gov.ae/en/home">
            <img alt="houbara" className="houbara" src={H}></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default End;
