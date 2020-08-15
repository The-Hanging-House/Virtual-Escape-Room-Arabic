import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


import TouchPoint1 from '../touchpoints/scene2/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene2/Touchpoint2'
import TouchPoint3 from '../touchpoints/scene2/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene2/Touchpoint4'

import Portal from '../touchpoints/scene2/Portal'

import Timer from '../timer/Timer'

import Box1 from '../3dobjects/Box1'
import Box2 from '../3dobjects/Box2'
import Box3 from '../3dobjects/Box3'
import Box4 from '../3dobjects/Box4'
import Box5 from '../3dobjects/Box5'
import Box6 from '../3dobjects/Box6'

import './style.css'
extend({ OrbitControls })

const Controls = (props) => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
  }

const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, 'background2.jpg')
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    )
  }


function Scene2() {
    return (
        <>
          <Timer/>
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={null}>
                        <Dome />  
                        <pointLight position={[10, 10, 10]} />
                        <Box1 position={[-10, -5, -11]} />
                        <Box2 position={[10, 1, -13]} />
                        <Box3 position={[10, -12, -20]} />
                        <Box4 position={[10, -9, 3]} />
                        <Box5 position={[10, -2, -30]} />
                        <Box6 position={[-10, 2.8, -18]} />
                        <TouchPoint1 position={[25, 1, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint2 position={[25, -27, -30]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint3 position={[-5, -2, -8]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint4 position={[10, -4, -18]} args={[3, 2, 1]} color='#F8A61F' />
                        <Portal position={[-10, -12, -20]} args={[3, 2, 1]} color='#fff' />
                    </Suspense>
            </Canvas>,
        </>
    );
}

export default Scene2;