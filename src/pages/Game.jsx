import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Game1 from '../components/Game1';
import Game2 from '../components/Game2';
import GameAnswer from '../components/GameAnswer';
import GameGuess from '../components/GameGuess';
import { updateGameSettings } from '../utils/api';
import { connectToSocket, sendChatMessage, disconnect } from '../utils/socket';

// 스타일 정의
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


// Game 컴포넌트
const Game = () => {
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();
  const { gameState, sessionId } = location.state || {};
  

  const handleReady = () => {
    // 준비 버튼을 눌렀을 때 실행될 함수
    setIsReady(true);
  };

  return (
    <HomeContainer>
      <Header />
      {/*
      {!isReady ? (
        <Game1
        keyword="YourKeyword"  // Game1에 필요한 props 전달
        onReady={handleReady}   // 준비 버튼이 눌리면 handleReady 함수가 실행되도록 전달
        />
        ) : (
          <Game2
          keyword="YourKeyword"  // Game2에 필요한 props 전달
          />
          )}
          <GameAnswer gameState={gameState}/>
          */}
          <GameGuess/>
    </HomeContainer>
  );
};

export default Game;
