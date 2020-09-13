import styled, { css } from "styled-components";

export const Box = styled.div
`
  position: fixed;
  bottom: 70px;
  right: 15px;
  width: 100vh;
  max-width: 220px;
  padding: 15px;
  // background: #263238;
  background-image: url("./telephone2.png");
  background-size: 100%;
  background-repeat: no-repeat;
  border-radius: 22.5px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(30px);
  box-shadow: 0 5px 10px -5px rgba(0, 0, 0, 0.2);
  transition: opacity 0.15s ease-in, transform 0.25s ease-in,
    border-radius 0.3s ease-in-out, visibility 0s linear 0.3s;
  z-index: -10;

  ${props =>
    props.opened &&
    css`
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      transition: opacity 0.15s ease-out, transform 0.25s ease-out,
        border-radius 0.3s ease-in-out, visibility 0s;
      border-bottom-right-radius: 0;
    `}
`;

export const Input = styled.input`
  width: 70%;
  margin-bottom: 15px;
  margin-top: 15px;
  border: none;
  background: transparent;
  height: 57px;
  font-size: 1rem;
  top: 50px;
  padding: 0 15px;
  border-radius: 4px;
  color: white; 
`;

export const ButtonsContainer = styled.div`
  font-size: 0;
  width: 70%;
  // float: right;
`;

export const Button = styled.button`
  // visibility: hidden;
  display: inline-block;
  width: calc(33.33% - 10px);
  font-size: 18px;
  background: transparent;
  border: none;
  color:  transparent;
  padding: 9px 0;
  text-align: center;
  cursor: pointer;

  // &:hover {
  //   color: #fff;
  // }

  &:nth-child(3n - 1) {
    margin: 0 10px;
  }
`;

export const Button1 = styled.button`
  display: inline-block;
  // line-height: 50%
  width: calc(33.33% - 15px);
  // top: 10%
  font-size: 12px;
  background: transparent;
  border: none;
  color: #969696;
  padding: 8px 15px;
  text-align: center;
  // cursor: pointer;
  // left: 100%;

  &:nth-child(3n - 1) {
    margin: 0 15px;
  }
`;

export const CallButton = styled.button`
  margin-top: 5px;
  background: #8bc34a;
  color: #fff;
  width: 50%;
  height: 40px;
  border-radius: 20px;
  text-align: center;
  border: none;
  cursor: pointer;

  &:hover {
    background: #7cb342;
  }
`;