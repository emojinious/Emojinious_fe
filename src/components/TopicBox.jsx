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
  const [topic, setTopic] = useState(gameState.settings.theme || '');

  useEffect(() => {
    setTopic(gameState.settings.theme);
  }, [gameState]);

  const handleTopicChange = (e) => {
    if (!isHost) return;
  
    const newTopic = e.target.value;
    setTopic(newTopic);
    console.log("Tlqkf!!!!!!!!!" + newTopic)

    const settings = { 
      theme: newTopic
    };
    console.log("Tlqkf!!!!!!!!!" + settings)
    console.log("Tlqkf!!!!!!!!!" + typeof(settings.theme))
    handleUpdateTheme(settings);
  };

  return (
    <TopicContainer>
      <TopicBoxStyled>
          <TopicBoxline
          type="text"
          value={topic}
          onChange={handleTopicChange}
          placeholder="주제 입력..."
          readOnly={!isHost}
          />
      </TopicBoxStyled>
    </TopicContainer>
  );
};
  
export default TopicBox;