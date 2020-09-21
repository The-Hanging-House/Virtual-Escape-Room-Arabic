import * as THREE from 'three'
import React, { Suspense, useRef } from 'react'

import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import Logout from '../logout/Logout'
import Loader from '../../img/loader.gif'
import { Html } from 'drei';
// import Timer from '../timer/Timer'
import Task1 from '../popup/Task1';
import TouchPoint5 from '../touchpoints/scene6/Touchpoint5'
import TouchPoint2 from '../touchpoints/scene6/Touchpoint2'
import TouchPoint3 from '../touchpoints/scene6/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene6/Touchpoint4'
import TouchPoint6 from '../touchpoints/scene1/Touchpoint6'
import TouchPoint7 from '../touchpoints/scene1/Touchpoint7'
import './style.css'

import Music2 from '../../audio/Music2'

extend({ OrbitControls })

const Controls = (props) => {
    const { camera, gl } = useThree()
    const ref = useRef()
    useFrame(() => ref.current.update())
    return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
  }

  var data;
  data = localStorage.getItem('myDataKey');
  var now; 

  setInterval(function(){
    now = localStorage.getItem('scene4');
    if(now!=='NaN'){
      Scene6();
    }
    if(localStorage.getItem('myDataKey') === "1598355449119"){
      localStorage.setItem('myDataKey', "0");
      window.location.href = "/timesup";
    }
  }, 500);


  function obama(){
    
      var datetime = data;    
      var now = localStorage.getItem('scene4');
  
      if( isNaN(datetime) )
      {
        return "";
      }
    
      if (datetime < now) {
        var milisec_diff = now - datetime;
      }else{
        var milisec_diff = datetime - now;
      }
      var final = Math.round(900-(milisec_diff/1000));
      if (final < 0){
        final = 0;
      }
  
      return final
    }
    
    function Timer() {
      var minutes = obama() //minutes passed since start
      console.log("minutes", minutes)
      // const [counter, setCounter] = React.useState(900);
      const [counter, setCounter] = React.useState(minutes);
    
      React.useEffect(() => {
          counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
      }, [counter]);
    
      console.log(counter);
      var mins = Math.floor(counter/60);
      var secs = counter - mins * 60;
      if (secs < 10){
        secs = "0" + secs;
      }
      var arigato = mins + ":" +secs;
  
      if (counter === 0){
        window.location.href = "/timesup"
      }
    
      return (
         
          <div className="bg-text5">
              <div>{arigato}</div>
          </div>
      )
    }


const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, 'trunk3.jpg')
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
        <h1>2<span>/7</span></h1>
        <h3>CHALLENGES</h3>
    </div>
)
}
const counter = <Counter />
const logout = <Logout />
const elementorso = <Timer/>

function Scene6() {
    return (
        <>
        {/* <Timer/> */}
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2}  />
                    <Suspense fallback={
                      <Html center style={{ color: 'white' }}>
                        <img src={Loader} />
                        <div>
                            <h1 style={{ color: '#F8A61F', textAlign: 'center'}}>Loading...</h1>
                        </div>
                      </Html>
                    }>
                        <Dome />
                        <TouchPoint5 position={[2.8, -5.5, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[8.4, -6.5, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[-2, -5, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[-1, -3.2, 0.4]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint2 position={[-15, -3, 1]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint3 position={[-4.5, -8.5, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint4 position={[-2, -20.8, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        {/* <TouchPoint4 position={[8, -19.6, -15]} args={[3, 2, 1]} color='#F8A61F' /> */}
                        <TouchPoint6 position={[6, -9, 5]} args={[3, 2, 1]} color='#F8A61F' />

                        <TouchPoint7 position={[-0.8, -5, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint7 position={[-1, -6.8, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        
                    </Suspense>
            </Canvas>,
            <Music2 />
            {elementorso}
            {counter}
            {logout}
        </>
    );
}

export default Scene6;