import React from "react";
import styled from "styled-components";
import Header from "../Header";
import Footer from "./Footer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  flex: 1;
`;

const Discord = () => {
  return (
    <Container>
      <Header />
      <Main>
        <h1>디스코드</h1>
        <p>여기에 디스코드 관련 내용을 작성합니다.</p>
      </Main>
      <Footer />
    </Container>
  );
};

export default Discord;
