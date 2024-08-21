import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const TopicBoxline = styled.input`
  width:95%;
  height:70%;
  background: none;
  border-radius: 10px;
  border: 4px solid #2B9FE6;
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

const TopicBox = ({ isHost, gameState, handleUpdateTheme }) => {
  const [topic, setTopic] = useState(gameState.settings.theme || 'RANDOM');

  useEffect(() => {
    setTopic(gameState.settings.theme);
  }, [gameState]);

  const handleTopicChange = (e) => {
    setTopic(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && isHost) {
      handleUpdateTheme({ theme: topic });
    }
  };
  

  return (
    <TopicContainer>
      <TopicBoxStyled>
      {isHost ? (
          <TopicBoxline
          type="text"
          value={topic === 'RANDOM' ? '' : topic}
          onChange={handleTopicChange}
          onKeyDown={handleKeyDown}
          placeholder="주제를 입력하세요.(미입력시 랜덤)"
          />) : (
            <TopicBoxline
            type="text"
            value={topic}
            readOnly
            />
          )}
      </TopicBoxStyled>
    </TopicContainer>
  );
};
  
export default TopicBox;