import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink, FiGithub, FiCpu, FiDatabase, FiGlobe } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      id: 1,
      title: "AI-Powered Recommendation System",
      description: "Developed a machine learning-based recommendation engine using collaborative filtering and content-based approaches. Implemented with Python, Scikit-learn, and deployed using Flask.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      technologies: ["Python", "Scikit-learn", "Flask", "Pandas", "NumPy"],
      category: "Machine Learning",
      icon: <FiCpu size={24} />,
      github: "https://github.com/gownikranthi/recommendation-system",
      live: "https://recommendation-system-demo.herokuapp.com"
    },
    {
      id: 2,
      title: "Natural Language Processing Chatbot",
      description: "Built an intelligent chatbot using NLP techniques including sentiment analysis and intent recognition. Integrated with multiple APIs for enhanced functionality.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop",
      technologies: ["Python", "NLTK", "TensorFlow", "FastAPI", "PostgreSQL"],
      category: "NLP",
      icon: <FiCpu size={24} />,
      github: "https://github.com/gownikranthi/nlp-chatbot",
      live: "https://nlp-chatbot-demo.vercel.app"
    },
    {
      id: 3,
      title: "Data Analytics Dashboard",
      description: "Created an interactive dashboard for business intelligence using real-time data processing and visualization. Features include predictive analytics and automated reporting.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Python", "Streamlit", "Plotly", "Pandas", "SQL"],
      category: "Data Analytics",
      icon: <FiDatabase size={24} />,
      github: "https://github.com/gownikranthi/analytics-dashboard",
      live: "https://analytics-dashboard.streamlit.app"
    },
    {
      id: 4,
      title: "Computer Vision Object Detection",
      description: "Implemented real-time object detection system using YOLO and OpenCV. Applied transfer learning for custom dataset training and optimization.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      technologies: ["Python", "OpenCV", "YOLO", "TensorFlow", "CUDA"],
      category: "Computer Vision",
      icon: <FiCpu size={24} />,
      github: "https://github.com/gownikranthi/object-detection",
      live: "https://object-detection-demo.herokuapp.com"
    },
    {
      id: 5,
      title: "Predictive Maintenance System",
      description: "Developed an IoT-based predictive maintenance solution using sensor data and machine learning algorithms to predict equipment failures.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop",
      technologies: ["Python", "IoT", "Time Series", "ML", "Docker"],
      category: "IoT & ML",
      icon: <FiCpu size={24} />,
      github: "https://github.com/gownikranthi/predictive-maintenance",
      live: "https://predictive-maintenance-demo.netlify.app"
    },
    {
      id: 6,
      title: "E-commerce AI Assistant",
      description: "Built an AI-powered virtual assistant for e-commerce platforms with product recommendations, customer support, and sales analytics.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["Python", "Chatbot", "NLP", "API", "React"],
      category: "AI Assistant",
      icon: <FiGlobe size={24} />,
      github: "https://github.com/gownikranthi/ecommerce-ai",
      live: "https://ecommerce-ai-demo.vercel.app"
    }
  ];

  return (
    <section id="projects" className="projects section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my work in AI/ML, computer vision, and intelligent systems
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="project-header">
                <div className="project-icon">
                  {project.icon}
                </div>
                <div className="project-category">
                  {project.category}
                </div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiGithub size={18} />
                  View Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://github.com/gownikranthi"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <FiGithub size={18} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 