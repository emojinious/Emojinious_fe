import styled from "styled-components";
import PropTypes from "prop-types";

const EmptyElement = styled.div`
  height: 25px;
  width: 13px;
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
    width: 13px;
    height: 25px;
  }
`;
const FrameChild = styled.img`
  width: 50px;
  height: 50px;
  position: relative;
  object-fit: contain;
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
const EmptyElementParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
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
    gap: var(--gap-6xs);
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
  color: var(--color-white);
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
    color: var(--color-white);
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
  padding: var(--padding-4xs) var(--padding-48xl) var(--padding-8xs)
    var(--padding-50xl);
  background-color: var(--color-mediumpurple-100);
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  white-space: nowrap;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 2;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-lg);
    padding: var(--padding-4xs) var(--padding-48xl) var(--padding-8xs)
      var(--padding-50xl);
    box-sizing: border-box;
    white-space: nowrap;
  }
  &:active {
    background-color: var(--color-mediumpurple-100);
  }
`;
const EmptySequence = styled.b`
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
  background-color: var(--color-mediumpurple-200);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-mediumpurple-200);
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
const EmptySequenceParent = styled.div`
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
  z-index: 2;
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
const FrameGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-8xl);
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
    gap: var(--gap-8xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
  @media screen and (max-width: 675px) {
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
const FrameContainer = styled.div`
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs);
  box-sizing: border-box;
  gap: var(--gap-8xs);
  max-width: 100%;
  width: auto;
  align-self: unset;
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-mini);
  color: var(--color-darkslategray-100);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    width: auto;
    align-self: unset;
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

const FrameComponent2 = ({ className = "", prop }) => {
  return (
    <FrameParentRoot className={className}>
      <FrameGroup>
        <EmptyElementParent>
          <EmptyElement>1</EmptyElement>
          <FrameWrapper>
            <FrameChild loading="lazy" alt="" src="/group-166@2x.png" />
          </FrameWrapper>
        </EmptyElementParent>
        <Wrapper>
          <B>{prop}</B>
        </Wrapper>
        <EmptySequenceParent>
          <EmptySequence>8.4</EmptySequence>
          <EllipseParent>
            <FrameItem />
            <B1>+5</B1>
          </EllipseParent>
        </EmptySequenceParent>
      </FrameGroup>
      <FrameContainer>
        <Container1>
          <B2>왕자 탄 백마</B2>
        </Container1>
      </FrameContainer>
    </FrameParentRoot>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
};

export default FrameComponent2;
