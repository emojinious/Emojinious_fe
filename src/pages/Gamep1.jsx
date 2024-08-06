import styled from "styled-components";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent from "../components/FrameComponent";
import FrameComponent10 from "../components/FrameComponent10";
import Header from "../components/Header";

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
  height: 50.1px;
  width: 37.6px;
  position: relative;
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
const Inner = styled.div`
  margin-top: -10204px;
  width: 362.5px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl) var(--padding-10088xl-9);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 362.5px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: center;
    transform: rotate(0deg);
    padding: 0px var(--padding-xl) var(--padding-10088xl-9);
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 1200px) {
    padding-bottom: 2775px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 1050px) {
    padding-bottom: 1804px;
    box-sizing: border-box;
  }
  @media screen and (max-width: 750px) {
    padding-bottom: 1173px;
    box-sizing: border-box;
  }
`;
const FrameParent = styled.div`
  width: 958px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: var(--gap-lgi);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 958px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-lgi);
    align-items: flex-start;
    justify-content: center;
    transform: rotate(0deg);
    max-width: 100%;
  }
  @media screen and (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;
const Child = styled.section`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: 0px var(--padding-xl);
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
  padding: var(--padding-43xl) 0px;
  box-sizing: border-box;
  gap: var(--gap-18xl);
  line-height: normal;
  letter-spacing: normal;
  height: 832px;
  @media screen and (max-width: 1050px) {
    height: auto;
  }
  @media screen and (max-width: 750px) {
    gap: var(--gap-4xl);
  }
`;

const Gamep1 = () => {
  return (
    <DivRoot>
      <Header/>
      <Inner>
        <EllipseParent>
          <FrameChild />
          <FrameItem />
        </EllipseParent>
      </Inner>
      <FrameComponent11 />
      <Child>
        <FrameParent>
          <FrameComponent image98="/image-98@2x.png" />
          <FrameComponent10 />
        </FrameParent>
      </Child>
    </DivRoot>
  );
};

export default Gamep1;
