import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BoingButton from './BoingButton';

const GameSettingsBox = styled.div`
  width: 100%;
  height: 52vh;
  background-color: #14AE59;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
`;

const TopBox = styled.div`
  width: 100%;
  height: 47%;
  background-color: #EAE8DC;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const SemiTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const TopInnerBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const VerticalDottedLine = styled.div`
  width: 5px;
  height: 80%;
  background: repeating-linear-gradient(
    to bottom,
    #FEA1BD,
    #FEA1BD 10px,
    transparent 10px,
    transparent 20px
  );
`;

const TimeBox = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TimeInnerBox = styled.div`
  width: 49%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimeDisplay = styled.div`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  color: #434040;
  width: 120px;
`;

const TimeButton = styled.button`
  font-size: 40px;
  font-weight: bold;
  background: none;
  border: none;
  color: #434040;
  cursor: pointer;
  
  &:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

const BottomBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 47%;
`;

const BottomBox = styled.div`
  width: 48%;
  height: 100%;
  background-color: #EAE8DC;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const DifficultyImage = styled(BoingButton).attrs({ isImageButton: true })`
  height: 65%;
  cursor: pointer;
  user-select: none;
  margin-top:10px;
`;

const TurnBox = styled.div`
  height: 65%;
  display: flex;
  align-items: center;
  text-align:center;
  justify-content: center;
  margin-top:10px;
`;

const TurnArrow = styled(BoingButton).attrs({ isImageButton: true })`
  width: 20%;
  cursor: pointer;
`;

const TurnNumber = styled.div`
  height: 100%;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;
  font-size: 80px;
  color:#434040;
  font-weight: bold;
  margin: 0 30px;
  box-sizing:border-box;
`;

const HelpButton = styled.button`
  position: absolute;
  top: 5%;
  right: 10px;
  background-color:#14AE59;
  padding: 4px 9px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 20px;
  font-weight:bold;
  color: #EAE8DC;
  z-index: 10;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

const ModalContainer = styled.div`
  position: relative;
  border-radius: 10px;
  height:80vmin;
  width:80vmin;
  max-width: 800px;
  text-align: center;
`

const ModalContent = styled.img`
  border-radius: 10px;
  height:100%;
  width:100%;
  max-width: 800px;
  text-align: center;
`;

const ModalExit = styled.img`
  position: absolute;
  top: 6%;
  right: 3%;
  background-color: transparent;
  border: none;
  width: 6%;
  cursor: pointer;
`;



