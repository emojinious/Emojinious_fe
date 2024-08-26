import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import TopicBox from "./TopicBox";
import Profile from "./Profile";
import Setting from "./Setting";
import ChatBox from "./ChatBox";
import BoingButton from "./BoingButton";
import LoadingSpinner from "./LoadingSpinner";

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
`;

const MainContent = styled.div`
  width: 90%;
  height: 100%;
  border-radius: 20px;
`;

const SetNav = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  top: 4%;
  flex-direction: column;
  justify-content: flex-start;
  height: 90%;
  width: 10%;
`;

const SetNavButton = styled.button`
  width: 80%;
  height: 20%;
  background-color: ${({ color }) => color || "#777"};
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
  background-color: ${({ color }) => color || "#777"};
  color: ${({ color2 }) => color2 || "white"};
  font-weight: bold;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    animation: ${({ disabled }) => (disabled ? "none" : boingEffect)} 0.4s ease;
  }

  &:active {
    background-color: ${({ activeColor }) => activeColor || "#999"};
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
  color: #eae8dc;
  margin-right: 5px;
`;

const Lobby = ({
  gameState,
  isHost,
  chatMessages,
  handleBackClick,
  handleUpdateTheme,
  handleUpdateGameSettings,
  handleSendChatMessage,
  handleInviteClick,
  handleStartClick,
  loading,
  hasSettingNotification,
  hasChatNotification,
  handleTabChange,
  activeTab,
  keywordloading,
  InviteButton,
}) => {
  return (
    <>
      <BackButton
        as="img"
        src="/뒤로가기.svg"
        alt="Back Button"
        onClick={handleBackClick}
      />
      <TopicBox
        isHost={isHost}
        gameState={gameState}
        handleUpdateTheme={handleUpdateTheme}
      />
      <BoxesContainer>
        <Profile players={gameState.players} />
        <RightBox>
          <MainContent>
            {activeTab === "setting" ? (
              <Setting
                isHost={isHost}
                gameState={gameState}
                handleUpdateGameSettings={handleUpdateGameSettings}
              />
            ) : (
              <ChatBox
                players={gameState.players}
                messages={chatMessages}
                onSendMessage={handleSendChatMessage}
              />
            )}
            <ButtonsContainer>
              <InviteButton
                onClick={handleInviteClick}
                color="#7766C2"
                activeColor="#6456A5"
              />
              <Button
                onClick={handleStartClick}
                color="#FFCD1C"
                color2="black"
                activeColor="#BF9912"
                disabled={!isHost}
              >
                시작
              </Button>
            </ButtonsContainer>
          </MainContent>
          <SetNav>
            <SetNavButton
              color="#14AE59"
              active={activeTab === "setting"}
              onClick={() => handleTabChange("setting")}
            >
              <img
                src={
                  hasSettingNotification
                    ? "/room_설정알림.svg"
                    : "/room_설정.svg"
                }
                alt="설정"
              />
            </SetNavButton>
            <SetNavButton
              color="#FEA1BD"
              active={activeTab === "chat"}
              onClick={() => handleTabChange("chat")}
            >
              <img
                src={
                  hasChatNotification
                    ? "/room_채팅방알림.svg"
                    : "/room_채팅방.svg"
                }
                alt="채팅방"
              />
            </SetNavButton>
          </SetNav>
        </RightBox>
      </BoxesContainer>
      {keywordloading && (
        <>
          <LoadingSpinnerContainer>
            <LoadingText>키워드 생성중...</LoadingText>
          </LoadingSpinnerContainer>
          <LoadingSpinner />
        </>
      )}
      {loading && <LoadingSpinner />}
    </>
  );
};

export default Lobby;
