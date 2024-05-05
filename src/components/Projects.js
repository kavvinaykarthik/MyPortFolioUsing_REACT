import React from 'react';
import '../index.css';
import Image1 from '../images/wallet.png';
import Image2 from '../images/age-gender-sample1.jpg';
import Image3 from '../images/mail.png';
import Image4 from '../images/scheduling.png';
import Image5 from '../images/product.png';

const Projects = () => {
  return (
    <section id="projects" className="projects bg-reddishpink text-reddishpink">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-grid">
        <div className="project-card">
            <img src={Image1} alt="ProjectImage" className="project-image"/>
            <div className="project-content">
              <h3>Meta Wallet - A Virtual Data Store</h3>
              <p>
                This web application offers user registration and login, facilitating secure storage and management of various data types like card details, ID proofs, notes, and passwords. Additional features include support for personal storages like textual data (PDFs, Docs), and images, enriching the application's versatility.
              </p>
              <a href="https://github.com/kavvinaykarthik/Meta_WalletExtensible">GitHub Link</a>
              <a href='https://www.youtube.com/watch?v=exSp3z3V2ZM'>Demo</a>
            </div>
          </div>
          <div className="project-card">
            <img src={Image2} alt="ProjectImage" className="project-image" />
            <div className="project-content">
              <h3>Age And Gender Estimation System</h3>
              <p>
                In this project, I developed a Convolutional Neural Network (CNN) model to accurately predict the age and gender of individuals from images. The model predicts age range and gender accurately from images and integrates real-time face detection via webcam for live age and gender prediction. The project involved data preprocessing, CNN model training, and real-time prediction integration, showcasing the practical application of deep learning.
              </p>
              <a href="https://github.com/kavvinaykarthik/ImageCapture-DetectionKERAS">GitHub Link</a>
              <a href='https://www.linkedin.com/posts/k-a-v-vinay-karthik-a30260251_deeplearning-computervision-ageandgenderdetection-activity-7102632919113883648-Hzuu?utm_source=share&utm_medium=member_desktop'>Demo</a>
            </div>
          </div>
        {/* New Projects */}
        <div className="project-card">
          <img src={Image3} alt="ProjectImage" className="project-image" />
          <div className="project-content">
          <h3>Mass Mail Dispatcher</h3>
          <p>
            Involved in building an engine that handles featured web application/system capable of sending mails to multiple recipients in an asynchronous manner.
          </p>
          <a href="https://github.com/kavvinaykarthik/MassMailDispatcher-EmailJS-">GitHub Link</a>
          </div>
        </div>
        <div className="project-card">
        <img src={Image4} alt="ProjectImage" className="project-image" />
          <div className="project-content">
          <h3>Sport Scheduler</h3>
          <p>
            Sport Scheduler is an application using PostgreSQL for managing and maintaining the players' sport sessions. Admins can create sessions, which players can join, and admins can also delete sessions. Each session consists of date, time, and venue.
          </p>
          <a href="https://github.com/kavvinaykarthik/SportScheduler-PosGre-Project-">GitHub Link</a>
          <a href='https://www.youtube.com/watch?v=rwaB6pE9T7E'>Demo</a>
          </div>
        </div>
        {/* New Project */}
        <div className="project-card">
        <img src={Image5} alt="ProjectImage" className="project-image" />
          <div className="project-content">
          <h3>Product Recommendation System With User Preferences</h3>
          <p>
            Created a general product search system on Amazon dataset that searches and recommends the top 10 products based on user preferences. The tech stack includes web application development (Streamlit), image processing (PIL), string matching (FuzzyWuzzy), machine learning (scikit-learn), and data handling and analysis (Pandas, NumPy).
          </p>
          <a href="https://github.com/kavvinaykarthik/Product_Recommendation_System">GitHub Link</a>
          <a href='https://www.youtube.com/watch?v=QQttn9LIgOE'>Demo(Team)</a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Projects;
