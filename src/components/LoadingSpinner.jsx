import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Spinner = styled.img`
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 2s linear infinite;
  margin: auto;
  position: absolute;
  bottom: 4%;
  right: 2%;
  transform: translate(-50%, -50%);
  z-index:1000;
`;

const LoadingSpinner = () => <Spinner src="/로딩원.svg" alt="로딩"/>;

export default LoadingSpinner;
