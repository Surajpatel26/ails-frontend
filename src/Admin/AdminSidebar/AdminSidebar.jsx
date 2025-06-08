import React, { useState } from "react";
import { FaBars, FaTimes, FaVideo, FaBook, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./AdminSidebar.css";
import logo from "../../assets/AILI-LOGO.png"; // Update this path to your logo file

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("webinars");
  const navigate = useNavigate();

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  const handleNavigation = (path, itemName) => {
    setActiveItem(itemName);
    navigate(path);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminId");
    localStorage.removeItem("token");
    navigate("/login");
  };

  const menuItems = [
    { 
      path: "/dashboard", 
      name: "webinars", 
      icon: <FaVideo className="sidebar-icon" />, 
      label: "Webinars" 
    },
    { 
      path: "/manage-courses", 
      name: "courses", 
      icon: <FaBook className="sidebar-icon" />, 
      label: "Courses" 
    },
    { 
      path: "/manage-profile", 
      name: "profile", 
      icon: <FaUser className="sidebar-icon" />, 
      label: "Manage Profile" 
    },
  ];

  return (
    <nav 
      className={`sidebar-container ${collapsed ? "collapsed" : ""}`}
      aria-label="Admin navigation"
    >
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <img 
            src={logo} 
            alt="Company Logo" 
            className={`logo-image ${collapsed ? "collapsed" : ""}`}
          />
        </div>
        <button 
          className="hamburger-btn" 
          onClick={handleToggleSidebar}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          aria-expanded={!collapsed}
        >
          {collapsed ? <FaBars /> : <FaTimes />}
        </button>
      </div>
      
      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li key={item.name}>
            <button
              className={`sidebar-btn ${activeItem === item.name ? "active" : ""}`}
              onClick={() => handleNavigation(item.path, item.name)}
              aria-current={activeItem === item.name ? "page" : undefined}
            >
              {item.icon}
              {!collapsed && <span className="sidebar-label">{item.label}</span>}
            </button>
          </li>
        ))}
        
        <li className="logout-item">
          <button 
            className="sidebar-btn logout-btn"
            onClick={handleLogout}
            aria-label="Logout"
          >
            <FaSignOutAlt className="sidebar-icon" />
            {!collapsed && <span className="sidebar-label">Logout</span>}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;