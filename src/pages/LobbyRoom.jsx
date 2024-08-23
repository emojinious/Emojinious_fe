import React, { useState, useCallback, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { connectToSocket, sendChatMessage, disconnect, startGame, submitPrompt, submitGuess } from '../utils/socket';
import Header from "../components/Header";
import { updateGameSettings } from '../utils/api';
import TopicBox from "../components/TopicBox";
import Profile from '../components/Profile';
import Setting from '../components/Setting';
import ChatBox from '../components/ChatBox';
import BoingButton from "../components/BoingButton";
import LoadingSpinner from "../components/LoadingSpinner";
import Lobby from "../components/Lobby";


const boingEffect = keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

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

const BackButton = styled(BoingButton).attrs({ isImageButton: true })`
  position: absolute;
  left: 2%;
  top: 4%;
  width: 8vh;
  height: 8vh;
  cursor: pointer;
  user-select: none;
`;

const BoxesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  margin-top: 20px;
`;

const RightBox = styled.div`
  width: 60%;
  height: 62.5vh;
  position: relative;
  display: flex;
`

const MainContent = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 20px;
`;

const SetNav = styled.div`
  display: flex;
  position:absolute;
  right:0;
  top:4%;
  flex-direction: column;
  justify-content: flex-start;
  height: 90%;
  width: 10%;
`;

const SetNavButton = styled.button`
  width: 80%;
  height: 20%;
  background-color: ${({ color }) => color || '#777'};
  color: white;
  font-size: 18px;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  padding: 10px;
  overflow: hidden;
  margin-bottom: 10px;

  img {
    width: 80%;
    transition: transform 0.3s ease;
  }

  &:hover img {
    animation: ${boingEffect} 0.4s ease;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 8vh;
  position: absolute;
  bottom: 0; /* 설정 박스 바로 아래에 위치하도록 조정 */
`;

const Button = styled.button`
  width: 48%;
  padding: 10px 0;
  font-size: 18px;
  background-color: ${({ color }) => color || '#777'};
  color: ${({ color2 }) => color2 || 'white'};
  font-weight: bold;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    animation: ${boingEffect} 0.4s ease;
  }
    
  &:active {
    background-color: ${({ activeColor }) => activeColor || '#999'};
  }
`;

const LoadingSpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 3%;
  right: 1%;
  transform: translate(-50%, -50%);
`;

const LoadingText = styled.div`
  font-size: 20px;
  color: #EAE8DC;
  margin-right: 5px;
`;

const LobbyRoom = () => {
  const navigate = useNavigate();
  const { sessionId } = useParams();
  const [gameState, setGameState] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [connectionError, setConnectionError] = useState(null);
  const [activeTab, setActiveTab] = useState('setting');
  const [hasChatNotification, setHasChatNotification] = useState(false);
  const [hasSettingNotification, setHasSettingNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const previousSettingsRef = useRef(gameState?.settings);
  const [currentKeyword, setCurrentKeyword] = useState('');

  useEffect(() => {
    const playerId = localStorage.getItem('playerId');
    const token = localStorage.getItem('token');
    const characterId = localStorage.getItem('characterId');
  
    console.log('Player info:', { playerId, characterId, sessionId });
  
    let stompClient;
  
    const connectAndSubscribe = async () => {
      try {
        stompClient = await connectToSocket(token, playerId, sessionId, () => {
          console.log('Successfully connected and joined the game');
        });
  
        // 서버 구독은 한 번만 수행되도록 설정
        stompClient.subscribe(`/topic/game/${sessionId}`, function(gameState) {
          const newGameState = JSON.parse(gameState.body);
          console.log('Received game state:', newGameState);
          setGameState(newGameState);
          setIsHost(newGameState.players.find(p => p.id === playerId)?.isHost || false);
  
          // 주제 업데이트
          if (newGameState.settings.topic) {
            setCurrentTopic(newGameState.settings.topic);
          }
  
          // 알림 상태 업데이트
          const previousSettings = previousSettingsRef.current;
          const newSettings = newGameState.settings;
          if (previousSettings && JSON.stringify(previousSettings) !== JSON.stringify(newSettings)) {
            setHasSettingNotification(true);
          }
          previousSettingsRef.current = newSettings;
        });
  
        stompClient.subscribe(`/topic/game/${sessionId}/chat`, function(chatMessage) {
          const newChatMessage = JSON.parse(chatMessage.body);
          console.log('Received chat message:', newChatMessage);
          setChatMessages(prevMessages => [...prevMessages, newChatMessage]);
          if (activeTab !== 'chat') {
            setHasChatNotification(true);
          }
        });
  
        setConnectionError(null);
      } catch (error) {
        console.error('Failed to connect:', error);
        setConnectionError('Failed to connect to the game server. Please try again.');
      }
    };
  
    connectAndSubscribe();
  
    return () => {
      if (stompClient) {
        disconnect();
      }
    };
  }, [sessionId]);  // 게임 세션 ID가 변경될 때만 재실행
  
  // gameState 감지 로직은 별도로 관리
  useEffect(() => {
    if (gameState?.currentPhase === 2) {
      navigate('/game', { state: { gameState, sessionId } });
    }
  }, [gameState, navigate, sessionId]);

  const handleBackClick = useCallback(() => {
    navigate(-1); // 이전 페이지로 이동
  }, [navigate]);

  const handleSendChatMessage = (content) => {
    sendChatMessage(sessionId, content);
  };

  // 초대 버튼 클릭 시 로직
  const handleInviteClick = () => {
    console.log("Invite button clicked");
    const inviteLink = generateInviteLink();
    navigator.clipboard.writeText(inviteLink).then(() => {
      alert('Invite link copied to clipboard!');
    }).catch(err => {
      console.error('Failed to copy invite link: ', err);
    });
  };

  const generateInviteLink = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/join?sessionId=${sessionId}`;
  };

  // 시작 버튼 클릭 시 로직
  const handleStartClick = async () => {
    console.log("Start button clicked");
    startGame(sessionId);
    console.log("gamestate:"+gameState.state);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'chat') {
      setHasChatNotification(false);
    } else if (tab === 'setting') {
      setHasSettingNotification(false);
    }
  };

  if (connectionError) {
    return <div>Error: {connectionError}</div>;
  }

  const handleUpdateGameSettings = async (settings) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await updateGameSettings(sessionId, settings, token);
      console.log('Game settings updated successfully');
    } catch (error) {
      console.error('Failed to update game settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTheme = async (settings) => {
    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      await updateGameSettings(sessionId, settings, token);
      console.log('Game settings updated successfully');
    } catch (error) {
      console.error('Failed to update game settings:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HomeContainer>
      {gameState && (
          <>
            <Header />
            <Lobby
              gameState={gameState}
              sessionId={sessionId}
              isHost={isHost}
              chatMessages={chatMessages}
              handleBackClick={handleBackClick}
              handleUpdateTheme={handleUpdateTheme}
              handleUpdateGameSettings={handleUpdateGameSettings}
              handleSendChatMessage={handleSendChatMessage}
              handleInviteClick={handleInviteClick}
              handleStartClick={handleStartClick}
              loading={loading}
            />
            </>
      )}
    </HomeContainer>
  );
};

export default LobbyRoom;
