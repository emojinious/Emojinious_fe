import styled from "styled-components";
import PropTypes from "prop-types";

const Div = styled.div`
  height: 25px;
  position: relative;
  font-weight: 600;
  display: flex;
  min-width: 14;
  width: auto;
  align-self: unset;
  z-index: 2;
  &:hover {
    font-weight: 600;
    font-family: var(--font-inter);
    font-size: var(--font-size-mini);
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: 25px;
    min-width: 14;
  }
`;
const FrameChild = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  object-fit: cover;
  display: flex;
  z-index: 2;
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
  padding: var(--padding-2xs) 0px 0px;
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
    padding: var(--padding-2xs) 0px 0px;
    box-sizing: border-box;
  }
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
const B = styled.b`
  position: relative;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-darkslategray-100);
  text-align: center;
  min-width: 105;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 3;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 105;
  }
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-4xs) var(--padding-49xl) var(--padding-8xs);
  background-color: var(--color-goldenrod-200);
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
  z-index: 2;
  &:hover {
    background-color: var(--color-gold-100);
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
    padding: var(--padding-4xs) var(--padding-49xl) var(--padding-8xs);
    box-sizing: border-box;
    white-space: nowrap;
  }
  &:active {
    background-color: var(--color-goldenrod-200);
  }
`;
const FrameWrapper1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs);
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
    padding: 0px 0px var(--padding-10xs);
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
  z-index: 3;
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
  background-color: var(--color-gold-100);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const B2 = styled.b`
  position: absolute;
  top: 6px;
  left: 2px;
  display: flex;
  width: 29.2px;
  height: 15px;
  font-weight: 700;
  z-index: 5;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-smi);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    width: 29.2px;
    height: 15px;
  }
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
  color: var(--color-darkslategray-100);
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
  z-index: 2;
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
const FrameWrapper2 = styled.div`
  width: 104px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-10xs);
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
    padding: 0px 0px var(--padding-10xs);
    box-sizing: border-box;
  }
`;
const FrameDiv = styled.div`
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
  z-index: 3;
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
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 2;
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
  }
`;
const FrameWrapper3 = styled.div`
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
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  width: auto;
  height: auto;
  transform: rotate(0deg);
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
  }
`;
const Div1 = styled.div`
  height: 25px;
  width: 14px;
  position: relative;
  font-weight: 600;
  display: flex;
  flex-shrink: 0;
  z-index: 2;
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
`;
const FrameInner = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const GroupIcon = styled.img`
  position: absolute;
  top: 17.9px;
  left: 8.2px;
  width: 11.5px;
  height: 11.5px;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 11.5px;
    height: 11.5px;
  }
`;
const FrameChild1 = styled.img`
  position: absolute;
  top: 17.9px;
  left: 30.4px;
  width: 11.5px;
  height: 11.5px;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 11.5px;
    height: 11.5px;
  }
`;
const PolygonIcon = styled.img`
  position: absolute;
  top: 26.3px;
  left: 17px;
  border-radius: 1.81px;
  width: 16.1px;
  height: 13px;
  background-color: var(--color-lightpink-100);
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 16.1px;
    height: 13px;
    border-radius: 1.81px;
  }
`;
const GroupDiv = styled.div`
  align-self: stretch;
  height: 50px;
  position: relative;
  display: flex;
  width: auto;
  z-index: 2;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 50px;
  }
`;
const ShapeContentInner = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) 0px 0px;
  box-sizing: border-box;
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
    padding: var(--padding-sm) 0px 0px;
    box-sizing: border-box;
  }
`;
const ShapeContent = styled.div`
  width: 70px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 70px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-7xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const B4 = styled.b`
  flex: 1;
  position: relative;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: center;
  font-weight: 700;
  height: auto;
  z-index: 3;
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
`;
const Frame16 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-4xs) var(--padding-40xl) var(--padding-8xs);
  background-color: var(--color-steelblue);
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
  z-index: 2;
  &:hover {
    background-color: var(--color-deepskyblue-100);
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
    padding: var(--padding-4xs) var(--padding-40xl) var(--padding-8xs);
    box-sizing: border-box;
    white-space: nowrap;
  }
  &:active {
    background-color: var(--color-steelblue);
  }
`;
const FrameWrapper4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-9xs);
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
    padding: 0px 0px var(--padding-9xs);
    box-sizing: border-box;
    min-width: 157;
  }
