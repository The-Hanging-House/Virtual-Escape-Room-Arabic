import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

import switchButtonON from '../../../img/telephone.png'
import switchButtonOFF from '../../../img/key.png'


function TouchPoint5({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    const [CON, setCON] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [switchState, setSwitchState] = useState(false);

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

    // if(CON){
    //     var scene4 = new Date().getTime();
    //     localStorage.setItem('scene4', scene4);
    //     console.log(localStorage.getItem('scene4'));
    //     window.location.href = '/scene6';
    // };

    if(switchState){
        setTimeout(function(){
            var scene4 = new Date().getTime();
            localStorage.setItem('scene4', scene4);
            window.location.href = '/scene6';
        }, 2000);            
      };
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
        scale={hovered ? [1, 1, 1, 1] : [1, 1, 1, 1]}
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
                        classNames="alert1"
                        unmountOnExit
                        // onEnter={() => setShowButton(false)}
                        // onExited={() => setShowButton(true)}
                    >
                        <Alert
                        className="alert1"
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside">
                            <Alert.Heading>
                                    <p>
                                        Did you know that noise is also a type of pollution?
                                    </p>
                                    <div>
                                        <img src={switchState? switchButtonON : switchButtonOFF} onClick={() => setSwitchState(true)} alt='switch' width='100%' height='100%' />
                                    </div>
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
                                
                            {/* <Button onClick={() => setShowMessage(false)}>
                                Close
                            </Button> */}
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}

export default TouchPoint5;