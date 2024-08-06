import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.div`
  position: absolute;
  top: 195.31px;
  left: 0px;
  background-color: var(--color-mediumseagreen);
  width: 647px;
  height: 355px;
  transform: rotate(-17.57deg);
  transform-origin: 0 0;
  display: flex;
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    width: 647px;
    height: 355px;
    transform: rotate(-17.57deg);
  }
`;
const FrameItem = styled.div`
  position: absolute;
  top: 217px;
  left: 63px;
  border-radius: 50%;
  background-color: var(--color-mediumpurple-200);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 4;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameInner = styled.div`
  position: absolute;
  top: 243px;
  left: 54px;
  border-radius: 50%;
  background-color: var(--color-mediumpurple-200);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 5;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 261px;
  left: 72px;
  border-radius: 50%;
  background-color: var(--color-mediumpurple-200);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 6;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 247px;
  left: 97px;
  border-radius: 50%;
  background-color: var(--color-mediumpurple-200);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 7;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const FrameChild2 = styled.div`
  position: absolute;
  top: 220px;
  left: 91px;
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
const FrameChild3 = styled.div`
  position: absolute;
  top: 238px;
  left: 76px;
  border-radius: 50%;
  background-color: var(--color-gold-200);
  width: 37px;
  height: 37px;
  display: flex;
  z-index: 9;
  &:hover {
    background-color: var(--color-gold-200);
    display: flex;
    width: 37px;
    height: 37px;
  }
`;
const VectorIcon = styled.img`
  position: absolute;
  top: 193px;
  left: 543px;
  width: 55.6px;
  height: 53.9px;
  object-fit: contain;
  background-color: var(--color-gold-200);
  display: flex;
  z-index: 7;
  &:hover {
    background-color: var(--color-gold-200);
    display: flex;
    width: 55.6px;
    height: 53.9px;
  }
`;
const RectangleParentRoot = styled.div`
  position: absolute;
  top: -148px;
  left: 53px;
  width: 724px;
  height: 533.7px;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 724px;
    height: 533.7px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;

const FrameComponent7 = ({ className = "" }) => {
  return (
    <RectangleParentRoot className={className}>
      <FrameChild />
      <FrameItem />
      <FrameInner />
      <EllipseDiv />
      <FrameChild1 />
      <FrameChild2 />
      <FrameChild3 />
      <VectorIcon loading="lazy" alt="" src="/vector-2.svg" />
    </RectangleParentRoot>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
