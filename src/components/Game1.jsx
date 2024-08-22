import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const TopicBoxline = styled.div`
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
  background-color: ${(props) => (props.isReady ? '#14AE59' : '#FFCD1C')};
  color: ${(props) => (props.isReady ? '#FFFFFF' : '#7766C2')};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  margin-bottom: 20px;
  &:hover {
    background-color: ${(props) => (props.isReady ? '#14AE59' : '#E6B517')};
  }
`;

const TimerBarContainer = styled.div`
  width: 95%;
  height: 25px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #EAE8DC;
`;

const TimerBar = styled.div`
  height: 100%;
  background-color: red;
  width: ${({ width }) => width}%;
  transition: width 0.1s linear;
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
const Game1 = ({ keyword, handleReady, promptTimeLimit, totalPlayers, readyPlayers, }) => {
  const [isReady, setIsReady] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [allReady, setAllReady] = useState(false);

  useEffect(() => {
    const interval = 100; // 타이머 업데이트 주기 (단위 : ms)
    const timer = setInterval(() => {
      setElapsedTime((prevTime) => {
        const newTime = prevTime + interval / 1000;
        if (newTime >= promptTimeLimit) {
          handleReady();
          clearInterval(timer); // 타이머가 끝나면 멈춤
          return promptTimeLimit;
        }
        return newTime;
      });
    }, interval);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [promptTimeLimit]);

  const handleExplanationChange = (e) => {
    setExplanation(e.target.value);
  };

  const handleReadyClick = () => {
    setIsReady(true);
  };

  const renderStatusIcons = () => {
    const statusIcons = [];
    for (let i = 0; i < readyPlayers; i++) {
      statusIcons.push(
        <img
          key={`ready-${i}`}
          src="/game_플레이어준비완료.svg"
          alt="Ready"
          style={{ width: '20px', height: '20px', margin: '0 5px' }}
        />
      );
    }
    for (let i = 0; i < totalPlayers - readyPlayers; i++) {
      statusIcons.push(
        <img
          key={`not-ready-${i}`}
          src="/game_플레이어준비중.svg"
          alt="Not Ready"
          style={{ width: '20px', height: '20px', margin: '0 5px' }}
        />
      );
    }
    return statusIcons;
  };

  useEffect(() => {
    
  });

  return (
    <>
    <TopicContainer>
        <TopicBoxStyled>
          <TopicBoxline>
            {keyword}
          </TopicBoxline>
        </TopicBoxStyled>
      </TopicContainer>
      <TotalBox>
        <LeftBox>
          <UserProfile/>
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
          <ReadyButton onClick={handleReadyClick} isReady={isReady} disabled={isReady}>
            {isReady ? '완료!' : '준비'}
          </ReadyButton>
          <TimerBarContainer>
            <TimerBar width={(elapsedTime / promptTimeLimit) * 100} />
          </TimerBarContainer>
        </RightBox>
      </TotalBox>
      <ReadyPlayersContainer>
        {renderStatusIcons()}
      </ReadyPlayersContainer>
    </>
  );
};

export default Game1;
