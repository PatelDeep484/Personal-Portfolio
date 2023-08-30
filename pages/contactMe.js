import React, { useState } from "react";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import styles from "../styles/Contact.module.css"; // Import your custom CSS module for styling

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Here you can add code to send the email or perform other actions
    // For now, let&apos;s just clear the form and show a success message
    setName("");
    setEmail("");
    setMessage("");
    setSuccessMessage("Message sent successfully!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  return (
    <section>
      <Background />
      <Navbar />
      <section id="contact" className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <h2 className={styles.contactTitle}>Contact Me</h2>
          <div className={styles.additionalContent}>
            <p>
              Feel free to reach out if you&apos;re interested in collaborating,
              have questions, or just want to connect. I&apos;m always excited
              to engage with fellow developers, tech enthusiasts, and
              individuals passionate about technology and creativity.
            </p>
            <p>
              Email:{" "}
              <a href="mailto:pateldeep0295@gmail.com?subject=Feedback&body=Message">
                My email is pateldeep0295
              </a>
              <br />
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/deep-patel-a22530229/"
                target="_blank"
              >
                My LinkedIn Profile
              </a>
              <br />
              GitHub:{" "}
              <a href="https://github.com/PatelDeep484" target="_blank">
                My GitHub Link
              </a>
              <br />
            </p>
            <p>
              I&apos;m also open to discussing opportunities, projects, and
              shared interests. Whether you&apos;re looking to chat about web
              development, explore gaming worlds, or simply exchange ideas,
              don&apos;t hesitate to get in touch.
            </p>
            <p>
              Reach Out Through the Form
              <br />
              Want to send a direct message? Fill out the form below, and
              I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <form className={styles.contactForm} onSubmit={handleFormSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Name:</label>
              <input
                className={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Email:</label>
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Message:</label>
              <textarea
                className={styles.textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <button className={styles.button} type="submit">
              Send
            </button>
            {successMessage && (
              <p className={styles.successMessage}>{successMessage}</p>
            )}
          </form>
        </div>
      </section>
    </section>
  );
};

export default Contact;
