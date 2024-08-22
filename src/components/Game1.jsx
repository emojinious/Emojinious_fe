import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PlayerProfile from './Profile';

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
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

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
  background-color: ${(props) => (props.isReady ? '#14AE59' : '#FFCD1C')};
  color: ${(props) => (props.isReady ? '#FFFFFF' : '#7766C2')};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: ${(props) => (props.isReady ? '#128C48' : '#E6B517')};
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
const Game1 = ({ keyword, timeLimit, readyPlayers, totalPlayers, onReady, players }) => {
  const [explanation, setExplanation] = useState('');
  const [timeLeft, setTimeLeft] = useState(timeLimit);
  const [isReady, setIsReady] = useState(false);

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
    setIsReady(true);
    onReady(explanation);
  };

  return (
    <>
      <TopicContainer>
        <TopicBoxStyled>
          <TopicBoxline readOnly>
            {keyword}
          </TopicBoxline>
        </TopicBoxStyled>
      </TopicContainer>
      <TotalBox>
        <LeftBox>
          <PlayerProfile players={players} /> {/* PlayerProfile 컴포넌트 추가 */}
        </LeftBox>
        <RightBox>
          <ExplanationBox>
            <Explanationinput 
              placeholder="키워드에 맞는 설명을 작성하세요..."
              value={explanation}
              onChange={handleExplanationChange}
              disabled={isReady}
            />
          </ExplanationBox>
          <ReadyButton
          onClick={handleReadyClick}
          isReady={isReady}
          disabled={isReady}
          >
            {isReady ? '완료!' : '준비'}
          </ReadyButton>
          <TimerBarContainer>
            <TimerBar width={(timeLeft / timeLimit) * 100} />
          </TimerBarContainer>
        </RightBox>
      </TotalBox>
      <ReadyPlayersContainer>
        {[...Array(totalPlayers)].map((_, index) => (
          <ReadyPlayerIcon
            key={index}
            src={index < readyPlayers ? "/game_플레이어준비완료.svg" : "/game_플레이어준비중.svg"}
            alt={index < readyPlayers ? "준비 완료" : "준비 중"}
          />
        ))}
      </ReadyPlayersContainer>
    </>
  );
};

export default Game1;
