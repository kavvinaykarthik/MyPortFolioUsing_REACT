import React from 'react';
import { FaJava, FaPhp, FaJs, FaNodeJs, FaPython, FaDatabase, FaGit, FaReact, FaFire , FaLinkedin} from 'react-icons/fa';
import { GiAncientScrew } from 'react-icons/gi'; // This is just a placeholder for Neo4j as there's no official icon

import '../index.css';
import profileImage from '../images/vinay.jpeg'; // Add the path to your profile image

const AboutMe = () => {
  return (
    <section className="aboutbg-greentext-green">
      <p id='about'></p>
      <div className="container">
        <h2 id='abt'>About Me</h2>
        <div className='intro'>
        <img src={profileImage} className='image1' alt="Profile" style={{ width: '400px', borderRadius: '50%' ,margin:'40px'}} />
        <div className='linkedin'>
        <a href='https://www.linkedin.com/in/k-a-v-vinay-karthik-a30260251/'><FaLinkedin size={20}/>Linkedin</a>
        <p className="text-shadow">
          I am a self-independent, reliable, and friendly individual who works hard to achieve my goals. I am adaptable quickly and well-organized. I am always interested in learning the latest web & software technologies quickly. I am able to work well in teams as well as individually. My future goal is to become a senior full-stack developer.
        </p>
        </div>
        </div>
        <h2 id='education'>Education</h2>
        <div className="education">
  <div className="track">
    <div className="track-item">
      <div className="track-point"></div>
      <h3>Bachelor Of Technology(2021-25)</h3><h3>Computer Science and Engineering </h3>
      <p>Vishnu Institute of Technology, Bhimavaram</p>
    </div>
    <div className="track-item">
      <div className="track-point"></div>
      <h3>Intermediate(MPC)</h3>
      <p>Aditya Educational Institutions, Bhimavaram</p>
    </div>
    <div className="track-item">
      <div className="track-point"></div>
      <h3>Secondary Education(SSC)</h3>
      <p>Adarsh High School</p>
    </div>
  </div>
</div>

        <h2>Skills</h2>
        <div className="skills">
          {/* Web Development Skills */}
          <div className="group bg-red">
            <h3>Web Development</h3>
            <ul className="list">
              <li><span><FaJs /></span>JavaScript</li>
              <li><span><FaNodeJs /></span>Node.js</li>
              <li><span><FaReact /></span>React</li>
              <li><span><FaPhp /></span>PHP OOPs</li>
              <li><span></span>XML</li>
            </ul>
          </div>
          {/* Programming Languages */}
          <div className="group bg-yellow">
            <h3>Programming Languages</h3>
            <ul className="list">
              <li><span><FaJava /></span>Java</li>
              <li><span><FaPython /></span>Python</li>
            </ul>
          </div>
          {/* Databases */}
          <div className="group bg-yellow">
            <h3>Databases</h3>
            <ul className="list">
              <li><span><FaDatabase /></span>MongoDB</li>
              <li><span><FaFire /></span>Firestore</li>
              <li><span><FaDatabase /></span>PostgreSQL</li>
              <li><span><GiAncientScrew /></span>Neo4j</li>
            </ul>
          </div>
          {/* Version Control */}
          <div className="group bg-lightblue">
            <h3>Version Control</h3>
            <ul className="list">
              <li><span><FaGit /></span>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
