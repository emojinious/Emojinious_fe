import { useState, useCallback } from "react";
import Frame3 from "../components/Frame3";
import PortalPopup from "../components/PortalPopup";
import styled from "styled-components";

const MainContainerChild = styled.img`
  height: 297px;
  width: 948px;
  position: absolute;
  margin: 0 !important;
  top: calc(50% - 148.5px);
  left: calc(50% - 474px);
  border-radius: var(--br-xs);
  background-color: var(--color-lightpink-100);
  display: flex;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 948px;
    height: 297px;
    border-radius: var(--br-xs);
  }
`;
const MainContainerItem = styled.img`
  height: 259px;
  flex: 1;
  position: relative;
  border-radius: var(--br-xs);
  max-width: 100%;
  overflow: hidden;
  background-color: var(--color-linen-100);
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: 259px;
    border-radius: var(--br-xs);
    max-width: 100%;
  }
`;
const MainContainer = styled.section`
  width: 902px;
  margin: 0 !important;
  position: absolute;
  top: 305px;
  left: 248px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 902px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const Child = styled.img`
  margin-left: -109px;
  margin-bottom: 7px;
  width: 1280px;
  position: relative;
  max-height: 100%;
  max-width: 110%;
  flex-shrink: 0;
  display: flex;
  &:hover {
    display: flex;
    width: 1280px;
    max-width: 110%;
    flex-shrink: 0;
  }
`;
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-gainsboro-200);
  width: 37.6px;
  height: 37.6px;
  display: flex;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 37.6px;
    height: 37.6px;
  }
`;
const FrameItem = styled.div`
  position: absolute;
  top: 41.3px;
  left: 3.8px;
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-200);
  width: 30.7px;
  height: 8.8px;
  display: flex;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 30.7px;
    height: 8.8px;
    border-radius: var(--br-xs);
  }
`;
const EllipseParent = styled.div`
  width: 37.6px;
  height: 50.1px;
  position: absolute;
  margin: 0 !important;
  top: -10140px;
  left: 162.9px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 37.6px;
    height: 50.1px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameInner = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-mini);
  background-color: var(--color-linen-100);
  border: 3px solid var(--color-lightpink-100);
  box-sizing: border-box;
  width: 294px;
  height: 60px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 294px;
    height: 60px;
    border-radius: var(--br-mini);
    border: 3px solid var(--color-lightpink-100);
    box-sizing: border-box;
  }
`;
const H = styled.h1`
  margin: 0;
  position: absolute;
  top: 12px;
  left: 74px;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: center;
    color: var(--color-darkslategray-100);
    display: flex;
    height: auto;
  }
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const RectangleParent = styled.div`
  height: 92px;
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
    height: 92px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameWrapper = styled.div`
  height: 70px;
  width: 304px;
  border-radius: var(--br-lg);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs) var(--padding-8xs) 0px;
  box-sizing: border-box;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 304px;
    height: 70px;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-lg);
    padding: var(--padding-8xs) var(--padding-8xs) 0px;
    box-sizing: border-box;
  }
`;
const Inner = styled.div`
  width: 1064px;
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
  &:hover {
    display: flex;
    width: 1064px;
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
const StoryDescription = styled.div`
  height: 25px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  min-width: 10;
  width: auto;
  align-self: unset;
  z-index: 1;
  &:hover {
    font-family: var(--font-inter);
    font-size: var(--font-size-mini);
    text-align: left;
    color: var(--color-darkslategray-100);
    display: flex;
    width: auto;
    align-self: unset;
    height: 25px;
    min-width: 10;
  }
`;
const DescriptionPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-4xs) 0px 0px;
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
    padding: var(--padding-4xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const CharacterImage = styled.div`
  position: absolute;
  top: 0px;
  left: 3px;
  border-radius: 50%;
  background-color: var(--color-darkslategray-100);
  width: 31px;
  height: 22px;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 31px;
    height: 22px;
  }
`;
const GroupIcon = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  margin: 0 !important;
  bottom: -45px;
  left: -29px;
  object-fit: contain;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 50px;
    height: 50px;
  }
`;
const CharacterName = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  font-weight: 700;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-3xs);
    text-align: center;
    color: var(--color-white);
    display: flex;
    flex: 1;
    height: auto;
  }
