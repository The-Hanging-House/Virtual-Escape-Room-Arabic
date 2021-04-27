import React, { useState, useEffect } from "react";

import { Container, Alert } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

import { Html } from "drei";

import X from "../../../../img/x.svg";

function TouchPoint3({ position, color, onClick }) {
  const [hovered, set] = useState(false);
  // const [CON, setCON] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [switchState, setSwitchState] = useState(false);
  const [wrongAlert, setWrongAlert] = useState(true);
  const [correctAlert, setCorrectAlert] = useState(false);

  const onMouseOver = (event) => {
    const el = event.target;
    let colorhex = "#F8A61F";
    el.style.background = colorhex;
  };

  const onMouseOut = (event) => {
    const el = event.target;
    let black = "#FFE7B0";
    el.style.background = black;
  };

  if (switchState) {
    setTimeout(function () {
      var scene6 = new Date().getTime();
      localStorage.setItem("scene6", scene6);
      window.location.href = "/scene5-ar";
    }, 4000);
  }

  setInterval(function () {
    if (!wrongAlert) {
      setTimeout(function () {
        // console.log("false");
        setWrongAlert(true);
        // setSwitchState(true);
      }, 3000);
    }
    console.log(wrongAlert);
  }, 3000);

  useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered]
  );
  return (
    <mesh
      scale={hovered ? [1, 1, 1, 1] : [1, 1, 1, 1]}
      position={position}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => setShowMessage(true)}
    >
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
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
            classNames="alert6"
            unmountOnExit
            // onEnter={() => setShowButton(false)}
            // onExited={() => setShowButton(true)}
          >
            <Alert
              className="alert6"
              variant="primary"
              // dismissible
              onClose={() => setShowMessage(false)}
            >
              <div className="alert-insides" style={{ top: "-170px" }}>
                <button className="close" onClick={() => setShowMessage(false)}>
                  <img
                    src={X}
                    alt="x"
                    className="stopDrag"
                    style={{
                      position: "absolute",
                      top: "-28px",
                      left: "6px",
                      width: "50px",
                    }}
                  />
                </button>

                <Alert.Heading>
                  <p
                    style={{
                      fontSize: "1.4rem",
                      position: "absolute",
                      top: "33px",
                      width: "500px",
                      left: "14px",
                      textAlign: "right",
                    }}
                  >
                    أي من الخيارات التالية ترغب في اتخاذها؟
                  </p>

                  <div
                    className="mcq-bounding-text2"
                    style={{ display: correctAlert ? "none" : "block" }}
                  >
                    <h3
                      className="mcq-text2-arabic"
                      onMouseEnter={(event) => onMouseOver(event)}
                      style={{
                        display: wrongAlert ? "block" : "none",
                        background: "#FFE7B0",
                      }}
                      onMouseOut={(event) => onMouseOut(event)}
                      onClick={() => setWrongAlert(false)}
                    >
                      .ترك الأنوار مضاءة حتى نتمكن من رؤية الحياة البرية القريبة
                    </h3>
                    <h3
                      className="mcq-text2-arabic"
                      onClick={() => setWrongAlert(false)}
                      style={{
                        display: wrongAlert ? "block" : "none",
                        background: "#FFE7B0",
                      }}
                      onMouseEnter={(event) => onMouseOver(event)}
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      .تقليل سطوع الإضاءة أثناء محاولتك دخول مركز الحفظ
                    </h3>
                    <h3
                      className="mcq-text2-arabic"
                      onClick={() => setShowMessage(false)}
                      style={{
                        display: wrongAlert ? "block" : "none",
                        background: "#FFE7B0",
                      }}
                      onMouseEnter={(event) => onMouseOver(event)}
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      .التجاهل واستكشاف العناصر الأخرى في صندوق السيارة
                    </h3>
                    <h3
                      className="mcq-text2-arabic"
                      onClick={() => {
                        setSwitchState(true);
                        setCorrectAlert(true);
                      }}
                      style={{
                        display: wrongAlert ? "block" : "none",
                        background: "#FFE7B0",
                      }}
                      onMouseEnter={(event) => onMouseOver(event)}
                      onMouseOut={(event) => onMouseOut(event)}
                    >
                      .إطفاء الأنوار لأنك لا تحتاجها
                    </h3>
                    <h3
                      style={{
                        position: "absolute",
                        top: "-20px",
                        padding: "20px",
                        left: "35px",
                        display: wrongAlert ? "none" : "block",
                        textAlign: "right",
                        direction: "rtl",
                        unicodeBidi: "embed",
                      }}
                    >
                      حاول مرة أخرى! يمكن للضوء الساطع أن يزعج الحياة البرية.
                      بشكل عام، يجب إطفاء أي أضواء، إذا لم تكن هناك حاجة إليها.
                    </h3>
                  </div>
                  <div>
                    <h3
                      style={{
                        position: "absolute",
                        top: "74px",
                        padding: "20px",
                        right: "46px",
                        display: correctAlert ? "block" : "none",
                        textAlign: "right",                         direction: "rtl",
                        unicodeBidi: "embed",

                      }}
                    >
                      صحيح! يمكن للضوء الساطع أن يزعج الحياة البرية. بشكل عام، يجب إطفاء أي أضواء، إذا لم تكن هناك حاجة إليها.
                    </h3>
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

export default TouchPoint3;
