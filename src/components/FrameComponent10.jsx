import styled from "styled-components";
import FrameComponent1 from "./FrameComponent1";
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
const FrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-11xs) var(--padding-mini) 0px 0px;
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
    padding: var(--padding-11xs) var(--padding-mini) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameItem = styled.img`
  height: 41px;
  width: 247px;
  position: relative;
  object-fit: contain;
  display: flex;
  z-index: 1;
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
  z-index: 2;
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
  width: 76px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  margin-left: -159px;
  &:hover {
    display: flex;
    width: 76px;
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
  gap: var(--gap-172xs);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-172xs);
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
  padding: var(--padding-2xs) 0px 0px;
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
    padding: var(--padding-2xs) 0px 0px;
    box-sizing: border-box;
    min-width: 161;
  }
`;
const Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xs);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-7xs);
    align-items: flex-start;
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
const FrameContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-4xs);
  box-sizing: border-box;
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
    padding: 0px 0px var(--padding-4xs);
    box-sizing: border-box;
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
const FrameWrapper2 = styled.div`
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
const B2 = styled.b`
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
  z-index: 1;
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
const FrameWrapper3 = styled.div`
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
  text-align: center;
  font-size: var(--font-size-xl);
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
const BlueManContentParent = styled.div`
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
const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-10xs);
  box-sizing: border-box;
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
    padding: 0px 0px var(--padding-10xs);
    box-sizing: border-box;
  }
`;
const GroupIcon = styled.img`
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
const FrameChild1 = styled.img`
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
const FrameChild2 = styled.img`
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
  border-radius: 1.53px;
  width: 16.1px;
  height: 13px;
  background-color: var(--color-lightpink-100);
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 16.1px;
    height: 13px;
    border-radius: 1.53px;
  }
`;
const GroupDiv = styled.div`
  align-self: stretch;
  height: 50px;
  position: relative;
  display: flex;
  width: auto;
  z-index: 1;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 50px;
  }
`;
const BlueManContentInner = styled.div`
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
const BlueManContent = styled.div`
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
const B3 = styled.b`
  flex: 1;
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
`;
const FrameButton = styled.button`
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
  z-index: 1;
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
const B4 = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  min-width: 73;
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
    min-width: 73;
  }
`;
const Wrapper1 = styled.div`
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
  }
`;
const FrameParent2 = styled.div`
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
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xs);
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
  }
  @media screen and (max-width: 1050px) {
    align-self: stretch;
    width: auto;
  }
`;
const FrameWrapper5 = styled.div`
  width: 338px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 338px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const EllipseDiv = styled.div`
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
const B5 = styled.b`
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
const Wrapper2 = styled.div`
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
  padding: var(--padding-4xs) var(--padding-3xs) var(--padding-5xs);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 1;
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
const B6 = styled.b`
  flex: 1;
  position: relative;
  font-size: var(--font-size-smi);
  display: flex;
  color: var(--color-white);
  font-weight: 700;
  height: auto;
  z-index: 4;
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
const FrameParent3 = styled.div`
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
const EllipseParent = styled.div`
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
const FrameChild3 = styled.div`
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
`;
const Wrapper3 = styled.div`
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
  z-index: 1;
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
const FrameChild4 = styled.div`
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
const B7 = styled.b`
  flex: 1;
  position: relative;
  font-size: var(--font-size-smi);
  display: flex;
  color: var(--color-darkslategray-100);
  font-weight: 700;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-smi);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const FrameChild5 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-gold-100);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const FrameChild6 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-deepskyblue-100);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const FrameParent4 = styled.div`
  width: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-42xl-5);
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-linen-100);
  &:hover {
    display: flex;
    width: 33px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-42xl-5);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameParentRoot = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-smi) var(--padding-4xl) var(--padding-mini)
    var(--padding-xl);
  box-sizing: border-box;
  min-width: 338;
  max-width: 100%;
  gap: var(--gap-xl);
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
    flex-direction: row;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: space-between;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-smi) var(--padding-4xl) var(--padding-mini)
      var(--padding-xl);
    box-sizing: border-box;
    min-width: 338;
    max-width: 100%;
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
    justify-content: center;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;

