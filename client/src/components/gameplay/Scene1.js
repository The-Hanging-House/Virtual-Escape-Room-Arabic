import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import './style.css'
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'

extend({ EffectComposer, RenderPass })

// import { Container, Alert } from 'react-bootstrap';
// import { CSSTransition } from 'react-transition-group';



extend({ OrbitControls })


const Controls = (props) => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
  }



const TouchPoints1 = ({ position, color, texture, onClick }) => {
    const mesh = useRef(null);
    const [hovered, set] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.5, 0.5, 0.5] : [0.3, 0.3, 0.3]}
            position={position}
            onClick={() => console.log('Hi!')}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" color={color} />
        </mesh>
    )
}

const TouchPoints2 = ({ position, color, texture, onClick }) => {
    const mesh = useRef(null);
    const [hovered, set] = useState(false)
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.5, 0.5, 0.5] : [0.3, 0.3, 0.3]}
            position={position}
            onClick={() => console.log('Hello!')}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" color={color} />
        </mesh>
    )
}

const Example = () => {
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);
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
                        <TouchPoints1 position={[-11, -2, -15]} args={[3, 2, 1]} color='lightblue' />
                        <TouchPoints2 position={[-11, -6, -15]} args={[3, 2, 1]} color='lightblue' />
                    </Suspense>
            </Canvas>,
        </>
    );
}

export default Scene1;