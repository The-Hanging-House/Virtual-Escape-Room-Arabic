
import * as THREE from 'three'
import React, { useState, useRef } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei';

import egg from '../../img/pp6.png'

import img from './../../img/pp6.png'

function Box6(props) {
    const mesh = useRef()
    const [hovered, set] = useState(false)
    // const [active, setActive] = useState(false)
    const [showMessage, setShowMessage] = useState(false);
    const texture = useLoader(THREE.TextureLoader, img)

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
  
    useFrame(({ camera, mouse }) => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={hovered ? [0.5, 0.5, 0.5] : [0.3, 0.3, 0.3]}
        // onClick={e => setActive(!active)}
        onPointerOver={e => set(true)}
        onPointerOut={e => set(false)}
        onClick={() => setShowMessage(true)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" map={texture} toneMapped={false} />
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
                        className="alert1" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3">
                            <Alert.Heading>
                                <div>
                                  <img src={egg} alt='egg' width='100%' height='100%' />
                                </div>
                            </Alert.Heading>
                            {/* <p onClick={() => {
                                toggle(); 
                                setShowMessage(false)}} style={{ fontSize: '1rem'}} >
                                Pick them up and dispose of them properly.
                            </p> */}
                            <a href='garbage'>
                                <h3 onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    href>
                                    COLLECT
                                </h3>
                            </a>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                IGNORE
                            </h3>
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

  export default Box6;