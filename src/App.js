import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetail from './pages/CourseDetail';
import SuccessPage from './pages/SuccessPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course/:id" element={<CourseDetail />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;