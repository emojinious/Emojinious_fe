import React, { useState, useEffect } from "react";
import styled from "styled-components";

const TopicContainer = styled.div`
  width: 100vw;
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
  width: 95%;
  height: 70%;
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
  const [topic, setTopic] = useState(gameState.settings.theme || '무작위');
  const [inputValue, setInputValue] = useState(gameState.settings.theme === '무작위' ? '' : gameState.settings.theme);

  useEffect(() => {
    setTopic(gameState.settings.theme);
    setInputValue(gameState.settings.theme === '무작위' ? '' : gameState.settings.theme);
  }, [gameState]);

  const handleTopicChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (isHost) {
      const newTopic = inputValue.trim() === '' ? '무작위' : inputValue;
      if (newTopic !== topic) {
        setTopic(newTopic);
        handleUpdateTheme({ theme: newTopic });
      }
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleBlur = () => {
    handleSubmit();
  };

  return (
    <TopicContainer>
      <TopicBoxStyled>
      {isHost ? (
          <TopicBoxline
            type="text"
            value={inputValue}
            onChange={handleTopicChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            placeholder="무작위"
          />
        ) : (
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