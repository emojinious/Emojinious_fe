import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import FrameComponent6 from "../components/FrameComponent6";
import Header from "../components/Header";

const Child = styled.img`
  align-self: stretch;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  display: flex;
  width: auto;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
  }
`;
const FrameChild = styled.div`
  position: absolute;
  top: 59.5px;
  left: 200.82px;
  border-radius: 13.83px;
  background-color: var(--color-lightpink-100);
  width: 599px;
  height: 459px;
  transform: rotate(1.75deg);
  transform-origin: 0 0;
  display: flex;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 599px;
    height: 459px;
    transform: rotate(1.75deg);
    border-radius: 13.83px;
  }
`;
const FrameItem = styled.div`
  position: absolute;
  top: 6px;
  left: 234.06px;
  border-radius: 13.83px;
  background-color: var(--color-tomato-100);
  width: 599px;
  height: 459px;
  transform: rotate(11.8deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 599px;
    height: 459px;
    transform: rotate(11.8deg);
    border-radius: 13.83px;
  }
`;
const FrameInner = styled.div`
  position: absolute;
  top: 96.08px;
  left: 0px;
  border-radius: 13.83px;
  background-color: var(--color-mediumpurple-200);
  width: 599px;
  height: 459px;
  transform: rotate(-9.23deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 599px;
    height: 459px;
    transform: rotate(-9.23deg);
    border-radius: 13.83px;
  }
`;
const RectangleParent = styled.div`
  height: 577.8px;
  width: 820.4px;
  position: absolute;
  margin: 0 !important;
  bottom: -92.8px;
  left: -130px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 820.4px;
    height: 577.8px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const Rank = styled.b`
  align-self: stretch;
  position: relative;
  display: flex;
  font-weight: 700;
  width: auto;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-lg);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
`;
const RankWrapper = styled.div`
  width: 142px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-16xl) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 142px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-16xl) 0px 0px;
    box-sizing: border-box;
  }
`;
const Player = styled.a`
  text-decoration: none;
  width: 107px;
  position: relative;
  font-weight: 700;
  color: inherit;
  display: flex;
  flex-shrink: 0;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-lg);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    width: 107px;
    height: auto;
  }
`;
const Score1 = styled.b`
  width: 107px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  font-weight: 700;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-lg);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    width: 107px;
    height: auto;
  }
`;
const ScoreContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
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
  }
  @media screen and (max-width: 675px) {
    flex-wrap: wrap;
  }
`;
const EllipseDiv = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-goldenrod-100);
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-goldenrod-100);
    display: flex;
    width: 35px;
    height: 35px;
  }
`;
const EllipseWrapper = styled.div`
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
const Div = styled.div`
  position: relative;
  font-weight: 600;
  display: flex;
  min-width: 9.4;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 5;
  margin-left: -25px;
  &:hover {
    font-weight: 600;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl-7);
    text-align: left;
    color: var(--color-white);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 9.4;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-6xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const FrameParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-mini) 0px 0px;
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-38xs);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: row;
    gap: var(--gap-38xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-mini) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
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
    padding: var(--padding-xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const GroupIcon = styled.img`
  width: 60px;
  height: 60px;
  position: relative;
  object-fit: cover;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 60px;
    height: 60px;
  }
`;
const FrameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
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
    padding: var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const B = styled.b`
  position: absolute;
  top: 14.7px;
  left: 42.5px;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-white);
  text-align: center;
  width: 110px;
  height: 27px;
  min-width: 110;
  font-weight: 700;
  z-index: 5;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    text-align: center;
    color: var(--color-white);
    display: flex;
    width: 110px;
    height: 27px;
    min-width: 110;
  }
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: 1.9px solid var(--color-lightgray);
  padding: 0;
  background-color: var(--color-mediumpurple-100);
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
    background-color: var(--color-mediumpurple-200);
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
    background-color: var(--color-mediumpurple-100);
    border: 1.9px solid var(--color-lightgray);
    box-sizing: border-box;
  }
