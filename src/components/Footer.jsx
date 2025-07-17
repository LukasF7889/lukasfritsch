import envelope from "../assets/envelope-icon.png";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex justify-center items-center bg-lf-black py-25"
    >
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-white">Let's get in contact!</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            className="flex gap-2 contact-btn"
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
            className="flex gap-2 contact-btn"
            href="https://www.linkedin.com/in/fritschlukas/"
            target="_blank"
          >
            <img
              src={envelope}
              alt="envelope"
              className="h-5 w-auto self-center"
            />
            LinkedIn
          </a>
        </div>
        <div className="flex flex-wrap gap-6 md:justify-between md:w-100 text-white mt-6">
          <a onClick={() => (window.location.href = "#header")}>Back to top</a>
          <a onClick={() => (window.location.href = "#skills")}>Skills</a>
          <a onClick={() => (window.location.href = "#projects")}>Projects</a>
          <a onClick={() => (window.location.href = "#about")}>About Me</a>
        </div>
        <div className="flex  gap-6 text-white text-xs mt-4">
          <a>Imprint</a>
          <a>Data Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
