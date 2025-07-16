import ReactPlayer from "react-player";
import lfBg from "../../assets/lf-bg.png";
import lfBgVid from "../../assets/lf-bg-vid.mp4";

const Header = () => {
  return (
    <header
      className="relative w-full bg-red-200 h-[78vh] overflow-hidden"
      // style={{ backgroundImage: `url(${lfBg})` }}
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
          <h1 className="rounded-full bg-white/80 backdrop-blur-[6px] w-full shadow-2xl py-0 px-16 tracking-widest">
            Lukas Fritsch
          </h1>
          <div className="flex gap-2">
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