`;
const FrameWrapper1 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 99.5px);
  border-radius: 11.37px;
  background-color: var(--color-mediumpurple-200);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 11.37px;
  }
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
const FrameWrapper2 = styled.div`
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
const Div1 = styled.div`
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
const PointLabel = styled.div`
  width: 102px;
  border-radius: var(--br-xs);
  background-color: var(--color-mediumpurple-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-8xs) var(--padding-mini);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 4;
  text-align: center;
  font-size: var(--font-size-6xl);
  color: var(--color-linen-100);
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 102px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-sm) var(--padding-8xs) var(--padding-mini);
    box-sizing: border-box;
  }
`;
const FrameContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
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
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const FrameWrapper3 = styled.div`
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
const ScoreContainerParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-mini);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-lg);
  color: var(--color-darkslategray-100);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-mini);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const Div2 = styled.div`
  position: relative;
  font-weight: 600;
  display: flex;
  min-width: 21;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 600;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl-7);
    text-align: left;
    color: var(--color-gray-200);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 21;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-6xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Container1 = styled.div`
  width: 28px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-11xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 28px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-2xs) var(--padding-11xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameChild1 = styled.img`
  height: 60px;
  width: 60px;
  position: relative;
  object-fit: cover;
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
const B1 = styled.b`
  position: absolute;
  top: 14.7px;
  left: 30.5px;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-darkslategray-100);
  text-align: center;
  width: 132px;
  height: 27px;
  font-weight: 700;
  z-index: 5;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    width: 132px;
    height: 27px;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Frame16 = styled.button`
  cursor: pointer;
  border: 1.9px solid var(--color-lightgray);
  padding: 0;
  background-color: var(--color-goldenrod-200);
  position: absolute;
  width: 192.1px;
  top: 4.3px;
  right: 3.4px;
  left: 3.5px;
  border-radius: 9.47px;
  box-sizing: border-box;
  height: 51.4px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-gold-100);
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
  }
  &:active {
    background-color: var(--color-goldenrod-200);
    border: 1.9px solid var(--color-lightgray);
    box-sizing: border-box;
  }
`;
const FrameWrapper4 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 99.5px);
  border-radius: 11.37px;
  background-color: var(--color-gold-100);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 11.37px;
  }
