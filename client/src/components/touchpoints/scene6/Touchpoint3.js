import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

import switchButtonON from '../../../img/telephone.png'
import switchButtonOFF from '../../../img/key.png'



function TouchPoint3({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    const [CON, setCON] = useState(false);
    const [showMessage, setShowMessage] = useState(false);
    const [switchState, setSwitchState] = useState(false);

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

    if(switchState){
        setTimeout(function(){
            var scene6 = new Date().getTime();
            localStorage.setItem('scene6', scene6);
            window.location.href = '/scene5';
        }, 2000);            
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
            <meshBasicMaterial attach="material" transparent opacity={hovered? 0.2 : 0} /> 
            <Html center>
            <Container>
                    <CSSTransition
                        in={showMessage}
                        timeout={300}
                        classNames="alert6"
                        unmountOnExit
                        // onEnter={() => setShowButton(false)}
                        // onExited={() => setShowButton(true)}
                    >
                        <Alert
                        className="alert6"
                        variant="primary"
                        // dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside">
                        <button className="close" onClick={() => setShowMessage(false)}>×</button>

                            <Alert.Heading>
                                <p>
                                Glare from artificial lights makes it hard for wildlife to see, let's help the wildlife by 
                                </p>
                                <div>
                                    <img src={switchState? switchButtonON : switchButtonOFF} onClick={() => setSwitchState(true)} alt='switch' width='100%' height='100%' />
                                </div>
                                {/* <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                    onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}>
                                    LEAVING THE LIGHTS ON
                                </h3> */}
                            {/* <a href='scene5'>
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