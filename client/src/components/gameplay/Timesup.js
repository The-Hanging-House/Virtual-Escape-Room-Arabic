import React from 'react'
import Bgend from '../../img/bgend.png'
import { url } from 'gravatar';

import H from '../../img/h.png'
import CWN from '../../img/cwn.svg'

var i = 0;
var refreshTime = 1598355449119;


function Timesup() {

    var arri = ['puzSet', 'scene2', 'scene3', 'scene6', 'scene4', 'scene5', 'scene1', 'myDataKey'];
    while (i !== arri.length && localStorage.getItem('myDataKey') !== '0') {
        localStorage.setItem(arri[i], refreshTime); 
        i++;
    }
    // const onMouseOver = event => {
       
    //     const el = event.target;
    //     let colorhex = "#F8A61F"
    //     el.style.background = colorhex;
    //   };

    //   const onMouseOut = event => {
    //     const el = event.target;
    //     let black = "transparent";
    //     el.style.background = black;
    //   };
    return (
        <>
        <div className="bg-image2"></div>
            <div className="bg-end1">
                <div style={{ fontSize: '1.7rem', fontWeight: 'bolder', lineHeight: '5vh', letterSpacing: '2px', margin: '1rem' }}>
                    
                    <div className="option">
                        <a href="briefing">
                            <h3 style={{ color: 'black', fontSize: '2rem', float: 'left', position: 'absolute', left: '-4%', bottom: '14%', color: 'white' }}
                                    >
                                        HOME
                            </h3>
                        </a>
                        <a href="dashboard2">
                            <h3 style={{ color: 'black', fontSize: '2rem', float: 'left', position: 'absolute', right: '-4%', bottom: '14%', color: 'white' }}     
                                    >
                                        PLAY AGAIN
                            </h3>
                        </a>
                    </div>
                    <div className="icons2">
                    {/* <p>For more adventures, visit the link below</p> */}
                   
                    <a target="_blank" href="https://connectwithnature.ae">
                    <img className="cwnimg1" src={CWN}></img>
                    </a>
                    <a target="_blank" href="https://houbarafund.gov.ae/en/home">
                    <img className="houbara1" src={H}></img>
                    </a>
                </div>    
                </div>
                    
                    
            </div>
        </>
        
    )
}



export default Timesup;