import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'


import TouchPoint1 from '../touchpoints/scene2/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene2/Touchpoint2'
import TouchPoint3 from '../touchpoints/scene2/Touchpoint3'
import Portal from '../touchpoints/scene2/Portal'


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


// function Portals() {
//   const [which, set] = useState(0)
//   const { link, ...props } = store[which]
//   const maps = useLoader(THREE.TextureLoader, store.map(entry => entry.url))
//   return <Dome onClick={() => set(link)} {...props} texture={maps[which]} />
// }

function Scene2() {
    return (
        <>
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={null}>
                        <Dome />
                        
                        
                        <TouchPoint1 position={[25, 1, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint2 position={[25, -27, -30]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint3 position={[-20 -2, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <Portal position={[-10, -12, -20]} args={[3, 2, 1]} color='#fff' />
                    </Suspense>
            </Canvas>,
        </>
    );
}

export default Scene2;