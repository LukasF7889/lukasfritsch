import TimelineEntry from "../TimelineEntry";
import rocket from "../../assets/rocket.png";

const MyJourney = () => {
  return (
    <section className="mt-12">
      <h4 className="text-center mb-8">My Journey</h4>
      <div className="relative w-full max-w-3xl mx-auto">
        {/* Rocket */}
        <img
          src={rocket}
          alt="Rocket"
          className="sticky left-1/2 top-[50vh] w-20 z-10 -translate-x-1/2"
        />
        {/* Dashed line */}
        <div className="absolute left-1/2 top-0 border-l-2 w-1 h-full border-dashed -translate-x-1/2" />

        {/* Stars */}
        {/* Sparkle Stars */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {[...Array(28)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 text-blue-800 animate-float opacity-70`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${Math.random() + 0.5}) rotate(${
                  Math.random() * 360
                }deg)`,
              }}
            >
              ★
            </div>
          ))}
        </div>

        {/* Timeline Entries */}
        <div className="flex flex-col items-center gap-20 ">
          <TimelineEntry>
            <p className="font-bold">1989</p>
            <h5>BORN</h5>
            <p>In Hamburg, Germany</p>
          </TimelineEntry>

          <TimelineEntry>
            <p className="font-bold">2010-2014</p>
            <h5>Apprenticeship & Project Manager for Market Research</h5>
            <p>At AnswerS GmbH</p>
          </TimelineEntry>

          <TimelineEntry>
            <p className="font-bold">2015-2018</p>
            <h5>BA in Multimedia Production</h5>
            <p>At Fachhochschule Kiel</p>
          </TimelineEntry>

          <TimelineEntry>
            <p className="font-bold">2017–2018</p>
            <h5>Game Designer (Working Student & Internship)</h5>
            <p>At Xyrality GmbH</p>
          </TimelineEntry>

          <TimelineEntry>
            <p className="font-bold">2012–2020</p>
            <h5>Digital Concept Developer</h5>
            <p>At Pop Rocket Labs</p>
          </TimelineEntry>

          <TimelineEntry>
            <p className="font-bold">2025</p>
            <h5>Fullstack Web & App Development Bootcamp</h5>
            <p>At WBS Coding School</p>
          </TimelineEntry>

          <div className="flex h-[12vh]"></div>
        </div>
      </div>
    </section>
  );
};
export default MyJourney;
