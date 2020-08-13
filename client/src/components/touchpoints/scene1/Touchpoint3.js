import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';



import { Html } from 'drei';
import App1 from '../../games/game/App1';

function TouchPoint3({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
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
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.5, 0.5, 0.5] : [0.4, 0.4, 0.4]}
            position={position}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={() => setShowMessage(true)}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} /> 
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
                        className="alert2"
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside2">
                            <Alert.Heading>
                                <App1 />
                            </Alert.Heading>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                OK
                            </h3>
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

export default TouchPoint3;