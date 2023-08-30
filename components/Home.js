import React from "react";

const Home = () => {
  return (
    <section id="home">
      <div class="Home">
        <div class="about-me">
          <h2>Deep Patel</h2>
          <p>
            Hello, My name is Deep Patel. Currently I am a full-time student
            student from India and am pursuing advanced diploma in Computer
            Programming and Analysis at Seneca College.This is a website about
            Myself for the Final assessment of my course WEB222.
          </p>
        </div>
        <div class="btn">
          <a href="Resume.pdf" download="Deep Patel- Resume">
            <button>
              <i class="fa fa-download"></i>Resume
            </button>
          </a>
          <a href="#contact-me">
            <button>Contact me</button>
          </a>
        </div>
      </div>
      {/* Your home section JSX here */}
    </section>
  );
};

export default Home;
