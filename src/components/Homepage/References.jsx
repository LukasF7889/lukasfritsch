import displayChips from "../../utils/displayChips";
import refElphi from "../../assets/ref-elphi.png";
import icPerson from "../../assets/ic-person.svg";
import icAttraction from "../../assets/ic-attraction.svg";
import icCV from "../../assets/ic-cv.svg";

const References = () => {
  const referenceData = [
    {
      id: 1,
      title: "Plothook",
      subtitle: "A platform to find new friends to play tabletop games with!",
      highlights: [
        "⭐ Chosen by a jury as a highlight graduation project and presented to over 160 people",
      ],
      challenge: "The challenge was to blabla",
      approach: "The approach was to blabla",
      achievement: "What was achieved",
      tags: [
        "React",
        "TailwindCSS",
        "MongoDB",
        "Express",
        "JavaScript",
        "UX Design",
        "Wireframing",
        "Webdesign",
      ],
      image: refElphi,
    },
    {
      id: 2,
      title: "Web Development Studies",
      subtitle:
        "Different small projects I did to study and learn React, JavaScript and more",
      highlights: [""],
      challenge: "The challenge was to blabla",
      approach: "The approach was to blabla",
      achievement: "What was achieved",
      tags: [
        "React",
        "TailwindCSS",
        "MongoDB",
        "Express",
        "JavaScript",
        "UX Design",
        "Wireframing",
        "Webdesign",
      ],
      image: refElphi,
    },

    {
      id: 3,
      title: "User Experience Showcase",
      subtitle: "A collection of my UX & Gamification Works",
      highlights: [""],
      challenge: "The challenge was to blabla",
      approach: "The approach was to blabla",
      achievement: "What was achieved",
      tags: [
        "Creative Concept",
        "UX Design",
        "Gamification",
        "Wireframing",
        "Ideation",
        "Narrative Design",
        "Prototyping",
      ],
      image: refElphi,
    },
    {
      id: 4,
      title: "Elbphilharmonie Escape Room",
      subtitle:
        "Browser-based Escape Game combining puzzles, story and backstage insights",
      highlights: [""],
      challenge: "The challenge was to blabla",
      approach: "The approach was to blabla",
      achievement: "What was achieved",
      tags: ["Game Design", "Gamification", "UX Design", "Wireframing"],
      image: refElphi,
    },
    {
      id: 5,
      title: "PETA Tapestories",
      subtitle: "An interactive audio thriller for Amazon Alexa",
      highlights: [
        "⭐ Nominated for Deutscher Computerspielepreis and Silver Max Award",
      ],
      challenge: "The challenge was to blabla",
      approach: "The approach was to blabla",
      achievement: "What was achieved",
      tags: ["Game Design", "UX Design", "Gamification", "Wireframing"],
      image: refElphi,
    },
  ];

  return (
    <section className="flex flex-col items-center w-full px-2 md:w-[80%] mx-auto text-white mt-12">
      <h2>My Projects</h2>
      <h4 className="text-center mb-8">
        An excerpt of current and highlight work I did!
      </h4>
      {referenceData.map((e) => (
        <div
          key={e.id}
          className="flex justify-start rounded-md  bg-white/10 backdrop-blur-[3px] w-full mb-6 reference"
        >
          {e.id % 2 != 0 && (
            <figure className="w-[30%]">
              <img
                src={e.image}
                alt={e.title}
                className="h-full object-cover rounded-l-md"
              />
            </figure>
          )}
          <div className="flex flex-col px-12 py-8 w-[70%]">
            <h3>{e.title}</h3>
            <h5>{e.subtitle}</h5>
            <div className="mt-2">{displayChips(e.tags, "lf-chips-small")}</div>
            <p className="mt-2">
              {e.highlights.map((hl) => (
                <p>{hl}</p>
              ))}
            </p>
            <a className="flex gap-2">
              <h5 className="underline text-[1rem]">Open Details</h5> →
            </a>
          </div>
          {e.id % 2 === 0 && (
            <figure className="w-[30%] ml-auto">
              <img
                src={e.image}
                alt={e.title}
                className="h-full w-full object-cover rounded-r-md"
              />
            </figure>
          )}
        </div>
      ))}
      <div className="mt-12 mb-20">
        <h3 className="text-center">Find more details</h3>
        <div className="flex gap-2 mt-4">
          <button className="primary-btn flex gap-2">
            <img src={icPerson} />
            LinkedIn
          </button>
          <button className="primary-btn flex gap-2">
            <img src={icCV} />
            My CV (PDF)
          </button>
          <button className="primary-btn flex gap-2">
            <img src={icAttraction} />
            UX Showcase (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default References;
