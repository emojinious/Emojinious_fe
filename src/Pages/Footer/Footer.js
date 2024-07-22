import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: #f1f1f1;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterLink = styled(Link)`
  margin: 0 10px;
  color: inherit;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterImage = styled.img`
  width: 100px;
  height: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterImage src="logo.png" alt="Logo" />
        <div>
          <FooterLink to="/terms">서비스 약관</FooterLink>
          <FooterLink to="/privacy">개인정보 처리방침</FooterLink>
          <FooterLink to="/contact">문의</FooterLink>
          <FooterLink to="/discord">디스코드</FooterLink>
        </div>
        <a
          href="https://www.seoultech.ac.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FooterImage src="seoultech_logo.png" alt="SeoulTech Logo" />
        </a>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
