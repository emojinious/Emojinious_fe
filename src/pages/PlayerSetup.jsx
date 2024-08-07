import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Nick_select_bar from "../components/Nick_select_bar";
import Header from "../components/Header";

const HeaderBackButton = styled.img`
  position: absolute;
  top: 80px;
  left: 42px;
  width: 58px;
  height: 58px;
  display: flex;
  cursor: pointer;
  z-index: 1;
`;
const B = styled.b`
  height: auto;
  width: 440px;
  position: relative;
  display: flex;
  max-width: 100%;
  font-weight: 700;
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const Wrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-6xl) 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
`;
const CardGrid = styled.div`
  height: 359px;
  flex: 1;
  position: relative;
  max-width: 100%;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
`;
const RightCard3 = styled.div`
  position: absolute;
  top: 304px;
  left: 1215px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  width: 227px;
  height: 228px;
  transform: rotate(-180deg);
  transform-origin: 0 0;
  display: flex;
`;
const RightCardshadow3 = styled.div`
  position: absolute;
  top: 63px;
  left: 961px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-200);
  width: 254px;
  height: 255px;
  display: flex;
  z-index: 1;
`;
const RightCard2 = styled.img`
  position: absolute;
  top: 63px;
  left: 891px;
  width: 253px;
  height: 254px;
  display: flex;
  z-index: 2;
`;
const RightCardshadow2 = styled.div`
  position: absolute;
  top: 63px;
  left: 891px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-300);
  width: 254px;
  height: 255px;
  display: flex;
  z-index: 4;
`;
const RightCard1 = styled.img`
  position: absolute;
  top: 40px;
  left: 742px;
  width: 300px;
  height: 301px;
  display: flex;
  z-index: 5;
`;
const RightCardshadow1 = styled.div`
  position: absolute;
  top: 40px;
  left: 742px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-400);
  width: 300px;
  height: 301px;
  display: flex;
  z-index: 7;
`;
const LeftCard3 = styled.div`
  position: absolute;
  top: 76px;
  left: 15px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  width: 227px;
  height: 230px;
  display: flex;
`;
const LeftCardshadow3 = styled.div`
  position: absolute;
  top: 76px;
  left: 15px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-200);
  width: 230px;
  height: 230px;
  display: flex;
  z-index: 1;
`;
const LeftCard2 = styled.img`
  position: absolute;
  top: 64px;
  left: 84px;
  width: 255px;
  height: 254px;
  display: flex;
  z-index: 2;
`;
const LeftCardshadow2 = styled.div`
  position: absolute;
  top: 63px;
  left: 84px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-300);
  width: 254px;
  height: 255px;
  display: flex;
  z-index: 4;
`;
const LeftCard1 = styled.img`
  position: absolute;
  top: 40px;
  left: 189px;
  width: 300px;
  height: 301px;
  display: flex;
  z-index: 5;
`;
const LeftCardshadow1 = styled.div`
  position: absolute;
  top: 40px;
  left: 189px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-400);
  width: 300px;
  height: 301px;
  display: flex;
  z-index: 7;
`;
const ChooseCard = styled.img`
  position: absolute;
  height: 359px;
  top: 0px;
  bottom: 0px;
  left: 433px;
  width: 359px;
  display: flex;
  z-index: 8;
`;
const RightArrow = styled.img`
  position: absolute;
  top: 140px;
  left: 1136px;
  width: 95px;
  height: 95px;
  object-fit: cover;
  display: flex;
  z-index: 5;
  cursor:pointer;
`;
const LeftArrow = styled.img`
  position: absolute;
  top: 140px;
  left: 0px;
  width: 95px;
  height: 95px;
  object-fit: contain;
  display: flex;
  z-index: 5;
  cursor:pointer;
`;
const CharacterGridWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  width: auto;
  height: auto;
`;
const FrameGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-4xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
`;
const Home2dInner = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-3xl) 0px var(--padding-8xl);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-linen-100);
  font-family: var(--font-inter);
`;
const DivRoot = styled.div`
  width: 1280px;
  position: relative;
  background-color: var(--color-darkslategray-100);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-43xl) 0px var(--padding-84xl);
  box-sizing: border-box;
  gap: var(--gap-20xl);
  line-height: normal;
  letter-spacing: normal;
  height: 832px;
  @media screen and (max-width: 675px) {
    gap: var(--gap-lgi);
  }
`;

const PlayerSetup = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <DivRoot>
      <Header />
      <HeaderBackButton
          alt=""
          src="/뒤로가기.svg"
          onClick={onGroupClick}
          />
      <Home2dInner>
        <FrameGroup>
          <Wrapper>
            <B>플레이하고 싶은 캐릭터를 골라주세요 !</B>
          </Wrapper>
          <CharacterGridWrapper>
            <CardGrid>
              <RightArrow alt="" src="/setup_오른쪽캐릭터화살표.png" />
              <LeftArrow alt="" src="/setup_왼쪽캐릭터화살표.png" />
              {/*
              */} 
              <ChooseCard alt="" src="/setup_E캐릭터카드.svg" />
              <RightCard1 alt="" src="/setup_I캐릭터카드.svg"/>
              <RightCard2 alt="" src="/setup_M캐릭터카드.svg" />
              <RightCard3 />
              <RightCardshadow1 />
              <RightCardshadow2 />
              <RightCardshadow3 />
              <LeftCard1 alt="" src="/setup_J캐릭터카드.svg" />
              <LeftCard2 alt="" src="/setup_U캐릭터카드.svg" />
              <LeftCard3 />
              <LeftCardshadow1 />
              <LeftCardshadow2 />
              <LeftCardshadow3 />
            </CardGrid>
          </CharacterGridWrapper>
        </FrameGroup>
      </Home2dInner>
      <Nick_select_bar />
    </DivRoot>
  );
  };
  
  export default PlayerSetup;
  