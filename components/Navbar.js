// components/Navbar.js

import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${styles.navbar}`}
    >
      <div className="container">
        <Link href="/" className="navbar-brand">
          Deep Patel
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className={`navbar-nav ml-auto ${styles.navList}`}>
            <li className="nav-item">
              <Link href="/" className="nav-link">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/skills" className="nav-link">
                Skills
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contactMe" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="/path-to-your-resume.pdf"
                className={`nav-link ${styles.resumeLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
