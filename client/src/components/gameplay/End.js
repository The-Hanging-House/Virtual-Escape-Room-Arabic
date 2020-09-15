import React from 'react';
// import Bgend from '../../img/bgend.png';
// import { url } from 'gravatar';

import CWN from '../../img/cwn.svg'
import H from '../../img/h.png'
import Bgend from '../../img/bg.png';


var winMessage = '';

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

// setInterval(function(){
//     now = localStorage.getItem('scene6');
//     if(now!=='NaN'){
//         End();
//     }
//     if(mins > 8){
//         winMessage = 'WOW! THAT WAS REALLY FAST. HAVE YOU DONE THIS BEFORE?'
//     }else if (mins > 3 && mins < 8){
//         winMessage = 'THAT WAS GOOD! YOU MUST\'VE REALLY CONNECTED WITH THE NATURE'
//     }else if (mins < 2){
//         winMessage = 'YOU MADE IT OUT JUST IN TIME.'
//     }
// }, 500);

function End() {
    



    return (
        <>
        <div className="bg-image1"></div>
            <div className="bg-end">
                {/* <div className="congrats">
                    <h1>CONGRATULATIONS</h1>
                </div> */}
                {/* <div style={{ fontSize: '1.7rem', fontWeight: 'bolder', letterSpacing: '2px' }}>
                <h3>
                            {winMessage}
                        </h3>
                </div> */}
                <div className="game-timer">
                    <div className="gametime">
                        
                        <h1 style={{ fontSize: '5rem', color: 'white', fontWeight: 'bolder' }}>
                            {pacman}
                            
                        </h1>
                        
                    </div>
                    {/* <div className="option1">
                        <h3>
                            {winMessage}
                        </h3>
                    </div> */}
                </div>
                <div className="dashboard2">
                        <a href="briefing">
                            {/* <h3 className="home" style={{ color: 'black', fontSize: '2rem', float: 'left', position: 'absolute', left: '-4%', bottom: '14%', color: 'white' }}
                                    >
                                        HOME
                            </h3> */}
                            <button style={{float: 'left', position: 'absolute', left: '-4%', bottom: '14%', color: 'white'}} className="btn btn-primary">
                                   HOME
                            </button>
                        </a>
                        <a href="briefing">
                            {/* <h3 className="play" style={{ color: 'black', fontSize: '2rem', float: 'left', position: 'absolute', right: '-4%', bottom: '14%', color: 'white' }}     
                                    >
                                        PLAY AGAIN
                            </h3> */}
                            <button style={{float: 'right', position: 'absolute', left: '40%', bottom: '14%', color: 'white'}} className="btn btn-primary">
                                   PLAY AGAIN
                            </button>
                        </a>
                    </div>
              <div className="icons1">
                  <a target="_blank" href="https://connectwithnature.ae/">
                  <img style={{ float: 'left', position: 'absolute', left: '-4%', bottom: '14%' }} src={H}></img>
                  </a>
                  <a target="_blank" href="https://houbarafund.gov.ae/en/home">
                  <img style={{ float: 'right', position: 'absolute', right: '-4%', bottom: '10%' }} src={CWN}></img>
                  </a>
              </div>      
            </div>
        </>


        
    )
}


export default End;