import React, { useState, useCallback, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { connectToSocket, sendChatMessage, disconnect } from '../utils/socket';
import Header from "../components/Header";
import { updateGameSettings } from '../utils/api';
import TopicBox from "../components/TopicBox";
import Profile from '../components/Profile';
import Setting from '../components/Setting';
import ChatBox from '../components/ChatBox';
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

const LobbyRoom = () => {
  const navigate = useNavigate();
  const [currentTopic, setCurrentTopic] = useState(0);
  const { sessionId } = useParams();
  const [gameState, setGameState] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [connectionError, setConnectionError] = useState(null);
  const [activeTab, setActiveTab] = useState('setting');

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

  //주제 종류
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

  const handleSendChatMessage = (content) => {
    sendChatMessage(sessionId, content);
  };

  const handleUpdateGameSettings = async (settings) => {
    try {
      const token = localStorage.getItem('token');
      await updateGameSettings(sessionId, settings, token);
      console.log('Game settings updated successfully');
    } catch (error) {
      console.error('Failed to update game settings:', error);
    }
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
  const handleStartClick = async (settings) => {
    console.log("Start button clicked");
    //설정 보낸 후 시작.
    try {
      const token = localStorage.getItem('token');
      await updateGameSettings(sessionId, settings, token);
      console.log('Game settings updated successfully');
    } catch (error) {
      console.error('Failed to update game settings:', error);
    }
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
              <MainContent>
                {activeTab === 'setting' ? <Setting /> : <ChatBox players={gameState.players} messages={chatMessages} onSendMessage={handleSendChatMessage}/>}
                <ButtonsContainer>
                  <Button onClick={handleInviteClick} color="#7766C2" activeColor="#6456A5">초대</Button>
                  <Button onClick={handleStartClick} color="#FFCD1C" color2="black" activeColor="#BF9912">시작</Button>
                </ButtonsContainer>
              </MainContent>
              <SetNav>
                <SetNavButton color="#14AE59" active={activeTab === 'setting'} onClick={() => setActiveTab('setting')}>
                  <img src="/room_설정.svg" alt="설정" />
                </SetNavButton>
                <SetNavButton color="#FEA1BD" active={activeTab === 'chat'} onClick={() => setActiveTab('chat')}>
                  <img src="/room_채팅방.svg" alt="채팅방" />
                </SetNavButton>
              </SetNav>
            </RightBox>
          </BoxesContainer>
        </>
      )}
    </HomeContainer>
  );
};

export default LobbyRoom;
