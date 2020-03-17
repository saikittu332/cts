import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            Schedule
          </Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>

            {props.isLoggedIn && (
              <li className="nav-item ">
                <Link className="nav-link" to="/todos">
                  ToDos
                </Link>
              </li>
            )}

            <ul className="navbar-nav justify-content-end">
              {!props.isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
              )}

              {props.isLoggedIn && (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/logout"
                    onClick={() => props.setLogin(false)}
                  >
                    Logout
                  </Link>
                </li>
              )}

              {!props.isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </li>
              )}
            </ul>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