`;
const ShapeContentParent = styled.div`
  width: 338px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-8xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 338px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-8xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-deepskyblue-100);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const Wrapper1 = styled.div`
  width: 104px;
  margin: 0 !important;
  position: absolute;
  bottom: -34px;
  left: -81px;
  border-radius: var(--br-lg);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-3xs) var(--padding-4xs);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 2;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 104px;
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
const B5 = styled.b`
  flex: 1;
  position: relative;
  font-size: var(--font-size-smi);
  display: flex;
  color: var(--color-white);
  font-weight: 700;
  height: auto;
  z-index: 5;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-smi);
    text-align: center;
    color: var(--color-white);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const FrameParent = styled.div`
  position: absolute;
  top: 6px;
  left: 2px;
  width: 29.2px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 29.2px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const EllipseGroup = styled.div`
  align-self: stretch;
  height: 27.5px;
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
    height: 27.5px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameWrapper5 = styled.div`
  width: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-linen-100);
  &:hover {
    display: flex;
    width: 33px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-8xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 100%;
  gap: var(--gap-xl);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: space-between;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 675px) {
    flex-wrap: wrap;
  }
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-5xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const B6 = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  min-width: 73;
  font-weight: 700;
  height: auto;
  z-index: 3;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-3xs);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    flex: 1;
    height: auto;
    min-width: 73;
  }
`;
const FrameParentRoot = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  max-width: 100%;
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
    max-width: 100%;
  }
`;

const FrameComponent4 = ({ className = "", group177 }) => {
  return (
    <FrameParentRoot className={className}>
      <FrameGroup>
        <FrameContainer>
          <FrameDiv>
            <Parent>
              <Div>4</Div>
              <FrameWrapper>
                <FrameChild loading="lazy" alt="" src={group177} />
              </FrameWrapper>
            </Parent>
            <FrameWrapper1>
              <Wrapper>
                <B>시크한 뽀이</B>
              </Wrapper>
            </FrameWrapper1>
            <FrameWrapper2>
              <Group>
                <B1>3.6</B1>
                <EllipseParent>
                  <FrameItem />
                  <B2>+3</B2>
                </EllipseParent>
              </Group>
            </FrameWrapper2>
          </FrameDiv>
          <FrameWrapper3>
            <Container1>
              <B3>이것뭐예요~?</B3>
            </Container1>
          </FrameWrapper3>
        </FrameContainer>
        <FrameParent1>
          <ShapeContentParent>
            <ShapeContent>
              <Div1>5</Div1>
              <ShapeContentInner>
                <GroupDiv>
                  <FrameInner alt="" src="/group-286.svg" />
                  <GroupIcon alt="" src="/group-1691.svg" />
                  <FrameChild1 loading="lazy" alt="" src="/group-1701.svg" />
                  <PolygonIcon alt="" src="/interactive-shape.svg" />
                </GroupDiv>
              </ShapeContentInner>
            </ShapeContent>
            <FrameWrapper4>
              <Frame16>
                <B4>{`시퍼런 남자 `}</B4>
              </Frame16>
            </FrameWrapper4>
          </ShapeContentParent>
          <FrameWrapper5>
            <EllipseGroup>
              <EllipseDiv />
              <FrameParent>
                <Wrapper1>
                  <B1>1.2</B1>
                </Wrapper1>
                <B5>+2</B5>
              </FrameParent>
            </EllipseGroup>
          </FrameWrapper5>
        </FrameParent1>
      </FrameGroup>
      <FrameWrapper3>
        <Container1>
          <B6>난괜찮아띵링링</B6>
        </Container1>
      </FrameWrapper3>
    </FrameParentRoot>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
  group177: PropTypes.string,
};

export default FrameComponent4;
