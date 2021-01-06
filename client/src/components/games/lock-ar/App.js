import React from "react";
import PinInput from "react-pin-input";
import wrong from '../../../audio/wrong.mpeg';
import correct from '../../../audio/correct.mp3';

var tryAgain = 'none';
var rightAnswer = 'none';

class App extends React.PureComponent {
  state = {
    value: ""
  };
 
  onChange = value => {
    this.setState({ value });
  };
 
  render() {
    const { value } = this.state;
    console.log(value)
    var input1 = "BIRD"
    if (value.length === 4 && value.localeCompare(input1)===0){
      // value.localeCompare(input1)? console.log("NO MATCH") : window.location.href = "/scene2";
      rightAnswer = 'block';
      new Audio(correct).play();
      setTimeout(() => {
        var scene5 = new Date().getTime();
        localStorage.setItem('scene5', scene5);
        window.location.href = '/scene2';
      }, 3000);

  }
  else if(value.length === 4 && value.localeCompare(input1)!==0){
      
    tryAgain = 'block';
    new Audio(wrong).play();
    setTimeout(function(){
      tryAgain = 'none';
    }, 1000);
  }
  return (
    <>
    <div className="app" style={{alignContent: 'center'}}>
      <PinInput
        length={4}
        focus
        style={{ fontSize: '43px', margin: '0px' }}
        // disabled
        // secret
        ref={p => (this.pin = p)}
        type="string"
        onChange={this.onChange}
      />
      {/* <div>{value}</div> */}
      {/* <button onClick={this.onClear}>Clear</button> */}
    </div>
    <div className="app-text" style={{ display: tryAgain, position: 'absolute', right: '241px', color: 'white', bottom: '25%', fontFamily: 'Dubai W23, sans-serif', letterSpacing: '1px', zIndex: '5' }}>
      <h3 style={{ textAlign: 'center' }}>
        Code incorrect. Try again!
      </h3>
    </div>
    <div className="app-text" style={{ display: rightAnswer, position: 'absolute', right: '193px', color: 'white', bottom: '25%', fontFamily: 'Dubai W23, sans-serif', letterSpacing: '1px', zIndex: '5' }}>
      <h3 style={{ textAlign: 'center' }}>
        Great job! You found your way inside.
      </h3>
    </div>
    <div className="app-text" style={{position: 'absolute',  textAlign: 'center', position: 'absolute', color: 'black', fontFamily: 'Dubai W23, sans-serif', fontWeight: 'lighter', letterSpacing: '1px', zIndex: '6', bottom: '1%', left: '1px'}}>
      <h3>ARABIC The door is locked!</h3>
      <h3 style={{marginTop: '0px'}}>Explore the environment around you to find the code that will let you inside the Desert Conservation Centre.</h3>
    </div>
    </>
  );
}
}
export default App;