import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect  } from 'react'

import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Music1 from '../../audio/Music1'
import { Html } from 'drei';

import Loader from '../../img/loader.gif'

import img from './../../img/crowbar.jpg'

import Logout from '../logout/Logout'

import Task1 from '../popup/Task1';
// import TouchPoint1 from '../touchpoints/scene3/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene3/Touchpoint2'
// import TouchPoint3 from '../touchpoints/scene3/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene3/Touchpoint4'
import TouchPoint5 from '../touchpoints/scene3/Touchpoint5'
import TouchPoint6 from '../touchpoints/scene3/Touchpoint6'
import TouchPoint7 from '../touchpoints/scene1/Touchpoint7'

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
  // console.log("now: ", now);
  if(now!='NaN'){
    Scene3();
  }
  if(localStorage.getItem('myDataKey') === "1598355449119"){
    localStorage.setItem('myDataKey', "0");
    window.location.href = "/timesup";
  }
}, 500);

function obama(){
  
    var datetime = data;
    // console.log("datetime", datetime)
  
    // var now = new Date().getTime();
    var now = localStorage.getItem('scene1');
    // setInterval(function(){
    //   now = localStorage.getItem('scene1');
    // }, 500);


    

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
  
    // console.log(counter);
    var mins = Math.floor(counter/60);
    var secs = counter - mins * 60;
    if (secs < 10){
      secs = "0" + secs;
    }
    var arigato = mins + ""+ ":" +secs + " ";
  
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
  const texture = useLoader(THREE.TextureLoader, img)
  if(collectedMessage){
    toolCollected = 1;
  }
  

  const onMouseOver = event => {
    const el = event.target;
    let colorhex = "#F8A61F"
    el.style.background = colorhex;
  };

  const onMouseOut = event => {
    const el = event.target;
    let black = "transparent";
    el.style.background = black;
  };

  useFrame(({ camera, mouse }) => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  })

  return (
  
    <mesh
      {...props}
      ref={mesh}
      scale={collectedMessage ? [0, 0, 0, 0] : [1, 1, 1, 1]}
      onClick={() => setShowMessage(true)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" map={texture} toneMapped={false} />
      <Html center>
              <Container>
                  <CSSTransition
                      in={showMessage}
                      timeout={300}
                      classNames="alert"
                      unmountOnExit
                  >
                      <Alert
                      className="alert" 
                      variant="primary"
                      dismissible
                      onClose={() => setShowMessage(false)}
                      >
                      <div className="alert-inside" style={{visibility: collectedMessage? 'hidden':'visible'}}>
                            <Alert.Heading>
                                <p>
                                Woah! It looks like you found a crowbar. What would you like to do with it?
                                </p>
                            </Alert.Heading>
                              <h3 onMouseEnter={event => onMouseOver(event)}
                                  onMouseOut={event => onMouseOut(event)}
                                  onClick={() => {setCollectedMessage(true); setShowMessage(false)}}
                                  style={{ paddingLeft: '1rem'}}>
                                  COLLECT
                              </h3>
                          <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                              onMouseEnter={event => onMouseOver(event)}
                              onMouseOut={event => onMouseOut(event)}
                              style={{ paddingLeft: '1rem'}}>
                              IGNORE
                          </h3>
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

  const [show, setShow] = useState(false);

  // function that checks the number of boxes collected
  setInterval(function(){

    if(toolCollected === 1){
      setShow(true);
      setInnerText("The car door is now unlocked! What should I do?")
    } 

  }, 1000);
  
  const onMouseOver = event => {
      const el = event.target;
      let colorhex = "#F8A61F"
      el.style.background = colorhex;
    };

    const onMouseOut = event => {
      const el = event.target;
      let black = "transparent";
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
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          onClick={() => setShowMessage(true)}>
          <sphereGeometry attach="geometry" args={[1, 32, 32]} />
          <meshBasicMaterial attach="material" transparent opacity={0} /> 
          <Html center>
          <Container>
                  <CSSTransition
                      in={showMessage}
                      timeout={300}
                      classNames="alert2"
                      unmountOnExit
                      // onEnter={() => setShowButton(false)}
                      // onExited={() => setShowButton(true)}
                  >
                      <Alert
                      className="alert2"
                      variant="primary"
                      dismissible
                      onClose={() => setShowMessage(false)}
                      >
                      <div className="alert-inside4" style={{ left: '-2.5%' }}>
                          <Alert.Heading>
                          <p style={{ fontSize: '1rem' }}>
                              {/* The car door is not locked, what should I do? */}
                              {innerText}
                              </p>
                              {/* <a href="scene4"> */}
                                  <h3 onMouseEnter={event => onMouseOver(event)}
                                          onMouseOut={event => onMouseOut(event)} onClick={() => setCON(true)}
                                          >
                                          {show? 'OPEN IT' : ""}
                                  </h3>
                              {/* </a> */}
                              <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                              onMouseEnter={event => onMouseOver(event)}
                              onMouseOut={event => onMouseOut(event)}>
                                  {/* {show? 'CLOSE' : "IGNORE IT"} */}
                              </h3>
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
      <div className="bg-text3">
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
                        <Box1 position={[10, -10, -10]} />
                        {/* <TouchPoint1 position={[-4, -3, 5]} args={[3, 2, 1]} color='#F8A61F' /> */}
                        <TouchPoint2 position={[-6, -1.5, 1]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint3 position={[-11, -5, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint4 position={[-11, -23, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint5 position={[-30, -20, -15]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint6 position={[6, -9, 5]} args={[3, 2, 1]} color='#F8A61F' />
                        <TouchPoint7 position={[0, -5, 5]} args={[3, 2, 1]} color='#F8A61F' />
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