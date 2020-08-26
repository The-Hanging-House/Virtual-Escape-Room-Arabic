import * as THREE from 'three'
import React, { Suspense, useRef, useState} from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Html } from 'drei';

import Loader from '../../img/loader.gif'

import Logout from '../logout/Logout'
import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';


import TouchPoint1 from '../touchpoints/scene2/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene2/Touchpoint2'
import TouchPoint3 from '../touchpoints/scene2/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene2/Touchpoint4'
// import TouchPoint5 from '../touchpoints/scene2/Touchpoint5'
import TouchPoint6 from '../touchpoints/scene2/Touchpoint6'

import Portal from '../touchpoints/scene2/Portal'

import Puzzle from '../games/puzzle/Puzzle'


import egg from '../../img/pp1.png'
import img from './../../img/pp1.png'

// import egg2 from '../../img/pp2.png'
// import img2 from './../../img/pp2.png'

import egg3 from '../../img/pp3.png'
import img3 from './../../img/pp3.png'

import egg4 from '../../img/pp4.png'
import img4 from './../../img/pp4.png'

import egg5 from '../../img/pp5.png'
import img5 from './../../img/pp5.png'

import egg6 from '../../img/pp6.png'
import img6 from './../../img/pp6.png'

// import Timer from '../timer/Timer'

// import Box1 from '../3dobjects/Box1'
// import Box2 from '../3dobjects/Box2'
// import Box3 from '../3dobjects/Box3'
// import Box4 from '../3dobjects/Box4'
// import Box5 from '../3dobjects/Box5'
// import Box6 from '../3dobjects/Box6'

import './style.css'
extend({ OrbitControls })

// Counts the number of boxes
var x = 0;
var ccom = 4;

