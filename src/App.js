import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header'; // Adjust path if needed
import Hero from './Hero'; // Import the hero component
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  // Keep your Home component code (if needed)
  return null; // or actual content
}

function About() {
  // Keep your About component code
  return null; // or actual content
}

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />   {/* Add Hero section here */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
