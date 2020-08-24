import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// import Counter from '../counter/Counter'

import Logout from '../logout/Logout'

// import { Html } from 'drei';

import TouchPoint1 from '../touchpoints/scene1/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene1/Touchpoint2'
import TouchPoint3 from '../touchpoints/scene1/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene1/Touchpoint4'
import TouchPoint5 from '../touchpoints/scene1/Touchpoint5'
import TouchPoint6 from '../touchpoints/scene1/Touchpoint6'
import TouchPoint7 from '../touchpoints/scene1/Touchpoint7'
// import Timer from '../timer/Timer'
import './style.css'

import Music1 from '../../audio/Music1'

// import Tp from '../../img/tp.svg'


extend({ OrbitControls })


var someData = new Date().getTime();

localStorage.setItem('myDataKey', someData);

const Controls = (props) => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
  }



//   const Task = () => {
//     const [showPopup] = useState(false);
     
//     return (
//         <mesh>
//             <Html>
//                 <div>Hi</div>
//             </Html>
//         </mesh>
//     )
// }



const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, 'background.jpg')
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    )
  }
var data;
if (data===''){
    setInterval(function(){
        
            var data = localStorage.getItem('myDataKey');
        
    }, 1000);
}

function Timer() {
  var minutes = 600 //minutes passed since start
  console.log("minutes", minutes)
  // const [counter, setCounter] = React.useState(600);
  const [counter, setCounter] = React.useState(minutes);

  React.useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  return (
     
      <div className="bg-text2">
         
                
          <div>Timer: {counter}</div>
        
      </div>
  )
}

function Counter(){
    return (
        <div className="bg-text3">
            <h1>0<span>/7</span></h1>
            <h3>CHALLENGES</h3>
        </div>
    )
}

const elementorso = <Timer/>
const counter = <Counter />
const logout = <Logout />

function Scene1() {
    return (
      
        <>
        {/* <Task /> */}
        {elementorso}
        {/* <Timer/> */}
        {counter}
        {logout}
            <Canvas camera={{ position: [-1, 0, 0.1] }}>
                <Controls enableDamping dampingFactor={0.1}  />
                    <Suspense fallback={null}>
                        <Dome />
                        
                        <TouchPoint1 position={[-4, -4, 0]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint2 position={[-10, -1, 1]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint3 position={[-11, -5, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint4 position={[-11, -23, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[-30, -20, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint6 position={[6, -9, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint7 position={[0, -5, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        
                    </Suspense>
            </Canvas>,
            <Music1 />
        </>
    );
}

export default Scene1;
