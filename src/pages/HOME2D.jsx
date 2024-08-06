import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FrameComponent8 from "../components/FrameComponent8";

const FrameChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1280px;
  height: 85px;
  display: flex;
  &:hover {
    display: flex;
    width: 1280px;
    height: 85px;
  }
`;
const FrameItem = styled.img`
  position: absolute;
  top: 15px;
  left: 42px;
  width: 58px;
  height: 58px;
  display: flex;
  cursor: pointer;
  z-index: 1;
  &:hover {
    display: flex;
    width: 58px;
    height: 58px;
  }
`;
const FrameParent = styled.header`
  align-self: stretch;
  height: 92px;
  position: relative;
  display: flex;
  width: auto;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  padding: 0px 0px var(--padding-6xs);
  box-sizing: border-box;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 92px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-6xs);
    box-sizing: border-box;
  }
`;
const B = styled.b`
  height: auto;
  width: 400px;
  position: relative;
  display: flex;
  max-width: 100%;
  font-weight: 700;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    text-align: left;
    color: var(--color-linen-100);
    display: flex;
    width: 400px;
    height: auto;
    max-width: 100%;
  }
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
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: center;
    transform: rotate(0deg);
    padding: 0px var(--padding-6xl) 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const CharacterIcons = styled.div`
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
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 227px;
    height: 228px;
    transform: rotate(-180deg);
    border-radius: var(--br-xs);
  }
`;
const CharacterIcons1 = styled.div`
  position: absolute;
  top: 63px;
  left: 961px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-200);
  width: 254px;
  height: 255px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-darkslategray-200);
    display: flex;
    width: 254px;
    height: 255px;
    border-radius: var(--br-xs);
  }
`;
const CharacterIcons2 = styled.div`
  position: absolute;
  top: 317px;
  left: 1145px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  width: 253px;
  height: 254px;
  transform: rotate(-180deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 253px;
    height: 254px;
    transform: rotate(-180deg);
    border-radius: var(--br-xs);
  }
`;
const CharacterGridChild = styled.img`
  position: absolute;
  top: 115px;
  left: 960.7px;
  width: 138.6px;
  height: 161px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 138.6px;
    height: 161px;
  }
`;
const CharacterIcons3 = styled.div`
  position: absolute;
  top: 63px;
  left: 891px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-300);
  width: 254px;
  height: 255px;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-darkslategray-300);
    display: flex;
    width: 254px;
    height: 255px;
    border-radius: var(--br-xs);
  }
`;
const CharacterIcons4 = styled.div`
  position: absolute;
  top: 341px;
  left: 1042px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  width: 300px;
  height: 301px;
  transform: rotate(-180deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 5;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 300px;
    height: 301px;
    transform: rotate(-180deg);
    border-radius: var(--br-xs);
  }
`;
const CharacterIcons5 = styled.div`
  position: absolute;
  top: 76px;
  left: 15px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  width: 227px;
  height: 230px;
  display: flex;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 227px;
    height: 230px;
    border-radius: var(--br-xs);
  }
`;
const CharacterIcons6 = styled.div`
  position: absolute;
  top: 76px;
  left: 15px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-200);
  width: 230px;
  height: 230px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-darkslategray-200);
    display: flex;
    width: 230px;
    height: 230px;
    border-radius: var(--br-xs);
  }
`;
const CharacterIcons7 = styled.div`
  position: absolute;
  top: 64px;
  left: 84px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  width: 255px;
  height: 254px;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 255px;
    height: 254px;
    border-radius: var(--br-xs);
  }
`;
const CharacterGridItem = styled.img`
  position: absolute;
  top: 106.7px;
  left: 135px;
  width: 119px;
  height: 172.7px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 119px;
    height: 172.7px;
  }
`;
const CharacterIcons8 = styled.div`
  position: absolute;
  top: 63px;
  left: 84px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-300);
  width: 254px;
  height: 255px;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-darkslategray-300);
    display: flex;
    width: 254px;
    height: 255px;
    border-radius: var(--br-xs);
  }
`;
const CharacterIcons9 = styled.div`
  position: absolute;
  top: 40px;
  left: 189px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  width: 300px;
  height: 301px;
  display: flex;
  z-index: 5;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 300px;
    height: 301px;
    border-radius: var(--br-xs);
  }
`;
const CharacterGridInner = styled.img`
  position: absolute;
  top: 81px;
  left: 249px;
  width: 157px;
  height: 223px;
  display: flex;
  z-index: 6;
  &:hover {
    display: flex;
    width: 157px;
    height: 223px;
  }
`;
const CharacterIcons10 = styled.div`
  position: absolute;
  top: 40px;
  left: 189px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-400);
  width: 300px;
  height: 301px;
  display: flex;
  z-index: 7;
  &:hover {
    background-color: var(--color-darkslategray-400);
    display: flex;
    width: 300px;
    height: 301px;
    border-radius: var(--br-xs);
  }
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 140px;
  left: 1136px;
  width: 95px;
  height: 95px;
  object-fit: cover;
  display: flex;
  z-index: 5;
  &:hover {
    display: flex;
    width: 95px;
    height: 95px;
  }
`;
const CharacterGridChild1 = styled.img`
  position: absolute;
  top: 140px;
  left: 0px;
  width: 95px;
  height: 95px;
  object-fit: contain;
  display: flex;
  z-index: 5;
  &:hover {
    display: flex;
    width: 95px;
    height: 95px;
  }
`;
const SelectionCircle = styled.div`
  position: absolute;
  top: 80.2px;
  left: 102.3px;
  border-radius: 50%;
  background-color: var(--color-darkslategray-100);
  width: 16.2px;
  height: 16.2px;
  display: flex;
  z-index: 5;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 16.2px;
    height: 16.2px;
  }
`;
const SelectionCircle1 = styled.div`
  position: absolute;
  top: 91px;
  left: 32px;
  border-radius: 50%;
  background-color: var(--color-darkslategray-100);
  width: 14px;
  height: 14px;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 14px;
    height: 14px;
  }
`;
const SelectionCircle2 = styled.div`
  position: absolute;
  top: 59.3px;
  left: 210.8px;
  border-radius: 50%;
  background-color: var(--color-darkslategray-100);
  width: 19.3px;
  height: 19.3px;
  display: flex;
  z-index: 8;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 19.3px;
    height: 19.3px;
  }
`;
const ControlElements = styled.div`
  position: absolute;
  top: 212px;
  left: 71.9px;
  border-radius: var(--br-11xl);
  background-color: var(--color-lightpink-100);
  width: 44.1px;
  height: 44.1px;
  transform: rotate(-180deg);
  transform-origin: 0 0;
  display: flex;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 44.1px;
    height: 44.1px;
    transform: rotate(-180deg);
    border-radius: var(--br-11xl);
  }
`;
const ControlElements1 = styled.div`
  position: absolute;
  top: 212px;
  left: 118.9px;
  border-radius: var(--br-11xl);
  background-color: var(--color-lightpink-100);
  width: 44.1px;
  height: 44.1px;
  transform: rotate(-180deg);
  transform-origin: 0 0;
  display: flex;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 44.1px;
    height: 44.1px;
    transform: rotate(-180deg);
    border-radius: var(--br-11xl);
  }
`;
const OptionIcons = styled.div`
  position: absolute;
  top: 126.7px;
  left: 0px;
  border-radius: var(--br-11xl);
  background-color: var(--color-deepskyblue-100);
  width: 147.1px;
  height: 58.1px;
  display: flex;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 147.1px;
    height: 58.1px;
    border-radius: var(--br-11xl);
  }
`;
const OptionIcons1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-11xl);
  background-color: var(--color-deepskyblue-100);
  width: 147.1px;
  height: 58.1px;
  display: flex;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 147.1px;
    height: 58.1px;
    border-radius: var(--br-11xl);
  }
