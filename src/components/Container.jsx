import styled from "styled-components";
import PropTypes from "prop-types";

const Icon4 = styled.img`
  height: 32.1px;
  width: 32.7px;
  position: absolute;
  margin: 0 !important;
  top: 64px;
  left: 45.3px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  display: flex;
  gap: var(--gap-0);
  z-index: 1;
  &:hover {
    display: flex;
    width: 32.7px;
    height: 32.1px;
    gap: var(--gap-0);
  }
`;
const Icon5 = styled.img`
  height: 21.6px;
  width: 21.6px;
  position: absolute;
  margin: 0 !important;
  top: 79.2px;
  left: 22px;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  display: flex;
  gap: var(--gap-0);
  z-index: 1;
  &:hover {
    display: flex;
    width: 21.6px;
    height: 21.6px;
    gap: var(--gap-0);
  }
`;
const B = styled.b`
  width: 49px;
  position: relative;
  display: flex;
  font-weight: 700;
  height: auto;
  z-index: 3;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-81xl);
    text-align: left;
    color: var(--color-linen-100);
    display: flex;
    height: auto;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-31xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-11xl);
  }
`;
const FrameChild = styled.div`
  height: 24px;
  width: 60px;
  position: absolute;
  margin: 0 !important;
  right: -8px;
  bottom: 12px;
  border-radius: 50%;
  background-color: var(--color-gold-100);
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 60px;
    height: 24px;
  }
`;
const Caption = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  font-weight: 700;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-81xl);
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    flex: 1;
    height: auto;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-31xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-11xl);
  }
`;
const EllipseParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const ElementInner = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px 0px var(--padding-9xs);
  box-sizing: border-box;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  margin-top: -119px;
  color: var(--color-darkslategray-100);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px 0px 0px var(--padding-9xs);
    box-sizing: border-box;
  }
`;
const Element = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-132xs);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-132xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const Icon6 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 33.2px;
  height: 32.6px;
  overflow: hidden;
  object-fit: contain;
  display: flex;
  gap: var(--gap-0);
  z-index: 2;
  &:hover {
    display: flex;
    width: 33.2px;
    height: 32.6px;
    gap: var(--gap-0);
  }
`;
const Icon7 = styled.img`
  position: absolute;
  top: 15.8px;
  left: 33.2px;
  width: 21.9px;
  height: 21.9px;
  overflow: hidden;
  object-fit: contain;
  display: flex;
  gap: var(--gap-0);
  z-index: 1;
  &:hover {
    display: flex;
    width: 21.9px;
    height: 21.9px;
    gap: var(--gap-0);
  }
`;
const Nested = styled.div`
  align-self: stretch;
  height: 37.7px;
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
    height: 37.7px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const NestedWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-2xl-3);
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
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-2xl-3);
    box-sizing: border-box;
  }
`;
const Items = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-9xs);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    gap: var(--gap-9xs);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const Block = styled.div`
  width: 155px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-2xl);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 155px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px var(--padding-2xl);
    box-sizing: border-box;
  }
`;
const B1 = styled.b`
  position: absolute;
  top: 9.1px;
  left: 8.3px;
  display: flex;
  width: 186px;
  height: 31px;
  font-weight: 700;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    text-align: center;
    color: var(--color-mediumpurple-200);
    display: flex;
    width: 186px;
    height: 31px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const Image1 = styled.div`
  position: absolute;
  top: 22.1px;
  left: 191.3px;
  border-radius: 50%;
  background-color: var(--color-mediumpurple-200);
  width: 5px;
  height: 5px;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 5px;
    height: 5px;
  }
`;
const Image2 = styled.div`
  position: absolute;
  top: 22.1px;
  left: 8.3px;
  border-radius: 50%;
  background-color: var(--color-mediumpurple-200);
  width: 5px;
  height: 5px;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 5px;
    height: 5px;
  }
`;
const ImageWrapper = styled.div`
  position: absolute;
  top: 3.9px;
  left: 3.7px;
  border-radius: 8.53px;
  background-color: var(--color-linen-100);
  border: 1.7px solid var(--color-mediumpurple-200);
  box-sizing: border-box;
  width: 204.6px;
  height: 46.3px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 204.6px;
    height: 46.3px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: 8.53px;
    border: 1.7px solid var(--color-mediumpurple-200);
    box-sizing: border-box;
  }
`;
const ImageWrapperWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 106px);
  border-radius: 10.23px;
  background-color: var(--color-linen-100);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 10.23px;
  }
