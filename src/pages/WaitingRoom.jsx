import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import InnerInvitation from "../components/InnerInvitation";
import Header from "../components/Header"

const FrameChild = styled.img`
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
const HeaderBack = styled.img`
  position: absolute;
  top: 80px;
  left: 42px;
  width: 58px;
  height: 58px;
  display: flex;
  cursor: pointer;
  z-index: 1;
`;
const UnionIcon = styled.img`
  align-self: stretch;
  height: 44.5px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  background-color: var(--color-deepskyblue-100);
  display: flex;
  width: auto;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: 44.5px;
  }
`;
const UnionWrapper = styled.div`
  width: 74.4px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi-5) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 74.4px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-smi-5) 0px 0px;
    box-sizing: border-box;
  }
`;
const B = styled.b`
  position: relative;
  font-size: var(--font-size-11xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-mediumpurple-200);
  text-align: left;
  min-width: 60;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 2;

  @media screen and (max-width: 800px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Wrapper = styled.button`
  cursor: pointer;
  border: 3px solid var(--color-steelblue);
  padding: var(--padding-5xs) var(--padding-xl);
  background-color: var(--color-lightgray);
  flex: 1;
  border-radius: var(--br-mini);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 1;
  &:active {
    background-color: var(--color-lightgray);
    border: 3px solid var(--color-steelblue);
    box-sizing: border-box;
  }
`;
const FrameDiv = styled.div`
  flex: 1;
  border-radius: var(--br-mini);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs);
  box-sizing: border-box;
  min-width: 290;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
`;
const UnionIcon1 = styled.img`
  align-self: stretch;
  height: 44.5px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  object-fit: contain;
  background-color: var(--color-deepskyblue-100);
  display: flex;
  width: auto;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: 44.5px;
  }
`;
const FrameContainer = styled.div`
  width: 659.4px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 32.15px;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  @media screen and (max-width: 675px) {
    gap: var(--gap-base);
  }
`;
const FrameWrapper = styled.div`
  width: 940.3px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
`;
const B1 = styled.b`
  position: relative;
  display: flex;
  min-width: 121;
  white-space: nowrap;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    text-align: left;
    color: var(--color-linen-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 121;
    white-space: nowrap;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const FrameInner = styled.img`
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
  object-fit: cover;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const H = styled.h2`
  margin: 0;
  align-self: stretch;
  height: auto;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: flex;
  transform: rotate(0.6deg);
  width: auto;
  z-index: 3;
  &:hover {
    font-family: var(--font-inter);
    font-size: var(--font-size-16xl);
    text-align: left;
    color: var(--color-gray-200);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    transform: rotate(0.6deg);
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-9xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
  }
`;
const EmojiContainer = styled.div`
  width: 35.3px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs-8) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  font-size: var(--font-size-16xl);
  color: var(--color-gray-200);
  &:hover {
    display: flex;
    width: 35.3px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-7xs-8) 0px 0px;
    box-sizing: border-box;
  }
`;
const B2 = styled.b`
  position: absolute;
  margin: 0 !important;
  bottom: 15px;
  left: 132px;
  font-size: var(--font-size-xl);
  display: flex;
  min-width: 110;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 3;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    text-align: left;
    color: var(--color-linen-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 110;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const Parent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: var(--padding-6xs) var(--padding-15xl) var(--padding-xs-9)
    var(--padding-96xl);
  box-sizing: border-box;
  position: relative;
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
    padding: var(--padding-6xs) var(--padding-15xl) var(--padding-xs-9)
      var(--padding-96xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const InvitationContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl);
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
    gap: var(--gap-7xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const FrameChild1 = styled.img`
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
const FrameChild2 = styled.img`
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
const GroupDiv = styled.div`
  height: 59px;
  width: 59px;
  position: relative;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 59px;
    height: 59px;
  }
