import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect  } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Music1 from '../../audio/Music1'
import keyPickup from '../../audio/keyPickup.mp3'
import { Html } from 'drei';

import Loader from '../../img/loader.gif'

import img from './../../img/key.png'

import Logout from '../logout/Logout'
import X from './../../img/x.svg'

import Task1 from '../popup/Task1';
import TouchPoint2 from '../touchpoints/scene3/Touchpoint2'
// import TouchPoint3 from '../touchpoints/scene3/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene3/Touchpoint4'
import TouchPoint5 from '../touchpoints/scene3/Touchpoint5'
import TouchPoint6 from '../touchpoints/scene3/Touchpoint6'
import TouchPoint7 from '../touchpoints/scene1/Touchpoint7'
import TouchPoint8 from '../touchpoints/scene1/Touchpoint8'
import TouchPoint9 from '../touchpoints/scene1/Touchpoint9'
import TouchPoint10 from '../touchpoints/scene1/Touchpoint10'

// import Portal from '../touchpoints/scene3/Portal'
// import Timer from '../timer/Timer'
import './style.css'



extend({ OrbitControls })

var data;
data = localStorage.getItem('myDataKey');
var now;  
var tt = 0;
var toolCollected = 0;
// window.location.reload(false);

setInterval(function(){
  now = localStorage.getItem('scene1');
  if(now!=='NaN'){
    Scene3();
  }
  if(localStorage.getItem('myDataKey') === "1598355449119"){
    localStorage.setItem('myDataKey', "0");
    window.location.href = "/timesup";
  }
}, 500);

function obama(){
  
    var datetime = data;
    var now = localStorage.getItem('scene1');
   

    if( isNaN(datetime) )
    {
      return "";
    }
  
    if (datetime < now) {
      var milisec_diff = now - datetime;
    }else{
      var milisec_diff = datetime - now;
    }
    var final = Math.round(900-(milisec_diff/1000)) - 10;
    if (final < 0){
      final = 0;
    }

    return final;
  }
  
  function Timer() {
    var minutes = obama() //minutes passed since start
    // console.log("minutes", minutes)
    // const [counter, setCounter] = React.useState(900);
    const [counter, setCounter] = React.useState(minutes);
  
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
  
    var mins = Math.floor(counter/60);
    var secs = counter - mins * 60;
    if (secs < 10){
      secs = "0" + secs;
    }
    var arigato = mins + ":" + secs;
  
    if (counter === 0){
      console.log("Fail");
      window.location.href = "/timesup"
    }
  
    return (
       
        <div className="bg-text5">
            <div>{arigato}</div>
        </div>
    )
  }

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

// Box code goes here
function Box1(props) {
  const mesh = useRef()
  const [showMessage, setShowMessage] = useState(false);
  const [collectedMessage, setCollectedMessage] = useState(false)
  const [hovered, set] = useState(false)
  const texture = useLoader(THREE.TextureLoader, img)
  if(collectedMessage){
    toolCollected = 1;
  }
  


  if(showMessage){
    setTimeout(function(){
      setCollectedMessage(true);
    }, 3000);
  }

  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])

  return (
  
    <mesh
      {...props}
      ref={mesh}
      rotation={[2, 15, 0]}
      scale={collectedMessage ? [0, 0, 0, 0] : [5, 5, 5, 5]}
      onClick={() => {setShowMessage(true); new Audio(keyPickup).play()}}>
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" map={texture} toneMapped={false} transparent />
      <Html center>
              <Container>
                  <CSSTransition
                      in={showMessage}
                      timeout={300}
                      classNames="alert1"
                      unmountOnExit
                  >
                      <Alert
                      className="alert1" 
                      variant="primary"
                      dismissible
                      onClose={() => setShowMessage(false)}
                      >
                      <div className="alert-insides-keys" style={{visibility: collectedMessage? 'hidden' : 'visible', top: "2px", width: '350px', height: "208px" }}>
                            <Alert.Heading>
                            <p style={{ transform: 'translate(10px, 10px)', fontSize:'1rem' }}>
                              Great! You found your keys.
                            </p>
                            </Alert.Heading>
                              
                      </div>
                      </Alert>
                  </CSSTransition>
              </Container>
          </Html>
    </mesh>
  )
}