`;
const FrameWrapper = styled.div`
  align-self: stretch;
  height: 54px;
  position: relative;
  display: flex;
  width: auto;
  z-index: 1;
  text-align: center;
  font-size: var(--font-size-6xl);
  color: var(--color-mediumpurple-200);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 54px;
  }
`;
const BlockParent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-xs);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-xs);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
  @media screen and (max-width: 750px) {
    flex: 1;
  }
`;
const Elements = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
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
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameItem = styled.img`
  height: 14px;
  width: 4.2px;
  position: absolute;
  margin: 0 !important;
  bottom: 0px;
  left: 132.1px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const FrameInner = styled.img`
  height: 14px;
  width: 4.2px;
  position: absolute;
  margin: 0 !important;
  right: 147px;
  bottom: 0px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const GroupIcon = styled.img`
  height: 14px;
  width: 4.2px;
  position: absolute;
  margin: 0 !important;
  right: 130.8px;
  bottom: 0px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const ButtonIcon = styled.div`
  position: absolute;
  top: 13px;
  left: 62px;
  border-radius: 50%;
  background-color: var(--color-linen-100);
  width: 172.7px;
  height: 172.7px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 172.7px;
    height: 172.7px;
  }
`;
const ButtonContainerChild = styled.img`
  position: absolute;
  top: 41px;
  left: 87px;
  width: 122px;
  height: 177px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 122px;
    height: 177px;
  }
`;
const Icon8 = styled.img`
  position: absolute;
  top: 0px;
  left: 56px;
  width: 88.6px;
  height: 82px;
  overflow: hidden;
  object-fit: contain;
  display: flex;
  gap: var(--gap-0);
  z-index: 3;
  &:hover {
    display: flex;
    width: 88.6px;
    height: 82px;
    gap: var(--gap-0);
  }
`;
const LowerButtonContainerChild = styled.img`
  height: 145.1px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    flex: 1;
    height: 145.1px;
  }
`;
const LowerButtonContainerItem = styled.img`
  height: 14px;
  width: 4.2px;
  position: absolute;
  margin: 0 !important;
  right: 56.4px;
  bottom: -3.9px;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const LowerButtonContainerInner = styled.img`
  height: 14px;
  width: 4.2px;
  position: absolute;
  margin: 0 !important;
  right: 40.1px;
  bottom: -3.9px;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const LowerButtonContainerChild1 = styled.img`
  height: 14px;
  width: 4.2px;
  position: absolute;
  margin: 0 !important;
  right: 23.9px;
  bottom: -3.9px;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const LowerButtonContainerChild2 = styled.img`
  height: 14px;
  width: 4.2px;
  position: absolute;
  margin: 0 !important;
  right: 7.6px;
  bottom: -3.9px;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const LowerButtonContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 0px;
  width: 127.6px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 127.6px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const ButtonContainerItem = styled.img`
  position: absolute;
  top: 100px;
  left: 172px;
  width: 127.6px;
  height: 145.1px;
  object-fit: contain;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 127.6px;
    height: 145.1px;
  }
`;
const ButtonContainerInner = styled.img`
  position: absolute;
  top: 235px;
  left: 180.9px;
  width: 4.2px;
  height: 14px;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const ButtonContainerChild1 = styled.img`
  position: absolute;
  top: 235px;
  left: 197.2px;
  width: 4.2px;
  height: 14px;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const ButtonContainerChild2 = styled.img`
  position: absolute;
  top: 235px;
  left: 213.3px;
  width: 4.2px;
  height: 14px;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const ButtonContainerChild3 = styled.img`
  position: absolute;
  top: 235px;
  left: 229.6px;
  width: 4.2px;
  height: 14px;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 4.2px;
    height: 14px;
  }
`;
const ButtonContainer = styled.div`
  height: 249px;
  flex: 1;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: 249px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameParent = styled.div`
  width: 299.6px;
  margin: 0 !important;
  position: absolute;
  top: 222px;
  left: 11px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 299.6px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const Div = styled.div`
  flex: 1;
  position: relative;
  font-weight: 900;
  display: flex;
  min-width: 92;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 900;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    flex: 1;
    height: auto;
    min-width: 92;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Score = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xl) var(--padding-34xl) var(--padding-mini)
    var(--padding-35xl);
  box-sizing: border-box;
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
    border-radius: var(--br-xs);
    padding: var(--padding-5xl) var(--padding-34xl) var(--padding-mini)
      var(--padding-35xl);
    box-sizing: border-box;
  }
`;
const ScoreWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-6xs) 0px var(--padding-7xs);
  box-sizing: border-box;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-darkslategray-100);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-6xs) 0px var(--padding-7xs);
    box-sizing: border-box;
  }
