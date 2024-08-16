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

const TimeInputMin = styled.input`
  width: 43%;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background: none;
  color: #939393;
  padding: 5px;
  box-sizing: border-box;

`;

const TimeInputmiddle = styled.div`
  width: 7%;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  align-items: center;
  border:none;
  color: #939393;
  box-sizing:border;

`

const TimeInputSec = styled.input`
  width: 43%;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  background: none;
  color: #939393;
  padding: 5px;
  box-sizing: border-box;
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
  display: flex;
  align-items: center;
  text-align:center;
  font-size: 80px;
  color:#434040;
  font-weight: bold;
  margin: 0 30px;
  padding-bottom: 20px;
  box-sizing:border-box;
`;

const Setting = ({ isHost, gameState, handleUpdateGameSettings }) => {
  const [difficulty, setDifficulty] = useState(gameState.settings.difficulty || 'EASY');
  const [turns, setTurns] = useState(gameState.settings.turns || 1);
  const [promptTimeLimit, setPromptTimeLimit] = useState(gameState.settings.promptTimeLimit || 0);
  const [guessTimeLimit, setGuessTimeLimit] = useState(gameState.settings.guessTimeLimit || 0);
  const [theme, setTheme] = useState(gameState.settings.theme || '');

  useEffect(function() {
    setDifficulty(gameState.settings.difficulty);
    setTurns(gameState.settings.turns);
    setPromptTimeLimit(gameState.settings.promptTimeLimit);
    setGuessTimeLimit(gameState.settings.guessTimeLimit);
    setTheme(gameState.settings.theme);
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

  const handleTimeChange = function(type, value) {
    if (!isHost) return;
    
    var newTime = parseInt(value, 10) || 0;
    
    if (type === 'prompt') {
      setPromptTimeLimit(newTime);
      handleSubmit({ promptTimeLimit: newTime });
    } else {
      setGuessTimeLimit(newTime);
      handleSubmit({ guessTimeLimit: newTime });
    }
  };

  const handleSubmit = function(changedSettings) {
    if (isHost) {
      var settings = {
        promptTimeLimit: promptTimeLimit,
        guessTimeLimit: guessTimeLimit,
        difficulty: difficulty,
        turns: turns,
        theme: theme
      };

      Object.assign(settings, changedSettings || {});
      handleUpdateGameSettings(settings);
    }
  };

  return (
    <GameSettingsBox>
      <TopBox>
        <Title>제한 시간</Title>
        <TopInnerBox>
          <TimeBox>
            <SemiTitle>프롬프트 입력 시간</SemiTitle>
            <TimeInnerBox>
              <TimeInputMin type="text" placeholder="00" />
               <TimeInputmiddle>
                :
               </TimeInputmiddle>
              <TimeInputSec 
              type="number" 
              value={promptTimeLimit}
              onChange={(e) => handleTimeChange('prompt', e.target.value)}
              placeholder="00" />
            </TimeInnerBox>
          </TimeBox>
          <VerticalDottedLine />
          <TimeBox>
            <SemiTitle>정답 입력 시간</SemiTitle>
            <TimeInnerBox>
            <TimeInputMin type="text" placeholder="00" />
               <TimeInputmiddle>
                :
               </TimeInputmiddle>
              <TimeInputSec 
              type="number" 
              value={promptTimeLimit}
              onChange={(e) => handleTimeChange('guess', e.target.value)}
              placeholder="00" />
            </TimeInnerBox>
          </TimeBox>
        </TopInnerBox>
      </TopBox>
      <BottomBoxes>  
        <BottomBox>
          <Title>난이도</Title>
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
            <TurnArrow 
              as="img"
              src="/room_턴왼화살표.svg" 
              alt="Decrease Turns" 
              onClick={handleDecrease} 
            />
            <TurnNumber>{turns}</TurnNumber>
            <TurnArrow
              as="img" 
              src="/room_턴오화살표.svg" 
              alt="Increase Turns" 
              onClick={handleIncrease} 
            />
          </TurnBox>
        </BottomBox>
      </BottomBoxes>
    </GameSettingsBox>
  );
};

export default Setting;
