import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <div className="success-page">
      <Header />
      <main className="success-content">
        <FaCheckCircle className="success-icon" />
        <h1>Enrollment Successful! 🎉</h1>
        <p>You've successfully enrolled in the course</p>
        <button 
          onClick={() => navigate('/')} 
          className="home-btn"
        >
          Explore More Courses
        </button>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessPage;