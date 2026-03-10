import { motion } from "framer-motion";
import { experience } from "../data/resume";
import { FaBriefcase } from "react-icons/fa";
import "./Experience.css";

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="section__container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__tag">Career</span>
          <h2 className="section__title">Work Experience</h2>
        </motion.div>

        <div className="experience__timeline">
          {experience.map((exp, i) => (
            <motion.div
              className="experience__item"
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="experience__dot">
                <FaBriefcase />
              </div>
              <div className="experience__card">
                <div className="experience__card-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <span className="experience__company">{exp.company}</span>
                  </div>
                  <div className="experience__meta">
                    <span>{exp.duration}</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <ul className="experience__bullets">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
