import React from 'react';
import '../index.css';

const Contact = () => {
  return (
    <section id="contact" className="contact bg-bluieshviolet text-bluieshviolet">
      <div className="container">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
        <div className="social-links">
          <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/"><i className="fab fa-github"></i></a>
          <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
