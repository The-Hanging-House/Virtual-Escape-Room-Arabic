import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';


import './style.css'

extend({ OrbitControls })


const Controls = (props) => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
  }

  import * as THREE from 'three'
  import React, { Suspense, useRef, useState, useEffect } from 'react'
  import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
  import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
  
  import './style.css'
  
  
  
  
  extend({ OrbitControls })
  
  
  
  const Controls = (props) => {
      const { camera, gl } = useThree()
      const ref = useRef()
      useFrame(() => ref.current.update())
      return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
    }
  
  
  const TouchPoints = ({ position, color, texture, onClick }) => {
      const mesh = useRef(null);
      const [hovered, set] = useState(false)
      useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
      return (
          <mesh 
              scale={hovered ? [0.5, 0.5, 0.5] : [0.3, 0.3, 0.3]}
              position={position}
              onClick={onClick}
              onPointerOver={() => set(true)}
              onPointerOut={() => set(false)}>
              <sphereGeometry attach="geometry" args={[1, 32, 32]} />
              <meshBasicMaterial attach="material" color={color} />
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
  
  
  
  
  function Scene1() {
      return (
          <>
              <Canvas camera={{ position: [0, 0, 0.1] }}>
                  <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                      <Suspense fallback={null}>
                          <Dome />
                          <TouchPoints position={[-11, -2, -15]} args={[3, 2, 1]} color='lightblue' />
                          <TouchPoints position={[-11, -6, -15]} args={[3, 2, 1]} color='lightblue' />
                          <TouchPoints position={[23, -3.5, -15]} args={[3, 2, 1]} color='lightblue' />
                          <TouchPoints position={[30, -10, -12]} args={[3, 2, 1]} color='lightblue' />
                          <TouchPoints position={[30, -10, -1]} args={[3, 2, 1]} color='lightblue' />
                          <TouchPoints position={[30, -3, 10]} args={[3, 2, 1]} color='lightblue' /> 
                      </Suspense>
              </Canvas>,
          </>
      );
  }
  
  export default Scene1;
const TouchPoints = ({ position, color, texture, onClick }) => {
    const mesh = useRef(null);
    const [hovered, set] = useState(false)
    const [showTouchpoints, setshowTouchpoints] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh
             
            scale={hovered ? [0.5, 0.5, 0.5] : [0.3, 0.3, 0.3]}
            position={position}
            onClick={() => setShowMessage(true)}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}>
            <Container style={{ paddingTop: '2rem' }}>
                {showTouchpoints && (
                    <TouchPoints
                    onClick={() => setShowMessage(true)}
                    size="lg"
                    >
                    Show Message
                    </TouchPoints>
                )}  
                <CSSTransition
                    in={showMessage}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setshowTouchpoints(false)}
                    onExited={() => setshowTouchpoints(true)}>
                
                    <Alert
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                    >
                        <Alert.Heading>
                            Animated alert message
                        </Alert.Heading>
                        <p>
                            This alert message is being transitioned in and
                            out of the DOM.
                        </p>
                        <TouchPoints onClick={() => setShowMessage(false)}>
                            Close
                        </TouchPoints>
                    </Alert>
                </CSSTransition>
            </Container>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" color={color} />
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




function Scene1() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={null}>
                        <Dome />
                        <TouchPoints position={[-11, -2, -15]} args={[3, 2, 1]} color='lightblue' />
                        <TouchPoints position={[-11, -6, -15]} args={[3, 2, 1]} color='lightblue' />
                        <TouchPoints position={[23, -3.5, -15]} args={[3, 2, 1]} color='lightblue' />
                        <TouchPoints position={[30, -10, -12]} args={[3, 2, 1]} color='lightblue' />
                        <TouchPoints position={[30, -10, -1]} args={[3, 2, 1]} color='lightblue' />
                        <TouchPoints position={[30, -3, 10]} args={[3, 2, 1]} color='lightblue' />
                    </Suspense>
            </Canvas>,
        </>
    );
}

export default Scene1;