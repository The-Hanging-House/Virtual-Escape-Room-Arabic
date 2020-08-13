import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'

import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Html } from 'drei';

import Task1 from '../popup/Task1';
import TouchPoint1 from '../touchpoints/scene4/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene4/Touchpoint2'
// import TouchPoint3 from '../touchpoints/scene4/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene4/Touchpoint4'
import TouchPoint5 from '../touchpoints/scene4/Touchpoint5'
import TouchPoint6 from '../touchpoints/scene4/Touchpoint6'
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



const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, 'trunk1.jpg')
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    )
  }


function Scene4() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={null}>
                        <Dome />
                        <Task />
                        <TouchPoint1 position={[-6.5, -4, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint2 position={[-15, -3.5, -1.5]} args={[3, 2, 1]} color='#F8A61F' />
                        {/* <TouchPoint3 position={[1, -9, -15]} args={[3, 2, 1]} color='#F8A61F' /> */}
                        <TouchPoint4 position={[-11, -20, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[5, -9, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint6 position={[4, -7, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        
                    </Suspense>
            </Canvas>,
            <Music1 />
        </>
    );
}

export default Scene4;