`;
const OptionIcons2 = styled.div`
  position: absolute;
  top: 100.45px;
  left: 29.05px;
  border-radius: var(--br-11xl);
  background-color: var(--color-deepskyblue-100);
  width: 147.1px;
  height: 58.1px;
  transform: rotate(90deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 147.1px;
    height: 58.1px;
    transform: rotate(90deg);
    border-radius: var(--br-11xl);
  }
`;
const OptionIconsParent = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 147.1px;
  height: 184.8px;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 147.1px;
    height: 184.8px;
  }
`;
const FrameInner = styled.img`
  position: absolute;
  top: 15.4px;
  left: 46px;
  width: 19px;
  height: 19px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 19px;
    height: 19px;
  }
`;
const FrameChild1 = styled.img`
  position: absolute;
  top: 15.4px;
  left: 82.8px;
  width: 19px;
  height: 19px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 19px;
    height: 19px;
  }
`;
const ControlElements2 = styled.div`
  position: absolute;
  top: 75.8px;
  left: 67.2px;
  border-radius: 50%;
  background-color: var(--color-lightpink-100);
  width: 13.4px;
  height: 13.4px;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 13.4px;
    height: 13.4px;
  }
`;
const ControlElements3 = styled.div`
  position: absolute;
  top: 98.8px;
  left: 67.2px;
  border-radius: 50%;
  background-color: var(--color-lightpink-100);
  width: 13.4px;
  height: 13.4px;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 13.4px;
    height: 13.4px;
  }
`;
const PolygonIcon = styled.img`
  position: absolute;
  top: 29.3px;
  left: 59.9px;
  border-radius: 2.64px;
  width: 26.6px;
  height: 21.6px;
  background-color: var(--color-lightpink-100);
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 26.6px;
    height: 21.6px;
    border-radius: 2.64px;
  }
`;
const ControlElementsParent = styled.div`
  position: absolute;
  top: 94px;
  left: 818px;
  width: 147.1px;
  height: 212.1px;
  display: flex;
  z-index: 6;
  &:hover {
    display: flex;
    width: 147.1px;
    height: 212.1px;
  }
`;
const CharacterIcons11 = styled.div`
  position: absolute;
  top: 40px;
  left: 742px;
  border-radius: var(--br-xs);
  background-color: var(--color-darkslategray-400);
  width: 300px;
  height: 301px;
  display: flex;
  z-index: 7;
  &:hover {
    background-color: var(--color-darkslategray-400);
    display: flex;
    width: 300px;
    height: 301px;
    border-radius: var(--br-xs);
  }
`;
const Separator = styled.div`
  position: absolute;
  height: 359px;
  top: 0px;
  bottom: 0px;
  left: 433px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  width: 359px;
  display: flex;
  z-index: 8;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 359px;
    height: 359px;
    border-radius: var(--br-xs);
  }
`;
const CharacterGridChild2 = styled.img`
  position: absolute;
  top: 53px;
  left: 523.4px;
  width: 183.2px;
  height: 253px;
  display: flex;
  z-index: 9;
  &:hover {
    display: flex;
    width: 183.2px;
    height: 253px;
  }
`;
const ProgressIndicator = styled.div`
  position: absolute;
  top: 23px;
  left: 459px;
  border-radius: 50%;
  background-color: var(--color-darkslategray-100);
  width: 23px;
  height: 23px;
  display: flex;
  z-index: 9;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 23px;
    height: 23px;
  }
`;
const CharacterGrid = styled.div`
  height: 359px;
  flex: 1;
  position: relative;
  max-width: 100%;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: 359px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
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
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    max-width: 100%;
  }
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
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-4xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
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
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px var(--padding-3xl) 0px var(--padding-8xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const Home2dRoot = styled.div`
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
  height: auto;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 1280px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-20xl);
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-43xl) 0px var(--padding-84xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
  @media screen and (max-width: 675px) {
    gap: var(--gap-lgi);
  }
`;

const HOME2D = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/home-1");
  }, [navigate]);

  return (
    <Home2dRoot>
      <FrameParent>
        <FrameChild alt="" src="/group-138.svg" />
        <FrameItem
          loading="lazy"
          alt=""
          src="/group-129.svg"
          onClick={onGroupClick}
        />
      </FrameParent>
      <Home2dInner>
        <FrameGroup>
          <Wrapper>
            <B>플레이하고 싶은 캐릭터를 골라주세요 !</B>
          </Wrapper>
          <CharacterGridWrapper>
            <CharacterGrid>
              <CharacterIcons />
              <CharacterIcons1 />
              <CharacterIcons2 />
              <CharacterGridChild loading="lazy" alt="" src="/group-163.svg" />
              <CharacterIcons3 />
              <CharacterIcons4 />
              <CharacterIcons5 />
              <CharacterIcons6 />
              <CharacterIcons7 />
              <CharacterGridItem alt="" src="/group-1641.svg" />
              <CharacterIcons8 />
              <CharacterIcons9 />
              <CharacterGridInner loading="lazy" alt="" src="/group-121.svg" />
              <CharacterIcons10 />
              <GroupIcon loading="lazy" alt="" src="/group-116@2x.png" />
              <CharacterGridChild1
                loading="lazy"
                alt=""
                src="/group-117@2x.png"
              />
              <SelectionCircle />
              <SelectionCircle1 />
              <SelectionCircle2 />
              <ControlElementsParent>
                <ControlElements />
                <ControlElements1 />
                <OptionIconsParent>
                  <OptionIcons />
                  <OptionIcons1 />
                  <OptionIcons2 />
                </OptionIconsParent>
                <FrameInner alt="" src="/group-1693.svg" />
                <FrameChild1 loading="lazy" alt="" src="/group-1703.svg" />
                <ControlElements2 />
                <ControlElements3 />
                <PolygonIcon alt="" src="/polygon-172.svg" />
              </ControlElementsParent>
              <CharacterIcons11 />
              <Separator />
              <CharacterGridChild2 loading="lazy" alt="" src="/group-114.svg" />
              <ProgressIndicator />
            </CharacterGrid>
          </CharacterGridWrapper>
        </FrameGroup>
      </Home2dInner>
      <FrameComponent8 />
    </Home2dRoot>
  );
};

export default HOME2D;
