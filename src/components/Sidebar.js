// src/components/Sidebar.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import navItems from "../utils/navItems";

const Sidebar = () => {
  const location = useLocation();

  return (
    <div
      className="sidebar d-flex flex-column p-3 bg-white"
      style={{ width: "250px" }}
    >
      <div className="logo mb-4">
        <h3>ONEXTEL</h3>
      </div>
      {navItems.map((item) => (
        <Link
          key={item.id}
          to={item.path}
          className={`nav-link d-flex align-items-center mb-3 ${
            location.pathname === item.path
              ? "text-primary fw-bold"
              : "text-dark"
          }`}
          style={{ textDecoration: "none" }}
        >
          <span className="me-2">{item.icon}</span> {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
