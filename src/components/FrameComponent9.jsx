import styled from "styled-components";
import PropTypes from "prop-types";

const FrameChild = styled.div`
  height: 20px;
  width: 20px;
  position: relative;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen);
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    width: 20px;
    height: 20px;
  }
`;
const EllipseParent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: var(--gap-6xs);
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
    gap: var(--gap-6xs);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const EllipseDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen);
  width: 20px;
  height: 20px;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    width: 20px;
    height: 20px;
  }
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 0px;
  left: 27px;
  border-radius: 50%;
  background-color: var(--color-mediumseagreen);
  width: 20px;
  height: 20px;
  display: flex;
  z-index: 2;
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    width: 20px;
    height: 20px;
  }
`;
const EllipseGroup = styled.div`
  height: 20px;
  width: 47px;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 47px;
    height: 20px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameParent = styled.div`
  flex: 1;
  border-radius: var(--br-mini);
  background-color: var(--color-linen-100);
  border: 3px solid var(--color-mediumseagreen);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  padding: var(--padding-base) var(--padding-xl) var(--padding-base)
    var(--padding-3xl);
  gap: var(--gap-mid);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    gap: var(--gap-mid);
    align-items: flex-start;
    justify-content: center;
    transform: rotate(0deg);
    border-radius: var(--br-mini);
    padding: var(--padding-base) var(--padding-xl) var(--padding-base)
      var(--padding-3xl);
    box-sizing: border-box;
    border: 3px solid var(--color-mediumseagreen);
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const FrameWrapper = styled.div`
  width: 364px;
  border-radius: var(--br-lg);
  background-color: var(--color-linen-200);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-8xs);
  box-sizing: border-box;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    background-color: var(--color-linen-200);
    display: flex;
    width: 364px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    border-radius: var(--br-lg);
    padding: var(--padding-8xs);
    box-sizing: border-box;
    max-width: 100%;
  }
`;
const InnerRoot = styled.div`
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

const FrameComponent9 = ({ className = "" }) => {
  return (
    <InnerRoot className={className}>
      <FrameWrapper>
        <FrameParent>
          <EllipseParent>
            <FrameChild />
            <FrameChild />
            <FrameChild />
          </EllipseParent>
          <EllipseGroup>
            <EllipseDiv />
            <FrameChild1 />
          </EllipseGroup>
        </FrameParent>
      </FrameWrapper>
    </InnerRoot>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
