import displayChips from "../utils/displayChips";
import { useEffect } from "react";

import me from "../assets/me-cartoon.png";

const ReferenceModal = ({ modalOpen, setModalOpen, selectedProject }) => {
  const proj = selectedProject;

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    //cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalOpen]);

  if (!selectedProject) return;

  return (
    <>
      {modalOpen && (
        <div
          className={`fixed flex items-center top-0 left-0 h-full w-full bg-lf-black/90 z-100 overflow-y-auto`}
        >
          <div className="flex flex-col items-start  gap-2 bg-white rounded-lg w-[98vw] md:w-[75vw] mx-auto p-12 y-12 mt-60 mb-20">
            <div className="relative w-full flex justify-between text-2xl">
              <div>
                <h5 className="text-md bg-lf-yellow rounded-full px-3 py-1 flex gap-2 items-center">
                  <img
                    src={me}
                    alt="Cartoon version of me"
                    className="h-[50px] w-auto"
                  />
                  This modal is still under contruction!
                </h5>
              </div>
              <button
                className="cursor-pointer hover:text-lf-green hover:translate-y-1"
                onClick={() => setModalOpen(false)}
              >
                X
              </button>
            </div>
            <img
              src={proj.image}
              alt={`${proj.title} teaser`}
              className="rounded-md"
            />
            <h3>{proj.title}</h3>
            <h5>{proj.subtitle}</h5>
            <div className="mt-2">
              {displayChips(proj.tags, "lf-chips-small bg-lf-black text-white")}
            </div>
            <div className="mt-2">
              {proj.highlights.map((hl, index) => (
                <p key={index}>{hl}</p>
              ))}
            </div>
            <article className="flex flex-col gap-4 mt-8">
              <h5>About</h5>
              <p>{proj.challenge}</p>
              <p>{proj.approach}</p>
            </article>
            <a className="primary-btn mt-4" href={proj.link} target="_blank">
              {proj.cta}
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default ReferenceModal;
