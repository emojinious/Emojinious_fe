import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Main from "./Pages/Main";
import Emoji from "./Pages/Game/Emoji";
import Terms from "./Pages/Footer/Terms";
import Privacy from "./Pages/Footer/Privacy";
import Contact from "./Pages/Footer/Contact";
import Discord from "./Pages/Footer/Discord";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/emoji" element={<Emoji />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/discord" element={<Discord />} />
    </Routes>
  );
}

export default App;
