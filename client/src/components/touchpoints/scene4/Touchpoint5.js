import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';


function TouchPoint5({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    const [CON, setCON] = useState(false);
    const [showMessage, setShowMessage] = useState(false);

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

      if(CON){
        var scene4 = new Date().getTime();
        localStorage.setItem('scene4', scene4);
        console.log(localStorage.getItem('scene4'));
        window.location.href = '/scene6';
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
            <meshBasicMaterial attach="material" transparent opacity={0} /> 
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
                                    Did you know noise disturbs nature? How would you like to help in this situation ?
                                    </p>
                                    <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}>
                                    DANCE AND SING
                                    </h3>
                                    {/* <a href='scene6'> */}
                                        <h3 onMouseEnter={event => onMouseOver(event)} style={{ fontSize: '1rem'}}
                                            onMouseOut={event => onMouseOut(event)} onClick={() => setCON(true)}
                                            href>
                                            SWITCH OFF THE MUSIC
                                        </h3>
                                    {/* </a> */}
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