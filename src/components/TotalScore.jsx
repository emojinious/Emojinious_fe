import React from "react";
import styled from "styled-components";
import WinnerCard from "./WinnerCard";

const TotalScore = ({ players }) => {
  return (
    <>
      <h3>Game Finished</h3>
      <WinnerCard
        players={players}
      />
    </>
  );
};

export default TotalScore;
