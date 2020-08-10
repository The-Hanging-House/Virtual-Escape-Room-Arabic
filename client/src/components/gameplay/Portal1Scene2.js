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
                window.location.href='scene2'
            }}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" color={color} /> 
        </mesh>
    )
}



const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, 'portal1scene2.jpg')
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

function Portal1Scene2() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={null}>
                        <Dome />
                        
                        
                        <Portal position={[-16, -7, 5]} args={[3, 2, 1]} color='#fff' />
                        {/* <TouchPoint2 position={[1, -10, -30]} args={[3, 2, 1]} color='#F8A61F' /> */}
                        {/* <TouchPoint3 position={[-20, -2, -15]} args={[3, 2, 1]} color='#F8A61F' /> */}
                    </Suspense>
            </Canvas>,
        </>
    );
}

export default Portal1Scene2;