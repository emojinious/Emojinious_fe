import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Divider = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0 !important;
  right: -7px;
  bottom: -7px;
  border-radius: var(--br-xs);
  background-color: var(--color-mediumpurple-200);
  display: flex;
  &:hover {
    background-color: var(--color-mediumpurple-200);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-xs);
  }
`;
const Placeholder = styled.b`
  position: relative;
  display: flex;
  min-width: 75;
  font-weight: 700;
  width: auto;
  align-self: unset;
  height: auto;
  z-index: 2;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: left;
    color: var(--color-mediumpurple-200);
    display: flex;
    width: auto;
    align-self: unset;
    height: auto;
    min-width: 75;
  }
  @media screen and (max-width: 750px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-sm) 0px 0px;
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
    padding: var(--padding-sm) 0px 0px;
    box-sizing: border-box;
  }
`;
const ButtonBackground = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-3xs);
  background-color: var(--color-deepskyblue-100);
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  z-index: 2;
  &:hover {
    background-color: var(--color-deepskyblue-100);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-3xs);
  }
`;
const Icon = styled.img`
  position: absolute;
  top: 17.9px;
  left: 15px;
  width: 50.5px;
  height: 27.7px;
  display: flex;
  z-index: 3;
  &:hover {
    display: flex;
    width: 50.5px;
    height: 27.7px;
  }
`;
const ConfirmationButton = styled.div`
  height: 64px;
  width: 81px;
  position: relative;
  display: flex;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 81px;
    height: 64px;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
  }
`;
const FrameParent = styled.div`
  flex: 1;
  border-radius: var(--br-xs);
  background-color: var(--color-gold-100);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-end;
  padding: var(--padding-3xs) var(--padding-xs) var(--padding-2xs);
  box-sizing: border-box;
  gap: var(--gap-3xs);
  max-width: 100%;
  height: auto;
  transform: rotate(0deg);
  z-index: 1;
  &:hover {
    background-color: var(--color-gold-100);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    gap: var(--gap-3xs);
    align-items: flex-start;
    justify-content: flex-end;
    transform: rotate(0deg);
    border-radius: var(--br-xs);
    padding: var(--padding-3xs) var(--padding-xs) var(--padding-2xs);
    box-sizing: border-box;
    max-width: 100%;
  }
  @media screen and (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
const DividerParent = styled.div`
  width: 520px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  max-width: 100%;
  height: auto;
  gap: var(--gap-0);
  transform: rotate(0deg);
  &:hover {
    display: flex;
    width: 520px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    transform: rotate(0deg);
    max-width: 100%;
  }
`;
const Home2dInnerRoot = styled.section`
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
  text-align: left;
  font-size: var(--font-size-11xl);
  color: var(--color-mediumpurple-200);
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
    padding: 0px var(--padding-xl);
    box-sizing: border-box;
    max-width: 100%;
  }
`;

const FrameComponent8 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onButtonBackgroundClick = useCallback(() => {
    navigate("/3");
  }, [navigate]);

  return (
    <Home2dInnerRoot className={className}>
      <DividerParent>
        <Divider />
        <FrameParent>
          <PlaceholderWrapper>
            <Placeholder>(0/7)</Placeholder>
          </PlaceholderWrapper>
          <ConfirmationButton>
            <ButtonBackground onClick={onButtonBackgroundClick} />
            <Icon alt="" src="/1.svg" />
          </ConfirmationButton>
        </FrameParent>
      </DividerParent>
    </Home2dInnerRoot>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent8;
