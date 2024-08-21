import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Game1 from '../components/Game1';
import Game2 from '../components/Game2';

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

const TopicContainer = styled.div`
  width:100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const TopicBoxStyled = styled.div`
  width: 30%;
  height: 80px;
  background-color: #EAE8DC;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const TopicBoxline = styled.input`
  width:95%;
  height:70%;
  background: none;
  border-radius: 10px;
  border: 4px solid #FEA1BD;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;

  &:focus {
    outline: none;
  }
`;

const TotalBox = styled.div`
  width: 75%;
  height: 60%;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 40px;
`

const LeftBox = styled.div`
  width: 10%;
  height: 100%;
  background-color: #EAE8DC;
  border-radius: 15px;
  border:none;
  display:flex;
  flex-direction:column;
`

const UserProfile = styled.div`
  width:100%;
  height:20%;
  background-color:red;
`

const RightBox = styled.div`
  width:80%;
  height:100%;
  background-color:black;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
`

const ExplanationBox = styled.div`
  width: 95%;
  height: 70%;
  border-radius: 15px;
  border:none;
  margin-bottom: 20px;
  background-color:#FEA1BD;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Explanationinput = styled.textarea`
  width: 100%;
  height: 80%;
  padding: 15px;
  margin: 25px;
  font-size: 18px;
  border-radius: 15px;
  background-color:#EAE8DC;
  border:none;
  resize: none;
  outline: none; 
`;

const ReadyButton = styled.button`
  width: 95%;
  height: 20%;
  padding: 10px 25px;
  font-size: 24px;
  font-weight: bold;
  background-color: #FFCD1C;
  color: #7766C2;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: #E6B517;
  }
`;

const TimerBarContainer = styled.div`
  width: 95%;
  height: 25px;
  border-radius: 15px;
  overflow: hidden;
`;

const TimerBar = styled.div`
  height: 100%;
  background-color: #EAE8DC;
  width: ${({ width }) => width}%;
  transition: width 0.5s linear;
`;

const ReadyPlayersContainer = styled.div`
  width:63%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
`;

const ReadyPlayerIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 5px;
`;

// Game 컴포넌트
const Game = ({ keyword, timeLimit, readyPlayers, totalPlayers, onReady }) => {
  const [explanation, setExplanation] = useState('');
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLimit]);

  const handleExplanationChange = (e) => {
    setExplanation(e.target.value);
  };

  const handleReadyClick = () => {
    onReady(explanation);
  };

  return (
    <HomeContainer>
      <Header />
      <Game2/>
    </HomeContainer>
  );
};

export default Game;