`;
const RingShape = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-deepskyblue-100);
  width: 199px;
  height: 58px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 199px;
    height: 58px;
    border-radius: var(--br-xs);
  }
`;
const B3 = styled.b`
  position: absolute;
  top: 17px;
  left: 35px;
  display: flex;
  min-width: 129;
  font-weight: 700;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    text-align: left;
    color: var(--color-linen-100);
    display: flex;
    height: auto;
    min-width: 129;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const RingShapeParent = styled.div`
  height: 71px;
  flex: 1;
  position: relative;
  min-width: 129;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: 71px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 129;
  }
`;
const UnionIcon2 = styled.img`
  align-self: stretch;
  width: 120px;
  position: relative;
  max-height: 100%;
  min-height: 58;
  background-color: var(--color-deepskyblue-200);
  display: flex;
  height: auto;
  z-index: 1;
  &:hover {
    background-color: var(--color-deepskyblue-200);
    display: flex;
    width: 120px;
    align-self: stretch;
    height: auto;
    min-height: 58;
  }
`;
const H1 = styled.h2`
  margin: 0;
  align-self: stretch;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: flex;
  width: auto;
  height: auto;
  z-index: 2;
  &:hover {
    font-family: var(--font-inter);
    font-size: var(--font-size-16xl);
    text-align: left;
    color: var(--color-gray-200);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-9xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-2xl);
  }
`;
const FourthReaction = styled.div`
  width: 35px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  margin-left: -69px;
  &:hover {
    display: flex;
    width: 35px;
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
const SurpriseReaction = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-15xl) 0px 0px;
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  height: auto;
  gap: var(--gap-82xs);
  transform: rotate(0deg);
  font-size: var(--font-size-16xl);
  color: var(--color-gray-200);
  &:hover {
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: row;
    gap: var(--gap-82xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-15xl) 0px 0px;
    box-sizing: border-box;
  }
`;
const NestedRing = styled.div`
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
const RingContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  min-width: 211;
  max-width: 100%;
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
    padding: var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
    min-width: 211;
    max-width: 100%;
  }
`;
const FrameParent1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xl);
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
    gap: var(--gap-6xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const QuestionContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-7xl);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  font-size: var(--font-size-xl);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-7xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const FrameParent2 = styled.div`
  flex: 0.8647;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  border: 1px solid var(--color-gainsboro-200);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xl) var(--padding-12xl) var(--padding-base);
  gap: var(--gap-7xl);
  min-width: 307;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    flex: 0.8647;
    height: auto;
    flex-direction: column;
    gap: var(--gap-7xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-7xl) var(--padding-12xl) var(--padding-base);
    box-sizing: border-box;
    border: 1px solid var(--color-gainsboro-200);
    min-width: 307;
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    flex: 1;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-xl);
    padding-bottom: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const B4 = styled.b`
  position: relative;
  display: flex;
  min-width: 85;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 85;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const TimeLimitContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
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
    padding: 0px var(--padding-12xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const B5 = styled.b`
  position: relative;
  line-height: 19px;
  display: flex;
  min-width: 118;
  white-space: nowrap;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-mini);
    line-height: 19px;
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 118;
    white-space: nowrap;
  }
`;
const PromptTimeValue = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-xs) 0px var(--padding-2xs);
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
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-xs) 0px var(--padding-2xs);
    box-sizing: border-box;
  }
`;
const EmptyPrompt = styled.b`
  position: relative;
  font-size: var(--font-size-21xl);
  display: flex;
  color: var(--color-gray-100);
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-21xl);
    text-align: left;
    color: var(--color-gray-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-13xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const InnerPromptTime = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xs);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const NestedPromptTime = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-9xs) 0px 0px;
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
    padding: var(--padding-9xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const PromptTimeContainerChild = styled.div`
  height: 100px;
  width: 3px;
  position: relative;
  border-right: 3px dashed var(--color-lightpink-100);
  box-sizing: border-box;
  display: flex;
  border: 3px dashed var(--color-lightpink-100);
  z-index: 2;
  &:hover {
    display: flex;
    width: 3px;
    height: 100px;
    border: 3px dashed var(--color-lightpink-100);
    box-sizing: border-box;
  }
