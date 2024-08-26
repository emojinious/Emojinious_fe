import React from "react";
import styled from "styled-components";
import WinnerCard from "./WinnerCard";


const TotalScore = ({ gameResult }) => {
  if (!gameResult) return <div>Loading results...</div>;

  const sortedPlayers = Object.values(gameResult.turnResult).sort((a, b) => b.score - a.score);
  const winner = sortedPlayers[0];

  return (
    <>
      <WinnerCard players={[winner]} />
    </>
  );
};

export default TotalScore;