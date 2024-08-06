import { useState, useCallback } from "react";
import Frame1 from "../components/Frame1";
import PortalPopup from "../components/PortalPopup";
import styled from "styled-components";
import FrameComponent7 from "../components/FrameComponent7";
import { useNavigate } from "react-router-dom";

const Shapes = styled.div`
  position: absolute;
  top: 394.65px;
  left: 678px;
  background-color: var(--color-linen-100);
  width: 647px;
  height: 355px;
  transform: rotate(-44.52deg);
  transform-origin: 0 0;
  display: flex;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(-44.52deg);
  }
`;
const Shapes1 = styled.div`
  position: absolute;
  top: -272.99px;
  left: 910.17px;
  background-color: var(--color-lightpink-100);
  width: 647px;
  height: 355px;
  transform: rotate(18.08deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(18.08deg);
  }
`;
const Shapes2 = styled.div`
  position: absolute;
  top: 506.43px;
  left: 680px;
  background-color: var(--color-deepskyblue-100);
  width: 647px;
  height: 355px;
  transform: rotate(-7.32deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(-7.32deg);
  }
`;
const Shapes3 = styled.div`
  position: absolute;
  top: 297.17px;
  left: -412px;
  background-color: var(--color-linen-100);
  width: 647px;
  height: 355px;
  transform: rotate(-4.27deg);
  transform-origin: 0 0;
  display: flex;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(-4.27deg);
  }
`;
const Shapes4 = styled.div`
  position: absolute;
  top: 796.35px;
  left: -221px;
  background-color: var(--color-gold-100);
  width: 647px;
  height: 355px;
  transform: rotate(-31.53deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(-31.53deg);
  }
`;
const Shapes5 = styled.div`
  position: absolute;
  top: 59.31px;
  left: 47px;
  background-color: var(--color-tomato-100);
  width: 647px;
  height: 355px;
  transform: rotate(-17.57deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(-17.57deg);
  }
`;
const Shapes6 = styled.div`
  position: absolute;
  top: 495.43px;
  left: 689px;
  background-color: var(--color-gold-100);
  width: 647px;
  height: 355px;
  transform: rotate(-7.32deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(-7.32deg);
  }
`;
const FrameChild = styled.div`
  position: absolute;
  top: 741px;
  left: 1185.7px;
  border-radius: var(--br-3xs);
  background-color: var(--color-linen-100);
  width: 64.2px;
  height: 64.2px;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 64.2px;
    height: 64.2px;
    border-radius: var(--br-3xs);
  }
`;
const Shapes7 = styled.div`
  position: absolute;
  top: -279.99px;
  left: 922.17px;
  background-color: var(--color-tomato-100);
  width: 647px;
  height: 355px;
  transform: rotate(18.08deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 3;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(18.08deg);
  }
`;
const FrameItem = styled.img`
  position: absolute;
  top: 464px;
  left: 858px;
  width: 234.3px;
  height: 234.3px;
  object-fit: contain;
  display: flex;
  z-index: 7;
  &:hover {
    display: flex;
    width: 234.3px;
    height: 234.3px;
  }
`;
const FrameInner = styled.div`
  position: absolute;
  top: 46.01px;
  left: -390px;
  border: 5px solid var(--color-tomato-100);
  box-sizing: border-box;
  width: 618px;
  height: 339.1px;
  transform: rotate(-4.27deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 618px;
    height: 339.1px;
    transform: rotate(-4.27deg);
    border: 5px solid var(--color-tomato-100);
    box-sizing: border-box;
  }
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 114.8px;
  left: 22px;
  border-radius: 50%;
  background-color: var(--color-lightpink-100);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 234.8px;
  left: 97px;
  border-radius: 50%;
  background-color: var(--color-deepskyblue-100);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 257.2px;
  left: 0px;
  width: 251.5px;
  height: 384.1px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 251.5px;
    height: 384.1px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const Shapes8 = styled.div`
  position: absolute;
  top: 667px;
  left: 362px;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 7;
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const Shapes9 = styled.div`
  position: absolute;
  top: 686px;
  left: 339px;
  border-radius: 50%;
  background-color: var(--color-gold-100);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 8;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const Shapes10 = styled.div`
  position: absolute;
  top: 711px;
  left: 397px;
  border-radius: 50%;
  background-color: var(--color-tomato-100);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 7;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 37px;
    height: 37px;
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
const FrameChild2 = styled.div`
  position: absolute;
  top: 90.7px;
  left: 120.3px;
  border-radius: 50%;
  background-color: var(--color-tomato-100);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 7;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameChild3 = styled.div`
  position: absolute;
  top: 110.7px;
  left: 139.3px;
  border-radius: 50%;
  background-color: var(--color-mediumpurple-200);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 8;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameParent = styled.section`
  position: absolute;
  top: 80.3px;
  left: 232.7px;
  width: 852.6px;
  height: 631px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 852.6px;
    height: 631px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const Shapes11 = styled.div`
  position: absolute;
  top: 540px;
  left: 853px;
  border-radius: 50%;
  background-color: var(--color-gold-200);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 8;
  &:hover {
    background-color: var(--color-gold-200);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const MixedShapesChild = styled.div`
  position: absolute;
  top: 355.93px;
  left: 0px;
  border: 5px solid var(--color-mediumpurple-200);
  box-sizing: border-box;
  width: 612.6px;
  height: 334.5px;
  transform: rotate(-44.52deg);
  transform-origin: 0 0;
  display: flex;
  z-index: 1;
  &:hover {
    display: flex;
    width: 612.6px;
    height: 334.5px;
    transform: rotate(-44.52deg);
    border: 5px solid var(--color-mediumpurple-200);
    box-sizing: border-box;
  }
`;
const MixedShapesItem = styled.div`
  position: absolute;
  top: 213px;
  left: 449.1px;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const MixedShapes = styled.div`
  position: absolute;
  top: 0px;
  left: 731.9px;
  width: 548.1px;
  height: 594.4px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 548.1px;
    height: 594.4px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 736.9px;
  left: 812.2px;
  width: 52.5px;
  height: 49.7px;
  object-fit: contain;
  background-color: var(--color-tomato-100);
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 52.5px;
    height: 49.7px;
  }
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 338.35px;
  left: 0px;
  background-color: var(--color-mediumpurple-200);
  width: 647px;
  height: 355px;
  transform: rotate(-31.53deg);
  transform-origin: 0 0;
  display: flex;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(-31.53deg);
  }
