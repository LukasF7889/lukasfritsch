const displayChips = (input, tagClass) => {
  if (!input || input.length < 1) {
    console.log("Display Chips input not correct");
    return;
  }

  return (
    <div className="flex gap-2 flex-wrap justify-center md:justify-start">
      {input?.map((e, index) => (
        <div key={index} className={`${tagClass} shadow-lg`}>
          {e}
        </div>
      ))}
    </div>
  );
};

export default displayChips;
