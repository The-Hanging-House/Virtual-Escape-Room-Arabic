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
    // if (value.length === 4){
      // value.localeCompare(input1)? console.log("NO MATCH") : window.location.href = "/scene2";
      // var scene5 = new Date().getTime();
      // localStorage.setItem('scene5', scene5);
      // window.location.href = '/scene2';
  // }
  if(value.length === 4){
      
    tryAgain = 'block';
    setTimeout(function(){
      tryAgain = 'none';
    }, 1000);
  }
  return (
    <>
    <div className="app">
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
    <div style={{ display: tryAgain, position: 'absolute', right: '34%', color: 'black', bottom: '20%', zIndex: '5', textAlign: 'center' }}>
      <h3 style={{ textAlign: 'center' }}>
        OOPS! That's not the right word.
      </h3>
      <h3>
        Complete more challenges to get hints!
      </h3>
    </div>
    </>
  );
}
}
export default App;