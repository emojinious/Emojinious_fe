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
const UnionIcon = styled.img`
  align-self: stretch;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
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
  height: 56.9px;
  width: 104px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) var(--padding-sm) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 104px;
    height: 56.9px;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-10xs) var(--padding-sm) 0px 0px;
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
  top: 11.7px;
  left: 110px;
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
const FrameItem = styled.img`
  position: absolute;
  top: 11px;
  left: 61.5px;
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const Parent = styled.div`
  position: absolute;
  width: 445px;
  top: 5px;
  right: 8px;
  left: 8px;
  border-radius: var(--br-mini);
  background-color: var(--color-linen-100);
  border: 3px solid var(--color-deepskyblue-100);
  box-sizing: border-box;
  height: 60px;
  white-space: nowrap;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 445px;
    height: 60px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-mini);
    border: 3px solid var(--color-deepskyblue-100);
    box-sizing: border-box;
    white-space: nowrap;
  }
`;
const GroupDiv = styled.div`
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
const FrameContainer = styled.div`
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
const Shape = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-lg);
  background-color: var(--color-tomato-100);
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
  }
`;
const B = styled.b`
  position: absolute;
  top: 21px;
  left: 24px;
  display: flex;
  width: 56px;
  height: 33px;
  font-weight: 700;
  cursor: pointer;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    text-align: center;
    color: var(--color-white);
    display: flex;
    width: 56px;
    height: 33px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const ShapeParent = styled.div`
  height: 70px;
  width: 103px;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  font-size: var(--font-size-6xl);
  color: var(--color-white);
  &:hover {
    display: flex;
    width: 103px;
    height: 70px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameGroup = styled.div`
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
const FrameWrapper = styled.div`
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
const FrameParentRoot = styled.header`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-19xl);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-deepskyblue-100);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-19xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 675px) {
    gap: var(--gap-lgi);
  }
`;

const FrameComponent17 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onUnionClick = useCallback(() => {
    navigate("/p4");
  }, [navigate]);

  const onShapeClick = useCallback(() => {
    navigate("/score");
  }, [navigate]);

  return (
    <FrameParentRoot className={className}>
      <FrameChild alt="" src="/group-138.svg" />
      <FrameWrapper>
        <FrameGroup>
          <UnionWrapper>
            <UnionIcon
              loading="lazy"
              alt=""
              src="/union.svg"
              onClick={onUnionClick}
            />
          </UnionWrapper>
          <FrameContainer>
            <GroupDiv>
              <Parent>
                <H>
                  <Span>난괜찮아띵링링</Span>
                  <Span1>의 그림</Span1>
                </H>
                <FrameItem loading="lazy" alt="" src="/group-176.svg" />
              </Parent>
            </GroupDiv>
          </FrameContainer>
          <ShapeParent>
            <Shape onClick={onShapeClick} />
            <B onClick={onShapeClick}>결과</B>
          </ShapeParent>
        </FrameGroup>
      </FrameWrapper>
    </FrameParentRoot>
  );
};

FrameComponent17.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent17;
