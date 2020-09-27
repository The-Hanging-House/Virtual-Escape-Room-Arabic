import React from 'react';
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


function End() {
    
    if(mins > 8){
        winMessage = 'WOW! THAT WAS REALLY FAST. HAVE YOU DONE THIS BEFORE?'
    }else if (mins > 3 && mins < 8){
        winMessage = 'THAT WAS GOOD! YOU MUST\'VE REALLY CONNECTED WITH THE NATURE'
    }else if (mins < 3){
        winMessage = 'YOU MADE IT OUT JUST IN TIME.'
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
                        <h1>
                            YOU ESCAPED DANGER WITH
                        </h1>
                    </div>
                    <div className="gametime">
                        <h1>
                            {pacman}
                            
                        </h1>
                    </div>
                    <div className="second-h1">
                        <h1>
                            TO SPARE
                        </h1>
                    </div>
                </div>
                <div className="message-win">
                    <h1>
                        {winMessage}
                    </h1>
                </div>
                <div className="some-text">
                    <h2>
                        Don't forget to take a screenshot to share<br /> with your friends!
                    </h2>
                </div>
                <div className="option1">
                        <div className="home-button">
                            <a href="dashboard2">
                                <button className="btn btn-primary">
                                    HOME
                                </button>
                            </a>
                        </div>
                        <div className="play-bottom">
                            <a href="briefing">
                                <button className="btn btn-primary">
                                    PLAY AGAIN
                                </button>
                            </a>
                        </div>
                </div>
                <div className="icons1">
                    <p>For more adventures, visit the link below</p>
                   
                    <a target="_blank" href="https://connectwithnature.ae">
                    <img className="cwnimg" src={CWN}></img>
                    </a>
                    <a target="_blank" href="https://houbarafund.gov.ae/en/home">
                    <img className="houbara" src={H}></img>
                    </a>
                </div>      
            </div>
        </>
        


        
    )
}


export default End;