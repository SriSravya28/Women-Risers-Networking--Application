import React from 'react';
import Header from '../components/Header';
import CourseCard from '../components/CourseCard';
import Footer from '../components/Footer';
import { courses } from '../data/courses';

const Home = () => {
  return (
    <div className="home-page">
      <Header />
      <main>
        <div className="header-section">
          <h1>Women Risers</h1>
          <p className="subtitle">Enrollments Worldwide</p>
          <div className="progress-container">
            <span>Overall Progress: 7% Complete</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '7%' }}></div>
            </div>
          </div>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;