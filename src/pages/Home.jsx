import { fullstackSkills, uxSkills } from "../data/skills";
import Skillblock from "../components/Skillblock";
import ReactPlayer from "react-player";

import lfBg from "../assets/lf-bg.png";
import lfBgVid from "../assets/lf-bg-vid.mp4";

const Home = () => {
  return (
    <div className="bg-black">
      <header
        className="w-full bg-red-200 h-[75vh] overflow-hidden"
        // style={{ backgroundImage: `url(${lfBg})` }}
      >
        <div className="relative w-full h-[75vh] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10"></div>
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
          <h1 className="rounded-full bg-white shadow-2xl py-3 px-6">
            Lukas Fritsch
          </h1>
          <div className="flex gap-2">
            <div>(Junior) Fullstack Developer</div>
            <div>UX Designer</div>
            <div>Gamification Enthusiast</div>
          </div>
        </div>
      </header>

      <div className="flex flex-col items-center w-full px-2 md:w-[80%] mx-auto bg-black text-white">
        <h2>My Skills</h2>
        <h3>
          From idea to UX: I know how to craft intuitive, engaging digital
          products
        </h3>
        <Skillblock
          title={"Fullstack Web Development"}
          skills={fullstackSkills}
        />
        <Skillblock title={"User Experience Design"} skills={uxSkills} />
      </div>

      <div className="bg-black pt-12">
        <div className="bg-white w-[85vw] mx-auto shadow-2xl rounded-md px-3 py-3 flex flex-col items-center justify-center">
          <h2>About me</h2>
          <div className="flex gap-6">
            <div className="w-1/3 h-80">
              <div className="rounded-full"></div>
            </div>
            <div className="w-2/3">
              <p>
                Since I was a child I've been passionate about creating — from
                making amateur movies, small games or websites for friends to
                developing elaborate digital projects while studying Multimedia
                Production. Working as a concept developer for websites, apps
                and games, I've developed a deep understanding of how to create
                fun, engaging and intuitive experiences for users
              </p>
              <p>
                Wanting to be even more hands-on in building these experiences,
                I decided to dive into full stack web development and found a
                new passion. I now build dynamic, intuitive applications,
                combining creativity with problem solving - whether in React &
                Tailwind on the front end, or structuring efficient back ends.
                Seeing ideas come to life excites me, and I’m always looking for
                new challenges and the chance to build something amazing
              </p>
              <p>
                Stuff I also love: My Dog | Board Games, Pen & Paper Roleplay
                Games Playing bass guitar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
