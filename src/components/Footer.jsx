const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-lf-black py-25">
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-white">Let's get in contact!</h2>
        <div>
          <button className="contact-btn">lukas_fritsch@hotmail.de</button>
          <button className="contact-btn">linked.in/asjasjf</button>
        </div>
        <div className="flex justify-between w-100 text-white mt-6">
          <a>Back to top</a>
          <a>Skills</a>
          <a>Projects</a>
          <a>About Me</a>
        </div>
        <div className="flex  gap-6 text-white text-xs">
          <a>Imprint</a>
          <a>Data Privacy</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
