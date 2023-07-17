import React from "react";

import { Link, useNavigate } from "react-router-dom";

import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("jwt");

  const logout = () => {
    localStorage.clear();
    navigate("/loginPlayer");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <Link to="/" className="navbar-brand">
            NavBar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link to="/" className="nav-link">
                Home
              </Link>

              <Link to="/demo" className="nav-link">
                Demo
              </Link>
              {auth ? (
                <Link onClick={logout} to="/loginPlayer" className="nav-link">
                  Logout
                </Link>
              ) : (
                <>
                  <Link to="/loginPlayer" className="nav-link">
                    Login
                  </Link>
                  <Link to="/registerPlayer" className="nav-link">
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
