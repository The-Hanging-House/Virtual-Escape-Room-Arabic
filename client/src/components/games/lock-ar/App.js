import React from "react";
import PinInput from "react-pin-input";
import wrong from "../../../audio/wrong.mpeg";
import correct from "../../../audio/correct.mp3";

var tryAgain = "none";
var rightAnswer = "none";

class App extends React.PureComponent {
  state = {
    value: "",
  };

  onChange = (value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    console.log(value);
    var input1 = "BIRD";
    if (value.length === 4 && value.localeCompare(input1) === 0) {
      // value.localeCompare(input1)? console.log("NO MATCH") : window.location.href = "/scene2";
      rightAnswer = "block";
      new Audio(correct).play();
      setTimeout(() => {
        var scene5 = new Date().getTime();
        localStorage.setItem("scene5", scene5);
        window.location.href = "/scene2-ar";
      }, 3000);
    } else if (value.length === 4 && value.localeCompare(input1) !== 0) {
      tryAgain = "block";
      new Audio(wrong).play();
      setTimeout(function () {
        tryAgain = "none";
      }, 1000);
    }
    return (
      <>
        <div className="app" style={{ alignContent: "center" }}>
          <PinInput
            length={4}
            focus
            style={{ fontSize: "43px", margin: "0px" }}
            // disabled
            // secret
            ref={(p) => (this.pin = p)}
            type="string"
            onChange={this.onChange}
          />
          {/* <div>{value}</div> */}
          {/* <button onClick={this.onClear}>Clear</button> */}
        </div>
        <div
          className="app-text"
          style={{
            display: tryAgain,
            position: "absolute",
            right: "241px",
            color: "white",
            bottom: "25%",
            fontFamily: "Dubai W23, sans-serif",
            letterSpacing: "1px",
            zIndex: "5",
          }}
        >
          <h3 style={{ textAlign: "center" }}>
            !الرمز غير صحيح. حاول مرة أخرى
          </h3>
        </div>
        <div
          className="app-text"
          style={{
            display: rightAnswer,
            position: "absolute",
            right: "221px",
            color: "white",
            bottom: "25%",
            fontFamily: "Dubai W23, sans-serif",
            letterSpacing: "1px",
            zIndex: "5",
          }}
        >
          <h3 style={{ textAlign: "center" }}>
            أحسنت! لقد وجدت طريقك إلى الداخل
          </h3>
        </div>
        <div
          className="app-text"
          style={{
            position: "absolute",
            textAlign: "center",
            color: "black",
            fontFamily: "Dubai W23, sans-serif",
            fontWeight: "lighter",
            letterSpacing: "0px",
            zIndex: "6",
            bottom: "1%",
            left: "18px",
            fontSize: "18px",
            lineHeight: "1.16",
          }}
        >
          <h3>!الباب مغلق</h3>
          <h3
            style={{ marginTop: "0px", direction: "rtl", unicodeBidi: "embed" }}
          >
            استكشف البيئة من حولك للعثور على الرمز الذي سيسمح لك بالدخول إلى
            مركز الحفاظ على الصحراء.
          </h3>
        </div>
      </>
    );
  }
}
export default App;
