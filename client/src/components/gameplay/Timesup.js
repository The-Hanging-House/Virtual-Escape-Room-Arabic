import React from 'react'
import Bgend from '../../img/bgend.png'
import { url } from 'gravatar';


var i = 0;
var refreshTime = 1598355449119;


function Timesup() {

    var arri = ['puzSet', 'scene2', 'scene3', 'scene6', 'scene4', 'scene5', 'scene1', 'myDataKey'];
    while (i !== arri.length && localStorage.getItem('myDataKey') !== '0') {
        localStorage.setItem(arri[i], refreshTime); 
        i++;
    }
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
            <div className="bg-end1">
                <div className="congrats">
                    <h1>TIME'S UP</h1>
                </div>
                <div style={{ fontSize: '1.7rem', fontWeight: 'bolder', lineHeight: '3vh', letterSpacing: '2px', margin: '1rem' }}>
                    <p style={{ paddingBottom: '2rem' }}>UH OH!</p>
                    <p>WE KNOW YOU TRIED YOUR BEST.</p>
                    <p>TRY AGAIN AND HOPEFULLY YOU'LL MAKE</p>
                    <p>IT OUT NEXT TIME.</p>
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


export default Timesup;