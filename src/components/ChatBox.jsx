import React, { useState } from 'react';
import styled from 'styled-components';


const ChatContainer = styled.div`
  width: 100%;
  height: 52vh;
  background-color: #FEA1BD;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
`;

const Chatbox = styled.div`
  width: 100%;
  height: 90%;
  background-color: #EAE8DC;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  flex-direction: column;
  overflow-Y: scroll;
  color:black;
  padding: 
`;

const InputBox = styled.form`
  width:100%;
  height: 10%;
  display:flex;
  justify-content: space-between;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #EAE8DC;
`
const Chat = styled.input`
  width:84%;
  height:95%;
  border-bottom-left-radius: 10px;
  background-color: #EAE8DC;
  border:none;
  padding:0 20px;
`

const ChatButton = styled.button`
  width:10%;
  height:100%;
  border-radius: 10px;
  background-color: #EAE8DC;
  background-image: url('/room_채팅버튼.svg');
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  border:none;

  &:active{
    background-color:#E1DFD0;
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

const ChatBox = ({ players, messages, onSendMessage }) => {
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      onSendMessage(inputMessage);
      setInputMessage('');
    }
  };

  return (
    <>
        <ChatContainer>
        <Chatbox>
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
        <InputBox onSubmit={handleSendMessage}>
          <Chat
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="채팅 입력..."
            />
          <ChatButton type="submit"/>
        </InputBox>
      </ChatContainer>
    </>
  );
};

export default ChatBox;
