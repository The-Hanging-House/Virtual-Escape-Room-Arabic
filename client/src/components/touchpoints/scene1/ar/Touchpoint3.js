import React, { useState, useEffect } from "react";

import { Container, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

import X from "../../../../img/x.svg";

import { Html } from "drei";
// import App1 from '../../games/game/App1';

function TouchPoint3({ position, color, onClick }) {
  const [hovered, set] = useState(false);
  // const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  return (
    <mesh
      scale={hovered ? [1, 1, 1, 1] : [1, 1, 1, 1]}
      position={position}
      // ref={mesh}
      rotation={[3, 3, 0]}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <planeGeometry attach="geometry" args={[12, 10, 10]} />
      <meshBasicMaterial
        attach="material"
        transparent
        opacity={hovered ? 0.1 : 0}
      />
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
              // dismissible
              onClose={() => setShowMessage(false)}
            >
              <div className="alert-insides1-arabic">
                <button className="close" onClick={() => setShowMessage(false)}>
                  <img
                    className="stopDrag"
                    src={X}
                    width="250%"
                    alt=" "
                    height="250%"
                  ></img>
                </button>
                <Alert.Heading>
                  <p style={{ fontSize: "1.1rem", color: "black" }}>
                    صندوق السيارة مغلق، لكنك تركت الأضواء والموسيقى مضاءة. هل
                    وجدت مفاتيحك؟
                  </p>
                </Alert.Heading>

              </div>
            </Alert>
          </CSSTransition>
        </Container>
      </Html>
    </mesh>
  );
}

export default TouchPoint3;
