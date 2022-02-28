import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/trending">Trending</Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
