import React, { useRef } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import MyProjects from './MyProjects';  // Capital P matches file name MyProjects.js exactly

import Footer from './Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null); // Ref for projects section

  // Function to scroll to the section smoothly
  const scrollToSection = (section) => {
    if (section === 'hero' && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'about' && aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'skills' && skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'projects' && projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <div ref={heroRef}>
        <Hero />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <MyProjects />
      </div>
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
