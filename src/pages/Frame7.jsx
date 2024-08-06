import { useState, useCallback } from "react";
import Frame8 from "../components/Frame8";
import PortalPopup from "../components/PortalPopup";
import styled from "styled-components";
import FrameComponent9 from "../components/FrameComponent9";

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
const FrameInner = styled.img`
  height: 85px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  &:hover {
    display: flex;
    flex: 1;
    height: 85px;
    max-width: 100%;
  }
`;
const Inner = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px 0px var(--padding-2xl);
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
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px 0px var(--padding-2xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const Div = styled.div`
  height: 25px;
  position: relative;
  font-weight: 600;
  display: flex;
  flex-shrink: 0;
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
const Wrapper = styled.div`
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
const EllipseDiv = styled.div`
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
const B = styled.b`
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
const FrameDiv = styled.div`
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
const EllipseGroup = styled.div`
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
const FrameContainer = styled.div`
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
const EmptyButton = styled.div`
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
const EmptyButtonWrapper = styled.div`
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
const FrameChild1 = styled.div`
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
const FrameChild2 = styled.img`
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
const B2 = styled.b`
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
const FrameParent = styled.div`
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
const EllipseContainer = styled.div`
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
const FrameParent1 = styled.div`
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
const Wrapper1 = styled.div`
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
const FrameChild3 = styled.img`
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
const B3 = styled.b`
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
const FrameParent2 = styled.div`
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
const FrameParent3 = styled.div`
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
const Div1 = styled.div`
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
const FrameChild4 = styled.img`
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
const B4 = styled.b`
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
const FrameParent4 = styled.div`
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
const Wrapper2 = styled.div`
  align-self: stretch;
  border-radius: var(--br-5xs);
  background-color: var(--color-linen-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
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
  }
`;
const FrameChild5 = styled.img`
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
const FrameChild6 = styled.img`
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
const FrameChild7 = styled.img`
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
const B5 = styled.b`
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
const FrameParent5 = styled.div`
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
const FrameWrapper = styled.div`
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
const FrameParent6 = styled.div`
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
const B6 = styled.b`
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
const Wrapper3 = styled.div`
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
const FrameGroup = styled.div`
  align-self: stretch;
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
  width: auto;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    align-self: stretch;
    width: auto;
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
`;
const FrameWrapper1 = styled.div`
  width: 97px;
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
    width: 97px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: var(--padding-sm) 0px 0px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 675px) {
    display: none;
  }
`;
const VectorIcon = styled.img`
  position: absolute;
  height: 63.1px;
  width: 81.3px;
  top: 41.88%;
  right: 41.49%;
  bottom: 41.64%;
  left: 41.68%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
  background-color: var(--color-darkgray);
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-darkgray);
    display: flex;
    width: 81.3px;
    height: 63.1px;
  }
`;
const Image98Icon = styled.img`
  position: absolute;
  height: 383px;
  top: 0px;
  bottom: 0px;
  left: 26px;
  max-height: 100%;
  width: 432px;
  object-fit: cover;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    width: 432px;
    height: 383px;
  }
`;
const VectorParent = styled.div`
  position: absolute;
  top: 21px;
  left: 20px;
  border-radius: var(--br-xs);
  background-color: var(--color-gainsboro-100);
  width: 483px;
  height: 383px;
  display: flex;
  z-index: 1;
  &:hover {
    background-color: var(--color-gainsboro-100);
    display: flex;
    width: 483px;
    height: 383px;
    border-radius: var(--br-xs);
  }
`;
const FrameWrapper2 = styled.div`
  position: absolute;
  top: 14px;
  left: 0px;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-100);
  width: 523px;
  height: 425px;
  display: flex;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 523px;
    height: 425px;
    border-radius: var(--br-xs);
  }
`;
const FrameChild8 = styled.img`
  position: absolute;
  top: 0px;
  left: 36px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild9 = styled.img`
  position: absolute;
  top: 0px;
  left: 81.3px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild10 = styled.img`
  position: absolute;
  top: 0px;
  left: 126.7px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild11 = styled.img`
  position: absolute;
  top: 0px;
  left: 172px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild12 = styled.img`
  position: absolute;
  top: 0px;
  left: 217.4px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild13 = styled.img`
  position: absolute;
  top: 0px;
  left: 262.7px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild14 = styled.img`
  position: absolute;
  top: 0px;
  left: 308px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild15 = styled.img`
  position: absolute;
  top: 0px;
  left: 353.4px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild16 = styled.img`
  position: absolute;
  top: 0px;
  left: 398.7px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild17 = styled.img`
  position: absolute;
  top: 0px;
  left: 443.6px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameChild18 = styled.img`
  position: absolute;
  top: 0px;
  left: 488.9px;
  width: 11.7px;
  height: 39px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 11.7px;
    height: 39px;
  }
`;
const FrameParent7 = styled.div`
  height: 439px;
  flex: 1;
  position: relative;
  min-width: 340;
  max-width: 100%;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: 439px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 340;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    min-width: 100%;
  }
