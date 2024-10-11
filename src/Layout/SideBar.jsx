import React, { useState } from 'react';
import { FaBars, FaHome, FaTimes } from 'react-icons/fa';
import logo from "../assets/react.svg";
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`sidebar ${isExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
        {isExpanded && (
          <Link to="/" className="sidebar-logo-link">
            <img src={logo} alt="Logo" className="sidebar-logo" />
          </Link>
        )}

        <div className="sidebar-toggle" onClick={toggleSidebar}>
          {isExpanded ? (
            <FaTimes size={24} className="text-white" /> 
          ) : (
            <FaBars size={24} className="text-white" /> 
          )}
        </div>
      </div>
      <ul className="list-unstyled">
        <li className="sidebar-item">
          <Link to="/" className="text-white d-flex align-items-center">
            <FaHome />
            {isExpanded ? (
              <span className="ms-2">Home</span>
            ) : (
              <span className="custom-tooltip">Home</span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
