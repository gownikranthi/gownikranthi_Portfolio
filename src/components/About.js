import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container about-modern">
        <div className="about-modern-content">
          <div className="about-modern-image">
            <img src="/profile.jpg" alt="Gowni Kranthi Kumar" className="profile-photo" />
          </div>
          <div className="about-modern-text">
            <h2 className="about-modern-title">About Me</h2>
            <p className="about-modern-description">
              I'm <strong>Gowni Kranthi Kumar</strong>, a postgraduate student in <strong>MCA with a specialization in Artificial Intelligence & Machine Learning</strong> at Lovely Professional University.<br /><br />
              My journey began with a background in business — holding a <strong>BBA in Finance & Marketing</strong> — but my passion for building intelligent systems and solving real-world problems led me to the world of AI.<br /><br />
              Today, I design and develop smart solutions using tools like <strong>Python, Power BI, TensorFlow, and YOLOv5</strong>. From emotion detection in text to hierarchical object-subobject detection, I've built projects that merge business insight with deep tech.<br /><br />
              I'm particularly interested in the intersection of <strong>data, automation, and human behavior</strong>. I strive to bridge the gap between strategy and technology through intelligent, data-driven systems.<br /><br />
              I'm currently seeking opportunities to contribute to <strong>AI/ML, Data Science, or product-driven teams</strong> where I can keep learning, solving, and innovating.
            </p>
            <div className="about-modern-contact">
              <span className="about-modern-label">Mobile:</span> <a href="tel:9618296518" className="about-modern-phone">9618296518</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 