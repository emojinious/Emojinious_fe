import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GameAnswer_Profile from './GameAnswer_Profile';

const NickContainer = styled.div`
  width:100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const NickBoxStyled = styled.div`
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

const NickBoxline = styled.div`
  width:95%;
  height:70%;
  background: none;
  border-radius: 10px;
  border: 4px solid ${({ lineColor }) => lineColor || 'black'};
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
  width: 45%;
  height: 100%;
  background:none;
  border-radius: 15px;
  border:none;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
`

const ExplanationBox = styled.div`
  width: 95%;
  height: 78%;
  border-radius: 15px;
  border:none;
  margin-bottom: 20px;
  background-color:${({ lineColor }) => lineColor || 'black'};
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const Explanationinput = styled.img`
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

const TopicBoxStyled = styled.div`
  width: 95%;
  height: 20%;
  background-color: #EAE8DC;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

const TopicBoxline = styled.div`
  width:95%;
  height:70%;
  background: none;
  border-radius: 10px;
  border: 4px solid ${({ lineColor }) => lineColor || 'black'};
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
const Game3 = ({gamestate}) => {
  const lineColor = characterColors[0]; // [0] <=> [player.characterId - 1]

  return (
    <>
    <NickContainer>
      <NickBoxStyled>
        <NickBoxline lineColor={lineColor}>
        </NickBoxline>
      </NickBoxStyled>
    </NickContainer>
      <TotalBox>
        <LeftBox>
          <ExplanationBox lineColor={lineColor}>
            <Explanationinput placeholder="키워드에 맞는 설명을 작성하세요..."
            />
          </ExplanationBox>
          <TopicBoxStyled>
            <TopicBoxline lineColor={lineColor}>
            </TopicBoxline>
          </TopicBoxStyled>
        </LeftBox>
        <GameAnswer_Profile/>
      </TotalBox>
    </>
  );
};

export default Game3;
