import React from "react";
import PinInput from "react-pin-input";


class App extends React.PureComponent {
  state = {
    value: "",
  };

  // onChange = value => {
  //   this.setState({ value });
  // };

  // onClear = () => {
  //   this.setState({
  //     value: ""
  //   });
  //   this.pin.clear();
  // };

  render() {
    const {  } = this.state;
    return (
      <div className="app">
        <PinInput
          length={4}
          // focus
          // disabled
          // secret
          // ref={p => (this.pin = p)}
          type="string"
          // onChange={this.onChange}
        />
        
        {/* <button onClick={this.onClear}>Clear</button> */}
      </div>
    );
  }
}
export default App;