`;
const B6 = styled.b`
  position: relative;
  display: flex;
  min-width: 98;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-mini);
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 98;
  }
`;
const InnerAnswerTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-lg) 0px var(--padding-6xl);
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
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-lg) 0px var(--padding-6xl);
    box-sizing: border-box;
  }
`;
const NestedAnswerTime = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const PromptTimeContainer = styled.div`
  align-self: stretch;
  height: 97px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-18xl-5);
  width: auto;
  transform: rotate(0deg);
  font-size: var(--font-size-mini);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 97px;
    flex-direction: row;
    gap: var(--gap-18xl-5);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-lgi);
  }
`;
const TimeLimitContainerParent = styled.div`
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-19xl) var(--padding-lgi)
    var(--padding-25xl);
  box-sizing: border-box;
  gap: var(--gap-xs);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-sm) var(--padding-19xl) var(--padding-lgi)
      var(--padding-25xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const DifficultyContainer = styled.textarea`
  border: none;
  background-color: var(--color-linen-100);
  height: 160px;
  width: auto;
  outline: none;
  flex: 0.8571;
  border-radius: var(--br-xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-5xs) var(--padding-4xs) var(--padding-5xs)
    var(--padding-59xl);
  box-sizing: border-box;
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  min-width: 160;
  gap: var(--gap-26xl);
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    flex: 0.8571;
    height: 160px;
    flex-direction: row;
    gap: var(--gap-26xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-5xs) var(--padding-4xs) var(--padding-5xs)
      var(--padding-59xl);
    box-sizing: border-box;
    min-width: 160;
  }
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const B7 = styled.b`
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
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    flex: 1;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const NestedTurn = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-31xl) 0px var(--padding-33xl);
  box-sizing: border-box;
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
    padding: 0px var(--padding-31xl) 0px var(--padding-33xl);
    box-sizing: border-box;
  }
`;
const FrameChild3 = styled.img`
  width: 35px;
  height: 35px;
  position: relative;
  border-radius: var(--br-10xs);
  object-fit: contain;
  background-color: var(--color-lightpink-100);
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 35px;
    height: 35px;
    border-radius: var(--br-10xs);
  }
`;
const PolygonWrapper = styled.div`
  height: 86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-32xl) 0px 0px;
  box-sizing: border-box;
  width: auto;
  align-self: unset;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: auto;
    align-self: unset;
    height: 86px;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-32xl) 0px 0px;
    box-sizing: border-box;
  }
`;
const B8 = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  font-weight: 700;
  height: auto;
  z-index: 3;
  &:hover {
    font-weight: 700;
    font-family: var(--font-monda);
    font-size: var(--font-size-61xl);
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    flex: 1;
    height: auto;
  }
  @media screen and (max-width: 800px) {
    font-size: var(--font-size-21xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-5xl);
  }
`;
const FrameParent3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-3xs);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  margin-top: -17px;
  font-size: var(--font-size-61xl);
  font-family: var(--font-monda);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const TurnContainer = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-14xl) var(--padding-7xs);
  box-sizing: border-box;
  min-width: 160;
  height: auto;
  gap: var(--gap-30xs);
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-30xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-sm) var(--padding-14xl) var(--padding-7xs);
    box-sizing: border-box;
    min-width: 160;
  }
`;
const DifficultyContainerParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-base);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FrameChild4 = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  margin: 0 !important;
  bottom: 14px;
  left: 61px;
  object-fit: cover;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 120px;
    height: 120px;
  }