`;
const RectangleIcon = styled.img`
  position: absolute;
  top: 173px;
  left: 382.7px;
  width: 147.3px;
  height: 179px;
  object-fit: contain;
  background-color: var(--color-linen-100);
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    width: 147.3px;
    height: 179px;
  }
`;
const FrameChild4 = styled.img`
  position: absolute;
  top: 233.5px;
  left: 389.7px;
  width: 115.3px;
  height: 101.7px;
  object-fit: contain;
  background-color: var(--color-deepskyblue-100);
  display: flex;
  z-index: 5;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 115.3px;
    height: 101.7px;
  }
`;
const FrameChild5 = styled.img`
  position: absolute;
  top: 298.6px;
  left: 385.1px;
  width: 92.9px;
  height: 47.6px;
  object-fit: contain;
  background-color: var(--color-tomato-100);
  display: flex;
  z-index: 6;
  &:hover {
    background-color: var(--color-tomato-100);
    display: flex;
    width: 92.9px;
    height: 47.6px;
  }
`;
const VectorIcon1 = styled.img`
  position: absolute;
  top: 191.4px;
  left: 284.5px;
  width: 47.5px;
  height: 50.8px;
  object-fit: contain;
  background-color: var(--color-lightpink-100);
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-lightpink-100);
    display: flex;
    width: 47.5px;
    height: 50.8px;
  }
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 454px;
  left: -235px;
  width: 737.1px;
  height: 640.9px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 737.1px;
    height: 640.9px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameChild6 = styled.img`
  position: absolute;
  top: 200px;
  left: 197px;
  width: 168.8px;
  height: 168.8px;
  object-fit: contain;
  display: flex;
  z-index: 8;
  &:hover {
    display: flex;
    width: 168.8px;
    height: 168.8px;
  }
`;
const FrameChild7 = styled.img`
  position: absolute;
  top: 46px;
  left: 996px;
  width: 190.6px;
  height: 190.6px;
  object-fit: contain;
  display: flex;
  z-index: 7;
  &:hover {
    display: flex;
    width: 190.6px;
    height: 190.6px;
  }
`;
const Icon1 = styled.img`
  position: absolute;
  top: 361.7px;
  left: 464.8px;
  width: 25.9px;
  height: 38.9px;
  background-color: var(--color-deepskyblue-100);
  display: flex;
  cursor: pointer;
  z-index: 5;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 25.9px;
    height: 38.9px;
  }
`;
const FrameChild8 = styled.div`
  position: absolute;
  top: 272px;
  left: 424px;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameChild9 = styled.div`
  position: absolute;
  top: 290px;
  left: 406px;
  border-radius: 50%;
  background-color: var(--color-deepskyblue-100);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 5;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameChild10 = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 507.1px;
  height: 591.9px;
  object-fit: contain;
  display: flex;
  z-index: 9;
  &:hover {
    display: flex;
    width: 507.1px;
    height: 591.9px;
  }
