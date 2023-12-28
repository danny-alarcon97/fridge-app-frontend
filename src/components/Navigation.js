import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Navigation() {
  return (
    <nav className="main-nav">
      <Link to="/">
        <i>
          <FaHome />
        </i>
        Home
      </Link>
    </nav>
  );
}

export default Navigation;
