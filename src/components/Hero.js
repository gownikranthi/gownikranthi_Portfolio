import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Resume_GK.pdf';
    link.download = 'Gowni_Kranthi_Kumar_Resume.pdf';
    link.click();
  };

  const handleViewGitHub = () => {
    window.open('https://github.com/gownikranthi', '_blank');
  };

  const handleConnect = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="hero-greeting"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="greeting-text">Hi, I'm</span>
            </motion.div>

            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Gowni Kranthi Kumar
            </motion.h1>

            <motion.h2
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              AI/ML Specialist & Postgraduate at LPU
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              I build intelligent, context-aware systems that blend code, data, and creativity.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <button className="btn btn-primary" onClick={handleDownloadResume}>
                <FiDownload size={18} />
                Download Resume
              </button>
              
              <button className="btn btn-secondary" onClick={handleViewGitHub}>
                <FiGithub size={18} />
                View GitHub
              </button>
              
              <button className="btn btn-ghost" onClick={handleConnect}>
                Let's Connect
                <FiArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div
              className="hero-quote"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <blockquote>
                "I bridge business insights with AI intelligence — one intelligent model at a time."
              </blockquote>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="image-container">
              <div className="profile-image">
                <img src={`${process.env.PUBLIC_URL}/profile.jpg`} alt="Gowni Kranthi Kumar" className="profile-photo" />
              </div>
              <div className="image-decoration"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 
