import mePic from "../../assets/me.jpg";
import MyJourney from "./MyJourney";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center justify-center w-[95vw] md:w-[80vw] bg-white mx-auto shadow-2xl rounded-xl px-[5%] md:px-20 pt-8 pb-12 ">
        <h2>About me</h2>
        <h4 className="text-center mb-8">
          Since I was a child I've been passionate about creating...
        </h4>

        {/* About Me Text Section */}
        <section className="flex flex-col md:flex-row gap-14 justify-center">
          <figure className="md:w-1/3 md:h-80  flex-shrink-0">
            <img
              src={mePic}
              alt="That's me!"
              className="rounded-full w-full h-full object-cover"
            />
          </figure>
          <article className="flex flex-col gap-2 text-center md:text-left">
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
            <div className="mt-4">
              Stuff I also love:
              <div className="flex gap-1 flex-wrap justify-center md:justify-start">
                <p>🐶 My Dog |</p>
                <p>🎲 Board Games |</p>
                <p>📜 Pen & Paper Roleplay Games</p>
                <p>🎸 Playing bass guitar</p>
              </div>
            </div>
          </article>
        </section>

        {/* My Journey Section */}
        <MyJourney />
      </div>
    </section>
  );
};

export default AboutMe;
