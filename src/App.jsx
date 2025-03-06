import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import SocialLinks from './components/SocialLinks';
import EmailLink from './components/EmailLink';
// Import other pages as needed

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Add other routes as needed */}
            {/* <Route path="/about" element={<About />} /> */}
            {/* <Route path="/experience" element={<Experience />} /> */}
            {/* <Route path="/projects" element={<Projects />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </main>
        <SocialLinks />
        <EmailLink />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
