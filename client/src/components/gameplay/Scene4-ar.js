import * as THREE from "three";
import React, { Suspense, useRef } from "react";

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

// import Task1 from '../popup/Task1';
// import TouchPoint1 from '../touchpoints/scene4/Touchpoint1'
import TouchPoint2 from "../touchpoints/scene4/Touchpoint2";
import TouchPoint3 from "../touchpoints/scene3/Touchpoint5";
import TouchPoint4 from "../touchpoints/scene4/Touchpoint4";
import TouchPoint5 from "../touchpoints/scene4/Touchpoint5";
import TouchPoint6 from "../touchpoints/scene4/Touchpoint6";
import TouchPoint7 from "../touchpoints/scene1/Touchpoint7";

// import Timer from '../timer/Timer'
import "./style.css";

import Music1 from "../../audio/Music1";
import carDoor from "../../audio/carDoor.ogg";

var languageCheck = 0;

extend({ OrbitControls });

var data;
data = localStorage.getItem("myDataKey");
var now;

function Cardoor() {
  new Audio(carDoor).play();
  return null;
}

setInterval(function () {
  now = localStorage.getItem("scene3");
  // console.log("scene3: ", localStorage.getItem('scene3'));
  // console.log("now", now);
  if (now !== "NaN") {
    Scene4ar();
  }
  if (localStorage.getItem("myDataKey") === "1598355449119") {
    localStorage.setItem("myDataKey", "0");
    window.location.href = "/timesup-ar";
  }
}, 500);

function timerz() {
  var datetime = data;
  console.log("datetime", datetime);

  var now = localStorage.getItem("scene3");

  if (isNaN(datetime)) {
    return "";
  }

  if (datetime < now) {
    var milisec_diff = now - datetime;
  } else {
    var milisec_diff = datetime - now;
  }
  var final = Math.round(900 - milisec_diff / 1000);
  if (final < 0) {
    final = 0;
  }
  console.log("final", final);

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
  const texture = useLoader(THREE.TextureLoader, "trunk1.jpg");
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

function Counter() {
  return (
    <div className="bg-text3">
      <h1>
        1<span>/7</span>
      </h1>
      <h3>CHALLENGES</h3>
    </div>
  );
}
const counter = <Counter />;
const logout = <Logout />;
var elementorso = <Timer />;
var carDoors = <Cardoor />;
function Scene4ar() {
  if (languageCheck === 0) {
    if (localStorage.getItem("lang") === "en") {
      window.location.href = "/scene4";
      languageCheck = 1;
    }
  }
  return (
    <>
      {/* <Timer/> */}
      {carDoors}
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
              <img src={Loader} />
              <div>
                <h1 style={{ color: "#F8A61F", textAlign: "center" }}>
                  Loading...
                </h1>
              </div>
            </Html>
          }
        >
          <Dome />
          <TouchPoint2
            position={[-15, -2.9, -1.5]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint3 position={[2, -5, 5]} args={[3, 2, 1]} color="#F8A61F" />
          <TouchPoint3
            position={[6.5, -6, 5]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint3
            position={[-1, -3.2, 0.4]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint4
            position={[2, -20, -15]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          {/* <TouchPoint4 position={[11, -20, -15]} args={[3, 2, 1]} color='#F8A61F' /> */}
          <TouchPoint5
            position={[5, -8, -15]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint3
            position={[-3, -6, 5]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint6 position={[4, -7, 5]} args={[3, 2, 1]} color="#F8A61F" />

          {/* Feather TP */}
          <TouchPoint7
            position={[-1.8, -5.2, 5]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
          <TouchPoint7
            position={[-2.2, -7, 5]}
            args={[3, 2, 1]}
            color="#F8A61F"
          />
        </Suspense>
      </Canvas>
      ,
      <Music1 />
      {elementorso}
      {counter}
      {logout}
    </>
  );
}

export default Scene4ar;
