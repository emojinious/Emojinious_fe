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
import PageNotFound from "./Pages/PageNotFound";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/main" element={<Main />} />
      <Route path="/emoji" element={<Emoji />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/discord" element={<Discord />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
