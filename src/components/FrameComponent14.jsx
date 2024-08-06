import styled from "styled-components";
import FrameComponent3 from "./FrameComponent3";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";

const Div = styled.div`
  height: 25px;
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
`;
const FrameChild = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  object-fit: contain;
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
  padding: var(--padding-11xs) 0px 0px;
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
    padding: var(--padding-11xs) 0px 0px;
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
  flex: 1;
  position: relative;
  font-size: var(--font-size-xl);
  line-height: 23px;
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-linen-100);
  text-align: center;
  font-weight: 700;
  height: auto;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    line-height: 23px;
    text-align: center;
    color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-4xs) var(--padding-43xl);
  background-color: var(--color-mediumpurple-100);
  flex: 1;
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  min-width: 117;
  white-space: nowrap;
  height: auto;
  z-index: 1;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-lg);
    padding: var(--padding-4xs) var(--padding-43xl);
    box-sizing: border-box;
    min-width: 117;
    white-space: nowrap;
  }
  &:active {
    background-color: var(--color-mediumpurple-100);
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
  background-color: var(--color-mediumpurple-200);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-mediumpurple-200);
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
  width: 104px;
  border-radius: var(--br-lg);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-3xs) var(--padding-5xs);
  box-sizing: border-box;
  position: relative;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-linen-100);
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
    padding: var(--padding-4xs) var(--padding-3xs) var(--padding-5xs);
    box-sizing: border-box;
  }
`;
const FrameContainer = styled.div`
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
const FrameGroup = styled.div`
  width: 469px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs);
  box-sizing: border-box;
  gap: var(--gap-8xs);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 469px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-8xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-7xs);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const Div1 = styled.div`
  height: 25px;
  position: relative;
  font-weight: 600;
  display: flex;
  min-width: 14;
  width: auto;
  align-self: unset;
  z-index: 1;
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
const FrameInner = styled.img`
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
const FrameWrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) 0px 0px;
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
    padding: var(--padding-5xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const Parent1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  width: auto;
  align-self: unset;
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-mini);
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
const GroupIcon = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  object-fit: contain;
  display: flex;
  &:hover {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const B4 = styled.b`
  width: 76px;
  position: relative;
  line-height: 23px;
  display: flex;
  flex-shrink: 0;
  font-weight: 700;
  height: auto;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    line-height: 23px;
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    width: 76px;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
    line-height: 18px;
  }
`;
const GroupDiv = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-4xs) var(--padding-xl) var(--padding-4xs)
    var(--padding-6xl);
  box-sizing: border-box;
  position: relative;
  width: auto;
  height: auto;
  z-index: 1;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    padding: var(--padding-4xs) var(--padding-xl) var(--padding-4xs)
      var(--padding-6xl);
    box-sizing: border-box;
  }
`;
const FrameWrapper2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-7xs) var(--padding-11xs) 0px;
  box-sizing: border-box;
  min-width: 164;
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
    padding: 0px var(--padding-7xs) var(--padding-11xs) 0px;
    box-sizing: border-box;
    min-width: 164;
  }
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-lightpink-100);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const B5 = styled.b`
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
    color: var(--color-darkslategray-100);
    display: flex;
    width: 29.2px;
    height: 15px;
  }
`;
const EllipseGroup = styled.div`
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
const Parent2 = styled.div`
  align-self: stretch;
  border-radius: var(--br-lg);
  background-color: var(--color-darkslategray-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-3xs) var(--padding-5xs);
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
    padding: var(--padding-4xs) var(--padding-3xs) var(--padding-5xs);
    box-sizing: border-box;
  }
`;
const FrameWrapper3 = styled.div`
  width: 104px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
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
    padding: 0px 0px var(--padding-11xs);
    box-sizing: border-box;
  }
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-2xl);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-2xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FrameWrapper4 = styled.div`
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
const FrameParent1 = styled.div`
  width: 469px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-8xs);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-xl);
  &:hover {
    display: flex;
    width: 469px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-8xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const FrameParentRoot = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-xl) var(--padding-mini);
  box-sizing: border-box;
  gap: var(--gap-2xs);
  min-width: 338;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-darkslategray-100);
  font-family: var(--font-inter);
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-2xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-base) var(--padding-xl) var(--padding-mini);
    box-sizing: border-box;
    min-width: 338;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;

const FrameComponent14 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <FrameGroup>
        <FrameContainer>
          <Parent>
            <Div>1</Div>
            <FrameWrapper>
              <FrameChild loading="lazy" alt="" src="/group-166@2x.png" />
            </FrameWrapper>
          </Parent>
          <Wrapper>
            <B>차가운 남자</B>
          </Wrapper>
          <Group>
            <B1>8.4</B1>
            <EllipseParent>
              <FrameItem />
              <B2>+5</B2>
            </EllipseParent>
          </Group>
        </FrameContainer>
        <FrameDiv>
          <Container1>
            <B3>왕자 탄 백마</B3>
          </Container1>
        </FrameDiv>
      </FrameGroup>
      <FrameComponent3
        prop="2"
        group178="/group-178.svg"
        prop1="차가운 청년"
        prop2="6.2"
        prop3="+5"
        prop4="용감한 제리"
      />
      <FrameParent1>
        <FrameParent>
          <Parent1>
            <Div1>3</Div1>
            <FrameWrapper1>
              <FrameInner loading="lazy" alt="" src="/group-175.svg" />
            </FrameWrapper1>
          </Parent1>
          <FrameWrapper2>
            <GroupDiv>
              <GroupIcon loading="lazy" alt="" src="/group-1352@2x.png" />
              <B4>술래 !</B4>
            </GroupDiv>
          </FrameWrapper2>
          <FrameWrapper3>
            <Parent2>
              <B1>4.7</B1>
              <EllipseGroup>
                <EllipseDiv />
                <B5>+4</B5>
              </EllipseGroup>
            </Parent2>
          </FrameWrapper3>
        </FrameParent>
        <FrameWrapper4>
          <Container1>
            <B3>모르면 나가라</B3>
          </Container1>
        </FrameWrapper4>
      </FrameParent1>
      <FrameComponent4 group177="/group-177@2x.png" />
    </FrameParentRoot>
  );
};

FrameComponent14.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent14;
