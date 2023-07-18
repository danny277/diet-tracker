import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
            <a className="navbar-brand fw-bolder fs-4 mx-auto" href="#">
              Diet Tracker
            </a>
            <Link
              className="btn btn-outline-primary ms-auto px-4 rounded-pill"
              to="/login"
            >
            <i className="fa fa-sign-in me-2" ></i>
            Login
            </Link>
            <Link
              className="btn btn-outline-primary ms-2 px-4 rounded-pill"
              to="/signup"
            >
              <i className="fa fa-user-plus me-2" ></i>
              Signup
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
