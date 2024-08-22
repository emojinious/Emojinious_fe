import React, { useState } from "react";
import styled from "styled-components";

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

const ProfileBox = styled.div`
  width: 15%;
  height: 100%;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-between;
`;

const ProfileImage = styled.img`
  width: auto;
  height: 75%;
  border-radius: 50%;
`;

const ProfileNick = styled.div`
  width: auto;
  height: 20%;
  font-size: 15px;
  font-weight: bold;
`

const TopicBox = styled.div`
  width: 50%;
  height: 70%;
  display: flex;
  left:20%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: ${({ bgColor }) => bgColor};
  color: #333;
  border-radius: 30px;
  overflow:hidden;
`;

const ScoreBox = styled.div`
  width: 25%;
  height: 70%;
  display: flex;
  left:20%;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  background-color: #434040;
  margin-left: 20px;
  color: #EAE8DC;
  border-radius: 30px;
  overflow:hidden;
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

const PlayerBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;

const PlayerListBox = styled.div`
  width: 55%;
  height: 60vh;
  display:flex;
  flex-direction:column;
  background-color: #eae8dc;
  border-radius: 20px;
  padding: 10px 0;
`;

const charactersIdx = ["E", "M", "O", "J", "I", "N", "U", "S"];


const GameAnswer_Profile = ({ player }) => {
  {/*
  return (
    <PlayerListBox>
    {players.map((player, index) => (
      <PlayerBox key={`${player.id}-${index}`}>
       <ProfileContainer>
        <ProfileBox>
          <ProfileImage
            src={`/room_${charactersIdx[0]}프로필.svg`}
            alt={`${player.nickname} Profile`}
          />
          <ProfileNick>
            {player.nickname}
          </ProfileNick>
        </ProfileBox>
        <TopicBox bgColor={characterColors[0]}>
          유저별 주제
        </TopicBox>
        <ScoreBox>
          8.5
        </ScoreBox>
      </ProfileContainer>
    </PlayerBox>
    ))}
    </PlayerListBox>
  );
  */}
  return (
    <PlayerListBox>
      <PlayerBox>
        <ProfileContainer>
          <ProfileBox>
            <ProfileImage
            src={`/room_${charactersIdx[0]}프로필.svg`}
            alt="E Profile"
            />
            <ProfileNick>
              닉네임
            </ProfileNick>
          </ProfileBox>
          <TopicBox bgColor={characterColors[0]}>
            유저별 주제
          </TopicBox>
          <ScoreBox>
            8.5
          </ScoreBox>
        </ProfileContainer>
      </PlayerBox>
    </PlayerListBox>
  );
};

export default GameAnswer_Profile;