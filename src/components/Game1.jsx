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
  border: 4px solid ${({ bgColor }) => bgColor};
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
`;

const LeftBox = styled.div`
  width: 10%;
  height: 100%;
  background-color: #EAE8DC;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 0;
`;

const PlayerBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const ProfileImage = styled.img`
  width: 3vw;
  height: 3vw;
  border-radius: 50%;
  margin-bottom: 0.3vw;
  object-fit: cover;
`;

const NicknameBox = styled.div`
  width: 100%;
  text-align: center;
  font-size: 0.8vw;
  font-weight: 700;
  background-color: #EAE8DC
  color: #333;
  border-radius: 10px;
  padding: 0.2vw 0;
`;

const RightBox = styled.div`
  width:80%;
  height:100%;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ExplanationBox = styled.div`
  width: 95%;
  height: 70%;
  border-radius: 15px;
  border:none;
  margin-bottom: 20px;
  background-color:${({ bgColor }) => bgColor};
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
  width: ${({ width }) => width}%;
  transition: width 0.1s linear, background-color 0.3s ease;
  background-color: ${({ percentageLeft }) => 
    percentageLeft > 50 ? '#2B9FE6' :  // 파란 계열
    percentageLeft > 20 ? '#FFCD1C' :  // 노란 계열
    '#EF6125'  // 빨간 계열
  };
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


// 캐릭터에 따른 색상 설정
const characterColors = [
  "#EF6125", //E
  "#FFCD1C", //M
  "#14AE59", //O
  "#FEA1BD", //J
  "#2B9FE6", //I
  "#FFCD1C", //N
  "#7766C2", //U
  "#FEA1BD", //S
];

// Game 컴포넌트
const Game1 = ({ keyword, players, sessionId, currentPrompt, setCurrentPrompt, promptTimeLimit, totalPlayers, readyPlayers, submitPrompt, remainingTime}) => {
  const [isReady, setIsReady] = useState(false);
  const [percentageLeft, setPercentageLeft] = useState(100);

  useEffect(() => {
    setIsReady(false);
  }, [keyword])

  useEffect(() => {
    setPercentageLeft((remainingTime / promptTimeLimit) * 100);
  }, [keyword, promptTimeLimit, remainingTime]);

  useEffect(() => {
    const updateInterval = 50;
    const decrementPerInterval = (100 / promptTimeLimit) * (updateInterval / 1000);

    const timer = setInterval(() => {
      setPercentageLeft((prevPercentage) => {
        const newPercentage = prevPercentage - decrementPerInterval;
        return newPercentage > 0 ? newPercentage : 0;
      });
    }, updateInterval);

    return () => clearInterval(timer);
  }, [promptTimeLimit]);

  useEffect(() => {
    setPercentageLeft((remainingTime / promptTimeLimit) * 100);
  }, [remainingTime, promptTimeLimit]);

  const handleReadyClick = () => {
    submitPrompt(sessionId, currentPrompt);
    setIsReady(true);
    setCurrentPrompt('');
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

  // 현재 플레이어를 찾습니다.
  const player = players.find(p => p.id === localStorage.getItem('playerId'));
  // 현재 플레이어의 characterId에 맞는 색상을 설정합니다.
  const bgColor = player ? characterColors[player.characterId - 1] : '#FFFFFF'; 

  const charactersIdx = ["E", "M", "O", "J", "I", "N", "U", "S"];

  const maxPlayers = 5;
  const emptySlots = maxPlayers - totalPlayers;

  return (
      <>
      <TopicContainer>
        <TopicBoxStyled>
          <TopicBoxline bgColor={bgColor}>
            {keyword}
          </TopicBoxline>
        </TopicBoxStyled>
      </TopicContainer>
      <TotalBox>
        <LeftBox>
          {players.map((player, index) => (
            <PlayerBox key={`${player.id}-${index}`}>
              <ProfileContainer>
                <ProfileImage
                  src={`/room_${charactersIdx[player.characterId - 1]}프로필.svg`}
                  alt={`${player.nickname} Profile`}
                />
                <NicknameBox>
                  {player.nickname}
                </NicknameBox>
              </ProfileContainer>
            </PlayerBox>
          ))}
          {Array.from({ length: emptySlots }).map((_, index) => (
            <PlayerBox key={`empty-${index}`} />
          ))}
        </LeftBox>
        <RightBox>
          <ExplanationBox bgColor={bgColor}>
            <Explanationinput
              placeholder="키워드에 맞는 설명을 작성하세요..."
              value={isReady ? "제출 완료!!" : currentPrompt}
              onChange={(e) => setCurrentPrompt(e.target.value)}
              disabled={isReady}
            />
          </ExplanationBox>
          <ReadyButton onClick={handleReadyClick} isReady={isReady} disabled={isReady}>
            {isReady ? '완료!' : '준비'}
          </ReadyButton>
          <TimerBarContainer>
            <TimerBar width={percentageLeft} percentageLeft={percentageLeft} />
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
