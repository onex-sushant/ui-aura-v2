// src/components/AppBar.js
import React from "react";
import { useLocation } from "react-router-dom";
import navItems from "../utils/navItems";

const AppBar = () => {
  const location = useLocation();

  // Determine the heading based on the current path
  const currentNav = navItems.find((item) => item.path === location.pathname);
  const pageTitle = currentNav ? currentNav.name : "Page";

  return (
    <div className="app-bar d-flex justify-content-between align-items-center p-3 bg-white shadow-sm">
      <h4 className="m-0">{pageTitle}</h4>
      <div className="profile d-flex align-items-center">
        <span className="me-2">Sushant Kumar</span>
        <div className="dropdown">
          <img
            src="https://via.placeholder.com/40"
            alt="Avatar"
            className="rounded-circle"
            role="button"
            data-bs-toggle="dropdown"
            style={{ cursor: "pointer", width: "40px", height: "40px" }}
          />
          <ul className="dropdown-menu dropdown-menu-end">
            <li>
              <a className="dropdown-item" href="#profile">
                View Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#settings">
                Settings
              </a>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <a className="dropdown-item" href="#logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AppBar;
