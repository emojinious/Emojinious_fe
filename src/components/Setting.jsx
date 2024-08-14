import React, { useState } from 'react';
import styled from 'styled-components';
import BoingButton from './BoingButton';

const GameSettingsBox = styled.div`
  width: 100%;
  height: 50vh;
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

const Setting = () => {
  const [difficulty, setDifficulty] = useState('하');

  const handleDifficultyClick = (event) => {
    const { clientY, target } = event;
    const { top, height } = target.getBoundingClientRect();
    const clickPosition = clientY - top;
    const third = height / 3;

    if (clickPosition >= third * 2) {
      setDifficulty('하');
    } else if (clickPosition >= third) {
      setDifficulty('중');
    } else {
      setDifficulty('상');
    }
  };

  const getDifficultyImage = () => {
    switch (difficulty) {
      case '상':
        return '/room_난이도상.svg';
      case '중':
        return '/room_난이도중.svg';
      default:
        return '/room_난이도하.svg';
    }
  };

  const [turns, setTurns] = useState(1);

  const handleDecrease = () => {
    if (turns > 1) setTurns(turns - 1);
  };

  const handleIncrease = () => {
    if (turns < 5) setTurns(turns + 1);
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
              <TimeInputSec type="text" placeholder="00" />
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
              <TimeInputSec type="text" placeholder="00" />
            </TimeInnerBox>
          </TimeBox>
        </TopInnerBox>
      </TopBox>
      <BottomBoxes>  
        <BottomBox>
          <Title>난이도</Title>
          <DifficultyImage
            as="img"
            src={getDifficultyImage()}
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
