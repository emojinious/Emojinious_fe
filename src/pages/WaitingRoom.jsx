import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #434040;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const BackButton = styled.img`
  position: absolute;
  left: 2%;
  top: 4%;
  width: 8vh;
  height: 8vh;
  cursor: pointer;
`;

const WaitingRoom = () => {
  const navigate = useNavigate();

  const handleBackClick = useCallback(() => {
    navigate(-1); // 이전 페이지로 이동
  }, [navigate]);

  return (
    <HomeContainer>
      <Header/>
        <BackButton 
          src="/뒤로가기.svg" 
          alt="Back Button" 
          onClick={handleBackClick} 
        />
        </HomeContainer>
    );
}

export default WaitingRoom;