`;
const FrameParent4 = styled.div`
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--color-mediumseagreen);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-base) var(--padding-mini) var(--padding-mid);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-mid);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-mid);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-base) var(--padding-mini) var(--padding-mid);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const B9 = styled.b`
  width: 50px;
  position: relative;
  font-size: var(--font-size-6xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-linen-100);
  text-align: left;
  font-weight: 700;
  height: auto;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    text-align: left;
    color: var(--color-linen-100);
    display: flex;
    width: 50px;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const Container1 = styled.button`
  cursor: pointer;
  border: none;
  padding: var(--padding-mid) var(--padding-xl) var(--padding-smi)
    var(--padding-5xl);
  background-color: var(--color-mediumpurple-100);
  flex: 0.807;
  border-radius: var(--br-xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  box-sizing: border-box;
  min-width: 149;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    flex: 0.807;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: center;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-mid) var(--padding-xl) var(--padding-smi)
      var(--padding-5xl);
    box-sizing: border-box;
    min-width: 149;
  }
  &:active {
    background-color: var(--color-mediumpurple-100);
  }
  @media screen and (max-width: 450px) {
    flex: 1;
  }
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-gold-100);
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gold-200);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-xs);
  }
  &:active {
    background-color: var(--color-gold-100);
  }
`;
const B10 = styled.b`
  position: absolute;
  top: 17px;
  left: 92px;
  display: flex;
  min-width: 50;
  font-weight: 700;
  height: auto;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    height: auto;
    min-width: 50;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
  }
`;
const RectangleParent = styled.div`
  height: 63px;
  flex: 1;
  position: relative;
  min-width: 149;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: 63px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 149;
  }
`;
const FrameParent5 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-base);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  font-size: var(--font-size-6xl);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-base);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FrameParent6 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  min-width: 307;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  font-size: var(--font-size-xl);
  color: var(--color-darkslategray-100);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 307;
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    flex: 1;
  }
`;
const JerryContainer = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-mid);
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
    gap: var(--gap-mid);
    align-items: flex-start;
    justify-content: center;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const FrameGroup = styled.div`
  width: 963px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-10xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 963px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-10xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const Inner = styled.section`
  width: 1257px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-6xl);
  color: var(--color-linen-100);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    width: 1257px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: center;
    transform: rotate(0deg);
    padding: 0px var(--padding-xl);
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
  padding: var(--padding-43xl) 0px var(--padding-84xl);
  box-sizing: border-box;
  gap: var(--gap-20xl);
  line-height: normal;
  letter-spacing: normal;
  height: 832px;
  @media screen and (max-width: 675px) {
    gap: var(--gap-lg);
  }
