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
  width: 90px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 90px;
    height: 56.9px;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const Span = styled.span`
  color: ${(p) => p.unionIconColor};
`;
const Span1 = styled.span`
  color: var(--color-darkslategray-100);
`;
const H = styled.h3`
  margin: 0;
  position: absolute;
  top: 11.7px;
  left: 120px;
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
  left: ${(p) => p.frameDivLeft};
`;
const FrameItem = styled.img`
  position: absolute;
  top: 11px;
  left: 72px;
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 37px;
    height: 37px;
  }
  left: ${(p) => p.propLeft};
`;
const Parent = styled.div`
  position: absolute;
  width: 445px;
  top: 5px;
  right: 8px;
  left: 8px;
  border-radius: var(--br-mini);
  background-color: var(--color-linen-100);
  border: 3px solid var(--color-lightpink-100);
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
    border: 3px solid var(--color-lightpink-100);
    box-sizing: border-box;
    white-space: nowrap;
  }
  border: ${(p) => p.spanBorder};
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
const UnionIcon1 = styled.img`
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
  color: var(--color-lightpink-100);
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

const FrameComponent5 = ({
  className = "",
  group138,
  spanBorder,
  groupIconBorder,
  frameDivLeft,
  prop,
  unionIconColor,
  group250,
  propLeft,
}) => {
  const navigate = useNavigate();

  const onUnionClick = useCallback(() => {
    navigate("/p2");
  }, [navigate]);

  const onUnionImageClick = useCallback(() => {
    navigate("/p5");
  }, [navigate]);

  return (
    <FrameParentRoot className={className}>
      <FrameChild alt="" src={group138} />
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
              <Parent spanBorder={spanBorder}>
                <H frameDivLeft={frameDivLeft}>
                  <Span unionIconColor={unionIconColor}>{prop}</Span>
                  <Span1>의 그림</Span1>
                </H>
                <FrameItem
                  loading="lazy"
                  alt=""
                  src={group250}
                  propLeft={propLeft}
                />
              </Parent>
            </GroupDiv>
          </FrameContainer>
          <UnionWrapper>
            <UnionIcon1
              loading="lazy"
              alt=""
              src="/union1@2x.png"
              onClick={onUnionImageClick}
            />
          </UnionWrapper>
        </FrameGroup>
      </FrameWrapper>
    </FrameParentRoot>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
  group138: PropTypes.string,
  prop: PropTypes.string,
  group250: PropTypes.string,

  /** Style props */
  spanBorder: PropTypes.any,
  groupIconBorder: PropTypes.any,
  frameDivLeft: PropTypes.any,
  unionIconColor: PropTypes.any,
  propLeft: PropTypes.any,
};

export default FrameComponent5;
