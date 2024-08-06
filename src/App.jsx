import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import PlayerSetup from "./pages/PlayerSetup";
import WaitingRoom from "./pages/WaitingRoom";
import Game1 from "./pages/Game1";
import Loding1 from "./pages/Loding1";
import Loding2 from "./pages/Loding2";
import Game2 from "./pages/Game2";
import Game from "./pages/Game";
import Gamep1 from "./pages/Gamep1";
import Gamep2 from "./pages/Gamep2";
import Gamep3 from "./pages/Gamep3";
import Gamep4 from "./pages/Gamep4";
import Gamep5 from "./pages/Gamep5";
import Score from "./pages/Score";
import TotalScore from "./pages/TotalScore";

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
      case "/setup":
        title = "";
        metaDescription = "";
        break;
      case "/room":
        title = "";
        metaDescription = "";
        break;
      case "/game1":
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
      case "/game":
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
      <Route path="/p1" element={<Gamep1 />} />
      <Route path="/p2" element={<Gamep2 />} />
      <Route path="/p3" element={<Gamep3 />} />
      <Route path="/p4" element={<Gamep4 />} />
      <Route path="/p5" element={<Gamep5 />} />
      <Route path="/score" element={<Score />} />
      <Route path="/totalscore" element={<TotalScore />} />
    </Routes>
  );
}
export default App;
