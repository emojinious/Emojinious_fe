import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonIcons = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-gainsboro-200);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const ButtonElementsChild = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const ButtonElements = styled.div`
  height: 60px;
  width: 60px;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 60px;
    height: 60px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-200);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-xs);
  }
`;
const B = styled.b`position: absolute;
  top: 12.9px;
  left: 42.5px;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: center;
  width: 107px;
  height: 27px;
  font-weight: 700;
  z-index: 3;
  &:hover {
  font-weight: 700;
  font-family: var(--font-inter);
  font-size: var(--font-size-xl);
  text-align: center;
  color: var(--color-white);
  display: flex;
  width: 107px;
  height: 27px;
  }
  color: ${(p) => p.propColor}
  width: ${(p) => p.propWidth}
  min-width: ${(p) => p.propMinWidth}
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: 1.9px solid var(--color-lightgray);
  padding: 0;
  background-color: var(--color-tomato-200);
  position: absolute;
  width: 192.1px;
  top: 4.1px;
  right: 3.4px;
  left: 3.5px;
  border-radius: 9.47px;
  box-sizing: border-box;
  height: 49.7px;
  white-space: nowrap;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 192.1px;
    height: 49.7px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: 9.47px;
    border: 1.9px solid var(--color-linen-100);
    box-sizing: border-box;
    white-space: nowrap;
  }
  &:active {
    background-color: var(--color-tomato-200);
    border: 1.9px solid var(--color-lightgray);
    box-sizing: border-box;
  }
  background-color: ${(p) => p.propBackgroundColor2};
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 99.5px);
  border-radius: 11.37px;
  background-color: var(--color-tomato-100);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 11.37px;
  }
  background-color: ${(p) => p.propBackgroundColor};
`;
const ButtonElementsChild1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const RectangleParent = styled.div`
  align-self: stretch;
  height: 58px;
  position: relative;
  display: flex;
  width: auto;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 58px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) var(--padding-sm) 0px 0px;
  box-sizing: border-box;
  min-width: 138;
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
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-12xs) var(--padding-sm) 0px 0px;
    box-sizing: border-box;
    min-width: 138;
  }
`;
const FrameItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-200);
  width: 102px;
  height: 58px;
  display: flex;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 102px;
    height: 58px;
    border-radius: var(--br-xs);
  }
  height: ${(p) => p.propHeight};
`;
const FrameInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-200);
  width: 102px;
  height: 58px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 102px;
    height: 58px;
    border-radius: var(--br-xs);
  }
  height: ${(p) => p.propHeight1};
`;
const Div = styled.div`
  flex: 1;
  position: relative;
  font-weight: 900;
  display: flex;
  height: auto;
  z-index: 3;
  &:hover {
    font-weight: 900;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    text-align: center;
    color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const DotsContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-tomato-100);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-8xs) var(--padding-mini);
  box-sizing: border-box;
  height: 100%;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 2;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-sm) var(--padding-8xs) var(--padding-mini);
    box-sizing: border-box;
  }
  background-color: ${(p) => p.propBackgroundColor4};
`;
const RectangleGroup = styled.div`
  align-self: stretch;
  height: 60px;
  position: relative;
  display: flex;
  width: auto;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 60px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const BottomContainer = styled.div`
  width: 102px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 102px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const ButtonElementsParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  width: auto;
  height: auto;
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-6xl);
  color: var(--color-linen-100);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-5xl);
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;

const GroupComponent = ({
  className = "",
  group257,
  propBackgroundColor,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
  prop,
  propColor,
  propWidth,
  propMinWidth,
  propHeight,
  propHeight1,
  propBackgroundColor4,
  propBackgroundColor5,
  prop1,
}) => {
  return (
    <ButtonElementsParentRoot className={className}>
      <ButtonElements>
        <ButtonIcons />
        <ButtonElementsChild loading="lazy" alt="" src={group257} />
      </ButtonElements>
      <FrameWrapper>
        <RectangleParent>
          <FrameChild />
          <ButtonElementsChild1>
            <GroupDiv propBackgroundColor={propBackgroundColor}>
              <Wrapper propBackgroundColor2={propBackgroundColor2}>
                <B
                  propColor={propColor}
                  propWidth={propWidth}
                  propMinWidth={propMinWidth}
                >
                  {prop}
                </B>
              </Wrapper>
            </GroupDiv>
          </ButtonElementsChild1>
        </RectangleParent>
      </FrameWrapper>
      <BottomContainer>
        <RectangleGroup>
          <FrameItem propHeight={propHeight} />
          <FrameInner propHeight1={propHeight1} />
          <DotsContainer propBackgroundColor4={propBackgroundColor4}>
            <Div>{prop1}</Div>
          </DotsContainer>
        </RectangleGroup>
      </BottomContainer>
    </ButtonElementsParentRoot>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  group257: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propBackgroundColor2: PropTypes.any,
  propBackgroundColor3: PropTypes.any,
  propColor: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propHeight: PropTypes.any,
  propHeight1: PropTypes.any,
  propBackgroundColor4: PropTypes.any,
  propBackgroundColor5: PropTypes.any,
};

export default GroupComponent;
