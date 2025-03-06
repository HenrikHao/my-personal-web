import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home'; // Create this page or substitute with your content
// Import Projects and Experience pages similarly

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-dark">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes as needed */}
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/experience" element={<Experience />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
