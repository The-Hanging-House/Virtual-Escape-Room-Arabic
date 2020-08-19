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
    if (value.length === 4){
      // console.log("BIG BOYE")
      value.localeCompare(input1)? console.log("NO MATCH") : console.log("MATCH") //prints yote if string same
      // Simulate a mouse click:
      window.location.href = "/scene2";
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