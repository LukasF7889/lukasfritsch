import { referenceData } from "../../utils/referenceData";

import displayChips from "../../utils/displayChips";
import icPerson from "../../assets/ic-person.svg";
import icAttraction from "../../assets/ic-attraction.svg";
import icCV from "../../assets/ic-cv.svg";
import me from "../../assets/me-cartoon.png";

const References = ({ modalOpen, setModalOpen, setSelectedProject }) => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center w-full px-2 md:w-[80%] mx-auto text-white mt-12"
    >
      <h2>My Projects</h2>
      <h4 className="text-center mb-2">
        An excerpt of current and highlight work I did!
      </h4>
      <div>
        <h5 className="text-md bg-lf-yellow text-lf-black rounded-full px-3 py-1 flex gap-2 mb-8 items-center">
          <img
            src={me}
            alt="Cartoon version of me"
            className="h-[50px] w-auto"
          />
          This section is still under contruction!
        </h5>
      </div>
      {/* Reference List */}
      {referenceData.map((e) => (
        <div
          key={e.id}
          className="flex flex-col md:flex-row items-stretch w-full mb-6 rounded-md bg-white/10 backdrop-blur-[3px] md:h-[280px]"
        >
          {/* Image for mobile */}
          <figure className="w-full h-full md:hidden flex-shrink-0">
            <img
              src={e.image}
              alt={e.title}
              className="w-full object-cover rounded-t-md flex-shrink-0"
            />
          </figure>

          {/* Image on the left */}
          {e.id % 2 != 0 && (
            <figure className="hidden md:flex w-[30%] h-full flex-shrink-0">
              <img
                src={e.image}
                alt={e.title}
                className="h-full w-full object-cover rounded-l-md"
              />
            </figure>
          )}
          <div className="flex flex-col px-4 py-4 w-[85%] md:px-12 md:py-8 md:w-[70%]">
            <h3>{e.title}</h3>
            <h5>{e.subtitle}</h5>
            <div className="mt-2">{displayChips(e.tags, "lf-chips-small")}</div>
            <div className="mt-2">
              {e.highlights.map((hl, index) => (
                <p key={index}>{hl}</p>
              ))}
            </div>
            <a
              className="flex gap-2 justify-center md:justify-start"
              onClick={() => {
                setSelectedProject(e), setModalOpen(true);
              }}
            >
              <h5 className="underline text-[1rem]">Open Details</h5> →
            </a>
          </div>
          {e.id % 2 === 0 && (
            <figure className="w-[30%] h-full ml-auto hidden md:block">
              <img
                src={e.image}
                alt={e.title}
                className="h-full w-full object-cover rounded-r-md"
              />
            </figure>
          )}
        </div>
      ))}

      {/* Links at the end */}
      <div className="mt-12 mb-20">
        <h3 className="text-center">Find more details</h3>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            className="primary-btn flex gap-2"
          >
            <img src={icPerson} />
            LinkedIn
          </a>
          <a
            target="_blank"
            href="/Fritsch-CV-2025.pdf"
            download
            className="primary-btn flex gap-2"
          >
            <img src={icCV} />
            My CV (PDF)
          </a>
          <a
            target="_blank"
            href="/Fritsch-UX-Portfolio-2025.pdf"
            download
            className="primary-btn flex gap-2"
          >
            <img src={icAttraction} />
            UX Showcase (PDF)
          </a>
        </div>
      </div>
    </section>
  );
};

export default References;
