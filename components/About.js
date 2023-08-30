import React from "react";
import styles from "../styles/About.module.css"; // Import your custom CSS module for styling

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <div className={styles.honesty}>
          <h2>About Me and Academic Honesty</h2>
          <p>
            Hi! I am Deep Patel, a passionate Computer Programming and Analysis
            student with a strong fascination for web development and
            problem-solving. With a foundation in programming and a knack for
            creating user-centric digital experiences, I am on a journey to
            transform ideas into innovative web solutions. I thrive on
            continuous learning and embrace challenges that push me to explore
            new technologies and refine my skills. From crafting responsive
            designs to delving into full-stack development, I am dedicated to
            delivering exceptional user experiences through code. Explore my
            portfolio to witness my journey of turning lines of code into
            captivating digital landscapes. Let&apos;s connect and collaborate
            to create meaningful and impactful web projects together. Let&apos;s
            build the web, one line at a time!
          </p>
          <p>
            <span>
              <strong>Date:</strong>
            </span>{" "}
            August 9, 2022
          </p>
        </div>
        <div className={styles.info}>
          <h2>Basic Information</h2>
          <div className={styles.infoContainer}>
            {/* ... Basic information content ... */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
