import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./PrivateRoutes/AuthProvider";
import "./Header.css";

const Header: React.FC = () => {
  const { authStatus } = useAuth();

  return (
    <div className="w-100 mb-4">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark   ">
        <div className="container-fluid ">
          <h4 className="text-white font-weight-bold mb-0 py-2">CineTrack</h4>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {authStatus.role == "user" && (
                  <Link to="/user" className="nav-link active text-white">
                    Home
                  </Link>
                )}
                {authStatus.role == "admin" && (
                  <Link to="/admin" className="nav-link active text-white">
                    Home
                  </Link>
                )}
              </li>
              {authStatus.role == "user" && (
                <li className="nav-item">
                  <Link
                    to="/user/watchList"
                    className="nav-link active text-white"
                  >
                    Watchlist
                  </Link>
                </li>
              )}

              {authStatus.role === "admin" && (
                <li className="nav-item">
                  <Link to="/admin/add" className="nav-link active text-white">
                    Add
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link active text-white" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
