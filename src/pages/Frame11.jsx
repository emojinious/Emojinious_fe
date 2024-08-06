import styled from "styled-components";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent from "../components/FrameComponent";
import FrameComponent14 from "../components/FrameComponent14";

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
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
const Inner = styled.section`
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
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-45xl) 0px var(--padding-66xl);
  box-sizing: border-box;
  gap: var(--gap-10xl);
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 1280px;
    height: auto;
    flex-direction: column;
    gap: var(--gap-10xl);
    align-items: flex-start;
    justify-content: flex-start;
    padding: var(--padding-45xl) 0px var(--padding-66xl);
    box-sizing: border-box;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const Frame11 = () => {
  return (
    <DivRoot>
      <EllipseParent>
        <FrameChild />
        <FrameItem />
      </EllipseParent>
      <FrameComponent5
        group138="/group-138.svg"
        prop="모르면 나가라"
        group250="/group-250.svg"
      />
      <Inner>
        <FrameParent>
          <FrameComponent
            propBackgroundColor="#fea1bd"
            image98="/image-98@2x.png"
            propBorder="3px solid #fea1bd"
          />
          <FrameComponent14 />
        </FrameParent>
      </Inner>
    </DivRoot>
  );
};

export default Frame11;
