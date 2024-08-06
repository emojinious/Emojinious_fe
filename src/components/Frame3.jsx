import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container1 = styled.section`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: var(--br-lg);
  background-color: var(--color-mediumseagreen);
  width: 100%;
  height: 100%;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: var(--color-mediumseagreen);
    display: flex;
    width: 100%;
    height: 100%;
    border-radius: var(--br-lg);
  }
`;
const A = styled.a`
  text-decoration: none;
  position: absolute;
  top: 41px;
  left: calc(50% - 60px);
  font-weight: 700;
  color: inherit;
  display: flex;
  width: 120px;
  height: 40px;
  z-index: 1;
  &:hover {
    font-weight: 700;
    font-family: var(--font-inter);
    font-size: var(--font-size-11xl);
    text-align: center;
    color: var(--color-linen-100);
    display: flex;
    width: 120px;
    height: 40px;
  }
  @media screen and (max-width: 767px) {
    font-size: var(--font-size-5xl);
  }
  @media screen and (max-width: 450px) {
    font-size: var(--font-size-lg);
  }
`;
const DivRoot = styled.div`
  width: 948px;
  height: 114px;
  position: relative;
  line-height: normal;
  letter-spacing: normal;
  display: flex;
  gap: var(--gap-0);
  text-align: center;
  font-size: var(--font-size-11xl);
  color: var(--color-linen-100);
  font-family: var(--font-inter);
  &:hover {
    display: flex;
    width: 948px;
    height: 114px;
    gap: var(--gap-0);
    line-height: normal;
    letter-spacing: normal;
  }
`;

const Frame3 = ({ className = "", onClose }) => {
  const navigate = useNavigate();

  const onContainerClick = useCallback(() => {
    navigate("/loding1");
  }, [navigate]);

  return (
    <DivRoot className={className}>
      <Container1 onClick={onContainerClick} />
      <A>완료!</A>
    </DivRoot>
  );
};

Frame3.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default Frame3;
