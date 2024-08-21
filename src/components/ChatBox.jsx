import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import BoingButton from './BoingButton';


const ChatContainer = styled.div`
  width: 100%;
  height: 52vh;
  background-color: #FEA1BD;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
  padding: 20px;
  box-sizing: border-box;
`;

const Box = styled.div`
  width: 100%;
  height: 100%;
  background-color: #EAE8DC;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items:center;
`
const Chatbox = styled.div`
  width: 100%;
  height: 80%;
  background-color: #EAE8DC;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  flex-direction: column;
  overflow-Y: auto;
  &::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
  }
  -ms-overflow-style: none;  /* for Internet Explorer and Edge */
  scrollbar-width: none; /* for Firefox */
  color:black;
`;

const InputBox = styled.form`
  width:100%;
  height: 10%;
  display:flex;
  justify-content: space-around;
  background-color: #EAE8DC;
  margin-bottom:2%;
`
const Chat = styled.input`
  width:80%;
  height:95%;
  background-color: #EAE8DC;
  border:none;
  padding:0 20px;
  margin-left: 3%;
`

const ChatButton = styled(BoingButton).attrs({ isImageButton: true })`
  width: 20%;
  height: 95%
  aspect-ratio: 1 / 1;
  background-image: url('/room_채팅버튼.svg');
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-color: transparent;
  cursor: pointer;
  border: none;
  margin-right: 3%;

  &:active {
    background-image: url('/room_채팅버튼눌림.svg');
  }
`

// 캐릭터에 따른 닉네임 색상 설정
const nicknameColors = [
  "#EF6125", //E
  "#FFCD1C", //M
  "#14AE59", //O
  "#FEA1BD", //J
  "#2B9FE6", //I
  "#FFCD1C", //N
  "#7766C2", //U
  "#FEA1BD", //S
];

const Divider = styled.div`
  width: 92%;
  height: 5px;
  background: repeating-linear-gradient(
    to right,
    #14AE59,
    #14AE59 10px,
    transparent 10px,
    transparent 20px
  );
  background-color: #EAE8DC;
`;

const ChatBox = ({ players, messages, onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');
  const chatboxRef = useRef(null);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  useEffect(() => {
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight; // 자동 스크롤
    }
  }, [messages]);

  return (
    <>
        <ChatContainer>
        <Box>
        <Chatbox ref={chatboxRef}>
        {messages.map((msg, index) => {
          const player = players.find(p => p.nickname === msg.sender);
          const color = player ? nicknameColors[player.characterId-1] : 'black';

          return (
            <p key={index} style={{padding:'0 20px'}}>
              <strong style={{ color }}>
                {msg.sender}
              </strong>{' '}:
              {msg.content}
            </p>
          );
        })}
        </Chatbox>
        <Divider />
        <InputBox onSubmit={handleSendMessage}>
          <Chat
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="채팅 입력..."
            />
          <ChatButton type="submit"/>
        </InputBox>
        </Box>
      </ChatContainer>
    </>
  );
};

export default ChatBox;
