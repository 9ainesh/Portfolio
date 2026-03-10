import { motion } from "framer-motion";
import { skills } from "../data/resume";
import { FaCode, FaTools, FaLightbulb } from "react-icons/fa";
import "./Skills.css";

const categories = [
  { key: "languages", label: "Languages", icon: <FaCode /> },
  { key: "technologies", label: "Technologies & Tools", icon: <FaTools /> },
  { key: "interests", label: "Areas of Interest", icon: <FaLightbulb /> },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section__container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__tag">Expertise</span>
          <h2 className="section__title">Technical Skills</h2>
        </motion.div>

        <div className="skills__grid">
          {categories.map((cat, i) => (
            <motion.div
              className="skills__category"
              key={cat.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="skills__category-header">
                <span className="skills__category-icon">{cat.icon}</span>
                <h3>{cat.label}</h3>
              </div>
              <div className="skills__tags">
                {skills[cat.key].map((skill) => (
                  <motion.span
                    className="skills__tag"
                    key={skill}
                    whileHover={{ scale: 1.08, y: -2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
