/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="/logo.jpeg"
              alt="Avatar Logo"
              style={{ width: 40 }}
              className="rounded-pill"
            />
          </a>
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
                <Link className="nav-link active" aria-current="page" to={"/game"}>
                  Tic Tac Toe P vs P 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/tic-tac-toe"}>
                  Tic Tac Toe PC vs P
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dinosaur">
                  Dinosaur
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/lat-hinh">
                  Trúc xanh
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/keobuabao">
                  Kéo búa bao
                </Link>
              </li>  <li className="nav-item">
                <Link className="nav-link" to="/2048">
                 2048
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
