import React, { useEffect, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import BoingButton from '../components/BoingButton';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';

// 흔들리는 애니메이션을 정의
const shakeAnimation = keyframes`
  0% { transform: rotate(0deg)  }
  15% { transform: rotate(5deg) translateY(-10px); }
  30% { transform: rotate(0deg); translateY(0px);}
  45% { transform: rotate(-15deg) translateY(-10px);; }
  60% { transform: rotate(0deg); }
  75% { transform: translateY(0px); }
  90% { transform: rotate(5deg) translateY(15px); }
  100% { transform: rotate(0deg) translateY(0px); }
`;


const shake = keyframes`
  0% { transform: rotate(0deg)}
  15% { transform: rotate(1deg)}
  30% { transform: rotate(-1deg); }
  45% { transform: rotate(1deg) }
  60% { transform: rotate(-1deg); }
  75% { transform: translateY(1px); }
  90% { transform: rotate(-1deg)}
  100% { transform: rotate(0deg)}
`;

const lotate = keyframes`
  0% {
    transform : rotate(0deg) translateY(0) scale(1);
  }
  60% {
    transform : rotate(100deg) translateY(15px) scale(1.7);
  }
  80% {
    transform : rotate(180deg) translateY(0px) scale(1.2);
  }
  100% {
    transform : rotate(0deg) translateY(0) scale(1);
  }
`;

const lotate1 = keyframes`
  0% {
    transform : rotate(0deg) translateY(0) scale(1);
  }
  60% {
    transform : rotate(-100deg) translateY(0px) scale(1.4);
  }
  80% {
    transform : rotate(-180deg) translateY(0px) scale(1.2);
  }
  100% {
    transform : rotate(0deg) translateY(0) scale(1);
  }
`;

const lotate2 = keyframes`
  0% {
    transform : rotate(0deg) translateY(0) scale(1);
  }
  60% {
    transform : rotate(-100deg) translateY(0px) scale(1.5);
  }
  80% {
    transform : rotate(-50deg) translateY(0px) scale(1.2);
  }
  100% {
    transform : rotate(0deg) translateY(0) scale(1);
  }
`;

// Styled-component for the home container
const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/home_배경화면.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  user-select: none;
`;

// Styled-component for the Sketchbook (스케치북)
const Sketchbook = styled.img`
  width: 55%; /* 스케치북 크기 조절 */
  z-index: 1;
  animation: ${shake} 5s ease-in-out infinite;
`;

// Styled-component for the Robot Arm (로봇팔)
const RobotArm = styled.img`
  position: absolute;
  width: 30%; /* 로봇팔 크기 조절 */
  right: 12%;
  bottom: -70px;
  z-index: 10;
  /* 애니메이션 적용 */
  ${({ animate }) =>
    animate &&
    css`
      animation: ${shakeAnimation} 3s ease-in-out;
      transform-origin: center;
    `}
`;

// Styled-component for the Shadow (그림자)
const Shadow = styled.img`
  position: absolute;
  bottom: -190px;
  width: 50%; /* 그림자 크기 조절 */
  z-index: 11; /* 스케치북보다 뒤에 배치 */
`;

const Emoji1 = styled.img`
  position: absolute;
  width: 10%;
  left: 20%;
  top: 20%;
  z-index: 2;
  animation: ${lotate} 5s ease-in-out infinite;
  animation-iteration-count: infinite;
  transform-origin: center;
`;
const Emoji2 = styled.img`
  position: absolute;
  width: 12%;
  right: 25%;
  top: 60%;
  z-index: 2;
  animation: ${lotate1} 8.5s ease-in-out infinite;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  transform-origin: center;
`;
const Emoji3 = styled.img`
  position: absolute;
  width: 11%;
  right: 10%;
  top: 10%;
  z-index: 2;
  animation: ${lotate2} 7s ease-in-out infinite;
  animation-delay: 3.5s;
  animation-iteration-count: infinite;
  transform-origin: center;
`;

// Styled-component for the Start Button (게임 시작 버튼)
const StartButton = styled(BoingButton).attrs({ isImageButton: true })`
  position: absolute;
  width: 20%; /* 버튼 크기 조절 */
  bottom: 10%; /* 컨테이너의 중앙에서 살짝 아래로 배치 */
  z-index: 13; /* 다른 요소들 위에 배치 */
  cursor: pointer;
`;

// 도움말 버튼 스타일
const HelpButton = styled(BoingButton).attrs({ isImageButton: true })`
  position: absolute;
  right: 2%;
  bottom: 2%;
  width: 10vh;
  height: 10vh;
`;

const CloseButton = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '60vw',
    height: '60vh',
    borderRadius: '10px',
    padding: '20px',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000, // 모달이 다른 요소들 위에 나타나도록
  },
};

const Home = () => {
  const [animate, setAnimate] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 3000); // 3초 애니메이션
    }, 5000); // 5초 간격으로 애니메이션 반복
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 제거
  }, []);

  const handleStartClick = () => {
    navigate('/setup'); // 버튼 클릭 시 /setup으로 이동
  };

  const handleHelpClick = () => {
    setIsModalVisible(true);
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <HomeContainer>
      <Sketchbook src="/home_메인스케치북.svg" alt="Sketchbook" />
      <RobotArm src="/home_로봇팔.png" alt="Robot Arm" animate={animate} />
      <Shadow src="/home_모지그림자.svg" alt="Shadow" />
      <Emoji1 src="/home_웃는노랭이.svg" alt="웃는노랭이" />
      <Emoji2 src="/home_우는파랭이.svg" alt="우는파랭이" />
      <Emoji3 src="/home_놀라는보라.svg" alt="놀라는보라" />
      <StartButton
        as="img"
        src="/home_게임시작버튼.svg"
        alt="Start Button"
        onClick={handleStartClick}
      />
      <HelpButton
        as="img"
        src="/home_설명서물음표.svg"
        alt="Help Button"
        onClick={handleHelpClick}
      />
      <Modal
        isOpen={isModalVisible}
        onRequestClose={handleCloseModal}
        style={customStyles}
        contentLabel="Explanation Modal"
      >
        <h2>설명서</h2>
        <p>설명서 내용 여기에 표시됩니다.</p>
        <CloseButton src="/home_설명서나가기버튼.png" alt="설명서나가기" onClick={handleCloseModal}/>
      </Modal>
    </HomeContainer>
  );
};

export default Home;
