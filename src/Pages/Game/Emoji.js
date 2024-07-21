import React from "react";
import { Link } from "react-router-dom";

function Emoji() {
  return (
    <>
      <p>Emoji keyword input page</p>
      <Link to="/Main">
        <button>시작</button>
      </Link>
    </>
  );
}

export default Emoji;
