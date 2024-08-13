import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import PlayerSetup from "./pages/PlayerSetup";
import WaitingRoom from "./pages/WaitingRoom";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<PlayerSetup />} />
      <Route path="/room" element={<WaitingRoom />} />
    </Routes>
  );
}
export default App;
