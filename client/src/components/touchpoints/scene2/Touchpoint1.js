import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

import board from '../../../img/board.png'


const TouchPoint1 = ({ position, color, onClick }) => {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [2, 2, 2, 2] : [2, 2, 2, 2]}
            position={position}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={() => setShowMessage(true)}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" transparent opacity={hovered? 1 : 1} /> 
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
                        className="alert"
                        variant="primary"
                        // dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <button onClick={() => setShowMessage(false)} style={{ cursor: 'pointer', position: 'absolute', top: '12px', right: '-257', opacity: '0'}}>XXX</button>
                        <div className="alert-inside2" style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '200%' }}>
                        <button className="close" onClick={() => setShowMessage(false)}>×</button>

                            <div>
                                <img src={board}   />
                            </div>
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}

export default TouchPoint1;