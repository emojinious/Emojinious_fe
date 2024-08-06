import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const B = styled.b`
  flex: 1;
  position: relative;
  display: flex;
  max-width: 100%;
  font-weight: 700;
  height: auto;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-6xl);
    text-align: center;
    color: var(--color-linen-100);
    display: flex;
    flex: 1;
    height: auto;
    max-width: 100%;
  }
`;
const Wrapper = styled.section`
  flex: 1;
  border-radius: var(--br-lg);
  background-color: var(--color-mediumseagreen);
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: var(--padding-25xl) var(--padding-smi) var(--padding-18xl);
  box-sizing: border-box;
  white-space: nowrap;
  max-width: 100%;
  height: auto;
  cursor: pointer;
  text-align: center;
  font-size: var(--font-size-6xl);
  color: var(--color-linen-100);
  font-family: var(--font-inter);
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    flex: 1;
    height: auto;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    border-radius: var(--br-lg);
    padding: var(--padding-25xl) var(--padding-smi) var(--padding-18xl);
    box-sizing: border-box;
    white-space: nowrap;
    max-width: 100%;
  }
`;
const DivRoot = styled.div`
  width: 406px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: normal;
  letter-spacing: normal;
  height: auto;
  gap: var(--gap-0);
  &:hover {
    display: flex;
    width: 406px;
    height: auto;
    flex-direction: row;
    gap: var(--gap-0);
    align-items: flex-start;
    justify-content: flex-start;
    line-height: normal;
    letter-spacing: normal;
  }
`;

const Frame8 = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onGroupSectionClick = useCallback(() => {
    navigate("/-11");
  }, [navigate]);

  return (
    <DivRoot className={className}>
      <Wrapper onClick={onGroupSectionClick}>
        <B>다른 사람 기다리는 중....</B>
      </Wrapper>
    </DivRoot>
  );
};

Frame8.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Frame8;
