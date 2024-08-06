import styled from "styled-components";
import PropTypes from "prop-types";

const VectorIcon = styled.img`
  position: absolute;
  height: 50.5px;
  width: 65.1px;
  top: 41.88%;
  right: 41.5%;
  bottom: 41.66%;
  left: 41.68%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  background-color: var(--color-darkgray);
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-darkgray);
    display: flex;
    width: 65.1px;
    height: 50.5px;
  }
`;
const Image98Icon = styled.img`
  position: absolute;
  height: 306.5px;
  top: 0.2px;
  bottom: 0.1px;
  left: 20.9px;
  max-height: 100%;
  width: 345.7px;
  object-fit: cover;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 345.7px;
    height: 306.5px;
  }
`;
const VectorParent = styled.div`
  position: absolute;
  top: 16.8px;
  left: 16px;
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-100);
  width: 387px;
  height: 306.8px;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-gainsboro-100);
    display: flex;
    width: 387px;
    height: 306.8px;
    border-radius: var(--br-xs);
  }
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  height: 340.5px;
  position: relative;
  border-radius: var(--br-xs);
  background-color: var(--color-mediumpurple-200);
  display: flex;
  width: auto;
  z-index: 1;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    align-self: stretch;
    width: auto;
    height: 340.5px;
    border-radius: var(--br-xs);
  }
  background-color: ${(p) => p.propBackgroundColor};
`;
const B = styled.b`
  position: absolute;
  top: 27.2px;
  left: 115.6px;
  display: flex;
  width: 173.2px;
  height: 33px;
  font-weight: 700;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    width: 173.2px;
    height: 33px;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  width: 404.5px;
  top: 6.8px;
  right: 7.2px;
  left: 7.3px;
  border-radius: var(--br-mini);
  background-color: var(--color-linen-100);
  border: 3px solid var(--color-mediumpurple-200);
  box-sizing: border-box;
  height: 81.4px;
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
    width: 404.5px;
    height: 81.4px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-mini);
    border: 3px solid var(--color-mediumpurple-200);
    box-sizing: border-box;
    white-space: nowrap;
  }
  border: ${(p) => p.propBorder};
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 209.5px);
  border-radius: var(--br-lg);
  background-color: var(--color-linen-100);
  border: 1.5px solid var(--color-mediumpurple-200);
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
    border: 1.5px solid var(--color-mediumpurple-200);
    box-sizing: border-box;
  }
`;
const FrameContainer = styled.div`
  align-self: stretch;
  height: 95px;
  position: relative;
  display: flex;
  width: auto;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 95px;
  }
`;
const FrameParentRoot = styled.div`
  width: 419px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl-5);
  min-width: 419;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-6xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    width: 419px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-6xl-5);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 419;
    max-width: 100%;
  }
  @media screen and (max-width: 1050px) {
    flex: 1;
  }
  @media screen and (max-width: 750px) {
    min-width: 100%;
  }
`;

const FrameComponent = ({
  className = "",
  propBackgroundColor,
  propBackgroundColor1,
  image98,
  propBorder,
  propBorder1,
}) => {
  return (
    <FrameParentRoot className={className}>
      <FrameWrapper propBackgroundColor={propBackgroundColor}>
        <VectorParent>
          <VectorIcon loading="lazy" alt="" src="/vector.svg" />
          <Image98Icon alt="" src={image98} />
        </VectorParent>
      </FrameWrapper>
      <FrameContainer>
        <GroupDiv>
          <Wrapper propBorder={propBorder}>
            <B>차가운 청년</B>
          </Wrapper>
        </GroupDiv>
      </FrameContainer>
    </FrameParentRoot>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
  image98: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propBorder: PropTypes.any,
  propBorder1: PropTypes.any,
};

export default FrameComponent;
