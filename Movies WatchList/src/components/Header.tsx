import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useAuth } from "./PrivateRoutes/AuthProvider";
import './Header.css'

const Header: React.FC = () => {
  const { authStatus } = useAuth();
  
  return (
    <div className="w-100 mb-4">
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid d-flex justify-content-between align-items-center parentNav" >
          <h4 className="text-white font-weight-bold mb-0 py-2">
            CineTrack
          </h4>
          <div className="collapse navbar-collapse childNav" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {
                  authStatus.role=='user' &&(
                    <Link to="/user" className="nav-link active text-white">
                      Home
                   </Link>
                  )
                }
                {
                  authStatus.role=='admin' &&(
                    <Link to="/admin" className="nav-link active text-white">
                    Home
                  </Link>
                  )
                }
                

                
              </li>
              <li className="nav-item">
                <Link to="/user/watchList" className="nav-link active text-white">
                  Watchlist
                </Link>
              </li>
              {authStatus.role === 'admin' && (
                <li className="nav-item">
                  <Link to="/admin/add" className="nav-link active text-white">
                    Add
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
