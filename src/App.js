import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes as you create the pages */}
        {/* <Route path="/projects" element={<Projects />} /> */}
        {/* <Route path="/experience" element={<Experience />} /> */}
        {/* <Route path="/resume" element={<Resume />} /> */}
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
