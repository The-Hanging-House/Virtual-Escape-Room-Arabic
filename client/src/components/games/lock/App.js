import React from "react";
import PinInput from "react-pin-input";
 
class App extends React.PureComponent {
  state = {
    value: ""
  };
 
  onChange = value => {
    this.setState({ value });
  };
 
  // onClear = () => {
  //   this.setState({
  //     value: ""
  //   });
  //   this.pin.clear();
  // };
 
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
    return (
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
        <div>{value}</div>
        {/* <button onClick={this.onClear}>Clear</button> */}
      </div>
    );
  }
}
export default App;