import React from "react";
import { useStore } from "../../store";
import { Box, Button, Input, ButtonsContainer, CallButton } from "./atom";

export default () => {
  const [number, setNumber] = React.useState("");
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

  return (
    <Box opened={state.dialerOpened} onClick={onDialerClick}>
      <Input
        placeholder="0000-0000"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />

      <ButtonsContainer>
        {buttons.map(char => (
          <Button key={char} onClick={() => setNumber(number + char)}>
            {char}
          </Button>
        ))}
      </ButtonsContainer>

      <CallButton>Call</CallButton>
    </Box>
  );
};