// value of X increments each time a box is collected
function counter(){
  x = x + 1;
}

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


  function Box1(props) {
    const mesh = useRef()
    const [showMessage, setShowMessage] = useState(false);
    const [collectedMessage, setCollectedMessage] = useState(false)
    if(collectedMessage){
      counter();
    }
    const texture = useLoader(THREE.TextureLoader, img)

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
        scale={collectedMessage ? [0, 0, 0] : [0.4, 0.4, 0.4]}
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
                        className="alert1" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible'}}>
                            <Alert.Heading>
                                <div>
                                  <img src={egg} alt='egg' width='100%' height='100%' />
                                </div>
                            </Alert.Heading>
                                <h3 onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    COLLECT
                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
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

  
  function Box2(props) {
    const mesh = useRef()
    const [collectedMessage, setCollectedMessage] = useState(false)
    const [showMessage, setShowMessage] = useState(false);
    if(collectedMessage){
      counter();
       
    }
    const texture = useLoader(THREE.TextureLoader, img)

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
  
    if(collectedMessage){
        Scene2(1)
    }


    return (        
            

        <mesh
        {...props}
        ref={mesh}
        scale={collectedMessage ? [0, 0, 0] : [0.4, 0.4, 0.4]}
        onClick={() => setShowMessage(true)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} style={{visibility: collectedMessage? 'hidden':'visible'}}/>
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
                        className="alert1" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible'}}>
                            <Alert.Heading>
                                <div>
                                <img src={egg} alt='egg' width='100%' height='100%' />
                                </div>
                            </Alert.Heading>
                                <h3 onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    COLLECT
                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
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
  

  function Box3(props) {
    const mesh = useRef()
    const [showMessage, setShowMessage] = useState(false);
    const [collectedMessage, setCollectedMessage] = useState(false)
    if(collectedMessage){
      counter();
       
    }
    const texture = useLoader(THREE.TextureLoader, img3)

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
        scale={collectedMessage ? [0, 0, 0] : [0.4, 0.4, 0.4]}
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
                        className="alert1" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible'}}>
                            <Alert.Heading>
                                <div>
                                  <img src={egg3} alt='egg' width='100%' height='100%' />
                                </div>
                            </Alert.Heading>
                                <h3 onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    COLLECT
                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
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

  function Box4(props) {
    const mesh = useRef()
    const [showMessage, setShowMessage] = useState(false);
    const [collectedMessage, setCollectedMessage] = useState(false)
    if(collectedMessage){
      counter();
       
    }
    const texture = useLoader(THREE.TextureLoader, img4)

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
        scale={collectedMessage ? [0, 0, 0] : [0.4, 0.4, 0.4]}
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
                        className="alert1" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible'}}>
                            <Alert.Heading>
                                <div>
                                  <img src={egg4} alt='egg' width='100%' height='100%' />
                                </div>
                            </Alert.Heading>
                                <h3 onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    COLLECT
                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
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

  function Box5(props) {
    const mesh = useRef()
    const [showMessage, setShowMessage] = useState(false);
    const [collectedMessage, setCollectedMessage] = useState(false)
    if(collectedMessage){
      counter();
       
    }
    const texture = useLoader(THREE.TextureLoader, img5)

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
        scale={collectedMessage ? [0, 0, 0] : [0.4, 0.4, 0.4]}
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
                        className="alert1" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible'}}>
                            <Alert.Heading>
                                <div>
                                  <img src={egg5} alt='egg' width='100%' height='100%' />
                                </div>
                            </Alert.Heading>
                                <h3 onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    COLLECT
                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
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

  function Box6(props) {
    const mesh = useRef()
    const [showMessage, setShowMessage] = useState(false);
    const [collectedMessage, setCollectedMessage] = useState(false)
    if(collectedMessage){
      counter();
       
    }
    const texture = useLoader(THREE.TextureLoader, img6)

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
        scale={collectedMessage ? [0, 0, 0] : [0.4, 0.4, 0.4]}
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
                        className="alert1" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible'}}>
                            <Alert.Heading>
                                <div>
                                  <img src={egg6} alt='egg' width='100%' height='100%' />
                                </div>
                            </Alert.Heading>
                                <h3 onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    COLLECT
                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
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


function TouchPoint5({ position, color, onClick }) {
  const [showMessage, setShowMessage] = useState(false);
  const [collectedMessage, setCollectedMessage] = useState(false);
  const [coll, setColl] = useState(false);
  const [showProceed, setShowProceed] = useState('hidden');
  var puzzlePro;
  
  // function that checks the number of boxes collected
  setInterval(function(){
    puzzlePro = localStorage.getItem("puzSet");
    if(x === 13){
      setCollectedMessage(true);
    }if(coll){
      ccom=6;
    } 
    if(puzzlePro === '7'){
        setShowProceed('visible');
        localStorage.removeItem("puzSet");
    } 
  }, 1000);

  
  return (
      <mesh 
          scale={collectedMessage ? [0.4, 0.4, 0.4] : [0, 0, 0]}
          position={position}
          onClick={() => setShowMessage(true)}>
          <sphereGeometry attach="geometry" args={[1, 32, 32]} />
          <meshBasicMaterial attach="material" color="orange" /> 
          <Html center>
              <Container>
                  <CSSTransition
                      in={showMessage}
                      timeout={300}
                      classNames="alert2"
                      unmountOnExit
                  >
                      <Alert
                      className="alert2" 
                      variant="primary"
                      dismissible
                      onClose={() => setShowMessage(false)}
                      >
                      <div className="alert-inside2">
                          <Alert.Heading>
                            <Puzzle />
                            <br></br>
                             <div style={{ overflow: "hidden", clear: "both", display: 'flex', justifyContent: 'center' }}>
                                  <button onClick={() => {setShowMessage(false); setColl(true)}} style={{visibility: showProceed}} className="btn btn-primary3">
                                      Proceed
                                  </button>
                            </div>
                          </Alert.Heading>                       
                      </div>
                      </Alert>
                  </CSSTransition>
              </Container>
          </Html>
      </mesh>
  )
}

var data;
data = localStorage.getItem('myDataKey');
var now;

setInterval(function(){
    now = localStorage.getItem('scene5');
    if(now!=='NaN'){
      Scene2();
    }
    if(localStorage.getItem('myDataKey') === "1598355449119" ){
      localStorage.setItem('myDataKey', "0");
      window.location.href = "/timesup";
    }
}, 500);  

function obama(){
  
    var datetime = data;
  
    // var now = new Date().getTime();
    now = localStorage.getItem('scene5');

    if( isNaN(datetime) )
    {
      return "";
    }
  
    if (datetime < now) {
      var milisec_diff = now - datetime;
    }else{
      var milisec_diff = datetime - now;
    }
    var final = Math.round(600-(milisec_diff/1000));
    if (final < 0){
      final = 0;
    }

    return final
  }
  
  function Timer() {
    var minutes = obama() //minutes passed since start
    const [counter, setCounter] = React.useState(minutes);
  
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);
    var mins = Math.floor(counter/60);
    var secs = counter - mins * 60;
    if (secs < 10){
      secs = "0" + secs;
    }
    var arigato = mins + ":" + secs ;

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
  const [something, setSomething] = useState(4);
  
  setInterval(function(){
      if(x===12){
        setSomething(5);
        x = x + 1;
      }else if(ccom === 6){
        setSomething(6);
      }  
  }, 500);

  return (
    <div className="bg-text3">
      <h1>{something}<span>/7</span></h1>
      <h3>CHALLENGES</h3>
    </div>
  )
}

const counter1 = <Counter />
const logout = <Logout />
const elementorso = <Timer/>
function Scene2(va) {
  return (
      <>
        {elementorso}
        {counter1}
        {logout}
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
                      <pointLight position={[10, 10, 10]} />
                      <Box1 position={[-10, -5, -11]} />
                      <Box2 position={[10, 1, -13]}/>
                      <Box3 position={[10, -12, -20]} />
                      <Box4 position={[10, -9, 3]} />
                      <Box5 position={[10, -2, -30]} />
                      <Box6 position={[-10, 2.8, -18]} />
                      <TouchPoint1 position={[25, 1, 5]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint2 position={[25, -27, -30]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint3 position={[-5, -2, -8]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint4 position={[8, -10, -18]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint5 position={[7, -7, -20]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint6 position={[5, -12, -16]} args={[3, 2, 1]} color='#F8A61F' />
                      <Portal position={[-10, -12, -20]} args={[3, 2, 1]} color='#fff' />
                  </Suspense>
          </Canvas>,
      </>
  );

}

export default Scene2;