import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaBook, FaCog, FaFemale } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <nav>
                <div className="nav-left">
                    <FaFemale className="brand-icon" />
                    <h1>Women Risers</h1>
                </div>
                <div className="nav-right">
                    <Link to="/" className="icon-link">
                        <FaHome />
                        <span>Home</span>
                    </Link>
                    <Link to="/courses" className="icon-link">
                        <FaBook />
                        <span>Courses</span>
                    </Link>
                    <Link to="/settings" className="icon-link">
                        <FaCog />
                        <span>Settings</span>
                    </Link>
                    <Link to="/profile" className="icon-link">
                        <FaUser />
                        <span>Profile</span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;