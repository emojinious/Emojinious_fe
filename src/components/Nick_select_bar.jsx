import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// 보라색 그림자 스타일
const PurpleShadow = styled.div`
  width: 745px;
  height: 110px;
  background-color: #8A2BE2;  // 보라색 배경
  position: absolute;
  top: 10px;
  left: 10px;
  border-radius: 10px;
  z-index: 1;
`;

// 노란색 닉네임 바 스타일
const YellowBar = styled.div`
  width: 700px;
  height: 110px;
  background-color: #FFD700;  // 노란색 배경
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: relative;
  border-radius: 10px;
  z-index: 2;  // 그림자보다 위에 위치
`;

// 닉네임 입력 필드
const NicknameInput = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  background:none;
  font-size: 30px;
  padding: 0 10px;
  outline: none;
`;

// 결정 버튼 스타일
const ConfirmButton = styled.img`
  position: absolute;
  right: 5%;
  width: 15%;
  cursor: pointer;
`;

const NickSelectBar = () => {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleNicknameChange = (e) => {
    if (e.target.value.length <= 7) {
      setNickname(e.target.value);
    }
  };

  const handleDecisionClick = () => {
    // 여기에서 백엔드로 닉네임 전송 로직을 구현
    console.log("닉네임 전송: ", nickname);

    // 페이지 이동
    navigate("/room");
  };
  
  return (
    <div style={{ position: "relative", marginTop: "20px" }}>
      <PurpleShadow />
      <YellowBar>
        <NicknameInput
          type="text"
          placeholder="닉네임을 입력하세요(최대7자)"
          value={nickname}
          onChange={handleNicknameChange}
          maxLength={7}
        />
        <ConfirmButton 
          src="/setup_결정버튼.svg"
          alt="결정"
          onClick={handleDecisionClick}
        />
      </YellowBar>
    </div>
  );
};

export default NickSelectBar;
