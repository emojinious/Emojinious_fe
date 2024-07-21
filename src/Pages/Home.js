import { Link } from "react-router-dom";
import React, { useState } from "react";
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "#e0e0e0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          maxWidth: "1200px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Header />
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            flex: "1",
            padding: "20px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                flex: "1",
                paddingRight: "10px",
                borderRight: "1px solid #ccc",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={currentProfile}
                  alt="Profile"
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                <button
                  onClick={handleProfileRefresh}
                  style={{ marginRight: "20px" }}
                >
                  Refresh Profile
                </button>
                <label>
                  Nickname:
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    style={{ marginLeft: "10px" }}
                  />
                </label>
              </div>
              <div style={{ textAlign: "center" }}>
                <Link to="/main">
                  <button
                    onClick={handleStart}
                    style={{
                      padding: "10px 20px",
                      fontSize: "16px",
                      marginTop: "20px",
                    }}
                  >
                    Start Game
                  </button>
                </Link>
              </div>
            </div>
            <div style={{ flex: "1", paddingLeft: "10px" }}>
              <div style={{ textAlign: "center" }}>
                <button onClick={handlePrevInstruction}>&lt;</button>
                <span style={{ margin: "0 10px" }}>
                  {instructions[instructionIndex]}
                </span>
                <button onClick={handleNextInstruction}>&gt;</button>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
