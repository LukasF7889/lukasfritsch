import refElphi from "../assets/ref-elphi.png";
import refPlothook from "../assets/ref-plothook.png";
import refUx from "../assets/ref-ux.png";
import refTapestories from "../assets/ref-tapestories.png";
import refWebdev from "../assets/re-webdev.png";

import refPlothook1 from "../assets/plothook1.png";
import refPlothook2 from "../assets/plothook2.png";
import refPlothook3 from "../assets/plothook3.png";
import refPlothook4 from "../assets/plothook4.png";
import refPlothook5 from "../assets/plothook5.png";
import RefElphi1 from "../assets/Elphi1.png";
import RefElphi2 from "../assets/Elphi2.png";
import RefElphi3 from "../assets/Elphi3.png";
import RefElphi4 from "../assets/Elphi4.png";
import RefElphi5 from "../assets/Elphi5.png";
import RefWebDev1 from "../assets/webDevStudies1.png";
import RefWebDev2 from "../assets/webDevStudies2.png";
import RefWebDev3 from "../assets/webDevStudies3.png";
import RefWebDev4 from "../assets/webDevStudies4.png";
import RefWebDev5 from "../assets/webDevStudies5.png";
import RefUX1 from "../assets/UX1.png";
import RefUX2 from "../assets/UX2.png";
import RefUX3 from "../assets/UX3.png";
import RefUX4 from "../assets/UX4.png";
import RefUX5 from "../assets/UX5.png";
import RefTapestories1 from "../assets/Tapestories1.png";
import RefTapestories2 from "../assets/Tapestories2.png";

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
    image: [
      refPlothook1,
      refPlothook2,
      refPlothook3,
      refPlothook4,
      refPlothook5,
    ],
    link: "https://plothook.onrender.com/",
    cta: "Open project website",
    color: "bg-[#02080D]",
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
    image: [RefWebDev1, RefWebDev2, RefWebDev3, RefWebDev4, RefWebDev5],
    link: "https://github.com/stars/LukasF7889/lists/reference-projects",
    cta: "To Github",
    color: "bg-[#471897]",
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
    image: [RefUX1, RefUX2, RefUX3, RefUX4, RefUX5],
    link: "/Fritsch-UX-Portfolio-2025.pdf",
    cta: "Open UX Showcase (PDF)",
    color: "bg-[#002266]",
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
    image: [RefElphi1, RefElphi2, RefElphi3, RefElphi4, RefElphi5],
    link: "https://www.elbphilharmonie.de/de/mediathek/digitales-escape-game/780",
    cta: "Play here!",
    color: "bg-[#FFFFFF]",
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
    image: [RefTapestories1, RefTapestories2],
    link: "https://www.peta.de/neuigkeiten/tapestories/",
    cta: "Open project",
    color: "bg-[#18385A]",
  },
];
