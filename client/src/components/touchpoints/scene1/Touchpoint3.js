import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';



import { Html } from 'drei';
// import App1 from '../../games/game/App1';

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
            scale={hovered ? [1, 1, 1, 1] : [1, 1, 1, 1]}
            position={position}
            // ref={mesh}
            rotation={[3, 3, 0]}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={() => setShowMessage(true)}>
            <planeGeometry attach="geometry" args={[12, 10, 10]} />
            <meshBasicMaterial attach="material" transparent opacity={hovered? 0.1 : 0} /> 
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
                        // dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside4">
                        <button className="close" onClick={() => setShowMessage(false)}>×</button>
                            <Alert.Heading>
                                <p style={{ fontSize: '1.1rem' }}>
                                    The trunk is locked, but you left the lights and music on. Have you got your keys?
                                </p>
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

export default TouchPoint3;