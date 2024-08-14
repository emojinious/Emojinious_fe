import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import TopicBox from "../components/TopicBox";
import Profile from '../components/Profile';
import Setting from '../components/Setting';

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

// 버튼 컨테이너
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

  &:active {
    background-color: ${({ activeColor }) => activeColor || '#999'};
  }
`;

const WaitingRoom = () => {
  const navigate = useNavigate();
  const [currentTopic, setCurrentTopic] = useState(0);

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

  const handleInviteClick = () => {
    // 초대 버튼 클릭 시 로직
    console.log("Invite button clicked");
  };

  const handleStartClick = () => {
    // 시작 버튼 클릭 시 로직
    console.log("Start button clicked");
  };

  return (
    <HomeContainer>
      <Header />
      <BackButton 
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
        <PlayerListBox>
          <PlayerBox>
            <Profile character="E" nickname="난괜찮아링딩딩" />
          </PlayerBox>
          <PlayerBox>
            <Profile character="M" nickname="Player2" />
          </PlayerBox>
          <PlayerBox>
            <Profile character="O" nickname="Player2" />
          </PlayerBox>
          <PlayerBox>
            <Profile character="J" nickname="Player2" />
          </PlayerBox>
          <PlayerBox>
            <Profile character="I" nickname="Player2" />
          </PlayerBox>
        </PlayerListBox>
        <RightBox>
        <Setting />
        <ButtonsContainer>
            <Button onClick={handleInviteClick} color="#7766C2" activeColor="#6456A5">초대</Button>
            <Button onClick={handleStartClick} color="#FFCD1C" color2="black" activeColor="#BF9912">시작</Button>
          </ButtonsContainer>
        </RightBox>
      </BoxesContainer>
    </HomeContainer>
  );
};

export default WaitingRoom;
