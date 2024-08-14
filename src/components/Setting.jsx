import React, { useState } from 'react';
import styled from 'styled-components';

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

const TimeInput = styled.input`
  width: 90%;
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

const DifficultyImage = styled.img`
  width: 50%;
  cursor: pointer;
  user-select: none;
  background-color:black;
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

  return (
    <GameSettingsBox>
      <TopBox>
        <Title>제한 시간</Title>
        <TopInnerBox>
          <TimeBox>
            <SemiTitle>프롬프트 입력 시간</SemiTitle>
            <TimeInput type="text" placeholder="00:00" />
          </TimeBox>
          <VerticalDottedLine />
          <TimeBox>
            <SemiTitle>정답 입력 시간</SemiTitle>
            <TimeInput type="text" placeholder="00:00" />
          </TimeBox>
        </TopInnerBox>
      </TopBox>
      <BottomBoxes>
        <BottomBox>
          <Title>난이도</Title>
          <DifficultyImage
            src={getDifficultyImage()}
            alt="Difficulty"
            onClick={handleDifficultyClick}
          />
        </BottomBox>
        <BottomBox>
          <Title>턴 수</Title>

        </BottomBox>
      </BottomBoxes>
    </GameSettingsBox>
  );
};

export default Setting;
