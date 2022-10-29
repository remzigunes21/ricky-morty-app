import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.scss";
function Navbars() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
      <div className="container">
        <Link to="/" className="navbar-brand fs-3 ubuntu">
          Rick <span className="text-primary">&</span> Morty
        </Link>
        <div className="justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav fs-5">
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbars;
