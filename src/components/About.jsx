import { motion } from "framer-motion";
import { personalInfo, education } from "../data/resume";
import {
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section__container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__tag">About Me</span>
          <h2 className="section__title">Who I Am</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>{personalInfo.about}</p>
          </motion.div>

          <motion.div
            className="about__info"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="about__card">
              <FaGraduationCap className="about__card-icon" />
              <div>
                <h4>{education[0].degree}</h4>
                <p>{education[0].institution}</p>
                <span className="about__card-meta">
                  {education[0].duration} • {education[0].grade}
                </span>
              </div>
            </div>
            <div className="about__card">
              <FaMapMarkerAlt className="about__card-icon" />
              <div>
                <h4>Location</h4>
                <p>{personalInfo.location}</p>
              </div>
            </div>
            <div className="about__card">
              <FaPhone className="about__card-icon" />
              <div>
                <h4>Phone</h4>
                <p>{personalInfo.phone}</p>
              </div>
            </div>
            <div className="about__card">
              <FaEnvelope className="about__card-icon" />
              <div>
                <h4>Email</h4>
                <p>{personalInfo.email}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
