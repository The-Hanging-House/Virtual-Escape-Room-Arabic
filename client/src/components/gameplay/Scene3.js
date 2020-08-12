import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Html } from 'drei'
import { Popconfirm } from 'antd'
import 'antd/dist/antd.css'

import './style.css'

extend({ OrbitControls })

const Controls = (props) => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
  }



const TouchPoints1 = ({ position, color, onClick }) => {
    const [hovered, set] = useState(false)
    const [showButton, setShowButton] = useState(true);
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
                        className="alert" style={{color : 'blue', padding : '5px', width : '50vw', backgroundColor: 'rgba(230, 206, 166, 0.9)'}}
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside">
                            <Alert.Heading>
                                <h1>
                                Animated alert message
                                </h1>
                            </Alert.Heading>
                            <p>
                                This alert message is being transitioned in and
                                out of the DOM.
                            </p>
                            <h1 onClick={() => setShowMessage(false)}>
                                Close
                            </h1>
                            <Button onClick={() => setShowMessage(false)}>
                                Close
                            </Button>
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
        </mesh>
    )
}

// const TouchPoints2 = ({ position, color, texture, onClick }) => {
//     const mesh = useRef(null);
//     const [hovered, set] = useState(false)
//     useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
//     return (
//         <mesh 
//             scale={hovered ? [0.5, 0.5, 0.5] : [0.3, 0.3, 0.3]}
//             position={position}
//             onClick={() => console.log()}
//             onPointerOver={() => set(true)}
//             onPointerOut={() => set(false)}>
//             <sphereGeometry attach="geometry" args={[1, 32, 32]} />
//             <meshBasicMaterial attach="material" color={color} />
//         </mesh>
//     )
// }


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
                        
                        <TouchPoints1 position={[-11, -2, -15]} args={[3, 2, 1]} color='lightblue' />
                        {/* <TouchPoints2 position={[-11, -6, -15]} args={[3, 2, 1]} color='lightblue' /> */}
                    </Suspense>
            </Canvas>,
        </>
    );
}

export default Scene1;