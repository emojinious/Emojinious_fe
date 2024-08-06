import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

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
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: var(--color-linen-100);
  border: 3px solid var(--color-mediumpurple-200);
  box-sizing: border-box;
  width: 445px;
  height: 60px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 445px;
    height: 60px;
    border-radius: var(--br-mini);
    border: 3px solid var(--color-mediumpurple-200);
    box-sizing: border-box;
  }
`;
const Span = styled.span``;
const Span1 = styled.span`
  color: var(--color-darkslategray-100);
`;
const H = styled.h3`
  margin: 0;
  position: absolute;
  top: 13px;
  left: 130px;
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
`;
const RectangleParent = styled.div`
  position: absolute;
  width: 445px;
  top: 5px;
  right: 8px;
  left: 8px;
  height: 93px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 445px;
    height: 93px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameWrapper = styled.div`
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
const GroupDiv = styled.div`
  height: 70px;
  width: 461px;
  position: relative;
  max-width: 100%;
  display: flex;
  &:hover {
    display: flex;
    width: 461px;
    height: 70px;
    max-width: 100%;
  }
`;
const UnionIcon = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  background-color: var(--color-gold-100);
  display: flex;
  width: auto;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    align-self: stretch;
    width: auto;
    flex: 1;
  }
`;
const UnionWrapper = styled.div`
  height: 58.9px;
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 90px;
    height: 58.9px;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-8xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameContainer = styled.div`
  width: 710px;
  margin: 0 !important;
  position: absolute;
  top: -17px;
  right: -585px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 710px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: space-between;
    transform: rotate(0deg);
  }
`;
const FrameInner = styled.img`
  height: 37px;
  width: 37px;
  position: relative;
  object-fit: cover;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
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
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameWrapper1 = styled.div`
  width: 1031px;
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
    width: 1031px;
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
const FrameParentRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-35xl);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-mediumpurple-200);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-35xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-8xl);
  }
`;

const FrameComponent11 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onUnionImageClick = useCallback(() => {
    navigate("/-2");
  }, [navigate]);

  return (
    <FrameParentRoot className={className}>
      <FrameChild alt="" src="/group-138.svg" />
      <FrameWrapper1>
        <FrameGroup>
          <FrameContainer>
            <GroupDiv>
              <FrameWrapper>
                <RectangleParent>
                  <FrameItem />
                  <H>
                    <Span>왕자 탄 백마</Span>
                    <Span1>의 그림</Span1>
                  </H>
                </RectangleParent>
              </FrameWrapper>
            </GroupDiv>
            <UnionWrapper>
              <UnionIcon
                loading="lazy"
                alt=""
                src="/union1@2x.png"
                onClick={onUnionImageClick}
              />
            </UnionWrapper>
          </FrameContainer>
          <FrameInner loading="lazy" alt="" src="/group-179@2x.png" />
        </FrameGroup>
      </FrameWrapper1>
    </FrameParentRoot>
  );
};

FrameComponent11.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent11;
