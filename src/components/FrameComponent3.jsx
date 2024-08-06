import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.div`height: 25px;
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
  width: ${(p) => p.propWidth1}
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
const Parent = styled.div`
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
    font-size: var(--font-size-xl);
    text-align: center;
    color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-tomato-100);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 100%;
    height: 100%;
  }
  background-color: ${(p) => p.propBackgroundColor2};
`;
const B2 = styled.b`
  position: absolute;
  top: 6px;
  left: 2px;
  display: flex;
  width: 29.2px;
  height: 15px;
  font-weight: 700;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-smi);
    text-align: center;
    color: var(--color-white);
    display: flex;
    width: 29.2px;
    height: 15px;
  }
  color: ${(p) => p.propColor1};
`;
const EllipseParent = styled.div`
  height: 27.5px;
  width: 33px;
  position: absolute;
  margin: 0 !important;
  top: -14px;
  right: -8px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  font-size: var(--font-size-smi);
  color: var(--color-white);
  &:hover {
    display: flex;
    width: 33px;
    height: 27.5px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const Group = styled.div`
  align-self: stretch;
  border-radius: var(--br-lg);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-3xs) var(--padding-4xs);
  box-sizing: border-box;
  position: relative;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-darkslategray-100);
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
    padding: var(--padding-5xs) var(--padding-3xs) var(--padding-4xs);
    box-sizing: border-box;
  }
`;
const FrameDiv = styled.div`
  width: 104px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-12xs);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-linen-100);
  &:hover {
    display: flex;
    width: 104px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-12xs);
    box-sizing: border-box;
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
const B3 = styled.b`
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
const FrameWrapper1 = styled.div`
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
const FrameParentRoot = styled.div`width: 469px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-10xs);
  box-sizing: border-box;
  gap: var(--gap-8xs);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-darkslategray-100);
  font-family: var(--font-inter);
  &:hover {
  display: flex;
  width: 469px;
  height: auto;
  flex-direction: column;
  gap: var(--gap-8xs);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  padding: 0px 0px var(--padding-10xs);
  box-sizing: border-box;
  max-width: 100%;
  }
  width: ${(p) => p.propWidth}
  padding: ${(p) => p.propPadding}
  align-self: ${(p) => p.propAlignSelf}
`;

const FrameComponent3 = ({
  className = "",
  propWidth,
  propPadding,
  propAlignSelf,
  prop,
  propWidth1,
  propMinWidth,
  propPadding1,
  group178,
  propBackgroundColor,
  propBackgroundColor1,
  prop1,
  propFlex,
  propColor,
  propDisplay,
  propMinWidth1,
  prop2,
  propBackgroundColor2,
  prop3,
  propColor1,
  prop4,
}) => {
  return (
    <FrameParentRoot
      propWidth={propWidth}
      propPadding={propPadding}
      propAlignSelf={propAlignSelf}
      className={className}
    >
      <FrameGroup>
        <Parent>
          <Div propWidth1={propWidth1} propMinWidth={propMinWidth}>
            {prop}
          </Div>
          <FrameWrapper propPadding1={propPadding1}>
            <FrameChild loading="lazy" alt="" src={group178} />
          </FrameWrapper>
        </Parent>
        <FrameContainer>
          <Wrapper propBackgroundColor={propBackgroundColor}>
            <B
              propFlex={propFlex}
              propColor={propColor}
              propDisplay={propDisplay}
              propMinWidth1={propMinWidth1}
            >
              {prop1}
            </B>
          </Wrapper>
        </FrameContainer>
        <FrameDiv>
          <Group>
            <B1>{prop2}</B1>
            <EllipseParent>
              <FrameItem propBackgroundColor2={propBackgroundColor2} />
              <B2 propColor1={propColor1}>{prop3}</B2>
            </EllipseParent>
          </Group>
        </FrameDiv>
      </FrameGroup>
      <FrameWrapper1>
        <Container1>
          <B3>{prop4}</B3>
        </Container1>
      </FrameWrapper1>
    </FrameParentRoot>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  group178: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,
  prop4: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propWidth1: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propFlex: PropTypes.any,
  propColor: PropTypes.any,
  propDisplay: PropTypes.any,
  propMinWidth1: PropTypes.any,
  propBackgroundColor2: PropTypes.any,
  propColor1: PropTypes.any,
};

export default FrameComponent3;
