import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Span = styled.span``;
const Span1 = styled.span`
  color: var(--color-darkslategray-100);
`;
const H = styled.h3`
  margin: 0;
  position: absolute;
  top: 12px;
  left: 131px;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: center;
    display: flex;
    height: auto;
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Wrapper = styled.div`
  position: absolute;
  width: 445px;
  top: 5px;
  right: 8px;
  left: 8px;
  height: 92px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 445px;
    height: 92px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameContainer = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 230.5px);
  border-radius: var(--br-lg);
  background-color: var(--color-linen-100);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
  }
`;
const FrameWrapper = styled.div`
  position: absolute;
  top: 123px;
  left: 411px;
  width: 461px;
  height: 70px;
  display: flex;
  &:hover {
    display: flex;
    width: 461px;
    height: 70px;
  }
`;
const FrameChild = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  display: flex;
  width: auto;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
  }
`;
const UnionIcon = styled.img`
  height: 53.9px;
  width: 90px;
  position: relative;
  background-color: var(--color-gold-100);
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 90px;
    height: 53.9px;
  }
`;
const FrameItem = styled.div`
  align-self: stretch;
  flex: 1;
  position: relative;
  border-radius: var(--br-mini);
  background-color: var(--color-linen-100);
  border: 3px solid var(--color-tomato-100);
  box-sizing: border-box;
  display: flex;
  width: auto;
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    align-self: stretch;
    width: auto;
    flex: 1;
    border-radius: var(--br-mini);
    border: 3px solid var(--color-tomato-100);
    box-sizing: border-box;
  }
`;
const RectangleWrapper = styled.div`
  height: 62px;
  width: 445px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 445px;
    height: 62px;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-11xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const UnionIcon1 = styled.img`
  height: 53.9px;
  width: 90px;
  position: relative;
  object-fit: contain;
  background-color: var(--color-gold-100);
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 90px;
    height: 53.9px;
  }
`;
const UnionParent = styled.div`
  width: 958px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 958px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: space-between;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const FrameDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
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
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const FrameInner = styled.img`
  width: 37px;
  height: 37px;
  position: absolute;
  margin: 0 !important;
  bottom: 12px;
  left: 494px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameGroup = styled.header`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-22xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 1280px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-22xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const FrameParentRoot = styled.section`
  align-self: stretch;
  height: 193px;
  position: relative;
  max-width: 100%;
  display: flex;
  width: auto;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-tomato-100);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 193px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    height: auto;
    min-height: 193;
  }
`;

const FrameComponent13 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onUnionClick = useCallback(() => {
    navigate("/p1");
  }, [navigate]);

  const onUnionImageClick = useCallback(() => {
    navigate("/p3");
  }, [navigate]);

  return (
    <FrameParentRoot className={className}>
      <FrameWrapper>
        <FrameContainer>
          <Wrapper>
            <H>
              <Span>용감한 제리</Span>
              <Span1>의 그림</Span1>
            </H>
          </Wrapper>
        </FrameContainer>
      </FrameWrapper>
      <FrameGroup>
        <FrameDiv>
          <UnionParent>
            <UnionIcon
              loading="lazy"
              alt=""
              src="/union.svg"
              onClick={onUnionClick}
            />
            <RectangleWrapper>
              <FrameItem />
            </RectangleWrapper>
            <UnionIcon1
              loading="lazy"
              alt=""
              src="/union1@2x.png"
              onClick={onUnionImageClick}
            />
          </UnionParent>
        </FrameDiv>
        <FrameInner loading="lazy" alt="" src="/group-2502.svg" />
      </FrameGroup>
    </FrameParentRoot>
  );
};

FrameComponent13.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent13;
