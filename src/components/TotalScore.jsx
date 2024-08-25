import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #434040;
  color: white;
  text-align: center;
`;

const WinnerCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  position:relative;
  width:20vw;
  height:75vh;
`;

const WinnerImage = styled.img`
  width: 100%;
  height: auto;
`;

const WinnerName = styled.h2`
  font-size: 32px;
  font-weight: bold;
  top: 20%;
  color: #ffcd1c;
  position:absolute;
`;

const WinnerScore = styled.p`
  font-size: 24px;
  color: #ffffff;
  position:absolute;
`;

const TotalScore = ({ players }) => {
  const winner = players.reduce((prev, current) =>
    prev.score > current.score ? prev : current
  );

  const charactersIdx = ["E", "M", "O", "J", "I", "N", "U", "S"];

  return (
    <Container>
      <h3>Game Finished</h3>
      <WinnerCard>
        <WinnerImage
          src={`/game_${charactersIdx[winner.characterId - 1]}우승.svg`}
          alt={`${winner.nickname} 우승`}
        />
        <WinnerName>{winner.nickname}</WinnerName>
        <WinnerScore>Score: {winner.score}</WinnerScore>
      </WinnerCard>
    </Container>
  );
};

export default TotalScore;
