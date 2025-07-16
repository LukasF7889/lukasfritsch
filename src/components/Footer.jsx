import envelope from "../assets/envelope-icon.png";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-lf-black py-25">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-white">Let's get in contact!</h2>
        <div className="flex gap-4">
          <button className="flex gap-2 contact-btn">
            <img
              src={envelope}
              alt="envelope"
              className="h-5 w-auto self-center"
            />
            lukas_fritsch@hotmail.de
          </button>
          <button className="flex gap-2 contact-btn">
            <img
              src={envelope}
              alt="envelope"
              className="h-5 w-auto self-center"
            />
            linked.in/asjasjf
          </button>
        </div>
        <div className="flex justify-between w-100 text-white mt-6">
          <a>Back to top</a>
          <a>Skills</a>
          <a>Projects</a>
          <a>About Me</a>
        </div>
        <div className="flex  gap-6 text-white text-xs mt-4">
          <a>Imprint</a>
          <a>Data Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
