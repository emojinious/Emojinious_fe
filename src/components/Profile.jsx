import React, { useState } from 'react';
import styled from 'styled-components';

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
  height: 80%;
  border-radius: 50%;
  margin-right: 20px;
`;

const NicknameBox = styled.div`
  width:50%;
  height:70%;
  display:flex;
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
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
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

const characterColors = {
  E: '#EF6125',
  M: '#FFCD1C',
  O: '#14AE59',
  J: '#FEA1BD',
  I: '#2B9FE6',
  N: '#FFCD1C',
  U: '#7766C2',
  S: '#FEA1BD',
};

const emojis = [
  '😆', '😁', '😄', '😃', '😀', '😊', '😉', '😍', '😘', '😚', 
  '😜', '😝', '😛', '😎', '😏', '😒', '😞', '😔', '😟', '😕', 
  '😖', '😢', '😭', '😩', '😫', '😤', '😠', '😡', '😌', '😴'
];

const PlayerProfile = ({ character, nickname }) => {
  const [isEmojiVisible, setEmojiVisible] = useState(false);
  
  const toggleEmojiContainer = () => {
    setEmojiVisible(!isEmojiVisible);
  };

  const handleEmojiClick = (emoji) => {
    alert(`You selected: ${emoji}`);
    setEmojiVisible(false);
  };

  const profileImgSrc = `/room_${character}프로필.svg`;
  const chatImgSrc = `/room_${character}채팅.svg`;
  const bgColor = characterColors[character] || '#ccc'; // 기본 색상 지정

  return (
    <ProfileContainer>
      <ProfileImage src={profileImgSrc} alt={`${character} Profile`} />
      <NicknameBox bgColor={bgColor}>{nickname}</NicknameBox>
      <ChatButton 
        src={chatImgSrc} 
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
  );
};

export default PlayerProfile;
