import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="d-flex flex-column p-3 bg-light" style={{ width: "250px", height: "100vh" }}>
      <h4>Job Search</h4>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/jobs">Job Applications</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/profile">Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
