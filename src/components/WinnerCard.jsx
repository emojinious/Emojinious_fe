import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  border-radius:15px;
  width:20vw;
  height:70%;
  overflow:hidden;
`;

const Firstdiv = styled.div`
  width:70%;
  height:20%;
  display:flex;
  justify-content:center;
  padding-top:15px;
`

const Star = styled.img`
  height:100%;
`

const WinnerImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 20px;
  margin-bottom: -30px;
`;

const WinnerName = styled.div`
  font-size: 32px;
  font-weight: bold;
  color: ${({ bgColor }) => bgColor};
  background-color:#EAE8DC;
  border-radius: 14px;
  border: 2px solid ${({ bgColor }) => bgColor};
  width:92%;
  height:80%;
  overflow:hidden;
  display:flex;
  justify-content:center;
  text-align:center;
  align-items:center;
`;

const Winnerback = styled.div`
  background-color:#EAE8DC;
  border-radius:15px;
  width:65%;
  height:70px;
  overflow:hidden;
  display:flex;
  justify-content:center;
  text-align:center;
  align-items:center;
`

const ScoreContainer = styled.div`
  width:65%;
  position:relative;
  height:20%;
  min-height: 90px;
  display:flex;
  justify-content:center;
  text-align:center;
  align-items:center;
`

const SketchbookSpring = styled.img`
  width: 80%;
  background: none;
  position: absolute;
  top: 0%;
  z-index:2;
`;

const WinnerScore = styled.div`
  font-size: 30px;
  font-weight: bold;
  color: #434040 ;
  background-color:#EAE8DC;
  border-radius:15px;
  width:100%;
  height:80%;
  display:flex;
  justify-content:center;
  text-align:center;
  align-items:center;
  position: absolute;
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

const charactersIdx = ["E", "M", "O", "J", "I", "N", "U", "S"];

const WinnerCard= ({ players }) => {
  const winner = players.reduce((prev, current) =>
    prev.score > current.score ? prev : current
  );

  const bgColor = characterColors[winner.characterId - 1];
  const winnerCharacter = charactersIdx[winner.characterId - 1];

  return (
      <Card bgColor={bgColor}>
        <Firstdiv>
          <Star src={`/game_${winnerCharacter}우승별숫자.svg`}/>
        </Firstdiv>
        <Winnerback>
          <WinnerName bgColor={bgColor}>{winner.nickname}</WinnerName>
        </Winnerback>
        <WinnerImage
          src={`/game_${winnerCharacter}우승.svg`}
          alt={`${winner.nickname} 우승`}
        />
        <ScoreContainer>
          <SketchbookSpring src="/game_우승스코어스케치북스프링.svg" alt="스케치북스프링" />
          <WinnerScore>
            {winner.score}점
          </WinnerScore>
        </ScoreContainer>
      </Card>
  );
};

export default WinnerCard;
