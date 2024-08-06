import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.div`
  position: absolute;
  top: 2px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-darkgray);
  width: 35px;
  height: 35px;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-darkgray);
    display: flex;
    width: 35px;
    height: 35px;
  }
  background-color: ${(p) => p.propBackgroundColor};
`;
const Placeholder = styled.div`
  position: absolute;
  top: 0px;
  left: 8px;
  font-weight: 600;
  display: flex;
  min-width: 20;
  height: auto;
  z-index: 5;
  &:hover {
    font-weight: 600;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl-7);
    text-align: left;
    color: var(--color-white);
    display: flex;
    height: auto;
    min-width: 20;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-6xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const EllipseParent = styled.div`
  align-self: stretch;
  height: 37px;
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
    height: 37px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameWrapper = styled.div`
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-2xs);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 35px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-2xs);
    box-sizing: border-box;
  }
`;
const FrameItem = styled.img`
  height: 60px;
  width: 60px;
  position: relative;
  min-height: 60;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 60px;
    height: 60px;
    min-height: 60;
  }
`;
const B = styled.b`position: absolute;
  top: 14.7px;
  left: 42.5px;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: center;
  width: 107px;
  height: 27px;
  font-weight: 700;
  z-index: 5;
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
  top: 4.3px;
  right: 3.4px;
  left: 3.5px;
  border-radius: 9.47px;
  box-sizing: border-box;
  height: 51.4px;
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
    height: 51.4px;
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
  background-color: ${(p) => p.propBackgroundColor3};
`;
const FrameWrapper1 = styled.div`
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
  background-color: ${(p) => p.propBackgroundColor1};
`;
const GroupDiv = styled.div`
  align-self: stretch;
  height: 60px;
  position: relative;
  display: flex;
  width: auto;
  z-index: 4;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 60px;
  }
`;
const FrameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-2xs) 0px 0px;
  box-sizing: border-box;
  min-width: 136;
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
    padding: 0px var(--padding-2xs) 0px 0px;
    box-sizing: border-box;
    min-width: 136;
  }
`;
const Div = styled.div`
  flex: 1;
  position: relative;
  font-weight: 900;
  display: flex;
  height: auto;
  z-index: 5;
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
const Container1 = styled.div`
  width: 102px;
  border-radius: var(--br-xs);
  background-color: var(--color-tomato-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-mini) var(--padding-8xs) var(--padding-sm);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 4;
  text-align: center;
  font-size: var(--font-size-6xl);
  color: var(--color-linen-100);
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 102px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-mini) var(--padding-8xs) var(--padding-sm);
    box-sizing: border-box;
  }
  background-color: ${(p) => p.propBackgroundColor5};
`;
const FrameParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap-5xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const JerryContainerInnerRoot = styled.div`
  width: 484px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-11xs);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-11xl-7);
  color: var(--color-white);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    width: 484px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px var(--padding-11xs);
    box-sizing: border-box;
    max-width: 100%;
  }
`;

const FrameComponent6 = ({
  className = "",
  propBackgroundColor,
  placeholder,
  group186,
  propBackgroundColor1,
  propBackgroundColor2,
  propBackgroundColor3,
  propBackgroundColor4,
  prop,
  propColor,
  propWidth,
  propMinWidth,
  propBackgroundColor5,
  propBackgroundColor6,
  prop1,
}) => {
  return (
    <JerryContainerInnerRoot className={className}>
      <FrameParent>
        <FrameWrapper>
          <EllipseParent>
            <FrameChild propBackgroundColor={propBackgroundColor} />
            <Placeholder>{placeholder}</Placeholder>
          </EllipseParent>
        </FrameWrapper>
        <FrameItem loading="lazy" alt="" src={group186} />
        <FrameContainer>
          <GroupDiv>
            <FrameWrapper1 propBackgroundColor1={propBackgroundColor1}>
              <Wrapper propBackgroundColor3={propBackgroundColor3}>
                <B
                  propColor={propColor}
                  propWidth={propWidth}
                  propMinWidth={propMinWidth}
                >
                  {prop}
                </B>
              </Wrapper>
            </FrameWrapper1>
          </GroupDiv>
        </FrameContainer>
        <Container1 propBackgroundColor5={propBackgroundColor5}>
          <Div>{prop1}</Div>
        </Container1>
      </FrameParent>
    </JerryContainerInnerRoot>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  group186: PropTypes.string,
  prop: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  propBackgroundColor: PropTypes.any,
  propBackgroundColor1: PropTypes.any,
  propBackgroundColor2: PropTypes.any,
  propBackgroundColor3: PropTypes.any,
  propBackgroundColor4: PropTypes.any,
  propColor: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propBackgroundColor5: PropTypes.any,
  propBackgroundColor6: PropTypes.any,
};

export default FrameComponent6;
