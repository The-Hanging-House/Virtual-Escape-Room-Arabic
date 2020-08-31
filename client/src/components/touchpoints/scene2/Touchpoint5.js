import React, { useState, useEffect } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import Puzzle from '../../games/puzzle/Puzzle'

import { Html } from 'drei';
// import Tp from '../../img/tp.svg'

function TouchPoint5({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    const [showMessage, setShowMessage] = useState(false);

    // const [showPop, setShowPop] = useState(false);

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
            scale={hovered ? [0.6, 0.6, 0.6] : [0.4, 0.4, 0.4]}
            position={position}
            onPointerOver={() => set(true)}
            onPointerOut={() => setShowMessage(false)}
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
                        className="alert1" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3">
                            <Alert.Heading>
                                <Puzzle />
                                {/* <p>
                                Congrats! You have collected all the puzzle pieces.
                                </p>
                                <a href='puzzle'>
                                <h3 onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    href>
                                    PLAY THE PUZZLE GAME
                                </h3>
                            </a>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                IGNORE IT
                            </h3> */}
                            </Alert.Heading>
                            {/* <p onClick={() => {
                                toggle(); 
                                setShowMessage(false)}} style={{ fontSize: '1rem'}} >
                                Pick them up and dispose of them properly.
                            </p> */}
                            
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

export default TouchPoint5;