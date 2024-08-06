import { useCallback } from "react";
import styled from "styled-components";
import Container from "../components/Container";
import GroupComponent from "../components/GroupComponent";
import { useNavigate } from "react-router-dom";
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
const Div = styled.div`
  position: relative;
  font-weight: 600;
  display: flex;
  min-width: 20;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 1;
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
const Div1 = styled.div`
  position: relative;
  font-weight: 600;
  display: flex;
  min-width: 21;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 1;
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
const Divider = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-44xl);
  width: auto;
  align-self: unset;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    flex-direction: column;
    gap: var(--gap-44xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const ContentWrapper = styled.div`
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
const FrameChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-gainsboro-200);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const FrameItem = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const EllipseParent = styled.div`
  height: 60px;
  width: 60px;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 60px;
    height: 60px;
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
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-200);
  width: 100%;
  height: 100%;
  display: flex;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-xs);
  }
`;
const B = styled.b`
  position: absolute;
  top: 12.9px;
  left: 30.5px;
  font-size: var(--font-size-xl);
  display: flex;
  font-family: var(--font-inter);
  color: var(--color-darkslategray-100);
  text-align: center;
  width: 132px;
  height: 27px;
  font-weight: 700;
  z-index: 3;
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
const Wrapper = styled.button`
  cursor: pointer;
  border: 1.9px solid var(--color-lightgray);
  padding: 0;
  background-color: var(--color-goldenrod-200);
  position: absolute;
  width: 192.1px;
  top: 4.1px;
  right: 3.4px;
  left: 3.5px;
  border-radius: 9.47px;
  box-sizing: border-box;
  height: 49.7px;
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
    height: 49.7px;
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
const GroupDiv = styled.div`
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
const FrameContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 100%;
    height: 100%;
  }
`;
const RectangleParent = styled.div`
  align-self: stretch;
  height: 58px;
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
    height: 58px;
    gap: var(--gap-0);
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
  padding: var(--padding-12xs) var(--padding-sm) 0px 0px;
  box-sizing: border-box;
  min-width: 138;
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
    padding: var(--padding-12xs) var(--padding-sm) 0px 0px;
    box-sizing: border-box;
    min-width: 138;
  }
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-200);
  width: 100%;
  height: 100%;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro-200);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-xs);
  }
`;
const Div2 = styled.div`
  flex: 1;
  position: relative;
  font-weight: 900;
  display: flex;
  height: auto;
  z-index: 3;
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
const Container1 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-gold-100);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-8xs) var(--padding-2xs);
  box-sizing: border-box;
  height: 100%;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 2;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-sm) var(--padding-8xs) var(--padding-2xs);
    box-sizing: border-box;
  }
`;
const FrameDiv = styled.div`
  width: 102px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 102px;
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
const FrameGroup = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  width: auto;
  height: auto;
  z-index: 1;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-5xl);
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
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
const FrameChild2 = styled.img`
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
const FrameChild3 = styled.img`
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
const FrameChild4 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 9.47px;
  background-color: var(--color-deepskyblue-100);
  border: 1.9px solid var(--color-linen-100);
  box-sizing: border-box;
  width: 192.1px;
  height: 49.7px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 192.1px;
    height: 49.7px;
    border-radius: 9.47px;
    border: 1.9px solid var(--color-linen-100);
    box-sizing: border-box;
  }
`;
const B1 = styled.b`
  position: absolute;
  top: 12.9px;
  left: 31.5px;
  display: flex;
  width: 129px;
  height: 54px;
  min-width: 129;
  font-weight: 700;
  z-index: 3;
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
const RectangleParent1 = styled.div`
  position: absolute;
  width: 192.1px;
  top: 4.1px;
  right: 3.4px;
  left: 3.5px;
  height: 66.9px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 192.1px;
    height: 66.9px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameWrapper1 = styled.div`
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
const Frame16 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-deepskyblue-100);
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) var(--padding-8xs) var(--padding-2xs);
  box-sizing: border-box;
  height: 100%;
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 2;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-sm) var(--padding-8xs) var(--padding-2xs);
    box-sizing: border-box;
  }
`;
const FrameWrapper2 = styled.div`
  width: 102px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-12xs) 0px 0px;
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  font-size: var(--font-size-6xl);
  color: var(--color-linen-100);
  &:hover {
    display: flex;
    width: 102px;
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
const FrameParent = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-5xl);
  width: auto;
  height: auto;
  z-index: 1;
  font-size: var(--font-size-xl);
  color: var(--color-white);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-5xl);
    align-items: flex-start;
    justify-content: flex-start;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FrameParent1 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-21xl);
  min-width: 275;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-6xl);
  color: var(--color-linen-100);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-21xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 275;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    gap: var(--gap-xl);
  }
`;
const Info = styled.div`
  align-self: stretch;
  border-radius: 13.83px;
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-21xl) var(--padding-27xl) var(--padding-20xl);
  box-sizing: border-box;
  gap: var(--gap-10xl);
  max-width: 100%;
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-10xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: 13.83px;
    padding: var(--padding-21xl) var(--padding-27xl) var(--padding-20xl);
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 675px) {
    flex-wrap: wrap;
    padding-left: var(--padding-4xl);
    padding-right: var(--padding-4xl);
    box-sizing: border-box;
  }
  @media screen and (max-width: 450px) {
    padding-top: var(--padding-7xl);
    padding-bottom: var(--padding-6xl);
    box-sizing: border-box;
  }
