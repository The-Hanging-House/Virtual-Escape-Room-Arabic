import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

function TouchPoint3({ position, color, onClick }) {
    const [hovered, set] = useState(false)
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
        var scene3 = new Date().getTime();
        localStorage.setItem('scene3', scene3);
        console.log(localStorage.getItem('scene3'));
        window.location.href = '/scene4';
      };
    //   console.log("con", CON);
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
        scale={hovered ? [0.4, 0.4, 0.4] : [0.4, 0.4, 0.4]}
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
                        classNames="alert2"
                        unmountOnExit
                        // onEnter={() => setShowButton(false)}
                        // onExited={() => setShowButton(true)}
                    >
                        <Alert
                        className="alert2"
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside" style={{ left: '-2.5%' }}>
                            <Alert.Heading>
                                <p>
                                The car door is not locked, what should I do?
                                </p>
                                {/* <a href="scene4"> */}
                                    <h3 onMouseEnter={event => onMouseOver(event)}
                                            onMouseOut={event => onMouseOut(event)} onClick={() => setCON(true)}
                                            href>
                                            OPEN IT
                                    </h3>
                                {/* </a> */}
                                <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                    IGNORE IT
                                </h3>
                            </Alert.Heading>
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}

export default TouchPoint3;