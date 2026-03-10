import { motion } from "framer-motion";
import { personalInfo } from "../data/resume";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaHeart,
} from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="section__container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__tag">Connect</span>
          <h2 className="section__title">Get in Touch</h2>
        </motion.div>

        <motion.p
          className="contact__desc"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I&apos;m always open to new opportunities and interesting
          conversations. Feel free to reach out!
        </motion.p>

        <motion.div
          className="contact__grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href={`mailto:${personalInfo.email}`} className="contact__card">
            <FaEnvelope className="contact__card-icon" />
            <h4>Email</h4>
            <p>{personalInfo.email}</p>
          </a>
          <a href={`tel:${personalInfo.phone}`} className="contact__card">
            <FaPhone className="contact__card-icon" />
            <h4>Phone</h4>
            <p>{personalInfo.phone}</p>
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <FaLinkedin className="contact__card-icon" />
            <h4>LinkedIn</h4>
            <p>Connect with me</p>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="contact__card"
          >
            <FaGithub className="contact__card-icon" />
            <h4>GitHub</h4>
            <p>View my code</p>
          </a>
          <div className="contact__card">
            <FaMapMarkerAlt className="contact__card-icon" />
            <h4>Location</h4>
            <p>{personalInfo.location}</p>
          </div>
        </motion.div>
      </div>

      <footer className="footer">
        <p>
          Designed & Built by <strong>{personalInfo.name}</strong> with{" "}
          <FaHeart className="footer__heart" />
        </p>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </footer>
    </section>
  );
}