const FrameComponent10 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <FrameWrapper5>
        <FrameGroup>
          <FrameContainer>
            <Parent>
              <Div>1</Div>
              <FrameDiv>
                <FrameChild loading="lazy" alt="" src="/group-166@2x.png" />
              </FrameDiv>
              <FrameWrapper>
                <FrameParent>
                  <FrameItem loading="lazy" alt="" src="/group-1351@2x.png" />
                  <Wrapper>
                    <B>술래 !</B>
                  </Wrapper>
                </FrameParent>
              </FrameWrapper>
            </Parent>
            <FrameWrapper1>
              <Container1>
                <B1>왕자 탄 백마</B1>
              </Container1>
            </FrameWrapper1>
          </FrameContainer>
          <FrameComponent1
            empty="2"
            group178="/group-178.svg"
            prop="차가운 청년"
            prop1="용감한 제리"
          />
          <FrameParent1>
            <BlueManContentParent>
              <Group>
                <Div1>3</Div1>
                <FrameWrapper2>
                  <FrameInner loading="lazy" alt="" src="/group-175.svg" />
                </FrameWrapper2>
              </Group>
              <FrameWrapper3>
                <Frame16>
                  <B2>차가운 남자</B2>
                </Frame16>
              </FrameWrapper3>
            </BlueManContentParent>
            <FrameWrapper1>
              <Container1>
                <B1>모르면 나가라</B1>
              </Container1>
            </FrameWrapper1>
          </FrameParent1>
          <FrameComponent1
            propPadding="unset"
            empty="4"
            propWidth="auto"
            propMinWidth="14"
            propPadding1="11px 0px 0px"
            group178="/group-1771@2x.png"
            propBackgroundColor="#cc9900"
            prop="시크한 뽀이"
            propFlex="unset"
            propColor="#434040"
            propDisplay="flex"
            propMinWidth1="105"
            prop1="이것뭐예요~?"
          />
          <FrameParent2>
            <BlueManContentParent>
              <BlueManContent>
                <Div>5</Div>
                <BlueManContentInner>
                  <GroupDiv>
                    <GroupIcon alt="" src="/group-286.svg" />
                    <FrameChild1 alt="" src="/group-169.svg" />
                    <FrameChild2 loading="lazy" alt="" src="/group-170.svg" />
                    <PolygonIcon alt="" src="/polygon-17.svg" />
                  </GroupDiv>
                </BlueManContentInner>
              </BlueManContent>
              <FrameWrapper4>
                <FrameButton>
                  <B3>{`시퍼런 남자 `}</B3>
                </FrameButton>
              </FrameWrapper4>
            </BlueManContentParent>
            <FrameWrapper1>
              <Wrapper1>
                <B4>난괜찮아띵링링</B4>
              </Wrapper1>
            </FrameWrapper1>
          </FrameParent2>
        </FrameGroup>
      </FrameWrapper5>
      <FrameParent4>
        <EllipseParent>
          <EllipseDiv />
          <FrameParent3>
            <Wrapper2>
              <B5>8.4</B5>
            </Wrapper2>
            <B6>+5</B6>
          </FrameParent3>
        </EllipseParent>
        <EllipseParent>
          <FrameChild3 />
          <FrameParent3>
            <Wrapper3>
              <B5>6.2</B5>
            </Wrapper3>
            <B6>+5</B6>
          </FrameParent3>
        </EllipseParent>
        <EllipseParent>
          <FrameChild4 />
          <FrameParent3>
            <Wrapper2>
              <B5>4.7</B5>
            </Wrapper2>
            <B7>+4</B7>
          </FrameParent3>
        </EllipseParent>
        <EllipseParent>
          <FrameChild5 />
          <FrameParent3>
            <Wrapper3>
              <B5>3.6</B5>
            </Wrapper3>
            <B7>+3</B7>
          </FrameParent3>
        </EllipseParent>
        <EllipseParent>
          <FrameChild6 />
          <FrameParent3>
            <Wrapper3>
              <B5>1.2</B5>
            </Wrapper3>
            <B6>+2</B6>
          </FrameParent3>
        </EllipseParent>
      </FrameParent4>
    </FrameParentRoot>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
