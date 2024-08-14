import React from 'react';
import {
  Routes,
  Route,
  Navigate, 
  useLocation
} from "react-router-dom";
import Home from "./pages/Home";
import PlayerSetup from "./pages/PlayerSetup";
import WaitingRoom from "./pages/WaitingRoom";

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

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<PlayerSetup />} />
      <Route path="/room/:sessionId" element={<WaitingRoom />} />
      <Route path="/join" element={<JoinRedirect />} />
    </Routes>
  );
}


export default App;
