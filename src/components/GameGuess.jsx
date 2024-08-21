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
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
`

const RightInner = styled.div`
  width: 95%;
  height: 90%;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`

const Sketchbook = styled.div`
  width: 65%;
  height: 100%;
  display:flex;
  justify-content:center;
  background-color:#EAE7DC;
  position: relative;
  border-radius: 15px;
`

const SketchbookSpring= styled.img`
  width: 90%;
  height: auto;
  background:none;
  position:absolute;
  top:-5%;
`
const ExplanationContainer = styled.div`
  width: 43%;
  height: 100%;
  display:flex;
  flex-direction:column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`
const ExplanationBox = styled.div`
  width: 95%;
  height:65%;
  background-color: ${({ lineColor }) => lineColor || 'black'};
  border-radius: 15px;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position: relative;
`

const ExplanationImg = styled.img`
  width: 90%;
  height: 90%;

  border-radius: 15px;
  border:none;
  margin-bottom: 20px;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  position:absolute;
  top:4%;
`;

const Explanationinput = styled.textarea`
  width: 80%;
  height: 20%;
  padding: 15px;
  font-size: 18px;
  border-radius: 15px;
  background-color:blue;
  border:none;
  resize: none;
  outline: none; 
  position: absolute;
  top:13%;
`;

const ReadyButton = styled.button`
  width: 95%;
  height: 25%;
  padding: 10px 25px;
  font-size: 24px;
  font-weight: bold;
  background-color: #FFCD1C;
  color: #7766C2;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #E6B517;
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
const GameGuess = () => {
  const lineColor = characterColors[0]; // [0] <=> [player.characterId - 1]

  return (
    <>
    <TopicContainer>
        <TopicBoxStyled>
          <TopicBoxline>
            키워드
          </TopicBoxline>
        </TopicBoxStyled>
      </TopicContainer>
      <TotalBox>
        <LeftBox>
          <UserProfile/>
        </LeftBox>
        <RightBox>
          <RightInner>
            <Sketchbook>
              <SketchbookSpring src="game_스프링.png" alt="스케치북스프링"/>
            </Sketchbook>
            <ExplanationContainer>
              <ExplanationBox lineColor={lineColor}>
                <ExplanationImg src="/game_E말풍선.png" alt="player 말풍선"/>
                <Explanationinput placeholder="키워드에 맞는 설명을 작성하세요..."
              />
              </ExplanationBox>
            <ReadyButton>준비</ReadyButton>
              </ExplanationContainer>
          </RightInner>
          <TimerBarContainer>
            <TimerBar />
          </TimerBarContainer>
        </RightBox>
      </TotalBox>
      <ReadyPlayersContainer>
        <ReadyPlayerIcon src="/game_플레이어준비완료.svg"/>
        <ReadyPlayerIcon src="/game_플레이어준비중.svg"/>
        <ReadyPlayerIcon src="/game_플레이어준비중.svg"/>
        <ReadyPlayerIcon src="/game_플레이어준비중.svg"/>
        <ReadyPlayerIcon src="/game_플레이어준비중.svg"/>
      </ReadyPlayersContainer>
    </>
  );
};

export default GameGuess;
