import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'

import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Html } from 'drei';

import Task1 from '../popup/Task1';
import TouchPoint1 from '../touchpoints/scene3/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene3/Touchpoint2'
import TouchPoint3 from '../touchpoints/scene3/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene3/Touchpoint4'
// import TouchPoint5 from '../touchpoints/scene3/Touchpoint5'
import TouchPoint6 from '../touchpoints/scene3/Touchpoint6'
import './style.css'

import Music1 from '../../audio/Music1'

extend({ OrbitControls })

const Controls = (props) => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
  }



  const Task = () => {
    const [showPopup] = useState(false);
     
    return (
        <mesh>
            <Html>
                <div>{showPopup && <Task1 />}</div>
            </Html>
        </mesh>
    )
}

const Portal = ({ position, color, onClick }) => {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    // const [showMessage, setShowMessage] = useState(false);
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.4, 0.4, 0.4] : [0.3, 0.3, 0.3]}
            position={position}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={(e) => {
                window.location.href='scene3'
            }}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" color={color} /> 
        </mesh>
    )
}



const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, 'portal1scene3.jpg')
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    )
  }


function Portal1Scene3() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={null}>
                        <Dome />
                        <Task />
                        
                        <TouchPoint1 position={[-1, -4, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint2 position={[-15, -8, 0]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint3 position={[15, -7, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint4 position={[15, -26, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <Portal position={[15, -15, 5]} args={[3, 2, 1]} color='#fff' />
                        <TouchPoint6 position={[9, -6, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        
                    </Suspense>
            </Canvas>,
            <Music1 />
        </>
    );
}

export default Portal1Scene3;
