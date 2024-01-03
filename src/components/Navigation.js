import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="main-nav">
      <ul className="main-nav-list">
        <li>
          <Link className="main-nav-link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="main-nav-link" to="/items">
            Items
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
          <a className="main-nav-link" href="#">
            Section 3
          </a>
        </li>

        <li>
          <a className="main-nav-link" href="#">
            Section 4
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
