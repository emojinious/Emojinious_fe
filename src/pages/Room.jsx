import React, { useState, useCallback, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import {
  connectToSocket,
  sendChatMessage,
  disconnect,
  startGame,
  submitPrompt,
  submitGuess,
} from "../utils/socket";
import Header from "../components/Header";
import { updateGameSettings } from "../utils/api";
import Lobby from "../components/Lobby";
import Game1 from "../components/Game1";
import Game2 from "../components/Game2";
import Loading from "../components/Loading";
import GameGuess from "../components/GameGuess";

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

const Room = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [gameState, setGameState] = useState(null);
  const [isHost, setIsHost] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [connectionError, setConnectionError] = useState(null);
  const [activeTab, setActiveTab] = useState("setting");
  const [hasSettingNotification, setHasSettingNotification] = useState(false);
  const [hasChatNotification, setHasChatNotification] = useState(false);
  const [loading, setLoading] = useState(false);
  const previousSettingsRef = useRef(gameState?.settings);
  const [currentPrompt, setCurrentPrompt] = useState("");
  const [currentGuess, setCurrentGuess] = useState("");
  const [currentKeyword, setCurrentKeyword] = useState("");
  const [currentImage, setCurrentImage] = useState("");
  const [remainingTime, setRemainingTime] = useState(0);
  const [submissionProgress, setSubmissionProgress] = useState({
    submitted: 0,
    total: 0,
  });
  const [message, setMessage] = useState("");
  const [isAllReady, setIsAllReady] = useState(false);
  const [promptTimeLimit, setPromptTimeLimit] = useState(null);
  const [totalPlayers, setTotalPlayers] = useState(1);
  const [readyPlayers, setReadyPlayers] = useState(1);
  const [keywordloading, setKeywordloading] = useState(false);

  const stompClientRef = useRef(null);
  const isConnectedRef = useRef(false);
  const timerRef = useRef(null);

  {
    /* 
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
          
          stompClient.subscribe(`/topic/game/${sessionId}/progress`, function(progress) {
            const newProgress = JSON.parse(progress.body);
            console.log('Received game progress:', newProgress);
            setSubmissionProgress(newProgress);
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
    */
  }

  const connectAndSubscribe = useCallback(async () => {
    if (isConnectedRef.current) return;

    const playerId = localStorage.getItem("playerId");
    const token = localStorage.getItem("token");

    try {
      stompClientRef.current = await connectToSocket(
        token,
        playerId,
        sessionId,
        () => {
          console.log("Successfully connected and joined the game");
        }
      );

      const subscriptions = [
        { topic: `/topic/game/${sessionId}`, callback: handleGameState },
        { topic: `/topic/game/${sessionId}/chat`, callback: handleChatMessage },
        {
          topic: `/user/queue/game/${sessionId}`,
          callback: handlePersonalMessage,
        },
        {
          topic: `/topic/game/${sessionId}/progress`,
          callback: handleProgress,
        }, // 추가: progress 구독
        { topic: `/topic/game/${sessionId}/phase`, callback: handlePhase },
      ];

      subscriptions.forEach(({ topic, callback }) => {
        stompClientRef.current.subscribe(topic, callback);
      });

      isConnectedRef.current = true;
      setConnectionError(null);
    } catch (error) {
      console.error("Failed to connect:", error);
      setConnectionError(
        "Failed to connect to the game server. Please try again."
      );
    }
  }, [sessionId]);

  const handleGameState = useCallback((gameState) => {
    const newGameState = JSON.parse(gameState.body);
    setGameState(newGameState);
    const playerId = localStorage.getItem("playerId");
    setIsHost(
      newGameState.players.find((p) => p.id === playerId)?.isHost || false
    );
    setRemainingTime(Math.floor(newGameState.remainingTime / 1000));

    // Setting Notification 업데이트
    const previousSettings = previousSettingsRef.current;
    const newSettings = newGameState.settings;
    if (
      previousSettings &&
      JSON.stringify(previousSettings) !== JSON.stringify(newSettings)
    ) {
      setHasSettingNotification(true);
    }
    previousSettingsRef.current = newSettings;

    // Clear existing timer
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    // Start new timer
    timerRef.current = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  }, []);

  const handleChatMessage = useCallback(
    (chatMessage) => {
      const newChatMessage = JSON.parse(chatMessage.body);
      setChatMessages((prevMessages) => [...prevMessages, newChatMessage]);

      // 현재 activeTab이 'chat'이 아닌 경우 알림을 활성화
      if (activeTab !== "chat") {
        setHasChatNotification(true);
      }
    },
    [activeTab]
  );

  const handlePersonalMessage = useCallback((message) => {
    const data = JSON.parse(message.body);
    if (data.type === "keyword") {
      setCurrentKeyword(data.data);
    } else if (data.type === "image") {
      setCurrentImage(data.data);
    }
  }, []);

  const handleProgress = useCallback((progress) => {
    // 추가: handleProgress
    const newProgress = JSON.parse(progress.body);
    setSubmissionProgress(newProgress);
  }, []);

  const handlePhase = useCallback((phaseMessage) => {
    const phaseData = JSON.parse(phaseMessage.body);
    setMessage(phaseData.message);
  }, []);

  useEffect(() => {
    const storedSessionId = localStorage.getItem("sessionId");
    if (sessionId !== storedSessionId) {
      navigate("/");
      return;
    }

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

  // 이전 페이지로 이동
  const handleBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const handleSendChatMessage = (content) => {
    sendChatMessage(sessionId, content);
  };

  //chat,setting nav
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "chat") {
      setHasChatNotification(false);
    } else if (tab === "setting") {
      setHasSettingNotification(false);
    }
  };

  // 초대 버튼 클릭 시 로직
  const handleInviteClick = () => {
    console.log("Invite button clicked");
    const inviteLink = generateInviteLink();
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        alert("Invite link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy invite link: ", err);
      });
  };
  const generateInviteLink = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}/join?sessionId=${sessionId}`;
  };

  // 시작 버튼 클릭 시 로직
  const handleStartClick = async () => {
    console.log("Start button clicked");
    setKeywordloading(true);
    startGame(sessionId); // startGame이 비동기적으로 실행되므로 이 이후에 다음 코드를 실행
    console.log(submissionProgress);
  };
  useEffect(() => {
    console.log("keywordloading 값이 변경됨: ", keywordloading);
  }, [keywordloading]);

  const handleUpdateGameSettings = async (settings) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await updateGameSettings(sessionId, settings, token);
      console.log("Game settings updated successfully");
    } catch (error) {
      console.error("Failed to update game settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTheme = async (settings) => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      await updateGameSettings(sessionId, settings, token);
      console.log("Game settings updated successfully");
    } catch (error) {
      console.error("Failed to update game settings:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleReady = () => {
    setIsAllReady(true);
  };

  useEffect(() => {
    if (gameState && gameState.settings) {
      setPromptTimeLimit(gameState.settings.promptTimeLimit);
      setTotalPlayers(submissionProgress.total);
      setReadyPlayers(submissionProgress.submitted);
      console.log(submissionProgress);
    }
  }, [gameState]);

  const renderGameContent = () => {
    if (!gameState) return null;

    switch (gameState.state) {
      case "WAITING":
        return (
          <Lobby
            gameState={gameState}
            isHost={isHost}
            chatMessages={chatMessages}
            handleBackClick={handleBackClick}
            handleUpdateTheme={handleUpdateTheme}
            handleUpdateGameSettings={handleUpdateGameSettings}
            handleSendChatMessage={handleSendChatMessage}
            handleInviteClick={handleInviteClick}
            handleStartClick={handleStartClick}
            loading={loading}
            hasSettingNotification={hasSettingNotification}
            hasChatNotification={hasChatNotification}
            handleTabChange={handleTabChange}
            activeTab={activeTab}
            keywordloading={keywordloading}
          />
        );
      case "IN_PROGRESS":
        return <>{renderPhaseContent()}</>;
      case "FINISHED":
        return (
          <div>
            <h3>Game Finished</h3>
            <p>
              Winner:{" "}
              {
                gameState.players.reduce((prev, current) =>
                  prev.score > current.score ? prev : current
                ).nickname
              }
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const renderPhaseContent = () => {
    switch (gameState.currentPhase) {
      case 1: // Loading phase
        return (
          <Lobby
            gameState={gameState}
            isHost={isHost}
            chatMessages={chatMessages}
            handleBackClick={handleBackClick}
            handleUpdateTheme={handleUpdateTheme}
            handleUpdateGameSettings={handleUpdateGameSettings}
            handleSendChatMessage={handleSendChatMessage}
            handleInviteClick={handleInviteClick}
            handleStartClick={handleStartClick}
            loading={loading}
            hasSettingNotification={hasSettingNotification}
            hasChatNotification={hasChatNotification}
            handleTabChange={handleTabChange}
            activeTab={activeTab}
            keywordloading={keywordloading}
          />
        );
      case 2: // Description phase
        return (
          <Game1 // Game1에 필요한 props 전달
            keyword={currentKeyword}
            sessionId={sessionId}
            currentPrompt={currentPrompt}
            setCurrentPrompt={setCurrentPrompt}
            promptTimeLimit={promptTimeLimit}
            totalPlayers={totalPlayers}
            readyPlayers={readyPlayers}
            players={gameState.players}
            submitPrompt={submitPrompt}
          />
        );
      case 3: // Generation phase
        return <Loading />;
      case 4: // Checking phase
        return (
          <Game2
            currentImage={currentImage}
            keyword={currentKeyword}
            players={gameState.players}
          />
        );
      case 5: // Guessing phase
        return (
          <GameGuess
            currentImage={currentImage}
            sessionId={sessionId}
            currentGuess={currentGuess}
            setCurrentGuess={setCurrentGuess}
            promptTimeLimit={promptTimeLimit}
            totalPlayers={totalPlayers}
            readyPlayers={readyPlayers}
            players={gameState.players}
            submitGuess={submitGuess}
          />
        );
      case 6: //score 분석 phase
        return <Loading />;
      default:
        return null;
    }
  };

  if (connectionError) {
    return <div>Error: {connectionError}</div>;
  }

  //진짜 return값.
  return (
    <HomeContainer>
      <Header />
      {renderGameContent()}
    </HomeContainer>
  );
};

export default Room;
