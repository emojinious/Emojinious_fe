import styled, { keyframes } from 'styled-components';

const boingEffect = keyframes`
  0% {
    transform: scale(1);
  }
  40% {
    transform: scale(1.1);
  }
  80% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const BoingButton = styled.button`
  /* 기본 버튼 스타일 */
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;

  /* 호버 시 뽀잉 효과 적용 */
  &:hover {
    animation: ${boingEffect} 0.4s ease;
  }

  /* 이미지 버튼을 위한 추가 스타일 */
  ${props => props.isImageButton && `
    background: none;
    padding: 0;
    width: ${props.width || 'auto'};
    height: ${props.height || 'auto'};
  `}
`;

export default BoingButton;