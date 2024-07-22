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

const Terms = () => {
  return (
    <Container>
      <Header />
      <Main>
        <h1>서비스 약관</h1>
        <p>
          본 서비스 약관은 사용자가 본 웹사이트를 이용함에 있어 지켜야 할 규칙과
          조건을 명시합니다.
        </p>
        <h2>1. 이용 약관 동의</h2>
        <p>
          사용자는 본 약관에 동의함으로써 본 웹사이트를 이용할 수 있습니다. 만약
          사용자가 본 약관에 동의하지 않는다면, 본 웹사이트를 이용할 수
          없습니다.
        </p>
        <h2>2. 개인정보 보호</h2>
        <p>
          본 웹사이트는 사용자의 개인정보를 중요시하며, 개인정보 보호정책에 따라
          사용자의 개인정보를 보호합니다. 자세한 내용은 개인정보 처리방침을
          참고하시기 바랍니다.
        </p>
        <h2>3. 사용자 책임</h2>
        <p>
          사용자는 본 웹사이트 이용 시 발생하는 모든 활동에 대한 책임을 집니다.
          사용자는 법률을 준수하며, 타인의 권리를 침해하지 않아야 합니다.
        </p>
        <h2>4. 서비스 이용 제한</h2>
        <p>
          본 웹사이트는 사용자에게 사전 통지 없이 서비스 이용을 제한하거나
          중단할 수 있는 권리를 보유합니다. 이는 약관 위반, 불법 행위 또는 기타
          부적절한 행위가 발생한 경우 적용됩니다.
        </p>
        <h2>5. 약관 변경</h2>
        <p>
          본 웹사이트는 필요에 따라 본 약관을 수정할 수 있습니다. 약관이
          변경되는 경우, 변경된 약관은 웹사이트에 게시되며, 게시된 시점부터
          효력이 발생합니다.
        </p>
      </Main>
      <Footer />
    </Container>
  );
};

export default Terms;
