import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { courses } from '../data/courses';

const CourseDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  
  // Get course from state or find in courses array
  const course = location.state?.course || courses.find(c => c.id === parseInt(id));

  const handleEnroll = () => {
    navigate('/success', { state: { course } });
  };

  if (!course) {
    return (
      <div className="course-detail">
        <Header />
        <main>
          <div className="error-message">Course not found</div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="course-detail">
      <Header />
      <main>
        <div className="course-header">
          <div className="course-image-container">
            <img src={course.image} alt={course.title} />
          </div>
          <div className="course-info">
            <h1>{course.title}</h1>
            <p className="instructor">By {course.instructor}</p>
            <p className="duration">Duration: {course.duration}</p>
            <div className="action-buttons">
              <button onClick={handleEnroll} className="enroll-btn">
                Enroll Now
              </button>
            </div>
          </div>
        </div>

        <div className="course-content">
          <h2>Course Content</h2>
          <ul>
            {course.content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;