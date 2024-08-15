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

const ProfileImage = styled.img`
  width: auto;
  height: 100%;
  border-radius: 50%;
  margin-right: 20px;
`;

const NicknameBox = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  background-color: ${({ bgColor }) => bgColor};
  color: #333;
  border-radius: 10px;
`;

const ChatButton = styled.img`
  width: 20%;
  height: 100%;
  cursor: pointer;
`;

const EmojiContainer = styled.div`
  position: absolute;
  bottom: 50px;
  right: 10px;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 5px;
  z-index: 10;
`;

const Emoji = styled.span`
  font-size: 24px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
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

const emojis = [
  "😆",
  "😁",
  "😄",
  "😃",
  "😀",
  "😊",
  "😉",
  "😍",
  "😘",
  "😚",
  "😜",
  "😝",
  "😛",
  "😎",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "😖",
  "😢",
  "😭",
  "😩",
  "😫",
  "😤",
  "😠",
  "😡",
  "😌",
  "😴",
];

const PlayerBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: center;
`;

const PlayerListBox = styled.div`
  width: 49%;
  height: 60vh;
  background-color: #eae8dc;
  border-radius: 20px;
`;

const charactersIdx = ["E", "M", "O", "J", "I", "N", "U", "S"];

const PlayerProfile = ({ players }) => {
  const [isEmojiVisible, setEmojiVisible] = useState(false);

  const toggleEmojiContainer = () => {
    setEmojiVisible(!isEmojiVisible);
  };

  const handleEmojiClick = (emoji) => {
    alert(`You selected: ${emoji}`);
    setEmojiVisible(false);
  };

  return (
    <PlayerListBox>
      {players.map((player) => (
        <PlayerBox>
          <ProfileContainer key={player.id}>
            <ProfileImage
              src={`/room_${charactersIdx[player.characterId - 1]}프로필.svg`}
              alt={`${player.nickname} Profile`}
            />
            <NicknameBox bgColor={characterColors[player.characterId - 1]}>
              {player.nickname} {player.isHost && "(Host)"}
            </NicknameBox>
            <ChatButton
              src={`/room_${charactersIdx[player.characterId - 1]}채팅.svg`}
              alt="Chat Button"
              onClick={toggleEmojiContainer}
            />
            <EmojiContainer visible={isEmojiVisible}>
              {emojis.map((emoji, index) => (
                <Emoji key={index} onClick={() => handleEmojiClick(emoji)}>
                  {emoji}
                </Emoji>
              ))}
            </EmojiContainer>
          </ProfileContainer>
        </PlayerBox>
      ))}
    </PlayerListBox>
  );
};

export default PlayerProfile;
