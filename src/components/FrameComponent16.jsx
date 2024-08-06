import styled from "styled-components";
import FrameComponent3 from "./FrameComponent3";
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
const Wrapper = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-4xs) var(--padding-40xl) var(--padding-8xs);
  background-color: var(--color-mediumpurple-100);
  flex: 1;
  border-radius: var(--br-lg);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  min-width: 122;
  white-space: nowrap;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-lg);
    padding: var(--padding-4xs) var(--padding-40xl) var(--padding-8xs);
    box-sizing: border-box;
    min-width: 122;
    white-space: nowrap;
  }
  &:active {
    background-color: var(--color-mediumpurple-100);
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
const FrameWrapper1 = styled.div`
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
const Shape = styled.div`
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
const ImageCaption = styled.b`
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
const Container1 = styled.div`
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
const ImageDescription = styled.b`
  flex: 1;
  position: relative;
  font-size: var(--font-size-smi);
  display: flex;
  color: var(--color-white);
  flex-shrink: 0;
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
    flex-shrink: 0;
  }
`;
const ImageDetails = styled.div`
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
const ShapeParent = styled.div`
  height: 27.5px;
  width: 33px;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-xl);
  color: var(--color-linen-100);
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
const FrameContainer = styled.div`
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
const Frame16 = styled.div`
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
const DesignTitle = styled.div`
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
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-7xs);
  box-sizing: border-box;
  gap: var(--gap-8xs);
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
const FrameItem = styled.img`
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
const Wrapper1 = styled.div`
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
const FrameParent = styled.div`
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
const Shape1 = styled.div`
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
const B3 = styled.b`
  flex: 1;
  position: relative;
  font-size: var(--font-size-smi);
  display: flex;
  color: var(--color-darkslategray-100);
  flex-shrink: 0;
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
    flex-shrink: 0;
  }
`;
const ShapeGroup = styled.div`
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
const FrameWrapper4 = styled.div`
  width: 33px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
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
    padding: var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameParent1 = styled.div`
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
const InteractiveShapeIcon = styled.img`
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
  z-index: 1;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 50px;
  }
`;
const InteractiveElements = styled.div`
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
const InteractiveContent = styled.div`
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
const PlayerInfoChild = styled.img`
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
const B4 = styled.b`
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
const PlayerName = styled.div`
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
const PlayerInfo = styled.div`
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
const PlayerDesignation = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px 0px var(--padding-9xs);
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
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-9xs);
    box-sizing: border-box;
    min-width: 161;
  }
`;
const UserInteraction = styled.div`
  width: 338px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-2xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 338px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-2xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const PlayerAvatar = styled.div`
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
const ImageLabel = styled.div`
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
const PlayerArea = styled.div`
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
const FrameParent2 = styled.div`
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
const B5 = styled.b`
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
const Wrapper2 = styled.div`
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
const FrameParentRoot = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-xl) var(--padding-mini);
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
    padding: var(--padding-smi) var(--padding-xl) var(--padding-mini);
    box-sizing: border-box;
    min-width: 338;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;

