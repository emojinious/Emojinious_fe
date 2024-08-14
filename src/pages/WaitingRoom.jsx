import React, { useState, useCallback, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { connectToSocket, sendChatMessage, disconnect } from '../utils/socket';
import Header from "../components/Header";
import Chat from '../components/Chat';
import { updateGameSettings } from '../utils/api';
import TopicBox from "../components/TopicBox";
import Profile from '../components/Profile';
import Setting from '../components/Setting';
import BoingButton from "../components/BoingButton";


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
  width: 80%;
  margin-top: 20px;
`;

const PlayerListBox = styled.div`
  width: 49%;
  height: 60vh;
  background-color: #EAE8DC;
  border-radius: 20px;
  display: flex;
  flex-direction:column;
  justify-content:space-around;
`;

const PlayerBox= styled.div`
  dispaly:flex;
  width: 100%;
  height:20%;
  display:flex;
  justify-content:center;
`

const RightBox = styled.div`
  width: 49%;
  height: 60vh;
  position:relative;
`

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
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

const WaitingRoom = () => {
  const navigate = useNavigate();
  const [currentTopic, setCurrentTopic] = useState(0);
  const { sessionId } = useParams();
  const [gameState, setGameState] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [connectionError, setConnectionError] = useState(null);

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
        
        stompClient.subscribe(`/topic/game/${sessionId}`, function(gameState) {
          const newGameState = JSON.parse(gameState.body);
          console.log('Received game state:', newGameState);
          setGameState(newGameState);
          setIsHost(newGameState.players.find(p => p.id === playerId)?.isHost || false);
        });
        
          stompClient.subscribe(`/topic/game/${sessionId}/chat`, function(chatMessage) {
            const newChatMessage = JSON.parse(chatMessage.body);
            console.log('Received chat message:', newChatMessage);
            setChatMessages(prevMessages => [...prevMessages, newChatMessage]);
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
  }, [sessionId]);

  const topics = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const handleBackClick = useCallback(() => {
    navigate(-1); // 이전 페이지로 이동
  }, [navigate]);

  const handlePrevClick = () => {
    setCurrentTopic((prevTopic) => (prevTopic === 0 ? topics.length - 1 : prevTopic - 1));
  };

  const handleNextClick = () => {
    setCurrentTopic((prevTopic) => (prevTopic === topics.length - 1 ? 0 : prevTopic + 1));
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
  const handleStartClick = () => {
    console.log("Start button clicked");
  };

  if (connectionError) {
    return <div>Error: {connectionError}</div>;
  }

  return (
    <HomeContainer>
      {gameState && (
        <>
          <Header />
          <BackButton 
            as="img"
            src="/뒤로가기.svg" 
            alt="Back Button" 
            onClick={handleBackClick} 
            />
          <TopicBox 
            currentTopic={currentTopic} 
            topics={topics} 
            onPrevClick={handlePrevClick} 
            onNextClick={handleNextClick} 
            />
          <BoxesContainer>
            <Profile players={gameState.players}/>
            <RightBox>
            <Setting />
            <ButtonsContainer>
                <Button onClick={handleInviteClick} color="#7766C2" activeColor="#6456A5">초대</Button>
                <Button onClick={handleStartClick} color="#FFCD1C" color2="black" activeColor="#BF9912">시작</Button>
              </ButtonsContainer>
            </RightBox>
          </BoxesContainer>
        </>
      )}
    </HomeContainer>
  );
};

export default WaitingRoom;