`;
const FrameGroup = styled.div`
  position: absolute;
  top: 5px;
  left: 0px;
  width: 38px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 38px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const CharacterImageParent = styled.div`
  height: 22px;
  width: 38px;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-white);
  &:hover {
    display: flex;
    width: 38px;
    height: 22px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const DescriptionPlaceholderParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--gap-xl);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-mini);
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
`;
const B = styled.b`
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
const CharacterNameOptions = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  white-space: nowrap;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    align-self: stretch;
    width: auto;
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
const EmptyVisual = styled.div`
  position: relative;
  font-weight: 600;
  display: flex;
  min-width: 10;
  width: auto;
  align-self: unset;
  height: auto;
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
    height: auto;
    min-width: 10;
  }
`;
const VisualPlaceholder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-7xs) 0px 0px;
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
    padding: var(--padding-7xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const InteractiveElementsChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-darkslategray-100);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const FrameChild1 = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  margin: 0 !important;
  bottom: -45px;
  left: -37px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 50px;
    height: 50px;
  }
`;
const EmptyTriples = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  min-width: 20;
  font-weight: 700;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-3xs);
    text-align: center;
    color: var(--color-white);
    display: flex;
    flex: 1;
    height: auto;
    min-width: 20;
  }
`;
const FrameContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 20px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const InteractiveElements = styled.div`
  height: 22px;
  width: 31px;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-white);
  &:hover {
    display: flex;
    width: 31px;
    height: 22px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const CharacterNames = styled.div`
  width: 73px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-4xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 73px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-4xs);
    box-sizing: border-box;
  }
`;
const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
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
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const FrameChild2 = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  margin: 0 !important;
  bottom: -45px;
  left: -38px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 50px;
    height: 50px;
  }
`;
const B1 = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  min-width: 18;
  font-weight: 700;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-3xs);
    text-align: center;
    color: var(--color-white);
    display: flex;
    flex: 1;
    height: auto;
    min-width: 18;
  }
`;
const FrameParent = styled.div`
  position: absolute;
  top: 5px;
  left: 6px;
  width: 18px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 18px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const CharacterNames1 = styled.div`
  width: 73px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 73px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-xs);
    box-sizing: border-box;
  }
`;
const Div = styled.div`
  height: 25px;
  position: relative;
  font-weight: 600;
  display: flex;
  min-width: 10;
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
    min-width: 10;
  }
`;
const FrameChild3 = styled.img`
  height: 50px;
  width: 50px;
  position: absolute;
  margin: 0 !important;
  bottom: -45px;
  left: -39px;
  object-fit: cover;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 50px;
    height: 50px;
  }
`;
const B2 = styled.b`
  position: relative;
  display: flex;
  min-width: 16;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-3xs);
    text-align: center;
    color: var(--color-white);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 16;
  }
`;
const FrameParent1 = styled.div`
  position: absolute;
  top: 5px;
  left: 7px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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
  }
`;
const FrameChild4 = styled.img`
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
const FrameChild5 = styled.img`
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
const FrameChild6 = styled.img`
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
  height: 50px;
  width: 50px;
  position: absolute;
  margin: 0 !important;
  bottom: -45px;
  left: -40px;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 50px;
    height: 50px;
  }
`;
const EmptyElement = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  min-width: 15;
  font-weight: 700;
  height: auto;
  z-index: 4;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-3xs);
    text-align: center;
    color: var(--color-white);
    display: flex;
    flex: 1;
    height: auto;
    min-width: 15;
  }
`;
const FrameParent2 = styled.div`
  position: absolute;
  top: 5px;
  left: 8px;
  width: 15px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 15px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const EllipseParent1 = styled.div`
  align-self: stretch;
  height: 22px;
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
    height: 22px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameWrapper1 = styled.div`
  width: 31px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-10xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-white);
  &:hover {
    display: flex;
    width: 31px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-10xs) 0px 0px;
    box-sizing: border-box;
  }
`;
const CharacterNames2 = styled.div`
  width: 73px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-xs);
  box-sizing: border-box;
  gap: var(--gap-6xs);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 73px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-6xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-xs);
    box-sizing: border-box;
  }
`;
const B3 = styled.b`
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
const Wrapper = styled.div`
  width: 73px;
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
    width: 73px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-5xs);
  }
`;
const StoryContent = styled.div`
  width: 97px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-3xs) var(--padding-6xs) var(--padding-2xs)
    var(--padding-smi);
  box-sizing: border-box;
  gap: var(--gap-14xl);
  height: auto;
  transform: rotate(0deg);
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 97px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-14xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-3xs) var(--padding-6xs) var(--padding-2xs)
      var(--padding-smi);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    display: none;
  }
