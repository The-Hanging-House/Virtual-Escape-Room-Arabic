import * as THREE from 'three'
import React, { Suspense, useRef, useState } from 'react'

import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Html } from 'drei';

import Task1 from '../popup/Task1';
// import TouchPoint1 from '../touchpoints/scene5/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene5/Touchpoint2'
import TouchPoint4 from '../touchpoints/scene1/Touchpoint4'
import TouchPoint6 from '../touchpoints/scene1/Touchpoint6'
import TouchPoint7 from '../touchpoints/scene1/Touchpoint7'

// import Timer from '../timer/Timer'
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

var data;
data = localStorage.getItem('myDataKey');
  

function obama(){
  
    var datetime = data;
    console.log("datetime", datetime)
  
    var now = new Date().getTime();

    if( isNaN(datetime) )
    {
      return "";
    }
  
    if (datetime < now) {
      var milisec_diff = now - datetime;
    }else{
      var milisec_diff = datetime - now;
    }
    var final = Math.round(600-(milisec_diff/1000)) - 50;
    if (final < 0){
      final = 0;
    }

    return final
  }
  
  function Timer() {
    var minutes = obama() //minutes passed since start
    console.log("minutes", minutes)
    // const [counter, setCounter] = React.useState(600);
    const [counter, setCounter] = React.useState(minutes);
  
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
  
    return (
       
        <div className="bg-text2">
            <h1>10:00</h1>
           
                  
            <div>Timer: {counter}</div>
          
        </div>
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


function Counter(){
return (
    <div className="bg-text3">
        <h1>3<span>/7</span></h1>
        <h3>CHALLENGES</h3>
    </div>
)
}
const counter = <Counter />

const elementorso = <Timer/>
function Scene5() {
    return (
        <>
        {elementorso}
        {counter}
        {/* <Timer/> */}
            <Canvas camera={{ position: [-0, 0, 0.01] }}>
                <Controls enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={null}>
                        <Dome />
                        <Task />
                        {/* <TouchPoint1 position={[-.2, -1, -2]} args={[3, 2, 1]} color='#F8A61F' /> */}
                        <TouchPoint2 position={[0.85, -0.6, -2]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint4 position={[22, -25, -5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint6 position={[-10, -12, 4]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint7 position={[-12, -15, -10]} args={[3, 2, 1]} color='#F8A61F' />
                    </Suspense>
            </Canvas>,
            <Music2 />
        </>
    );
}

export default Scene5;
