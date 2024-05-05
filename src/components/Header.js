import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <header className="header bg-greenishyellow text-greenishyellow">
      <div className="container">
        <h1 className="text-shadow-greenishyellow">Kumanduri A V Vinay Karthik</h1>
        <nav>
          <p>FULL STACK WEB DEVELOPER</p>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="https://vinaykarthik-resume.tiiny.site" target="_blank" rel="noopener noreferrer">View Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