const FrameComponent16 = ({ className = "" }) => {
  return (
    <FrameParentRoot className={className}>
      <FrameGroup>
        <FrameContainer>
          <FrameWrapper1>
            <FrameDiv>
              <Parent>
                <Div>1</Div>
                <FrameWrapper>
                  <FrameChild loading="lazy" alt="" src="/group-166@2x.png" />
                </FrameWrapper>
              </Parent>
              <Wrapper>
                <B>{`시퍼런 남자 `}</B>
              </Wrapper>
            </FrameDiv>
          </FrameWrapper1>
          <ShapeParent>
            <Shape />
            <ImageDetails>
              <Container1>
                <ImageCaption>8.4</ImageCaption>
              </Container1>
              <ImageDescription>+5</ImageDescription>
            </ImageDetails>
          </ShapeParent>
        </FrameContainer>
        <DesignTitle>
          <Frame16>
            <B1>왕자 탄 백마</B1>
          </Frame16>
        </DesignTitle>
      </FrameGroup>
      <FrameComponent3
        propWidth="469px"
        propPadding="0px 0px 3px"
        propAlignSelf="unset"
        prop="2"
        propWidth1="14px"
        propMinWidth="unset"
        propPadding1="5px 0px 0px"
        group178="/group-178.svg"
        propBackgroundColor="#d6470a"
        prop1="차가운 청년"
        propFlex="1"
        propColor="#fff"
        propDisplay="flex"
        propMinWidth1="unset"
        prop2="6.2"
        propBackgroundColor2="#ef6125"
        prop3="+5"
        propColor1="#fff"
        prop4="용감한 제리"
      />
      <FrameParent1>
        <FrameContainer>
          <FrameParent>
            <Parent>
              <Div1>3</Div1>
              <FrameWrapper2>
                <FrameItem loading="lazy" alt="" src="/group-175.svg" />
              </FrameWrapper2>
            </Parent>
            <FrameWrapper3>
              <Wrapper1>
                <B2>차가운 남자</B2>
              </Wrapper1>
            </FrameWrapper3>
          </FrameParent>
          <FrameWrapper4>
            <ShapeGroup>
              <Shape1 />
              <ImageDetails>
                <Container1>
                  <ImageCaption>4.7</ImageCaption>
                </Container1>
                <B3>+4</B3>
              </ImageDetails>
            </ShapeGroup>
          </FrameWrapper4>
        </FrameContainer>
        <DesignTitle>
          <Frame16>
            <B1>모르면 나가라</B1>
          </Frame16>
        </DesignTitle>
      </FrameParent1>
      <FrameParent1>
        <FrameParent2>
          <FrameComponent3
            propWidth="auto"
            propPadding="unset"
            propAlignSelf="stretch"
            prop="4"
            propWidth1="auto"
            propMinWidth="14"
            propPadding1="11px 0px 0px"
            group178="/group-177@2x.png"
            propBackgroundColor="#cc9900"
            prop1="시크한 뽀이"
            propFlex="unset"
            propColor="#434040"
            propDisplay="flex"
            propMinWidth1="105"
            prop2="3.6"
            propBackgroundColor2="#ffcd1c"
            prop3="+3"
            propColor1="#434040"
            prop4="이것뭐예요~?"
          />
          <FrameContainer>
            <UserInteraction>
              <InteractiveContent>
                <Div>5</Div>
                <InteractiveElements>
                  <GroupDiv>
                    <FrameInner alt="" src="/group-286.svg" />
                    <GroupIcon alt="" src="/group-1691.svg" />
                    <FrameChild1 loading="lazy" alt="" src="/group-1701.svg" />
                    <InteractiveShapeIcon alt="" src="/interactive-shape.svg" />
                  </GroupDiv>
                </InteractiveElements>
              </InteractiveContent>
              <PlayerDesignation>
                <PlayerInfo>
                  <PlayerInfoChild
                    loading="lazy"
                    alt=""
                    src="/group-135@2x.png"
                  />
                  <PlayerName>
                    <B4>술래 !</B4>
                  </PlayerName>
                </PlayerInfo>
              </PlayerDesignation>
            </UserInteraction>
            <PlayerArea>
              <ShapeGroup>
                <PlayerAvatar />
                <ImageDetails>
                  <ImageLabel>
                    <ImageCaption>1.2</ImageCaption>
                  </ImageLabel>
                  <ImageDescription>+2</ImageDescription>
                </ImageDetails>
              </ShapeGroup>
            </PlayerArea>
          </FrameContainer>
        </FrameParent2>
        <DesignTitle>
          <Wrapper2>
            <B5>난괜찮아띵링링</B5>
          </Wrapper2>
        </DesignTitle>
      </FrameParent1>
    </FrameParentRoot>
  );
};

FrameComponent16.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent16;
