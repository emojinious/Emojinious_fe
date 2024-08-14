import React, { useCallback, useState } from "react";
import styled from "styled-components";
import BoingButton from '../components/BoingButton';
import { useNavigate } from "react-router-dom";
import Nick_select_bar from "../components/Nick_select_bar";
import Header from "../components/Header";

const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #434040;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  overflow: hidden;
`;

const BackButton = styled(BoingButton).attrs({ isImageButton: true })`
  position: absolute;
  left: 2%;
  top: 4%;
  width: 8vh;
  height: 8vh;
`;

const InstructionText = styled.div`
  margin-top: 40px;
  font-size: 40px;
  color: white;
  text-align: center;
`;


// 캐릭터 선택 영역
const CharacterSelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 30px;
  width: 95%;
  height: 50%;
`;

const CharacterCardWrap = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow:hidden;
  position:relative;
`

// 캐릭터 카드 (이미지)
const CharacterCard = styled.img`
  position: absolute;
  width: ${({ isCenter }) => (isCenter ? '20vw' : '10vw')};
  height: ${({ isCenter }) => (isCenter ? '20vw' : '10vw')};
  transition: all 0.5s ease;
  opacity: ${({ isCenter }) => (isCenter ? 1 : 0.5)};
  z-index: ${({ isCenter }) => (isCenter ? 2 : 1)};
  transform: ${({ offset }) => `translateX(${offset}px)`};
`;


// 화살표

const Arrow = styled(BoingButton).attrs({ isImageButton: true })`
  width: 5%;
  user-select: none;
`;

const PlayerSetup = () => {
  const navigate = useNavigate();

  const handleBackClick = useCallback(() => {
    navigate(-1); // 이전 페이지로 이동
  }, [navigate]);

  const [currentIndex, setCurrentIndex] = useState(0);

  const characters = ['E', 'M', 'O', 'J', 'I', 'N', 'U', 'S'];
  const totalCharacters = characters.length;

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (currentIndex < totalCharacters - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  return (
    <HomeContainer>
      <Header/>
      <BackButton 
        as="img"
        src="/뒤로가기.svg" 
        alt="Back Button" 
        onClick={handleBackClick} 
      />
      <InstructionText>플레이하고 싶은 캐릭터를 골라주세요!</InstructionText>
      <CharacterSelectContainer>
        <Arrow 
          as="img"
          src="/setup_왼쪽캐릭터화살표.png" 
          alt="Left Arrow" 
          onClick={handleLeftClick} 
          style={{ visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
        />
        <CharacterCardWrap>
        {characters.map((character, index) => {
            const isCenter = index === currentIndex;
            const offset = (index - currentIndex) * 500;
            return (
              <CharacterCard
                key={character}
                src={`/setup_${character}캐릭터카드.svg`}
                alt={`${character} 캐릭터`}
                offset={offset}
                isCenter={isCenter}
              />
          );
        })}
        </CharacterCardWrap>
        <Arrow 
          as="img"
          src="/setup_오른쪽캐릭터화살표.png"
          alt="Right Arrow" 
          onClick={handleRightClick} 
          style={{ visibility: currentIndex === totalCharacters - 1 ? 'hidden' : 'visible' }} 
        />
      </CharacterSelectContainer>
      <Nick_select_bar/>
    </HomeContainer>
  );
};
  
  export default PlayerSetup;
  