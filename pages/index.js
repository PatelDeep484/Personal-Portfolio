// pages/Home.js

import Background from "@/components/Background";
import Navbar from "../components/Navbar";
import Hello from "../components/Hello";
const Home = () => {
  return (
    <div>
      <Background />
      <Navbar />
      <Hello />
      {/* Rest of the content */}

      <h1>DEEP PATEL</h1>
      {/* Your other content goes here */}
    </div>
  );
};

export default Home;
