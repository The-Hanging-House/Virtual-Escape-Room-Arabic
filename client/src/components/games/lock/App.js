import React from "react";
import PinInput from "react-pin-input";

var tryAgain = 'none';

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
      var scene5 = new Date().getTime();
      localStorage.setItem('scene5', scene5);
      window.location.href = '/scene2';

  }
  else if(value.length === 4 && value.localeCompare(input1)!==0){
      
    tryAgain = 'block';
    setTimeout(function(){
      tryAgain = 'none';
    }, 1000);
  }
  return (
    <>
    <div className="app-text" style={{ textAlign: 'center', color: 'black', position: 'absolute', fontFamily: 'Dubai W23, sans-serif', zIndex: '5'}}>
    {/* <div className="app-text" style={{ textAlign: 'center', color: 'black'}}> */}
      <h3>The door is locked!</h3>
      <h3>Explore the environment around you to find the code that will let you inside the Desert Conservation Centre.</h3>
    </div>
    <div className="app" style={{alignContent: 'center'}}>
      <PinInput
        length={4}
        focus
        // disabled
        // secret
        ref={p => (this.pin = p)}
        type="string"
        onChange={this.onChange}
      />
      {/* <div>{value}</div> */}
      {/* <button onClick={this.onClear}>Clear</button> */}
    </div>
    <div className="app-text" style={{ display: tryAgain, position: 'absolute', right: '255px', color: 'black', bottom: '20%', fontFamily: 'Dubai W23, sans-serif', zIndex: '5' }}>
      <h3 style={{ textAlign: 'center' }}>
        Code incorrect. Try again!
      </h3>
    </div>
    </>
  );
}
}
export default App;