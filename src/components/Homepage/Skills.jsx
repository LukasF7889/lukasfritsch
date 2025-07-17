import { fullstackSkills, uxSkills } from "../../data/skills";
import Skillblock from "../../components/Skillblock";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center w-full px-2 md:w-[65%] mx-auto text-white"
    >
      <h2 className="mt-16">My Skills</h2>
      <h4 className="text-center mb-2">
        From idea to UX: I know how to craft intuitive, engaging digital
        products
      </h4>
      <Skillblock
        title={"Fullstack Web Development"}
        skills={fullstackSkills}
        borderColor="border-lf-orange"
      />
      <Skillblock
        title={"User Experience Design"}
        skills={uxSkills}
        borderColor="border-lf-yellow"
      />
    </section>
  );
};
export default Skills;
