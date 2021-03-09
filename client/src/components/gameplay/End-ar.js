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
    if (localStorage.getItem("lang") === "en") {
      window.location.href = "/end";
      languageCheck = 1;
    }
  }
  if (mins > 8) {
    winMessage = "رائع! كان ذلك سريعًا حقًا. هل فعلت هذا من قبل؟";
  } else if (mins > 3 && mins < 8) {
    winMessage = ".أحسنت! أنت حقًا متصل بالطبيعة";
  } else if (mins < 3) {
    winMessage = ".لقد أنجزت المهمة في الوقت المناسب";
  }

  return (
    <>
      <div className="bg-image1"></div>
      <div className="bg-end">
        <div className="congrats-arabic">
          <h1>تهانينا</h1>
        </div>
        <div className="yellow-block">
          <div className="first-h1">
            <h1>لقد تخطيت الخطر ومازال لديك</h1>
          </div>
          <div className="gametime">
            <h1>{pacman}</h1>
          </div>
          <div className="second-h1">
            <h1>احتياطي</h1>
          </div>
        </div>
        <div className="message-win-arabic">
          <h1>{winMessage}</h1>
        </div>
        <div className="some-text-arabic">
          <h2>!لا تنس أن تأخذ صورة للشاشة لمشاركتها مع أصدقائك</h2>
        </div>
        <div className="option1">
          <div className="home-button">
            <a href="dashboard2">
              <button
                className="btn btn-primary"
                style={{ letterSpacing: "0" }}
              >
                الصفحة الرئيسية
              </button>
            </a>
          </div>
          <div className="home-button">
            <a href="briefing">
              <button
                className="btn btn-primary"
                style={{ letterSpacing: "0" }}
              >
                إلعب مرة أخرى
              </button>
            </a>
          </div>
        </div>
        <div className="qrcode">
          <img alt="qr" className="qr" src={Qr}></img>
        </div>
        <div className="icons1" style={{ fontSize: "1.4rem" }}>
          <p style={{ letterSpacing: "1px" }}>
            .لمزيد من المغامرات، قم بزيارة الرابط أدناه
          </p>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://connectwithnature.ae"
          >
            <img alt="cwn" className="cwnimg" src={CWN}></img>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://houbarafund.gov.ae/en/home"
          >
            <img alt="houbara" className="houbara" src={H}></img>
          </a>
        </div>
      </div>
    </>
  );
}

export default End;