`;
const H1 = styled.h1`
  margin: 0;
  flex: 1;
  position: relative;
  font-size: inherit;
  font-weight: 400;
  font-family: inherit;
  display: flex;
  max-width: 100%;
  flex-shrink: 0;
  height: auto;
  z-index: 2;
  &:hover {
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: left;
    color: var(--color-gray-100);
    display: flex;
    flex: 1;
    height: auto;
    max-width: 100%;
    flex-shrink: 0;
  }
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Wrapper1 = styled.div`
  width: 433.1px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-28xl);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 433.1px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-28xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding-left: var(--padding-xl);
    padding-right: var(--padding-xl);
    box-sizing: border-box;
  }
`;
const UserInputPlaceholder = styled.div`
  width: 67px;
  position: relative;
  display: flex;
  flex-shrink: 0;
  height: auto;
  z-index: 2;
  &:hover {
    font-family: var(--font-inter);
    font-size: var(--font-size-xl);
    text-align: left;
    color: var(--color-gray-100);
    display: flex;
    width: 67px;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-base);
  }
`;
const UserInputPlaceholderWrapper = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-10xl);
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
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px var(--padding-10xl);
    box-sizing: border-box;
  }
`;
const ButtonBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-lg);
  background-color: var(--color-gold-100);
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
  }
`;
const H2 = styled.h1`
  margin: 0;
  position: absolute;
  top: 41px;
  left: 414px;
  font-size: inherit;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  width: 120px;
  height: 40px;
  cursor: pointer;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: center;
    color: var(--color-mediumpurple-200);
    display: flex;
    width: 120px;
    height: 40px;
  }
  @media screen and (max-width: 1050px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const ButtonContainer = styled.div`
  align-self: stretch;
  height: 114px;
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
    height: 114px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const RectangleIcon = styled.img`
  width: 712.8px;
  position: relative;
  max-height: 100%;
  max-width: 100%;
  background-color: var(--color-tomato-100);
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 712.8px;
    max-width: 100%;
  }
`;
const VectorWrapper = styled.footer`
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 100%;
  width: auto;
  height: auto;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-xs);
    max-width: 100%;
  }
`;
const ButtonContainerParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-mid);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-mediumpurple-200);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: column;
    gap: var(--gap-mid);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const FrameParent3 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-27xl);
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
    gap: var(--gap-27xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-4xl);
  }
`;
const FrameParent4 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-146xl);
  max-width: calc(100% - 117px);
  height: auto;
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-gray-100);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-146xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: calc(100% - 117px);
  }
  @media screen and (max-width: 1050px) {
    gap: 82px;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-22xl);
    max-width: 100%;
  }
`;
const StoryContentParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-xl);
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
    gap: var(--gap-xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const AdditionalElementsChild = styled.img`
  height: 11px;
  width: 109px;
  position: relative;
  display: flex;
  &:hover {
    display: flex;
    width: 109px;
    height: 11px;
  }
`;
const AdditionalElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 0px var(--padding-2xs);
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
    justify-content: flex-end;
    transform: rotate(0deg);
    padding: 0px var(--padding-2xs);
    box-sizing: border-box;
  }
