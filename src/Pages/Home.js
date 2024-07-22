import { Link } from "react-router-dom";
import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer/Footer.js";
import Header from "./Header.js";

const profiles = [
  "/profile/ANGER.png",
  "/profile/DISGUST.png",
  "/profile/FEAR.png",
  "/profile/JOY.png",
  "/profile/SAD.png",
];

const instructions = [
  "Step 1: Do this...",
  "Step 2: Then do this...",
  "Step 3: Next, do this...",
  "Step 4: After that, do this...",
  "Step 5: Finally, do this...",
];

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #e0e0e0;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 1200px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const LeftSection = styled.div`
  flex: 1;
  padding-right: 10px;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const RefreshButton = styled.button`
  background: url("refresh_icon.png") no-repeat center center;
  background-size: contain;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  margin-right: 20px;
  position: relative;
  top: 60px;
  right: 20px;
`;

const RightSection = styled.div`
  flex: 1;
  padding-left: 10px;
  text-align: center;
`;

const StartButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 20px;
`;

function Home() {
  const [nickname, setNickname] = useState("");
  const [currentProfile, setCurrentProfile] = useState(profiles[0]);
  const [instructionIndex, setInstructionIndex] = useState(0);

  const handleProfileRefresh = () => {
    const randomIndex = Math.floor(Math.random() * profiles.length);
    setCurrentProfile(profiles[randomIndex]);
  };

  const handleNextInstruction = () => {
    setInstructionIndex((prevIndex) => (prevIndex + 1) % instructions.length);
  };

  const handlePrevInstruction = () => {
    setInstructionIndex((prevIndex) =>
      prevIndex === 0 ? instructions.length - 1 : prevIndex - 1
    );
  };

  const handleStart = () => {
    console.log("Game started with nickname:", nickname);
    // 추가 로직 구현 필요
  };

  return (
    <Container>
      <Wrapper>
        <Header />
        <Main>
          <Content>
            <LeftSection>
              <ProfileSection>
                <img
                  src={currentProfile}
                  alt="Profile"
                  style={{
                    width: "150px",
                    height: "150px",
                    marginRight: "10px",
                  }}
                />
                <RefreshButton onClick={handleProfileRefresh} />
                <label>
                  Nickname:
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    style={{ marginLeft: "10px" }}
                  />
                </label>
              </ProfileSection>
              <Link to="/main">
                <StartButton onClick={handleStart}>Start Game</StartButton>
              </Link>
            </LeftSection>
            <RightSection>
              <button onClick={handlePrevInstruction}>&lt;</button>
              <span style={{ margin: "0 10px" }}>
                {instructions[instructionIndex]}
              </span>
              <button onClick={handleNextInstruction}>&gt;</button>
            </RightSection>
          </Content>
        </Main>
        <Footer />
      </Wrapper>
    </Container>
  );
}

export default Home;
