import ReactPlayer from "react-player";
import lfBg from "../../assets/lf-bg.jpg";
import lfBgVid from "../../assets/lf-bg-vid.mp4";

const Header = () => {
  return (
    <header
      id="header"
      className="relative h-[78vh] overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${lfBg})` }}
    >
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-white/10 backdrop-blur-[3px] z-10"></div>
        <ReactPlayer
          src={lfBgVid}
          playing={true}
          muted={true}
          loop={true}
          controls={false}
          // style={{ width: "100vw", height: "auto", aspectRatio: "16/9" }}
          width="100%"
          height="100%"
          className="absolute top-0 left-0 object-cover"
        />
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
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none z-20 bg-gradient-to-t from-lf-black to-transparent"></div>
    </header>
  );
};

export default Header;
