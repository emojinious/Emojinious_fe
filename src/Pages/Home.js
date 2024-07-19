import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>Home page</p>
      <Link to="/Main">
        <button>시작</button>
      </Link>
    </>
  );
}

export default Home;
