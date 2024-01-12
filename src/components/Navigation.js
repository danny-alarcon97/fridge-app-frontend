import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <Link className="main-nav-link nav-cta" to="/">
            How It Works
          </Link>
        </li>

        <li>
          <Link className="main-nav-link" to="/expiration-items">
            Expiration List
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
      </ul>
    </nav>
  );
}

export default Navigation;
