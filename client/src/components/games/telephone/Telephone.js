import React from "react";
import { reducer } from "./store";
import StoreProvider from "./components/StoreProvider";
import ToggleDialer from "./components/ToggleDialer";
import Dialer from "./components/Dialer";
import "./styles.css";

const initialState = { dialerOpened: false };
const TeravozDialer = () => (
  <StoreProvider initialState={initialState} reducer={reducer}>
    <ToggleDialer />
    <Dialer />
  </StoreProvider>
);

export default TeravozDialer;
