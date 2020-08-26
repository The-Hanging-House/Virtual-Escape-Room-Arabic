import React from "react";
import { useStore } from "../../store";
import { Box, Button, Input, ButtonsContainer, CallButton } from "./atom";
 
var flag = 0;
 
export default () => {
  const [number, setNumber] = React.useState("");
  const [callButton, setCallButton] = React.useState(false);
  const [callValues, setCallValues] = React.useState(number);
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
 
  if(callButton){
    console.log("Call Button Pressed")
    if (number.length === callNumber.length && number.localeCompare(callNumber)===0){
      var scene2 = new Date().getTime();
      localStorage.setItem('scene2', scene2);
      window.location.href = '/end';
    }
    else if(number.localeCompare(callNumber) !== 0){
 
      flag = 1;
 
      setCallValues("Wrong number try again!")
 
      setTimeout(function(){
        flag = 0;
        setNumber("");
        setCallValues(number);
      }, 1000);
 
      setCallButton(false);
    }
  }
 
  if(flag === 0){
    setTimeout(function(){
      setCallValues(number)
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