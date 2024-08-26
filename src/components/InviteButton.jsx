import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import BoingButton from './BoingButton';

const fadeAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const StyledButton = styled(BoingButton)`
  width: 48%;
  padding: 10px 0;
  font-size: 25px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #7766C2;
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6456A5;
  }

  &:active {
    background-color: #534589;
  }

  & > span {
    display: inline-block;
    animation: ${props => props.animate ? fadeAnimation : 'none'} 0.3s ease;
  }
`;

const InviteButton = ({ onClick }) => {
  const [buttonText, setButtonText] = useState('초대');
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    onClick();
    setIsAnimating(true);
    setButtonText('링크 복사 완료!');
    
    setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setButtonText('초대');
        setIsAnimating(false);
      }, 300);
    }, 1700);
  };

  return (
    <StyledButton onClick={handleClick} animate={isAnimating}>
      <span>{buttonText}</span>
    </StyledButton>
  );
};

export default InviteButton;