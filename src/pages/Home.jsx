import Header from "../components/Homepage/Header.jsx";
import AboutMe from "../components/Homepage/AboutMe.jsx";
import References from "../components/Homepage/References.jsx";
import Skills from "../components/Homepage/Skills.jsx";
import { useState } from "react";
import ReferenceModal from "../components/ReferenceModal.jsx";

const Home = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <ReferenceModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        selectedProject={selectedProject}
      />
      <section className="bg-lf-black">
        {/* Header Section */}
        <Header />

        {/* Skills Section */}
        <div className="w-[95%] md:w-[80%] max-w-[1028px] mx-auto">
          <Skills />
        </div>
      </section>

      <section className="bg-gradient-to-br from-lf-black via-lf-black to-lf-pink pt-12">
        <div className="w-[95%] md:w-[80%] max-w-[1028px] mx-auto">
          {/* About Me Section */}
          <AboutMe />
          {/* References Section */}
          <References
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setSelectedProject={setSelectedProject}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
