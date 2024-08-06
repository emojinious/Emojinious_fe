import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Game1 from "./pages/Game1";
import Frame13 from "./pages/Gamep5";
import Game2 from "./pages/Game2";
import Loding2 from "./pages/Loding2";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Frame14 from "./pages/Score";
import Frame9 from "./pages/Gamep1";
import Frame11 from "./pages/Gamep3";
import Frame15 from "./pages/TotalScore";
import Frame12 from "./pages/Gamep4";
import Frame10 from "./pages/Gamep2";
import WaitingRoom from "./pages/WaitingRoom";
import Loding1 from "./pages/Loding1";
import PlayerSetup from "./pages/PlayerSetup";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/game2":
        title = "";
        metaDescription = "";
        break;
      case "/loding1":
        title = "";
        metaDescription = "";
        break;
      case "/loding2":
        title = "";
        metaDescription = "";
        break;
      case "/game2":
        title = "";
        metaDescription = "";
        break;
      case "/7":
        title = "";
        metaDescription = "";
        break;
      case "/p1":
        title = "";
        metaDescription = "";
        break;
      case "/p2":
        title = "";
        metaDescription = "";
        break;
      case "/p3":
        title = "";
        metaDescription = "";
        break;
      case "/p4":
        title = "";
        metaDescription = "";
        break;
      case "/p5":
        title = "";
        metaDescription = "";
        break;
      case "/score":
        title = "";
        metaDescription = "";
        break;
      case "/totalscore":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/setup":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/setup" element={<PlayerSetup />} />
      <Route path="/room" element={<WaitingRoom />} />
      <Route path="/game1" element={<Game1 />} />
      <Route path="/loding1" element={<Loding1 />} />
      <Route path="/loding2" element={<Loding2 />} />
      <Route path="/game2" element={<Game2 />} />
      <Route path="/game" element={<Game />} />
      <Route path="/p1" element={<Frame9 />} />
      <Route path="/p2" element={<Frame10 />} />
      <Route path="/p3" element={<Frame11 />} />
      <Route path="/p4" element={<Frame12 />} />
      <Route path="/p5" element={<Frame13 />} />
      <Route path="/score" element={<Frame14 />} />
      <Route path="/totalscore" element={<Frame15 />} />
    </Routes>
  );
}
export default App;
