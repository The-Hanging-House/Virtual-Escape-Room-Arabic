import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

import switchButtonON from '../../../../img/radioON-ar.png'
import switchButtonOFF from '../../../../img/radioOFF-ar.png'

import switchfx from '../../../../audio/switch.mp3'

function TouchPoint5({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    // const [CON, setCON] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [switchState, setSwitchState] = useState(false);

    // const onMouseOver = event => {
    //     const el = event.target;
    //     let colorhex = "#F8A61F"
    //     el.style.background = colorhex;
    // };

    // const onMouseOut = event => {
    //     const el = event.target;
    //     let black = "transparent";
    //     el.style.background = black;
    // };

    // if(CON){
    //     var scene4 = new Date().getTime();
    //     localStorage.setItem('scene4', scene4);
    //     console.log(localStorage.getItem('scene4'));
    //     window.location.href = '/scene6';
    // };

    if(switchState){
        new Audio(switchfx).play();
        setTimeout(function(){
            var scene4 = new Date().getTime();
            localStorage.setItem('scene4', scene4);
            window.location.href = '/scene6-ar';
        }, 3000);            
      };
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
        scale={hovered ? [2, 2, 2, 2] : [2, 2, 2, 2]}
            position={position}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={() => setShowMessage(true)}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" transparent opacity={hovered? 0.2 : 0} /> 
            <Html center>
                <Container>
                    <CSSTransition
                        in={showMessage}
                        timeout={300}
                        classNames="alert"
                        unmountOnExit
                        // onEnter={() => setShowButton(false)}
                        // onExited={() => setShowButton(true)}
                    >
                        <Alert
                        className="alert"
                        variant="primary"
                        // style={{ top: '82px', right: '37px'}}
                        // dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside2" stley={{}}>
                            <Alert.Heading>
                                    <div>
                                        <img src={switchState? switchButtonON : switchButtonOFF} alt=" " width='100%' height='100%'/>
                                        
                                    </div>
                                    {/* <p style={{textAlign: 'center', color: 'black', letterSpacing: '2px', fontWeight: 'bold', fontFamily: 'Dubai W23, sans-serif'}}>
                                        Did you know that noise is also a type of pollution?
                                    </p> */}
                                    {/* <h3 style={{ cursor: 'pointer' }} onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}>
                                    DANCE AND SING
                                    </h3>
                                        <h3 style={{ cursor: 'pointer' }} onMouseEnter={event => onMouseOver(event)} style={{ fontSize: '1rem'}}
                                            onMouseOut={event => onMouseOut(event)} onClick={() => setCON(true)}
                                            href>
                                            SWITCH OFF THE MUSIC
                                        </h3> */}
                            </Alert.Heading>
                                
                            <button onClick={() => setShowMessage(false)} style={{ top: '23%', right: '6%', position: 'absolute', opacity: '0', cursor: 'pointer'}}>
                                Close
                            </button>
                            <button onClick={() => setSwitchState(true)} style={{ top: '60%', right: '28%', position: 'absolute', opacity: '0', cursor: 'pointer'}}>
                                ON
                            </button>
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}

export default TouchPoint5;