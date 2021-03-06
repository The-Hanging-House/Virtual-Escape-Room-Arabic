import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';


import { Html } from 'drei';
import Telephone from '../../gameplay/Telephone';
import xc from '../../../img/x.svg'

function TouchPoint6({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    const [showMessage, setShowMessage] = useState(false);


    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.6, 0.6, 0.6] : [0.4, 0.4, 0.4]}
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
                        // style={{backgroud: 'white'}}
                        // onEnter={() => setShowButton(false)}
                        // onExited={() => setShowButton(true)}
                    >
                        {/* <Alert
                        className="alert4"
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        style={{width: '2px', position: 'absolute'}}

                        > */}
                        {/* <button  onClick={setShowMessage(false)}> <img src={xc} />  X</button> */}
                        <Telephone />
                        {/* </Alert> */}
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}

export default TouchPoint6;