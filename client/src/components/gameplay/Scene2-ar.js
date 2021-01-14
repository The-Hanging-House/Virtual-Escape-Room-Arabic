import * as THREE from "three";
import React, { Suspense, useRef, useState, useEffect } from "react";
import {
  Canvas,
  extend,
  useFrame,
  useThree,
  useLoader,
} from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import { Html } from "drei";

import Loader from "../../img/loader.gif";

import Logout from "../logout/Logout";
import { Container, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

import Map from "../../img/map.svg";
// import X from '../../img/x.svg'

import note from "./../../img/note.png";
import xclose from "./../../img/x.svg";
import teleNo from "./../../img/teleNo.png";
import PrePuz from "./../../img/prepuz.png";

// import TouchPoint1 from '../touchpoints/scene2/Touchpoint1'
import TouchPoint2 from "../touchpoints/scene2/ar/Touchpoint2";
import TouchPoint3 from "../touchpoints/scene2/ar/Touchpoint3";
import TouchPoint4 from "../touchpoints/scene2/ar/Touchpoint4";
import Telephone from "./Telephone-ar";

import ding from "../../audio/ding.mp3";
import paper from "../../audio/paper.mp3";
import door from "../../audio/door.wav";
import correct from "../../audio/correct.mp3";

import hint from "../../img/welcome.png";

import Music2 from "../../audio/Music2";

import Puzzle from "../games/puzzle/index";

import solved from "../../img/completedPuzzle1.png";

import board from "../../img/board.png";

import egg from "../../img/pp1.png";
import img from "./../../img/p1.png";

// import egg3 from '../../img/pp3.png'
import img3 from "./../../img/p3.png";

// import egg4 from '../../img/pp4.png'
import img4 from "./../../img/p4.png";

// import egg5 from '../../img/pp5.png'
import img5 from "./../../img/p5.png";

// import egg6 from '../../img/pp6.png'
import img6 from "./../../img/p6.png";

import Xclose from "./../../img/whiteX.png";

import "./style.css";
extend({ OrbitControls });

// Counts the number of boxes
var x = 0;
var y = 0;
var ccom = 4;
var cork = 0;
var flagB1 = 0;
var flagB2 = 0;
var flagB3 = 0;
var flagB4 = 0;
var flagB5 = 0;
var flagB6 = 0;

// var languageCheck = 0;

// value of X increments each time a box is collected
function counter() {
  x = x + 1;
  new Audio(ding).play();
}

function Door() {
  new Audio(door).play();
  return null;
}

const Controls = (props) => {
  const { camera, gl } = useThree();
  const ref = useRef();
  useFrame(() => ref.current.update());
  return (
    <orbitControls
      ref={ref}
      target={[0, 0, 0]}
      {...props}
      args={[camera, gl.domElement]}
    />
  );
};

const Dome = () => {
  const texture = useLoader(THREE.TextureLoader, "background2.jpg");
  return (
    <mesh>
      <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        side={THREE.BackSide}
      />
    </mesh>
  );
};

// table puzzle piece
function Box1(props) {
  const mesh = useRef();
  const [collectedMessage, setCollectedMessage] = useState(true);
  const [corkSeen, setCorkSeen] = useState(false);
  const [hovered, set] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // if(corkSeen){
  //   counter();

  //   // setCollectedMessage(true);
  // }
  const texture = useLoader(THREE.TextureLoader, img);

  const onMouseOver = (event) => {
    const el = event.target;
    let colorhex = "#F8A61F";
    el.style.background = colorhex;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    let black = "transparent";
    el.style.background = black;
  };

  var checkBoard = setInterval(function () {
    if (cork === 2 && flagB1 === 0) {
      setCollectedMessage(false);
      console.log("flag = 2");
      clearInterval(checkBoard);
      flagB1 = 1;
    }
  }, 1000);

  function afterClick() {
    console.log("afterClick");
    setCollectedMessage(true);
    setShowMessage(false);
    setCorkSeen(true);
    counter();
  }

  // useFrame(({ camera, mouse }) => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[2, 2.2, 6.6]}
      scale={collectedMessage ? [0, 0, 0] : [1, 1, 1]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <planeBufferGeometry
        attach="geometry"
        args={[1, 1, 1]}
        style={{ visibility: collectedMessage ? "hidden" : "visible" }}
      />
      <meshStandardMaterial
        attach="material"
        map={texture}
        toneMapped={false}
        transparent
      />
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
              <div
                className="alert-inside3-arabic"
                style={{
                  visibility: collectedMessage ? "hidden" : "visible",
                  left: "-15%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "200%",
                }}
              >
                <Alert.Heading>
                  <p>أي من الإجراءات التالية ترغب في تنفيذها؟</p>
                  <div>
                    <img src={egg} alt=" " className="stopDrag" />
                  </div>
                </Alert.Heading>
                <h3
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => afterClick()}
                >
                  .جمع قطعة من خريطة الهجرة
                </h3>
                <h3
                  onClick={() => setShowMessage(false)}
                  style={{ fontSize: "1rem", cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  .البحث عن أدلة أخرى
                </h3>
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

function Box2(props) {
  const mesh = useRef();
  const [collectedMessage, setCollectedMessage] = useState(true);
  const [corkSeen, setCorkSeen] = useState(false);
  const [hovered, set] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // if(corkSeen){
  //   counter();

  // }
  const texture = useLoader(THREE.TextureLoader, img);

  const onMouseOver = (event) => {
    const el = event.target;
    let colorhex = "#F8A61F";
    el.style.background = colorhex;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    let black = "transparent";
    el.style.background = black;
  };

  var checkBoard = setInterval(function () {
    if (cork === 2 && flagB2 === 0) {
      setCollectedMessage(false);
      console.log("flag = 2");
      clearInterval(checkBoard);
      flagB2 = 1;
    }
  }, 1000);

  function afterClick() {
    console.log("afterClick");
    setCollectedMessage(true);
    setShowMessage(false);
    setCorkSeen(true);
    counter();
  }

  // useFrame(({ camera, mouse }) => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })

  // if(collectedMessage){
  //     Scene2(1)
  // }
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={collectedMessage ? [0, 0, 0] : [1, 1, 1]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <planeBufferGeometry
        attach="geometry"
        args={[1, 1, 1]}
        style={{ visibility: collectedMessage ? "hidden" : "visible" }}
      />
      <meshStandardMaterial
        attach="material"
        map={texture}
        toneMapped={false}
        transparent
      />
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
              <div
                className="alert-inside3-arabic"
                style={{
                  visibility: collectedMessage ? "hidden" : "visible",
                  left: "-15%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "200%",
                }}
              >
                <Alert.Heading>
                  <p>أي من الإجراءات التالية ترغب في تنفيذها؟</p>
                  <div>
                    <img src={egg} alt=" " className="stopDrag" />
                  </div>
                </Alert.Heading>
                <h3
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => afterClick()}
                >
                  .جمع قطعة من خريطة الهجرة
                </h3>
                <h3
                  onClick={() => setShowMessage(false)}
                  style={{ fontSize: "1rem", cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  .البحث عن أدلة أخرى
                </h3>
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

function Box3(props) {
  const mesh = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [corkSeen, setCorkSeen] = useState(false);
  const [hovered, set] = useState(false);
  const [collectedMessage, setCollectedMessage] = useState(true);
  // if(corkSeen){
  //   counter();

  // }
  const texture = useLoader(THREE.TextureLoader, img3);

  const onMouseOver = (event) => {
    const el = event.target;
    let colorhex = "#F8A61F";
    el.style.background = colorhex;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    let black = "transparent";
    el.style.background = black;
  };

  var checkBoard = setInterval(function () {
    if (cork === 2 && flagB3 === 0) {
      setCollectedMessage(false);
      console.log("flag = 2");
      clearInterval(checkBoard);
      flagB3 = 1;
    }
  }, 1000);

  function afterClick() {
    console.log("afterClick");
    setCollectedMessage(true);
    setShowMessage(false);
    setCorkSeen(true);
    counter();
  }

  // useFrame(({ camera, mouse }) => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[3, 5, 1.5]}
      scale={collectedMessage ? [0, 0, 0] : [1, 1, 1]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        toneMapped={false}
        transparent
      />
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
              <div
                className="alert-inside3-arabic"
                style={{
                  visibility: collectedMessage ? "hidden" : "visible",
                  left: "-15%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "200%",
                }}
              >
                <Alert.Heading>
                  <p>أي من الإجراءات التالية ترغب في تنفيذها؟</p>
                  <div>
                    <img src={egg} alt=" " className="stopDrag" />
                  </div>
                </Alert.Heading>
                <h3
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => afterClick()}
                >
                  .جمع قطعة من خريطة الهجرة
                </h3>
                <h3
                  onClick={() => setShowMessage(false)}
                  style={{ fontSize: "1rem", cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  .البحث عن أدلة أخرى
                </h3>
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

function Box4(props) {
  const mesh = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [corkSeen, setCorkSeen] = useState(false);
  const [hovered, set] = useState(false);
  const [collectedMessage, setCollectedMessage] = useState(true);
  // if(corkSeen){
  //   counter();

  // }
  const texture = useLoader(THREE.TextureLoader, img4);

  const onMouseOver = (event) => {
    const el = event.target;
    let colorhex = "#F8A61F";
    el.style.background = colorhex;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    let black = "transparent";
    el.style.background = black;
  };

  var checkBoard = setInterval(function () {
    if (cork === 2 && flagB4 === 0) {
      setCollectedMessage(false);
      console.log("flag = 2");
      clearInterval(checkBoard);
      flagB4 = 1;
    }
  }, 1000);

  function afterClick() {
    console.log("afterClick");
    setCollectedMessage(true);
    setShowMessage(false);
    setCorkSeen(true);
    counter();
  }

  // useFrame(({ camera, mouse }) => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[1, 2, 1.5]}
      scale={collectedMessage ? [0, 0, 0] : [1, 1, 1]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        toneMapped={false}
        transparent
      />
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
              <div
                className="alert-inside3-arabic"
                style={{
                  visibility: collectedMessage ? "hidden" : "visible",
                  left: "-15%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "200%",
                }}
              >
                <Alert.Heading>
                  <p>أي من الإجراءات التالية ترغب في تنفيذها؟</p>
                  <div>
                    <img src={egg} alt=" " className="stopDrag" />
                  </div>
                </Alert.Heading>
                <h3
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => afterClick()}
                >
                  .جمع قطعة من خريطة الهجرة
                </h3>
                <h3
                  onClick={() => setShowMessage(false)}
                  style={{ fontSize: "1rem", cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  .البحث عن أدلة أخرى
                </h3>
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

function Box5(props) {
  const mesh = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [corkSeen, setCorkSeen] = useState(false);
  const [hovered, set] = useState(false);
  const [collectedMessage, setCollectedMessage] = useState(true);
  // if(corkSeen){
  //   counter();

  // }
  const texture = useLoader(THREE.TextureLoader, img5);

  const onMouseOver = (event) => {
    const el = event.target;
    let colorhex = "#F8A61F";
    el.style.background = colorhex;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    let black = "transparent";
    el.style.background = black;
  };

  var checkBoard = setInterval(function () {
    if (cork === 2 && flagB5 === 0) {
      setCollectedMessage(false);
      console.log("flag = 2");
      clearInterval(checkBoard);
      flagB5 = 1;
    }
  }, 1000);

  function afterClick() {
    console.log("afterClick");
    setCollectedMessage(true);
    setShowMessage(false);
    setCorkSeen(true);
    counter();
  }

  // useFrame(({ camera, mouse }) => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[1, 2, 1]}
      scale={collectedMessage ? [0, 0, 0] : [1, 1, 1]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        toneMapped={false}
        transparent
      />
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
              <div
                className="alert-inside3-arabic"
                style={{
                  visibility: collectedMessage ? "hidden" : "visible",
                  left: "-15%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "200%",
                }}
              >
                <Alert.Heading>
                  <p>أي من الإجراءات التالية ترغب في تنفيذها؟</p>
                  <div>
                    <img src={egg} alt=" " className="stopDrag" />
                  </div>
                </Alert.Heading>
                <h3
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => afterClick()}
                >
                  .جمع قطعة من خريطة الهجرة
                </h3>
                <h3
                  onClick={() => setShowMessage(false)}
                  style={{ fontSize: "1rem", cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  .البحث عن أدلة أخرى
                </h3>
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

function Box6(props) {
  const mesh = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [corkSeen, setCorkSeen] = useState(false);
  const [hovered, set] = useState(false);
  const [collectedMessage, setCollectedMessage] = useState(true);
  // if(corkSeen){
  //   counter();

  // }
  const texture = useLoader(THREE.TextureLoader, img6);

  const onMouseOver = (event) => {
    const el = event.target;
    let colorhex = "#F8A61F";
    el.style.background = colorhex;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    let black = "transparent";
    el.style.background = black;
  };

  var checkBoard = setInterval(function () {
    if (cork === 2 && flagB6 === 0) {
      setCollectedMessage(false);
      console.log("flag = 2");
      clearInterval(checkBoard);
      flagB6 = 1;
    }
  }, 1000);

  function afterClick() {
    console.log("afterClick");
    setCollectedMessage(true);
    setShowMessage(false);
    setCorkSeen(true);
    counter();
  }

  // useFrame(({ camera, mouse }) => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[1.2, 2.5, 3]}
      scale={collectedMessage ? [0, 0, 0] : [1, 1, 1]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        toneMapped={false}
        transparent
      />
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
              <div
                className="alert-inside3-arabic"
                style={{
                  visibility: collectedMessage ? "hidden" : "visible",
                  left: "-15%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "200%",
                }}
              >
                <Alert.Heading>
                  <p>أي من الإجراءات التالية ترغب في تنفيذها؟</p>
                  <div>
                    <img src={egg} alt=" " className="stopDrag" />
                  </div>
                </Alert.Heading>
                <h3
                  style={{ cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => afterClick()}
                >
                  .جمع قطعة من خريطة الهجرة
                </h3>
                <h3
                  onClick={() => setShowMessage(false)}
                  style={{ fontSize: "1rem", cursor: "pointer" }}
                  onMouseEnter={(event) => onMouseOver(event)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  .البحث عن أدلة أخرى
                </h3>
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

function Box7(props) {
  const mesh = useRef();
  const [showMessage, setShowMessage] = useState(false);
  const [hovered, set] = useState(false);
  const [collectedMessage, setCollectedMessage] = useState(false);

  setInterval(() => {
    if (ccom === 6) {
      setCollectedMessage(true);
      // new Audio(noteSound).play();
    }
  }, 2000);
  const texture = useLoader(THREE.TextureLoader, note);

  // const onMouseOver = event => {
  //   const el = event.target;
  //   let colorhex = "#F8A61F"
  //   el.style.background = colorhex;
  // };

  // const onMouseOut = event => {
  //   const el = event.target;
  //   let black = "transparent";
  //   el.style.background = black;
  // };

  // useFrame(({ camera, mouse }) => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += 0.01
  // })
  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      {...props}
      ref={mesh}
      rotation={[4.5, 2, 2.5]}
      scale={collectedMessage ? [2, 2, 2, 2] : [0, 0, 0]}
      // scale={[0, 0, 0]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <planeBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        map={texture}
        toneMapped={false}
        transparent
      />
      <Html center>
        <Container>
          <CSSTransition
            in={showMessage}
            timeout={300}
            classNames="alert4"
            unmountOnExit
          >
            <Alert
              className="alert-note"
              // style={{ top: '46px', right: '80px' }}
              variant="primary"
              // dismissible
              onClose={() => setShowMessage(false)}
            >
              <button
                style={{
                  position: "absolute",
                  top: "70px",
                  right: "153px",
                  cursor: "pointer",
                  opacity: "0",
                  width: "166px",
                  height: "102px",
                }}
                onClick={() => setShowMessage(false)}
              >
                XX
              </button>
              {/* <img src={xclose} alt='stickyNote' style={{ width: '100%' }} /> */}
              <div
                className="alert-inside3"
                style={{
                  left: "-15%",
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "100%",
                }}
              >
                {/* <button className="close" onClick={() => setShowMessage(false)}><img src={X} width='100%' height='300%' style={{cursor: 'pointer'}} ></img></button> */}
                <Alert.Heading>
                  <div>
                    <img
                      style={{ cursor: "pointer", width: "100%" }}
                      className="stopDrag"
                      src={note}
                      alt="stickyNote"
                    />
                  </div>
                </Alert.Heading>
                {/* <h3 onClick={() => setShowMessage(false)} style={{ fontSize: '1rem', cursor: 'pointer'}}
                                onMouseEnter={event => onMouseOver(event)}
                                onMouseOut={event => onMouseOut(event)}>
                                Call the phone.

                            </h3> */}
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

// CorkBoard
function TouchPoint1({ position, color, onClick }) {
  const [hovered, set] = useState(false);
  // const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  return (
    <mesh
      scale={[2.7, 0.05, 0.1]}
      position={position}
      rotation={[0, 1, 0]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => {
        setShowMessage(true);
        cork = 2;
      }}
    >
      <planeGeometry attach="geometry" args={[1, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        transparent
        opacity={hovered ? 0.2 : 0}
      />
      <Html center>
        <Container>
          <CSSTransition
            in={showMessage}
            timeout={300}
            classNames="alert1"
            unmountOnExit
            // onEnter={() => setShowButton(false)}
            // onExited={() => setShowButton(true)}
          >
            <Alert
              className="alert"
              variant="primary"
              // dismissible
              onClose={() => setShowMessage(false)}
            >
              <button
                onClick={() => setShowMessage(false)}
                style={{
                  cursor: "pointer",
                  position: "absolute",
                  top: "12px",
                  right: "-257",
                  opacity: "0",
                }}
              >
                XXX
              </button>
              <div
                className="alert-inside2"
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "200%",
                }}
              >
                <button className="close" onClick={() => setShowMessage(false)}>
                  ×
                </button>

                <div>
                  <img src={board} alt=" " className="stopDrag" />
                </div>
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

function TouchPoint5({ position, color, onClick }) {
  const [showMessage, setShowMessage] = useState(false);
  const [collectedMessage, setCollectedMessage] = useState(false);
  const [hovered, set] = useState(false);
  const [coll, setColl] = useState(false);
  const [showProceed, setShowProceed] = useState("hidden");
  const [show, setShow] = useState(false);

  var puzzlePro;

  // function that checks the number of boxes collected
  setInterval(function () {
    console.log("x", x);
    puzzlePro = localStorage.getItem("puzzleComplete");
    if (x === 6 && y === 0) {
      setShow(true);
    }
    if (coll) {
      ccom = 6;
      y = 1;
      setCollectedMessage(true);
    }
    if (puzzlePro === "1") {
      setShowProceed("visible");
      localStorage.removeItem("puzzleComplete");
      new Audio(correct).play();
    }
    // console.log(puzzlePro)
  }, 1000);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      scale={collectedMessage ? [0, 0, 0] : [2, 0.2, 0.2]}
      position={position}
      rotation={[0, 1.5, 1.6]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => {
        setShowMessage(true);
        new Audio(paper).play();
        localStorage.setItem("pState", "1");
      }}
    >
      <planeGeometry attach="geometry" args={[1, 32, 32]} />
      <meshBasicMaterial
        attach="material"
        transparent
        opacity={hovered ? 0.2 : 0.2}
      />
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
              onClose={() => {
                setShowMessage(false);
                localStorage.setItem("pState", "0");
              }}
            >
              <div className="alert-inside20">
                <Alert.Heading>
                  <div style={{ display: show ? "block" : "none" }}>
                    <Puzzle />
                    <div>
                      <button
                        onClick={() => {
                          setShowMessage(false);
                          setColl(true);
                          localStorage.setItem("pState", "0");
                        }}
                        style={{
                          visibility: showProceed,
                          position: "absolute",
                          left: "746px",
                          top: "94px",
                          opacity: "0",
                        }}
                        className="btn btn-primary3"
                      >
                        x
                      </button>
                      <button
                        onClick={() => {
                          setShowMessage(false);
                          localStorage.setItem("pState", "0");
                        }}
                        style={{
                          visibility: showMessage ? "visible" : "hidden",
                          position: "absolute",
                          left: "526px",
                          top: "116px",
                          opacity: "0",
                        }}
                        className="btn btn-primary3"
                      >
                        x
                      </button>
                    </div>
                  </div>
                  <div
                    style={{
                      display: show ? "none" : "block",
                      transform: "scale(0.6)",
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                    }}
                  >
                    <img
                      src={PrePuz}
                      className="stopDrag"
                      alt=" "
                      style={{
                        position: "absolute",
                        transform: "scale(0.5) translate(-65%, -45%)",
                      }}
                    />
                    <img
                      src={Xclose}
                      className="stopDrag"
                      alt=" "
                      onClick={() => {
                        setShowMessage(false);
                      }}
                      style={{
                        position: "absolute",
                        left: "1251px",
                        top: "80px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </Alert.Heading>
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

function Initimg() {
  const [displayProp, setDisplayProp] = React.useState(false);

  setTimeout(function () {
    setDisplayProp(true);
    // console.log("TEXT")
  }, 6000);

  return (
    <>
      <div
        className="welcomedcc"
        style={{
          display: displayProp ? "none" : "block",
          position: "absolute",
          zIndex: "200",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src={hint}
          width="100%"
          height="100%"
          className="stopDrag"
          alt=" "
        />
      </div>
    </>
  );
}

const intiImage = <Initimg />;

function TouchPoint6({ position, color, onClick }) {
  const [hovered, set] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [show, setShow] = useState(false);

  // function that checks the number of boxes collected
  setInterval(function () {
    if (ccom === 6) {
      setShow(true);
    }
  }, 1000);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );

  return (
    <mesh
      scale={[1, 2, 1, 1]}
      position={position}
      rotation={[-0.22, 0.22, 0.22]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <planeGeometry attach="geometry" args={[6, 1, 6]} />
      <meshBasicMaterial
        attach="material"
        transparent
        opacity={hovered ? 0.2 : 0}
      />
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
              <div style={{ display: show ? "block" : "none" }}>
                {/* <button className="close" onClick={() => setShowMessage(false)}> */}
                <img
                  onClick={() => setShowMessage(false)}
                  className="stopDrag"
                  alt=" "
                  style={{
                    position: "absolute",
                    top: "-194px",
                    right: "-141px",
                    transform: "scale(0.5)",
                    cursor: "pointer",
                  }}
                  src={xclose}
                />
                {/* </button> */}
                <Telephone />
                {/* {tele} */}
              </div>
              <div
                style={{
                  display: show ? "none" : "block",
                  transform: "scale(0.6)",
                  position: "absolute",
                  top: "-145px",
                  left: "-513px",
                }}
              >
                <img src={teleNo} alt=" " className="stopDrag" />
                <button
                  onClick={() => setShowMessage(false)}
                  className="stopDrag"
                  style={{
                    position: "absolute",
                    right: "39px",
                    top: "36px",
                    opacity: "0",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  XX
                </button>
              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

var data;
data = localStorage.getItem("myDataKey");
var now;

setInterval(function () {
  now = localStorage.getItem("scene5");
  if (now !== "NaN") {
    Scene2ar();
  }
  if (localStorage.getItem("myDataKey") === "1598355449119") {
    localStorage.setItem("myDataKey", "0");
    window.location.href = "/timesup-ar";
  }
}, 500);

function timerz() {
  var datetime = data;

  var now = new Date().getTime();
  now = localStorage.getItem("scene5");

  if (isNaN(datetime)) {
    return "";
  }

  if (datetime < now) {
    var milisec_diff = now - datetime;
  } else {
    milisec_diff = datetime - now;
  }
  var final = Math.round(900 - milisec_diff / 1000);
  if (final < 0) {
    final = 0;
  }

  return final;
}

function Timer() {
  var minutes = timerz(); //minutes passed since start
  const [counter, setCounter] = React.useState(minutes);

  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);
  var mins = Math.floor(counter / 60);
  var secs = counter - mins * 60;
  if (secs < 10) {
    secs = "0" + secs;
  }
  var arigato = mins + ":" + secs;

  if (counter === 0) {
    window.location.href = "/timesup-ar";
  }

  return (
    <div className="bg-text5">
      <div>{arigato}</div>
    </div>
  );
}

function Counter() {
  const [something, setSomething] = useState(4);
  const [pieceCollected, setPieceCollected] = useState(0);
  const [pieceShow, setPieceShow] = useState(false);

  setInterval(function () {
    if (x === 12) {
      setSomething(5);
      x = x + 1;
    } else if (ccom === 6) {
      setSomething(6);
    }
    // console.log("x: ", x)
    setPieceCollected(x);
    if (cork === 2) {
      setPieceShow(true);
    }
  }, 500);

  return (
    <>
      <div className="bg-text6">
        <h1>
          {something}/<span>7</span>
        </h1>
        <h3 style={{ letterSpacing: "0" }}>التحديات</h3>
      </div>
      <div
        className="bg-text7"
        style={{ visibility: pieceShow ? "visible" : "hidden" }}
      >
        <img src={Map} height="45%" width="45%" className="stopDrag" alt=" " />
        <h1 style={{ paddingLeft: "50px" }}>
          {pieceCollected}/<span>6</span>
        </h1>
        <h3 style={{ paddingLeft: "32px" }}>أجزاء</h3>
      </div>
    </>
  );
}

const counter1 = <Counter />;
const logout = <Logout />;
const elementorso = <Timer />;
const doors = <Door />;
function Scene2ar() {
  // if (languageCheck === 0) {
  //   if (localStorage.getItem("lang") === "en") {
  //     window.location.href = "/scene2";
  //     languageCheck = 1;
  //   }
  // }
  return (
    <>
      {doors}
      <Canvas camera={{ position: [0, 0, 0.1] }}>
        <Controls
          enableZoom={false}
          enablePan={false}
          enableDamping
          dampingFactor={0.2}
        />
        <Suspense
          fallback={
            <Html center style={{ color: "white" }}>
              <img src={Loader} alt=" " />
              <div>
                <h1 style={{ color: "#F8A61F", textAlign: "center" }}>
                  Loading...
                </h1>
              </div>
              <div
                className="welcomedcc"
                style={{
                  position: "absolute",
                  zIndex: "200",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            </Html>
          }
        >
          <Dome />
          <pointLight position={[-10, 10, 10]} />
          <Box1 position={[-12, -6, 10]} />
          <Box2 position={[-14, 5.3, -13]} />
          <Box3 position={[10, -4.8, 12]} />
          <Box4 position={[-12, 0.7, 2]} />
          <Box5 position={[-12, -13, 3.5]} />
          <Box6 position={[-5, -1.6, 15]} />
          <ambientLight intensity={0.7} />
          <Box7 position={[-20, -10, 9]} />
          <TouchPoint1
            position={[-16, 0.5, -10]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint2
            position={[-18, -7.5, -4.5]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint3 position={[1, -1, 2]} args={[3, 2, 1]} color="#F8A61F" />
          <TouchPoint4
            position={[-4.5, -2, 0.2]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint5
            position={[-25, -10.4, 10]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint6
            position={[-25, -13.5, -6]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          {/* <Portal position={[-10, -12, -20]} args={[3, 2, 1]} color='#fff' /> */}
        </Suspense>
      </Canvas>
      <Music2 />
      {elementorso}
      {counter1}
      {logout}
      {intiImage} ,
    </>
  );
}

export default Scene2ar;
