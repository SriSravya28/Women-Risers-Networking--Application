import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className="course-card">
      <img src={course.image} alt={course.title} className="course-image" />
      <div className="course-content">
        <h3>{course.title}</h3>
        <p className="instructor">By: {course.instructor}</p>
        <Link
          to={`/course/${course.id}`}
          state={{ course }}  // Pass course data through state
          className="enroll-btn"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;