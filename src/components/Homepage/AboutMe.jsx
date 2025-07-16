import TimelineEntry from "../TimelineEntry";

import mePic from "../../assets/me.jpg";
import rocket from "../../assets/rocket.png";

const AboutMe = () => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center w-[80vw] bg-white mx-auto shadow-2xl rounded-xl px-20 pt-8 pb-12 ">
        <h2>About me</h2>
        <h4 className="text-center mb-8">
          Since I was a child I've been passionate about creating...
        </h4>

        {/* About Me Text Section */}
        <section className="flex gap-14 justify-center">
          <figure className="w-1/3 md:h-80 md:w-80 flex-shrink-0">
            <img
              src={mePic}
              alt="That's me!"
              className="rounded-full w-full h-full object-cover"
            />
          </figure>
          <article className="flex flex-col gap-2">
            <p>
              ...from making amateur movies, small games or websites for friends
              to developing elaborate digital projects while studying Multimedia
              Production. Working as a concept developer for websites, apps and
              games, I've developed a deep understanding of how to create fun,
              engaging and intuitive experiences for users.
            </p>
            <p>
              Wanting to be even more hands-on in building these experiences, I
              decided to dive into full stack web development and found a new
              passion. I now build dynamic, intuitive applications, combining
              creativity with problem solving – whether in React & Tailwind on
              the front end, or structuring efficient back ends.
            </p>
            <p>
              Seeing ideas come to life excites me, and I’m always looking for
              new challenges and the chance to build something amazing.
            </p>
            <div>
              Stuff I also love:
              <div className="flex gap-1 flex-wrap">
                <p>🐶 My Dog |</p>
                <p>🎲 Board Games |</p>
                <p>📜 Pen & Paper Roleplay Games</p>
                <p>🎸 Playing bass guitar</p>
              </div>
            </div>
          </article>
        </section>

        {/* My Journey Section */}
        <section>
          <h4 className="text-center mb-8">My Journey</h4>
          <div className="relative w-full max-w-3xl mx-auto">
            {/* Rocket */}
            <img
              src={rocket}
              alt="Rocket"
              className="sticky left-1/2 top-[50vh] w-20 z-10 -translate-x-1/2"
              //   style={{ transform: `translate(0%, ${rocketOffset}px)` }}
            />
            {/* Dashed line */}
            <div className="absolute left-1/2 top-0 border-l-2 w-1 h-full border-dashed -translate-x-1/2" />

            {/* Timeline Entries */}
            <div className="flex flex-col items-center gap-20 ">
              <TimelineEntry>
                <div className="bg-white p-4 shadow-md rounded-md max-w-xs transition-all duration-700 translate-y-8 animate-fade-in-on-scroll">
                  <p className="font-bold">1989</p>
                  <p>BORN</p>
                </div>
              </TimelineEntry>

              <TimelineEntry>
                <div className="bg-white p-4 shadow-md rounded-md max-w-xs transition-all duration-700 translate-y-8 animate-fade-in-on-scroll">
                  <p className="font-bold">1989</p>
                  <p>BA Multimedia Production at Fachhochschule Kiel</p>
                </div>
              </TimelineEntry>

              <TimelineEntry>
                <div className="bg-white p-4 shadow-md rounded-md max-w-xs transition-all duration-700 translate-y-8 animate-fade-in-on-scroll">
                  <p className="font-bold">2012–2020</p>
                  <p>Digital Concept Developer at Pop Rocket Labs GmbH</p>
                </div>
              </TimelineEntry>

              <TimelineEntry>
                <div className="bg-white p-4 shadow-md rounded-md max-w-xs transition-all duration-700 translate-y-8 animate-fade-in-on-scroll">
                  <p className="font-bold">2025</p>
                  <p>
                    Fullstack Web & App Development Bootcamp at WBS Coding
                    School
                  </p>
                </div>
              </TimelineEntry>

              <div className="flex h-[12vh]"></div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AboutMe;
