import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import LoadingSpinner from "./LoadingSpinner";

// 애니메이션 정의
const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const dotsAnimation = keyframes`
  0%, 20% {
    opacity: 0;
  }
  40%, 60% {
    opacity: 1;
  }
  80%, 100% {
    opacity: 0;
  }
`;

const shakeAnimation = keyframes`
  0%, 100% {
    transform: rotate(0deg);
  }
  20%, 60% {
    transform: rotate(-10deg);
  }
  40%, 80% {
    transform: rotate(10deg);
  }
`;

const textDotsAnimation = keyframes`
  0%, 20% {
    opacity: 0;
  }
  40%, 60% {
    opacity: 1;
  }
  80%, 100% {
    opacity: 0;
  }
`;

const fadeAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const HomeContainer = styled.div` 
  width: 100vw;
  height: 100vh;
  background-color: #434040;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

// 스타일 정의
const LoadingContainer = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const MojiImage = styled.img`
  width: 120px;
  height: auto;
  position: absolute;
  right:25%;
  z-index: 2;
  animation: ${floatAnimation} 2s ease-in-out infinite, ${fadeAnimation} 1s ease-in-out;
`;

const PlatformImage = styled.img`
  width: 150px;
  height: auto;
  position: absolute;
  bottom: 28%;
  right: 30%;
  z-index: 1;
`;

const DotImage = styled.img`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  opacity: 0;
  animation: ${dotsAnimation} 2s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay}s;
  position: absolute;
  bottom: 40%;
  left: ${({ position }) => position}px;
`;

const LoadingDots = styled.div`
  position: absolute;
  display: flex;
  bottom: 75%;
  left: 10%;
`;

const Light = styled.img`
  position: absolute;
  width: 40px;
  height: auto;
  left: 20px;
  bottom: -20px;
  animation: ${shakeAnimation} 1s ease-in-out infinite, ${fadeAnimation} 1s ease-in-out;
`

const LoadingText = styled.div`
  position: absolute;
  bottom:25px;
  font-size: 20px;
  color: #EAE8DC;
  text-align: center;
`;

const TextDot = styled.span`
  opacity: 0;
  animation: ${textDotsAnimation} 2s infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const LoadingScore = () => {
  const [loadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingComplete(true), 7000); // 5초 후 로딩 완료로 전환
    return () => clearTimeout(timer);
  }, []);

  return (
    <HomeContainer>
      <LoadingContainer>
      <MojiImage src={loadingComplete ? "/로딩완료모지.svg" : "/로딩중모지.svg"} alt="Loading Moji" />
      <PlatformImage src="/로딩발판.svg" alt="Loading Platform" />
      {!loadingComplete && (
        <LoadingDots>
          <DotImage src="/로딩점.svg" alt="Loading Dot" delay={0} position={0} />
          <DotImage src="/로딩점.svg" alt="Loading Dot" delay={0.3} position={15} />
          <DotImage src="/로딩점.svg" alt="Loading Dot" delay={0.6} position={30} />
        </LoadingDots>
      )}
      {loadingComplete && (
        <LoadingDots>
          <Light src="/로딩전구.svg" alt="Loading Complete Lightbulb" />
        </LoadingDots>
      )} 
      <LoadingText>
        {loadingComplete ? "측정 완료!" : "MOJI가 점수 측정 중"}
        {!loadingComplete && (
          <>
            <TextDot delay={0}>.</TextDot>
            <TextDot delay={0.3}>.</TextDot>
            <TextDot delay={0.6}>.</TextDot>
          </>
        )}
      </LoadingText>
      </LoadingContainer>
      {!loadingComplete && <LoadingSpinner/>}
    </HomeContainer>
  );
};

export default LoadingScore;
