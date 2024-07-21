import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      style={{ padding: "20px", textAlign: "center", background: "#f1f1f1" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="logo.png"
          alt="Logo"
          style={{ width: "100px", height: "auto" }}
        />
        <div>
          <Link to="/terms" style={{ margin: "0 10px" }}>
            서비스 약관
          </Link>
          <Link to="/privacy" style={{ margin: "0 10px" }}>
            개인정보 처리방침
          </Link>
          <Link to="/contact" style={{ margin: "0 10px" }}>
            문의
          </Link>
          <Link to="/discord" style={{ margin: "0 10px" }}>
            디스코드
          </Link>
        </div>
        <a
          href="https://www.seoultech.ac.kr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="seoultech_logo.png"
            alt="SeoulTech Logo"
            style={{ width: "100px", height: "auto" }}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