const Setting = ({ isHost, gameState, handleUpdateGameSettings }) => {
  const [difficulty, setDifficulty] = useState(gameState.settings.difficulty || 'EASY');
  const [turns, setTurns] = useState(gameState.settings.turns || 1);
  const [promptTimeLimit, setPromptTimeLimit] = useState(gameState.settings.promptTimeLimit || 0);
  const [guessTimeLimit, setGuessTimeLimit] = useState(gameState.settings.guessTimeLimit || 0);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(function() {
    setDifficulty(gameState.settings.difficulty);
    setTurns(gameState.settings.turns);
    setPromptTimeLimit(gameState.settings.promptTimeLimit);
    setGuessTimeLimit(gameState.settings.guessTimeLimit);
    setTopic(gameState.settings.difficulty);
  }, [gameState]);

  const handleDifficultyClick = function(event) {
    if (!isHost) return;

    var clientY = event.clientY;
    var target = event.target;
    var top = target.getBoundingClientRect().top;
    var height = target.getBoundingClientRect().height;
    var clickPosition = clientY - top;
    var third = height / 3;

    var newDifficulty;
    if (clickPosition >= third * 2) {
      newDifficulty = 'EASY';
    } else if (clickPosition >= third) {
      newDifficulty = 'NORMAL';
    } else {
      newDifficulty = 'HARD';
    }
    setDifficulty(newDifficulty);
    handleSubmit({ difficulty: newDifficulty });
  };

  const handleDecrease = function() {
    if (isHost && turns > 1) {
      var newTurns = turns - 1;
      setTurns(newTurns);
      handleSubmit({ turns: newTurns });
    }
  };

  const handleIncrease = function() {
    if (isHost && turns < 5) {
      var newTurns = turns + 1;
      setTurns(newTurns);
      handleSubmit({ turns: newTurns });
    }
  };
  const handleTimeChange = (type, operation) => {
    if (!isHost) return;

    const updateLimit = (currentValue, operation) => {
      let newTime = operation === 'increase' ? currentValue + 5 : currentValue - 5;
      return Math.max(10, Math.min(120, newTime));
    };

    if (type === 'prompt') {
      const newPromptTime = updateLimit(promptTimeLimit, operation);
      setPromptTimeLimit(newPromptTime);
      handleSubmit({ promptTimeLimit: newPromptTime });
    } else {
      const newGuessTime = updateLimit(guessTimeLimit, operation);
      setGuessTimeLimit(newGuessTime);
      handleSubmit({ guessTimeLimit: newGuessTime });
    }
  };

  const handleSubmit = function(changedSettings) {
    if (isHost) {
      var settings = {
        promptTimeLimit: promptTimeLimit,
        guessTimeLimit: guessTimeLimit,
        difficulty: difficulty,
        turns: turns,
      };

      Object.assign(settings, changedSettings || {});
      handleUpdateGameSettings(settings);
    }
  };

  const handleHelpClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <GameSettingsBox>
      <TopBox>
        <Title>제한 시간</Title>
        <TopInnerBox>
          <TimeBox>
            <SemiTitle>프롬프트 입력 시간</SemiTitle>
            <TimeInnerBox>
            {isHost && (
              <TimeButton 
                onClick={() => handleTimeChange('prompt', 'decrease')}
                disabled={promptTimeLimit <= 10}
              >
                -
              </TimeButton>
            )}
            <TimeDisplay>{promptTimeLimit}초</TimeDisplay>
            {isHost && (
              <TimeButton 
                onClick={() => handleTimeChange('prompt', 'increase')}
                disabled={promptTimeLimit >= 120}
              >
                +
              </TimeButton>
            )}
            </TimeInnerBox>
          </TimeBox>
          <VerticalDottedLine />
          <TimeBox>
            <SemiTitle>정답 입력 시간</SemiTitle>
            <TimeInnerBox>
            {isHost && (
              <TimeButton 
                onClick={() => handleTimeChange('guess', 'decrease')}
                disabled={guessTimeLimit <= 10}
              >
                -
              </TimeButton>
            )}
            <TimeDisplay>{guessTimeLimit}초</TimeDisplay>
            {isHost && (
              <TimeButton 
                onClick={() => handleTimeChange('guess', 'increase')}
                disabled={guessTimeLimit >= 120}
              >
                +
              </TimeButton>
            )}
            </TimeInnerBox>
          </TimeBox>
        </TopInnerBox>
      </TopBox>
      <BottomBoxes>  
        <BottomBox>
          <Title>난이도</Title>
          <HelpButton onClick={handleHelpClick}>?</HelpButton>
          <DifficultyImage
            as="img"
            src={"/room_난이도" + difficulty + ".svg"}
            alt="Difficulty"
            onClick={handleDifficultyClick}
          />
        </BottomBox>
        <BottomBox>
          <Title>턴 수</Title>
          <TurnBox>
          {isHost && (
            <TurnArrow 
              as="img"
              src="/room_턴왼화살표.svg" 
              alt="Decrease Turns" 
              onClick={handleDecrease} 
            />
          )}
          <TurnNumber>{turns}</TurnNumber>
          {isHost && (
            <TurnArrow
              as="img" 
              src="/room_턴오화살표.svg" 
              alt="Increase Turns" 
              onClick={handleIncrease} 
            />
          )}
          </TurnBox>
        </BottomBox>
      </BottomBoxes>
      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContainer>
            <ModalExit src="/room_난이도설명창닫기.svg" alt="닫기" onClick={handleCloseModal}/>
            <ModalContent src="/room_난이도설명창.svg" alt="난이도설명창"/>
          </ModalContainer>
        </ModalOverlay>
      )}
    </GameSettingsBox>
  );
};

export default Setting;