`;

function WaitingRoom() {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/setup");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/game1");
  }, [navigate]);

  return (
    <DivRoot>
      <Header/>
      <HeaderBack
          loading="lazy"
          alt=""
          src="/뒤로가기.svg"
          onClick={onGroupClick}
      />
      <Inner>
        <FrameGroup>
          <FrameWrapper>
            <FrameContainer>
              <UnionWrapper>
                <UnionIcon loading="lazy" alt="" src="/union2.svg" />
              </UnionWrapper>
              <FrameDiv>
                <Wrapper>
                  <B>테마</B>
                </Wrapper>
              </FrameDiv>
              <UnionWrapper>
                <UnionIcon1 loading="lazy" alt="" src="/union-1@2x.png" />
              </UnionWrapper>
            </FrameContainer>
          </FrameWrapper>
          <JerryContainer>
            <FrameParent2>
              <Parent>
                <B1>용감한 제리</B1>
                <FrameInner loading="lazy" alt="" src="/group-165@2x.png" />
                <EmojiContainer>
                  <H>😜</H>
                </EmojiContainer>
                <B2>왕자 탄 백마</B2>
              </Parent>
              <InvitationContainer>
                <InnerInvitation
                  group174="/group-186.svg"
                  prop="용감한 제리"
                  union="/union-2.svg"
                  prop1="🤤"
                />
                <InnerInvitation
                  group174="/group-171.svg"
                  propBackgroundColor="#cc6e8a"
                  propMinWidth="125"
                  prop="모르면 나가라"
                  propColor="#434040"
                  propMinWidth1="125"
                  union="/union-3.svg"
                  prop1="😘"
                />
              </InvitationContainer>
              <QuestionContainer>
                <InnerInvitation
                  group174="/group-172@2x.png"
                  propBackgroundColor="#cc9900"
                  propMinWidth="125"
                  prop="이것뭐예요~?"
                  propColor="#434040"
                  propMinWidth1="125"
                  union="/union-4.svg"
                  prop1="🥵"
                />
                <FrameParent1>
                  <GroupDiv>
                    <FrameChild alt="" src="/group-2861.svg" />
                    <FrameChild1 alt="" src="/group-1692.svg" />
                    <FrameChild2 loading="lazy" alt="" src="/group-1702.svg" />
                    <PolygonIcon alt="" src="/polygon-171.svg" />
                  </GroupDiv>
                  <RingContainer>
                    <NestedRing>
                      <RingShapeParent>
                        <RingShape />
                        <B3>난괜찮아띵링링</B3>
                      </RingShapeParent>
                      <SurpriseReaction>
                        <UnionIcon2 loading="lazy" alt="" src="/union-5.svg" />
                        <FourthReaction>
                          <H1>😱</H1>
                        </FourthReaction>
                      </SurpriseReaction>
                    </NestedRing>
                  </RingContainer>
                </FrameParent1>
              </QuestionContainer>
            </FrameParent2>
            <FrameParent6>
              <FrameParent4>
                <TimeLimitContainerParent>
                  <TimeLimitContainer>
                    <B4>제한 시간</B4>
                  </TimeLimitContainer>
                  <PromptTimeContainer>
                    <NestedPromptTime>
                      <InnerPromptTime>
                        <PromptTimeValue>
                          <B5>프롬프트 입력 시간</B5>
                        </PromptTimeValue>
                        <EmptyPrompt>00 : 00</EmptyPrompt>
                      </InnerPromptTime>
                    </NestedPromptTime>
                    <PromptTimeContainerChild />
                    <NestedPromptTime>
                      <NestedAnswerTime>
                        <InnerAnswerTime>
                          <B6>정답 입력 시간</B6>
                        </InnerAnswerTime>
                        <EmptyPrompt>00 : 00</EmptyPrompt>
                      </NestedAnswerTime>
                    </NestedPromptTime>
                  </PromptTimeContainer>
                </TimeLimitContainerParent>
                <DifficultyContainerParent>
                  <DifficultyContainer
                    placeholder="난이도"
                    rows={8}
                    cols={11}
                  />
                  <TurnContainer>
                    <NestedTurn>
                      <B7>턴 수</B7>
                    </NestedTurn>
                    <FrameParent3>
                      <PolygonWrapper>
                        <FrameChild3
                          loading="lazy"
                          alt=""
                          src="/polygon-6.svg"
                        />
                      </PolygonWrapper>
                      <B8>3</B8>
                      <PolygonWrapper>
                        <FrameChild3
                          loading="lazy"
                          alt=""
                          src="/polygon-4.svg"
                        />
                      </PolygonWrapper>
                    </FrameParent3>
                  </TurnContainer>
                </DifficultyContainerParent>
                <FrameChild4 loading="lazy" alt="" src="/group-151@2x.png" />
              </FrameParent4>
              <FrameParent5>   
                <Container1>
                  <B9>초대</B9>
                </Container1>
                <RectangleParent>
                  <RectangleDiv onClick={onRectangleClick}>
                  <B10>시작</B10> 
                  </RectangleDiv>
                </RectangleParent>
              </FrameParent5>
            </FrameParent6>
          </JerryContainer>
        </FrameGroup>
      </Inner>
    </DivRoot>
  );
}

export default WaitingRoom;
