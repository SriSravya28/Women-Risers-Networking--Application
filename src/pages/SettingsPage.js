// SettingsPage.js under pages
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SettingsPage = () => {
  return (
    <div className="settings-page">
      <Header />
      <main className="settings-content">
        <h1>Account Settings</h1>
        <div className="settings-section">
          <h2>Notification Preferences</h2>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Email Notifications
            </label>
          </div>
          <div className="setting-item">
            <label>
              <input type="checkbox" />
              Course Updates
            </label>
          </div>
        </div>

        <div className="settings-section">
          <h2>Display Preferences</h2>
          <div className="setting-item">
            <label>Theme:</label>
            <select>
              <option>Light</option>
              <option>Dark</option>
            </select>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SettingsPage;