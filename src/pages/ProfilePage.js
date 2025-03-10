// ProfilePage.js under pages
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProfilePage = () => {
  return (
    <div className="profile-page">
      <Header />
      <main className="profile-content">
        <h1>My Profile</h1>
        <div className="profile-info">
          <div className="avatar-section">
            <div className="avatar-placeholder"></div>
            <button>Change Photo</button>
          </div>
          <div className="info-section">
            <h2>Account Details</h2>
            <div className="info-item">
              <label>Name:</label>
              <span>John Doe</span>
            </div>
            <div className="info-item">
              <label>Email:</label>
              <span>john@example.com</span>
            </div>
            <button className="edit-btn">Edit Profile</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProfilePage;