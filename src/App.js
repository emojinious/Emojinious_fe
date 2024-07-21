import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Main from "./Pages/Game/Emoji";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Emoji" element={<Emoji />} />
    </Routes>
  );
}

export default App;
