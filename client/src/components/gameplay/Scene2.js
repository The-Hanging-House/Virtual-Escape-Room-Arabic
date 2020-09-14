import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect} from 'react'
import { Canvas, extend, useFrame, useThree, useLoader } from 'react-three-fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { Html } from 'drei';

import Loader from '../../img/loader.gif'

import Logout from '../logout/Logout'
import { Container, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import Map from '../../img/map.svg'

import note from './../../img/key.png'


import TouchPoint1 from '../touchpoints/scene2/Touchpoint1'
import TouchPoint2 from '../touchpoints/scene2/Touchpoint2'
import TouchPoint3 from '../touchpoints/scene2/Touchpoint3'
import TouchPoint4 from '../touchpoints/scene2/Touchpoint4'
import Telephone from './Telephone';


import ding from '../../audio/ding.mp3'
import paper from '../../audio/paper.mp3'
import door from '../../audio/door.mp3'
import correct from '../../audio/correct.mp3'

import hint from '../../img/welcome.svg'

import Music2 from '../../audio/Music2'

import Puzzle from '../games/puzzle/index'

import solved from '../../img/completedPuzzle1.png'

import egg from '../../img/pp1.png'
import img from './../../img/pp1.png'

import egg3 from '../../img/pp3.png'
import img3 from './../../img/pp3.png'

import egg4 from '../../img/pp4.png'
import img4 from './../../img/pp4.png'

import egg5 from '../../img/pp5.png'
import img5 from './../../img/pp5.png'

import egg6 from '../../img/pp6.png'
import img6 from './../../img/pp6.png'

import './style.css'
extend({ OrbitControls })

// Counts the number of boxes
var x = 0;
var ccom = 4;

// value of X increments each time a box is collected
function counter(){
  x = x + 1;
  if (x%2 === 0){
    new Audio(ding).play();
  }
}

function Door(){
  new Audio(door).play();
  return null
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
  
    return (
    
      <mesh
        {...props}
        ref={mesh}
        scale={collectedMessage ? [0, 0, 0] : [0.4, 0.4, 0.4]}
        onClick={() => setShowMessage(true)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} style={{visibility: collectedMessage? 'hidden':'visible', }}/>
        <meshStandardMaterial attach="material" map={texture} toneMapped={false} />
        <Html center>
                <Container>
                    <CSSTransition
                        in={showMessage}
                        timeout={300}
                        classNames="alert4"
                        unmountOnExit
                    >
                        <Alert
                        className="alert4" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible', left: '-15%', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '200%'}}>
                            <Alert.Heading>
                            <p>
                            Which of the following actions would you like to take?
                                </p>
                                <div>
                                  <img src={egg} alt='egg' />
                                </div>
                            </Alert.Heading>
                                <h3 style={{ cursor: 'pointer' }} onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    Collect the piece of the migration map.

                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem', cursor: 'pointer'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                Look for other clues.

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
  
    // if(collectedMessage){
    //     Scene2(1)
    // }


    return (        
            

        <mesh
        {...props}
        ref={mesh}
        scale={collectedMessage ? [0, 0, 0] : [0.4, 0.4, 0.4]}
        onClick={() => setShowMessage(true)}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} style={{visibility: collectedMessage? 'hidden':'visible', }}/>
        <meshStandardMaterial attach="material" map={texture} toneMapped={false} />
        <Html center>
                <Container>
                    <CSSTransition
                        in={showMessage}
                        timeout={300}
                        classNames="alert4"
                        unmountOnExit
                    >
                        <Alert
                        className="alert4" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible', left: '-15%', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '200%'}}>
                            <Alert.Heading>
                            <p>
                            Which of the following actions would you like to take?
                                </p>
                                <div>
                                  <img src={egg} alt='egg' />
                                </div>
                            </Alert.Heading>
                                <h3 style={{ cursor: 'pointer' }} onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    Collect the piece of the migration map.

                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem', cursor: 'pointer'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                Look for other clues.

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
                        classNames="alert4"
                        unmountOnExit
                    >
                        <Alert
                        className="alert4" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible', left: '-15%', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '200%'}}>
                            <Alert.Heading>
                            <p>
                            Which of the following actions would you like to take?
                                </p>
                                <div>
                                  <img src={egg} alt='egg' />
                                </div>
                            </Alert.Heading>
                                <h3 style={{ cursor: 'pointer' }} onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    Collect the piece of the migration map.

                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem', cursor: 'pointer'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                Look for other clues.

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
                        classNames="alert4"
                        unmountOnExit
                    >
                        <Alert
                        className="alert4" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible', left: '-15%', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '200%'}}>
                            <Alert.Heading>
                            <p>
                            Which of the following actions would you like to take?
                                </p>
                                <div>
                                  <img src={egg} alt='egg' />
                                </div>
                            </Alert.Heading>
                                <h3 style={{ cursor: 'pointer' }} onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    Collect the piece of the migration map.

                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem', cursor: 'pointer'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                Look for other clues.

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
                        classNames="alert4"
                        unmountOnExit
                    >
                        <Alert
                        className="alert4" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible', left: '-15%', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '200%'}}>
                            <Alert.Heading>
                            <p>
                            Which of the following actions would you like to take?
                                </p>
                                <div>
                                  <img src={egg} alt='egg' />
                                </div>
                            </Alert.Heading>
                                <h3 style={{ cursor: 'pointer' }} onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    Collect the piece of the migration map.

                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem', cursor: 'pointer'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                Look for other clues.

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
                        classNames="alert4"
                        unmountOnExit
                    >
                        <Alert
                        className="alert4" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible', left: '-15%', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '200%'}}>
                            <Alert.Heading>
                            <p>
                            Which of the following actions would you like to take?
                                </p>
                                <div>
                                  <img src={egg} alt='egg' />
                                </div>
                            </Alert.Heading>
                                <h3 style={{ cursor: 'pointer' }} onMouseEnter={event => onMouseOver(event)}
                                    onMouseOut={event => onMouseOut(event)}
                                    onClick={() => {setCollectedMessage(true); setShowMessage(false)}}>
                                    Collect the piece of the migration map.

                                </h3>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem', cursor: 'pointer'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                Look for other clues.

                            </h3>
                        </div>
                        </Alert>
                    </CSSTransition>
                </Container>
            </Html>
      </mesh>
    )
  }

  
  function Box7(props) {
    const mesh = useRef()
    const [showMessage, setShowMessage] = useState(false);
    const [collectedMessage, setCollectedMessage] = useState(false)

    setInterval(() => {
      if(ccom===6){
        setCollectedMessage(true);       
      }
    }, 2000);
    const texture = useLoader(THREE.TextureLoader, note)

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
  
    // useFrame(({ camera, mouse }) => {
    //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    // })
  
    return (
      <mesh
        {...props}
        ref={mesh}
        rotation={[2, 2, 2]}
        scale={collectedMessage ? [2, 2, 2, 2] : [0, 0, 0]}
        // scale={[0, 0, 0]}
        onClick={() => setShowMessage(true)}>
        <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" map={texture} toneMapped={false} transparent />
        <Html center>
                <Container>
                    <CSSTransition
                        in={showMessage}
                        timeout={300}
                        classNames="alert4"
                        unmountOnExit
                    >
                        <Alert
                        className="alert4" 
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                        >
                        <div className="alert-inside3" style={{visibility: collectedMessage? 'hidden':'visible', left: '-15%', display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '200%'}}>
                            <Alert.Heading>
                                <div>
                                  <img src={solved} alt='completedPuzzle' style={{ width: '200%' }} />
                                </div>
                            </Alert.Heading>
                            <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem', cursor: 'pointer'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                Call the phone.

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
    puzzlePro = localStorage.getItem("puzzleComplete");
    if(x === 13){
      setCollectedMessage(true);
    }if(coll){
      ccom=6;
    } 
    if(puzzlePro === '1'){
        setShowProceed('visible');
        localStorage.removeItem("puzzleComplete");
        new Audio(correct).play();
    } 
    // console.log(puzzlePro)
  }, 1000);

  
  return (
      <mesh 
          scale={collectedMessage ? [0.4, 0.4, 0.4] : [0, 0, 0]}
          position={position}
          onClick={() => {setShowMessage(true); new Audio(paper).play()}}>
          <sphereGeometry attach="geometry" args={[1, 32, 32]} />
          <meshBasicMaterial attach="material" color="orange" /> 
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
                      <div className="alert-inside20">
                          <Alert.Heading>
                            <Puzzle />
                             <div>
                                  <button onClick={() => {setShowMessage(false); setColl(true)}} style={{visibility: showProceed, position: 'relative', left: '40%'}} className="btn btn-primary3">
                                      CALL NOW
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


function Initimg(){
  const [displayProp, setDisplayProp] = React.useState(false);

  setTimeout(function(){
    setDisplayProp(true);
    // console.log("TEXT")
  }, 6000);

    return (
    <>
    <div className="welcomedcc" style={{display: displayProp? 'none' : 'block', position: "absolute", zIndex: "200", left: "50%", top: "50%", transform: "translate(-50%, -50%)"}}>
        <img src = {hint} width='100%' height='100%' />
    </div>
    </>
    )
}
 
 
const intiImage = <Initimg/>

function TouchPoint6({ position, color, onClick }) {
  const [hovered, set] = useState(false)
  const [showMessage, setShowMessage] = useState(false);

  const [show, setShow] = useState(true);
  
  // function that checks the number of boxes collected
  setInterval(function(){
  
    if(ccom===6){
      setShow(true);
    } 

  }, 1000);
  
  // useEffect(() => void (document.body.style.cursor = hovered ? 'pointer' : 'auto'), [hovered])
  return (
      <mesh 
          scale={show ? [0.5, 0.5, 0.5] : [0, 0, 0]}
          position={position}
          onPointerOver={() => set(true)}
          onPointerOut={() => set(false)}
          onClick={() => setShowMessage(true)}>
          <sphereGeometry attach="geometry" args={[1, 32, 32]} />
          <meshBasicMaterial attach="material" color={hovered ? 'hotpink' : 'orange'} /> 
          <Html center>
              <Container>
                  <CSSTransition
                      in={showMessage}
                      timeout={300}
                      classNames="alert8"
                      unmountOnExit
                      // onEnter={() => setShowButton(false)}
                      // onExited={() => setShowButton(true)}
                  >
                      <Alert
                      className="alert8"
                      variant="primary"
                      // dismissible
                      onClose={() => setShowMessage(false)}
                      >
                      <button className="close" onClick={() => setShowMessage(false)}>×</button>
                      <Telephone />
                      
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
  
    var now = new Date().getTime();
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
    var final = Math.round(900-(milisec_diff/1000));
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
  const [pieceCollected, setPieceCollected] = useState(0);
  
  setInterval(function(){
      if(x===12){
        setSomething(5);
        x = x + 1;
      }else if(ccom === 6){
        setSomething(6);
      }  
      // console.log("x: ", x)
      setPieceCollected(Math.floor(x/2));
  }, 500);


  return (
    <>
      <div className="bg-text6">
        <h1 style={{ letterSpacing: '4px' }}>{something}/<span>7</span></h1>
        <h3>CHALLENGES</h3>
      </div>
      <div className="bg-text7">
        <img src={Map} height="45%" width="45%" />
        <h1>{pieceCollected}/<span>6</span></h1>
        <h3>PIECES</h3> 
      </div>    
    </>
  )
}

const counter1 = <Counter />
const logout = <Logout />
const elementorso = <Timer/>
const doors = <Door/>
function Scene2() {
  return (
      <>
          {doors}
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
                      <pointLight position={[-10, 10, 10]} />
                      <Box1 position={[-12, -6, 10]} />
                      <Box2 position={[-14, 5.3, -13]}/>
                      <Box3 position={[10, -4.8, 12]} />
                      <Box4 position={[-12, 0.7, 2]} />
                      <Box5 position={[-12, -13, 5.5]} />
                      <Box6 position={[-5, -1.6, 15]} />
                      <Box7 position={[-20, -10, 4]} />
                      <TouchPoint1 position={[-17, 1, -10]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint2 position={[-18, -7.5, -4.5]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint3 position={[1, -1, 2]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint4 position={[-4.8, -2.2, 0]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint5 position={[-25, -10, 10]} args={[3, 2, 1]} color='#F8A61F' />
                      <TouchPoint6 position={[-25, -15, -6]} args={[3, 2, 1]} color='#F8A61F' />
                      {/* <Portal position={[-10, -12, -20]} args={[3, 2, 1]} color='#fff' /> */}
                  </Suspense>
          </Canvas>
          <Music2 />
          {intiImage} 
          {elementorso}
          {counter1}
          {logout},
      </>
  );

}

export default Scene2;