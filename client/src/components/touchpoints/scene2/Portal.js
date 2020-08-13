import React, { useState, useEffect } from 'react'


function Portal({ position, color, onClick }) {
    const [hovered, set] = useState(false)
    // const [showButton, setShowButton] = useState(true);
    // const [showMessage, setShowMessage] = useState(false);
    
    useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
    return (
        <mesh 
            scale={hovered ? [0.6, 0.6, 0.6] : [0.5, 0.5, 0.5]}
            position={position}
            onPointerOver={() => set(true)}
            onPointerOut={() => set(false)}
            onClick={(e) => {
                window.location.href='portal1scene2'
            }}>
            <sphereGeometry attach="geometry" args={[1, 32, 32]} />
            <meshBasicMaterial attach="material" color={color} /> 
        </mesh>
    )
}

export default Portal;