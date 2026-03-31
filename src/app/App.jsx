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
 import { Helmet } from "react-helmet";

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (

     <>
      <Helmet>
        <title>Gauri Kharone Portfolio</title>
        <meta
          name="description"
          content="Full Stack Developer Portfolio showcasing projects, skills and experience"
        />
      </Helmet>
      
   
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
    </>
  );
}

export default App;