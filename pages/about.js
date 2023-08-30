import React from "react";
import Navbar from "../components/Navbar";
import AboutComponent from "../components/About";
import Background from "@/components/Background";
const About = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <AboutComponent />
      <AboutComponent />
      <AboutComponent />
      <AboutComponent />
    </div>
  );
};

export default About;
