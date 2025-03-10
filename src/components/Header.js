// Updated Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBook, FaCog } from 'react-icons/fa';
import './Header.css'; // Create this file for dropdown styles

const Header = () => {
  const [userData, setUserData] = useState(null);
  const [courses, setCourses] = useState([]);
  const [settings, setSettings] = useState({});
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  // Add mock enrolled courses count
  const [enrolledCourses] = useState(2);

  useEffect(() => {
    // Existing API calls...
  }, []);

  return (
    <header>
      <nav>
        <div className="nav-left" style={{ position: 'relative' }}>
          <img src={require('../Assets/icon.png')} alt="Women Risers Icon" className="women-risers-icon" />
          <h1>Women Risers</h1>
        </div>
        <div className="nav-right">
          <Link to="/" className="icon-link">
            <FaHome />
            <span>Home</span>
          </Link>
          <Link to="/courses" className="icon-link">
            <FaBook />
            <span>Courses ({enrolledCourses})</span>
          </Link>
          <Link to="/settings" className="icon-link">
            <FaCog />
            <span>Settings</span>
          </Link>
          <div 
            className="icon-link profile-link" 
            onMouseEnter={() => setShowProfileDropdown(true)}
            onMouseLeave={() => setShowProfileDropdown(false)}
          >
            <FaUser />
            <span>{userData ? userData.name : 'Profile'}</span>
            {showProfileDropdown && (
              <div className="profile-dropdown">
                <Link to="/profile">View Profile</Link>
                <button>Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;