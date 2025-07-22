import { referenceData } from "../../utils/referenceData";
import { Link, useLocation } from "react-router-dom";

import displayChips from "../../utils/displayChips";
import icPerson from "../../assets/ic-person.svg";
import icAttraction from "../../assets/ic-attraction.svg";
import icCV from "../../assets/ic-cv.svg";

const References = () => {
  const location = useLocation();

  return (
    <section
      id="projects"
      className="flex flex-col items-center w-full px-2 text-white mt-12"
    >
      <h2>My Projects</h2>
      <h4 className="text-center mb-8">
        An excerpt of current and highlight work I did!
      </h4>

      {/* Reference List */}
      {referenceData.map((e) => (
        <Link
          key={e.id}
          to={`/project/${e.id}`}
          state={{ backgroundLocation: location }}
          className="flex gap-2 justify-center md:justify-start hover:text-white"
        >
          <div className="flex flex-col md:flex-row md:items-stretch w-full mb-6 rounded-md bg-white/10 backdrop-blur-[3px] md:h-[340px] lg:h-[300px] cursor-pointer hover:bg-lf-pink/50 hover:translate-y-1 transition-all duration-300">
            {/* Image for mobile */}
            <figure className="w-full md:hidden flex-shrink-0">
              <img
                src={Array.isArray(e.image) ? e.image[0] : e.image}
                alt={e.title}
                className="w-full h--full object-cover rounded-t-md flex-shrink-0"
              />
            </figure>

            {/* Image on the left */}
            {e.id % 2 != 0 && (
              <figure
                className={`hidden ${e.color} md:flex w-[30%] h-full flex-shrink-0 rounded-l-md`}
              >
                <img
                  src={Array.isArray(e.image) ? e.image[0] : e.image}
                  alt={e.title}
                  className="h-full w-full object-contain"
                />
              </figure>
            )}
            <div className="flex flex-col px-4 md:py-4 gap-1 text-center md:text-left md:px-12 md:w-[70%]">
              <h3>{e.title}</h3>
              <h5>{e.subtitle}</h5>
              <div className="mt-2">
                {displayChips(e.tags, "lf-chips-small")}
              </div>
              <div className="mt-2">
                {e.highlights.map((hl, index) => (
                  <p key={index}>{hl}</p>
                ))}
              </div>
              <h5 className="underline text-[1rem] hover:text-lf-green">
                Open Details →
              </h5>
            </div>
            {e.id % 2 === 0 && (
              <figure
                className={`w-[30%] h-full ${e.color} ml-auto hidden md:block rounded-r-md`}
              >
                <img
                  src={Array.isArray(e.image) ? e.image[0] : e.image}
                  alt={e.title}
                  className="h-full w-full object-contain "
                />
              </figure>
            )}
          </div>
        </Link>
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
