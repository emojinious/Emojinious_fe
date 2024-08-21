import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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

const TopicBoxline = styled.div`
  width:95%;
  height:70%;
  background: none;
  border-radius: 10px;
  border: 4px solid #FEA1BD;
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

const TotalBox = styled.div`
  width: 75%;
  height: 60%;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 40px;
`

const LeftBox = styled.div`
  width: 80%;
  height: 100%;
  display:flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  flex-direction: column;
`

const ImageBox = styled.div`
  width: 80vmin;
  height: 80vmin;
  border-radius: 15px;
  border: none;
  margin-bottom: 20px;
  background-color: #FEA1BD;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

const ImageInput = styled.div`
  width: 100%;
  height: 85%;
  padding: 15px;
  margin: 25px;
  font-size: 18px;
  border-radius: 15px;
  background-color:#EAE8DC;
  border:none;
  resize: none;
  outline: none; 
`;

// Game 컴포넌트
const Game2 = ({ keyword }) => {
  return (
    <>
      <TopicContainer>
        <TopicBoxStyled>
          <TopicBoxline>
            {keyword}
          </TopicBoxline>
        </TopicBoxStyled>
      </TopicContainer>
      <TotalBox>
        <LeftBox>
          <ImageBox>
            <ImageInput
            />
          </ImageBox>
        </LeftBox>
      </TotalBox>
    </>
  );
};

export default Game2;
