import styled from "styled-components";
import PropTypes from "prop-types";

const Empty = styled.div`height: 25px;
  width: 14px;
  position: relative;
  font-weight: 600;
  display: flex;
  flex-shrink: 0;
  z-index: 1;
  &:hover {
  font-weight: 600;
  font-family: var(--font-inter);
  font-size: var(--font-size-mini);
  text-align: left;
  color: var(--color-darkslategray-100);
  display: flex;
  width: 14px;
  height: 25px;
  }
  width: ${(p) => p.propWidth}
  min-width: ${(p) => p.propMinWidth}
`;
const FrameChild = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 50px;
    height: 50px;
  }
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
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
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-8xs) 0px 0px;
    box-sizing: border-box;
  }
  padding: ${(p) => p.propPadding1};
`;
const EmptyParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  width: auto;
  align-self: unset;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: row;
    gap: var(--gap-7xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const B = styled.b`flex: 1;
  position: relative;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: center;
  font-weight: 700;
  height: auto;
  z-index: 2;
  &:hover {
  font-weight: 700;
  font-family: var(--font-inter);
  font-size: var(--font-size-xl);
  text-align: center;
  color: var(--color-white);
  display: flex;
  flex: 1;
  height: auto;
  }
  flex: ${(p) => p.propFlex}
  color: ${(p) => p.propColor}
  display: ${(p) => p.propDisplay}
  min-width: ${(p) => p.propMinWidth1}
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-4xs) var(--padding-48xl) var(--padding-8xs);
  background-color: var(--color-tomato-200);
  align-self: stretch;
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  white-space: nowrap;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-lg);
    padding: var(--padding-4xs) var(--padding-48xl) var(--padding-8xs);
    box-sizing: border-box;
    white-space: nowrap;
  }
  &:active {
    background-color: var(--color-tomato-200);
  }
  background-color: ${(p) => p.propBackgroundColor};
`;
const FrameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  min-width: 157;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-12xs);
    box-sizing: border-box;
    min-width: 157;
  }
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-8xl);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-8xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const B1 = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  font-weight: 700;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-3xs);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const Container1 = styled.div`
  flex: 1;
  border-radius: var(--br-5xs);
  background-color: var(--color-linen-100);
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
    border-radius: var(--br-5xs);
    white-space: nowrap;
  }
`;
const FrameDiv = styled.div`
  width: 93px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-3xs);
  &:hover {
    display: flex;
    width: 93px;
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
const FrameParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs);
  box-sizing: border-box;
  gap: var(--gap-8xs);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-darkslategray-100);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-8xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-7xs);
    box-sizing: border-box;
  }
  padding: ${(p) => p.propPadding};
`;

const FrameComponent1 = ({
  className = "",
  propPadding,
  empty,
  propWidth,
  propMinWidth,
  propPadding1,
  group178,
  propBackgroundColor,
  propBackgroundColor1,
  prop,
  propFlex,
  propColor,
  propDisplay,
  propMinWidth1,
  prop1,
}) => {
  return (
    <FrameParentRoot propPadding={propPadding} className={className}>
      <FrameGroup>
        <EmptyParent>
          <Empty propWidth={propWidth} propMinWidth={propMinWidth}>
            {empty}
          </Empty>
          <FrameWrapper propPadding1={propPadding1}>
            <FrameChild loading="lazy" alt="" src={group178} />
          </FrameWrapper>
        </EmptyParent>
        <FrameContainer>
          <Wrapper propBackgroundColor={propBackgroundColor}>
            <B
              propFlex={propFlex}
              propColor={propColor}
              propDisplay={propDisplay}
              propMinWidth1={propMinWidth1}
            >
              {prop}
            </B>
          </Wrapper>
        </FrameContainer>
      </FrameGroup>
      <FrameDiv>
        <Container1>
          <B1>{prop1}</B1>
        </Container1>
      </FrameDiv>
    </FrameParentRoot>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
  empty: PropTypes.string,
  group178: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propFlex: PropTypes.any,
  propColor: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
};

export default FrameComponent1;
