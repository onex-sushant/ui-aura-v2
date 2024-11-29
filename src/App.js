// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import Sidebar from "./components/Sidebar";
import AppBar from "./components/Appbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import Roles from "./pages/Roles";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="main-wrapper flex-grow-1">
          <AppBar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/userManagement" element={<Roles />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
