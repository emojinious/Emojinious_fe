import React from "react";
import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <div>Main Page</div>;
      <Link to="/emoji">
        <button>게임 시작</button>
      </Link>
    </>
  );
}

export default Main;
