import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMessageSquare } from 'react-icons/fi';
import './Testimonials.css';

const Testimonials = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const testimonials = [
    {
      id: 1,
      quote: "Kranthi's work on image classification exceeded expectations — he consistently delivered high-quality results with zero compromise on accuracy.",
      author: "Ajay Rastogi",
      role: "Cipher Schools Mentor",
      company: "Cipher Schools"
    },
    {
      id: 2,
      quote: "One of the most dedicated and adaptive learners I've mentored — especially strong in combining business logic with ML tools.",
      author: "Anjali Bakshi",
      role: "Academic Advisor",
      company: "LPU"
    },
    {
      id: 3,
      quote: "Kranthi took initiative and delivered on-time, high-impact AI models even in pressure situations.",
      author: "Ramandeep Kaur",
      role: "Internship Coordinator",
      company: "LPU"
    }
  ];

  return (
    <section id="testimonials" className="testimonials section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>What People Say</h2>
          <p className="section-subtitle">
            Testimonials from mentors, colleagues, and academic advisors
          </p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
            >
              <div className="quote-icon">
                <FiMessageSquare size={24} />
              </div>
              
              <blockquote className="testimonial-quote">
                {testimonial.quote}
              </blockquote>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4 className="author-name">{testimonial.author}</h4>
                  <p className="author-role">{testimonial.role}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="testimonials-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Ready to Work Together?</h3>
            <p>
              I'm always excited to collaborate on innovative AI/ML projects. 
              Let's discuss how we can create intelligent solutions together.
            </p>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials; 