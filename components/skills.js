import React from "react";
import styles from "../styles/Skills.module.css"; // Import your custom CSS module for styling

const SkillsSection = ({ title, skills }) => {
  return (
    <div className={styles.skillsSection}>
      <h2 className={styles.subHeading}>{title}</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsColumn}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
