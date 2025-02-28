import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBook, FaCog, } from 'react-icons/fa';

const Header = () => {
    const [userData, setUserData] = useState(null);
    const [courses, setCourses] = useState([]);
    const [settings, setSettings] = useState({});

    useEffect(() => {
        // Mock API call to fetch user data
        fetch('/api/user')
            .then(response => response.json())
            .then(data => setUserData(data));

        // Mock API call to fetch courses
        fetch('/api/courses')
            .then(response => response.json())
            .then(data => setCourses(data));

        // Mock API call to fetch settings
        fetch('/api/settings')
            .then(response => response.json())
            .then(data => setSettings(data));
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
                        <span>Courses ({courses.length})</span>
                    </Link>
                    <Link to="/settings" className="icon-link">
                        <FaCog />
                        <span>Settings</span>
                    </Link>
                    <Link to="/profile" className="icon-link">
                        <FaUser />
                        <span>{userData ? userData.name : 'Profile'}</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;