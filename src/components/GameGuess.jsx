import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TopicContainer = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const TopicBoxStyled = styled.div`
  width: 30%;
  height: 80px;
  background-color: #eae8dc;
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
  width: 95%;
  height: 70%;
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
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 40px;
`;

const LeftBox = styled.div`
  width: 10%;
  height: 100%;
  background-color: #eae8dc;
  border-radius: 15px;
  border: none;
  display: flex;
  flex-direction: column;
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
`;

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
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
`;

const RightInner = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const Sketchbook = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-color: #eae7dc;
  position: relative;
  border-radius: 15px;
`;

const SketchbookSpring = styled.img`
  width: 90%;
  height: 12%;
  background: none;
  position: absolute;
  top: -5%;
`;
const ExplanationContainer = styled.div`
  width: 43%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;
const ExplanationBox = styled.div`
  width: 22vw;
  height: 17vw;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 15px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
  aspect-ratio: 1 / 1;
`;

const ExplanationImg = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 15px;
  border: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: absolute;
  top: 4%;
`;

const Explanationinput = styled.textarea`
  width: 75%;
  height: 20%;
  padding: 15px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 15px;
  background: none;
  color: #EAE7DC;
  border: none;
  resize: none;
  outline: none;
  position: absolute;
  top: 12%;
  overflow: hidden;
`;

const ReadyButton = styled.button`
  width: 97%;
  height: 32%;
  padding: 10px 25px;
  font-size: 24px;
  font-weight: bold;
  background-color: ${(props) => (props.isReady ? "#14AE59" : "#FFCD1C")};
  color: ${(props) => (props.isReady ? "#FFFFFF" : "#7766C2")};
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.isReady ? "#14AE59" : "#E6B517")};
  }
`;

const TimerBarContainer = styled.div`
  width: 95%;
  height: 25px;
  border-radius: 15px;
  overflow: hidden;
  background-color: #eae8dc;
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
  width: 63%;
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
const GameGuess = ({
  sessionId,
  currentImage,
  currentGuess,
  setCurrentGuess,
  players,
  totalPlayers,
  readyPlayers,
  promptTimeLimit,
  submitGuess,
  remainingTime  // Current remaining time from server
}) => {
  const [isReady, setIsReady] = useState(false);
  const [statusIcons, setStatusIcons] = useState([]);
  const [percentageLeft, setPercentageLeft] = useState(100);

  useEffect(() => {
    setIsReady(false);
    setPercentageLeft((remainingTime / promptTimeLimit) * 100);
  }, [currentImage, remainingTime, promptTimeLimit]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercentageLeft((prevPercentage) => {
        const newPercentage = prevPercentage - (100 / promptTimeLimit);
        return newPercentage > 0 ? newPercentage : 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [promptTimeLimit]);

  useEffect(() => {
    const newStatusIcons = Array(totalPlayers).fill(
      <ReadyPlayerIcon src="/game_플레이어준비중.svg" alt="Not Ready" />
    );
    
    for (let i = 0; i < readyPlayers; i++) {
      newStatusIcons[i] = <ReadyPlayerIcon src="/game_플레이어준비완료.svg" alt="Ready" />;
    }
    
    setStatusIcons(newStatusIcons);
  }, [totalPlayers, readyPlayers]);

  const handleReadyClick = () => {
    submitGuess(sessionId, currentGuess);
    setIsReady(true);
    setCurrentGuess("");
  };

  const player = players.find((p) => p.id === localStorage.getItem("playerId"));
  const bgColor = player ? characterColors[player.characterId - 1] : "#FFFFFF";
  const charactersIdx = ["E", "M", "O", "J", "I", "N", "U", "S"];
  const maxPlayers = 5;
  const emptySlots = maxPlayers - totalPlayers;
  const playerCharacter = player ? charactersIdx[player.characterId - 1] : "E";

  return (
    <>
      <TopicContainer>
        <TopicBoxStyled>
          <TopicBoxline bgColor={bgColor}>맞춰주세요!</TopicBoxline>
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
                <NicknameBox>{player.nickname}</NicknameBox>
              </ProfileContainer>
            </PlayerBox>
          ))}
          {Array.from({ length: emptySlots }).map((_, index) => (
            <PlayerBox key={`empty-${index}`} />
          ))}
        </LeftBox>
        <RightBox>
          <RightInner>
            <Sketchbook>
              <SketchbookSpring src="/game_스프링.png" alt="스케치북스프링" />
              <img src={currentImage} alt="Generated" style={{ maxWidth: "70%" }} />
            </Sketchbook>
            <ExplanationContainer>
              <ExplanationBox bgColor={bgColor}>
                <ExplanationImg src={`/game_${playerCharacter}말풍선.svg`} alt="player 말풍선" />
                <Explanationinput
                  placeholder="정답 맞추기..."
                  value={isReady ? "제출 완료!!!" : currentGuess}
                  onChange={(e) => setCurrentGuess(e.target.value)}
                  disabled={isReady}
                />
              </ExplanationBox>
              <ReadyButton onClick={handleReadyClick} isReady={isReady} disabled={isReady}>
                {isReady ? "다른 사람 기다리는 중...." : "이거다!"}
              </ReadyButton>
            </ExplanationContainer>
          </RightInner>
          <TimerBarContainer>
            <TimerBar width={percentageLeft} percentageLeft={percentageLeft} />
          </TimerBarContainer>
        </RightBox>
      </TotalBox>
      <ReadyPlayersContainer>{statusIcons}</ReadyPlayersContainer>
    </>
  );
};

export default GameGuess;