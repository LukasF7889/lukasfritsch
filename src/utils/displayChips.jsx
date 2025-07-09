const displayChips = (input) => {
  if (!input || input.length < 1) {
    console.log("Display Chips input not correct");
    return;
  }

  return (
    <div className="flex gap-1 flex-wrap">
      {input?.map((e, index) => (
        <div
          key={index}
          className="bg-red-500 rounded-full text-black px-3 py-1 my-2 shadow"
        >
          {e}
        </div>
      ))}
    </div>
  );
};

export default displayChips;
