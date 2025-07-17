import { fullstackSkills, uxSkills } from "../data/skills";
import Skillblock from "../components/Skillblock";

import Header from "../components/Homepage/Header.jsx";
import AboutMe from "../components/Homepage/AboutMe.jsx";
import References from "../components/Homepage/References.jsx";
import Skills from "../components/Homepage/Skills.jsx";

const Home = () => {
  return (
    <>
      <div className="bg-lf-black">
        {/* Header Section */}
        <Header />

        {/* Skills Section */}
        <Skills />
      </div>
      <div className="bg-gradient-to-br from-lf-black via-lf-black to-lf-pink pt-12">
        {/* About Me Section */}
        <AboutMe />

        {/* References Section */}
        <References />
      </div>
    </>
  );
};

export default Home;
