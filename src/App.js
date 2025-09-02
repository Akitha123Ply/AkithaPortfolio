import React from 'react';
import { Header } from './components/common/Header';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/common/Footer';
import { CodingChallenges } from './components/sections/CodingChallenges';
import { Blog } from './components/sections/Blog';



function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CodingChallenges />
      <Education />
      <Blog />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