// Touchpoint 3 code goes here
function TouchPoint3({ position, color, onClick }) {
  const [hovered, set] = useState(false)
  const [CON, setCON] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [innerText, setInnerText] = useState("Seems like the trunk is locked, but you left the lights and music on.");
  const [wrongAlert, setWrongAlert] = useState(true);
  
  const [show, setShow] = useState(false);

  // function that checks the number of boxes collected
  setInterval(function(){

    if(toolCollected === 1){
      setShow(true);
      setInnerText("Which of the following actions would you like to take?")
    } 

    if(!wrongAlert){
      setTimeout(function(){
        // console.log("false");
        setWrongAlert(true);
      }, 1000);
    }
  }, 1000);

  
  const onMouseOver = event => {
      const el = event.target;
      let colorhex = "#F8A61F"
      el.style.background = colorhex;
    };

    const onMouseOut = event => {
      const el = event.target;
      let black = "#FFE7B0";
      el.style.background = black;
    };

    if(CON){
      var scene3 = new Date().getTime();
      localStorage.setItem('scene3', scene3);
      console.log(localStorage.getItem('scene3'));
      window.location.href = '/scene4';
    };
  
  useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  return (
    <mesh 
    // scale={show ? [0.5, 0.5, 0.5] : [0, 0, 0]}
    scale={hovered ? [1, 1, 1, 1] : [1, 1, 1, 1]}
    position={position}
    // ref={mesh}
    rotation={[3, 3, 0]}
    onPointerOver={() => set(true)}
    onPointerOut={() => set(false)}
    onClick={() => setShowMessage(true)}>
    <planeGeometry attach="geometry" args={[12, 10, 10]} />
    <meshBasicMaterial attach="material" transparent  opacity={hovered? 0.1 : 0} /> 
    <Html center>
    <Container>
                  <CSSTransition
                      in={showMessage}
                      timeout={300}
                      className={ show? "alert1" : "alert2"}
                      unmountOnExit
                      // onEnter={() => setShowButton(false)}
                      // onExited={() => setShowButton(true)}
                  >
                      <Alert
                      className={ show? "alert1" : "alert2"}
                      variant="primary"
                      // dismissible
                      onClose={() => setShowMessage(false)}
                      >
                      <div className={ show? "alert-inside" : "alert-inside-keys4" }>
                      <button className="close" onClick={() => setShowMessage(false)}><img src={X} ></img></button>
                          <Alert.Heading>
                          <p style={{ color: 'black' }}>
                              {/* The car door is not locked, what should I do? */}
                              </p>
                              <h3 className='mcq-bound-total'>
                                {innerText}
                              </h3>
                              {/* <a href="scene4"> */}
                                      {/* <h3 style={{fontWeight: '800', position: 'absolute', top: '-19px', left: '-33px'}} >
                                      {show? 'A. ' : ""}
                                      </h3>  */}
                              <div className='mcq-bounding-text'>

                                  <h3 className='mcq-text' style={{ display: wrongAlert? 'block' : 'none' }} 
                                          onMouseEnter={event => onMouseOver(event)}
                                          onMouseOut={event => onMouseOut(event)} 
                                          onClick={() => setCON(true)}
                                          >
                                      {/* <h3 style={{fontWeight: '800', position: 'absolute', top: '-19px', left: '-33px'}} >
                                      {show? 'B. ' : ""}
                                      </h3>  */}
                                      {show? 'Open the trunk with your keys to reach the radio.' : ""}
                                  </h3>
                              <h3 className='mcq-text' style={{ display: wrongAlert? 'block' : 'none' }} onClick={() => setShowMessage(false)}
                                      onMouseEnter={event => onMouseOver(event)}
                                      onMouseOut={event => onMouseOut(event)}
                                      onClick={() => setWrongAlert(false)}>
                                      {show? 'Break the trunk door open in order to search for more clues.' : ""}
                                  </h3>
                                  <h3 className='mcq-text' style={{ display: wrongAlert? 'block' : 'none'}} onClick={() => setShowMessage(false)}
                                      onMouseEnter={event => onMouseOver(event)}
                                      onMouseOut={event => onMouseOut(event)}
                                      >
                                        {/* <h3 style={{fontWeight: '800', position: 'absolute', top: '-19px', left: '-33px'}} >
                                      {show? 'C. ' : ""}
                                      </h3>  */}
                                      {show? 'Put the keys in your pocket and continue exploring your surroundings for more clues.' : ""}
                                  </h3>

                                  </div>
                              {/* </a> */}
                              <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                              // onMouseEnter={event => onMouseOver(event)}
                              // onMouseOut={event => onMouseOut(event)}
                              >
                                  {/* {show? 'CLOSE' : "IGNORE IT"} */}
                              </h3>
                              <h3 style={{ display: wrongAlert? 'none' : 'block', position: 'absolute', top: '88px' }}>Try Again!</h3>
                          </Alert.Heading>
                      </div>
                      </Alert>
                  </CSSTransition>
              </Container>
          </Html>
      </mesh>
  )
}



const Dome = () => {
    const texture = useLoader(THREE.TextureLoader, 'clean.jpg')
    return (
        <mesh>
            <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.BackSide} />
        </mesh>
    )
  }

function Counter(){
  return (
      <div className="bg-text6">
          <h1>1<span>/7</span></h1>
          <h3>CHALLENGES</h3>
      </div>
  )
}
const counter = <Counter />
const logout = <Logout />
const elementorso = <Timer/>

function Scene3() {
    return (
        <>
        {/* <Timer/> */}
            <Canvas camera={{ position: [0, 0, 0.1] }}>
                <Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} />
                    <Suspense fallback={
                      <Html center style={{ color: 'white' }}>
                        <img src={Loader} />
                        <div>
                            <h1 style={{ color: '#F8A61F', textAlign: 'center'}}>Loading...</h1>
                        </div>
                      </Html>
                    }>
                        <Dome />
                        <Task />
                        <ambientLight intensity={1.2} />
                        <Box1 position={[-12, -35, -5]} />
                        {/* <TouchPoint1 position={[-4, -3, 5]} args={[3, 2, 1]} color='#F8A61F' /> */}
                        <TouchPoint2 position={[-6, -1, 1]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint3 position={[-11, -10, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint4 position={[-11, -23, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint9 position={[11, -16, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        {/* <TouchPoint4 position={[1, -18, -15]} args={[3, 2, 1]} color='#F8A61F' /> */}
                        {/* <TouchPoint5 position={[-30, -20, -15]} args={[3, 2, 1]} color='#F8A61F' /> */}
                        <TouchPoint5 position={[2.9, -5.7, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[10.7, -8, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[-1.6, -4.6, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[-1, -3.2, 0.4]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint6 position={[6.4, -9, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint7 position={[-.7, -6, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint10 position={[-32, -23, -15]} args={[3, 2, 1]} color='#F8A61F' /> 
                        {/* <Portal position={[-6, -5, 1]} args={[3, 2, 1]} color='#fff' /> */}
                        
                    </Suspense>
            </Canvas>,
            <Music1 />
            {elementorso}
            {counter}
            {logout}
        </>
    );
}

export default Scene3;