`;
const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-gold-100);
  width: 276px;
  height: 109px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 276px;
    height: 109px;
    border-radius: var(--br-xs);
  }
`;
const B2 = styled.b`
  position: absolute;
  top: 37px;
  left: 42px;
  display: flex;
  font-weight: 700;
  height: auto;
  cursor: pointer;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: left;
    color: var(--color-gray-200);
    display: flex;
    height: auto;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Buttons = styled.div`
  height: 117px;
  flex: 1;
  position: relative;
  min-width: 179;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: 117px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 179;
  }
`;
const ButtonsChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-mediumseagreen);
  width: 276px;
  height: 109px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    width: 276px;
    height: 109px;
    border-radius: var(--br-xs);
  }
`;
const B3 = styled.b`
  position: absolute;
  top: 37px;
  left: 50px;
  display: flex;
  font-weight: 700;
  height: auto;
  cursor: pointer;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: left;
    color: var(--color-white);
    display: flex;
    height: auto;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const Buttons1 = styled.div`
  height: 117px;
  flex: 1;
  position: relative;
  min-width: 179;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  color: var(--color-white);
  &:hover {
    display: flex;
    flex: 1;
    height: 117px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 179;
  }
`;
const ActionButtons = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  width: auto;
  height: auto;
  transform: rotate(0deg);
  font-size: var(--font-size-11xl);
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-lg);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
  @media screen and (max-width: 675px) {
    flex-wrap: wrap;
  }
`;
const GameInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-6xl);
  min-width: 372;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-6xl);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 372;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const Content = styled.div`
  width: 910px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lgi);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 910px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-lgi);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 750px) {
    flex-wrap: wrap;
  }
`;
const Main1 = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px var(--padding-3xl);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: left;
  font-size: var(--font-size-11xl-7);
  color: var(--color-gray-200);
  font-family: var(--font-inter);
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
    padding: 0px var(--padding-xl) 0px var(--padding-3xl);
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
  padding: var(--padding-43xl) 0px var(--padding-58xl);
  box-sizing: border-box;
  gap: var(--gap-6xl);
  line-height: normal;
  letter-spacing: normal;
  height: 832px;
`;

const TotalScore = () => {
  const navigate = useNavigate();

  const onBackgroundClick = useCallback(() => {
    navigate("/room");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <DivRoot>
      <Header/>
      <Main1>
        <Content>
          <Container />
          <GameInfo>
            <Info>
              <ContentWrapper>
                <Divider>
                  <Div>2</Div>
                  <Div>3</Div>
                  <Div1>4</Div1>
                  <Div>5</Div>
                </Divider>
              </ContentWrapper>
              <FrameParent1>
                <GroupComponent
                  group257="/group-186.svg"
                  prop="용감한 제리"
                  prop1="99점"
                />
                <GroupComponent
                  group257="/group-187.svg"
                  propBackgroundColor="#fea1bd"
                  propBackgroundColor2="#cc6e8a"
                  prop="모르면 나가라"
                  propColor="#434040"
                  propWidth="125px"
                  propMinWidth="125"
                  propHeight="100%"
                  propHeight1="100%"
                  propBackgroundColor4="#fea1bd"
                  prop1="98점"
                />
                <FrameGroup>
                  <EllipseParent>
                    <FrameChild />
                    <FrameItem loading="lazy" alt="" src="/group-259@2x.png" />
                  </EllipseParent>
                  <FrameWrapper>
                    <RectangleParent>
                      <FrameInner />
                      <FrameContainer>
                        <GroupDiv>
                          <Wrapper>
                            <B>이것뭐예요~?</B>
                          </Wrapper>
                        </GroupDiv>
                      </FrameContainer>
                    </RectangleParent>
                  </FrameWrapper>
                  <FrameDiv>
                    <RectangleParent>
                      <FrameInner />
                      <FrameChild1 />
                      <Container1>
                        <Div2>83점</Div2>
                      </Container1>
                    </RectangleParent>
                  </FrameDiv>
                </FrameGroup>
                <FrameParent>
                  <EllipseParent>
                    <FrameChild />
                    <FrameContainer>
                      <GroupIcon alt="" src="/group-2861.svg" />
                      <FrameChild2 alt="" src="/group-1692.svg" />
                      <FrameChild3
                        loading="lazy"
                        alt=""
                        src="/group-1702.svg"
                      />
                      <PolygonIcon alt="" src="/polygon-171.svg" />
                    </FrameContainer>
                  </EllipseParent>
                  <FrameWrapper>
                    <RectangleParent>
                      <FrameInner />
                      <FrameContainer>
                        <FrameWrapper1>
                          <RectangleParent1>
                            <FrameChild4 />
                            <B1>난괜찮아띵링링</B1>
                          </RectangleParent1>
                        </FrameWrapper1>
                      </FrameContainer>
                    </RectangleParent>
                  </FrameWrapper>
                  <FrameWrapper2>
                    <RectangleParent>
                      <FrameInner />
                      <FrameChild1 />
                      <Frame16>
                        <Div2>74점</Div2>
                      </Frame16>
                    </RectangleParent>
                  </FrameWrapper2>
                </FrameParent>
              </FrameParent1>
            </Info>
            <ActionButtons>
              <Buttons>
                <Background onClick={onBackgroundClick} />
                <B2 onClick={onBackgroundClick}>한 번 더 플레이</B2>
              </Buttons>
              <Buttons1>
                <ButtonsChild onClick={onRectangleClick} />
                <B3 onClick={onRectangleClick}>메인 화면으로</B3>
              </Buttons1>
            </ActionButtons>
          </GameInfo>
        </Content>
      </Main1>
    </DivRoot>
  );
};

export default TotalScore;
