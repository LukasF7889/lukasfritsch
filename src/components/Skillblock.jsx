import displayChips from "../utils/displayChips";

const Skillblock = ({ title, skills, borderColor }) => {
  return (
    <div className="flex flex-col items-center my-2">
      <div className="flex">
        <h5 className="relative top-4 bg-lf-black text-white px-2 py-0 ml-4 mb-2 ">
          {title}
        </h5>
      </div>

      <div
        className={`flex border-3 w-full px-3
        py-5 ${borderColor} rounded-xl`}
      >
        {displayChips(skills)}
      </div>
    </div>
  );
};

export default Skillblock;
