import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const handleNavItemClick = () => {
    const nav = document.getElementById('navbarNav');
    if (nav && nav.classList.contains('show')) {
      nav.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand pl-3" to="/">
        Jordan Richardson
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse bg-dark" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/" onClick={handleNavItemClick}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={handleNavItemClick}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" onClick={handleNavItemClick}>
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/chores" onClick={handleNavItemClick}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
