import React, { useState } from 'react';
import { FaBars, FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const SideBar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded); // Toggle the state
  };

  return (
    <div className={`sidebar ${isExpanded ? 'sidebar-expanded' : 'sidebar-collapsed'}`}>
      <div className="sidebar-header d-flex justify-content-between align-items-center p-3">
        {isExpanded && <img src="/path/to/logo.png" alt="Logo" className="sidebar-logo" />}
        <div className="sidebar-toggle" onClick={toggleSidebar}>
          <FaBars size={24} className="text-white" /> 
        </div>
      </div>
      <ul className="list-unstyled">
        <li>
          <a href="#home" className="text-white d-flex align-items-center">
            <FaHome /> {isExpanded && <span className="ms-2">Home</span>}
          </a>
        </li>
        <li>
          <a href="#about" className="text-white d-flex align-items-center">
            <FaInfoCircle /> {isExpanded && <span className="ms-2">About</span>}
          </a>
        </li>
        <li>
          <a href="#services" className="text-white d-flex align-items-center">
            <FaServicestack /> {isExpanded && <span className="ms-2">Services</span>}
          </a>
        </li>
        <li>
          <a href="#contact" className="text-white d-flex align-items-center">
            <FaEnvelope /> {isExpanded && <span className="ms-2">Contact</span>}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
