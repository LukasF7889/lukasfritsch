import refElphi from "../assets/ref-elphi.png";
import refPlothook from "../assets/ref-plothook.png";
import refUx from "../assets/ref-ux.png";
import refTapestories from "../assets/ref-tapestories.png";
import refWebdev from "../assets/re-webdev.png";

export const referenceData = [
  {
    id: 1,
    title: "Plothook",
    subtitle: "A platform to find new friends to play tabletop games with!",
    highlights: [
      "⭐ Chosen by a jury as a highlight graduation project and presented to over 160 people",
    ],
    challenge:
      "Plothook is my graduation project: a full-stack web platform that helps tabletop RPG players connect based on compatibility and location. The frontend is built with React and styled using Tailwind CSS and daisyUI for a clean and responsive user experience. On the backend, Plothook uses Express.js and MongoDB to handle data and user management. ",
    approach:
      "A custom-built matching algorithm calculates how well players fit together based on their preferences, playstyles, and availability. Advanced filtering and search features—including geolocation-based radius search powered by the OpenCage API—allow users to find exactly the kind of group they’re looking for. Additionally, the platform integrates the OpenAI API to generate personalized suggestions, such as group names or character ideas, enhancing the onboarding and creation experience. Plothook combines smart matching with playful creativity to make finding the perfect TTRPG group easier and more engaging. This project was created within 3 weeks with a group of 3. We are planning on releasing the web app in the upcoming months.",
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
    image: refPlothook,
    link: "https://plothook.onrender.com/",
    cta: "Open project website",
  },
  {
    id: 2,
    title: "Web Development Studies",
    subtitle:
      "Different small projects I did to study and learn React, JavaScript and more",
    highlights: [""],
    challenge:
      "During my web development bootcamp, I built several full-stack projects to deepen my understanding of both frontend and backend technologies. Highlights include a mock e-commerce shop with a dynamic cart system, and a mood tracker diary where users can create, edit, and manage daily mood entries with visual summaries.",
    approach: "",
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
    image: refWebdev,
    link: "https://github.com/stars/LukasF7889/lists/reference-projects",
    cta: "To Github",
  },

  {
    id: 3,
    title: "User Experience Showcase",
    subtitle: "A collection of my UX & Gamification Works",
    highlights: [""],
    challenge:
      "Explore a selection of my UX projects and get insights into my user-centered design process. My work combines strategic thinking with playful, engaging interfaces – always with the user in mind. I’ve designed complex user journeys for systems like room booking platforms and even an interactive web show for SWR. My projects have been recognized internationally, including a German Web Award 2023 and an Honorable Mention at the Awwwards 2022 for the agency website www.poprocket.com.",
    approach: "",
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
    image: refUx,
    link: "/Fritsch-UX-Portfolio-2025.pdf",
    cta: "Open UX Showcase (PDF)",
  },
  {
    id: 4,
    title: "Elbphilharmonie Escape Room",
    subtitle:
      "Browser-based Escape Game combining puzzles, story and backstage insights",
    highlights: ["⭐ Won a Web Excellency Award for Gamification"],
    challenge:
      "For Hamburg Music I've worked on the Browser-bases Elbphilharmonie Escape Room! I was involved in the whole creative process from very first ideas, to the whole story and puzzle concepts as well as UX wireframes. ",
    approach:
      "The main idea was to make a game which everyone would be able to play and finish but still delivering a feeling of challenge and interesting puzzles. While playing, users should experience the Elbphilharmonie backstage and see how a show comes together. It was so much fun to work on!",
    achievement: "What was achieved",
    tags: ["Game Design", "Gamification", "UX Design", "Wireframing"],
    image: refElphi,
    link: "https://www.elbphilharmonie.de/de/mediathek/digitales-escape-game/780",
    cta: "Play here!",
  },
  {
    id: 5,
    title: "PETA Tapestories",
    subtitle: "An interactive audio thriller for Amazon Alexa",
    highlights: [
      "⭐ Nominated for Deutscher Computerspielepreis and Silver Max Award",
    ],
    challenge:
      "A thrilling interactive audioplay for Amazon Alexa. Through voice commands you have to help someone break put of an hostile environment. Make decisions, explore your surroundings and see how the story unfolds. It was a challenging experience to tell this emotional story and I am very proud on what we achieved!",
    approach: "",
    achievement: "What was achieved",
    tags: ["Game Design", "UX Design", "Gamification", "Wireframing"],
    image: refTapestories,
    link: "https://www.peta.de/neuigkeiten/tapestories/",
    cta: "Open project",
  },
];
