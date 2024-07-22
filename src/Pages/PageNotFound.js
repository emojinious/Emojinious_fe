import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer/Footer";

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
  text-align: center;
`;

const PageNotFound = () => {
  return (
    <Container>
      <Header />
      <Main>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
      </Main>
      <Footer />
    </Container>
  );
};

export default PageNotFound;
