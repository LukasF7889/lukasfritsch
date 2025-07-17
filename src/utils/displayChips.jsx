const displayChips = (input, tagClass) => {
  if (!input || input.length < 1) {
    console.log("Display Chips input not correct");
    return;
  }

  return (
    <div className="flex gap-2 flex-wrap">
      {input?.map((e, index) => (
        <div key={index} className={tagClass}>
          {e}
        </div>
      ))}
    </div>
  );
};

export default displayChips;
