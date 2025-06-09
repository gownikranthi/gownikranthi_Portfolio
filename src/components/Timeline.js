import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiBriefcase, FiBook, FiTarget } from 'react-icons/fi';
import './Timeline.css';

const Timeline = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const timelineData = [
    {
      year: "2023 - Present",
      title: "MCA (AI & ML)",
      subtitle: "Lovely Professional University",
      description: "Pursuing postgraduate studies in Artificial Intelligence and Machine Learning with focus on advanced algorithms, deep learning, and practical applications.",
      icon: <FiAward size={24} />,
      type: "education"
    },
    {
      year: "2020 - 2023",
      title: "BBA (Finance & Marketing)",
      subtitle: "Shree Medha Degree College",
      description: "Completed undergraduate studies with strong foundation in business principles, financial analysis, and marketing strategies.",
      icon: <FiBook size={24} />,
      type: "education"
    },
    {
      year: "2023 - Present",
      title: "AI/ML Research Assistant",
      subtitle: "LPU Research Lab",
      description: "Working on cutting-edge AI projects including computer vision, natural language processing, and predictive analytics.",
      icon: <FiBriefcase size={24} />,
      type: "work"
    },
    {
      year: "2022 - 2023",
      title: "Data Analyst Intern",
      subtitle: "TechCorp Solutions",
      description: "Analyzed business data, created dashboards, and provided insights for strategic decision-making using Python and SQL.",
      icon: <FiTarget size={24} />,
      type: "work"
    }
  ];

  const getIconColor = (type) => {
    switch (type) {
      case 'education':
        return 'var(--primary-color)';
      case 'experience':
        return 'var(--accent-color)';
      case 'achievement':
        return 'var(--secondary-color)';
      default:
        return 'var(--primary-color)';
    }
  };

  return (
    <section id="timeline" className="timeline section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Career Timeline</h2>
          <p className="section-subtitle">
            My journey from business to artificial intelligence
          </p>
        </motion.div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {timelineData.map((event, index) => (
            <motion.div
              key={event.year}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-content">
                <div className="timeline-icon" style={{ backgroundColor: getIconColor(event.type) }}>
                  {event.icon}
                </div>
                
                <div className="timeline-details">
                  <div className="timeline-year">{event.year}</div>
                  <h3 className="timeline-title">{event.title}</h3>
                  <div className="timeline-institution">{event.subtitle}</div>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="timeline-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <div className="summary-content">
            <h3>What's Next?</h3>
            <p>
              I'm actively seeking opportunities to apply my AI/ML expertise in real-world business scenarios. 
              My goal is to contribute to innovative projects that leverage artificial intelligence to solve 
              complex business challenges and create meaningful impact.
            </p>
            <div className="next-steps">
              <div className="step">
                <h4>Immediate Goals</h4>
                <p>Complete MCA program and secure AI/ML role</p>
              </div>
              <div className="step">
                <h4>Long-term Vision</h4>
                <p>Lead AI initiatives and drive business transformation</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline; 