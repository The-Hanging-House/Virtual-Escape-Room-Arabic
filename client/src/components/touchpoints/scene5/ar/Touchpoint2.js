import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

import Lock from '../../../../img/lock.png'

import App from '../../../games/lock/App'
import X from '../../../../img/whiteX.svg'

function TouchPoint2({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

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
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={[0.1, 0.3, 0.1, 0.1]}
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
                        classNames="alert3"
                        unmountOnExit
                        // onEnter={() => setShowButton(false)}
                        // onExited={() => setShowButton(true)}
                    >
                        <Alert
                        className="alert3"
                        variant="primary"
                        // dismissible
                        onClose={() => setShowMessage(false)}
                        >
                         <div className="alert-inside6">
                         <button className="close" onClick={() => setShowMessage(false)}><img src={X} className="stopDrag" alt=" " width='300%' height='300%'></img></button>
                            <Alert.Heading>
                            <App />
                            <img src={Lock} alt=" " className="stopDrag" style={{ left: '-48px', transform: 'scale(0.9)',  top: '-33px' }}/>
                                
                            {/* <h3 style={{ cursor: 'pointer' }} onClick={() => setShowMessage(false)} style={{ fontSize: '1rem', textAlign: 'center', cursor: 'pointer'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                CLOSE
                            </h3>     */}
                            </Alert.Heading>
                                
                            
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}

export default TouchPoint2;