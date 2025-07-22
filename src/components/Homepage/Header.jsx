import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

import lfBg from "../../assets/lf-bg.jpg";
import lfBgVid from "../../assets/lf-bg-vid.mp4";
import envelope from "../../assets/envelope-icon.png";
import person from "../../assets/ic-person.svg";

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isDesktop = window.innerWidth >= 768 ? true : false;
      setIsDesktop(isDesktop);
    };

    checkScreenSize(); // run on first mount
    window.addEventListener("resize", checkScreenSize); //run on resize

    return () => window.removeEventListener("resize", checkScreenSize); //clear on unmount
  }, []);

  return (
    <header
      id="header"
      className="relative h-[78vh] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${lfBg})` }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-[3px] z-10"></div>
        {isDesktop && (
          <ReactPlayer
            src={lfBgVid}
            playing={true}
            muted={true}
            loop={true}
            controls={false}
            // style={{ width: "100vw", height: "auto", aspectRatio: "16/9" }}
            width="100%"
            height="100%"
            className="top-0 left-0 object-cover hidden md:block"
          />
        )}
      </div>

      <div className="absolute top-0 left-0 w-full h-[75vh] flex flex-col gap-2 justify-center items-center z-20">
        <div className="flex flex-col gap-2 max-w-[75%]">
          <h1 className="rounded-full bg-white/80 backdrop-blur-[6px] shadow-2xl py-0 md:px-16 tracking-widest text-center">
            Lukas Fritsch
          </h1>
          <div className="flex gap-2 flex-wrap justify-center">
            <div className="lf-chips !bg-lf-yellow/80 backdrop-blur-[6px]">
              (Junior) Fullstack Developer
            </div>
            <div className="lf-chips !bg-lf-yellow/80 backdrop-blur-[6px]">
              UX Designer
            </div>
            <div className="lf-chips !bg-lf-yellow/80 backdrop-blur-[6px]">
              Gamification Enthusiast
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-[8vh]">
            <a
              className="flex gap-2 primary-btn hover:text-lf-black"
              href="mailto:lukas_fritsch@hotmail.de"
              target="_blank"
            >
              <img
                src={envelope}
                alt="envelope"
                className="h-5 w-auto self-center"
              />
              lukas_fritsch@hotmail.de
            </a>
            <a
              className="flex gap-2 primary-btn hover:text-lf-black"
              href="https://www.linkedin.com/in/fritschlukas/"
              target="_blank"
            >
              <img
                src={person}
                alt="person"
                className="h-5 w-auto self-center"
              />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-20 bg-gradient-to-t from-lf-black to-transparent"></div>
    </header>
  );
};

export default Header;
