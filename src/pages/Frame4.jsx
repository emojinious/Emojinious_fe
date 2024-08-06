import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MainChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-gainsboro-200);
  width: 37.6px;
  height: 37.6px;
  display: flex;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 37.6px;
    height: 37.6px;
  }
`;
const MainItem = styled.div`
  position: absolute;
  top: 41.3px;
  left: 3.8px;
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-200);
  width: 30.7px;
  height: 8.8px;
  display: flex;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 30.7px;
    height: 8.8px;
    border-radius: var(--br-xs);
  }
`;
const Main = styled.div`
  margin-top: -10464px;
  height: 50.1px;
  width: 37.6px;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 37.6px;
    height: 50.1px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameChild = styled.img`
  height: 34.3px;
  width: 36px;
  position: relative;
  display: flex;
  &:hover {
    display: flex;
    width: 36px;
    height: 34.3px;
  }
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-32xl);
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px var(--padding-32xl);
    box-sizing: border-box;
  }
`;
const FrameItem = styled.img`
  height: 127.6px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  object-fit: cover;
  display: flex;
  &:hover {
    display: flex;
    flex: 1;
    height: 127.6px;
  }
`;
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs);
  box-sizing: border-box;
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
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-3xs);
    box-sizing: border-box;
  }
`;
const Moji = styled.b`
  position: relative;
  display: flex;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-lgi-2);
    text-align: center;
    color: var(--color-linen-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
  }
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl-9);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-xl-9);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameParent = styled.div`
  width: 186px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xl-2);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 186px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-6xl-2);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const DivRoot = styled.div`
  width: 1280px;
  position: relative;
  background-color: var(--color-darkslategray-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-305xl) var(--padding-143xl) var(--padding-229xl);
  box-sizing: border-box;
  gap: var(--gap-327xl-5);
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-lgi-2);
  color: var(--color-linen-100);
  font-family: var(--font-inter);
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 1280px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-327xl-5);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-305xl) var(--padding-143xl) var(--padding-229xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
    gap: var(--gap-154xl);
    padding-left: var(--padding-62xl);
    padding-right: var(--padding-62xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-68xl);
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const Frame4 = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/-21");
  }, [navigate]);

  return (
    <DivRoot onClick={onContainerClick}>
      <Main>
        <MainChild />
        <MainItem />
      </Main>
      <FrameParent>
        <FrameWrapper>
          <FrameChild loading="lazy" alt="" src="/group-237.svg" />
        </FrameWrapper>
        <FrameGroup>
          <FrameContainer>
            <FrameItem loading="lazy" alt="" src="/group-297@2x.png" />
          </FrameContainer>
          <Moji>MOJI가 그림 생성 중...</Moji>
        </FrameGroup>
      </FrameParent>
    </DivRoot>
  );
};

export default Frame4;
