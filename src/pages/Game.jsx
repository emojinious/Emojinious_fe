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
const Game = ({ gameState, submissionProgress }) => {
  const [isAllReady, setIsAllReady] = useState(false);
  const [promptTimeLimit, setPromptTimeLimit] = useState(gameState.settings.promptTimeLimit || 0);
  const [totalPlayers, setTotalPlayers] = useState(submissionProgress.total || 0);
  const [readyPlayers, setReadyPlayers] = useState(submissionProgress.submitted || 0);

  useEffect(function() {
    setPromptTimeLimit(gameState.settings.promptTimeLimit);
    setTotalPlayers(submissionProgress.total);
    setReadyPlayers(submissionProgress.submitted);
  }, [gameState]);
  
console.log(submissionProgress);

  const handleReady = () => {
    setIsAllReady(true);
  };

  return (
    <HomeContainer>
      <Header />
      {!isAllReady ? (
        <Game1
        keyword="YourKeyword"  // Game1에 필요한 props 전달
        handleReady={handleReady}   // 모두 준비 완료 되면 handleReady 함수가 실행되도록 전달
        promptTimeLimit={promptTimeLimit}
        totalPlayers={totalPlayers}
        readyPlayers={readyPlayers}
        />
        ) : (
          <Game2
          keyword="YourKeyword"  // Game2에 필요한 props 전달
          />
          )}
          {/*<GameAnswer gameState={gameState}/>
          <GameGuess/>*/}
    </HomeContainer>
  );
};

export default Game;
