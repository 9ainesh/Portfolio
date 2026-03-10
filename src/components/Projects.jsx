import { motion } from "framer-motion";
import { projects } from "../data/resume";
import { FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section__container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__tag">Portfolio</span>
          <h2 className="section__title">Personal Projects</h2>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.div
              className="projects__card"
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8 }}
            >
              <div className="projects__card-top">
                <div className="projects__card-icon">
                  <FaExternalLinkAlt />
                </div>
                <span className="projects__card-date">{project.date}</span>
              </div>
              <h3>{project.title}</h3>
              <p className="projects__card-subtitle">{project.subtitle}</p>
              <ul className="projects__card-desc">
                {project.description.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
              <div className="projects__card-tech">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
