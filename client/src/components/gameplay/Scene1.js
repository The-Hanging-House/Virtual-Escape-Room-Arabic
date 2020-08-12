import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'

import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei'
import Timer from '../timer/Timer'

import './style.css'
import { TubeBufferGeometry } from 'three';
extend({ OrbitControls })

const Controls = (props) => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />  }


const TouchPoints1 = ({ position, color, onClick }) => {
const [showText, setShowText] = useState(false);
   
// const setYes =(e)=>{
//     showMessage1=true;
// this.TouchPoints2();
//     alert(showMessage1)
// }
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
const [showMessage, setShowMessage] = useState(false);
 //const [showMessage, setYes] = useState(false);
    console.log("1",showMessage)
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.5, 0.5, 0.5] : [0.3, 0.3, 0.3]}
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
                            <p onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}>
                                Pick them up and dispose of them properly.
                            </p>
                            <p onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}>
                                Ignore it.
                            </p>
                            <Button onClick={() => setShowMessage(false)}>
                                Close
                            </Button>

                            <Button onClick={() => setShowText(!showText)}>
                                Yes
                            </Button>
                         
                        </div>
                        </Alert>
                   
                    </CSSTransition>
                    

                </Container>
                {showText &&  <Alert
                        className="alert" style={{color : 'white', padding : '5px', width : '40vw', position:'absolute', backgroundColor: 'rgba(230, 206, 166, 0.9)'}}
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside">
                            <Alert.Heading>
                                <h1>
                                Opps! You should see your sorroundings first!
                                </h1>
                            </Alert.Heading>
                            <Button href="/scene2">
                                Proceed
                            </Button>
                        </div>
                        </Alert>}
                
            </Html>
        </mesh>
    )
}

const TouchPoints3 = ({ position, color, onClick }) => {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.5, 0.5, 0.5] : [0.3, 0.3, 0.3]}
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
                                Opps! You should see your sorroundings first!
                                </h1>
                            </Alert.Heading>
                            <p onClick={() => setShowMessage(false)} style={{ fontSize: '2rem'}}>
                                Ok.
                            </p>
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

const TouchPoints2 = ({ position, color, onClick }) => {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.5, 0.5, 0.5] : [0.3, 0.3, 0.3]}
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
                                Opps! You should see your sorroundings first!
                                </h1>
                            </Alert.Heading>
                            <Button href="/scene2">
                                Proceed
                            </Button>
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}



const Task1 = () => {
    const [showMain, setMainMessage] = useState(false);
    return (
        <mesh>
            <Html>
                <Container>

<Timer/>
                    <CSSTransition
                        in={showMain}
                        timeout={300}
                        classNames="alert"
                        unmountOnExit>
                        <Alert
                        className="alert" style={{color : 'blue', padding : '5px', width : '50vw', backgroundColor: 'rgba(230, 206, 166, 0.9)', position: 'absolute', top: '50%', left: '50%', marginRight: '-50%', transform: 'translate(-50%, -50%)'}}
                        variant="primary"
                        dismissible
                        onClose={() => setMainMessage(false)}
                        >
                        <div className="alert-inside">
                            <Alert.Heading>
                                <h1>
                                    Hi
                                </h1>
                            </Alert.Heading>
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}




const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, 'background.jpg')
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    )
  }


// function Portals() {
//   const [which, set] = useState(0)
//   const { link, ...props } = store[which]
//   const maps = useLoader(THREE.TextureLoader, store.map(entry => entry.url))
//   return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
// }

function Scene1() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                
                    <Suspense fallback={null}>
                        <Dome />
                        <TouchPoints1 position={[-4, -3, 5]} args={[3, 2, 1]} color='lightblue' />
                        <TouchPoints2 position={[-10, -1, 1]} args={[3, 2, 1]} color='lightblue' />
                        <TouchPoints3 position={[-11, -5, -15]} args={[3, 2, 1]} color='lightblue' />
                        <Task1 />
                    </Suspense>
            </Canvas>,
        </>
    );
}


export default Scene1;
// -30, -5, 1
// -4, -3, 5
// -11, -20, -15