`;
const Parent = styled.div`
  position: absolute;
  top: 392px;
  left: 740px;
  width: 507.1px;
  height: 440px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 507.1px;
    height: 440px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const UnionIcon = styled.img`
  position: absolute;
  top: 424px;
  left: 184px;
  width: 934.7px;
  height: 776px;
  mix-blend-mode: multiply;
  background-color: var(--color-darkslategray-500);
  display: flex;
  z-index: 10;
  &:hover {
    mix-blend-mode: multiply;
    background-color: var(--color-darkslategray-500);
    display: flex;
    width: 934.7px;
    height: 776px;
  }
`;
const Icon2 = styled.img`
  position: absolute;
  top: 623px;
  left: 514px;
  width: 250.7px;
  height: 89px;
  display: flex;
  cursor: pointer;
  z-index: 11;
  &:hover {
    display: flex;
    width: 250.7px;
    height: 89px;
  }
`;
const ShapesParent = styled.main`
  height: 832px;
  flex: 1;
  position: relative;
  max-width: 100%;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    flex: 1;
    height: 832px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const HomeRoot = styled.div`
  width: 1280px;
  position: relative;
  background-color: var(--color-darkslategray-100);
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  gap: var(--gap-0);
  &:hover {
    background-color: var(--color-darkslategray-100);
    display: flex;
    width: 1280px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const HOME = () => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const navigate = useNavigate();

  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onNodeClick = useCallback(() => {
    navigate("/home-2d");
  }, [navigate]);

  return (
    <>
      <HomeRoot>
        <ShapesParent>
          <Shapes />
          <Shapes1 />
          <Shapes2 />
          <Shapes3 />
          <Shapes4 />
          <Shapes5 />
          <Shapes6 />
          <FrameChild />
          <Shapes7 />
          <FrameItem loading="lazy" alt="" src="/group-99@2x.png" />
          <RectangleParent>
            <FrameInner />
            <EllipseDiv />
            <FrameChild1 />
          </RectangleParent>
          <Shapes8 />
          <Shapes9 />
          <Shapes10 />
          <FrameParent>
            <GroupIcon alt="" src="/group-124.svg" />
            <FrameChild2 />
            <FrameChild3 />
          </FrameParent>
          <Shapes11 />
          <MixedShapes>
            <MixedShapesChild />
            <MixedShapesItem />
          </MixedShapes>
          <VectorIcon loading="lazy" alt="" src="/vector2.svg" />
          <RectangleGroup>
            <RectangleDiv />
            <RectangleIcon alt="" src="/rectangle-94.svg" />
            <FrameChild4 alt="" src="/rectangle-95.svg" />
            <FrameChild5 alt="" src="/rectangle-97.svg" />
            <VectorIcon1 loading="lazy" alt="" src="/vector-1.svg" />
          </RectangleGroup>
          <FrameComponent7 />
          <FrameChild6 alt="" src="/group-95@2x.png" />
          <FrameChild7 loading="lazy" alt="" src="/group-97@2x.png" />
          <Parent>
            <Icon1 loading="lazy" alt="" src="/.svg" onClick={openFrame} />
            <FrameChild8 />
            <FrameChild9 />
            <FrameChild10 alt="" src="/group-269@2x.png" />
          </Parent>
          <UnionIcon alt="" src="/union1.svg" />
          <Icon2 alt="" src="/-1.svg" onClick={onNodeClick} />
        </ShapesParent>
      </HomeRoot>
      {isFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFrame}
        >
          <Frame1 onClose={closeFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default HOME;