`;
const ContainerRoot = styled.div`
  width: 318px;
  border-radius: var(--br-xs);
  background-color: var(--color-mediumpurple-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xl) var(--padding-34xl) var(--padding-11xl);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-235xl);
  min-width: 318;
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-81xl);
  color: var(--color-linen-100);
  font-family: var(--font-inter);
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 318px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-235xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-2xl) var(--padding-34xl) var(--padding-11xl);
    box-sizing: border-box;
    min-width: 318;
  }
  @media screen and (max-width: 750px) {
    flex: 1;
  }
  @media screen and (max-width: 675px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-108xl);
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;

const Container = ({ className = "" }) => {
  return (
    <ContainerRoot className={className}>
      <Elements>
        <Icon4 loading="lazy" alt="" src="/--1@2x.png" />
        <Icon5 loading="lazy" alt="" src="/--1-1@2x.png" />
        <BlockParent>
          <Block>
            <Items>
              <Element>
                <B>1</B>
                <ElementInner>
                  <EllipseParent>
                    <FrameChild />
                    <Caption>1</Caption>
                  </EllipseParent>
                </ElementInner>
              </Element>
              <NestedWrapper>
                <Nested>
                  <Icon6 loading="lazy" alt="" src="/--1-2@2x.png" />
                  <Icon7 loading="lazy" alt="" src="/--1-3@2x.png" />
                </Nested>
              </NestedWrapper>
            </Items>
          </Block>
          <FrameWrapper>
            <ImageWrapperWrapper>
              <ImageWrapper>
                <B1>왕자 탄 백마</B1>
                <Image1 />
                <Image2 />
              </ImageWrapper>
            </ImageWrapperWrapper>
          </FrameWrapper>
        </BlockParent>
      </Elements>
      <FrameParent>
        <FrameItem loading="lazy" alt="" src="/group-2041.svg" />
        <FrameInner loading="lazy" alt="" src="/group-2051.svg" />
        <GroupIcon loading="lazy" alt="" src="/group-2061.svg" />
        <ButtonContainer>
          <ButtonIcon />
          <ButtonContainerChild alt="" src="/group-164.svg" />
          <Icon8 alt="" src="/--1-4@2x.png" />
          <LowerButtonContainer>
            <LowerButtonContainerChild alt="" src="/group-264.svg" />
            <LowerButtonContainerItem
              loading="lazy"
              alt=""
              src="/group-2001.svg"
            />
            <LowerButtonContainerInner
              loading="lazy"
              alt=""
              src="/group-2011.svg"
            />
            <LowerButtonContainerChild1
              loading="lazy"
              alt=""
              src="/group-2021.svg"
            />
            <LowerButtonContainerChild2
              loading="lazy"
              alt=""
              src="/group-2031.svg"
            />
          </LowerButtonContainer>
          <ButtonContainerItem alt="" src="/group-265@2x.png" />
          <ButtonContainerInner loading="lazy" alt="" src="/group-207.svg" />
          <ButtonContainerChild1 loading="lazy" alt="" src="/group-208.svg" />
          <ButtonContainerChild2 loading="lazy" alt="" src="/group-234.svg" />
          <ButtonContainerChild3 alt="" src="/group-2351.svg" />
        </ButtonContainer>
      </FrameParent>
      <ScoreWrapper>
        <Score>
          <Div>100점</Div>
        </Score>
      </ScoreWrapper>
    </ContainerRoot>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