`;
const FrameTextarea = styled.textarea`
  border: none;
  background-color: var(--color-darkslategray-100);
  height: 104px;
  width: auto;
  outline: none;
  align-self: stretch;
  border-radius: var(--br-xs);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-sm);
  box-sizing: border-box;
  font-family: var(--font-inter);
  font-weight: 700;
  font-size: var(--font-size-xl);
  color: rgba(234, 231, 220, 0.8);
  gap: var(--gap-0);
  transform: rotate(0deg);
  z-index: 2;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: 104px;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-smi) var(--padding-sm);
    box-sizing: border-box;
  }
`;
const FrameChild19 = styled.img`
  width: 128.7px;
  height: 124.7px;
  position: absolute;
  margin: 0 !important;
  top: 46.8px;
  right: 42.8px;
  object-fit: contain;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 128.7px;
    height: 124.7px;
  }
`;
const FrameChild20 = styled.img`
  height: 138.4px;
  flex: 1;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  z-index: 2;
  &:hover {
    display: flex;
    flex: 1;
    height: 138.4px;
  }
`;
const FrameWrapper3 = styled.div`
  width: 231px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 0px var(--padding-46xl);
  box-sizing: border-box;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 231px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    padding: 0px var(--padding-46xl);
    box-sizing: border-box;
  }
`;
const FrameParent8 = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-linen-200);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-smi) var(--padding-4xs) var(--padding-9xs-9)
    var(--padding-2xs);
  box-sizing: border-box;
  position: relative;
  gap: var(--gap-sm-7);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-200);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-sm-7);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-smi) var(--padding-4xs) var(--padding-9xs-9)
      var(--padding-2xs);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const FrameWrapper4 = styled.div`
  align-self: stretch;
  border-radius: var(--br-xs);
  background-color: var(--color-tomato-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-xs);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-xs);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const H = styled.h1`
  margin: 0;
  width: 168px;
  position: relative;
  font-size: inherit;
  line-height: 26px;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  flex-shrink: 0;
  height: auto;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    line-height: 26px;
    text-align: center;
    color: var(--color-mediumpurple-200);
    display: flex;
    width: 168px;
    height: auto;
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-xl);
    line-height: 21px;
  }
`;
const Wrapper4 = styled.div`
  align-self: stretch;
  border-radius: var(--br-lg);
  background-color: var(--color-gold-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-25xl) var(--padding-xl);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  cursor: pointer;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    align-self: stretch;
    width: auto;
    height: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    border-radius: var(--br-lg);
    padding: var(--padding-25xl) var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const FrameParent9 = styled.div`
  width: 406px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-sm);
  min-width: 406;
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 406px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-sm);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    min-width: 406;
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    flex: 1;
  }
  @media screen and (max-width: 675px) {
    min-width: 100%;
  }
`;
const FrameParent10 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: var(--gap-lg);
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
    gap: var(--gap-lg);
    align-items: flex-end;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const FrameChild21 = styled.img`
  align-self: stretch;
  height: 39px;
  position: relative;
  max-width: 100%;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  width: auto;
  &:hover {
    display: flex;
    align-self: stretch;
    width: auto;
    height: 39px;
  }
