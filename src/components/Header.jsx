import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const HeaderLine = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 1280px;
  height: 85px;
  display: flex;
`;
const HeaderMark = styled.img`
  position: absolute;
  top: 0px;
  left: 500px;
  width: 280px;
  height: 85px;
  display: flex;
  cursor: pointer;
  -webkit-transform: rotate(0) scale(1);
	transform: rotate(0) scale(1);
	-webkit-transition: .5s ease-in-out;
	transition: .5s ease-in-out;
  &:hover {
    -webkit-transform: rotate(15deg) scale(0.5);
    transform: rotate(15deg) scale(0.5);
    -webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
  }
`;
const HeaderParent = styled.header`
  align-self: stretch;
  height: 92px;
  position: relative;
  display: flex;
  width: auto;
  gap: var(--gap-0);
  align-items: flex-start;
  justify-content: flex-start;
  transform: rotate(0deg);
  padding: 0px 0px var(--padding-6xs);
  box-sizing: border-box;
`;



const Header = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <HeaderParent>
      <HeaderLine alt="" src="/헤더줄.svg" />
      <HeaderMark alt="" src="/헤더마크.svg" onClick={onGroupClick}/>
    </HeaderParent>
  );
};

export default Header;