`;
const FrameParent5 = styled.section`
  width: 1085px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 0px var(--padding-xl) 0px 0px;
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-darkslategray-100);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    width: 1085px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-3xs);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-xl) 0px 0px;
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
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) var(--padding-12xs) var(--padding-45xl)
    var(--padding-89xl);
  box-sizing: border-box;
  gap: var(--gap-11xl);
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-darkslategray-100);
  font-family: var(--font-inter);
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 1280px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-11xl);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-45xl) var(--padding-12xs) var(--padding-45xl)
      var(--padding-89xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
  @media screen and (max-width: 1200px) {
    padding-left: var(--padding-35xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-mini);
    padding-left: var(--padding-8xl);
    box-sizing: border-box;
  }
`;

function Game1() {
  const [isFrameOpen, setFrameOpen] = useState(false);

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  return (
    <>
      <DivRoot>
        <MainContainer>
          <MainContainerChild alt="" src="/rectangle-21.svg" />
          <MainContainerItem loading="lazy" alt="" src="/rectangle-22.svg" />
        </MainContainer>
        <Child alt="" src="/group-138.svg" />
        <EllipseParent>
          <FrameChild />
          <FrameItem />
        </EllipseParent>
        <Inner>
          <FrameWrapper>
            <RectangleParent>
              <FrameInner />
              <H>차가운 청년</H>
            </RectangleParent>
          </FrameWrapper>
        </Inner>
        <FrameParent5>
          <StoryContentParent>
            <StoryContent>
              <DescriptionPlaceholderParent>
                <DescriptionPlaceholder>
                  <StoryDescription>1</StoryDescription>
                </DescriptionPlaceholder>
                <CharacterImageParent>
                  <CharacterImage />
                  <FrameGroup>
                    <GroupIcon loading="lazy" alt="" src="/group-166@2x.png" />
                    <CharacterName>8.4</CharacterName>
                  </FrameGroup>
                </CharacterImageParent>
              </DescriptionPlaceholderParent>
              <CharacterNames>
                <CharacterNameOptions>
                  <B>왕자 탄 백마</B>
                </CharacterNameOptions>
                <DescriptionPlaceholderParent>
                  <VisualPlaceholder>
                    <EmptyVisual>2</EmptyVisual>
                  </VisualPlaceholder>
                  <InteractiveElements>
                    <InteractiveElementsChild />
                    <FrameContainer>
                      <FrameChild1 loading="lazy" alt="" src="/group-178.svg" />
                      <EmptyTriples>6.2</EmptyTriples>
                    </FrameContainer>
                  </InteractiveElements>
                </DescriptionPlaceholderParent>
              </CharacterNames>
              <CharacterNames1>
                <CharacterNameOptions>
                  <B>용감한 제리</B>
                </CharacterNameOptions>
                <DescriptionPlaceholderParent>
                  <Container1>
                    <EmptyVisual>3</EmptyVisual>
                  </Container1>
                  <InteractiveElements>
                    <InteractiveElementsChild />
                    <FrameParent>
                      <FrameChild2 loading="lazy" alt="" src="/group-175.svg" />
                      <B1>4.7</B1>
                    </FrameParent>
                  </InteractiveElements>
                </DescriptionPlaceholderParent>
              </CharacterNames1>
              <CharacterNames>
                <CharacterNameOptions>
                  <B>모르면 나가라</B>
                </CharacterNameOptions>
                <DescriptionPlaceholderParent>
                  <Div>4</Div>
                  <InteractiveElements>
                    <InteractiveElementsChild />
                    <FrameParent1>
                      <FrameChild3
                        loading="lazy"
                        alt=""
                        src="/group-177@2x.png"
                      />
                      <B2>3.6</B2>
                    </FrameParent1>
                  </InteractiveElements>
                </DescriptionPlaceholderParent>
              </CharacterNames>
              <CharacterNames2>
                <CharacterNameOptions>
                  <B>이것 뭐예요~?</B>
                </CharacterNameOptions>
                <DescriptionPlaceholderParent>
                  <Div>5</Div>
                  <FrameWrapper1>
                    <EllipseParent1>
                      <InteractiveElementsChild />
                      <FrameParent2>
                        <GroupDiv>
                          <FrameChild4 alt="" src="/group-286.svg" />
                          <FrameChild5 alt="" src="/group-169.svg" />
                          <FrameChild6
                            loading="lazy"
                            alt=""
                            src="/group-170.svg"
                          />
                          <PolygonIcon alt="" src="/polygon-17.svg" />
                        </GroupDiv>
                        <EmptyElement>1.2</EmptyElement>
                      </FrameParent2>
                    </EllipseParent1>
                  </FrameWrapper1>
                </DescriptionPlaceholderParent>
              </CharacterNames2>
              <Wrapper>
                <B3>난괜찮아띵링링</B3>
              </Wrapper>
            </StoryContent>
            <FrameParent4>
              <Wrapper1>
                <H1>직접 쓰는 설명글...</H1>
              </Wrapper1>
              <FrameParent3>
                <UserInputPlaceholderWrapper>
                  <UserInputPlaceholder>(0/50)</UserInputPlaceholder>
                </UserInputPlaceholderWrapper>
                <ButtonContainerParent>
                  <ButtonContainer>
                    <ButtonBackground onClick={openFrame} />
                    <H2 onClick={openFrame}>준비</H2>
                  </ButtonContainer>
                  <VectorWrapper>
                    <RectangleIcon
                      loading="lazy"
                      alt=""
                      src="/rectangle-24.svg"
                    />
                  </VectorWrapper>
                </ButtonContainerParent>
              </FrameParent3>
            </FrameParent4>
          </StoryContentParent>
          <AdditionalElements>
            <AdditionalElementsChild
              loading="lazy"
              alt=""
              src="/group-60.svg"
            />
          </AdditionalElements>
        </FrameParent5>
      </DivRoot>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame3 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
}

export default Game1;