`;
const Div3 = styled.div`
  flex: 1;
  position: relative;
  font-size: var(--font-size-6xl);
  font-weight: 900;
  font-family: var(--font-inter);
  color: var(--color-linen-100);
  text-align: center;
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
const FrameButton = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mini) var(--padding-8xs) var(--padding-sm);
  background-color: var(--color-goldenrod-200);
  width: 102px;
  border-radius: var(--br-xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 4;
  &:hover {
    background-color: var(--color-gold-100);
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
  &:active {
    background-color: var(--color-goldenrod-200);
  }
`;
const JerryContainerInner = styled.div`
  width: 476px;
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
  &:hover {
    display: flex;
    width: 476px;
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
const Div4 = styled.div`
  position: relative;
  font-weight: 600;
  display: flex;
  min-width: 20;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 600;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl-7);
    text-align: left;
    color: var(--color-gray-200);
    display: flex;
    width: auto;
    align-self: unset;
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
const Wrapper1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-2xs) var(--padding-6xs) 0px 0px;
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
    padding: var(--padding-2xs) var(--padding-6xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameChild2 = styled.img`
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
const FrameChild3 = styled.img`
  position: absolute;
  top: 21.1px;
  left: 9.7px;
  width: 13.5px;
  height: 13.5px;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 13.5px;
    height: 13.5px;
  }
`;
const FrameChild4 = styled.img`
  position: absolute;
  top: 21.1px;
  left: 35.9px;
  width: 13.5px;
  height: 13.5px;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 13.5px;
    height: 13.5px;
  }
`;
const PolygonIcon = styled.img`
  position: absolute;
  top: 31px;
  left: 20.1px;
  border-radius: 1.81px;
  width: 19px;
  height: 15.4px;
  background-color: var(--color-lightpink-100);
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 19px;
    height: 15.4px;
    border-radius: 1.81px;
  }
`;
const FrameParent1 = styled.div`
  height: 59px;
  width: 59px;
  position: relative;
  display: flex;
  z-index: 4;
  &:hover {
    display: flex;
    width: 59px;
    height: 59px;
  }
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.47px;
  background-color: var(--color-deepskyblue-100);
  border: 1.9px solid var(--color-linen-100);
  box-sizing: border-box;
  width: 192.1px;
  height: 51.4px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 192.1px;
    height: 51.4px;
    border-radius: 9.47px;
    border: 1.9px solid var(--color-linen-100);
    box-sizing: border-box;
  }
`;
const B2 = styled.b`
  position: absolute;
  top: 14.7px;
  left: 31.5px;
  display: flex;
  width: 129px;
  height: 54px;
  min-width: 129;
  font-weight: 700;
  z-index: 5;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    text-align: center;
    color: var(--color-white);
    display: flex;
    width: 129px;
    height: 54px;
    min-width: 129;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const RectangleGroup = styled.div`
  position: absolute;
  width: 192.1px;
  top: 4.3px;
  right: 3.4px;
  left: 3.5px;
  height: 68.7px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 192.1px;
    height: 68.7px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameWrapper5 = styled.div`
  position: absolute;
  top: 0px;
  left: calc(50% - 99.5px);
  border-radius: 11.37px;
  background-color: var(--color-deepskyblue-100);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: 11.37px;
  }
`;
const FrameWrapper6 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-3xs) 0px 0px;
  box-sizing: border-box;
  min-width: 136;
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
    padding: 0px var(--padding-3xs) 0px 0px;
    box-sizing: border-box;
    min-width: 136;
  }
`;
const Wrapper2 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mini) var(--padding-8xs) var(--padding-sm);
  background-color: var(--color-steelblue);
  width: 102px;
  border-radius: var(--br-xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 4;
  &:hover {
    background-color: var(--color-deepskyblue-100);
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
  &:active {
    background-color: var(--color-steelblue);
  }
`;
const FrameParent2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gap-6xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const JerryContainer = styled.div`
  flex: 1;
  border-radius: 13.83px;
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-mid) var(--padding-46xl) var(--padding-3xl)
    var(--padding-lg);
  box-sizing: border-box;
  gap: var(--gap-3xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  z-index: 3;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: 13.83px;
    padding: var(--padding-mid) var(--padding-46xl) var(--padding-3xl)
      var(--padding-lg);
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 675px) {
    padding-right: 32px;
    box-sizing: border-box;
  }
`;
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
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
    max-width: 100%;
  }
