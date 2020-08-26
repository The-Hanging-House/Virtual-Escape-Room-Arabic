import React from 'react';
import Bgend from '../../img/bgend.png';
import { url } from 'gravatar';



var data = localStorage.getItem('myDataKey');
var now = localStorage.getItem('scene2');

if (data < now) {
    var milisec_diff = now - data;
}else{
    var milisec_diff = data - now;
}
var final = Math.round(600-(milisec_diff/1000));
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
    const onMouseOver = event => {
       
        const el = event.target;
        let colorhex = "#F8A61F"
        el.style.background = colorhex;
    };

    const onMouseOut = event => {
        const el = event.target;
        let black = "transparent";
        el.style.background = black;
    };



    return (
        <>
        <div className="bg-image"></div>
            <div className="bg-end">
                <div className="congrats">
                    <h1>CONGRATULATIONS</h1>
                </div>
                <div style={{ fontSize: '1.7rem', fontWeight: 'bolder', lineHeight: '3vh', letterSpacing: '2px', margin: '1rem' }}>
                    <p>THAT WAS GOOD!</p>
                    <p>YOU MUST'VE REALLY</p>
                    <p>CONNECTED WITH NATURE.</p>
                </div>
                <div className="game-timer">
                    <div className="game-timer-inside">
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
                    <div className="game-timer-option">
                        <a href="briefing">
                            <h3 style={{ color: 'black', fontSize: '2rem' }}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}>
                                        PLAY AGAIN?
                            </h3>
                        </a>
                        <a href="dashboard">
                            <h3 style={{ color: 'black', fontSize: '2rem' }}     
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}>
                                        HOME
                            </h3>
                        </a>
                    </div>
                </div>
                    
            </div>
        </>
        
    )
}


export default End;