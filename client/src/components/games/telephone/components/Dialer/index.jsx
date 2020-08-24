import React from "react";
import { useStore } from "../../store";
import { Box, Button, Input, ButtonsContainer, CallButton } from "./atom";
 
var flag = 0;
 
export default () => {
  const [number, setNumber] = React.useState("");
  const [callButton, setCallButton] = React.useState(false);
  const [callValues, setCallValues] = React.useState(number);
  // const [placeholderText, setPlaceholderText] = React.useState("000-000");
  const [state, dispatch] = useStore();
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"];
 
  // ComponentDidMount & ComponentWillUnmount
  React.useEffect(() => {
    document.addEventListener("click", onOuterClick);
    return () => document.removeEventListener("click", onOuterClick);
  });
 
  const onOuterClick = () => {
    dispatch({ type: "DIALER_CLOSE" });
  };
 
  const onDialerClick = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };
 
 
  console.log(number);
  const callNumber = "800296";
  var callValue = number;
 
  if(callButton){
    console.log("Call Button Pressed")
    if (number.length === callNumber.length && number.localeCompare(callNumber)===0){
      // number.localeCompare(callNumber)? console.log("NO MATCH") : window.location.href = "/end";
      var scene2 = new Date().getTime();
      localStorage.setItem('scene2', scene2);
      window.location.href = '/end';
    }
    else if(number.localeCompare(callNumber) !== 0){
 
      flag = 1;
 
      setCallValues("Wrong number try again!")
      // callValue = "Wrong number try again!";
      console.log("Wrong number try again")
 
      setTimeout(function(){
        flag = 0;
        setCallValues(number);
      }, 1000);
 
      callValue = number;
      setCallButton(false);
    }
  }
  console.log(number.localeCompare(callNumber));
 
  if(flag === 0){
    setTimeout(function(){
      setCallValues(number)
      // callValue = number;
    }, 100);
  }
 
 
 
 
  return (
    <Box opened={state.dialerOpened} onClick={onDialerClick}>
      <Input
        placeholder={"000-000"}
        value={callValues}
        onChange={e => setNumber(e.target.value)}
      />
 
      <ButtonsContainer>
        {buttons.map(char => (
          <Button key={char} onClick={() => setNumber(number + char)}>
            {char}
          </Button>
        ))}
      </ButtonsContainer>
 
      <CallButton onClick={() => setCallButton(true)}>Call</CallButton>
    </Box>
  );
};