`;
const ButtonShape = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-gold-100);
  width: 383px;
  height: 78px;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 383px;
    height: 78px;
    border-radius: var(--br-xs);
  }
`;
const B3 = styled.b`
  position: absolute;
  top: 21px;
  left: 118px;
  display: flex;
  font-weight: 700;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl-7);
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    height: auto;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-6xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const ButtonParent = styled.div`
  height: 101px;
  width: 383px;
  position: relative;
  max-width: 100%;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 383px;
    height: 101px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const ButtonContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-3xl) 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  color: var(--color-darkslategray-100);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: center;
    transform: rotate(0deg);
    padding: 0px var(--padding-3xl) 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const FrameParent3 = styled.section`
  width: 599px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-11xl-7);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    width: 599px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-5xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const Inner = styled.main`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px var(--padding-4xl);
  box-sizing: border-box;
  max-width: 100%;
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
    justify-content: center;
    transform: rotate(0deg);
    padding: 0px var(--padding-xl) 0px var(--padding-4xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const DivRoot = styled.div`
  width: 1280px;
  position: relative;
  background-color: var(--color-darkslategray-100);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: var(--padding-43xl) 0px var(--padding-43xl);
  box-sizing: border-box;
  gap: var(--gap-11xl);
  line-height: normal;
  letter-spacing: normal;
  height: 832px;
  cursor: pointer;
`;

const Score = () => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/totalscore");
  }, [navigate]);

  return (
    <DivRoot onClick={onContainerClick}>
      <Header/>
      <Inner>
        <FrameParent3>
          <FrameGroup>
            <RectangleParent>
              <FrameChild />
              <FrameItem />
              <FrameInner />
            </RectangleParent>
            <JerryContainer>
              <ScoreContainerParent>
                <ScoreContainer>
                  <RankWrapper>
                    <Rank>rank</Rank>
                  </RankWrapper>
                  <Player>player</Player>
                  <Score1>score</Score1>
                </ScoreContainer>
                <FrameWrapper3>
                  <FrameContainer>
                    <FrameDiv>
                      <FrameParent>
                        <EllipseWrapper>
                          <EllipseDiv />
                        </EllipseWrapper>
                        <Div>1</Div>
                      </FrameParent>
                    </FrameDiv>
                    <FrameWrapper>
                      <GroupIcon
                        loading="lazy"
                        alt=""
                        src="/group-190@2x.png"
                      />
                    </FrameWrapper>
                    <FrameWrapper2>
                      <GroupDiv>
                        <FrameWrapper1>
                          <Wrapper>
                            <B>왕자 탄 백마</B>
                          </Wrapper>
                        </FrameWrapper1>
                      </GroupDiv>
                    </FrameWrapper2>
                    <PointLabel>
                      <Div1>100점</Div1>
                    </PointLabel>
                  </FrameContainer>
                </FrameWrapper3>
              </ScoreContainerParent>
              <FrameComponent6
                placeholder="2"
                group186="/group-186.svg"
                prop="용감한 제리"
                prop1="99점"
              />
              <FrameComponent6
                propBackgroundColor="#c29d66"
                placeholder="3"
                group186="/group-187.svg"
                propBackgroundColor1="#fea1bd"
                propBackgroundColor3="#cc6e8a"
                prop="모르면 나가라"
                propColor="#434040"
                propWidth="125px"
                propMinWidth="125"
                propBackgroundColor5="#fea1bd"
                prop1="98점"
              />
              <JerryContainerInner>
                <FrameContainer>
                  <Container1>
                    <Div2>4</Div2>
                  </Container1>
                  <FrameChild1 loading="lazy" alt="" src="/group-188@2x.png" />
                  <FrameWrapper2>
                    <GroupDiv>
                      <FrameWrapper4>
                        <Frame16>
                          <B1>이것뭐예요~?</B1>
                        </Frame16>
                      </FrameWrapper4>
                    </GroupDiv>
                  </FrameWrapper2>
                  <FrameButton>
                    <Div3>83점</Div3>
                  </FrameButton>
                </FrameContainer>
              </JerryContainerInner>
              <JerryContainerInner>
                <FrameParent2>
                  <Wrapper1>
                    <Div4>5</Div4>
                  </Wrapper1>
                  <FrameParent1>
                    <FrameChild2 alt="" src="/group-2861.svg" />
                    <FrameChild3 alt="" src="/group-1692.svg" />
                    <FrameChild4 loading="lazy" alt="" src="/group-1702.svg" />
                    <PolygonIcon alt="" src="/polygon-171.svg" />
                  </FrameParent1>
                  <FrameWrapper6>
                    <GroupDiv>
                      <FrameWrapper5>
                        <RectangleGroup>
                          <RectangleDiv />
                          <B2>난괜찮아띵링링</B2>
                        </RectangleGroup>
                      </FrameWrapper5>
                    </GroupDiv>
                  </FrameWrapper6>
                  <Wrapper2>
                    <Div3>74점</Div3>
                  </Wrapper2>
                </FrameParent2>
              </JerryContainerInner>
            </JerryContainer>
          </FrameGroup>
          <ButtonContainer>
            <ButtonParent>
              <ButtonShape />
              <B3>다음 턴으로</B3>
            </ButtonParent>
          </ButtonContainer>
        </FrameParent3>
      </Inner>
    </DivRoot>
  );
};

export default Score;
