import React from "react";
import Header from "../Header";
import Footer from "./Footer";

const Contact = () => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header />
      <main
        style={{
          padding: "20px",
          maxWidth: "800px",
          margin: "0 auto",
          flex: "1",
        }}
      >
        <h1>문의</h1>
        <p>여기에 문의 내용을 작성합니다.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
