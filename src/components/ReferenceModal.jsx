import displayChips from "../utils/displayChips";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { referenceData } from "../utils/referenceData";

import me from "../assets/me-cartoon.png";
import ImageSlider from "./ImageSlider";

const ReferenceModal = ({}) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const proj = referenceData.find((p) => p.id.toString() === id);

  if (!proj) return null;

  // Stop background scroll if modal is opened
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <>
      <div
        className={`fixed flex items-start top-0 left-0 h-full w-full  bg-lf-black/90 z-100 overflow-y-auto`}
      >
        <div className="flex flex-col text-center md:text-left md:items-start gap-2 bg-white rounded-lg w-[98vw] md:w-[75vw] mx-auto mt-6 md:mt-12 mb-20 max-w-[1200px]">
          <div className="relative w-full flex justify-end text-2xl px-8 pt-4">
            <button
              className="cursor-pointer hover:text-lf-green hover:translate-y-1"
              onClick={() => navigate(-1)}
            >
              X
            </button>
          </div>
          <ImageSlider img={proj.image} />
          <div className="p-12">
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
            <div className="flex justify-center md:justify-start gap-2 mt-4">
              <Link
                className="primary-btn border-lf-black border-1 bg-white"
                to="/"
              >
                Close
              </Link>
              <a className="primary-btn" href={proj.link} target="_blank">
                {proj.cta}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReferenceModal;
