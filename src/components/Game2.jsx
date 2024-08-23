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
`

const LeftBox = styled.div`
  width: 80%;
  height: 100%;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
`

const ImageBox = styled.div`
  width: 80vmin;
  height: 80vmin;
  border-radius: 15px;
  border: none;
  margin-bottom: 20px;
  background-color: ${({ bgColor }) => bgColor};
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const ImageInput = styled.div`
  width: 85%;
  height: 85%;
  padding: 15px;
  margin: 25px;
  font-size: 18px;
  border-radius: 15px;
  background-color:#EAE8DC;
  border:none;
  resize: none;
  outline: none; 
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
const Game2 = ({ keyword, currentImage, players }) => {
  // 현재 플레이어를 찾습니다.
  const player = players.find(p => p.id === localStorage.getItem('playerId'));
  // 현재 플레이어의 characterId에 맞는 색상을 설정합니다.
  const bgColor = player ? characterColors[player.characterId - 1] : '#FFFFFF'; 

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
          <ImageBox bgColor={bgColor}>
            <ImageInput>
              <img src={currentImage} alt="Generated" style={{maxWidth: '80%'}} />
            </ImageInput>
          </ImageBox>
        </LeftBox>
      </TotalBox>
    </>
  );
};

export default Game2;
