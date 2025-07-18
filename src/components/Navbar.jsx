import { useState, useEffect } from "react";

import icContact from "../assets/ic-mail-green.svg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let isScrolling = false;
    const handleScroll = () => {
      if (window.scrollY > 10) {
        isScrolling = true;
      } else {
        isScrolling = false;
      }

      setScrolled(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="sticky top-0 w-full z-50">
      <div className="absolute flex w-full justify-center md:justify-end md:pr-12 top-0 md:top-6 z-40">
        <div
          className={`flex justify-between flex-wrap gap-2 w-full md:w-auto md:rounded-full shadow-lg  px-10 py-4 md:px-6 md:py-2 transition-all duration-500 ${
            scrolled
              ? "bg-lf-black/80 backdrop-blur-[6px] text-white shadow-lf-pink/30"
              : "bg-lf-black text-white"
          }`}
        >
          <a onClick={() => (window.location.href = "#skills")}>Skills</a>
          <a onClick={() => (window.location.href = "#projects")}>Projects</a>
          <a onClick={() => (window.location.href = "#about")}>About Me</a>
          <a
            className="flex gap-2 text-lf-green ml-3"
            onClick={() => (window.location.href = "#contact")}
          >
            <img src={icContact} alt="envelope" />
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
