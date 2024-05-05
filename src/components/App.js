import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Projects from './Projects';
import Contact from './Contact';
import '../index.css';
import Experience from './Experience';

const App = () => {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <Experience/>
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
