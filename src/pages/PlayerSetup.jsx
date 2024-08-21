import React, { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { createPlayer } from '../utils/api';
import styled from "styled-components";
import BoingButton from '../components/BoingButton';
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
  user-select: none;
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
`;

// 캐릭터 카드 (이미지)
const chWidth = ['45vh', '30vh', '25vh', '20vh', '17vh', '15vh', '14vh', '13vh']
const chHeight = ['45vh', '30vh', '25vh', '20vh', '17vh', '15vh', '14vh', '13ch']
const chFilter = ['brightness(100%)', 'brightness(66%)', 'brightness(55%)', 'brightness(40%)', 'brightness(30%)', 'brightness(20%)', 'brightness(18%)', 'brightness(16%)']
const chZindex = [127, 63, 31, 15, 7, 3, 1, 0]
const CharacterCard = styled.img`
  position: absolute;
  width: ${({ diff }) => chWidth[diff]};
  height: ${({diff }) => chHeight[diff]};
  transition: all 0.3s ease-in-out;
  filter: ${({diff }) => chFilter[diff]};
  z-index: ${({diff }) => chZindex[diff]};
  transform: ${({ offset }) => `translateX(${offset}px)`};
  user-select: none;
`;

// 화살표
const RightArrow = styled(BoingButton).attrs({ isImageButton: true })`
  width: 4%;
  position:absolute;
  right:5%;
  margin:0;
  user-select: none;
  z-index:128;
`;
const LeftArrow = styled(BoingButton).attrs({ isImageButton: true })`
  width: 4%;
  position:absolute;
  left:5%;
  margin:0;
  user-select: none;
  z-index:128;
`;

const PlayerSetup = () => {
  const [nickname, setNickname] = useState('');
  const [characterId, setCharacterId] = useState('E');
  const navigate = useNavigate();
  const location = useLocation();
  const [sessionId, setSessionId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const characters = ['E', 'M', 'O', 'J', 'I', 'N', 'U', 'S'];
  const totalCharacters = characters.length;

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const sessionIdFromUrl = searchParams.get('sessionId');
    if (sessionIdFromUrl) {
      setSessionId(sessionIdFromUrl);
      console.log('Joining as guest to session:', sessionIdFromUrl);
    }
    setCharacterId(characters[currentIndex])
  }, [location.search,currentIndex]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createPlayer(nickname, currentIndex + 1, sessionId);
      localStorage.setItem('playerId', response.player.id);
      localStorage.setItem('token', response.token);
      localStorage.setItem('sessionId', response.player.sessionId);
      localStorage.setItem('characterId', response.player.characterId.toString());
      navigate(`/room/${response.player.sessionId}`);
    } catch (error) {
      console.error('Error creating player:', error);
    }
  };
  
  const handleBackClick = useCallback(() => {
    navigate(-1); // 이전 페이지로 이동
  }, [navigate]);

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
    <HomeContainer onSubmit={handleSubmit}>
      <Header/>
      <BackButton 
        as="img"
        src="/뒤로가기.svg" 
        alt="Back Button" 
        onClick={handleBackClick} 
      />
      <InstructionText>플레이하고 싶은 캐릭터를 골라주세요!</InstructionText>
      <CharacterSelectContainer>
        <CharacterCardWrap>
        <LeftArrow 
          as="img"
          src="/setup_왼쪽캐릭터화살표.svg" 
          alt="Left Arrow" 
          onClick={handleLeftClick} 
          style={{ visibility: currentIndex === 0 ? 'hidden' : 'visible' }}
          />
        {characters.map((character, index) => {
          const offset = Math.sign(index - currentIndex) * (200 * Math.log((Math.sqrt(Math.abs(index - currentIndex), 2) + 1.3)) / Math.log(2));
          // Math.sign(index - curentIndex) * (200 * Math.log(Math.abs(index - currentIndex) + 1) / Math.log(2));
          return (
            <CharacterCard
            key={character}
            src={`/setup_${character}캐릭터카드.svg`}
            alt={`${character} 캐릭터`}
            offset={offset}
            diff={Math.abs(index - currentIndex)}
            />
          );
        })}
        <RightArrow 
          as="img"
          src="/setup_오른쪽캐릭터화살표.svg"
          alt="Right Arrow"  
          onClick={handleRightClick} 
          style={{ visibility: currentIndex === totalCharacters - 1 ? 'hidden' : 'visible' }} 
          />
        </CharacterCardWrap>
      </CharacterSelectContainer>
      <Nick_select_bar nickname={nickname} setNickname={setNickname} handleSubmit={handleSubmit}/>
    </HomeContainer>
  );
};
  
  export default PlayerSetup;
  