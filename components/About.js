import React from "react";
import styles from "../styles/About.module.css"; // Import your custom CSS module for styling

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContainer}>
        <h1>About Me</h1>
        <div className={styles.aboutMe}>
          <p>
            Hello and welcome! I&apos;m Deep Patel, a passionate student in the
            realm of technology and web development. With a strong foundation in
            Computer Programming and Analysis and an insatiable curiosity for
            crafting digital experiences, I&apos;m excited to take you on a
            journey through my world of coding, creativity, continuous learning,
            and gaming.Since embarking on my tech journey, I&apos;ve been
            captivated by the sheer power of code to transform concepts into
            tangible digital realities. My fascination with web development
            springs from its dynamic nature—an arena where logic and creativity
            converge, and innovation knows no boundaries.
            {/* ... Remaining introduction ... */}
          </p>
        </div>

        {/* Interests and Learning */}
        <div className={styles.sectionBox}>
          <h3 className={styles.subHeading}>Interests and Learning</h3>
          <p className={styles.paragraph}>
            My fascination with web development springs from its dynamic
            nature—an arena where logic and creativity converge, and innovation
            knows no boundaries. When I&apos;m not coding, I enjoy exploring
            virtual worlds through gaming, refining my technical skills, and
            learning about new technologies.As much as I enjoy crafting digital
            experiences, I find equal joy in experiencing them as a player.
            Exploring virtual worlds, mastering strategies, and collaborating
            with fellow gamers bring a unique blend of enjoyment and inspiration
            to my life.
            <br />
            As a Seneca College student, I&apos;ve been fortunate to refine my
            skills and dive deep into programming. From mastering the essentials
            of HTML, CSS, and JavaScript to exploring the intricacies of
            contemporary frameworks like React and Angular, I&apos;ve found joy
            in every step of this learning process. Crafting clean and efficient
            code that not only functions but also engages users has become my
            passion.
            {/* ... Interests and learning content ... */}
          </p>
        </div>

        {/* Collaboration and Communication */}
        <div className={styles.sectionBox}>
          <h3 className={styles.subHeading}>Collaboration and Communication</h3>
          <p className={styles.paragraph}>
            Collaboration is key to solving intricate problems and forging
            impactful solutions. I firmly believe that the true magic of
            technology blossoms when minds from diverse backgrounds converge to
            solve intricate problems and forge impactful solutions. My
            experiences in team projects, and immersive workshops have
            reinforced the incredible synergy that emerges from diverse minds
            working together. I&apos;m also passionate about effective
            communication, bridging the gap between technical concepts and
            relatable terms.
            <br />
            While coding is a substantial part of my life, I&apos;m equally
            passionate about effective communication and seamless teamwork. The
            ability to distill intricate technical concepts into clear and
            relatable terms is a skill I&apos;m perpetually refining. Because,
            in the grand scheme, the true potency of technology lies not only in
            its lines of code but in its capacity to connect and enrich lives.
            {/* ... Collaboration and communication content ... */}
          </p>
        </div>

        {/* Beyond Tech */}
        <div className={styles.sectionBox}>
          <h3 className={styles.subHeading}>Beyond Tech</h3>
          <p className={styles.paragraph}>
            Beyond my academic and technical pursuits, I explore literature,
            photography, culinary adventures, and gaming. These interests foster
            creativity and unique problem-solving approaches that enrich both my
            coding and personal experiences.
            <br />
            Through this portfolio, I invite you to journey through my projects,
            delve into my experiences, and get better acquainted with the
            individual weaving the tapestry of code. Whether you&apos;re a
            fellow developer, a burgeoning tech enthusiast, or simply someone
            intrigued by the digital realm and gaming, I aspire for my journey
            to resonate with you.
            {/* ... Beyond tech interests content ... */}
          </p>
        </div>

        {/* Let&apos;s Connect */}
        <div className={styles.sectionBox}>
          <h3 className={styles.subHeading}>Let&apos;s Connect</h3>
          <p className={styles.paragraph}>
            Whether you&apos;re here to collaborate, learn, discuss gaming
            strategies, or simply share a virtual cup of coffee, I&apos;m
            excited to connect with you. Let&apos;s embark on a journey of
            exploration, innovation, and growth together.
            {/* ... Let&apos;s connect content ... */}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
