import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'

import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Html } from 'drei';

import Task1 from '../popup/Task1';
// import TouchPoint1 from '../touchpoints/scene5/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene5/Touchpoint2'
import Timer from '../timer/Timer'
import './style.css'

import Music2 from '../../audio/Music2'

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
    const texture = useLoader(THREE.TextureLoader, 'trunk2.jpg')
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    )
  }


function Scene5() {
    return (
        <>
        <Timer/>
            <Canvas camera={{ position: [-0, 0, 0.01] }}>
                <Controls enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={null}>
                        <Dome />
                        <Task />
                        {/* <TouchPoint1 position={[-.2, -1, -2]} args={[3, 2, 1]} color='#F8A61F' /> */}
                        <TouchPoint2 position={[0.85, -0.6, -2]} args={[3, 2, 1]} color='#F8A61F' />
                        {/* <TouchPoint3 position={[-11, -5, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint4 position={[-11, -23, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint6 position={[6, -9, 5]} args={[3, 2, 1]} color='#F8A61F' /> */}
                    </Suspense>
            </Canvas>,
            <Music2 />
        </>
    );
}

export default Scene5;
