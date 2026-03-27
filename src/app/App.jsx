import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Certificate } from './components/certificate';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import './portfolio-styles.css';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="portfolio-app">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certificate/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;