import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import Index from '../../games/garbage/index'

import { Html } from 'drei';
// import Tp from '../../img/tp.svg'

function TouchPoint1({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    const [showMessage, setShowMessage] = useState(false);
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [1.5, 1.5, 1.5, 1.5] : [1.5, 1.5, 1.5, 1.5]}
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
                        classNames="alert3"
                        unmountOnExit
                        // onEnter={() => setShowButton(false)}
                        // onExited={() => setShowButton(true)}
                    >
                        <Alert
                        className="alert3" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside6">
                            <Alert.Heading>
                                <Index />
                                {/* <p>
                                Litter doesn't belong in the dessert, but it's everywhere. What would you like to do?
                                </p> */}
                            </Alert.Heading>
                        </div>
                        </Alert>
                    </CSSTransition>
                    {/* <h1>{showPopup && <Task1 />}</h1> */}
                </Container>
            </Html>
        </mesh>
    )
}

export default TouchPoint1;