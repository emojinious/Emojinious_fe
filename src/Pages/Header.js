import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      style={{
        padding: "20px",
        background: "#4CAF50",
        color: "white",
        textAlign: "center",
      }}
    >
      <h1>
        <Link to="/">
          <img
            src="emogenius_logo.png"
            alt="EmoGenius Logo"
            style={{ height: "50px" }}
          />
        </Link>
      </h1>
    </header>
  );
};

export default Header;
