import React from "react";
import styled from "styled-components";

const TopicContainer = styled.div`
  width:100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ArrowButton = styled.img`
  width: 4vw;
  height: 5vh;
  cursor: pointer;
  user-select: none;
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

const TopicBoxline = styled.div`
  width:95%;
  height:70%;
  background: none;
  border-radius: 10px;
  border: 4px solid #2B9FE6;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`

const TopicBox = ({ currentTopic, topics, onPrevClick, onNextClick }) => {
  
  return (
    <TopicContainer>
      <ArrowButton 
        src="/room_주제왼화살표.png" 
        alt="Previous Topic" 
        onClick={onPrevClick} 
      />
      <TopicBoxStyled>
        <TopicBoxline>
          {topics[currentTopic]}
        </TopicBoxline>
      </TopicBoxStyled>
      <ArrowButton 
        src="/room_주제오화살표.png"
        alt="Next Topic" 
        onClick={onNextClick} 
      />
    </TopicContainer>
  );
};

export default TopicBox;
