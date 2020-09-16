import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Loader from '../../img/loader.gif'

import Logout from '../logout/Logout'

import { Html } from 'drei';

import TouchPoint1 from '../touchpoints/scene1/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene1/Touchpoint2'
import TouchPoint3 from '../touchpoints/scene1/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene1/Touchpoint4'
import TouchPoint5 from '../touchpoints/scene1/Touchpoint5'
import TouchPoint6 from '../touchpoints/scene1/Touchpoint6'
import TouchPoint7 from '../touchpoints/scene1/Touchpoint7'
import TouchPoint8 from '../touchpoints/scene1/Touchpoint8'
import TouchPoint9 from '../touchpoints/scene1/Touchpoint9'
import TouchPoint10 from '../touchpoints/scene1/Touchpoint10'
import TouchPoint11 from '../touchpoints/scene1/Touchpoint11'
// import Timer from '../timer/Timer'
import './style.css'

import Music1 from '../../audio/Music1'
import hint from '../../img/click.png'
import A from '../../img/a.png'

// import Tp from '../../img/tp.svg'


extend({ OrbitControls })


const Controls = (props) => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
  }


const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, 'background.jpg')
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    )
  }


function Timer() {
  var minutes = 900 //minutes passed since start
  const [counter, setCounter] = React.useState(minutes);

  React.useEffect(() => {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      if(localStorage.getItem('myDataKey') === "1598355449119" || localStorage.getItem('myDataKey') === "0"){
        localStorage.setItem('myDataKey', "0");
        // window.location.href = "/timesup";
      }
  }, [counter]);
  var mins = Math.floor(counter/60);
  var secs = counter - mins * 60;
  if (secs < 10){
    secs = "0" + secs;
  }
  var arigato = mins + ":" + secs;

  if (counter === 0){
    
    window.location.href = "/timesup"
  }

  return (
     
      <div className="bg-text5">
          <div>{arigato}</div>
        
      </div>
  )
}
function Counter(){
    return (
        <div className="bg-text6">
            <img src={A} />
        </div>
    )
}

function Initimg(){
  const [displayProp, setDisplayProp] = React.useState(false);

  setTimeout(function(){
    setDisplayProp(true);
    console.log("TEXT")
  }, 6000);

    return (
    <>
    <div style={{display: displayProp? 'none' : 'block', position: "absolute", zIndex: "200", left: "60%", top: "50%", transform: "translate(-50%, -50%)"}}>
        <img src = {hint} style={{width: "50%", height: "50%"}}/>
    </div>
    </>
    )
}
 
 
const intiImage = <Initimg/>

const elementorso = <Timer/>
const counter = <Counter />
const logout = <Logout />

function Scene1() {
    return (
      
        <>
          
            <Canvas camera={{ position: [0.3, 0, 0.1] }}>
                <Controls enableDamping dampingFactor={0.1} enableZoom={false} />
                    <Suspense fallback={
                      <Html center style={{ color: 'white' }}>
                        <img src={Loader} />
                        <div>
                            <h1 style={{ color: '#F8A61F', textAlign: 'center'}}>Loading...</h1>
                        </div>
                      </Html>
                    }>
                        <Dome />
                        
                        <TouchPoint1 position={[-4, -5.6, 0]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint1 position={[8, -6.6, -3]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint11 position={[3.2, -15, 5]} args={[3, 2, 1]} color='#F8A61F' />

                        <TouchPoint2 position={[-10, -2, 1.5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint3 position={[-11, -10, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint4 position={[-10, -23, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint9 position={[11, -16.7, -15]} args={[3, 2, 1]} color='#F8A61F' />
                       
                        {/* v Mid plant touchpoint v */}
                        <TouchPoint8 position={[3.2, -6, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        {/* v Far left plant touchpoint v */}
                        <TouchPoint8 position={[10, -7.5, 4.5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint8 position={[-1.7, -5, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[-1, -3.5, 0.4]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint6 position={[5.5, -8, 4]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint7 position={[-.73, -6, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        {/* v far right touchpoint v */}
                        <TouchPoint10 position={[-32, -23, -15]} args={[3, 2, 1]} color='#F8A61F' /> 
                        
                    </Suspense>
            </Canvas> 
            <Music1 />
            {intiImage} 
            {elementorso}
            {logout}
            {counter},
        </>
    );
}

export default Scene1;