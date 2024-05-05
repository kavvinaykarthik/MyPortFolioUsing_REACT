import React from 'react';
import '../index.css'; 

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="experience-grid">
          <div className="experience-item gradient-1">
            <h3>Web Developer Intern</h3>
            <p className="company">Exposys Data Labs, Bangalore</p>
            <p className="duration">Feb 2023 - Apr 2023</p>
            <ul>
              <li>Developed a mail dispatcher engine for a featured web application/system.</li>
              <li>The engine is capable of sending mails to multiple recipients in an asynchronous manner.</li>
              <li>Virtually involved in all stages of development, from design to deployment.</li>
              <li><b>Technologies used</b>: Node.js, Express.js, MongoDB, Nodemailer(EmailJS).</li>
            </ul>
          </div>
          <div className="experience-item gradient-2">
            <h3>Machine Learning Intern</h3>
            <p className="company">Code Clause</p>
            <p className="duration">May 2023 - Aug 2023</p>
            <ul>
              <li>Developed a Convolutional Neural Network (CNN) model to accurately predict the age and gender of individuals from images.</li>
              <li>The model was trained on a diverse dataset containing images of different ages and genders.</li>
              <li>Integrated real-time face detection via webcam for live age and gender prediction.</li>
              <li>Utilized liveness detection to ensure authenticity in captured faces.</li>
              <li>Performed data preprocessing, CNN model training, and real-time prediction integration.</li>
              <li><b>Technologies used</b>: Python, TensorFlow, OpenCV.</li>
            </ul>
          </div>
          <div className="experience-item gradient-3">
            <h3>Cloud Services - Eduskills(Virtual)</h3>
            <p className="company">AICTE</p>
            <p className="duration">Aug 2023</p>
            <ul>
              <li>Contributed to AWS platform operations, specializing in EC2 instance provisioning and S3 bucket configuration.</li>
              <li>Configured VPCs, subnets, and security groups to enhance network security.</li>
              <li>Collaborated with the team to optimize costs and performance efficiency through AWS resource monitoring.</li>
              <li>Honed skills in cloud infrastructure management during the internship.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
