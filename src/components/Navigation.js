import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <Link className="main-nav-link nav-cta" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="main-nav-link" to="/fridge-items">
            Fridge
          </Link>
        </li>

        <li>
          <Link className="main-nav-link" to="/freezer-items">
            Freezer
          </Link>
        </li>

        <li>
          <Link className="main-nav-link" to="/pantry-items">
            Pantry
          </Link>
        </li>

        <li>
          <Link className="main-nav-link" to="/expiration-items">
            Expiration List
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
