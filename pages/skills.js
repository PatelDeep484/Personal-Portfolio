import React from "react";
import SkillsSection from "../components/skills"; // Import the SkillsSection component
import Navbar from "../components/Navbar"; // Import the Navbar component

import Background from "@/components/Background";
import styles from "../styles/Skills.module.css"; // Import your custom CSS module for styling

const Skills = () => {
  const frontEndSkills = ["HTML", "CSS", "JavaScript", "React", "Vue"];
  const backEndSkills = ["Node.js", "Express.js", "Django", "Ruby on Rails"];

  return (
    <section>
      <Background />
      <Navbar />
      <section id="skills" className={styles.skillsSection}>
        <div className={styles.skillsContainer}>
          <div className={styles.skillCategory}>
            <h3>Web Development</h3>
            <hr class="rounded" />
            <ul className={styles.skillsList}>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Dom Manipulation</li>
              <li>Node.js</li>
              <li>NPM</li>
              <li>JSON</li>
              <li>Express.js</li>
              <li>Forms</li>
              <li>Express-Handlebars</li>
              <li>REST API</li>
              <li>Json Web Token</li>
              <li>React</li>
              <li>Next.js</li>
              <li>Fetch API</li>
              <li>MongoDB</li>
              <li>SQL</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>DataBase</h3>
            <hr class="rounded" />
            <ul className={styles.skillsList}>
              <li>SQL</li>
              <li>MongoDB</li>
              <li>SQLite</li>
              <li>Oracle</li>
              <li>PostgreSQL</li>
              <li>Databases</li>
              <li>Collection</li>
              <li>ERD</li>
              <li>Relational DataBase</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>C/C++</h3>
            <hr class="rounded" />
            <ul className={styles.skillsList}>
              <li>C</li>
              <li>C++</li>
              <li>Pointers</li>
              <li>References</li>
              <li>Enumerations</li>
              <li>Class Templates</li>
              <li>STL Algorithm Library</li>
              <li>Multi-Threading</li>
              <li>Smart Pointers</li>
              <li>Multiple Inheritance</li>
              <li>Linked List Technology</li>
              <li>Sockets</li>
              <li>Multi-Threaded Servers</li>
              <li>Overloading</li>
              <li>Dynamic Memory</li>
              <li>Abstraction</li>
              <li>Polymorphism</li>
              <li>Inheritance</li>
              <li>Templates</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Python</h3>
            <hr class="rounded" />
            <ul className={styles.skillsList}>
              <li>Sockets</li>
              <li>Multi-Threading</li>
              <li>Inheritance</li>
              <li>Generators</li>
              <li>Object-oriented programming (OOP) in Python</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Communication</h3>
            <hr class="rounded" />
            <ul className={styles.skillsList}>
              <li>Stress Management</li>
              <li>Decision Making</li>
              <li>Effective written and verbal communication</li>
              <li>Clear and concise documentation</li>
              <li>Presentation skills</li>
              <li>Active listening</li>
              <li>Technical writing</li>
              <li>Collaborative communication within teams</li>
              <li>Interpersonal Communication</li>
              <li>Team Leading</li>
            </ul>
          </div>
          <div className={styles.skillCategory}>
            <h3>Agile</h3>
            <hr class="rounded" />
            <ul className={styles.skillsList}>
              <li>SCRUM Methodologies</li>
              <li>Agile Principles</li>
              <li>User Stories</li>
              <li>Features</li>
              <li>UI Mockups</li>
              <li>Use Case Modeling</li>
            </ul>
          </div>
          {/* Create more skill categories */}
        </div>
      </section>
    </section>
  );
};

export default Skills;
