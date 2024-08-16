import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// HeaderParent는 항상 창의 너비를 따라갑니다.
const HeaderParent = styled.header`
  width: 100vw; /* 창의 너비에 맞춤 */
  height: 15vh;
  position: relative;
  display: flex;
  justify-content: center; /* HeaderMark를 중앙에 배치 */
  align-items:center;
  text-align:center;
  box-sizing: border-box;
  padding: 0;
`;

// HeaderLine은 HeaderParent의 너비를 따릅니다.
const HeaderLine = styled.img`
  position: absolute;
  width: 100%; /* 부모의 너비를 따라감 */
  height: 40%;
  background-repeat: repeat-x; /* 가로로 반복 */
  background-size: contain; /* 이미지 크기를 고정하여 배경이 반복되도록 함 */
  top: 50%;
  transform: translateY(-50%); /* 수직 중앙에 배치 */
  user-select: none;
`;

// HeaderMark는 중앙에 위치하도록 설정
const HeaderMark = styled.img`
  height: 70%;
  display: flex;
  cursor: pointer;
  transform: rotate(0) scale(1);
  transition: 0.5s ease-in-out;
  user-select: none;

  &:hover {
    transform: rotate(15deg) scale(0.5);
    transition: 0.5s ease-in-out;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  const onGroupClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <HeaderParent>
      <HeaderLine alt="헤더줄" src="/헤더줄.png"/>
      <HeaderMark alt="헤더마크" src="/헤더마크.svg" onClick={onGroupClick} />
    </HeaderParent>
  );
};

export default Header;
