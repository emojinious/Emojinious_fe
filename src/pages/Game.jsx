import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Game1 from '../components/Game1';
import Game2 from '../components/Game2';
import GameAnswer from '../components/GameAnswer';
import GameGuess from '../components/GameGuess';
import Loading from '../components/Loading';
import { updateGameSettings } from '../utils/api';
import { submitPrompt, submitGuess } from '../utils/socket';

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
  const { gameState: initialGameState, sessionId } = location.state; // LobbyRoom에서 넘어온 상태들
  const [gameState, setGameState] = useState(initialGameState);
  const [currentPrompt, setCurrentPrompt] = useState('');
  const [currentGuess, setCurrentGuess] = useState('');
  const [currentKeyword, setCurrentKeyword] = useState(gameState.keyword || '');
  const [currentImage, setCurrentImage] = useState('');
  const [remainingTime, setRemainingTime] = useState(gameState.remainingTime);
  const [submissionProgress, setSubmissionProgress] = useState({ submitted: 0, total: 0 });

  //keyword 도출
  const handlePersonalMessage = useCallback((message) => {
    const data = JSON.parse(message.body);
    if (data.type === 'keyword') {
      setCurrentKeyword(data.data);
    } else if (data.type === 'image') {
      setCurrentImage(data.data);
    }
  }, []);

  useEffect(() => {
    // 타이머 관리 로직
    const timer = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  const handleSubmitPrompt = () => {
    submitPrompt(sessionId, currentPrompt);
    setCurrentPrompt('');
  };

  const handleSubmitGuess = () => {
    submitGuess(sessionId, currentGuess);
    setCurrentGuess('');
  };

  //useEffect
  useEffect(() => {

    connectAndSubscribe();

    return () => {
      if (stompClientRef.current) {
        disconnect(stompClientRef.current);
        isConnectedRef.current = false;
      }
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [sessionId, navigate, connectAndSubscribe]);

  const renderPhaseContent = () => {
    switch (gameState.currentPhase) {
      case 1: // Loading phase
        return <p>Server is generating keywords...</p>;
      case 2: // Description phase
        return (
          <Game1
        keyword={currentKeyword}
        onReady={handleReady}
        />
        );
      case 3: // Generation phase
        return <p>Server is generating images based on descriptions...</p>;
      case 4: // Checking phase
        return (
          <div>
            <p>Check your generated image:</p>
            {currentImage && <img src={currentImage} alt="Generated" style={{maxWidth: '300px'}} />}
          </div>
        );
      case 5: // Guessing phase
        return (
          <div>
            <p>Guess the keyword for this image:</p>
            {currentImage && <img src={currentImage} alt="To guess" style={{maxWidth: '300px'}} />}
            <input
              type="text"
              value={currentGuess}
              onChange={(e) => setCurrentGuess(e.target.value)}
              placeholder="Enter your guess"
            />
            <button onClick={handleSubmitGuess}>Submit Guess</button>
          </div>
        );
      default:
        return null;
    }
  };

  if (connectionError) {
    return <div>Error: {connectionError}</div>;
  }
  

  const handleReady = () => {
    // 준비 버튼을 눌렀을 때 실행될 함수
    setIsReady(true);
  };

  return (
    <HomeContainer>
      <Header />
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
    </HomeContainer>
  );
};

export default Game;
