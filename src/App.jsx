// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
// import Projects from './sections/Projects/Projects';
import Skills from './sections/Skills/Skills';
import Loader from './sections/Loader/ModernLoader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          <Hero />
          {/* <Projects /> */}
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
