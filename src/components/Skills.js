import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiCpu, FiBarChart2 } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skillCategories = [
    {
      id: 1,
      title: "Programming Languages",
      icon: <FiCode size={24} />,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Java (Basic)", level: 70 }
      ]
    },
    {
      id: 2,
      title: "Libraries & Frameworks",
      icon: <FiCode size={24} />,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 85 },
        { name: "Scikit-learn", level: 88 },
        { name: "TensorFlow", level: 85 },
        { name: "Keras", level: 80 },
        { name: "NLTK", level: 75 },
        { name: "Matplotlib", level: 85 }
      ]
    },
    {
      id: 3,
      title: "Tools & Platforms",
      icon: <FiCpu size={24} />,
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Docker", level: 75 },
        { name: "Kubernetes", level: 70 },
        { name: "PostgreSQL", level: 80 },
        { name: "Apache Spark", level: 75 },
        { name: "Apache Kafka", level: 70 },
        { name: "Apache Airflow", level: 75 }
      ]
    },
    {
      id: 4,
      title: "Soft Skills",
      icon: <FiBarChart2 size={24} />,
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Teamwork", level: 90 },
        { name: "Adaptability", level: 88 },
        { name: "Communication", level: 85 },
        { name: "Project Ownership", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Skills & Expertise</h2>
          <p className="section-subtitle">
            Technical proficiency and professional competencies
          </p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-progress"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="summary-card">
            <h3>Core Competencies</h3>
            <div className="competencies-grid">
              <div className="competency">
                <h4>Machine Learning</h4>
                <p>Deep learning, NLP, computer vision, and predictive modeling</p>
              </div>
              <div className="competency">
                <h4>Data Engineering</h4>
                <p>ETL pipelines, data warehousing, and real-time processing</p>
              </div>
              <div className="competency">
                <h4>Business Intelligence</h4>
                <p>Data visualization, dashboard creation, and business analytics</p>
              </div>
              <div className="competency">
                <h4>AI Development</h4>
                <p>Intelligent systems, chatbots, and automated solutions</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 