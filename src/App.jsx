import React from 'react';
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./pages/Home";
import PlayerSetup from "./pages/PlayerSetup";
import LobbyRoom from "./pages/LobbyRoom";
import styled from 'styled-components';
import Game from './pages/Game';
import Loading from './components/Loading';

function JoinRedirect() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sessionId = searchParams.get('sessionId');

  if (sessionId) {
    return <Navigate to={`/setup?sessionId=${sessionId}`} replace />;
  } else {
    return <Navigate to="/" replace />;
  }
}

const GradientBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #434040 0%, #434040 50%, #434040 100%);
  z-index: -1;
`;

const pageTransition = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const gradientTransition = {
  type:"tween",
  duration: 0.5,
  ease: "easeInOut",
};


function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
    <GradientBackground>
    <motion.div
      key={location.pathname}
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
      transition={gradientTransition}
      >
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/setup" element={<PlayerSetup />} />
        <Route path="/room/:sessionId" element={<LobbyRoom />} />
        <Route path="/join" element={<JoinRedirect />} />
        <Route path="/game" element={<Game/>}/>
        <Route path="/loading" element={<Loading/>}/>
      </Routes>
    </motion.div>
      </GradientBackground>
  </AnimatePresence>
  );
}

export default App;
