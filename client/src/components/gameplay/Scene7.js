import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import TouchPoint5 from '../touchpoints/scene7/Touchpoint5'
import TouchPoint6 from '../touchpoints/scene7/Touchpoint6'

import Portal from '../touchpoints/scene2/Portal'

// import Timer from '../timer/Timer'


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


function Scene7() {
    return (
        <>
          {/* <Timer/> */}
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={null}>
                        <Dome />  
                        <TouchPoint5 position={[7, -7, -20]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint6 position={[5, -12, -16]} args={[3, 2, 1]} color='#F8A61F' />
                        <Portal position={[-10, -12, -20]} args={[3, 2, 1]} color='#fff' />
                    </Suspense>
            </Canvas>,
        </>
    );
}

export default Scene7;