`;
const FrameParent11 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-lg);
  max-width: calc(100% - 117px);
  height: auto;
  transform: rotate(0deg);
  font-size: var(--font-size-6xl);
  color: var(--color-mediumpurple-200);
  &:hover {
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: column;
    gap: var(--gap-lg);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: calc(100% - 117px);
  }
  @media screen and (max-width: 675px) {
    max-width: 100%;
  }
`;
const FrameParent12 = styled.div`
  width: 1065px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-xl);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 1065px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-xl);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const Child = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) 0px var(--padding-2xl);
  box-sizing: border-box;
  max-width: 100%;
  width: auto;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  text-align: center;
  font-size: var(--font-size-3xs);
  color: var(--color-darkslategray-100);
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
    padding: 0px var(--padding-xl) 0px var(--padding-2xl);
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
  padding: var(--padding-45xl) 0px;
  box-sizing: border-box;
  gap: var(--gap-base);
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 1280px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-base);
    align-items: flex-end;
    justify-content: flex-start;
    padding: var(--padding-45xl) 0px;
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const Frame7 = () => {
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
        <EllipseParent>
          <FrameChild />
          <FrameItem />
        </EllipseParent>
        <Inner>
          <FrameInner alt="" src="/group-138.svg" />
        </Inner>
        <FrameComponent9 />
        <Child>
          <FrameParent12>
            <FrameWrapper1>
              <FrameGroup>
                <FrameContainer>
                  <Wrapper>
                    <Div>1</Div>
                  </Wrapper>
                  <EllipseGroup>
                    <EllipseDiv />
                    <FrameDiv>
                      <GroupIcon
                        loading="lazy"
                        alt=""
                        src="/group-166@2x.png"
                      />
                      <B>8.4</B>
                    </FrameDiv>
                  </EllipseGroup>
                </FrameContainer>
                <FrameParent1>
                  <Container1>
                    <B1>왕자 탄 백마</B1>
                  </Container1>
                  <FrameContainer>
                    <EmptyButtonWrapper>
                      <EmptyButton>2</EmptyButton>
                    </EmptyButtonWrapper>
                    <EllipseContainer>
                      <FrameChild1 />
                      <FrameParent>
                        <FrameChild2
                          loading="lazy"
                          alt=""
                          src="/group-178.svg"
                        />
                        <B2>6.2</B2>
                      </FrameParent>
                    </EllipseContainer>
                  </FrameContainer>
                </FrameParent1>
                <FrameParent3>
                  <Container1>
                    <B1>용감한 제리</B1>
                  </Container1>
                  <FrameContainer>
                    <Wrapper1>
                      <EmptyButton>3</EmptyButton>
                    </Wrapper1>
                    <EllipseContainer>
                      <FrameChild1 />
                      <FrameParent2>
                        <FrameChild3
                          loading="lazy"
                          alt=""
                          src="/group-175.svg"
                        />
                        <B3>4.7</B3>
                      </FrameParent2>
                    </EllipseContainer>
                  </FrameContainer>
                </FrameParent3>
                <FrameParent1>
                  <Container1>
                    <B1>모르면 나가라</B1>
                  </Container1>
                  <FrameContainer>
                    <Div1>4</Div1>
                    <EllipseContainer>
                      <FrameChild1 />
                      <FrameParent4>
                        <FrameChild4
                          loading="lazy"
                          alt=""
                          src="/group-177@2x.png"
                        />
                        <B4>3.6</B4>
                      </FrameParent4>
                    </EllipseContainer>
                  </FrameContainer>
                </FrameParent1>
                <FrameParent6>
                  <Wrapper2>
                    <B1>이것뭐예요~?</B1>
                  </Wrapper2>
                  <FrameContainer>
                    <Div1>5</Div1>
                    <FrameWrapper>
                      <EllipseParent1>
                        <FrameChild1 />
                        <FrameParent5>
                          <GroupDiv>
                            <FrameChild5 alt="" src="/group-286.svg" />
                            <FrameChild6 alt="" src="/group-169.svg" />
                            <FrameChild7
                              loading="lazy"
                              alt=""
                              src="/group-170.svg"
                            />
                            <PolygonIcon alt="" src="/polygon-17.svg" />
                          </GroupDiv>
                          <B5>1.2</B5>
                        </FrameParent5>
                      </EllipseParent1>
                    </FrameWrapper>
                  </FrameContainer>
                </FrameParent6>
                <Wrapper3>
                  <B6>난괜찮아띵링링</B6>
                </Wrapper3>
              </FrameGroup>
            </FrameWrapper1>
            <FrameParent11>
              <FrameParent10>
                <FrameParent7>
                  <FrameWrapper2>
                    <VectorParent>
                      <VectorIcon loading="lazy" alt="" src="/vector3.svg" />
                      <Image98Icon alt="" src="/image-982@2x.png" />
                    </VectorParent>
                  </FrameWrapper2>
                  <FrameChild8 loading="lazy" alt="" src="/group-200.svg" />
                  <FrameChild9 loading="lazy" alt="" src="/group-201.svg" />
                  <FrameChild10 loading="lazy" alt="" src="/group-202.svg" />
                  <FrameChild11 loading="lazy" alt="" src="/group-203.svg" />
                  <FrameChild12 loading="lazy" alt="" src="/group-204.svg" />
                  <FrameChild13 loading="lazy" alt="" src="/group-205.svg" />
                  <FrameChild14 loading="lazy" alt="" src="/group-206.svg" />
                  <FrameChild15 alt="" src="/group-207.svg" />
                  <FrameChild16 alt="" src="/group-208.svg" />
                  <FrameChild17 alt="" src="/group-234.svg" />
                  <FrameChild18 alt="" src="/group-235.svg" />
                </FrameParent7>
                <FrameParent9>
                  <FrameWrapper4>
                    <FrameParent8>
                      <FrameTextarea
                        placeholder="정답 맞추기..."
                        rows={5}
                        cols={18}
                      />
                      <FrameChild19
                        loading="lazy"
                        alt=""
                        src="/group-58@2x.png"
                      />
                      <FrameWrapper3>
                        <FrameChild20
                          loading="lazy"
                          alt=""
                          src="/group-168.svg"
                        />
                      </FrameWrapper3>
                    </FrameParent8>
                  </FrameWrapper4>
                  <Wrapper4 onClick={openFrame}>
                    <H>이거다!</H>
                  </Wrapper4>
                </FrameParent9>
              </FrameParent10>
              <FrameChild21 loading="lazy" alt="" src="/group-59.svg" />
            </FrameParent11>
          </FrameParent12>
        </Child>
      </DivRoot>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame8 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default Frame7;
