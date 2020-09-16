import React from "react";
import { useStore } from "../../store";
import { Box, Button, Button1, Input, ButtonsContainer, CallButton } from "./atom";
import phoneCall from '../../../../../audio/phoneCall.mp3'
import dialpad from '../../../../../audio/dialpad.mp3'
import wrong from '../../../../../audio/wrongCall.mp3'
import Backgrounds from '../../../../../img/delete.png'

var flag = 0;
 
export default () => {
  const [number, setNumber] = React.useState("");
  const [callButton, setCallButton] = React.useState(false);
  const [callValues, setCallValues] = React.useState(number);
  const [state, dispatch] = useStore();
  const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", " ", "0"];
  const buttonAlphabets = [" ", "(abc)", "(def)", "‏‏‎ ‎(ghi)", "‏‏‎ ‏‏‎ ‎‎(jkl)", "‏‏‎ ‎(mno)", "‏‏‎ ‎(pqrs)", "‏‏‎ ‎(tuv)", "‏‏‎ ‎(wxyz)", " ", " ", " "];
 
 
  const onDialerClick = e => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    new Audio(dialpad).play();
  };
 
  var flag = 0;
 
  const callNumber = "800296";
  const callNumber2 = "8004432";
  if(callButton){
    var strNumber = String(number)
    if (strNumber.length === callNumber.length && strNumber.localeCompare(callNumber)===0){
      var scene2 = new Date().getTime();
      localStorage.setItem('scene2', scene2);

      if (flag === 0){
        new Audio(phoneCall).play();
        flag = 1;
      }
      setTimeout(function(){
        window.location.href = '/end';
      }, 5000);
    }
    
 
    else if(number.length === callNumber2.length && number.localeCompare(callNumber2)===0){
        var scene2 = new Date().getTime();
        localStorage.setItem('scene2', scene2);
        window.location.href = '/end';
        }	
    else if(strNumber.localeCompare(callNumber) !== 0){
 
      flag = 1;
 
      setCallValues("Try Again!");
      setTimeout(function(){
        new Audio(wrong).play();
      }, 200);
 
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
 
  function eraser() {
    var phone = Math.floor(number/10);
    if (phone !==0 ){
      setNumber(phone);
    }
    else{
      setNumber("");
    }
   }
 
 
  return (
    <Box opened={state.dialerOpened} onClick={onDialerClick}>
      <Input
        style={{paddingLeft: '1rem'}}
        placeholder={"000-000"}
        value={callValues}
        onChange={e => setNumber(e.target.value)}
      />
      
      <div className="Yeet" style={{float: "right"}}>
        <ButtonsContainer>
          {buttons.map(char => (
            <Button key={char} onClick={() => setNumber(number + char)}>
              {char}
            </Button>
          ))}
        </ButtonsContainer>
        
        {/* 
        <ButtonsContainer style={{position: 'absolute', top: '33%', left: '7%', zIndex: '-2'}}>
          {buttonAlphabets.map(char => (
            <Button1 key={char} onClick={() => setNumber(number)}>
              {char}
            </Button1>
          ))}
        </ButtonsContainer> */}

        {/* <button style={{position: 'absolute', backgroundColor: 'transparent', height: '20px' , twop: '70%', left: '75%', padding: '2px', color: 'white', border: 'green'}}  onClick={() => eraser()}>Del</button> */}
        {/* <a style={{background:`url(${Backgrounds})`}}  onClick={() => eraser()}></a> */}
        <a><img src={Backgrounds} alt="my image" style={{ cursor: 'pointer', opacity: '0', position: 'absolute', backgroundColor: 'transparent', height: '30px' , top: '74%', left: '48%', padding: '2px', border: 'green'}} onClick={() => eraser()} /></a>

        <a><img src={Backgrounds} onClick={() => setCallButton(true)} alt="my image" style={{ cursor: 'pointer', opacity: '0', position: 'absolute', backgroundColor: 'transparent', height: '30px' , top: '74%', left: '13%', padding: '2px', border: 'green'}} /></a>
      </div>
      {/* <CallButton onClick={() => setCallButton(true)}>Call</CallButton> */}
    </Box>
  );
};