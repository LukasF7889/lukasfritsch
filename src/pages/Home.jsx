import { fullstackSkills, uxSkills } from "../data/skills";
import Skillblock from "../components/Skillblock";

import Header from "../components/Homepage/Header.jsx";
import AboutMe from "../components/Homepage/AboutMe.jsx";
import References from "../components/Homepage/References.jsx";

const Home = () => {
  return (
    <>
      <div className="bg-lf-black">
        {/* Header Section */}
        <Header />

        {/* Skills Section */}
        <div className="flex flex-col items-center w-full px-2 md:w-[65%] mx-auto text-white">
          <h2 className="mt-16">My Skills</h2>
          <h4 className="text-center mb-2">
            From idea to UX: I know how to craft intuitive, engaging digital
            products
          </h4>
          <Skillblock
            title={"Fullstack Web Development"}
            skills={fullstackSkills}
            borderColor="border-lf-orange"
          />
          <Skillblock
            title={"User Experience Design"}
            skills={uxSkills}
            borderColor="border-lf-yellow"
          />
        </div>
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
