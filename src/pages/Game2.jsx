import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GroupComponent1 from "../components/GroupComponent1";

const Child = styled.img`
  margin-left: -277px;
  margin-bottom: 7px;
  width: 1280px;
  position: relative;
  max-height: 100%;
  max-width: 128%;
  flex-shrink: 0;
  display: flex;
  &:hover {
    display: flex;
    width: 1280px;
    max-width: 128%;
    flex-shrink: 0;
  }
`;
const ShapesChild = styled.div`
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
const ShapesItem = styled.div`
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
const Shapes = styled.div`
  width: 37.6px;
  height: 50.1px;
  position: absolute;
  margin: 0 !important;
  top: -10140px;
  left: 162.9px;
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
const B = styled.b`
  width: 145px;
  position: relative;
  font-size: var(--font-size-11xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-darkslategray-100);
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    width: 145px;
    height: auto;
    white-space: nowrap;
  }
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: 3px solid var(--color-palevioletred);
  padding: var(--padding-5xs) var(--padding-50xl) var(--padding-5xs)
    var(--padding-55xl);
  background-color: var(--color-lightgray);
  flex: 1;
  border-radius: var(--br-mini);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-mini);
    padding: var(--padding-5xs) var(--padding-50xl) var(--padding-5xs)
      var(--padding-55xl);
    box-sizing: border-box;
    border: 3px solid var(--color-lightpink-100);
    white-space: nowrap;
  }
  &:active {
    background-color: var(--color-lightgray);
    border: 3px solid var(--color-palevioletred);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const FrameWrapper = styled.div`
  width: 304px;
  border-radius: var(--br-lg);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs);
  box-sizing: border-box;
  height: auto;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 304px;
    height: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-lg);
    padding: var(--padding-8xs);
    box-sizing: border-box;
  }
`;
const Inner = styled.div`
  width: 728px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 728px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: center;
    transform: rotate(0deg);
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 68.4px;
  width: 88.2px;
  top: 41.89%;
  right: 41.48%;
  bottom: 41.65%;
  left: 41.69%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  background-color: var(--color-darkgray);
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-darkgray);
    display: flex;
    width: 88.2px;
    height: 68.4px;
  }
`;
const Image98Icon = styled.img`
  position: absolute;
  height: 415px;
  top: 0.2px;
  bottom: 0.2px;
  left: 28.3px;
  max-height: 100%;
  width: 468px;
  object-fit: cover;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 468px;
    height: 415px;
  }
`;
const VectorParent = styled.div`
  position: absolute;
  top: 22.8px;
  left: 21.7px;
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-100);
  width: 523.9px;
  height: 415.4px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro-100);
    display: flex;
    width: 523.9px;
    height: 415.4px;
    border-radius: var(--br-xs);
  }
`;
const ContentInner = styled.div`
  height: 461px;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  background-color: var(--color-lightpink-100);
  max-width: calc(100% - 166px);
  display: flex;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    flex: 1;
    height: 461px;
    border-radius: var(--br-xs);
    max-width: calc(100% - 166px);
  }
  @media screen and (max-width: 750px) {
    max-width: 100%;
  }
`;
const Content = styled.div`
  width: 752.9px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-6xl-7);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 752.9px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-6xl-7);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-xl) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const DivRoot = styled.div`
  width: 1280px;
  height: 832px;
  position: relative;
  background-color: var(--color-darkslategray-100);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) var(--padding-12xs) var(--padding-66xl)
    var(--padding-257xl);
  box-sizing: border-box;
  gap: var(--gap-11xl);
  line-height: normal;
  letter-spacing: normal;
  cursor: pointer;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 1280px;
    height: 832px;
    flex-direction: column;
    gap: var(--gap-11xl);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-45xl) var(--padding-12xs) var(--padding-66xl)
      var(--padding-257xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
  @media screen and (max-width: 1200px) {
    padding-left: 138px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-mini);
    padding-left: var(--padding-50xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const Game2 = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/game");
  }, [navigate]);

  return (
    <DivRoot onClick={onContainerClick}>
      <Child alt="" src="/group-138.svg" />
      <Shapes>
        <ShapesChild />
        <ShapesItem />
      </Shapes>
      <Inner>
        <FrameWrapper>
          <Wrapper>
            <B>차가운 청년</B>
          </Wrapper>
        </FrameWrapper>
      </Inner>
      <Content>
        <ContentInner>
          <VectorParent>
            <VectorIcon loading="lazy" alt="" src="/vector1.svg" />
            <Image98Icon alt="" src="/image-981@2x.png" />
          </VectorParent>
        </ContentInner>
        <GroupComponent1 />
      </Content>
    </DivRoot>
  );
};

export default Game2;
