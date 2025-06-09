import React from 'react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certificates = [
  {
    title: 'AI/ML Specialization',
    issuer: 'Lovely Professional University',
    file: 'Gowni Kranthi Kumar.pdf',
    year: '2024',
  },
  {
    title: 'IBM Data Science Certificate',
    issuer: 'IBM',
    file: 'Certificate IBM.pdf',
    year: '2023',
  },
  {
    title: 'Machine Learning Internship',
    issuer: 'Cipher Schools',
    file: 'CipherSchools_GK.pdf',
    year: '2023',
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="certifications section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Certifications</h2>
          <p className="section-subtitle">
            Recognized achievements in AI, Data Science, and Machine Learning
          </p>
        </motion.div>
        <div className="certificates-grid">
          {certificates.map((cert, idx) => (
            <motion.div
              className="certificate-card"
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="certificate-info">
                <h3>{cert.title}</h3>
                <p className="issuer">{cert.issuer}</p>
                <p className="year">{cert.year}</p>
              </div>
              <a
                href={`${process.env.PUBLIC_URL}/${cert.file}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary view-certificate-btn"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 