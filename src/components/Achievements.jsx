import { motion } from "framer-motion";
import { achievements, codingProfiles } from "../data/resume";
import { FaTrophy, FaStar } from "react-icons/fa";
import { SiCodeforces, SiCodechef, SiGeeksforgeeks } from "react-icons/si";
import "./Achievements.css";

export default function Achievements() {
  return (
    <section className="achievements" id="achievements">
      <div className="section__container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__tag">Recognition</span>
          <h2 className="section__title">Achievements & Coding Profiles</h2>
        </motion.div>

        <div className="achievements__layout">
          <motion.div
            className="achievements__list"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="achievements__subtitle">
              <FaTrophy className="achievements__subtitle-icon" /> Competitive
              Programming
            </h3>
            {achievements.map((a, i) => (
              <motion.div
                className="achievements__item"
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <FaStar className="achievements__star" />
                <p>{a}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="achievements__profiles"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="achievements__subtitle">
              <FaTrophy className="achievements__subtitle-icon" /> Coding
              Profiles
            </h3>
            {codingProfiles.map((p, i) => (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="achievements__profile-card"
                key={i}
              >
                <span className="achievements__profile-icon">
                  {p.platform === "Codeforces" && <SiCodeforces />}
                  {p.platform === "CodeChef" && <SiCodechef />}
                  {p.platform === "GeeksforGeeks" && <SiGeeksforgeeks />}
                </span>
                <div>
                  <h4>{p.platform}</h4>
                  <p>{p.detail}</p>
                </div>
              </a>
            ))}

            <div className="achievements__stats">
              <div className="achievements__stat">
                <span className="achievements__stat-number">2085</span>
                <span className="achievements__stat-label">
                  Max CodeChef Rating
                </span>
              </div>
              <div className="achievements__stat">
                <span className="achievements__stat-number">1508</span>
                <span className="achievements__stat-label">
                  Max Codeforces Rating
                </span>
              </div>
              <div className="achievements__stat">
                <span className="achievements__stat-number">661</span>
                <span className="achievements__stat-label">
                  Best KickStart Rank
                </span>
              </div>
              <div className="achievements__stat">
                <span className="achievements__stat-number">8</span>
                <span className="achievements__stat-label">
                  GFG Articles Published
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
