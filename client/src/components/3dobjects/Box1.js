import * as THREE from 'three'
import React, { useState, useRef } from 'react'
import { useFrame, useLoader } from 'react-three-fiber'

import img from './../../img/pp1.png'

function Box1(props) {
    const mesh = useRef()
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    const texture = useLoader(THREE.TextureLoader, img)
  
    useFrame(({ camera, mouse }) => {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    })
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={e => setActive(!active)}
        onPointerOver={e => setHover(true)}
        onPointerOut={e => setHover(false)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" map={texture} toneMapped={false} />
      </mesh>
    )
  }

  export default Box1;