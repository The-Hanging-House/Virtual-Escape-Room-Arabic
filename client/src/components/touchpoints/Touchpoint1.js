import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

function TouchPoint1({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    const [showPopup, setShowPopup] = useState(false);
    const toggle = () => setShowPopup(!showPopup)
    const [showMessage, setShowMessage] = useState(false);

    // function greeting() {
    //     return (
    //         <Task1 />
    //     )
    //   }
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.2, 0.2, 0.2] : [0.1, 0.1, 0.1]}
            position={position}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={() => setShowMessage(true)}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" color={color} /> 
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
                        className="alert" style={{color : 'white', padding : '5px', width : '40vw', backgroundColor: 'rgba(230, 206, 166, 0.9)'}}
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside">
                            <Alert.Heading>
                                <h1>
                                Litter doesn't belong in the dessert, but it's everywhere. What would you like to do?
                                </h1>
                            </Alert.Heading>
                            <p onClick={() => {
                                toggle(); 
                                setShowMessage(false)}} style={{ fontSize: '1rem'}} >
                                Pick them up and dispose of them properly.
                            </p>
                            <p onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}>
                                Ignore it.
                            </p>
                            {/* <Button onClick={() => setShowMessage(false)}>
                                Close
                            </Button> */}
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