import displayChips from "../utils/displayChips";

const Skillblock = ({ title, skills }) => {
  return (
    <>
      <div className="flex">
        <p className="relative top-4 bg-black text-white px-2 py-0 ml-4 mb-2 ">
          {title}
        </p>
      </div>

      <div className="flex border-3 w-full px-2 border-amber-600 rounded-xl">
        {displayChips(skills)}
      </div>
    </>
  );
};

export default Skillblock;
