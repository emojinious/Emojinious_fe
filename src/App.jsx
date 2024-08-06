import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frame2 from "./pages/Frame2";
import Frame13 from "./pages/Frame13";
import Frame6 from "./pages/Frame6";
import Frame5 from "./pages/Frame5";
import HOME from "./pages/HOME";
import Frame7 from "./pages/Frame7";
import Frame14 from "./pages/Frame14";
import Frame9 from "./pages/Frame9";
import Frame11 from "./pages/Frame11";
import Frame15 from "./pages/Frame15";
import Frame12 from "./pages/Frame12";
import Frame10 from "./pages/Frame10";
import Frame from "./pages/Frame";
import Frame4 from "./pages/Frame4";
import HOME2D from "./pages/HOME2D";

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
      case "/-5":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/-21":
        title = "";
        metaDescription = "";
        break;
      case "/home-1":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/-1":
        title = "";
        metaDescription = "";
        break;
      case "/-11":
        title = "";
        metaDescription = "";
        break;
      case "/-3":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/-4":
        title = "";
        metaDescription = "";
        break;
      case "/-2":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
      case "/-22":
        title = "";
        metaDescription = "";
        break;
      case "/home-2d":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Frame2 />} />
      <Route path="/-5" element={<Frame13 />} />
      <Route path="/1" element={<Frame6 />} />
      <Route path="/-21" element={<Frame5 />} />
      <Route path="/home-1" element={<HOME />} />
      <Route path="/" element={<Frame7 />} />
      <Route path="/-1" element={<Frame14 />} />
      <Route path="/-11" element={<Frame9 />} />
      <Route path="/-3" element={<Frame11 />} />
      <Route path="/2" element={<Frame15 />} />
      <Route path="/-4" element={<Frame12 />} />
      <Route path="/-2" element={<Frame10 />} />
      <Route path="/3" element={<Frame />} />
      <Route path="/-22" element={<Frame4 />} />
      <Route path="/home-2d" element={<HOME2D />} />
    </Routes>
  );
}
export default App;
