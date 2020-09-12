import React from "react";
import styled, { keyframes } from "styled-components";
import { Illustrations } from "../../assets";

const rotate = keyframes`
  0%   { transform: rotate(0);      }
  100% { transform: rotate(360deg); }
`;

const SpinImg = styled.img`
  width: 5rem;
  height: 5rem;
  animation: ${rotate} 2s 0s infinite cubic-bezier(0.1, 0.3, 0.2, 0) normal;
`;

const ProgressSpinner = () => (
  <SpinImg src={Illustrations.Record} alt="loading..." />
);

export default ProgressSpinner;
