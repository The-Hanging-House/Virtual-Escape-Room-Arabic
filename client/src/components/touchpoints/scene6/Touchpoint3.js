import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

function TouchPoint3({ position, color, onClick }) {
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
        var scene6 = new Date().getTime();
        localStorage.setItem('scene6', scene6);
        // console.log(localStorage.getItem('scene4'));
        window.location.href = '/scene5';
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
                        <div className="alert-inside">
                            <Alert.Heading>
                                <p>
                                Glare from artificial lights makes it hard for wildlife to see, let's help the wildlife by 
                                </p>
                                <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}>
                                    LEAVING THE LIGHTS ON
                                </h3>
                            {/* <a href='scene5'> */}
                                <h3 onMouseEnter={event => onMouseOver(event)} style={{ fontSize: '1rem'}}
                                    onMouseOut={event => onMouseOut(event)}  onClick={() => setCON(true)}
                                    href>
                                    SWITCHING THE LIGHTS OFF
                                </h3>
                            
                            {/* </a> */}
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