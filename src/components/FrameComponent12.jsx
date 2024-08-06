import FrameComponent2 from "./FrameComponent2";
import styled from "styled-components";
import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";

const Div = styled.div`
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
const FrameChild = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
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
  padding: var(--padding-8xs) var(--padding-sm) 0px 0px;
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
    padding: var(--padding-8xs) var(--padding-sm) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameItem = styled.img`
  height: 41px;
  width: 247px;
  position: relative;
  object-fit: contain;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 247px;
    height: 41px;
  }
`;
const B = styled.b`
  align-self: stretch;
  position: relative;
  display: flex;
  font-weight: 700;
  width: auto;
  height: auto;
  z-index: 3;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    text-align: center;
    color: var(--color-white);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Wrapper = styled.div`
  width: 107px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  margin-left: -173px;
  &:hover {
    display: flex;
    width: 107px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-4xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: auto;
  height: auto;
  gap: var(--gap-186xs);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-186xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) 0px 0px;
  box-sizing: border-box;
  min-width: 161;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-smi) 0px 0px;
    box-sizing: border-box;
    min-width: 161;
  }
`;
const Parent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  min-width: 219;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    gap: var(--gap-7xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 219;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const ManName = styled.b`
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
const FrameInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-tomato-100);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const B1 = styled.b`
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
const ManNameParent = styled.div`
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
const FrameWrapper1 = styled.div`
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
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-9xl);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-9xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const B2 = styled.b`
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
  white-space: nowrap;
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
    white-space: nowrap;
  }
`;
const FrameWrapper2 = styled.div`
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
  padding: 0px 0px var(--padding-10xs);
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
    padding: 0px 0px var(--padding-10xs);
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
const FrameWrapper3 = styled.div`
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
const Group = styled.div`
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
    font-size: var(--font-size-xl);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const Frame16 = styled.div`
  align-self: stretch;
  border-radius: var(--br-lg);
  background-color: var(--color-lightpink-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) var(--padding-43xl) var(--padding-8xs);
  box-sizing: border-box;
  white-space: nowrap;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 2;
  &:hover {
    background-color: var(--color-lightpink-100);
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
    padding: var(--padding-4xs) var(--padding-43xl) var(--padding-8xs);
    box-sizing: border-box;
    white-space: nowrap;
  }
`;
const FrameWrapper4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-11xs);
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
    padding: 0px 0px var(--padding-11xs);
    box-sizing: border-box;
    min-width: 157;
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
  z-index: 4;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const B4 = styled.b`
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
const Parent1 = styled.div`
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
    padding: var(--padding-4xs) var(--padding-3xs) var(--padding-5xs);
    box-sizing: border-box;
  }
`;
const FrameWrapper5 = styled.div`
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
const FrameParent1 = styled.div`
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
const FrameWrapper6 = styled.div`
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
const FrameParent2 = styled.div`
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
  z-index: 1;
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

const FrameComponent12 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <FrameComponent2 prop="차가운 청년" />
      <FrameGroup>
        <FrameContainer>
          <Parent>
            <Div>2</Div>
            <FrameWrapper>
              <FrameChild loading="lazy" alt="" src="/group-178.svg" />
            </FrameWrapper>
            <FrameDiv>
              <FrameParent>
                <FrameItem loading="lazy" alt="" src="/group-256@2x.png" />
                <Wrapper>
                  <B>술래!</B>
                </Wrapper>
              </FrameParent>
            </FrameDiv>
          </Parent>
          <FrameWrapper1>
            <ManNameParent>
              <ManName>6.2</ManName>
              <EllipseParent>
                <FrameInner />
                <B1>+5</B1>
              </EllipseParent>
            </ManNameParent>
          </FrameWrapper1>
        </FrameContainer>
        <FrameWrapper2>
          <Container1>
            <B2>용감한 제리</B2>
          </Container1>
        </FrameWrapper2>
      </FrameGroup>
      <FrameParent2>
        <FrameParent1>
          <Group>
            <Div1>3</Div1>
            <FrameWrapper3>
              <FrameChild loading="lazy" alt="" src="/group-175.svg" />
            </FrameWrapper3>
          </Group>
          <FrameWrapper4>
            <Frame16>
              <B3>차가운 남자</B3>
            </Frame16>
          </FrameWrapper4>
          <FrameWrapper5>
            <Parent1>
              <ManName>4.7</ManName>
              <EllipseGroup>
                <EllipseDiv />
                <B4>+4</B4>
              </EllipseGroup>
            </Parent1>
          </FrameWrapper5>
        </FrameParent1>
        <FrameWrapper6>
          <Container1>
            <B2>모르면 나가라</B2>
          </Container1>
        </FrameWrapper6>
      </FrameParent2>
      <FrameComponent4 group177="/group-1772@2x.png" />
    </FrameParentRoot>
  );
};

FrameComponent12.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent12;
