import React from 'react';
// import Bgend from '../../img/bgend.png';
// import { url } from 'gravatar';

// import CWN from '../../img/cwn.svg'
// import H from '../../img/h.png'



var data = localStorage.getItem('myDataKey');
var now = localStorage.getItem('scene2');

if (data < now) {
    var milisec_diff = now - data;
}else{
    var milisec_diff = data - now;
}
var final = Math.round(900-(milisec_diff/1000));
if (final < 0){
  final = 0;
}
var mins = Math.floor(final/60);
var secs = final - mins * 60;
if (secs < 10){
    secs = "0" + secs;
  }
var pacman = mins + ":" + secs;

setInterval(function(){
    now = localStorage.getItem('scene6');
    if(now!=='NaN'){
        End();
    }
}, 500);

function End() {
    



    return (
        <>
        <div className="bg-image1"></div>
            <div className="bg-end">
                <div className="congrats">
                    <h1>CONGRATULATIONS</h1>
                </div>
                <div style={{ fontSize: '1.7rem', fontWeight: 'bolder', lineHeight: '5vh', letterSpacing: '2px' }}>
                    <p>THAT WAS GOOD!</p>
                    <p>YOU MUST'VE REALLY</p>
                    <p>CONNECTED WITH NATURE.</p>
                </div>
                <div className="game-timer">
                    <div className="gametime">
                        <h1 style={{ fontSize: '2rem', letterSpacing: '4px' }}>
                            YOU SURVIVED WITH
                        </h1>
                        <h1 style={{ fontSize: '5rem', color: 'white', fontWeight: 'bolder' }}>
                            {pacman}
                            
                        </h1>
                        <h1 style={{ fontSize: '2rem', letterSpacing: '4px' }}>
                            TO SPARE
                        </h1>
                    </div>
                    <div className="option1">
                        <a href="briefing">
                            <h3 style={{ color: 'black', fontSize: '2rem' }}>
                                        PLAY AGAIN?
                            </h3>
                        </a>
                        <a href="dashboard2">
                            <h3 style={{ color: 'black', fontSize: '2rem' }}>
                                        HOME
                            </h3>
                        </a>
                    </div>
                </div>
              {/* <div className="icons">
                  <a target="_blank" href="https://connectwithnature.ae/">
                      <img className="cwn" src={CWN} alt="CWN Logo" />
                  </a>
                  <a target="_blank" href="https://houbarafund.gov.ae/en/home">
                      <img className="h" src={H} alt="Houbara Fund" />
                  </a>
              </div>       */}
            </div>
        </>
        
    )
}


export default End;